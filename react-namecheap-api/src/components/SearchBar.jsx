import { useState } from "react"
import { TextInput, Button, Group } from "@mantine/core"
import isURL from "validator/lib/isURL"

const SearchBar = () => {
  const [input, setInput] = useState("")

  const isUrl = function () {
    return isURL(input)
  }

  const getDomain = async function () {}

  return (
    <>
      <Group>
        <TextInput
          sx={{
            width: "30rem",
            border: "none",
          }}
          radius='md'
          size='xl'
          placeholder='biz.com'
          onChange={(e) => {
            setInput(e.currentTarget.value)
          }}
        />
        <Button
          type='submit'
          radius='md'
          onClick={getDomain}
          size='xl'
          color={"red"}>
          search
        </Button>
      </Group>
    </>
  )
}

export default SearchBar
