// Example timetable data
const timetableData = {
  Monday: ["Math", "DBMS", "OS", "CN", "AI"],
  Tuesday: ["CN", "AI", "DBMS", "Math", "OS"],
  Wednesday: ["AI", "Math", "DBMS", "CN", "OS"],
  Thursday: ["DBMS", "CN", "Math", "AI", "OS"],
  Friday: ["OS", "AI", "Math", "CN", "DBMS"]
};

function login() {
  const regno = document.getElementById("regno").value;
  const password = document.getElementById("password").value;

  if (regno && password) {
    document.querySelector(".login-box").classList.add("hidden");
    document.getElementById("welcome").innerText = `Welcome, ${regno}`;
    document.getElementById("timetable").classList.remove("hidden");
    loadTimetable();
  } else {
    alert("Please enter register number and password!");
  }
}

function loadTimetable() {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  Object.keys(timetableData).forEach(day => {
    let row = `<tr><td>${day}</td>`;
    timetableData[day].forEach(subject => {
      row += `<td><a href="https://youtu.be/Qjx4sibHtuM?si=-GIEv8TyIDrzXWR9" target="_blank">${subject}</a></td>`;
    });
    row += "</tr>";
    tbody.innerHTML += row;
  });
}
