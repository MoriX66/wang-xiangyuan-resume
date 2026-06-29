const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("resume-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "resume-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
