$(document).ready(function () {
  const amenityDict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityDict[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenityDict[$(this).data('id')];
    }
    const amenityValues = Object.values(amenityDict);
    if (amenityValues.length > 0) {
      $('div.amenities > h4').text(amenityValues.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });

  $.get('Request http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
   if (textStatus === 'success') {
     $('div#api_status').addClass('available');
   } else {
     $('div#api_status').removeClass('available');
   }
  });
});
