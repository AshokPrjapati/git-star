import React, { useEffect, useState } from "react";
import { Container, Grid } from "@chakra-ui/react";
import axios from "axios";
import LanCard from "../Components/Card";

function AllLang() {
  let [allData, setAllData] = useState([]);

  const fetchData = async () => {
    let res = await axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:all`
    );
    let data = await res.data.items;
    setAllData(data);
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
        {allData.map((d) => (
          <LanCard key={d.id} {...d} />
        ))}
      </Grid>
    </Container>
  );
}

export default AllLang;
