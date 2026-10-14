import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Code2, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Phone, Pin, Twitch } from "lucide-react";
import profileImg from "../../imports/WhatsApp_Image_2026-06-07_at_2.53.20_AM.jpeg";

interface AdminPageProps { onBack: () => void }

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/mbk_bakhtawar?cplk=aWE5OXUxczhhcmZ5", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-bakhtawar-khan-43b02931b?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Muhammad-Bakhtawar-Khan", icon: Github },
  { label: "Pinterest", href: "https://pin.it/5CbiY96GB", icon: Pin },
  { label: "Facebook", href: "https://www.facebook.com/share/1EAjQVA3Qv/", icon: Facebook },
  { label: "X / Twitter", href: "https://x.com/MBK_Bakhtawar", icon: MessageCircle },
  { label: "Twitch", href: "https://www.twitch.tv/mbk_bakhtawar", icon: Twitch },
  { label: "Dev.to", href: "https://dev.to/mbk_bakhtawar", icon: Code2 },
];

const pinImages = [
  ["https://i.pinimg.com/736x/26/ae/c4/26aec478a796d83b246a15256ebcf2de.jpg", "https://pin.it/7ld2kaYvo"],
  ["https://i.pinimg.com/736x/2d/b7/27/2db7277b41265772e011c65b3437e48d.jpg", "https://pin.it/17dcZ7W9T"],
  ["https://i.pinimg.com/736x/84/58/f4/8458f441ffc91c88beba72184097810c.jpg", "https://pin.it/51mUN25G8"],
  ["https://i.pinimg.com/736x/68/2c/59/682c59c897d02be3117e01632d8c2fe0.jpg", "https://pin.it/BH8UzYgog"],
  ["https://i.pinimg.com/736x/ac/28/c5/ac28c5b6149ad4b1668bd383d2754229.jpg", "https://pin.it/6Fww6HJyb"],
  ["https://i.pinimg.com/736x/99/19/c9/9919c96734247c285a5792583ffc9f82.jpg", "https://pin.it/5J0Pvv2T1"],
  ["https://i.pinimg.com/736x/5c/b7/89/5cb7893041cca3a465227e11c0830391.jpg", "https://pin.it/6d7x3wRUP"],
  ["https://i.pinimg.com/736x/f7/cb/3c/f7cb3c4d78d2961d4bbc77160851db7e.jpg", "https://pin.it/52hJRLOO6"],
  ["https://i.pinimg.com/736x/e5/d6/eb/e5d6eb8f212fed8a4b69fdf2228590d0.jpg", "https://pin.it/45CuyAVqW"],
  ["https://i.pinimg.com/736x/68/e7/c5/68e7c58527fb4f801e027444be4d9699.jpg", "https://pin.it/292sL0yxk"],
  ["https://i.pinimg.com/736x/80/fa/cd/80facd03770c9612b8850014616ae908.jpg", "https://pin.it/6nLJr9eNC"],
  ["https://i.pinimg.com/736x/98/c2/5c/98c25c7093af5fdc8e965b7fe68db7a0.jpg", "https://pin.it/3UeSJW8So"],
  ["https://i.pinimg.com/736x/26/49/60/264960dee7a5c4f7ef68c840f8caf684.jpg", "https://pin.it/2I6nqpEk1"],
  ["https://i.pinimg.com/736x/fb/ef/82/fbef8223764ec1a8f3386a1846968219.jpg", "https://pin.it/3Svc2yCLy"],
  ["https://i.pinimg.com/736x/0f/ec/ca/0feccaeb8534b0911db5204fe8d5edd0.jpg", "https://pin.it/7sCRtmWL7"],
  ["https://i.pinimg.com/736x/bf/e8/6e/bfe86e9ce884bdd9c88747baefc4e612.jpg", "https://pin.it/7GUE1fVw9"],
  ["https://i.pinimg.com/736x/61/76/bf/6176bf7ff17df4b26db527c76db03f3f.jpg", "https://pin.it/1MX50iVzw"],
  ["https://i.pinimg.com/736x/b0/ca/78/b0ca78f037d39bf4251e251b1018482d.jpg", "https://pin.it/7gfVWxMcW"],
  ["https://i.pinimg.com/736x/89/9d/5a/899d5aa49b3fafe37fe0b71531ab504a.jpg", "https://pin.it/4cb3LTFE7"],
  ["https://i.pinimg.com/736x/d7/3d/6f/d73d6feb00d8d40091bf87a1e280d94f.jpg", "https://pin.it/6BvFwVm9z"],
  ["https://i.pinimg.com/736x/06/8f/c0/068fc0d8831ccbfd96b5968effa77b55.jpg", "https://pin.it/4THPotKTF"],
] as const;

export function AdminPage({ onBack }: AdminPageProps) {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f3eee2]">
      <header className="fixed inset-x-0 top-0 z-20"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-9"><button onClick={onBack} className="inline-flex items-center gap-2 font-['DM_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#d1aa50] transition hover:gap-3"><ArrowLeft size={14} /> Return</button><span className="font-['DM_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#b8aa90]">MBK / Direct desk</span></div></header>
      <main className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 sm:px-9 sm:pt-32">
        <section className="grid min-h-[680px] overflow-hidden border border-[#d1aa50]/20 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[470px] bg-[#1e180e] lg:min-h-0">
            <img src={profileImg} width="1254" height="1254" loading="eager" decoding="async" fetchPriority="high" referrerPolicy="no-referrer" alt="Muhammad Bakhtawar Khan portrait for the MBK Global profile" className="absolute inset-0 h-full w-full object-cover object-[52%_50%] grayscale-[15%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 font-['DM_Mono'] text-[10px] uppercase tracking-[0.19em] text-[#f3eee2]/80">MBK / Portrait / 2026</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22, duration: 0.75 }} className="flex flex-col justify-between bg-[#e7dfcf] p-7 text-[#171208] sm:p-12">
            <div><p className="font-['DM_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#8c691d]">The person behind the desk</p><h1 className="mt-8 font-['Bodoni_Moda'] text-5xl font-semibold leading-[0.86] tracking-[-0.06em] sm:text-7xl">Muhammad<br />Bakhtawar<br /><i>Khan.</i></h1></div>
            <div className="mt-12 grid max-w-lg gap-5"><p className="font-['Manrope'] text-sm leading-6 text-[#625846]">If something needs an answer, it should be easy to find one. Reach out directly.</p><div className="grid gap-0 border-y border-[#171208]/20 sm:grid-cols-2"><a href="tel:03200276941" className="group flex items-center justify-between border-b border-[#171208]/20 py-4 font-['Manrope'] text-sm font-semibold sm:mr-6 sm:border-b-0"><span><span className="block font-['DM_Mono'] text-[9px] uppercase tracking-[0.15em] text-[#887b65]">Phone</span>03200276941</span><Phone size={15} className="text-[#8c691d]" /></a><a href="mailto:Bakhtawark085@gmail.com" className="group flex items-center justify-between py-4 font-['Manrope'] text-sm font-semibold"><span><span className="block font-['DM_Mono'] text-[9px] uppercase tracking-[0.15em] text-[#887b65]">Email</span>Bakhtawark085@gmail.com</span><Mail size={15} className="text-[#8c691d]" /></a><a href="https://chat.whatsapp.com/E78geSMJuAZEve5PmNZwIA" target="_blank" rel="noreferrer" className="group col-span-full flex items-center justify-between border-t border-[#171208]/20 py-4 font-['Manrope'] text-sm font-semibold"><span><span className="block font-['DM_Mono'] text-[9px] uppercase tracking-[0.15em] text-[#887b65]">WhatsApp Group</span>Open WhatsApp group</span><MessageCircle size={16} className="text-[#3c9b7b]" /></a></div></div>
          </motion.div>
        </section>

        <section aria-labelledby="social-title" className="mt-10 grid gap-8 border-t border-[#d1aa50]/20 pt-6 lg:grid-cols-[0.3fr_0.7fr]">
          <div><h2 id="social-title" className="font-['DM_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#d1aa50]">Find MBK</h2><p className="mt-3 max-w-xs font-['Manrope'] text-sm leading-6 text-[#b8aa90]">Official profiles and visual references.</p></div>
          <div className="grid border-l border-t border-[#d1aa50]/20 sm:grid-cols-2 lg:grid-cols-4">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-r border-[#d1aa50]/20 p-4 font-['DM_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#e7dfcf] transition hover:bg-[#d1aa50] hover:text-[#171208]"><span>{label}</span><Icon size={15} /></a>)}</div>
        </section>

        <section aria-labelledby="visual-board-title" className="mt-14 border-t border-[#d1aa50]/20 pt-6"><div className="mb-5 flex items-end justify-between gap-4"><div><h2 id="visual-board-title" className="font-['DM_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#d1aa50]">Visual reference board</h2><p className="mt-2 font-['Manrope'] text-sm text-[#b8aa90]">Selected pins from MBK&apos;s collection.</p></div><span className="font-['DM_Mono'] text-[10px] tracking-[0.16em] text-[#b8aa90]">{pinImages.length} PINS</span></div><div className="columns-2 gap-2 sm:columns-3 lg:columns-5">{pinImages.map(([image, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="mb-2 block overflow-hidden bg-[#1e180e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d1aa50]"><img src={image} srcSet={`${image.replace("/736x/", "/236x/")} 236w, ${image.replace("/736x/", "/474x/")} 474w, ${image} 736w`} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" width="736" height="980" loading="lazy" decoding="async" referrerPolicy="no-referrer" alt="Curated Pinterest visual reference selected for the MBK Global profile" className="h-auto w-full transition duration-500 hover:scale-[1.035]" /></a>)}</div></section>
        <div className="mt-16 flex justify-end"><button onClick={onBack} className="inline-flex items-center gap-3 border-b border-[#d1aa50] pb-2 font-['DM_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#f3eee2] transition hover:gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d1aa50]">Return to utility <ArrowUpRight size={14} /></button></div>
        <footer className="mt-10 border-t border-[#d1aa50]/20 pt-5 font-['DM_Mono'] text-[9px] uppercase tracking-[0.14em] text-[#b8aa90]"><div className="flex flex-wrap items-center justify-between gap-4"><span>© {new Date().getFullYear()} MBK Global</span><nav aria-label="Profile footer links" className="flex flex-wrap gap-4"><a href="/sitemap.xml" className="hover:text-[#d1aa50]">Sitemap</a><a href="/llms.txt" className="hover:text-[#d1aa50]">LLMs</a><a href="/robots.txt" className="hover:text-[#d1aa50]">Robots</a><a href="mailto:Bakhtawark085@gmail.com" className="normal-case hover:text-[#d1aa50]">Email</a><a href="tel:03200276941" className="hover:text-[#d1aa50]">Call</a></nav></div></footer>
      </main>
    </div>
  );
}
