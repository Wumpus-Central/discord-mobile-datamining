// _runtime/04214_formatISO9075.js
import toDate_mod from "03958_toDate.js";
import isValid_mod from "04140_isValid.js";
import addLeadingZeros_mod from "04201_addLeadingZeros.js";

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
let isValid = isValid_mod;
if (!isValid) {
  tmp5 = { default: isValid };
  const obj2 = { default: isValid };
} else {
  tmp5 = isValid;
}
isValid = tmp5;
let addLeadingZeros = addLeadingZeros_mod;
if (!addLeadingZeros) {
  tmp7 = { default: addLeadingZeros };
  const obj3 = { default: addLeadingZeros };
} else {
  tmp7 = addLeadingZeros;
}
addLeadingZeros = tmp7;

export default function formatISO9075(arg0, format) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 argument required, but only ".concat;
    const self7 = this;
    const self8 = this;
    const typeError = new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = toDate.default(arg0);
    if (isValid.default(defaultResult)) {
      format = undefined;
      const _String = String;
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
      const _StringResult = _String(str3);
      let representation;
      const _String2 = String;
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
      const _String2Result = _String2(str5);
      if ("extended" !== _StringResult) {
        if ("basic" !== _StringResult) {
          const _RangeError3 = RangeError;
          const self5 = this;
          const self6 = this;
          const rangeError = new RangeError("format must be 'extended' or 'basic'");
          throw rangeError;
        }
      }
      if ("date" !== _String2Result) {
        if ("time" !== _String2Result) {
          if ("complete" !== _String2Result) {
            const _RangeError2 = RangeError;
            const self3 = this;
            const self4 = this;
            const rangeError1 = new RangeError("representation must be 'date', 'time', or 'complete'");
            throw rangeError1;
          }
        }
      }
      let str10 = "";
      if ("extended" === _StringResult) {
        str10 = "-";
      }
      let str11 = "";
      if ("extended" === _StringResult) {
        str11 = ":";
      }
      let str13 = "";
      if ("time" !== _String2Result) {
        const concat3 = "".concat;
        const defaultResult1 = addLeadingZeros.default(defaultResult.getDate(), 2);
        const defaultResult2 = addLeadingZeros.default(defaultResult.getMonth() + 1, 2);
        const combined = "".concat(addLeadingZeros.default(defaultResult.getFullYear(), 4));
        const combined1 = combined.concat(str10);
        const combined2 = combined1.concat(defaultResult2);
        const combined3 = combined2.concat(str10);
        str13 = combined3.concat(defaultResult1);
      }
      let combined10 = str13;
      if ("date" !== _String2Result) {
        let str14 = " ";
        const defaultResult3 = addLeadingZeros.default(defaultResult.getHours(), 2);
        const defaultResult4 = addLeadingZeros.default(defaultResult.getMinutes(), 2);
        const defaultResult5 = addLeadingZeros.default(defaultResult.getSeconds(), 2);
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
        combined10 = combined9.concat(defaultResult5);
      }
      return combined10;
    } else {
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError2 = new RangeError("Invalid time value");
      throw rangeError2;
    }
  }
}
