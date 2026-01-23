import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  PlayCircle,
  Image as ImageIcon,
  Briefcase,
  ExternalLink,
  User,
} from "lucide-react";

// --- INTERNAL COMPONENTS ---

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle, mark }) => (
  <div className="mb-6 border-b border-gray-100 pb-4">
    <div className="flex justify-between items-end">
      <h2 className="text-2xl font-bold text-green-900 flex items-center gap-2">
        {title}
      </h2>
      {mark && (
        <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
          Item {mark}
        </span>
      )}
    </div>
    {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
  </div>
);

const AbstractTabs = ({ content }) => {
  const [lang, setLang] = useState("eng");
  return (
    <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex gap-2 mb-4 border-b border-gray-200 pb-2 overflow-x-auto">
        {["eng", "swa", "kam"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 text-xs font-bold rounded-full transition flex items-center gap-2 ${
              lang === l
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Globe size={14} />
            {l === "eng"
              ? "English"
              : l === "swa"
                ? "Kiswahili"
                : "Kikamba (Indigenous)"}
          </button>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed italic">
        {lang === "eng" && content.eng}
        {lang === "swa" && content.swa}
        {lang === "kam" && content.kam}
      </p>
    </div>
  );
};

// --- MAIN APPLICATION ---

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* TOP NAVIGATION */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-green-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white font-bold tracking-widest shadow-sm">
              MK
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none text-gray-900">
                Mateli Kioko
              </h1>
              <span className="text-xs text-green-700 font-semibold tracking-wide">
                CAPSTONE PORTFOLIO
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 text-sm font-medium text-gray-600">
            {["Profile", "Innovations", "Culture", "Challenges", "Online"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="px-4 py-2 hover:bg-green-50 hover:text-green-800 rounded-md transition"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* --- LEFT SIDEBAR (FIXED SCROLLING) --- */}
        <aside className="md:col-span-4 space-y-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
          {/* 1. PROFILE & RESUME CARD (Item 1) */}
          <Card className="p-6 text-center relative">
            <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full border-4 border-white shadow-md mb-4 overflow-hidden flex items-center justify-center text-gray-400">
              <User size={64} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Mateli Boniface Kioko
            </h2>
            <p className="text-green-700 font-medium mb-4 flex items-center justify-center gap-2">
              <Briefcase size={16} /> Software Developer
            </p>

            <div className="text-left space-y-3 text-sm text-gray-600 border-t pt-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-700" />{" "}
                mateliboniface@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-green-700" /> Nairobi, 00100
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="/documents/Resume_Eng.pdf"
                target="_blank"
                className="w-full py-2.5 bg-green-900 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText size={16} /> Download Resume (English)
              </a>
              <div className="flex gap-2">
                <a
                  href="/documents/Resume_swa.pdf"
                  target="_blank"
                  className="flex-1 py-2 bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-700 rounded-lg text-xs transition flex items-center justify-center gap-2"
                >
                  <Globe size={12} /> Kiswahili
                </a>
                <a
                  href="/documents/Resume_kam.pdf"
                  target="_blank"
                  className="flex-1 py-2 bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-700 rounded-lg text-xs transition flex items-center justify-center gap-2"
                >
                  <Globe size={12} /> Kikamba
                </a>
              </div>
            </div>
          </Card>

          {/* EDUCATION CARD */}
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2 flex items-center gap-2">
              <GraduationCap size={20} className="text-green-700" /> Education
            </h3>
            <div className="mb-4">
              <p className="font-bold text-sm">BBIT</p>
              <p className="text-xs text-gray-500">Dedan Kimathi University</p>
              <p className="text-xs text-gray-400">Sep 2020 - Dec 2025</p>
            </div>
            <div>
              <p className="font-bold text-sm">Software Eng. Attaché</p>
              <p className="text-xs text-gray-500">TEACH2GIVE</p>
              <p className="text-xs text-gray-400">Feb 2025 - Apr 2025</p>
            </div>
          </Card>

          {/* ONLINE PRESENCE (Item 10) - UPDATED WITH ALL 5 PLATFORMS */}
          <Card className="p-6" id="online">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2 flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Globe size={20} className="text-green-700" /> Online Presence
              </span>
              <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                Item 10
              </span>
            </h3>
            <ul className="space-y-3 text-sm">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mateli-boniface-524159242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Linkedin size={16} />
                </div>
                <span className="group-hover:text-blue-600 transition font-medium text-gray-700">
                  LinkedIn
                </span>
                <ExternalLink
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition text-gray-400"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mcodes23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center">
                  <Github size={16} />
                </div>
                <span className="group-hover:text-gray-900 transition font-medium text-gray-700">
                  GitHub
                </span>
                <ExternalLink
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition text-gray-400"
                />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/boniface_mateli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                  <Twitter size={16} />
                </div>
                <span className="group-hover:text-sky-500 transition font-medium text-gray-700">
                  Twitter / X
                </span>
                <ExternalLink
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition text-gray-400"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/iammateli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Facebook size={16} />
                </div>
                <span className="group-hover:text-blue-700 transition font-medium text-gray-700">
                  Facebook
                </span>
                <ExternalLink
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition text-gray-400"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/iammateli/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Instagram size={16} />
                </div>
                <span className="group-hover:text-pink-600 transition font-medium text-gray-700">
                  Instagram
                </span>
                <ExternalLink
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition text-gray-400"
                />
              </a>
            </ul>
          </Card>
        </aside>

        {/* --- RIGHT MAIN CONTENT --- */}
        <div className="md:col-span-8 space-y-16">
          {/* AUTOBIOGRAPHY (Item 2 & 3) */}
          <section id="profile" className="scroll-mt-24">
            <SectionTitle
              title="Autobiographical Profile"
              subtitle="The journey from Laini Saba to Software Engineering."
              mark="2 & 3"
            />
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <FileText size={100} />
              </div>

              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <User size={20} className="text-green-700" /> My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                "If you look at my hands now—hovering over a mechanical
                keyboard, configuring servers—you would never guess where they
                began." <br />
                <br />
                My journey from the uneven walls of Laini Saba to mastering
                DevOps and Full Stack development is defined by resilience. Now
                a final-year BBIT student at DeKUT, I combine technical
                precision with a drive to solve real-world problems. My
                philosophy is simple: systems, like life, must be maintained,
                monitored, and improved continuously.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <a
                  href="/documents/Autobiography.pdf"
                  download
                  className="flex items-center gap-2 bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-800 transition shadow-sm"
                >
                  <FileText size={18} /> Download Full Autobiography (PDF)
                </a>
                <a
                  href="/documents/Bio_Presentation.pptx"
                  download
                  className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-700 transition"
                >
                  <Download size={18} /> Download Presentation (PPT)
                </a>
              </div>
            </div>
          </section>

          {/* INNOVATION (Item 4 & 5) */}
          <section id="innovations" className="scroll-mt-24">
            <SectionTitle
              title="Innovation: HelaTax"
              subtitle="AI-Powered Tax Assistant for Kenyans"
              mark="4 & 5"
            />

            {/* HELATAX VIDEO EMBED */}
            <Card className="bg-black aspect-video flex flex-col items-center justify-center relative mb-6 shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/00UxSdUH7Bo"
                title="HelaTax Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>

            <div className="flex justify-end mb-4">
              <a
                href="/documents/HelaTax_Presentation.pptx"
                download
                className="text-green-700 text-sm font-semibold hover:underline flex items-center gap-1"
              >
                <Download size={16} /> Download HelaTax PPT
              </a>
            </div>

            <AbstractTabs
              content={{
                eng: "HelaTax is an AI-powered digital assistant designed to demystify tax compliance for Kenyan citizens. By leveraging machine learning, it offers personalized tax insights and automated filing guidance, directly addressing the complexity of the KRA system.",
                swa: "HelaTax ni mfumo wa kidijitali unaotumia akili bandia (AI) kurahisisha ulipaji ushuru kwa Wakenya. Mfumo huu unatoa mwongozo binafsi wa kodi na kusaidia kujaza fomu kiotomatiki, ukisuluhisha changamoto za mfumo wa KRA.",
                kam: "HelaTax ni mthithyo wa kielektroniki utumiao uyi mwingi (AI) kuthamburukya maweta ma koti kwond wa Akenya. Mthithyo uu unanengana utethyo wa koti na kuvulia fomu bila thina.",
              }}
            />
          </section>

          {/* CULTURE (Item 6 & 7) */}
          <section id="culture" className="scroll-mt-24">
            <SectionTitle
              title="Culture & Gender"
              subtitle="Importance of Culture & Gender Awareness"
              mark="6 & 7"
            />

            {/* CULTURE VIDEO EMBED */}
            <Card className="bg-black aspect-video flex flex-col items-center justify-center relative mb-6 shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nzfSS9ULV6I"
                title="Culture Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>

            <div className="flex justify-end mb-4">
              <a
                href="/documents/Culture_Presentation.pptx"
                download
                className="text-green-700 text-sm font-semibold hover:underline flex items-center gap-1"
              >
                <Download size={16} /> Download Culture PPT
              </a>
            </div>

            <AbstractTabs
              content={{
                eng: "This presentation explores Ubuntu, a foundational principle of African culture emphasizing communal living, shared responsibility, and collective identity. It examines how traditional African societies valued cooperation over individualism and how this worldview shaped social organization, leadership, and gender relations across East, West, and Southern Africa. Contrary to common misconceptions, the study highlights that pre-colonial African societies often practiced complementary gender roles that allowed women significant economic, political, and social influence. The presentation further analyzes how colonial systems disrupted this balance by introducing foreign patriarchal structures that marginalized women and redefined gender roles. Finally, the discussion emphasizes the importance of gender awareness in contemporary African society, arguing that sustainable development requires reclaiming indigenous values of balance, inclusion, and partnership between men and women. The presentation concludes that gender equality aligns with African cultural heritage and is essential for Africa’s future growth and unity.",
                swa: "Wasilisho hili linachunguza Ubuntu, kanuni ya msingi ya utamaduni wa Kiafrika inayosisitiza maisha ya kijamii, uwajibikaji wa pamoja, na utambulisho wa kundi. Linachunguza jinsi jamii za asili za Kiafrika zilivyothamini ushirikiano kuliko ubinafsi na jinsi mtazamo huu ulivyojenga mipangilio ya kijamii, uongozi, na mahusiano ya kijinsia kote Afrika Mashariki, Magharibi, na Kusini. Kinyume na dhana potofu, utafiti huu unabainisha kuwa jamii za Kiafrika kabla ya ukoloni mara nyingi zilikuwa na majukumu ya kijinsia yanayokamilishana ambayo yaliwapa wanawake ushawishi mkubwa kiuchumi, kisiasa, na kijamii. Wasilisho linachambua zaidi jinsi mifumo ya kikoloni ilivyovuruga uwiano huu kwa kuleta mifumo dume ya kigeni iliyowatenga wanawake na kuelezea upya majukumu ya kijinsia. Hatimaye, mjadala unasisitiza umuhimu wa ufahamu wa kijinsia katika jamii ya kisasa ya Kiafrika, ukijenga hoja kwamba maendeleo endelevu yanahitaji kurudisha maadili ya asili ya uwiano, ushirikishwaji, na ushirikiano kati ya wanaume na wanawake. Wasilisho linahitimisha kuwa usawa wa kijinsia unaendana na urithi wa kitamaduni wa Kiafrika na ni muhimu kwa ukuaji na umoja wa baadaye wa Afrika.",
                kam: "Mumbyle uu niukulianya maundu ma Ubuntu, mwango mume wa kithio kya Africa ula wionany'a kwikala vamwe ta utui, kwiikwatya, na wianyo. Niukulianya iele ndui sya tene sya Africa syatalaa kwikwatya muno kwi kwikala weka na iele woni uu waumiisye mikalile ya andu, utongesi, na ngwatanio ya aka na aume Africa yonthe. Kusoma kuu nikukwonany'a kana ndui sya Africa mbee wa ukoloni syai na mawira ma aka na aume mena utethyo mwingi ula wanengae aka uwezo wa mbesa, utongesi, na kiutui. Mumbyle uu niukuchambua iele ukoloni waanangie muvango uu kwa kuete mifumo ya kigeni ya kuumya aka phambeni na kalyula mawira ma aka na aume. Mwisho, uneeni uu niukwitikila vata wa umanyi wa mawira ma aka na aume, ukyasya kana maendeeo me w'o mendaa tucokie kithio kya utui, kwiikwatya, na ngwatanio kati wa aume na aka. Mumbyle uu uminie na kwasya kana kwiiana kwa aka na aume nikwosana na kithio kya Africa na ni kwa vata muno kwond wa maendeeo na ngwatanio ya Africa.",
              }}
            />
          </section>

          {/* CHALLENGES (Item 8) */}
          <section id="challenges" className="scroll-mt-24">
            <SectionTitle
              title="Modern Challenges"
              subtitle="Identifying and Solving Societal Issues"
              mark="8"
            />

            <Card className="bg-black aspect-video flex flex-col items-center justify-center relative mb-6 shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rjFyYylGeto"
                title="Challenges Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>

            <AbstractTabs
              content={{
                eng: "Addressing the critical challenge of youth unemployment in Kenya, this project analyzes the 'skills gap' crisis. The proposed solution, 'Teach2Give,' is a tech-driven mentorship platform that bridges academic theory with industry-ready software engineering skills.",
                swa: "Kukabiliana na ukosefu wa ajira kwa vijana nchini Kenya, mradi huu unachunguza pengo la ujuzi. Suluhisho linalopendekezwa, 'Teach2Give,' ni jukwaa la kielektroniki linalounganisha nadharia za masomo na ujuzi wa kazi.",
                kam: "Kwiania thina wa kuthwa kwa wia katikati wa imwana, mradi uu niukumanya maundu ma umanyi. Nzia ya kuthiria thina uu ni 'Teach2Give', mthithyo wa kielektroniki wa kumanisya masomo na mawira.",
              }}
            />
          </section>

          {/* GALLERY (Item 9) */}
          <section id="gallery" className="scroll-mt-24">
            <SectionTitle
              title="Photo Essay"
              subtitle="Visual Documentation"
              mark="9"
            />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group hover:shadow-lg transition border border-gray-200"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs">Image {i} Placeholder</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-xs translate-y-full group-hover:translate-y-0 transition backdrop-blur-sm">
                    Caption for image {i}.
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800 mt-12">
        <p className="text-sm font-semibold">© 2026 Mateli Boniface Kioko</p>
        <p className="text-xs mt-2 opacity-50">
          Dedan Kimathi University of Technology • IGS Capstone Project
        </p>
      </footer>
    </div>
  );
}

export default App;
