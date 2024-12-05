import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Card.css';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack className="Card" >
      <Image className="Card-Img" rounded="md" src={imageSrc} alt={title} />
      <VStack className="Card-Body">
        <Heading size="sm">
          {title}
        </Heading>
        <Text fontWeight="light" style={{color: '#BFC5CE'}}>
          {description}
        </Text>
        <HStack>
          <Text size="xs">
            View Code
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
