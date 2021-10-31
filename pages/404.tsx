import { useEffect } from "react"
import { useRouter } from "next/dist/client/router";

function Error404() {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [])

  return (
    <div>
      <h1 className="title-not-found">Halaman Tidak Ditemukan</h1>
    </div>
  )
}

export default Error404
