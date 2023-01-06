import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import axios from "axios";
import LanCard from "../Components/Card";

function AllLang() {
  let [allData, setAllData] = useState([]);
  let [loading, setLoading] = useState(false);

  let ld = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:all`
      );
      let data = await res.data.items;
      setLoading(false);
      setAllData(data);
    } catch (e) {
      setLoading(false);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxW="3xl" minW={"85%"}>
      <Grid
        padding={"30px"}
        gridTemplateColumns={{
          base: `repeat(1,fr)`,
          md: `repeat(2,1fr)`,
          lg: `repeat(4,1fr)`,
        }}
        gap={"20px 20px"}
      >
        {loading
          ? ld.map(() => (
              <Box bg={"#010101"} padding="6" boxShadow="lg">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            ))
          : allData.map((d) => <LanCard key={d.id} {...d} />)}
      </Grid>
    </Container>
  );
}

export default AllLang;
