// === Module 1544: getPatternParts ===

// Module 1544 (getPatternParts)
import closure_0 from "_slicedToArray" /* 32 */;


export const getPatternParts = function getPatternParts(path) {
  const items = [];
  let obj = { segment: "" };
  let num = 0;
  let num2 = 0;
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  if (0 <= path.length) {
    while (true) {
      let tmp = path[num];
      let tmp2 = num;
      let tmp3 = num2;
      let flag6 = flag;
      let tmp4 = flag2;
      let tmp5 = flag3;
      let tmp6 = flag4;
      let tmp7 = obj;
      if (null != tmp) {
        obj.segment = obj.segment + tmp;
      }
      if (":" === tmp) {
        let sum = num2;
        let flag7 = true;
        let flag8 = flag4;
        if (":" !== obj.segment) {
          sum = num2;
          flag7 = flag3;
          flag8 = flag4;
          if (!flag4) {
            let tmp30 = globalThis;
            let _Error4 = Error;
            let _HermesInternal4 = HermesInternal;
            let str8 = "Encountered ':' in the middle of a segment in path: ";
            let tmp31 = new.target;
            let tmp32 = new.target;
            error = new Error("Encountered ':' in the middle of a segment in path: " + path);
            let tmp34 = error;
            throw error;
          }
        }
        let tmp35 = flag6;
        let tmp36 = flag2;
        if (flag8) {
          obj.regex = obj.regex || "";
          obj.regex = obj.regex + tmp;
          let tmp37 = flag6;
          let flag10 = false;
          if (!flag2) {
            let tmp38 = flag6;
            let flag11 = true;
            if ("\\" !== tmp) {
              let flag12 = true;
              if ("[" !== tmp) {
                if ("]" === tmp) {
                  flag6 = false;
                }
                flag12 = flag6;
              }
              tmp38 = flag12;
              flag11 = flag2;
            }
            tmp37 = tmp38;
            flag10 = flag11;
          }
          tmp35 = tmp37;
          tmp36 = flag10;
        }
        let tmp39 = flag7;
        if (flag7) {
          tmp39 = !flag8;
        }
        let tmp24 = sum;
        let tmp25 = tmp35;
        let tmp26 = tmp36;
        let flag9 = flag7;
        let tmp27 = flag8;
        let tmp28 = obj;
        if (tmp39) {
          obj.param = obj.param || "";
          obj.param = obj.param + tmp;
          tmp24 = sum;
          tmp25 = tmp35;
          tmp26 = tmp36;
          flag9 = flag7;
          tmp27 = flag8;
          tmp28 = obj;
        }
      } else {
        if ("(" === tmp) {
          if (!flag2) {
            if (!flag6) {
              if (!flag3) {
                break;
              } else {
                sum = num2;
                flag7 = flag3;
                flag8 = true;
                if (flag4) {
                  sum = num2 + 1;
                  flag7 = flag3;
                  flag8 = flag4;
                }
              }
            }
          }
        }
        if (")" === tmp) {
          if (!flag2) {
            if (!flag6) {
              if (flag3) {
                if (flag4) {
                  if (num2) {
                    sum = num2 - 1;
                    flag7 = flag3;
                    flag8 = flag4;
                  } else {
                    obj.regex = obj.regex + tmp;
                    sum = num2;
                    flag7 = false;
                    flag8 = false;
                  }
                }
              }
              let tmp14 = globalThis;
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str2 = "Encountered ')' without preceding '(' in path: ";
              let tmp15 = new.target;
              let tmp16 = new.target;
              let error1 = new Error("Encountered ')' without preceding '(' in path: " + path);
              let tmp18 = error1;
              throw error1;
            }
          }
        }
        if ("?" === tmp) {
          if (!flag4) {
            if (obj.param) {
              obj.optional = true;
              sum = num2;
              flag7 = false;
              flag8 = flag4;
            } else {
              let tmp19 = globalThis;
              let _Error3 = Error;
              let _HermesInternal3 = HermesInternal;
              let str3 = "Encountered '?' without preceding ':' in path: ";
              let tmp20 = new.target;
              let tmp21 = new.target;
              let error2 = new Error("Encountered '?' without preceding ':' in path: " + path);
              let tmp23 = error2;
              throw error2;
            }
          }
        }
        if (null == tmp) {
          let str4 = obj.segment;
          obj.segment = str4.replace(/\/$/, "");
          tmp24 = num2;
          tmp25 = flag6;
          tmp26 = flag2;
          flag9 = false;
          tmp27 = flag4;
          tmp28 = obj;
          if ("" !== obj.segment) {
            if (obj.param) {
              let str5 = obj.param;
              obj.param = str5.replace(/^:/, "");
            }
            if (obj.regex) {
              let str6 = obj.regex;
              let str7 = str6.replace(/^\(/, "");
              obj.regex = str7.replace(/\)$/, "");
            }
            let arr = items.push(obj);
            flag5 = flag4;
            if (null != tmp) {
              obj = { segment: "" };
              sum = num2;
              flag7 = false;
              flag8 = flag4;
            }
          }
        } else {
          sum = num2;
          flag7 = flag3;
          flag8 = flag4;
          if ("/" === tmp) {
            sum = num2;
            flag7 = flag3;
            flag8 = flag4;
          }
        }
      }
      num = num + 1;
      num2 = tmp24;
      flag = tmp25;
      flag2 = tmp26;
      flag3 = flag9;
      flag4 = tmp27;
      obj = tmp28;
      flag5 = tmp27;
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error3 = new Error("Encountered '(' without preceding ':' in path: " + path);
    throw error3;
  }
  if (flag5) {
    const _Error6 = Error;
    const _HermesInternal6 = HermesInternal;
    const error4 = new Error("Could not find closing ')' in path: " + path);
    throw error4;
  } else {
    const mapped = items.map((param) => param.param);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const entries = found.entries();
    const tmp43 = entries[Symbol.iterator]();
    while (tmp43 !== undefined) {
      let tmp47 = callback;
      let tmp48 = callback(tmp45, 2);
      [tmp49, tmp50] = tmp48;
      let tmp51 = tmp50;
      if (found.indexOf(tmp50) !== tmp49) {
        let _Error5 = Error;
        let tmp52 = tmp50;
        let _HermesInternal5 = HermesInternal;
        let str9 = "' found in path: ";
        let str10 = "Duplicate param name '";
        let tmp53 = new.target;
        let tmp54 = new.target;
        let error5 = new Error("Duplicate param name '" + tmp51 + "' found in path: " + path);
        let tmp56 = error5;
        throw error5;
      }
    }
    return items;
  }
};