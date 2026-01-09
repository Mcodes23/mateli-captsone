import React from "react";

function App() {
  // Simple scrolling function
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* --- NAVIGATION BAR --- */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-bold text-xl text-green-900">
            Mateli Boniface Kioko
          </h1>

          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <button
              onClick={() => scrollTo("profile")}
              className="hover:text-green-900"
            >
              Profile
            </button>
            <button
              onClick={() => scrollTo("innovations")}
              className="hover:text-green-900"
            >
              Innovation
            </button>
            <button
              onClick={() => scrollTo("culture")}
              className="hover:text-green-900"
            >
              Culture
            </button>
            <button
              onClick={() => scrollTo("challenges")}
              className="hover:text-green-900"
            >
              Challenges
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="hover:text-green-900"
            >
              Gallery
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="bg-green-900 text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Capstone Project Portfolio</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          IGS 4101/4202 Critical Thinking & Communication Skills
        </p>
        <p className="mt-2 text-sm opacity-75">
          Dedan Kimathi University of Technology
        </p>
      </header>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        {/* 1. PROFILE & RESUME */}
        <section id="profile" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">
            1. Profile & Resume
          </h2>
          <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
            <p className="mb-4 text-gray-600">
              [cite_start]<strong>Objective:</strong> Motivated software
              developer with a strong foundation in Node.js, JavaScript, and
              backend development[cite: 15].
            </p>
            <div className="flex gap-4">
              {/* These buttons will link to your PDFs later */}
              <button className="bg-green-700 text-white px-4 py-2 rounded text-sm">
                Download Resume (English)
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">
                Kiswahili
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">
                Kikamba
              </button>
            </div>
          </div>
        </section>

        {/* 2. INNOVATION */}
        <section id="innovations" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">
            2. Innovation (HelaTax)
          </h2>
          <div className="bg-gray-100 p-8 rounded text-center border-2 border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">VIDEO PLACEHOLDER (20 Mins)</p>
            [cite_start]
            <p className="text-sm text-gray-600">
              Topic: HelaTax - AI Powered Tax Assistant [cite: 40]
            </p>
          </div>
        </section>

        {/* 3. CULTURE */}
        <section id="culture" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">
            3. African Culture
          </h2>
          <div className="bg-gray-100 p-8 rounded text-center border-2 border-dashed border-gray-300">
            <p className="text-gray-500">VIDEO PLACEHOLDER (20 Mins)</p>
            <p className="text-sm text-gray-600 mt-2">
              Topic: Importance of Culture & Gender Awareness
            </p>
          </div>
        </section>

        {/* 4. CHALLENGES */}
        <section id="challenges" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">
            4. Modern Challenges
          </h2>
          <div className="bg-gray-100 p-8 rounded text-center border-2 border-dashed border-gray-300">
            <p className="text-gray-500">VIDEO PLACEHOLDER (20 Mins)</p>
            <p className="text-sm text-gray-600 mt-2">
              Topic: Societal Challenges & Solutions
            </p>
          </div>
        </section>

        {/* 5. GALLERY */}
        <section id="gallery" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">
            5. Photo Essay
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-gray-200 rounded"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>© 2026 Mateli Boniface Kioko</p>
      </footer>
    </div>
  );
}

export default App;
