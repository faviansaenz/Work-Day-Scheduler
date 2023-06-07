$(function () {
  let today = dayjs();
  
  let saveBtn = $(".saveBtn");
  saveBtn.on("click", function (e) {
    let eventParent = $(this).parent();
    let timeBlockEventId = eventParent.attr("id");
    let eventLog = eventParent.children("textarea").val();
    console.log(eventParent);
    console.log(eventLog);
    console.log(timeBlockEventId);

    localStorage.setItem(timeBlockEventId, eventLog)
  });

  for (let i = 8; i < 19; i++) {
    const lsItem = localStorage.getItem(i);
    console.log(lsItem, i);
    let timeBlockId = i;
    $(`#${timeBlockId}`).children("textarea").val(lsItem);
  }
  let currentHour =today.hour();
  console.log(currentHour);
  let timeBlock = $(".time-block");
  for (let i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].id > currentHour) {
      timeBlock[i].classlist.add("future");
    } else if (timeBlock[i].id == currentHour) {
      timeBlock[i].classlist.add("present");
    } else {
      timeBlock[i].classlist.add("past");
    }
  }

  $("#currentDay").text(today.format("dddd, MMMM D"));
})