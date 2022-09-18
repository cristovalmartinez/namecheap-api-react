import { useState } from "react"
import SearchBar from "../components/SearchBar"
import {
  Title,
  Container,
  Center,
  Stack,
  Grid,
  Text,
  Footer,
} from "@mantine/core"
import SkeletonCard from "../components/SkeletonCard"
import DomainCard from "../components/DomainCard"
import axios from "axios"
const date = new Date()

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  const getDomain = async function (url) {
    try {
      setData({})
      setLoading(true)
      setTimeout(async () => {
        const { data } = await axios.post("http://localhost:6699/domain", {
          domain: url,
        })
        setData(data)
        setLoading(false)
      }, 1000)
    } catch (err) {
      throw err
    }
  }

  return (
    <Container>
      <Center>
        <Stack spacing='lg'>
          <Title
            align='center'
            order={3}
            sx={{ textTransform: "uppercase", paddingBottom: "3rem" }}>
            Find your next DOMAIN!
          </Title>
          <SearchBar getDomain={getDomain} loading={loading} />
          <Grid mt={"25px"}>
            {data.domain && (
              <DomainCard
                domain={data.domain}
                price={15.0}
                availability={data.availability}
              />
            )}
            {loading && <SkeletonCard />}
          </Grid>
        </Stack>
        <Text
          sx={{
            position: "absolute",
            bottom: "1rem",
            color: "gray",
            opacity: 0.5,
          }}
          size='xs'>
          cristhedev.com/blog | {date.getFullYear()} ©
        </Text>
      </Center>
    </Container>
  )
}

export default Home
