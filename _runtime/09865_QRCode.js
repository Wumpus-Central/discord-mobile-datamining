// === Module 9865: QRCode ===

// Module 9865 (QRCode)
import QRCode from "module_9866" /* 9866 */;
import module_9870 from "module_9870" /* 9870 */;
import emptyFunction from "module_9875" /* 9875 */;
import noop from "module_19" /* 19 */;
import QRCodeSvg from "QRCodeSvg" /* 9878 */;

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
if (!QRCode) {
  let obj = { default: QRCode };
  let tmp3 = obj;
} else {
  tmp3 = QRCode;
}
QRCode = tmp3;
if (!module_9870) {
  obj = { default: module_9870 };
  let tmp5 = obj;
} else {
  tmp5 = module_9870;
}
module_9870 = tmp5;
if (!emptyFunction) {
  obj = { default: emptyFunction };
  let tmp7 = obj;
} else {
  tmp7 = emptyFunction;
}
if (!noop) {
  const obj1 = { default: noop };
  let tmp8 = obj1;
} else {
  tmp8 = noop;
}
noop = tmp8;
if (!QRCodeSvg) {
  const obj2 = { default: QRCodeSvg };
  let tmp10 = obj2;
} else {
  tmp10 = QRCodeSvg;
}
QRCodeSvg = tmp10;
const obj3 = { bgColor: null, fgColor: null, level: tmp7.default.string, size: tmp7.default.number, value: tmp7.default.string.isRequired };
let items = [tmp7.default.object, tmp7.default.string];
obj3.bgColor = tmp7.default.oneOfType(items);
const items1 = [tmp7.default.object, tmp7.default.string];
obj3.fgColor = tmp7.default.oneOfType(items1);
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
  let _default = new QRCode.default(-1, module_9870.default[level]);
  _default.addData(value);
  _default.make();
  const modules = _default.modules;
  _default = noop.default;
  obj = { bgColor, bgD: null, fgColor: null, fgD: null, ref: null, size: null, viewBoxSize: null };
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
  obj.bgD = mapped.join(" ");
  obj.fgColor = fgColor;
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
  obj.fgD = mapped1.join(" ");
  obj.ref = ref;
  obj.size = size;
  obj.viewBoxSize = modules.length;
  return <QRCodeSvg.default {......fn({}, obj, obj)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = obj3;
forwardRefResult.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 };

export default forwardRefResult;