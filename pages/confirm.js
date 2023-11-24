import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log("Pickup", pickup);
  console.log("Dropoff", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Nanded";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FnYTEyMzQiLCJhIjoiY2xpd3ptdGU4MDMybTNzcWZ3c21qM2RkNCJ9.nnNX6AGpmswDtSBnDORWeA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FnYTEyMzQiLCJhIjoiY2xpd3ptdGU4MDMybTNzcWZ3c21qM2RkNCJ9.nnNX6AGpmswDtSBnDORWeA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("dropoff");
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/00000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Uberx</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer

`;
const BackButton = tw.img`
 h-full object-contain

`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const RideContainer = tw.div`
flex-1  flex flex-col h-1/2

`;

const Wrapper = tw.div`
flex h-screen flex-col

`;
