// _runtime/00058_getPositionFromCSSValue.js
function getPositionFromCSSValue(trimmed4) {
  if (trimmed4.endsWith("px")) {
    const _parseFloat = parseFloat;
    let parsed = parseFloat(trimmed4);
  } else {
    parsed = trimmed4;
    if (!trimmed4.endsWith("%")) {
      let num;
      if ("0" === trimmed4) {
        num = 0;
      }
      parsed = num;
    }
  }
  return parsed;
}
function isValidPosition(str) {
  const endsWithResult = str.endsWith("px");
  let tmp2 = !endsWithResult;
  if (!endsWithResult) {
    tmp2 = !str.endsWith("%");
  }
  if (tmp2) {
    tmp2 = "0" !== str;
  }
  return !tmp2;
}
function parseBackgroundPositionCSSString(str) {
  const items = [];
  const parts = str.split(",");
  const mapped = parts.map((item, index) => item.trim());
  const iter = mapped[Symbol.iterator]();
  str = iter.next();
  while (iter !== undefined) {
    let str2;
    let str5;
    let parts1 = str.split(/\s+/);
    let found = parts1.filter((item, index) => item.length > 0);
    let arr5 = found;
    if (1 === found.length) {
      let first = arr5[0];
      let str7 = first;
      if (null == first) {
        let items1 = [];
        iter.return();
        return items1;
      } else {
        let str8 = str7.toLowerCase();
        let trimmed = str8.trim();
        let tmp114 = trimmed;
        if ("left" === trimmed) {
          let str3 = "0%";
          str2 = "50%";
        } else if ("center" === tmp114) {
          str3 = "50%";
          str2 = "50%";
        } else if ("right" === tmp114) {
          str3 = "100%";
          str2 = "50%";
        } else if ("top" === tmp114) {
          str3 = "50%";
          str2 = "0%";
        } else if ("bottom" === tmp114) {
          str3 = "50%";
          str2 = "100%";
        } else if (isValidPosition(tmp114)) {
          let tmp10 = getPositionFromCSSValue(tmp114);
          if (null == tmp10) {
            let items2 = [];
            iter.return();
            return items2;
          } else {
            str3 = tmp10;
            str2 = "50%";
          }
        }
      }
    }
    if (2 === arr5.length) {
      let first1 = arr5[0];
      let str9 = first1;
      let str10 = arr5[1];
      if (null != first1) {
        if (null != str10) {
          let str11 = str9.toLowerCase();
          let trimmed1 = str11.trim();
          let tmp120 = trimmed1;
          if ("left" === trimmed1) {
            str3 = "0%";
          } else if ("center" === tmp120) {
            str3 = "50%";
          } else if ("right" === tmp120) {
            str3 = "100%";
          } else if ("top" === tmp120) {
            str2 = "0%";
          } else if ("bottom" === tmp120) {
            str2 = "100%";
          } else if (isValidPosition(tmp120)) {
            let tmp22 = getPositionFromCSSValue(tmp120);
            if (null == tmp22) {
              let items3 = [];
              iter.return();
              return items3;
            } else {
              str3 = tmp22;
            }
          }
          let str6 = str10.toLowerCase();
          let trimmed2 = str6.trim();
          let tmp27 = trimmed2;
          if ("top" === trimmed2) {
            str2 = "0%";
          } else if ("center" === tmp27) {
            str2 = "50%";
          } else if ("bottom" === tmp27) {
            str2 = "100%";
          } else if ("left" === tmp27) {
            str3 = "0%";
          } else if ("right" === tmp27) {
            str3 = "100%";
          } else if (isValidPosition(tmp27)) {
            let tmp36 = getPositionFromCSSValue(tmp27);
            if (null == tmp36) {
              let items4 = [];
              iter.return();
              return items4;
            } else {
              str2 = tmp36;
            }
          }
        }
      }
      let items5 = [];
      iter.return();
      return items5;
    }
    if (3 === arr5.length) {
      let first2 = arr5[0];
      let str12 = first2;
      let str13 = arr5[1];
      let str14 = arr5[2];
      if (null != first2) {
        if (null != str13) {
          if (null != str14) {
            let str15 = str12.toLowerCase();
            let trimmed3 = str15.trim();
            let tmp127 = trimmed3;
            let str16 = str13.toLowerCase();
            let trimmed4 = str16.trim();
            let str17 = str14.toLowerCase();
            let trimmed5 = str17.trim();
            if ("center" === trimmed3) {
              str3 = "50%";
              let tmp75 = getPositionFromCSSValue(trimmed5);
              if (null == tmp75) {
                let items6 = [];
                iter.return();
                return items6;
              } else if ("top" === trimmed4) {
                str2 = tmp75;
              } else if ("bottom" !== trimmed4) {
                let items7 = [];
                iter.return();
                return items7;
              } else {
                str5 = tmp75;
              }
            } else if ("center" === trimmed5) {
              str2 = "50%";
              let tmp67 = getPositionFromCSSValue(trimmed4);
              if (null == tmp67) {
                let items8 = [];
                iter.return();
                return items8;
              } else if ("left" === tmp127) {
                str3 = tmp67;
              } else if ("right" !== tmp127) {
                let items9 = [];
                iter.return();
                return items9;
              } else {
                let str4 = tmp67;
              }
            } else {
              let items10 = [tmp127, , ];
              items10[1] = trimmed4;
              items10[2] = trimmed5;
              let arr22 = items10;
              let num = 0;
              if (0 < items10.length) {
                while (true) {
                  let tmp42 = arr22[num];
                  let tmp43 = tmp42;
                  if (isValidPosition(tmp42)) {
                    let tmp52 = getPositionFromCSSValue(tmp43);
                    if (null == tmp52) {
                      let items11 = [];
                      iter.return();
                      return items11;
                    } else {
                      let tmp56 = arr22[num - 1];
                      let tmp57 = tmp56;
                      if ("left" === tmp56) {
                        str3 = tmp52;
                      } else if ("right" === tmp57) {
                        str4 = tmp52;
                      } else if ("top" === tmp57) {
                        str2 = tmp52;
                      } else if ("bottom" === tmp57) {
                        str5 = tmp52;
                      }
                    }
                  } else if ("left" === tmp43) {
                    str3 = "0%";
                  } else if ("right" === tmp43) {
                    str4 = "0%";
                  } else if ("top" === tmp43) {
                    str2 = "0%";
                  } else if ("bottom" !== tmp43) {
                    break;
                  } else {
                    str5 = "0%";
                  }
                  let sum = num + 1;
                  num = sum;
                  continue;
                }
                let items12 = [];
                iter.return();
                return items12;
              }
            }
          }
        }
      }
      let items13 = [];
      iter.return();
      return items13;
    }
    if (4 === arr5.length) {
      let arr = arr5.shift();
      let str18 = arr;
      let str19 = arr5.shift();
      let str20 = arr5.shift();
      let str21 = arr5.shift();
      if (null != arr) {
        if (null != str19) {
          if (null != str20) {
            if (null != str21) {
              let str22 = str18.toLowerCase();
              let trimmed6 = str22.trim();
              let str23 = str19.toLowerCase();
              let trimmed7 = str23.trim();
              let str24 = str20.toLowerCase();
              let trimmed8 = str24.trim();
              let str25 = str21.toLowerCase();
              let trimmed9 = str25.trim();
              let tmp151 = getPositionFromCSSValue(trimmed7);
              let tmp153 = getPositionFromCSSValue(trimmed9);
              if (null != tmp151) {
                if (null != tmp153) {
                  if ("left" === trimmed6) {
                    str3 = tmp151;
                  } else if ("right" === trimmed6) {
                    str4 = tmp151;
                  }
                  if ("top" === trimmed8) {
                    str2 = tmp153;
                  } else if ("bottom" === trimmed8) {
                    str5 = tmp153;
                  }
                }
              }
              let items14 = [];
              iter.return();
              return items14;
            }
          }
        }
      }
      let items15 = [];
      iter.return();
      return items15;
    }
    if (null != str2) {
      if (null != str3) {
        let obj = { top: null, left: null };
        obj[0] = str2;
        obj[1] = str3;
        arr = items.push(obj);
        continue;
      }
    }
    if (null != str5) {
      if (null != str4) {
        obj = { bottom: null, right: null };
        obj[0] = str5;
        obj[1] = str4;
        let arr1 = items.push(obj);
      }
    }
    if (null != str2) {
      if (null != str4) {
        obj1 = { top: null, right: null };
        obj1[0] = str2;
        obj1[1] = str4;
        let arr2 = items.push(obj1);
      }
    }
    if (null != str5) {
      if (null != str3) {
        obj = { bottom: null, left: null };
        obj[0] = str5;
        obj[1] = str3;
        let arr3 = items.push(obj);
      }
    }
    let items16 = [];
    iter.return();
    return items16;
  }
  return items;
}
arg5.default = function processBackgroundPosition(str) {
  if (null == str) {
    let items = [];
  } else if (typeof str === "string") {
    items = parseBackgroundPositionCSSString(str.replace(/\n/g, " "));
  } else {
    items = [];
    const _Array = Array;
    if (Array.isArray(str)) {
      items = str;
    }
  }
  return items;
};