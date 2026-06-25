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

// grid/list switcher
const viewButtons = document.querySelectorAll('.view-btn');
const postsContainer = document.querySelector('.posts-container');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    viewButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const viewType = button.getAttribute('data-view');

    if (viewType === 'grid') {
      postsContainer.classList.remove('view-list');
      postsContainer.classList.add('view-grid');
    } else {
      postsContainer.classList.remove('view-grid');
      postsContainer.classList.add('view-list');
    }
  });
});