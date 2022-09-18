import { TextInput, Button, Group, Loader } from "@mantine/core"
import { useForm } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import isURL from "validator/lib/isURL"

const SearchBar = ({ getDomain, loading }) => {
  const form = useForm({ initialValues: { input: "" } })

  const isUrl = function (value) {
    const valid = isURL(value)
    if (!valid) {
      showNotification({
        sx: { padding: "2rem" },
        title: `${form.getInputProps("input").value} invalid URL`,
        color: "red",
      })
    } else {
      getDomain(value)
    }
  }

  return (
    <>
      <form
        onSubmit={form.onSubmit((v) => {
          isUrl(v.input)
        })}>
        <Group>
          <TextInput
            sx={{
              width: "30rem",
              border: "none",
            }}
            radius='md'
            size='xl'
            placeholder='biz.com'
            {...form.getInputProps("input")}
          />
          <Button type='submit' radius='md' size='xl' color='red'>
            {!loading ? "search" : <Loader variant='dots' color={"white"} />}
          </Button>
        </Group>
      </form>
    </>
  )
}

export default SearchBar
