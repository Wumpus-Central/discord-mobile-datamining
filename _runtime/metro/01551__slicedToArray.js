// === Module 1551: _slicedToArray ===

// Module 1551 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;


export const getPatternParts = function getPatternParts(path) {
  let tmp41;
  let tmp42;
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
      let tmp18;
      let tmp19;
      let tmp20;
      let flag9;
      let tmp21;
      let tmp22;
      let sum;
      let flag7;
      let flag8;
      let obj2;
      let tmp = path[num];
      let flag6 = flag;
      if (null != tmp) {
        obj.segment = obj.segment + tmp;
      }
      if (":" === tmp) {
        sum = num2;
        flag7 = true;
        flag8 = flag4;
        obj2 = obj;
        if (":" !== obj.segment) {
          sum = num2;
          flag7 = flag3;
          flag8 = flag4;
          obj2 = obj;
          if (!flag4) {
            let tmp24 = globalThis;
            let _Error4 = Error;
            let _HermesInternal4 = HermesInternal;
            let str8 = "Encountered ':' in the middle of a segment in path: ";
            let self7 = this;
            let self8 = this;
            let error = new Error("Encountered ':' in the middle of a segment in path: " + path);
            throw error;
          }
        }
        let tmp27 = flag6;
        let tmp28 = flag2;
        if (flag8) {
          obj2.regex = obj2.regex || "";
          obj2.regex = obj2.regex + tmp;
          let tmp29 = flag6;
          let flag10 = false;
          if (!flag2) {
            let tmp30 = flag6;
            let flag11 = true;
            if ("\\" !== tmp) {
              let flag12 = true;
              if ("[" !== tmp) {
                if ("]" === tmp) {
                  flag6 = false;
                }
                flag12 = flag6;
              }
              tmp30 = flag12;
              flag11 = flag2;
            }
            tmp29 = tmp30;
            flag10 = flag11;
          }
          tmp27 = tmp29;
          tmp28 = flag10;
        }
        let tmp31 = flag7 && !flag8;
        tmp18 = sum;
        tmp19 = tmp27;
        tmp20 = tmp28;
        flag9 = flag7;
        tmp21 = flag8;
        tmp22 = obj2;
        if (tmp31) {
          obj2.param = obj2.param || "";
          obj2.param = obj2.param + tmp;
          tmp18 = sum;
          tmp19 = tmp27;
          tmp20 = tmp28;
          flag9 = flag7;
          tmp21 = flag8;
          tmp22 = obj2;
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
                obj2 = obj;
                if (flag4) {
                  sum = num2 + 1;
                  flag7 = flag3;
                  flag8 = flag4;
                  obj2 = obj;
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
                    obj2 = obj;
                  } else {
                    obj.regex = obj.regex + tmp;
                    sum = num2;
                    flag7 = false;
                    flag8 = false;
                    obj2 = obj;
                  }
                }
              }
              let tmp12 = globalThis;
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str2 = "Encountered ')' without preceding '(' in path: ";
              let self3 = this;
              let self4 = this;
              let error1 = new Error("Encountered ')' without preceding '(' in path: " + path);
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
              obj2 = obj;
            } else {
              let tmp15 = globalThis;
              let _Error3 = Error;
              let _HermesInternal3 = HermesInternal;
              let str3 = "Encountered '?' without preceding ':' in path: ";
              let self5 = this;
              let self6 = this;
              let error2 = new Error("Encountered '?' without preceding ':' in path: " + path);
              throw error2;
            }
          }
        }
        if (null == tmp) {
          let str4 = obj.segment;
          obj.segment = str4.replace(/\/$/, "");
          tmp18 = num2;
          tmp19 = flag6;
          tmp20 = flag2;
          flag9 = false;
          tmp21 = flag4;
          tmp22 = obj;
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
              obj2 = { segment: "" };
              sum = num2;
              flag7 = false;
              flag8 = flag4;
            }
          }
        } else {
          sum = num2;
          flag7 = flag3;
          flag8 = flag4;
          obj2 = obj;
          if ("/" === tmp) {
            sum = num2;
            flag7 = flag3;
            flag8 = flag4;
            obj2 = obj;
          }
        }
      }
      num = num + 1;
      num2 = tmp18;
      flag = tmp19;
      flag2 = tmp20;
      flag3 = flag9;
      flag4 = tmp21;
      obj = tmp22;
      flag5 = tmp21;
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error3 = new Error("Encountered '(' without preceding ':' in path: " + path);
    throw error3;
  }
  if (flag5) {
    const _Error6 = Error;
    const _HermesInternal6 = HermesInternal;
    const self11 = this;
    const self12 = this;
    const error4 = new Error("Could not find closing ')' in path: " + path);
    throw error4;
  } else {
    const mapped = items.map((param) => param.param);
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    const entries = found.entries();
    const tmp35 = entries[Symbol.iterator]();
    while (tmp35 !== undefined) {
      let tmp40 = _slicedToArray(tmp37, 2);
      [tmp41, tmp42] = tmp40;
      if (found.indexOf(tmp42) !== tmp41) {
        let _Error5 = Error;
        let _HermesInternal5 = HermesInternal;
        let str9 = "' found in path: ";
        let str10 = "Duplicate param name '";
        let self9 = this;
        let self10 = this;
        let error5 = new Error("Duplicate param name '" + tmp42 + "' found in path: " + path);
        throw error5;
      }
    }
    return items;
  }
};