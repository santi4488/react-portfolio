import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="" src={'https://media.licdn.com/dms/image/v2/D5603AQECwM-jfscFxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720541165067?e=1736985600&v=beta&t=R37gwEdIiEHpBH81x2UytBvh1x2frGgjPr1Lg26bIuU'} />
      <Heading size="md">
        Hello, I am Christopher Santiago
      </Heading>
      <Heading size="2xl">
        A frontend developer specialised in React, Angular, .Net, and Node.js
      </Heading>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
