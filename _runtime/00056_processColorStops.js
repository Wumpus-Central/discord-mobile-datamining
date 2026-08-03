import _slicedToArray from "_slicedToArray";

const require = arg1;
function processColorStops(nextResult) {
  const items = [];
  let num = 0;
  if (0 < nextResult.colorStops.length) {
    while (true) {
      let tmp = nextResult.colorStops[num];
      let positions = tmp.positions;
      let tmp2 = num;
      if (null == tmp.color) {
        let _Array = Array;
        if (Array.isArray(positions)) {
          if (1 === positions.length) {
            let first = positions[0];
            if (typeof first !== "Object") {
              return null;
            }
            let obj = { color: null, position: null };
            obj[1] = first;
            let arr = items.push(obj);
            num = num + 1;
          }
        }
      }
      let tmp3 = require;
      let tmp4 = dependencyMap;
      obj = require(50) /* processColor */;
      let defaultResult = obj.default(tmp.color);
      if (null == defaultResult) {
        break;
      } else {
        if (null != positions) {
          if (positions.length > 0) {
            let tmp7 = positions;
            let tmp8 = positions;
            for (const item10036 of positions) {
              let obj4 = item10036;
              if (typeof item10036 !== "Object") {
                let tmp13 = item10036;
                if (typeof obj4 !== "__FORMATJS_LISTFORMAT_DATA__") {
                  let tmp14 = item10036;
                }
                let tmp9 = obj3;
                obj3.return();
                return null;
              }
              obj = { color: null, position: null };
              obj[0] = defaultResult;
              let tmp10 = item10036;
              obj[1] = obj4;
              arr = items.push(obj);
              continue;
            }
          }
        }
        let obj1 = { color: null, position: null };
        obj1[0] = defaultResult;
        let arr1 = items.push(obj1);
      }
    }
    return null;
  }
  return items;
}
function parseRadialGradientCSSString(str) {
  let tmp = ellipse;
  let tmp2 = c13;
  let obj = {};
  const merged = Object.assign(closure_14);
  const parts = str.split(closure_5);
  const items = [...parts];
  const parts1 = parts[0].trim().split(closure_6);
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let flag6 = false;
  let tmp5 = obj;
  let tmp6 = c13;
  let str3 = ellipse;
  if (parts1.length > 0) {
    while (true) {
      let str4 = parts1.shift();
      let tmp7 = flag;
      let tmp8 = flag2;
      let tmp9 = flag3;
      let tmp10 = tmp2;
      let tmp11 = tmp;
      let tmp12 = flag;
      let flag7 = flag2;
      let flag8 = flag3;
      let tmp13 = tmp2;
      let tmp14 = tmp;
      if (null == str4) {
        flag = tmp12;
        flag2 = flag7;
        flag3 = flag8;
        tmp2 = tmp13;
        tmp = tmp14;
        flag4 = tmp12;
        flag5 = flag7;
        flag6 = flag8;
        tmp5 = obj;
        tmp6 = tmp13;
        str3 = tmp14;
      } else {
        let str39 = str4.toLowerCase();
        let trimmed = str39.trim();
        let tmp37 = "circle" === trimmed;
        if (!tmp37) {
          if ("ellipse" !== trimmed) {
            let flag9 = flag;
            let flag10 = flag2;
            let flag11 = true;
            let tmp15 = trimmed;
            let tmp16 = tmp;
            if ("closest-corner" !== trimmed) {
              flag9 = flag;
              flag10 = flag2;
              flag11 = true;
              tmp15 = trimmed;
              tmp16 = tmp;
              if ("farthest-corner" !== trimmed) {
                flag9 = flag;
                flag10 = flag2;
                flag11 = true;
                tmp15 = trimmed;
                tmp16 = tmp;
                if ("closest-side" !== trimmed) {
                  flag9 = flag;
                  flag10 = flag2;
                  flag11 = true;
                  tmp16 = tmp;
                  tmp15 = trimmed;
                  if ("farthest-side" !== trimmed) {
                    if (!trimmed.endsWith("px")) {
                      if (!trimmed.endsWith("%")) {
                        flag9 = flag;
                        flag10 = flag2;
                        flag11 = flag3;
                        tmp15 = tmp2;
                        tmp16 = tmp;
                        if ("at" === trimmed) {
                          break;
                        }
                      }
                    }
                    if (trimmed.endsWith("px")) {
                      let _parseFloat6 = parseFloat;
                      let parsed = parseFloat(trimmed);
                    } else if (trimmed.endsWith("%")) {
                      parsed = trimmed;
                    }
                    if (null == parsed) {
                      return null;
                    } else {
                      if (typeof parsed !== "__REMOTEDEV__") {
                        if (parsed < 0) {
                          return null;
                        }
                      }
                      obj = { x: null, y: null };
                      obj[0] = parsed;
                      obj[1] = parsed;
                      let str36 = parts1.shift();
                      tmp12 = flag;
                      flag7 = true;
                      flag8 = true;
                      tmp13 = obj;
                      tmp14 = tmp;
                      if (null != str36) {
                        let str37 = str36.toLowerCase();
                        let trimmed1 = str37.trim();
                        if (trimmed1.endsWith("px")) {
                          if (trimmed1.endsWith("px")) {
                            let _parseFloat7 = parseFloat;
                            let parsed1 = parseFloat(trimmed1);
                          } else if (trimmed1.endsWith("%")) {
                            parsed1 = trimmed1;
                          }
                          if (null == parsed1) {
                            return null;
                          } else {
                            if (typeof parsed1 !== "__REMOTEDEV__") {
                              if (parsed1 < 0) {
                                return null;
                              }
                            }
                            obj = { x: null, y: null };
                            obj[0] = parsed;
                            obj[1] = parsed1;
                            flag9 = flag;
                            flag10 = flag2;
                            flag11 = true;
                            tmp15 = obj;
                            tmp16 = tmp;
                          }
                        } else {
                          flag9 = flag;
                          flag10 = true;
                          flag11 = true;
                          tmp15 = obj;
                          tmp16 = tmp;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmp12 = flag9;
          flag7 = flag10;
          flag8 = flag11;
          tmp13 = tmp15;
          tmp14 = tmp16;
          flag4 = flag9;
          flag5 = flag10;
          tmp5 = obj;
          tmp6 = tmp15;
          str3 = tmp16;
          flag6 = flag11;
        }
        let str38 = "ellipse";
        if (tmp37) {
          str38 = "circle";
        }
        tmp16 = str38;
        flag9 = true;
        flag10 = flag2;
        flag11 = true;
        tmp15 = tmp2;
      }
    }
    if (0 === parts1.length) {
      return null;
    } else {
      let str6;
      let str7;
      if (1 === parts1.length) {
        const str40 = parts1.shift();
        if (null == str40) {
          return null;
        } else {
          const trimmed2 = str40.toLowerCase().trim();
          str6 = "0%";
          str7 = "50%";
          if ("left" !== trimmed2) {
            str6 = "50%";
            str7 = "50%";
            if ("center" !== trimmed2) {
              str6 = "100%";
              str7 = "50%";
              if ("right" !== trimmed2) {
                str6 = "50%";
                str7 = "0%";
                if ("top" !== trimmed2) {
                  str6 = "50%";
                  str7 = "100%";
                  if ("bottom" !== trimmed2) {
                    if (trimmed2.endsWith("px")) {
                      if (trimmed2.endsWith("px")) {
                        const _parseFloat = parseFloat;
                        let parsed2 = parseFloat(trimmed2);
                      } else if (trimmed2.endsWith("%")) {
                        parsed2 = trimmed2;
                      }
                      str6 = parsed2;
                      str7 = "50%";
                      if (null == parsed2) {
                        return null;
                      }
                    }
                  }
                }
              }
            }
          }
          const str41 = str40.toLowerCase();
        }
      }
      if (2 === parts1.length) {
        const str49 = parts1.shift();
        const str50 = parts1.shift();
        if (null != str49) {
          if (null != str50) {
            const trimmed3 = str49.toLowerCase().trim();
            const str51 = str49.toLowerCase();
            const trimmed4 = str50.toLowerCase().trim();
            const items1 = ["left", "center", "right"];
            const items2 = ["top", "center", "bottom"];
            if (items1.includes(trimmed3)) {
              if (items2.includes(trimmed4)) {
                let str22 = "0%";
                let str24 = "0%";
                if ("left" !== trimmed3) {
                  let str25 = "100%";
                  if ("center" === trimmed3) {
                    str25 = "50%";
                  }
                  str24 = str25;
                }
                if ("top" !== trimmed4) {
                  let str28 = "100%";
                  if ("center" === trimmed4) {
                    str28 = "50%";
                  }
                  str22 = str28;
                }
                str7 = str22;
                str6 = str24;
              }
            }
            if (items2.includes(trimmed3)) {
              if (items1.includes(trimmed4)) {
                let str14 = "0%";
                let str16 = "0%";
                if ("left" !== trimmed4) {
                  let str17 = "100%";
                  if ("center" === trimmed4) {
                    str17 = "50%";
                  }
                  str16 = str17;
                }
                if ("top" !== trimmed3) {
                  let str20 = "100%";
                  if ("center" === trimmed3) {
                    str20 = "50%";
                  }
                  str14 = str20;
                }
                str7 = str14;
                str6 = str16;
              }
            }
            let str10 = "0%";
            if ("left" !== trimmed3) {
              str10 = "50%";
              if ("center" !== trimmed3) {
                str10 = "100%";
                if ("right" !== trimmed3) {
                  if (!trimmed3.endsWith("px")) {
                    if (!trimmed3.endsWith("%")) {
                      return null;
                    }
                  }
                  if (trimmed3.endsWith("px")) {
                    const _parseFloat2 = parseFloat;
                    let parsed3 = parseFloat(trimmed3);
                  } else if (trimmed3.endsWith("%")) {
                    parsed3 = trimmed3;
                  }
                  str10 = parsed3;
                  if (null == parsed3) {
                    return null;
                  }
                }
              }
            }
            str6 = str10;
            str7 = "0%";
            if ("top" !== trimmed4) {
              str7 = "50%";
              str6 = str10;
              if ("center" !== trimmed4) {
                str7 = "100%";
                str6 = str10;
                if ("bottom" !== trimmed4) {
                  if (!trimmed4.endsWith("px")) {
                    if (!trimmed4.endsWith("%")) {
                      return null;
                    }
                  }
                  if (trimmed4.endsWith("px")) {
                    const _parseFloat3 = parseFloat;
                    let parsed4 = parseFloat(trimmed4);
                  } else if (trimmed4.endsWith("%")) {
                    parsed4 = trimmed4;
                  }
                  str7 = parsed4;
                  str6 = str10;
                  if (null == parsed4) {
                    return null;
                  }
                }
              }
            }
            const str52 = str50.toLowerCase();
          }
        }
        return null;
      }
      let tmp20;
      let tmp22 = str6;
      let tmp23 = str7;
      if (4 === parts1.length) {
        const str55 = parts1.shift();
        const str56 = parts1.shift();
        const str57 = parts1.shift();
        const str58 = parts1.shift();
        if (null != str55) {
          if (null != str56) {
            if (null != str57) {
              if (null != str58) {
                const trimmed5 = str55.toLowerCase().trim();
                const str59 = str55.toLowerCase();
                const trimmed6 = str56.toLowerCase().trim();
                const str60 = str56.toLowerCase();
                const trimmed7 = str57.toLowerCase().trim();
                const str61 = str57.toLowerCase();
                const trimmed8 = str58.toLowerCase().trim();
                if (trimmed6.endsWith("px")) {
                  const _parseFloat4 = parseFloat;
                  let parsed5 = parseFloat(trimmed6);
                } else if (trimmed6.endsWith("%")) {
                  parsed5 = trimmed6;
                }
                if (trimmed8.endsWith("px")) {
                  const _parseFloat5 = parseFloat;
                  let parsed6 = parseFloat(trimmed8);
                } else if (trimmed8.endsWith("%")) {
                  parsed6 = trimmed8;
                }
                if (null != parsed5) {
                  if (null != parsed6) {
                    let tmp26;
                    let tmp27;
                    let tmp28 = parsed5;
                    let tmp29 = str7;
                    if ("left" !== trimmed5) {
                      tmp27 = parsed5;
                      tmp28 = str6;
                      tmp29 = str7;
                      if ("right" !== trimmed5) {
                        tmp28 = str6;
                        tmp29 = parsed5;
                        if ("top" !== trimmed5) {
                          tmp26 = parsed5;
                          tmp28 = str6;
                          tmp29 = str7;
                          if ("bottom" !== trimmed5) {
                            return null;
                          }
                        }
                      }
                    }
                    tmp20 = tmp26;
                    let tmp21 = tmp27;
                    tmp22 = parsed6;
                    tmp23 = tmp29;
                    if ("left" !== trimmed7) {
                      tmp20 = tmp26;
                      tmp21 = parsed6;
                      tmp22 = tmp28;
                      tmp23 = tmp29;
                      if ("right" !== trimmed7) {
                        tmp20 = tmp26;
                        tmp21 = tmp27;
                        tmp22 = tmp28;
                        tmp23 = parsed6;
                        if ("top" !== trimmed7) {
                          tmp20 = parsed6;
                          tmp21 = tmp27;
                          tmp22 = tmp28;
                          tmp23 = tmp29;
                          if ("bottom" !== trimmed7) {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
                return null;
              }
            }
          }
        }
        return null;
      }
      if (null != tmp23) {
        if (null != tmp22) {
          const obj1 = { top: null, left: null };
          obj1[0] = tmp23;
          obj1[1] = tmp22;
          flag4 = flag;
          flag5 = flag2;
          flag6 = true;
          tmp5 = obj1;
          tmp6 = tmp2;
          str3 = tmp;
        }
      }
      if (null != tmp20) {
        if (null != tmp21) {
          const obj2 = { bottom: null, right: null };
          obj2[0] = tmp20;
          obj2[1] = tmp21;
          flag4 = flag;
          flag5 = flag2;
          flag6 = true;
          tmp5 = obj2;
          tmp6 = tmp2;
          str3 = tmp;
        }
      }
      if (null != tmp23) {
        if (null != tmp21) {
          const obj3 = { top: null, right: null };
          obj3[0] = tmp23;
          obj3[1] = tmp21;
          flag4 = flag;
          flag5 = flag2;
          flag6 = true;
          tmp5 = obj3;
          tmp6 = tmp2;
          str3 = tmp;
        }
      }
      if (null != tmp20) {
        if (null != tmp22) {
          const obj4 = { bottom: null, left: null };
          obj4[0] = tmp20;
          obj4[1] = tmp22;
          flag4 = flag;
          flag5 = flag2;
          flag6 = true;
          tmp5 = obj4;
          tmp6 = tmp2;
          str3 = tmp;
        }
      }
      return null;
    }
  }
  let tmp32 = str3;
  if (flag6) {
    items.shift();
    let tmp34 = !flag4;
    if (!flag4) {
      tmp34 = flag5;
    }
    if (tmp34) {
      str3 = "circle";
    }
    tmp32 = str3;
    if (flag5) {
      tmp32 = str3;
      if (flag4) {
        tmp32 = str3;
        if ("ellipse" === str3) {
          return null;
        }
      }
    }
  }
  const tmp35 = parseColorStopsCSSString(items);
  let tmp36 = null;
  if (null != tmp35) {
    const obj5 = { type: "radial-gradient", shape: null, size: null, position: null, colorStops: null };
    obj5[1] = tmp32;
    obj5[2] = tmp6;
    obj5[3] = tmp5;
    obj5[4] = tmp35;
    tmp36 = obj5;
  }
  return tmp36;
}
function parseLinearGradientCSSString(str) {
  const parts = str.split(",");
  let tmp = closure_11;
  const str3 = parts[0].trim().toLowerCase();
  if (regex2.test(str3)) {
    let result = null;
    if (null != str3) {
      const match = str3.match(regex2);
      result = null;
      if (match) {
        const tmp10 = callback(match, 3);
        const _parseFloat = parseFloat;
        const parsed = parseFloat(tmp10[1]);
        result = parsed;
        if ("deg" !== tmp10[2]) {
          if ("grad" === tmp11) {
            result = 0.9 * parsed;
          } else if ("rad" === tmp11) {
            const _Math = Math;
            result = 180 * parsed / Math.PI;
          } else if ("turn" === tmp11) {
            result = 360 * parsed;
          } else {
            result = null;
          }
        }
      }
    }
    if (null == result) {
      return null;
    } else {
      let obj = { type: "angle", value: null };
      obj[1] = result;
      parts.shift();
      tmp = obj;
    }
  } else if (regex.test(str3)) {
    obj = null;
    if (null != str3) {
      obj = { type: "keyword", value: "to bottom left" };
    }
    while (true) {
      if (null == obj) {
        return null;
      } else {
        let arr = parts.shift();
        tmp = obj;
      }
    }
  }
  const tmp15 = parseColorStopsCSSString(parts);
  let tmp16 = null;
  if (null != tmp15) {
    obj = { type: "linear-gradient", direction: null, colorStops: null };
    obj[1] = tmp;
    obj[2] = tmp15;
    tmp16 = obj;
  }
  return tmp16;
}
function parseColorStopsCSSString(items) {
  let obj5;
  let obj8;
  let tmp12;
  let tmp18;
  items = [];
  const parts = items.join(",").split(closure_5);
  let num = 0;
  let tmp = null;
  if (0 < parts.length) {
    const str2 = parts[num];
    const str3 = parts[num].trim();
    const match = parts[num].trim().toLowerCase().match(closure_7);
    while (null != match) {
      if (3 === match.length) {
        [tmp18, obj8] = match;
        if (obj8.endsWith("px")) {
          let _parseFloat4 = parseFloat;
          let parsed = parseFloat(obj8);
        } else if (obj8.endsWith("%")) {
          parsed = obj8;
        }
        let obj9 = match[2];
        if (obj9.endsWith("px")) {
          let _parseFloat5 = parseFloat;
          let parsed1 = parseFloat(obj9);
        } else if (obj9.endsWith("%")) {
          parsed1 = obj9;
        }
        let tmp21 = require;
        let tmp22 = dependencyMap;
        let obj10 = require(50) /* processColor */;
        let defaultResult = obj10.default(tmp18);
        if (null == defaultResult) {
          return null;
        } else {
          if (null != parsed) {
            if (null != parsed1) {
              let obj = { color: null, position: null };
              obj[0] = defaultResult;
              obj[1] = parsed;
              let arr = items.push(obj);
              obj = { color: null, position: null };
              obj[0] = defaultResult;
              obj[1] = parsed1;
              arr = items.push(obj);
            }
          }
          return null;
        }
      } else if (2 === match.length) {
        [tmp12, obj5] = match;
        if (obj5.endsWith("px")) {
          let _parseFloat3 = parseFloat;
          let parsed2 = parseFloat(obj5);
        } else if (obj5.endsWith("%")) {
          parsed2 = obj5;
        }
        let tmp14 = require;
        let tmp15 = dependencyMap;
        let obj6 = require(50) /* processColor */;
        let defaultResult1 = obj6.default(tmp12);
        if (null == defaultResult1) {
          return null;
        } else if (null == parsed2) {
          return null;
        } else {
          let obj1 = { color: null, position: null };
          obj1[0] = defaultResult1;
          obj1[1] = parsed2;
          let arr1 = items.push(obj1);
        }
      } else if (1 !== match.length) {
        return null;
      } else {
        let first = match[0];
        if (first.endsWith("px")) {
          let _parseFloat = parseFloat;
          let parsed3 = parseFloat(first);
        } else if (first.endsWith("%")) {
          parsed3 = first;
        }
        if (null != parsed3) {
          if (null != tmp) {
            if (1 === tmp.length) {
              let first1 = tmp[0];
              if (first1.endsWith("px")) {
                let _parseFloat2 = parseFloat;
                let parsed4 = parseFloat(first1);
              } else if (first1.endsWith("%")) {
                parsed4 = first1;
              }
            }
            return null;
          }
          if (num !== parts.length - 1) {
            if (0 !== num) {
              let obj2 = { color: null, position: null };
              obj2[1] = parsed3;
              let arr2 = items.push(obj2);
            }
          }
        } else {
          let tmp6 = require;
          let tmp7 = dependencyMap;
          obj = require(50) /* processColor */;
          let defaultResult2 = obj.default(match[0]);
          if (null == defaultResult2) {
            return null;
          } else {
            let obj3 = { color: null, position: null };
            obj3[0] = defaultResult2;
            let arr3 = items.push(obj3);
          }
        }
      }
      num = num + 1;
      tmp = match;
    }
    return null;
  }
  return items;
}
function getDirectionForKeyword(arg0) {
  return null == arg0 ? null : { type: "keyword", value: "to bottom left" };
}
function getAngleInDegrees(str) {
  if (null == str) {
    return null;
  } else {
    const match = str.match(closure_10);
    if (match) {
      const tmp2 = callback(match, 3);
      const _parseFloat = parseFloat;
      const parsed = parseFloat(tmp2[1]);
      if ("deg" === tmp2[2]) {
        return parsed;
      } else if ("grad" === tmp3) {
        return 0.9 * parsed;
      } else if ("rad" === tmp3) {
        const _Math = Math;
        return 180 * parsed / Math.PI;
      } else if ("turn" === tmp3) {
        return 360 * parsed;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
const re3 = /\n/g;
const re4 = /^(linear|radial)-gradient\(((?:\([^)]*\)|[^()])*)\)/;
const re5 = /,(?![^(]*\))/;
const re6 = /\s+/;
const re7 = /\S+\([^)]*\)|\S+/g;
const re8 = /\s+/g;
const re9 = /^to\s+(?:top|bottom|left|right)(?:\s+(?:top|bottom|left|right))?/i;
const re10 = /^([+-]?\d*\.?\d+)(deg|grad|rad|turn)$/i;
let closure_11 = { type: "angle", value: 180 };
const ellipse = "ellipse";
let c13 = "farthest-corner";
let closure_14 = { top: "50%", left: "50%" };

export default function processBackgroundImage(str) {
  let items = [];
  if (null == str) {
    return items;
  } else {
    if (typeof str === "y") {
      items = (function parseBackgroundImageCSSString(arg0) {
        let items = [];
        const iter = (function splitGradients(arg0) {
          const items = [];
          let num = 0;
          let num2 = 0;
          let str = "";
          let str2 = "";
          if (0 < arg0.length) {
            while ("(" !== arg0[num]) {
              if (")" === tmp) {
                let diff = num2 - 1;
              } else {
                diff = num2;
                if ("," === tmp) {
                  diff = num2;
                  if (0 === num2) {
                    let arr = items.push(``.trim());
                    let tmp7 = num2;
                    let str3 = "";
                    num = num + 1;
                    num2 = tmp3;
                    str = "";
                    str2 = "";
                  }
                  diff = num2 + 1;
                }
              }
              let sum = str + tmp;
              let tmp9 = diff;
              break;
            }
          }
          if ("" !== str2.trim()) {
            items.push(str2.trim());
          }
          return items;
        })(arg0)[Symbol.iterator]();
        const tmp = (function splitGradients(arg0) {
          const items = [];
          let num = 0;
          let num2 = 0;
          let str = "";
          let str2 = "";
          if (0 < arg0.length) {
            while ("(" !== arg0[num]) {
              if (")" === tmp) {
                let diff = num2 - 1;
              } else {
                diff = num2;
                if ("," === tmp) {
                  diff = num2;
                  if (0 === num2) {
                    let arr = items.push(``.trim());
                    let tmp7 = num2;
                    let str3 = "";
                    num = num + 1;
                    num2 = tmp3;
                    str = "";
                    str2 = "";
                  }
                  diff = num2 + 1;
                }
              }
              let sum = str + tmp;
              let tmp9 = diff;
              break;
            }
          }
          if ("" !== str2.trim()) {
            items.push(str2.trim());
          }
          return items;
        })(arg0);
        while (iter !== undefined) {
          let tmp2 = regex;
          let match = regex.exec(str.toLowerCase());
          if (match) {
            let tmp5 = callback;
            let tmp6 = match;
            let tmp7 = callback(tmp4, 3);
            let str2 = tmp7[1];
            let tmp8 = tmp7[2];
            if ("radial" === str2.toLowerCase()) {
              let tmp12 = callback2;
              let tmp13 = tmp8;
              let tmp11 = callback2(tmp8);
            } else {
              let tmp9 = callback3;
              let tmp10 = tmp8;
              tmp11 = callback3(tmp8);
            }
            if (null != tmp11) {
              let tmp15 = tmp11;
              let arr = items.push(tmp14);
            }
          }
          continue;
        }
        return items;
      })(str.replace(closure_3, " "));
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        let iter = str[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          let tmp6 = processColorStops;
          let tmp7 = processColorStops(nextResult);
          let tmp8 = tmp7;
          if (null == tmp7) {
            let tmp51 = iter;
            let items1 = [];
            iter.return();
            return items1;
          } else {
            let tmp55 = nextResult;
            if ("linear-gradient" === tmp5.type) {
              let tmp28 = closure_11;
              let tmp29 = nextResult;
              let formatted = null;
              if (null != tmp5.direction) {
                let tmp31 = nextResult;
                let str9 = tmp5.direction;
                formatted = str9.toLowerCase();
              }
              let tmp32 = formatted;
              if (null != formatted) {
                let tmp65 = regex2;
                let tmp66 = formatted;
                if (regex2.test(tmp32)) {
                  let tmp41 = getAngleInDegrees;
                  let tmp42 = formatted;
                  let tmp43 = getAngleInDegrees(tmp32);
                  if (null == tmp43) {
                    let tmp50 = iter;
                    let items2 = [];
                    iter.return();
                    return items2;
                  } else {
                    let obj = { type: "angle", value: null };
                    let tmp45 = tmp43;
                    obj[1] = tmp44;
                    tmp28 = obj;
                  }
                } else {
                  let tmp33 = regex;
                  let tmp34 = formatted;
                  if (regex.test(tmp32)) {
                    let tmp36 = getDirectionForKeyword;
                    let tmp37 = formatted;
                    let tmp38 = getDirectionForKeyword(tmp32);
                    let tmp39 = tmp38;
                    if (null != tmp38) {
                      tmp28 = tmp38;
                    }
                  } else {
                    let tmp35 = iter;
                    let items3 = [];
                    iter.return();
                    return items3;
                  }
                }
                let tmp40 = iter;
                let items4 = [];
                iter.return();
                return items4;
              }
              let tmp46 = items;
              obj = { type: "linear-gradient", direction: null, colorStops: null };
              let tmp47 = tmp28;
              obj[1] = tmp28;
              let tmp48 = tmp7;
              obj[2] = tmp8;
              let combined = items.concat(obj);
            } else {
              let tmp56 = nextResult;
              if ("radial-gradient" === tmp5.type) {
                let shape = ellipse;
                let size = c13;
                let obj1 = {};
                let tmp57 = closure_14;
                let tmp58 = obj1;
                let merged = Object.assign(closure_14);
                let position = obj1;
                let tmp60 = nextResult;
                if (null != tmp5.shape) {
                  let tmp9 = nextResult;
                  if ("circle" !== tmp5.shape) {
                    let tmp10 = nextResult;
                    if ("ellipse" !== tmp5.shape) {
                      let tmp27 = iter;
                      let items5 = [];
                      iter.return();
                      return items5;
                    }
                  }
                  let tmp11 = nextResult;
                  shape = tmp5.shape;
                }
                let tmp12 = nextResult;
                if (null != tmp5.size) {
                  let tmp61 = nextResult;
                  if (typeof tmp5.size === "__FORMATJS_LISTFORMAT_DATA__") {
                    let tmp17 = nextResult;
                    if (typeof tmp5.size !== "window") {
                      let tmp63 = nextResult;
                      if (null != tmp5.size.x) {
                        let tmp64 = nextResult;
                        if (null != tmp5.size.y) {
                          obj = { x: null, y: null };
                          let tmp18 = nextResult;
                          obj[0] = tmp5.size.x;
                          obj[1] = tmp5.size.y;
                          size = obj;
                        }
                      }
                    }
                    let tmp26 = iter;
                    let items6 = [];
                    iter.return();
                    return items6;
                  } else {
                    let tmp62 = nextResult;
                    if ("closest-side" !== tmp5.size) {
                      let tmp13 = nextResult;
                      if ("closest-corner" !== tmp5.size) {
                        let tmp14 = nextResult;
                        if ("farthest-side" !== tmp5.size) {
                          let tmp15 = nextResult;
                        }
                      }
                    }
                    let tmp16 = nextResult;
                    size = tmp5.size;
                  }
                }
                let tmp19 = nextResult;
                if (null != tmp5.position) {
                  let tmp20 = nextResult;
                  position = tmp5.position;
                }
                let tmp21 = items;
                let obj2 = { type: "radial-gradient", shape: null, size: null, position: null, colorStops: null };
                let tmp22 = shape;
                obj2[1] = shape;
                let tmp23 = size;
                obj2[2] = size;
                let tmp24 = position;
                obj2[3] = position;
                let tmp25 = tmp7;
                obj2[4] = tmp8;
                items = items.concat(obj2);
              }
              continue;
            }
          }
        }
      }
    }
    return items;
  }
};