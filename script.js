function book() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let dept = document.getElementById("department").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if (!name || !email || !date || !time) {
    alert("❌ Please fill all fields!");
    return;
  }

  let message = `🎉 Booking confirmed for ${name} on ${date} at ${time}`;
  
  document.getElementById("message").innerText = message;
}
