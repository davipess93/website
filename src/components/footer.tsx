import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

// import { websiteApi } from '@/lib/axios'

// type SocialLink = {
//   provider: string
//   url: string
// }

// type GetSocialLinksAPIResponse = {
//   socialLinks: SocialLink[]
// }

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  // useEffect(() => {}, [])

  // async function getSocialLinks() {
  //   try {
  //     const {
  //       data: { socialLinks },
  //     } = await websiteApi.get<GetSocialLinksAPIResponse>(
  //       '/api/get-social-links',
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <footer className={`flex justify-between ${className}`} {...rest}>
      <div className="flex gap-2">
        <Link
          href="https://www.linkedin.com/in/davipessoa93/"
          target="_blank"
          className="hover:text-muted-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="https://github.com/davipess93"
          target="_blank"
          className="hover:text-muted-foreground"
        >
          <Github className="h-5 w-5" />
        </Link>
      </div>

      <Link
        href="https://wa.me/5586998164238?text=Oi,%20Davi!%20Vi%20seu%20portfólio%20e%20curti%20bastante!%20Bora%20conversar?"
        target="_blank"
        className="hover:text-muted-foreground underline"
      >
        Vamos trabalhar juntos?
      </Link>
    </footer>
  )
}
