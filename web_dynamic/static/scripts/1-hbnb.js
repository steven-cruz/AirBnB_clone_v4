$(document).ready(function () {
  let amenityDict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityDict[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenityDict[$(this).data('id')];
    }
    let amenityValues = Object.values(amenityDict);
    if (amenityValues.length > 0) {
      $('div.amenities > h4').text(amenityValues.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
