import logo from "../assets/logo.svg";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com.yaffalhakim1")}
          className="black_btn"
        >
          Gihtub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">openAI GPT-3.5</span>
      </h1>
      <h2 className="desc">
        simplify your reading experience with our AI-powered tool that
        summarizes any piece of text into a few key bullet points.
      </h2>
    </header>
  );
}

export default Hero;
