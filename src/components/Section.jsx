import React from "react";

const Section = ({ id, title, subtitle, children, grayBackground = false }) => {
  return (
    <section
      id={id}
      className={`py-16 ${
        grayBackground ? "bg-academic-secondary" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-academic-accent mx-auto mt-4 rounded"></div>
        </div>

        {/* The Section Content */}
        <div className="text-academic-text leading-relaxed">{children}</div>
      </div>
    </section>
  );
};

export default Section;
