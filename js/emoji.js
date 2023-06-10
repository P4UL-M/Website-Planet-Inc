function displayEmoji() {
    const selectElement = document.getElementById("country");
    const selectedCountry = selectElement.value;
    const flagElement = document.getElementById("emoji");

    if (selectedCountry === "") {
        flagElement.innerHTML = null;
    } else {
        const countryName = selectElement.options[selectElement.selectedIndex].value;
        const flagIcon = `<i class="flag-icon ${countryName}"></i>`;
        flagElement.innerHTML = flagIcon;
    }
}