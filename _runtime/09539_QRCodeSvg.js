// === Module 9539: QRCodeSvg ===

// Module 9539 (QRCodeSvg)
import inlineStyles from "inlineStyles" /* 8136 */;
import module_9536 from "module_9536" /* 9536 */;
import react_mod from "react" /* 19 */;

let hasOwnProperty;

let _default;
let _default2;
let items;
let items1;
let tmp3;
let tmp4;
const fn = Object.assign || (function(arg0) {
  let num;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10012 in tmp) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(tmp, key10012)) {
        continue;
      } else {
        arg0[key10012] = tmp[key10012];
        continue;
      }
      continue;
    }
  }
  return arg0;
});
if (!module_9536) {
  let obj = { default: module_9536 };
  tmp3 = obj;
} else {
  tmp3 = module_9536;
}
let react = react_mod;
if (!react) {
  tmp4 = { default: react };
  const obj2 = { default: react };
} else {
  tmp4 = react;
}
react = tmp4;
const obj3 = { bgColor: _default.oneOfType(items).isRequired, bgD: tmp3.default.string.isRequired, fgColor: _default2.oneOfType(items1).isRequired, fgD: tmp3.default.string.isRequired, size: tmp3.default.number.isRequired, viewBoxSize: tmp3.default.number.isRequired };
_default = tmp3.default;
items = [tmp3.default.object, tmp3.default.string];
_default2 = tmp3.default;
items1 = [tmp3.default.object, tmp3.default.string];
const forwardRefResult = react.forwardRef((obj, ref) => {
  let bgColor;
  let bgD;
  let fgColor;
  let fgD;
  let viewBoxSize;
  ({ size, viewBoxSize } = obj);
  const items = ["bgColor", "bgD", "fgD", "fgColor", "size", "viewBoxSize"];
  obj = {};
  ({ bgColor, bgD, fgD, fgColor } = obj);
  for (const key10013 in obj) {
    if (items.indexOf(key10013) >= 0) {
      continue;
    } else {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(obj, key10013)) {
        continue;
      } else {
        obj[key10013] = obj[key10013];
        continue;
      }
      continue;
    }
    continue;
  }
  const createElement = react.default.createElement;
  const Svg = inlineStyles.Svg;
  const size1 = { height: size, ref, style: { height: size, width: size }, viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: size };
  const _default2 = react.default;
  const _default3 = react.default;
  const tmp = fn({}, obj, size1);
  const element = _default2.createElement(inlineStyles.Path, { d: bgD, fill: bgColor });
  return <Svg {...tmp}>{element}{_default3.createElement(inlineStyles.Path, { d, fill })}</Svg>;
});
forwardRefResult.displayName = "QRCodeSvg";
forwardRefResult.propTypes = obj3;
forwardRefResult.defaultProps = {};

export default forwardRefResult;