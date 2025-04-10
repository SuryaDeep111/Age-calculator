function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    document.getElementById("result").textContent = "Please select your birth date.";
    return;
  }

  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = `You are ${age} year(s) old.`;
}
