import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center gap-4 md:pr-8">
        <Image
          src="/assets/polystate-logo.svg"
          alt="Polystate"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-polystate-dark">
          Polystate
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-polystate-text-secondary max-w-md">
        Exploring voluntary sovereignty, network states, and the future of
        governance.
      </h4>
    </section>
  );
}
