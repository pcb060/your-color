function isLeapYear(year) {
  let nYear = Number(year);
  return (nYear % 4 === 0 && nYear % 100 !== 0) || nYear % 400 === 0;
}

export default function calc(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8);

  let daysInMonth;
  if (["04", "06", "09", "11"].includes(month)) {
    daysInMonth = 30;
  } else if (isLeapYear(year) && month === "02") {
    daysInMonth = 29;
  } else {
    daysInMonth = 31;
  }

  const currentYear = new Date().getFullYear();
  // presumes max age possible is 100 years
  const MAX_AGE = 100;

  const dayColor = Math.floor((day * 256) / daysInMonth - 1);
  const monthColor = Math.floor((month * 256) / 12 - 1);
  const yearColor = Math.floor(
    ((year - (currentYear - MAX_AGE)) * 256) / 100 - 1
  );

  console.log("dayColor: " + dayColor);
  console.log("monthColor: " + monthColor);
  console.log("yearColor: " + yearColor);

  // https://stackoverflow.com/a/2998874
  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const calcColor =
    "#" +
    // convert to hex with padding zero if number is 1 digit long
    zeroPad(dayColor.toString(16), 2) +
    zeroPad(monthColor.toString(16), 2) +
    zeroPad(yearColor.toString(16), 2);
  console.log(calcColor);
  return calcColor;
}
