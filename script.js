// Mock database for balance information
let balances = {
        "user@example.com": 5000.00,
    "BHARAT_246065@saitm.ac.in":10000.00
    };
    
    function checkBalance(id) {
        if (balances[id] !== undefined) {
            return `Your balance is: $${balances[id].toFixed(2)}`;
        } else {
            return "Account not found.";
        }
    }
    
    function deposit(id, amount) {
        if (balances[id] !== undefined) {
            balances[id] += amount;
            return `Deposit successful. Your new balance is: $${balances[id].toFixed(2)}`;
        } else {
            return "Account not found.";
        }
    }
    
    function withdraw(id, amount) {
        if (balances[id] !== undefined) {
            if (balances[id] >= amount) {
                balances[id] -= amount;
                return `Withdrawal successful. Your new balance is: $${balances[id].toFixed(2)}`;
            } else {
                return "Insufficient balance.";
            }
        } else {
            return "Account not found.";
        }
    }
    
    function bankingSystem() {
        const id = document.getElementById("email").value;
        const choice = document.getElementById("choice").value;
        const amountInput = document.getElementById("amount");
        let amount = parseFloat(amountInput.value);
        let result = "";
    
        if (choice === "1") {
            result = checkBalance(id);
        } else if (choice === "2") {
            result = deposit(id, amount);
        } else if (choice === "3") {
            result = withdraw(id, amount);
        } else {
            result = "Invalid choice.";
        }
    
        document.getElementById("result").innerText = result;
        amountInput.value = "";  // Clear amount field after operation
    }
    
    function toggleAmountField() {
        const choice = document.getElementById("choice").value;
        const amountInputDiv = document.getElementById("amount-input");
    
        if (choice === "2" || choice === "3") {
            amountInputDiv.style.display = "block";
        } else {
            amountInputDiv.style.display = "none";
        }
    }
    