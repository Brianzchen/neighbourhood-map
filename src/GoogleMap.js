import React from 'react';
import PropTypes from 'prop-types';

export default class GoogleMap extends React.Component {
  render() {
    const styles = {
      container: {
        height: `100%`,
      },
    };

    return (
      <div id={`map`} style={styles.container} />
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.map = new google.maps.Map(document.getElementById(`map`), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        scrollwheel: true,
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: false,
      });

      google.maps.event.addListener(this.map, `click`, event => {
        if (this.props.addRestaurant) {
          this.marker && this.marker.setMap(null);
          this.marker = new google.maps.Marker({
            position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
            map: this.map,
            title: `Add Restaurant Here`,
          });
        }
      });
    });
  }
}

GoogleMap.propTypes = {
  addRestaurant: PropTypes.bool.isRequired,
};
