import React from "react";
import HeroImg from "../assets/hero-img.png";


const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I'm <span className="text-accent">Gnik</span><br /> I'm a <span className="text-accent">Frontend Developer</span>
          </h1>

          <p className="lg:py-12 leading-8">
          I have many years of experience using <span className="font-semibold text-accent cursor-pointer"><a  href="https://example.com">ReactJs</a></span>, <span className="font-semibold text-accent">Angular</span>, <span className="font-semibold text-accent">VueJs</span> and some frameworks like <span className="font-semibold text-accent">Tailwind css</span>, <span className="font-semibold text-accent">Material</span>, <span className="font-semibold text-accent">Bootstrap</span> and I specialize in <span className="font-semibold text-accent">Scss</span>. In many large projects and many different large companies.
          </p>
          <a
            href="/#projects"
            className=" btn bg-accent text-white px-6 py-4 rounded hover:opacity-70 duration-150"
          >
           Download CV
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
