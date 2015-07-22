// Coordinates of map markers and initial values

var model = {
  "initialMap":
  {
    "center": new google.maps.LatLng(-36.912771, 174.915997),
    "zoom": 14
  },
  "markers": [
    {
      "title": "Tanpopo Ramen",
      "description": "Authentic Japanese style ramen with many different flavours of soup bases.",
      "price": "$13",
      "address": "491 Pakuranga Rd",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.899596,174.904265)
    },
    {
      "title": "Coffee Club",
      "description": "The place to be for luxury all day breakfast food.",
      "price": "$17",
      "address": "J/20-22 Dunrobin Place",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/coffee-club.jpg",
      "imageAlt": "Coffee club Highland Park interior",
      "position": new google.maps.LatLng(-36.899010, 174.903909)
    },
    {
      "title": "Sura Korean",
      "description": "Good old Korean style stir fry and BBQ. Family owned restaurant for many years",
      "price": "$12",
      "address": "Shop 28, 503 Pakuranga Rd",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/sura.jpg",
      "imageAlt": "Sura delicious food",
      "position": new google.maps.LatLng(-36.899539, 174.907194)
    },
    {
      "title": "Nishiki",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.925612, 174.896527)
    }
  ]
}
