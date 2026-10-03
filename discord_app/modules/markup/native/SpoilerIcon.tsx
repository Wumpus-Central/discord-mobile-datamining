// === Module 11624: SpoilerIcon ===

// Module 11624 (SpoilerIcon)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "color"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/SpoilerIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ width, height, color } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    cResult[2] = width;
    cResult[3] = height;
    cResult[4] = color;
    let tmp7 = color;
    let tmp6 = height;
    let tmp5 = width;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let num6 = 24;
  let num7 = 24;
  if (undefined !== tmp5) {
    num7 = tmp5;
  }
  if (undefined !== tmp6) {
    num6 = tmp6;
  }
  let str = "currentColor";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  if (cResult[5] !== str) {
    const obj2 = { fill: str, d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z" };
    const tmp14 = React4(inlineStyles.Path, obj2);
    const obj3 = { fill: str, d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z" };
    const tmp15 = React4(inlineStyles.Path, obj3);
    cResult[5] = str;
    cResult[6] = tmp14;
    cResult[7] = tmp15;
    let tmp12 = tmp15;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  if (cResult[8] === num6) {
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp11) {
        if (cResult[11] === tmp12) {
          if (cResult[12] === num7) {
            let tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
    }
  }
  const obj4 = { viewBox: "0 0 24 24" };
  const merged = Object.assign(tmp4);
  obj4.width = num7;
  obj4.height = num6;
  const items = [tmp11, tmp12];
  obj4.children = items;
  const tmp18 = hasOwnProperty(inlineStyles.Svg, obj4);
  cResult[8] = num6;
  cResult[9] = tmp4;
  cResult[10] = tmp11;
  cResult[11] = tmp12;
  cResult[12] = num7;
  cResult[13] = tmp18;
  tmp16 = tmp18;
}) : ((width) => {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
  const obj = { viewBox: "0 0 24 24" };
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  const items = [React4(inlineStyles.Path, { fill: str, d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z" }), React4(inlineStyles.Path, { fill: str, d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z" })];
  obj.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj);
});