const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-rose-600 py-20 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-center max-w-2xl">
        Hi, I’m Umair Dilshad A passionate Frontend Developer dedicated to transforming 
        ideas into stunning, functional web applications. With expertise in cutting-edge 
        technologies like React, Next.js, and TypeScript, I create seamless user experiences
         that captivate and engage. Lets bring your vision to life together!
  
  
        </p>
        <a
          href="#projects"
          className="bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-rose-700 transition duration-300"
        >
          View My Projects
        </a>
      </div>
    );
  };
  
  export default Hero;