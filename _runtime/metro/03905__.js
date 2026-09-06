// === Module 3905: ? ===

// Module 3905
import _typeof from "module_3650" /* 3650 */;
import module_3893 from "module_3893" /* 3893 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3893) {
  obj = { default: module_3893 };
  let tmp5 = obj;
} else {
  tmp5 = module_3893;
}
module_3893 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function formatISO(arg0, format) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError3 = RangeError;
    const rangeError = new RangeError("Invalid time value");
    throw rangeError;
  } else {
    format = undefined;
    if (null != format) {
      format = format.format;
    }
    let str2 = "extended";
    if (null !== format) {
      str2 = "extended";
      if (undefined !== format) {
        str2 = format;
      }
    }
    const StringResult = String(str2);
    let representation;
    if (null != format) {
      representation = format.representation;
    }
    let str4 = "complete";
    if (null !== representation) {
      str4 = "complete";
      if (undefined !== representation) {
        str4 = representation;
      }
    }
    const StringResult1 = String(str4);
    if ("extended" !== StringResult) {
      if ("basic" !== StringResult) {
        const _RangeError2 = RangeError;
        const rangeError1 = new RangeError("format must be 'extended' or 'basic'");
        throw rangeError1;
      }
    }
    if ("date" !== StringResult1) {
      if ("time" !== StringResult1) {
        if ("complete" !== StringResult1) {
          const _RangeError = RangeError;
          const rangeError2 = new RangeError("representation must be 'date', 'time', or 'complete'");
          throw rangeError2;
        }
      }
    }
    let str9 = "";
    if ("extended" === StringResult) {
      str9 = "-";
    }
    let str10 = "";
    if ("extended" === StringResult) {
      str10 = ":";
    }
    let str12 = "";
    if ("time" !== StringResult1) {
      const defaultResult2 = module_3893.default(defaultResult1.getDate(), 2);
      const concat2 = "".concat;
      const combined = "".concat(module_3893.default(defaultResult1.getFullYear(), 4));
      const combined1 = combined.concat(str9);
      const combined2 = combined1.concat(module_3893.default(defaultResult1.getMonth() + 1, 2));
      const combined3 = combined2.concat(str9);
      str12 = combined3.concat(defaultResult2);
      const defaultResult3 = module_3893.default(defaultResult1.getMonth() + 1, 2);
    }
    let combined9 = str12;
    if ("date" !== StringResult1) {
      const timezoneOffset = defaultResult1.getTimezoneOffset();
      let str13 = "Z";
      if (0 !== timezoneOffset) {
        const _Math = Math;
        const absolute = Math.abs(timezoneOffset);
        const _Math2 = Math;
        let str14 = "-";
        const defaultResult4 = module_3893.default(Math.floor(absolute / 60), 2);
        if (timezoneOffset < 0) {
          str14 = "+";
        }
        const combined4 = "".concat(str14);
        const combined5 = combined4.concat(defaultResult4, ":");
        str13 = combined5.concat(module_3893.default(absolute % 60, 2));
        const defaultResult5 = module_3893.default(absolute % 60, 2);
      }
      let str16 = "T";
      if ("" === str12) {
        str16 = "";
      }
      const items = [module_3893.default(defaultResult1.getHours(), 2), module_3893.default(defaultResult1.getMinutes(), 2), module_3893.default(defaultResult1.getSeconds(), 2)];
      const concat = "".concat;
      const joined = items.join(str10);
      const combined6 = "".concat(str12);
      const combined7 = combined6.concat(str16);
      const combined8 = combined7.concat(joined);
      combined9 = combined8.concat(str13);
    }
    return combined9;
  }
};
export default exports.default;