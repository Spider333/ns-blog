export function Footer() {
  return (
    <footer className="bg-polystate-blue dark:bg-slate-950">
      <div className="container mx-auto px-5">
        <div className="py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Polystate
            </h3>
            <p className="text-blue-200 mt-1 text-sm">
              Your guide to voluntary sovereignty.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://polystate.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors font-medium text-sm"
            >
              polystate.io
            </a>
            <a
              href="https://x.com/polystateHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors font-medium text-sm"
            >
              @polystateHQ
            </a>
          </div>
        </div>
        <div className="border-t border-blue-400/30 py-6">
          <p className="text-blue-200 text-sm text-center">
            &copy; {new Date().getFullYear()} Polystate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
