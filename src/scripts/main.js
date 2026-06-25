import '../styles/style.scss';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");

const fromPicker = flatpickr(dateFrom, {
  dateFormat: "d.m.Y",
});

const toPicker = flatpickr(dateTo, {
  dateFormat: "d.m.Y",
});

fromPicker.config.onChange.push(function (selectedDates) {
  if (selectedDates[0]) {
    toPicker.set("minDate", selectedDates[0]);
  }
});

toPicker.config.onChange.push(function (selectedDates) {
  if (selectedDates[0]) {
    fromPicker.set("maxDate", selectedDates[0]);
  }
});