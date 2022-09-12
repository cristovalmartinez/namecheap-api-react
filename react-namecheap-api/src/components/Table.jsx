import DomainCard from "./DomainCard"

const Table = () => {
  let domain, price, availability

  return (
    <div>
      <DomainCard domain={domain} price={price} availability={availability} />
    </div>
  )
}

export default Table
