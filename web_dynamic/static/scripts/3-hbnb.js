window.onload = function () {
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

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $.each(data, function (i, place) {
        $('SECTION.places').append(
          '<article>' +
              '<div class="title">' +
              '<h2>' + place.name + '</h2>' +
              '<div class="price_by_night">' +
              place.price_by_night +
              '</div>' +
              '</div>' +
              '<div class="information">' +
              '<div class="max_guest">' +
              '<i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' +
              place.max_guest + 'Guests' +
              '</div>' +
              '<div class="number_rooms">' +
              '<i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' +
              place.number_rooms + 'Bedrooms' +
              '</div>' +
              '<div class="number_bathrooms">' +
              '<i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' +
              place.number_bathrooms + 'Bathrooms' +
              '</div>' +
              '</div>' +
              '<div class="description">' +
              place.description +
              '</div>' +
              '</article>'
        );
      });
    }
  });
};
