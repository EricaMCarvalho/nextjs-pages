import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
        {
          /**
           * If you can't go back, replace current with something else:
           *  <li><Link replace href="/portfolio">Portfolio</Link></li>
           */
        }
       
      </ul>
    </div>
  )
}

export default HomePage;