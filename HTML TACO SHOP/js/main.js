const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("dateime",thisYear)
year.textContent = thisYear
