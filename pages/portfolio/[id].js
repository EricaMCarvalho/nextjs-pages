import {useRouter} from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send request to some backend server to fetch the data with id of router.query.projectid

  return (
    <div>
      <h1>My Project</h1>
    </div>
  )
}

export default PortfolioProjectPage;
