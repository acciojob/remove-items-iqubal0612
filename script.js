//your JS code here. If required.
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", () => {
  const select = document.getElementById("colorSelect");

  // Remove selected option
  select.remove(select.selectedIndex);
});
