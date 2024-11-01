import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { easeInOut } from "framer-motion";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <Box position="relative" width="100vw" maxWidth="100vw" margin="auto" height="auto">
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
      />
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onClick={handleImageClick}
        borderRadius="md"
        cursor="pointer"
        width="100%"
        height="250px"
        
      />
      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
      />
      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageSlider;
