// === Module 13904: CloseIcon ===

// Module 13904 (CloseIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["width", "height", "color"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let height;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let width;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ width, height, color } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    cResult[2] = width;
    cResult[3] = height;
    cResult[4] = color;
    tmp7 = color;
    tmp6 = height;
    tmp5 = width;
    tmp4 = tmp10;
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
    const tmp13 = jsx(inlineStyles.Path, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" });
    cResult[5] = str;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === num6) {
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp11) {
        let tmp14;
        if (cResult[10] === num7) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const Svg = inlineStyles.Svg;
  const merged = Object.assign(tmp4);
  const tmp16 = <Svg width={num7} height={num6} viewBox="0 0 24 24">{tmp11}</Svg>;
  cResult[7] = num6;
  cResult[8] = tmp4;
  cResult[9] = tmp11;
  cResult[10] = num7;
  cResult[11] = tmp16;
  tmp14 = tmp16;
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
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  return <Svg width={num} height={num2} viewBox="0 0 24 24">{jsx(inlineStyles.Path, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" })}</Svg>;
});
const result = size.fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

export default tmp3;