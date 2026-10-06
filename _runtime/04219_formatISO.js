// === Module 4219: formatISO ===

// Module 4219 (formatISO)
import toDate_mod from "toDate" /* 3964 */;
import addLeadingZeros_mod from "addLeadingZeros" /* 4207 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let addLeadingZeros = addLeadingZeros_mod;
if (!addLeadingZeros) {
  tmp5 = { default: addLeadingZeros };
  const obj2 = { default: addLeadingZeros };
} else {
  tmp5 = addLeadingZeros;
}
addLeadingZeros = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function formatISO(arg0, format) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError3 = RangeError;
    const self5 = this;
    const self6 = this;
    const rangeError = new RangeError("Invalid time value");
    throw rangeError;
  } else {
    format = undefined;
    const _String = String;
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
    const _StringResult = _String(str2);
    let representation;
    const _String2 = String;
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
    const _String2Result = _String2(str4);
    if ("extended" !== _StringResult) {
      if ("basic" !== _StringResult) {
        const _RangeError2 = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError1 = new RangeError("format must be 'extended' or 'basic'");
        throw rangeError1;
      }
    }
    if ("date" !== _String2Result) {
      if ("time" !== _String2Result) {
        if ("complete" !== _String2Result) {
          const _RangeError = RangeError;
          const self = this;
          const self2 = this;
          const rangeError2 = new RangeError("representation must be 'date', 'time', or 'complete'");
          throw rangeError2;
        }
      }
    }
    let str9 = "";
    if ("extended" === _StringResult) {
      str9 = "-";
    }
    let str10 = "";
    if ("extended" === _StringResult) {
      str10 = ":";
    }
    let str12 = "";
    if ("time" !== _String2Result) {
      const concat2 = "".concat;
      const defaultResult2 = addLeadingZeros.default(defaultResult1.getDate(), 2);
      const defaultResult3 = addLeadingZeros.default(defaultResult1.getMonth() + 1, 2);
      const combined = "".concat(addLeadingZeros.default(defaultResult1.getFullYear(), 4));
      const combined1 = combined.concat(str9);
      const combined2 = combined1.concat(defaultResult3);
      const combined3 = combined2.concat(str9);
      str12 = combined3.concat(defaultResult2);
    }
    let combined8 = str12;
    if ("date" !== _String2Result) {
      const timezoneOffset = defaultResult1.getTimezoneOffset();
      let str13 = "Z";
      if (0 !== timezoneOffset) {
        const _Math = Math;
        const absolute = Math.abs(timezoneOffset);
        const _Math2 = Math;
        let str14 = "-";
        const concat3 = "".concat;
        const defaultResult4 = addLeadingZeros.default(Math.floor(absolute / 60), 2);
        const defaultResult5 = addLeadingZeros.default(absolute % 60, 2);
        if (timezoneOffset < 0) {
          str14 = "+";
        }
        const concat3Result = concat3(str14);
        const combined4 = concat3Result.concat(defaultResult4, ":");
        str13 = combined4.concat(defaultResult5);
      }
      let str16 = "T";
      if ("" === str12) {
        str16 = "";
      }
      const items = [addLeadingZeros.default(defaultResult1.getHours(), 2), addLeadingZeros.default(defaultResult1.getMinutes(), 2), addLeadingZeros.default(defaultResult1.getSeconds(), 2)];
      const concat = "".concat;
      const joined = items.join(str10);
      const combined5 = "".concat(str12);
      const combined6 = combined5.concat(str16);
      const combined7 = combined6.concat(joined);
      combined8 = combined7.concat(str13);
    }
    return combined8;
  }
};