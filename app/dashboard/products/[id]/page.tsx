export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = "await getProductById(id);"

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Product Info: {product}</p>
    </div>
  )
}
