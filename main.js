// INSERT
//Insert data on table

let progress1 = 98;
let progress2 = 90;
let progress3 = 90;
let progress4 = 79;
let progress5 = 82;
let progress6 = 76;
let progress7 = 100;
let progress8 = 73;
let progress9 = 81;
let progress10 = 100;


const name1 = `MQL4 Indicators`;
const name2 = `MQL5 Indicators`;
const name3 = `MQL4 Expert Advisors`;
const name4 = `MQL5 Expert Advisors`;
const name5 = `Python AI`;
const name6 = `JavaS AI`;
const name7 = `AI Handler`;
const name8 = `AI Library`;
const name9 = `SQL DataH`;
const name10 = `Brokers check`;



let carpet = [
    {Description : name1, 
     IssueDate : `Apr-23`, 
     LastUpdate: `30-Oct-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress1}%">${progress1}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/MQL4 Indicators.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name2, 
     IssueDate : `Apr-23`, 
     LastUpdate: `30-Oct-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress2}%">${progress2}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/MQL5 Indicators.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name3, 
     IssueDate : `Apr-23`, 
     LastUpdate: `10-May-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress3}%">${progress3}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/MQL4 Expert Advisors.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name4, 
     IssueDate : `Jul-23`, 
     LastUpdate: `26-Jul-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress4}%">${progress4}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/MQL5 Expert Advisors.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name5, 
     IssueDate : `Jul-23`, 
     LastUpdate: `29-Nov-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress5}%">${progress5}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/Python AI.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name6, 
     IssueDate : `Jul-23`, 
     LastUpdate: `31-Aug-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress6}%">${progress6}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/JavaS AI.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name7, 
     IssueDate : `Jul-23`, 
     LastUpdate: `26-Jul-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress7}%">${progress7}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/AI Handler.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name8, 
     IssueDate : `Jun-23`, 
     LastUpdate: `30-Nov-23`,
     Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress8}%">${progress8}%</div></div>`,
     Action : `<a class="btn btn-custom" href="./files/AI Library.rar" role="button"><img id="logo" src="download.svg" alt="">`},

     {Description : name9, 
      IssueDate : `Jul-23`, 
      LastUpdate: `30-Nov-23`,
      Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress9}%">${progress9}%</div></div>`,
      Action : `<a class="btn btn-custom" href="./files/SQL DataH.rar" role="button"><img id="logo" src="download.svg" alt="">`},

      {Description : name10, 
        IssueDate : `Jul-23`, 
        LastUpdate: `30-Jul-23`,
        Progress: `<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: ${progress10}%">${progress10}%</div></div>`,
        Action : `<a class="btn btn-custom" href="./files/Brokers check.rar" role="button"><img id="logo" src="download.svg" alt="">`},

]

let projectNumber = carpet.length;
console.log(projectNumber);
let projectNumberValue = carpet.length / 100;
console.log("PROYECTNUMBERVALUE",projectNumberValue)
let progress = Number((progress1*projectNumberValue + progress2*projectNumberValue + progress3*projectNumberValue + progress4*projectNumberValue + progress5*projectNumberValue + progress6*projectNumberValue + progress7*projectNumberValue + progress8*projectNumberValue + progress9*projectNumberValue + progress10*projectNumberValue).toFixed(2)); 
console.log(progress);

let pr = document.getElementById("progress");
pr.innerHTML = `Project Progress: ${progress}%`;

let tableRows = document.getElementById("tableRows");
for(let i = 0; i < carpet.length; i++){
    let row = tableRows.insertRow();
    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = carpet[i].Description;
    row.insertCell(2).innerHTML = carpet[i].IssueDate;
    row.insertCell(3).innerHTML = carpet[i].LastUpdate;
    row.insertCell(4).innerHTML = carpet[i].Progress;
    row.insertCell(5).innerHTML = carpet[i].Action;
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10],
    datasets: [{
      label: 'Progress',
      data: [progress1, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9, progress10],
      borderWidth: 0,
      // backgroundColor: [
      //   'rgba(0, 0, 255, 0.4)', // Azul claro
      //   'rgba(30, 30, 255, 0.4)', // Azul más intenso
      //   'rgba(60, 60, 255, 0.4)', // Azul aún más intenso
      //   'rgba(90, 90, 255, 0.4)',
      //   'rgba(120, 120, 255, 0.4)',
      //   'rgba(150, 150, 255, 0.4)',
      //   'rgba(180, 180, 255, 0.4)',
      //   'rgba(0, 0, 255, 0.4)' // Azul oscuro
      // ]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false, // Esto ocultará los labels en la parte superior
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        color: "white",
        grid: {
          color: 'rgba(61, 78, 57, 0.486)',
          // color: "white",
        },
      },
    }
  }
});
    