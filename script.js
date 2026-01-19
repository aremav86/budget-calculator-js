const button = document.getElementById("calcBtn")

const incomeInput = document.getElementById("incomeInput")

const expensesInput = document.getElementById("expensesInput")

const error =  document.getElementById("error")

const result = document.getElementById("result")

function resetUI() {
  result.textContent = "";
  error.textContent = "";
  result.classList.remove("success", "warning", "error");
  error.classList.remove("error");
}


function checkStatus (balance) {
    if(balance > 0){return "success"}
    if(balance === 0){return "warning"}
    if(balance < 0){return "error"}
    return"result"
}

const messages = {
  success: (v) => `Остаток: ${v} €`,
  warning: () => `Вы вышли в ноль`,
  error: (v) => `Перерасход: ${v} €`,
};


button.addEventListener("click", function () {


    const income = Number(incomeInput.value);
    const expenses = Number(expensesInput.value);

    resetUI();

    if (incomeInput.value.trim() === "" || expensesInput.value.trim() === ""){
        error.textContent = "Введите доход и расходы"
        error.classList.add("error")
        result.textContent = ""
        return
    }

    if(Number.isNaN(income) || Number.isNaN(expenses) ){
        error.textContent = "Введите коректные числа"
        error.classList.add("error")
        result.textContent = ""
        return
    }

    const balance = income - expenses 

    const status = checkStatus(balance)

   const displayBalance = status === "error" ? Math.abs(balance) : balance

   result.textContent = messages[status](displayBalance);

   result.classList.add(status)

});
