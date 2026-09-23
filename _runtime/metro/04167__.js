// === Module 4167: ? ===

// Module 4167
import _typeof_mod from "module_3911" /* 3911 */;
import module_4093_mod from "module_4093" /* 4093 */;
import module_4154_mod from "module_4154" /* 4154 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4093 = module_4093_mod;
if (!module_4093) {
  const obj2 = { default: module_4093 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4093;
}
module_4093 = tmp5;
let module_4154 = module_4154_mod;
if (!module_4154) {
  const obj3 = { default: module_4154 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4154;
}
module_4154 = tmp7;

export default function formatISO9075(arg0, format) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 argument required, but only ".concat;
    const typeError = new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (module_4093.default(defaultResult)) {
      format = undefined;
      if (null != format) {
        format = format.format;
      }
      let str3 = "extended";
      if (null !== format) {
        str3 = "extended";
        if (undefined !== format) {
          str3 = format;
        }
      }
      const StringResult = String(str3);
      let representation;
      if (null != format) {
        representation = format.representation;
      }
      let str5 = "complete";
      if (null !== representation) {
        str5 = "complete";
        if (undefined !== representation) {
          str5 = representation;
        }
      }
      const StringResult1 = String(str5);
      if ("extended" !== StringResult) {
        if ("basic" !== StringResult) {
          const _RangeError3 = RangeError;
          const rangeError = new RangeError("format must be 'extended' or 'basic'");
          throw rangeError;
        }
      }
      if ("date" !== StringResult1) {
        if ("time" !== StringResult1) {
          if ("complete" !== StringResult1) {
            const _RangeError2 = RangeError;
            const rangeError1 = new RangeError("representation must be 'date', 'time', or 'complete'");
            throw rangeError1;
          }
        }
      }
      let str10 = "";
      if ("extended" === StringResult) {
        str10 = "-";
      }
      let str11 = "";
      if ("extended" === StringResult) {
        str11 = ":";
      }
      let str13 = "";
      if ("time" !== StringResult1) {
        const defaultResult1 = module_4154.default(defaultResult.getDate(), 2);
        const concat3 = "".concat;
        const combined = "".concat(module_4154.default(defaultResult.getFullYear(), 4));
        const combined1 = combined.concat(str10);
        const combined2 = combined1.concat(module_4154.default(defaultResult.getMonth() + 1, 2));
        const combined3 = combined2.concat(str10);
        str13 = combined3.concat(defaultResult1);
        const defaultResult2 = module_4154.default(defaultResult.getMonth() + 1, 2);
      }
      let combined10 = str13;
      if ("date" !== StringResult1) {
        const defaultResult3 = module_4154.default(defaultResult.getHours(), 2);
        let str14 = " ";
        const defaultResult4 = module_4154.default(defaultResult.getMinutes(), 2);
        if ("" === str13) {
          str14 = "";
        }
        const concat = "".concat;
        const combined4 = "".concat(str13);
        const combined5 = combined4.concat(str14);
        const combined6 = combined5.concat(defaultResult3);
        const combined7 = combined6.concat(str11);
        const combined8 = combined7.concat(defaultResult4);
        const combined9 = combined8.concat(str11);
        combined10 = combined9.concat(module_4154.default(defaultResult.getSeconds(), 2));
        const defaultResult5 = module_4154.default(defaultResult.getSeconds(), 2);
      }
      return combined10;
    } else {
      const _RangeError = RangeError;
      const rangeError2 = new RangeError("Invalid time value");
      throw rangeError2;
    }
  }
};
export default exports.default;