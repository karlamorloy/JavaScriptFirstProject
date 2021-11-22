/*

function TipoGasto (nombre, fecha, categoria, periodicidad) { //objeto para poder ingresar tipos de gastos
    this.nombre = nombre.toLowerCase();
    this.fecha = fecha;
    this.categoria = categoria.toLowerCase();
    this.periodicidad = periodicidad.toLowerCase();
};

  let inputNombre = "";
  let inputFecha = "";
  let inputCategoria = "";
  let inputPeriodicidad = "";

  const gastosIngresados = [];
  
  let registroGasto = prompt("Quiere registrar un gasto: si / no");
  
while (registroGasto != "no") {
  
    inputNombre = prompt("ingrese nombre que identifique el gasto");
    inputFecha = prompt("ingrese fecha en la que realizó el gasto (dd/mm/aaaa)");
    inputCategoria = prompt("ingrese la categoría del gasto");
    inputPeriodicidad = prompt("ingrese cada cuanto hace este gasto (diario, quincenal, mensual, anual, único");
    const gasto1 = new TipoGasto (inputNombre, inputFecha, inputCategoria, inputPeriodicidad);
  
    gastosIngresados.push(gasto1);
  
    registroGasto = prompt("Quiere registrar otro gasto si / no");
  }

  console.table(gastosIngresados);


//esta parte es para calcular los gastos y comparar con el ingreso

let egreso;
let gastoAcumulado;
let cantidad; 
let gasto;
let ingresarMas;
let balance;

let suma = (a,b) => { return a+b};
let resta = (a,b) => { return a-b};
let multiplicar = (a,b) => {return a*b};

let ingreso = parseFloat(prompt("Coloque cantidad de dinero ingresada en el mes"));

do {
    egreso = parseFloat(prompt("Coloque cantidad de dinero gastada"));
    cantidad = parseFloat(prompt("Coloque cantidad veces que hizo este gasto en el mes"));
    gasto = multiplicar(egreso, cantidad);
    gastoAcumulado =+ gasto;
    ingresarMas = prompt("Tiene otro dato que ingresar? s/n");

} while (ingresarMas != "n");

alert("El total gastado fue de " + gastoAcumulado);

balance = resta(ingreso, gastoAcumulado);

alert("El dinero restante disponible es " + balance);

///////// entrega 8 DOM

const expenses = [{ id: 1,  nombre: "Insumos", precio: 10000 },
                  {  id: 2,  nombre: "Marketing", precio: 5000 },
                  {  id: 3,  nombre: "Nomina"  , precio: 4000},
                  {  id: 4,  nombre: "Otros" , precio: 1000}];

for (const expense of expenses) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p> ID: ${expense.id}</p>
                            <h3>  Producto: ${expense.nombre}</h3>
                            <b> $ ${expense.precio}</b>`;
    document.body.appendChild(contenedor);
}

*/

//second try

/*

class IncomeObject {
  constructor (incomeType, incomeAmount, incomeDate){
    this.incomeType = incomeType;
    this.incomeAmount = parseFloat(incomeAmount);
    this.incomeDate = incomeDate;
  }
}

class ExpenseObject {
  constructor (expenseType, expenseAmount, expenseDate){
    this.expenseType = expenseType.toLowerCase();
    this.expenseAmount = parseFloat(expenseAmount);
    this.expenseDate = expenseDate;
  }
}

const income = []; //array for income storage

const expense = []; //array for expense storage

//variables for html form access

let newIncomeType = document.getElementById("income"); 
let newIncomeAmount = document.getElementById("incomeAmount");
let newIncomeDate = document.getElementById("incomeDate");
let newExpenseType = document.getElementById("expense");
let newExpenseAmount = document.getElementById("expenseAmount");
let newExpenseDate = document.getElementById("expenseDate");


//functions for getting imput data

function incomeAdd () {
  let incomeTypeAdd = newIncomeType.value;
  let incomeAmountAdd = newIncomeAmount.value;
  let incomeDateAdd = newIncomeDate.value;
}

//events for getting input data

let incomeTypeVar = newIncomeType.addEventListener("input", incomeAdd);
let incomeAmountVar = newIncomeAmount.addEventListener("input", incomeAdd);
let incomeDateVar = newIncomeDate.addEventListener("input", incomeAdd);  



income.push(new IncomeObject(incomeTypeVar, incomeAmountVar, incomeDateVar));

console.dir(income);


//variables for adding income and expenses total

let incomeSum = document.getElementById("incomeTotal");
let expenseSum = document.getElementById("expenseTotal");
let balance = document.getElementById("balance");

*/

class IncomeObject {
    constructor (incomeType, incomeAmount, incomeDate){
      this.incomeType = incomeType.toLowerCase();
      this.incomeAmount = parseFloat(incomeAmount);
      this.incomeDate = incomeDate;
    }
  }
  
  const income = []; //array for income storage
  
  
  let iForm = document.querySelector('#incomeForm');
  
  iForm.addEventListener("submit", incomeAdd);
  
  function incomeAdd(e){
    e.preventDefault();
  
    let newIncomeType = document.getElementById("income").value; 
    let newIncomeAmount = document.getElementById("incomeAmount").value;
    let newIncomeDate = document.getElementById("incomeDate").value;
  
    console.log(newIncomeType);
    console.log(newIncomeAmount);
    console.log(newIncomeDate);
  
    income.push(new IncomeObject(newIncomeType, newIncomeAmount, newIncomeDate));
  
    console.log(income);
  
  
  }
  
  class ExpenseObject {
    constructor (expenseType, expenseAmount, expenseDate){
      this.expenseType = expenseType.toLowerCase();
      this.expenseAmount = parseFloat(expenseAmount);
      this.expenseDate = expenseDate;
    }
  }
  
  const expense = []; //array for expense storage
  
  let eForm = document.querySelector('#expenseForm');
  
  eForm.addEventListener("submit", expenseAdd);
  
  function expenseAdd(e){
    e.preventDefault();
  
    let newExpenseType = document.getElementById("expense").value;
    let newExpenseAmount = document.getElementById("expenseAmount").value;
    let newExpenseDate = document.getElementById("expenseDate").value;
  
    console.log(newExpenseType);
    console.log(newExpenseAmount);
    console.log(newExpenseDate);
  
    expense.push(new ExpenseObject(newExpenseType, newExpenseAmount, newExpenseDate));
  
    console.log(expense);
  
  
  }
  
  /// show income and expense list
  
  const incomeSubmitButton = document.getElementById("incomeSubmitBtn");
  
  console.log(incomeSubmitButton);
  
  const incomeList = [];
  
  
  
  function showIncome () {
    const incomeSubmited = income.find(income => income.incomeType == this.incomeType)
  
    incomeList.push(incomeSubmited);
  
    let innerIncomeList = "";
  
    for (const income of incomeList){
      innerIncomeList += `<p>${income.incomeType} - ${income.incomeAmount} - ${income.incomeDate}</p>`;
    }
  
    const divIncome = document.getElementById("newIncome");
    divIncome.innerHTML = innerIncomeList;
  
  
  
  }
  
  /*for (const incomeBtn of incomeSubmitButton) {
    incomeBtn.addEventListener("click", showIncome);
  } */