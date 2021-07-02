import { useRouter } from "next/router";

const clientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname)
  console.log(router.query)
  return (
    <div>
      <h1>Client Project Page for a specific project of specific client</h1>
    </div>
  )
}

export default clientProjectPage;