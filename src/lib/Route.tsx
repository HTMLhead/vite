import React from "react";

export function Route({
  path,
  component,
}: {
  path: string;
  component: React.ReactElement;
}): React.ReactElement | null {
  const [currentPath, setCurrentPath] = React.useState(location.pathname);

  const listenToPopstate = () => {
    const winPath = location.pathname;
    setCurrentPath(winPath);
  };

  React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);

  if (currentPath !== path) return null;
  return component;
}
