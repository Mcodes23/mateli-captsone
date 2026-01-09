import React, { useState } from "react";

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
            className={`px-3 py-1 text-xs font-bold rounded-full transition capitalize whitespace-nowrap ${
              lang === l
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
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
        {lang === "swa" &&
          (content.swa || "Hapa panaenda muhtasari kwa Kiswahili...")}
        {lang === "kam" &&
          (content.kam || "Vaapa niho veekawa ukomuso kwa Kikamba...")}
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
            <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white font-bold tracking-widest">
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
              )
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* --- LEFT SIDEBAR (FIXED SCROLLING) --- */}
        {/* Changed h-fit to max-h-[calc(100vh-8rem)] overflow-y-auto */}
        <aside className="md:col-span-4 space-y-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
          {/* 1. PROFILE & RESUME CARD (Item 1) */}
          <Card className="p-6 text-center relative">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full border-4 border-white shadow-md mb-4 overflow-hidden flex items-center justify-center text-4xl text-gray-400 font-bold bg-green-50">
              {/* Replace with <img src="/path/to/image.jpg" /> later */}
              MK
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Mateli Boniface Kioko
            </h2>
            <p className="text-green-700 font-medium mb-4">
              Software Developer (Full Stack)
            </p>

            <div className="text-left space-y-2 text-sm text-gray-600 border-t pt-4 mb-6">
              <div className="flex items-center gap-2">
                mateliboniface@gmail.com
              </div>
              <div className="flex items-center gap-2">Nairobi, 00100</div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="/documents/Resume_Eng.pdf"
                target="_blank"
                className="w-full py-2 bg-green-900 text-white rounded text-sm font-semibold hover:bg-green-800 transition"
              >
                📄 Resume (English)
              </a>
              <div className="flex gap-2">
                <a
                  href="/documents/Resume_Swa.pdf"
                  target="_blank"
                  className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs transition border border-gray-300"
                >
                  🇰🇪 Kiswahili
                </a>
                <a
                  href="/documents/Resume_Kam.pdf"
                  target="_blank"
                  className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs transition border border-gray-300"
                >
                  Kb Kikamba
                </a>
              </div>
            </div>
          </Card>

          {/* EDUCATION CARD */}
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">
              🎓 Education
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

          {/* ONLINE PRESENCE (Item 10) */}
          <Card className="p-6" id="online">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2 flex justify-between items-center">
              <span>🌐 Online</span>
              <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                Item 10
              </span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  In
                </span>
                <span className="group-hover:text-blue-600 transition">
                  LinkedIn Profile
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center">
                  Gh
                </span>
                <span className="group-hover:text-gray-900 transition">
                  GitHub Portfolio
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center">
                  Tw
                </span>
                <span className="group-hover:text-blue-400 transition">
                  Twitter / X
                </span>
              </li>
            </ul>
          </Card>
        </aside>

        {/* --- RIGHT MAIN CONTENT --- */}
        <div className="md:col-span-8 space-y-16">
          {/* AUTOBIOGRAPHY (Item 2 & 3) */}
          <section id="profile" className="scroll-mt-24">
            <SectionTitle
              title="Autobiographical Profile"
              subtitle="My journey, education, and professional background."
              mark="2 & 3"
            />
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-700">
              <h3 className="font-bold text-lg mb-2">Objective</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Motivated software developer with a strong foundation in
                Node.js, JavaScript, and backend development. Experienced in
                building full-stack applications and applying computer science
                fundamentals. Seeking a Software Engineering Internship to
                contribute technical skills and collaborate on innovative
                projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <a
                  href="/documents/Autobiography.pdf"
                  download
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800 transition"
                >
                  ⬇ Download Full Essay (PDF)
                </a>
                <button className="flex items-center gap-2 bg-white border border-green-700 text-green-700 px-4 py-2 rounded text-sm hover:bg-green-50 transition">
                  ⬇ Download Presentation (PPT)
                </button>
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

            <Card className="bg-gray-900 aspect-video flex flex-col items-center justify-center group cursor-pointer relative mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition backdrop-blur-sm">
                <span className="text-3xl ml-1 text-white">▶</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Watch HelaTax Presentation (20 Mins)
              </p>
            </Card>

            <div className="flex justify-end mb-4">
              <button className="text-green-700 text-sm font-semibold hover:underline flex items-center gap-1">
                ⬇ Download HelaTax PPT
              </button>
            </div>

            <AbstractTabs
              content={{
                eng: "HelaTax is a digital assistant designed to simplify tax filing and compliance for Kenyans. By integrating AI, it provides personalized tax insights and filing guidance.",
                swa: "HelaTax ni msaidizi wa kidijitali aliyoundwa kurahisisha uwasilishaji wa ushuru na kufuata sheria kwa Wakenya...",
                kam: "HelaTax ni msaidizi wa kidijitali aliyoundwa kurahisisha uwasilishaji wa ushuru...",
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

            <Card className="bg-gray-800 aspect-video flex flex-col items-center justify-center group cursor-pointer mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition backdrop-blur-sm">
                <span className="text-3xl ml-1 text-white">▶</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Watch Cultural Presentation (20 Mins)
              </p>
            </Card>

            <div className="flex justify-end mb-4">
              <button className="text-green-700 text-sm font-semibold hover:underline flex items-center gap-1">
                ⬇ Download Culture PPT
              </button>
            </div>

            <AbstractTabs
              content={{
                eng: "This presentation explores the critical importance of gender awareness within the African context...",
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

            <Card className="bg-gray-800 aspect-video flex flex-col items-center justify-center group cursor-pointer mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition backdrop-blur-sm">
                <span className="text-3xl ml-1 text-white">▶</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Watch Solution Presentation (20 Mins)
              </p>
            </Card>

            <AbstractTabs
              content={{
                eng: "Focusing on youth unemployment in Kenya, this project proposes a tech-driven mentorship platform...",
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
                  className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden group hover:shadow-lg transition"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Image {i}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs translate-y-full group-hover:translate-y-0 transition">
                    Caption for image {i}.
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center border-t border-gray-800 mt-12">
        <p className="text-sm">© 2026 Mateli Boniface Kioko</p>
        <p className="text-xs mt-2 opacity-50">
          Dedan Kimathi University of Technology • IGS Capstone Project
        </p>
      </footer>
    </div>
  );
}

export default App;
