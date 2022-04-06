import Link from 'next/link'
import Image from 'next/image'

export default function Modules() {
  return (
    <>
      <Link href="/">
        <a id="link-to-home">link to home</a>
      </Link>
      <Image src="/static/image.png" width="100" height="100" />
    </>
  )
}
