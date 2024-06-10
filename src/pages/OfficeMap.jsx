import { Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const randomLocations = [
  { lat: 40.712776, lng: -74.005974, name: "New York Office" },
  { lat: 34.052235, lng: -118.243683, name: "Los Angeles Office" },
  { lat: 41.878113, lng: -87.629799, name: "Chicago Office" },
  { lat: 29.760427, lng: -95.369804, name: "Houston Office" },
  { lat: 33.448376, lng: -112.074036, name: "Phoenix Office" },
];

const OfficeMap = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Office Locations</Heading>
      <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {randomLocations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default OfficeMap;