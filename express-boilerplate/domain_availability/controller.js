import fetch from "node-fetch"

export async function domainAvailability(req, res) {
  try {
    let url =
      "https://api.sandbox.namecheap.com/xml.response?ApiUser=cris&ApiKey=d66814ba05374e6a9b1555f7fd420aef&UserName=cris&ClientIp=172.58.89.227&Command=namecheap."

    let { domain } = req.body

    if (!domain) {
      res.status(400).json({ message: "Invalid domain provided." })
      return
    }

    const [response] = await Promise.all([
      fetch(`${url}domains.check&DomainList=${domain}`),
    ])

    let strRes = await response.text()
    let strPostion = strRes.search("Available")
    let availableStr = strRes.substring(strPostion, strPostion + 17)
    let availability = availableStr.search("true")
    let availableStatus = availability === -1 ? "unavailable" : "available"

    res.status(200).json({ domain, availability: availableStatus })
  } catch (err) {
    throw err
  }
}
