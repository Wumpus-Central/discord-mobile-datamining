// === Module 10127: QRCode ===

// Module 10127 (QRCode)
import QRCode_mod from "module_10128" /* 10128 */;
import module_10132_mod from "module_10132" /* 10132 */;
import emptyFunction from "module_10137" /* 10137 */;
import noop_mod from "module_19" /* 19 */;
import QRCodeSvg_mod from "QRCodeSvg" /* 10140 */;

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
let QRCode = QRCode_mod;
if (!QRCode) {
  let obj = { default: QRCode };
  let tmp3 = obj;
} else {
  tmp3 = QRCode;
}
QRCode = tmp3;
let module_10132 = module_10132_mod;
if (!module_10132) {
  let obj2 = { default: module_10132 };
  let tmp5 = obj2;
} else {
  tmp5 = module_10132;
}
module_10132 = tmp5;
if (!emptyFunction) {
  const obj3 = { default: emptyFunction };
  let tmp7 = obj3;
} else {
  tmp7 = emptyFunction;
}
let noop = noop_mod;
if (!noop) {
  const obj4 = { default: noop };
  let tmp8 = obj4;
} else {
  tmp8 = noop;
}
noop = tmp8;
let QRCodeSvg = QRCodeSvg_mod;
if (!QRCodeSvg) {
  const obj5 = { default: QRCodeSvg };
  let tmp10 = obj5;
} else {
  tmp10 = QRCodeSvg;
}
QRCodeSvg = tmp10;
const obj6 = { bgColor: null, fgColor: null, level: tmp7.default.string, size: tmp7.default.number, value: tmp7.default.string.isRequired };
let items = [tmp7.default.object, tmp7.default.string];
obj6.bgColor = tmp7.default.oneOfType(items);
const items1 = [tmp7.default.object, tmp7.default.string];
obj6.fgColor = tmp7.default.oneOfType(items1);
const forwardRefResult = noop.forwardRef((obj, ref) => {
  const items = ["bgColor", "fgColor", "level", "size", "value"];
  obj = {};
  ({ bgColor, fgColor, level, size, value } = obj);
  for (const key10012 in arg0) {
    if (items.indexOf(key10012) >= 0) {
      continue;
    } else {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10012);
      } else {
        hasOwnPropertyResult = call(arg0, key10012);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10012] = arg0[key10012];
        continue;
      }
      continue;
    }
    continue;
  }
  const _default1 = new QRCode.default(-1, module_10132.default[level]);
  _default1.addData(value);
  _default1.make();
  const modules = _default1.modules;
  const obj2 = { bgColor, bgD: null, fgColor: null, fgD: null, ref: null, size: null, viewBoxSize: null };
  let mapped = modules.map((arr, index) => {
    closure_0 = index;
    const mapped = arr.map((item, index) => {
      let str = "";
      if (!item) {
        str = `${"M " + index + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj2.bgD = mapped.join(" ");
  obj2.fgColor = fgColor;
  const mapped1 = modules.map((arr, index) => {
    closure_0 = index;
    const mapped = arr.map((item, index) => {
      let str = "";
      if (item) {
        str = `${"M " + index + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj2.fgD = mapped1.join(" ");
  obj2.ref = ref;
  obj2.size = size;
  obj2.viewBoxSize = modules.length;
  return <QRCodeSvg.default {......fn({}, obj, obj2)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = obj6;
forwardRefResult.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 };

export default forwardRefResult;