import { Box, Heading, Button, useToast, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
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
  const [pins, setPins] = useState(randomLocations);
  const [addingPin, setAddingPin] = useState(false);
  const [newPinName, setNewPinName] = useState("");
  const [newPinLocation, setNewPinLocation] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const AddPinMode = () => {
    useMapEvents({
      click(e) {
        if (addingPin) {
          setNewPinName("");
          onOpen();
          setAddingPin(false);
          setNewPinLocation(e.latlng);
          setAddingPin(false);
        }
      },
    });
    return null;
  };
  const handleAddPin = () => {
    if (newPinName && newPinLocation) {
      setPins([...pins, { lat: newPinLocation.lat, lng: newPinLocation.lng, name: newPinName }]);
      toast({
        title: "Pin added.",
        description: `Pin "${newPinName}" added to the map.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Office Locations</Heading>
      <Button onClick={() => setAddingPin(true)} mb={4}>Add Pin</Button>
      <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pins.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      {addingPin && <AddPinMode />}
      </MapContainer>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Pin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter pin name"
              value={newPinName}
              onChange={(e) => setNewPinName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddPin}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OfficeMap;