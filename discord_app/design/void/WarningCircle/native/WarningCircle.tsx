// === Module 14334: WarningCircle ===

// Module 14334 (WarningCircle)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/WarningCircle/native/WarningCircle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WarningCircle(arg0) {
  const cResult = c.c(12);
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
  let num6 = 20;
  let num7 = 20;
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
    const obj2 = { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", fillRule: "evenodd", clipRule: "evenodd", fill: str };
    const tmp13 = jsx(inlineStyles.Path, { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", fillRule: "evenodd", clipRule: "evenodd", fill: str });
    cResult[5] = str;
    cResult[6] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === num6) {
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp11) {
        if (cResult[10] === num7) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.width = num7;
  obj3.height = num6;
  obj3.viewBox = "0 0 20 20";
  obj3.children = tmp11;
  const tmp16 = jsx(inlineStyles.Svg, {});
  cResult[7] = num6;
  cResult[8] = tmp4;
  cResult[9] = tmp11;
  cResult[10] = num7;
  cResult[11] = tmp16;
  tmp14 = tmp16;
}) : (function WarningCircle(width) {
  let num = width.width;
  if (num === undefined) {
    num = 20;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 20;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 20 20";
  obj.children = jsx(inlineStyles.Path, { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", fillRule: "evenodd", clipRule: "evenodd", fill: str });
  return jsx(inlineStyles.Svg, {});
});