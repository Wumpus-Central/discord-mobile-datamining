// === Module 5093: getTimestampString ===

// Module 5093 (getTimestampString)
import obj132 from "obj132" /* 2 */;

let c3 = 2592000;
let c4 = 31104000;
const result = obj132.fileFinishedImporting("modules/threads/getTimestampString.tsx");

export default function getTimestampString(arg0, fn) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  importDefault = undefined;
  let obj;
  obj = importDefault(obj[1])();
  const diffResult = obj.diff(importDefault(obj[1])(arg0), "s");
  let tmp4;
  if (null != fn) {
    tmp4 = fn();
  }
  function formatString(minutes, diffResult) {
    if (tmp3) {
      let tmp5 = dependencyMap[minutes];
      if (tmp5 == null) {
        let tmp6;
        if (tmp2 != null) {
          tmp6 = tmp2[minutes];
        }
        tmp5 = tmp6;
      }
      if (tmp5 == null) {
        tmp5 = null;
      }
      let tmp4 = tmp5;
    } else {
      tmp4 = undefined;
      if (tmp2 != null) {
        tmp4 = tmp2[minutes];
      }
      if (tmp4 == null) {
        tmp4 = null;
      }
    }
    let tmp7 = null;
    if (null != tmp4) {
      let formatToPlainStringResult = tmp4;
      if (typeof tmp4 !== "string") {
        const intl = flag(obj[0]).intl;
        obj = { count: null };
        obj[0] = diffResult;
        formatToPlainStringResult = intl.formatToPlainString(tmp4, obj);
      }
      tmp7 = formatToPlainStringResult;
    }
    return tmp7;
  }
  importDefault = tmp4;
  obj = { seconds: flag(tmp2[0]).t.sMPmtq, minutes: flag(tmp2[0]).t.N9M4N1, hours: flag(tmp2[0]).t.p0KedC, days: flag(tmp2[0]).t.gjK5av, months: flag(tmp2[0]).t.kHo4Or, years: flag(tmp2[0]).t.KjKr2P };
  if (diffResult < 60) {
    let seconds;
    if (tmp4 != null) {
      seconds = tmp4.seconds;
    }
    if (null != seconds) {
      let formatStringResult = formatString("seconds", diffResult);
    } else {
      formatStringResult = formatString("minutes", 1);
    }
    if (null != formatStringResult) {
      return formatStringResult;
    }
  }
  if (diffResult < 3600) {
    const _Math = Math;
    const formatStringResult1 = formatString("minutes", Math.floor(diffResult / 60));
    if (null != formatStringResult1) {
      return formatStringResult1;
    }
  }
  if (diffResult < 86400) {
    const _Math2 = Math;
    const formatStringResult2 = formatString("hours", Math.floor(diffResult / 3600));
    if (null != formatStringResult2) {
      return formatStringResult2;
    }
  }
  if (diffResult < c3) {
    const _Math3 = Math;
    const formatStringResult3 = formatString("days", Math.floor(diffResult / 86400));
    if (null != formatStringResult3) {
      return formatStringResult3;
    }
  }
  if (diffResult < c4) {
    const _Math4 = Math;
    const formatStringResult4 = formatString("months", Math.floor(diffResult / c3));
    if (null != formatStringResult4) {
      return formatStringResult4;
    }
  }
  if (diffResult >= c4) {
    let years;
    if (tmp4 != null) {
      years = tmp4.years;
    }
    if (null != years) {
      const _Math5 = Math;
      const formatStringResult5 = formatString("years", Math.floor(diffResult / c4));
      if (null != formatStringResult5) {
        return formatStringResult5;
      }
    }
  }
  return importDefault(obj[1])(arg0).format("LL");
};