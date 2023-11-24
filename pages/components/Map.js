import React from "react";
import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FnYTEyMzQiLCJhIjoiY2xpd3ptdGU4MDMybTNzcWZ3c21qM2RkNCJ9.nnNX6AGpmswDtSBnDORWeA";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [78.476681027237, 22.1991660760527], //india center
      zoom: 6,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 30,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates) // Nanded longitude and lattitude
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2

`;
