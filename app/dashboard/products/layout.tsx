function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='m-4 p-4 bg-muted/50 min-h-screen rounded-xl'>
      {children}
    </section>
  )
}

export default layout
