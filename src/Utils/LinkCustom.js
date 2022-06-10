import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

function LinkCustom({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link style={{ textDecoration: "none", borderBottom: "4px solid", borderBottomColor: match ? "#61DAFB" : "transparent" , color: match ? "#61DAFB" : "#ffffff", transition: "border-bottom-color 0.25s ease-in-out, color 0.25s ease-in-out, font-width 0.25s ease-in-out" }} to={to} {...props} > {children} </Link> //{match && ""}
  );
}

export default LinkCustom;