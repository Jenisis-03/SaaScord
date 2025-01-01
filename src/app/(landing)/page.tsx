import { Heading } from "../../components/heading"
import { MaxWidthWrapper } from "../../components/max-width-wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "../../components/shiny-button"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
const Page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
    method: "POST",
    body: JSON.stringify({
      category: "sale",
      fields: {
        plan: "PRO",
        email: "zoe.martinez2001@email.com",
        amount: 49.00
      }
    }),
    headers: {
      Authorization: "Bearer <YOUR_API_KEY>"
    }
  })`

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real Time Saas Insight</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered To Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-bare/7 text-gray-600 max-w-prose text-center text-pretty">
              SaaScord is the easiest way to monitor your Saas. Get instant
              notification{" "}
              <span className="font-semibold text-gray-700">
                Sales, new Users, or any other events
              </span>{" "}
              sent directly to your discord
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col sm:items-center">
              {[
                "Real Time Discord Alerts For Critical Events",
                "Pay Once and Use forever",
                "Track Sales, new Users, or any other events",
              ].map((items, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {items}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto ">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda"
                    username="SaaScord"
                    timestamp="Today at 12:00"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 NEw User Signed Up"
                    content={{
                      name: "Matilda",
                      email: "Matilda@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda"
                    username="SaaScord"
                    timestamp="Today at 12:00"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 NEw User Signed Up"
                    content={{
                      name: "Matilda",
                      email: "Matilda@gmail.com",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sma:gap-20">
          <div>
            <h2 className="text-center text-base/7 font semi-bold sm:gap-28">
              Intuitive Monitoring
            </h2>
          </div>
          <Heading>Stay Ahead With Real Time Insights</Heading>
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* FIRST BENTO GRID*/}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-2[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg : rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real Time Notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get instant notification on your discord for critical events
                    like new users, sales, or any other custom events
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cwq] border-gray-700 bg-gray-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone Screen App Interface"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[rem" />
            </div>
            {/* SECOND BENTO GRID */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2 rem +1px)]">
                <div className="px-8 pt-8 sm:px-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Ay Events on Real time
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    From New User Signups to Sales, track any events in real
                    time , SaaScord notifies for all Critical and Important
                    Events in SaaS.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2y">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="Bento Grid Event"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>
            {/* THIRD BENTO GRID */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Add any Custom data you like to an event , Such as a user
                    email , a purchase amount or an exceeded quota.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-custom-data.png"
                    alt="Bento Box Illustrating Custom Data tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>
            {/* FOURTH BENTO GRID */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]
 max-lg:rounded-b-[calc(2rem+1px)] ;g:rounded-r-[calc(2rem+1px)]"
              >
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Easy to Integrate
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Connect SaaSCord with your Saas in minutes. No coding is
                    required for this functionality to work properly and works
                    as expected with the help of the API.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflown-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          SaaScord.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transperent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transperent",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="grid gap-3"></div>
      </section>

      <section></section>
      
    </>
  )
}

export default Page
