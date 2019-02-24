$('.datepicker').datepicker({
  weekStart: 1,
  format: 'dd/mm/yyyy',
  daysOfWeekHighlighted: "6,0",
  autoclose: true,
  todayHighlight: true,
});
$('.datepicker').datepicker("setDate", new Date());

// $(document).ready(function() {
//   console.log("ready!");
// });
