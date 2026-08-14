// _runtime/09163_QRCode.js
import QRCode from "QRCode";
import 09168__ from "metro/09168__.js";
import emptyFunction from "emptyFunction";
import noop from "noop";
import QRCodeSvg from "QRCodeSvg";

let fn = Object.assign;
if (!fn) {
  fn = (arg0) => {
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp = arguments[num];
      let tmp2 = tmp;
      let tmp3 = num;
      for (const key10012 in tmp) {
        let tmp5 = key10012;
        let _Object = Object;
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
  let obj = { default: null };
  obj[0] = QRCode;
  let tmp3 = obj;
} else {
  tmp3 = QRCode;
}
let closure_1 = tmp3;
if (!module_9168) {
  obj = { default: null };
  obj[0] = module_9168;
  let tmp5 = obj;
} else {
  tmp5 = module_9168;
}
let obj1 = tmp5;
if (!emptyFunction) {
  obj = { default: null };
  obj[0] = emptyFunction;
  let tmp7 = obj;
} else {
  tmp7 = emptyFunction;
}
if (!noop) {
  obj1 = { default: null };
  obj1[0] = noop;
  let tmp8 = obj1;
} else {
  tmp8 = noop;
}
let c3 = tmp8;
if (!QRCodeSvg) {
  const obj2 = { default: null };
  obj2[0] = QRCodeSvg;
  let tmp10 = obj2;
} else {
  tmp10 = QRCodeSvg;
}
let c4 = tmp10;
let items = [tmp7.default.object, tmp7.default.string];
const items1 = [tmp7.default.object, tmp7.default.string];
const forwardRefResult = noop.forwardRef((obj) => {
  let bgColor;
  let fgColor;
  let level;
  let size;
  let value;
  const items = ["bgColor", "fgColor", "level", "size", "value"];
  obj = {};
  ({ bgColor, fgColor, level, size, value } = obj);
  for (const key10012 in arg0) {
    let tmp4 = key10012;
    if (items.indexOf(key10012) >= 0) {
      continue;
    } else {
      let _Object = Object;
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
  let _default = new tmp3.default(-1, tmp5.default[level]);
  _default.addData(value);
  _default.make();
  const modules = _default.modules;
  _default = tmp8.default;
  obj = { bgColor, bgD: null, fgColor: null, fgD: null, ref: null, size: null, viewBoxSize: null };
  let mapped = modules.map((arr) => {
    let closure_0 = arg1;
    const mapped = arr.map((arg0, arg1) => {
      let str = "";
      if (!arg0) {
        str = `${"M " + arg1 + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj[1] = mapped.join(" ");
  obj[2] = fgColor;
  const mapped1 = modules.map((arr) => {
    let closure_0 = arg1;
    const mapped = arr.map((arg0, arg1) => {
      let str = "";
      if (arg0) {
        str = `${"M " + arg1 + " " + closure_0} l 1 0 0 1 -1 0 Z`;
      }
      return str;
    });
    return mapped.join(" ");
  });
  obj[3] = mapped1.join(" ");
  obj[4] = arg1;
  obj[5] = size;
  obj[6] = modules.length;
  return <tmp10.default {......fn({}, obj, obj)} />;
});
forwardRefResult.displayName = "QRCode";
forwardRefResult.propTypes = { bgColor: _default.oneOfType(items), fgColor: _default2.oneOfType(items1), level: tmp7.default.string, size: tmp7.default.number, value: tmp7.default.string.isRequired };
forwardRefResult.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 };

export default forwardRefResult;