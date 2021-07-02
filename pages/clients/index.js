import Link from 'next/link'

const ClientsPage = () => {
  const clients = [
    {id: 1, name: "max"},
    {id: 2, name: "eri"}
  ]
  return (
    <div>
      <h1>My clients</h1>
      <ul>
        {
          /** 2 ways of doing it, the react way and alternative with an object
           * clients.map(c => <li key={c.id}><Link href={`/clients/${c.id}`}>{c.name}</Link></li>)
           */
           clients.map(c => <li key={c.id}><Link href={{
             pathname: '/clients/[id]',
             query: { id: c.id }
           }}>{c.name}</Link></li>)
        
        }
      
      </ul>
    </div>
  )
}

export default ClientsPage;
