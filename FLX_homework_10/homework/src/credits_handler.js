function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let userTime = new Date().toLocaleString('en-GB');

    function history(operationType, credits, operationTime) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    return {
        getCardOptions() {
            return { key, balance, transactionLimit, historyLogs };
        },

        putCredits(amountOfMoney) {
            balance += amountOfMoney;
            history('Received credits', amountOfMoney, userTime)

        },
        takeCredits(amountOfMoney) {
            if (balance < amountOfMoney) {
                console.error('You do not have enough money');
            } else {
                balance -= amountOfMoney;
                history('Withdrawal of credits', amountOfMoney, userTime)
            }
        },

        setTransactionLimit(amountOfMoney) {
            transactionLimit = amountOfMoney;
            history('Transaction limit change', amountOfMoney, userTime)

        },

        transferCredits(amountOfMoney, user) {
            const tax = 0.005;
            let amountWithTax = amountOfMoney * tax + amountOfMoney;
            if (balance < amountWithTax) {
                console.error('You do not have enough money')
            } else if (transactionLimit < amountWithTax) {
                console.error('Your transaction limit is too low')
            } else {
                this.takeCredits(amountWithTax);
                user.putCredits(amountOfMoney);
            }
        }
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];
        this.cardLimit = 3;
    }

    addCard() {
        if (this.card.length < this.cardLimit) {
            this.card.push(userCard(this.card.length + 1))
        } else {
            console.log('You reached the maximum number of cards')
        }
    }

    getCardByKey(key) {
        return this.card[key - 1];
    }
}