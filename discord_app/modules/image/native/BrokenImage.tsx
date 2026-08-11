// discord_app/modules/image/native/BrokenImage.tsx
import "noop";
import { jsx } from "jsxProd";
import { inlineStyles } from "../../../../_runtime/07837_inlineStyles.js";

const require = arg1;
const result = require("inlineStyles").fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default function BrokenImage(arg0) {
  const obj = { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" };
  const merged = Object.assign(arg0);
  obj.children = jsx(inlineStyles.Path, { d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z" });
  return jsx(inlineStyles, { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" });
};