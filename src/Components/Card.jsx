import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

function LanCard(data) {
  return (
    <Card bg={"#010101"} color={"#fff"}>
      <CardBody>
        <Image
          src={data.owner.avatar_url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Heading size="sm">{data.language}</Heading>
          <Flex justify={"space-between"}>
            <Text>a</Text>
            <Text>$450</Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default LanCard;
