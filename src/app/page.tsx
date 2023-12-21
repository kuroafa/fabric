import Canvas from '@/components/Canvas'
import Image from 'next/image'

export default function Home() {
  return (
  <div>
    {/* <div className='bg-black flex items-center py-2 px-5 gap-5'>
      <Image src='/MCE.png' width={40} height={40} alt='MCE-Signs-logo'/>
      <h1 className='text-2xl font-bold '>MCE Signs</h1></div> */}
    <Canvas/>
  </div>
  )
}
