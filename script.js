const team = [
  { name: "Sónia", schedule: "7h30 – 16h30" },
  { name: "Rafael", schedule: "9h30 – 18h30" },
  { name: "André", schedule: "9h30 – 18h30" }
];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); // mês atual

const calendar = document.getElementById("calendar");
const daysInMonth = new Date(year, month + 1, 0).getDate();

function generateCalendar() {
  let remoteDays = { Sónia: [], Rafael: [], André: [] };

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const dayOfWeek = date.getDay(); // 0 = domingo, 1 = segunda...

    if (dayOfWeek === 0 || dayOfWeek === 6) continue; // ignorar fins de semana

    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `<strong>${i}/${month + 1}</strong><br/>`;

    team.forEach(member => {
      // atribuir 1 dia remoto por semana
      const week = Math.floor(i / 7);
      if (!remoteDays[member.name].includes(week)) {
        remoteDays[member.name].push(week);
        div.innerHTML += `<div class="remote">${member.name} (Remoto)</div>`;
      } else {
        div.innerHTML += `<div class="presencial">${member.name} (Presencial)</div>`;
      }
    });

    calendar.appendChild(div);
  }
}

generateCalendar();
``
