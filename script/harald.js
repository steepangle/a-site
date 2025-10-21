const times = [
    "08:35", "09:30", "10:35", "11:30",
    "12:25", "13:20", "14:15", "15:10",
    "16:10", "17:05", "18:00"
];

function getNextTarget() {
    const now = new Date();
    for (let t of times) {
        const [h, m] = t.split(":").map(Number);
        const target = new Date();
        target.setHours(h, m, 0, 0);
        if (target > now) return target;
    }
    // if all have passed today → go to the first time tomorrow
    const [h, m] = times[0].split(":").map(Number);
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(h, m, 0, 0);
    return nextDay;
}

function updateCountdown() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
        target = getNextTarget();
    }
    const hrs = Math.floor(diff / 1000 / 60 / 60);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById("time").textContent =
        `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    document.getElementById("next").textContent =
        `Next HARALD at ${target.getHours().toString().padStart(2, "0")}:${target.getMinutes().toString().padStart(2, "0")}`;
}

let target = getNextTarget();
updateCountdown();
setInterval(updateCountdown, 1000);