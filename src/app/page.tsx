import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import MainImage from '../images/main.webp'
import Diagonal from '@/images/diagonal.svg'

import Card from '@/components/Card'

const BrowserExtensions = dynamic(() => import('@/components/pages/home/BrowserExtensions'))
const WebDockerManual = dynamic(() => import('@/components/pages/home/WebDockerManual'))

export default function Home() {
  return (
    <>
      <section className="py-4 lg:py-32 mb-4 lg:mb-none">
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] mx-auto text-white">
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-none">
              <h1 className="border-l-[3px] lg:border-l-4 px-2 lg:px-5 py-2 lg:py-3 mb-8 lg:mb-16 lg:mt-4 text-lg lg:text-3xl leading-tight">
                <strong>Elasticvue</strong> is a free and open-source
                elasticsearch gui for the browser.
              </h1>

              <h2 className="mb-4 text-2xl font-bold">Features</h2>
              <ul className="list-disc pl-5">
                <li className="my-2">Cluster overview</li>
                <li className="my-2">Index management</li>
                <li className="my-2">Search interface</li>
                <li className="my-2">REST Query interface</li>
                <li className="my-2">Snapshot management</li>
                <li className="my-2">
                  ... <Link href="/features" className="text-white underline">and more</Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <Image alt="Screenshot" className="rounded shadow-md" src={MainImage} priority sizes='(min-width: 1344px) 40vw, 100vw' quality={80} />
            </div>
          </div>
        </div>
      </section>

      <Image src={Diagonal} alt="" className="w-full hidden lg:block h-12" />

      <section className="bg-white py-8 lg:py-32">
        <div className="lg:w-[70%] w-[95%] max-w-[1344px] mx-auto">
          <h2 className="text-3xl text-center mb-6 lg:mb-16 font-bold">Get elasticvue</h2>

          <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-12">
            <Card title="Desktop app" link={{ href: 'https://github.com/cars10/elasticvue/releases', text: 'Elasticvue desktop' }} badge>
              <p className="mb-1">
                Elasticvue desktop is available for linux, mac and windows. <br />Download the latest release:
              </p>
            </Card>
          </div>


          <BrowserExtensions />

          <div className="my-8 lg:my-16 text-justify lg:text-center">
            <p>
              If you don&apos;t use a browser extension then you have to configure CORS to grant the browser access to your
              cluster.
              <br />Elasticvue will guide you on how to configure your cluster when you use it for the first time.
            </p>
          </div>

          <WebDockerManual />

          <p className="text-center">
            Checkout <Link href="/usage" className="text-primary underline visited:text-primary">usage</Link> for details on how to configure your cluster to use elasticvue.
          </p>
        </div>
      </section>
    </>
  )
}
