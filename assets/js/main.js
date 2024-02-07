function kalorienRechner(event) {
  event.preventDefault();

  const height = Number(document.querySelector("#height").value);
  const age = Number(document.querySelector("#age").value);
  const weight = Number(document.querySelector("#weight").value);
  const sex = document.querySelector('input[type="radio"]:checked').value;
  const options = Number(document.querySelector("#options").value);

  const outputKcalGrund = document.querySelector(".outputKcalGrund");
  const outputKcalGesamt = document.querySelector(".outputKcalGesamt");
  const outputKjGrund = document.querySelector(".outputKjGrund");
  const outputKjGesamt = document.querySelector(".outputKjGesamt");

  if (sex === "male") {
    const grundumsatzMale = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
    const gesamtUmsatz = grundumsatzMale * options;
    const grundKj = grundumsatzMale * 4.1868;
    const gesamtKj = gesamtUmsatz * 4.1868;

    outputKcalGrund.innerHTML = grundumsatzMale.toFixed(2);
    outputKcalGesamt.innerHTML = gesamtUmsatz.toFixed(2);
    outputKjGrund.innerHTML = grundKj.toFixed(2);
    outputKjGesamt.innerHTML = gesamtKj.toFixed(2);
  } else {
    const grundumsatzFemale = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
    const gesamtUmsatz = grundumsatzFemale * options;
    const grundKj = grundumsatzFemale * 4.1868;
    const gesamtKj = gesamtUmsatz * 4.1868;

    outputKcalGrund.innerHTML = grundumsatzFemale.toFixed(2);
    outputKcalGesamt.innerHTML = gesamtUmsatz.toFixed(2);
    outputKjGrund.innerHTML = grundKj.toFixed(2);
    outputKjGesamt.innerHTML = gesamtKj.toFixed(2);
  }
}
