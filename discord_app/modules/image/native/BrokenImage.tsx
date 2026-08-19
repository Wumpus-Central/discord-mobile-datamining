// === Module 11261: BrokenImage ===

// Module 11261 (BrokenImage)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 6571 */;
import inlineStylesDefault from "inlineStyles" /* 6571 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default function BrokenImage(arg0) {
  const obj = { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" };
  const merged = Object.assign(arg0);
  obj.children = jsx(inlineStyles.Path, { d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z" });
  return jsx(inlineStylesDefault, { width: 24, height: 24, fill: "hsl(217, 7.6%, 33.5%)" });
};