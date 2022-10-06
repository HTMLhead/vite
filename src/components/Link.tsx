import React from "react";
import { useRouter } from "../customHooks";

interface IActiveLinkProps {
  children: React.ReactElement[] | React.ReactElement;
  href: string;
}
const Link: React.FC<IActiveLinkProps> = ({ children, href }) => {
  const { push } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
