import { useState } from "react"
import SearchBar from "../components/SearchBar"
import {
  Title,
  Container,
  Center,
  Stack,
  Skeleton,
  Grid,
  Text,
} from "@mantine/core"
import useFetch from "../hooks/useFetch"
import SkeletonCard from "../components/SkeletonCard"
import DomainCard from "../components/DomainCard"

const Home = () => {
  //
  const [domain, setDomain] = useState("ladylover.com")
  const [availability, setAvailability] = useState(true)
  const [price, setPrice] = useState("0.00")

  const getDomain = function (url) {
    setDomain(url)
  }

  return (
    <Container>
      <Center>
        <Stack spacing='lg'>
          <Text sx={{ textDecoration: "underline" }} align='center' size={"xs"}>
            cristhedev.com
          </Text>
          <Title
            align='center'
            order={3}
            sx={{ textTransform: "uppercase", paddingBottom: "3rem" }}>
            Find your next DOMAIN!
          </Title>
          <SearchBar getDomain={getDomain} />
          <Grid mt={"25px"}>
            <DomainCard
              domain={domain}
              price={price}
              availability={availability}
            />
            {/* <SkeletonCard /> */}
          </Grid>
        </Stack>
      </Center>
    </Container>
  )
}

export default Home
