import React from "react";

interface IRouteProps {
  path: string;
  component: React.ReactElement;
}
export function Router({
  children = null,
}: {
  children: React.ReactElement<IRouteProps>[] | null;
}): React.ReactElement {
  return <div>{children}</div>;
}
