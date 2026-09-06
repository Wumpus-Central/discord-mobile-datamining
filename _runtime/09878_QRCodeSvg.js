// === Module 9878: QRCodeSvg ===

// Module 9878 (QRCodeSvg)
import inlineStyles from "inlineStyles" /* 8453 */;
import emptyFunction from "module_9875" /* 9875 */;
import noop from "module_19" /* 19 */;

let fn = Object.assign;
if (!fn) {
  fn = (arg0) => {
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp = arguments[num];
      for (const key10012 in tmp) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty(key10012);
        } else {
          hasOwnPropertyResult = call(tmp, key10012);
        }
        if (!hasOwnPropertyResult) {
          continue;
        } else {
          arg0[key10012] = tmp[key10012];
          continue;
        }
        continue;
      }
    }
    return arg0;
  };
}
if (!emptyFunction) {
  let obj = { default: emptyFunction };
  let tmp3 = obj;
} else {
  tmp3 = emptyFunction;
}
if (!noop) {
  obj = { default: noop };
  let tmp4 = obj;
} else {
  tmp4 = noop;
}
noop = tmp4;
obj = { bgColor: null, bgD: tmp3.default.string.isRequired, fgColor: null, fgD: tmp3.default.string.isRequired, size: tmp3.default.number.isRequired, viewBoxSize: tmp3.default.number.isRequired };
let items = [tmp3.default.object, tmp3.default.string];
obj.bgColor = tmp3.default.oneOfType(items).isRequired;
const items1 = [tmp3.default.object, tmp3.default.string];
obj.fgColor = tmp3.default.oneOfType(items1).isRequired;
const forwardRefResult = noop.forwardRef((obj, ref) => {
  ({ size, viewBoxSize } = obj);
  const items = ["bgColor", "bgD", "fgD", "fgColor", "size", "viewBoxSize"];
  obj = {};
  ({ bgColor, bgD, fgD, fgColor } = obj);
  for (const key10013 in arg0) {
    if (items.indexOf(key10013) >= 0) {
      continue;
    } else {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10013);
      } else {
        hasOwnPropertyResult = call(arg0, key10013);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10013] = arg0[key10013];
        continue;
      }
      continue;
    }
    continue;
  }
  size = { height: size, ref, style: { height: size, width: size }, viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: size };
  const element = noop.default.createElement(inlineStyles.Path, { d: bgD, fill: bgColor });
  return noop.default.createElement(inlineStyles.Svg, fn({}, obj, size), element, noop.default.createElement(inlineStyles.Path, { d, fill }));
});
forwardRefResult.displayName = "QRCodeSvg";
forwardRefResult.propTypes = obj;
forwardRefResult.defaultProps = {};

export default forwardRefResult;