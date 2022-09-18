import { Text, Card, Badge, Grid, Button, Divider } from "@mantine/core"
import { useHover } from "@mantine/hooks"

const DomainCard = ({ domain, availability, price }) => {
  const { hovered, ref } = useHover()
  return (
    <Card
      sx={{ width: "100%", backgroundColor: "inherit", padding: "3rem" }}
      align='center'>
      <Grid sx={{ paddingBottom: "1rem" }} align='center' columns={24}>
        <Grid.Col span={6}>
          <Badge radius='sm' size='md' color={availability ? "lime" : "red"}>
            {availability ? "available" : "unavailable"}
          </Badge>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text weight='bold' size='lg'>
            {domain}
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button
            ref={ref}
            rightIcon={hovered && "➟"}
            variant='outline'
            disabled={!availability && true}
            sx={{
              boxShadow: "0px 2px 20px 0px rgba(0,0,0,0.2)",
              "&hover": { transition: "0.9s" },
            }}
            radius='sm'
            size='md'
            color={availability ? "lime" : "red"}
            type='border'>
            {availability ? `$${price} BUY` : "X"}
          </Button>
        </Grid.Col>
      </Grid>
      <Divider />
    </Card>
  )
}

export default DomainCard
