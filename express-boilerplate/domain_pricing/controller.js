import fetch from "node-fetch"

export async function domainPricing(req, res) {
  try {
    let url =
      "https://api.sandbox.namecheap.com/xml.response?ApiUser=cris&ApiKey=d66814ba05374e6a9b1555f7fd420aef&UserName=cris&ClientIp=172.58.89.227&Command=namecheap."

    const response = await fetch(`${url}domains.check&DomainList=${domain}`)

    res.status(200).json({ response: response.text() })
  } catch (err) {
    throw err
  }
}
