import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center">Umair Dilshad Portfolio</h1>
        <p className="text-xl text-center mt-4">
        Hi, I am Umair Dilshad! A passionate Frontend Developer dedicated to
         crafting clean, responsive websites that provide exceptional user experiences.


        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
        I excel at creating captivating and high-performance websites with the power
         of React, Next.js, and TypeScript.


        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">
              A brief description of Project 1 goes here. Explain its purpose, technology stack, and features.
            </p>
            <a
              href="https://github.com/Umairkhans19/my-first-assignment.git" // Update with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project 1 on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">
              A brief description of Project 2 goes here. Describe the project&apos;s features and technologies used.
            </p>
            <a
              href="https://github.com/Umairkhans19/second-assignment.git" // Update with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project 2 on GitHub
            </a>
          </div>

          {/* Hackathon Project */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Hackathon Project</h3>
            <p className="text-lg">
              This is a project from my recent hackathon participation. Dynamic-Resume-Builder,
              You can find the source code on GitHub.
            </p>
            <a
              href="https://github.com/Umairkhans19/milestone-3-Dynamic-Resume-Builder-by-Umair.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View the Hackathon Project on GitHub
            </a>
          </div>

          {/* Countdown Timer Project */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">simple-calculator project</h3>
            <p className="text-lg">
              This is a simple-calculator project. You can explore it on GitHub.
            </p>
            <a
              href="https://github.com/Umairkhans19/simple-calculator-2.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View the simple-calculator project on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center">
      <a
  href="https://www.linkedin.com/in/umair-khan-983788b3/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline"
>
  Connect with me on LinkedIn
</a>
      </footer>
    </div>
  );
};

export default Page;