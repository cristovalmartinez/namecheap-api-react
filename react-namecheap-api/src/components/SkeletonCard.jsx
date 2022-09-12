import { Skeleton, Center, Container, Grid } from "@mantine/core"

const SkeletonCard = ({ loading }) => {
  return (
    <Grid
      sx={{ width: "100%", padding: "3rem" }}
      align='center'
      gutter='xl'
      columns={10}>
      <Grid.Col span={2}>
        <Skeleton height={15} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Skeleton height={15} />
      </Grid.Col>
      <Grid.Col span={2}>
        <Skeleton height={15} />
      </Grid.Col>
    </Grid>
  )
}

export default SkeletonCard
