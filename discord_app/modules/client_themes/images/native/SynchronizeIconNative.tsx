// === Module 14804: SynchronizeIcon ===

// Module 14804 (SynchronizeIcon)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 8187 */;
import inlineStylesDefault from "inlineStyles" /* 8187 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default function SynchronizeIcon(iconStyles) {
  const fill = iconStyles.fill;
  let obj = { style: iconStyles.iconStyles, x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 24 24", fill, children: null };
  obj = { id: "Frame_-_24px", children: callback(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }) };
  const items = [callback(inlineStyles.G, obj), ];
  obj = { id: "Filled_Icons", children: null };
  obj1 = { children: null };
  const items1 = [callback(inlineStyles.Path, { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" }), callback(inlineStyles.Path, { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" })];
  obj1[0] = items1;
  obj[1] = callback2(inlineStyles.G, obj1);
  items[1] = callback(inlineStyles.G, obj);
  obj[7] = items;
  return callback2(inlineStylesDefault, obj);
};