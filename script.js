function book() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dept = document.getElementById("department").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !email || !date || !time) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("msg").innerText =
    `Booked for ${name} (${dept}) on ${date} at ${time}`;
}
