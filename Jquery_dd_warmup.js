$(function () {
  $("#draggable").draggable({ revert: "invalid", cursor: "move" });
  $("#droppable").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });
});
