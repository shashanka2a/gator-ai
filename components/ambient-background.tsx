export function AmbientBackground() {
  return (
    <>
      {/* Dark Mode Ambient */}
      <div className="ambient-bg hidden dark:block">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-radial from-blue-900/20 to-transparent opacity-40"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-gatorOrange/10 to-transparent opacity-30 blur-3xl"></div>
      </div>
      {/* Light Mode Ambient */}
      <div className="ambient-bg block dark:hidden">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-radial from-blue-100/40 to-transparent"></div>
      </div>
    </>
  );
}

