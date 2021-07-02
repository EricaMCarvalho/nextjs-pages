import router, {useRouter} from 'next/router';

const ClientPage = () => {

  const loadProjectHandler = () => {
    // this example with a router instead of a link is for example when using a form where we need to navigate programatically
    // load data...
    // to navigate away...

    // router.push('/clients/max/projecta');

    // with replace can't go back after the navigation because the page is replaced
    // router.replace('/clients/max/projecta');

    router.push({
      pathname: '/clients/[id]/[projectId]',
      query: {
        id: 'max',
        projectId: 'projecta'
      }
    })
  }

  return (
    <div>
      <h1>Single Client</h1>

      <button onClick={loadProjectHandler}>Load Proj A</button>
    </div>
  )
}

export default ClientPage;
