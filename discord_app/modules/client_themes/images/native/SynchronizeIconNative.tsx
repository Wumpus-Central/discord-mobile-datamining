// === Module 15091: SynchronizeIconNative ===

// Module 15091 (SynchronizeIconNative)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ fill, iconStyles } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { id: "Frame_-_24px", children: React3(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }) };
    const tmp6 = React3(inlineStyles.G, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== fill) {
    const obj3 = { id: "Filled_Icons", children: null };
    const obj4 = { children: null };
    const obj5 = { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10\n\t\t\tC9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" };
    const items = [React3(inlineStyles.Path, obj5), ];
    const obj6 = { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10\n\t\t\tc2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" };
    items[1] = React3(inlineStyles.Path, obj6);
    obj4.children = items;
    obj3.children = React4(inlineStyles.G, obj4);
    const tmp10 = React3(inlineStyles.G, obj3);
    cResult[1] = fill;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === fill) {
    if (cResult[4] === iconStyles) {
      if (cResult[5] === tmp7) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const size = { style: iconStyles, x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 24 24", fill, children: null };
  const items1 = [first, tmp7];
  size.children = items1;
  const tmp12 = React4(inlineStylesDefault, size);
  cResult[3] = fill;
  cResult[4] = iconStyles;
  cResult[5] = tmp7;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((iconStyles) => {
  const fill = iconStyles.fill;
  const size = { style: iconStyles.iconStyles, x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 24 24", fill, children: null };
  const tmp = inlineStylesDefault;
  const items = [React3(inlineStyles.G, { id: "Frame_-_24px", children: React3(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }) }), ];
  const obj2 = { id: "Filled_Icons", children: null };
  const obj3 = { children: null };
  const items1 = [React3(inlineStyles.Path, { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" }), React3(inlineStyles.Path, { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" })];
  obj3.children = items1;
  obj2.children = React4(inlineStyles.G, obj3);
  items[1] = React3(inlineStyles.G, obj2);
  size.children = items;
  return React4(tmp, size);
});