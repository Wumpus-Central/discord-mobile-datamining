// === Module 1925: ? ===

// Module 1925
const re0 = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
const re1 = /[QxXVOvZASjgFDwWIQqH]/;
let closure_2 = { month: ["numeric", "2-digit", "short", "long", "narrow"], weekday: ["short", "short", "short", "long", "narrow"], era: ["short", "short", "short", "long", "narrow"] };

export const createDateTimeFormat = function createDateTimeFormat(str) {
  if (!regex.test(str)) {
    const obj = {};
    obj.pattern = str.replace(obj, (str) => {
      switch (str.charAt(0)) {
        case "E":
          let diff = str.length - 1;
          obj9.weekday = closure_2.weekday[diff];
          return "{weekday}";
        case "e":
          diff = str.length - 1;
          obj9.weekday = closure_2.weekday[diff];
          return "{weekday}";
        case "c":
          diff = str.length - 1;
          obj9.weekday = closure_2.weekday[diff];
          return "{weekday}";
        case "G":
          obj9.era = closure_2.era[str.length - 1];
          return "{era}";
        case "y":
          let tmp9 = obj9;
          let str13 = "numeric";
          if (2 === str.length) {
            str13 = "2-digit";
          }
          tmp9.year = str13;
          return "{year}";
        case "Y":
          tmp9 = obj9;
          str13 = "numeric";
          if (2 === str.length) {
            str13 = "2-digit";
          }
          tmp9.year = str13;
          return "{year}";
        case "u":
          tmp9 = obj9;
          str13 = "numeric";
          if (2 === str.length) {
            str13 = "2-digit";
          }
          tmp9.year = str13;
          return "{year}";
        case "U":
          tmp9 = obj9;
          str13 = "numeric";
          if (2 === str.length) {
            str13 = "2-digit";
          }
          tmp9.year = str13;
          return "{year}";
        case "M":
          let diff1 = str.length - 1;
          obj9.month = closure_2.month[diff1];
          return "{month}";
        case "L":
          diff1 = str.length - 1;
          obj9.month = closure_2.month[diff1];
          return "{month}";
        case "d":
          let str10 = "numeric";
          if (2 === str.length) {
            str10 = "2-digit";
          }
          obj9.day = str10;
          return "{day}";
        case "a":
          return "{ampm}";
        case "h":
          let tmp4 = obj9;
          let str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "H":
          tmp4 = obj9;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "k":
          tmp4 = obj9;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "K":
          tmp4 = obj9;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "m":
          let str5 = "numeric";
          if (2 === str.length) {
            str5 = "2-digit";
          }
          obj9.minute = str5;
          return "{minute}";
        case "s":
          let str3 = "numeric";
          if (2 === str.length) {
            str3 = "2-digit";
          }
          obj9.second = str3;
          return "{second}";
        case "z":
          str = "long";
          if (str.length < 4) {
            str = "short";
          }
          obj9.timeZoneName = str;
          return "{timeZoneName}";
        default:
      }
    });
    obj.pattern = obj.pattern.replace(/'([^']*)'/g, (arg0, arg1) => {
      let str = arg1;
      if (!arg1) {
        str = "'";
      }
      return str;
    });
    const pattern1 = obj.pattern;
    if (pattern1.indexOf("{ampm}") > -1) {
      obj.hour12 = true;
      ({ pattern: obj.pattern12, pattern } = obj);
      obj.pattern = pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      const str4 = pattern.replace("{ampm}", "");
    }
    return obj;
  }
};
export const createDateTimeFormats = function createDateTimeFormats(formats) {
  let tmp2;
  let tmp3;
  ({ availableFormats, timeFormats, dateFormats, medium } = formats);
  const items = [];
  const items1 = [];
  const items2 = [];
  let tmp4;
  const keys = Object.keys();
  if (keys !== undefined) {
    let obj = tmp2;
    let tmp6 = tmp3;
    tmp4 = tmp2;
    while (keys[tmp] !== undefined) {
      let hasOwnPropertyResult = availableFormats.hasOwnProperty(str);
      if (hasOwnPropertyResult) {
        let str2 = availableFormats[str];
        let arr4 = str.match(/M/g) || [];
        let tmp7 = new.target;
        let tmp8 = new.target;
        let array = new Array(arr4.length + 1);
        let arr6 = str.match(/E/g) || [];
        let tmp10 = new.target;
        let tmp11 = new.target;
        let array6 = new Array(arr6.length + 1);
        let str3 = str2;
        if (array.length > 2) {
          str3 = str2.replace(/(M|L)+/, array.join("$1"));
        }
        let str4 = str3;
        if (array6.length > 2) {
          str4 = str3.replace(/([Eec])+/, array6.join("$1"));
        }
        let tmp14;
        if (!regex.test(str4)) {
          let obj9 = {};
          obj9.pattern = str4.replace(obj9, (str) => {
            switch (str.charAt(0)) {
              case "E":
                let diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "e":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "c":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "G":
                obj9.era = closure_2.era[str.length - 1];
                return "{era}";
              case "y":
                let tmp9 = obj9;
                let str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "Y":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "u":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "U":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "M":
                let diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "L":
                diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "d":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj9.day = str10;
                return "{day}";
              case "a":
                return "{ampm}";
              case "h":
                let tmp4 = obj9;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "H":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "k":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "K":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "m":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj9.minute = str5;
                return "{minute}";
              case "s":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj9.second = str3;
                return "{second}";
              case "z":
                str = "long";
                if (str.length < 4) {
                  str = "short";
                }
                obj9.timeZoneName = str;
                return "{timeZoneName}";
              default:
            }
          });
          let str5 = obj9.pattern;
          obj9.pattern = str5.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          let pattern1 = obj9.pattern;
          tmp14 = obj9;
          if (pattern1.indexOf("{ampm}") > -1) {
            obj9.hour12 = true;
            ({ pattern: obj2.pattern12, pattern } = obj9);
            let str6 = pattern.replace("{ampm}", "");
            obj9.pattern = str6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp14 = obj9;
          }
        }
        hasOwnPropertyResult = tmp14;
        obj = tmp14;
        tmp6 = str4;
      }
      tmp2 = obj;
      tmp3 = tmp6;
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        let arr = items.push(obj);
        let num = 0;
        let flag = true;
        if (0 < length2.length) {
          flag = false;
          while (!obj.hasOwnProperty(length2[num])) {
            let sum = num + 1;
            num = sum;
            flag = true;
            if (sum >= length2.length) {
              break;
            }
          }
        }
        if (flag) {
          let arr2 = items2.push(tmp6);
          tmp2 = obj;
          tmp3 = tmp6;
          continue;
        } else {
          let num2 = 0;
          let flag2 = true;
          if (0 < length.length) {
            flag2 = false;
            while (!obj.hasOwnProperty(length[num2])) {
              let sum1 = num2 + 1;
              num2 = sum1;
              flag2 = true;
              if (sum1 >= length.length) {
                break;
              }
            }
          }
          tmp2 = obj;
          tmp3 = tmp6;
          if (!flag2) {
            continue;
          } else {
            let arr3 = items1.push(tmp6);
            tmp2 = obj;
            tmp3 = tmp6;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp26 = tmp4;
  let num3 = 0;
  let tmp27 = tmp4;
  if (0 < items1.length) {
    do {
      let tmp29 = tmp26;
      let num4 = 0;
      if (0 < items2.length) {
        do {
          let str7 = medium.replace("{0}", items1[num3]);
          let str8 = str7.replace("{1}", items2[num4]);
          let str9 = str8.replace(/^[,\s]+|[,\s]+$/gi, "");
          closure_129_0 = undefined;
          let tmp32;
          if (!regex.test(str9)) {
            let obj10 = {};
            closure_129_0 = obj10;
            obj10.pattern = str9.replace(obj9, (str) => {
              switch (str.charAt(0)) {
                case "E":
                  let diff = str.length - 1;
                  obj9.weekday = closure_2.weekday[diff];
                  return "{weekday}";
                case "e":
                  diff = str.length - 1;
                  obj9.weekday = closure_2.weekday[diff];
                  return "{weekday}";
                case "c":
                  diff = str.length - 1;
                  obj9.weekday = closure_2.weekday[diff];
                  return "{weekday}";
                case "G":
                  obj9.era = closure_2.era[str.length - 1];
                  return "{era}";
                case "y":
                  let tmp9 = obj9;
                  let str13 = "numeric";
                  if (2 === str.length) {
                    str13 = "2-digit";
                  }
                  tmp9.year = str13;
                  return "{year}";
                case "Y":
                  tmp9 = obj9;
                  str13 = "numeric";
                  if (2 === str.length) {
                    str13 = "2-digit";
                  }
                  tmp9.year = str13;
                  return "{year}";
                case "u":
                  tmp9 = obj9;
                  str13 = "numeric";
                  if (2 === str.length) {
                    str13 = "2-digit";
                  }
                  tmp9.year = str13;
                  return "{year}";
                case "U":
                  tmp9 = obj9;
                  str13 = "numeric";
                  if (2 === str.length) {
                    str13 = "2-digit";
                  }
                  tmp9.year = str13;
                  return "{year}";
                case "M":
                  let diff1 = str.length - 1;
                  obj9.month = closure_2.month[diff1];
                  return "{month}";
                case "L":
                  diff1 = str.length - 1;
                  obj9.month = closure_2.month[diff1];
                  return "{month}";
                case "d":
                  let str10 = "numeric";
                  if (2 === str.length) {
                    str10 = "2-digit";
                  }
                  obj9.day = str10;
                  return "{day}";
                case "a":
                  return "{ampm}";
                case "h":
                  let tmp4 = obj9;
                  let str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "H":
                  tmp4 = obj9;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "k":
                  tmp4 = obj9;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "K":
                  tmp4 = obj9;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "m":
                  let str5 = "numeric";
                  if (2 === str.length) {
                    str5 = "2-digit";
                  }
                  obj9.minute = str5;
                  return "{minute}";
                case "s":
                  let str3 = "numeric";
                  if (2 === str.length) {
                    str3 = "2-digit";
                  }
                  obj9.second = str3;
                  return "{second}";
                case "z":
                  str = "long";
                  if (str.length < 4) {
                    str = "short";
                  }
                  obj9.timeZoneName = str;
                  return "{timeZoneName}";
                default:
              }
            });
            let str10 = obj10.pattern;
            obj10.pattern = str10.replace(/'([^']*)'/g, (arg0, arg1) => {
              let str = arg1;
              if (!arg1) {
                str = "'";
              }
              return str;
            });
            let pattern5 = obj10.pattern;
            tmp32 = obj10;
            if (pattern5.indexOf("{ampm}") > -1) {
              obj10.hour12 = true;
              ({ pattern: obj3.pattern12, pattern: pattern2 } = obj10);
              let str11 = pattern2.replace("{ampm}", "");
              obj10.pattern = str11.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              tmp32 = obj10;
            }
          }
          if (tmp32) {
            let arr5 = items.push(tmp32);
          }
          num4 = num4 + 1;
          tmp29 = tmp32;
        } while (num4 < items2.length);
      }
      num3 = num3 + 1;
      tmp26 = tmp29;
      tmp27 = tmp29;
    } while (num3 < items1.length);
  }
  let tmp35 = tmp27;
  let tmp36 = tmp27;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp38 = tmp35;
    tmp36 = tmp35;
    while (keys1[0] !== undefined) {
      let hasOwnPropertyResult1 = timeFormats.hasOwnProperty(str12);
      if (hasOwnPropertyResult1) {
        let str13 = timeFormats[str12];
        let arr12 = str12.match(/M/g) || [];
        let tmp39 = new.target;
        let tmp40 = new.target;
        let array7 = new Array(arr12.length + 1);
        let arr14 = str12.match(/E/g) || [];
        let tmp42 = new.target;
        let tmp43 = new.target;
        let array8 = new Array(arr14.length + 1);
        let str14 = str13;
        if (array7.length > 2) {
          str14 = str13.replace(/(M|L)+/, array7.join("$1"));
        }
        let str15 = str14;
        if (array8.length > 2) {
          str15 = str14.replace(/([Eec])+/, array8.join("$1"));
        }
        let tmp47;
        if (!regex.test(str15)) {
          let obj11 = {};
          closure_130_0 = obj11;
          obj11.pattern = str15.replace(obj9, (str) => {
            switch (str.charAt(0)) {
              case "E":
                let diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "e":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "c":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "G":
                obj9.era = closure_2.era[str.length - 1];
                return "{era}";
              case "y":
                let tmp9 = obj9;
                let str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "Y":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "u":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "U":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "M":
                let diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "L":
                diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "d":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj9.day = str10;
                return "{day}";
              case "a":
                return "{ampm}";
              case "h":
                let tmp4 = obj9;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "H":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "k":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "K":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "m":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj9.minute = str5;
                return "{minute}";
              case "s":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj9.second = str3;
                return "{second}";
              case "z":
                str = "long";
                if (str.length < 4) {
                  str = "short";
                }
                obj9.timeZoneName = str;
                return "{timeZoneName}";
              default:
            }
          });
          let str16 = obj11.pattern;
          obj11.pattern = str16.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          let pattern6 = obj11.pattern;
          tmp47 = obj11;
          if (pattern6.indexOf("{ampm}") > -1) {
            obj11.hour12 = true;
            ({ pattern: obj4.pattern12, pattern: pattern3 } = obj11);
            let str17 = pattern3.replace("{ampm}", "");
            obj11.pattern = str17.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp47 = obj11;
          }
        }
        hasOwnPropertyResult1 = tmp47;
        tmp38 = tmp47;
      }
      tmp35 = tmp38;
      if (!hasOwnPropertyResult1) {
        continue;
      } else {
        let arr7 = items.push(tmp38);
        tmp35 = tmp38;
        continue;
      }
      continue;
    }
  }
  const keys2 = Object.keys();
  if (keys2 !== undefined) {
    let tmp52 = tmp36;
    while (keys2[0] !== undefined) {
      let hasOwnPropertyResult2 = dateFormats.hasOwnProperty(str18);
      if (hasOwnPropertyResult2) {
        let str19 = dateFormats[str18];
        let arr17 = str18.match(/M/g) || [];
        let tmp53 = new.target;
        let tmp54 = new.target;
        let array9 = new Array(arr17.length + 1);
        let arr19 = str18.match(/E/g) || [];
        let tmp56 = new.target;
        let tmp57 = new.target;
        let array10 = new Array(arr19.length + 1);
        let str20 = str19;
        if (array9.length > 2) {
          str20 = str19.replace(/(M|L)+/, array9.join("$1"));
        }
        let str21 = str20;
        if (array10.length > 2) {
          str21 = str20.replace(/([Eec])+/, array10.join("$1"));
        }
        let tmp61;
        if (!regex.test(str21)) {
          let obj12 = {};
          closure_131_0 = obj12;
          obj12.pattern = str21.replace(obj9, (str) => {
            switch (str.charAt(0)) {
              case "E":
                let diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "e":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "c":
                diff = str.length - 1;
                obj9.weekday = closure_2.weekday[diff];
                return "{weekday}";
              case "G":
                obj9.era = closure_2.era[str.length - 1];
                return "{era}";
              case "y":
                let tmp9 = obj9;
                let str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "Y":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "u":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "U":
                tmp9 = obj9;
                str13 = "numeric";
                if (2 === str.length) {
                  str13 = "2-digit";
                }
                tmp9.year = str13;
                return "{year}";
              case "M":
                let diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "L":
                diff1 = str.length - 1;
                obj9.month = closure_2.month[diff1];
                return "{month}";
              case "d":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj9.day = str10;
                return "{day}";
              case "a":
                return "{ampm}";
              case "h":
                let tmp4 = obj9;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "H":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "k":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "K":
                tmp4 = obj9;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "m":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj9.minute = str5;
                return "{minute}";
              case "s":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj9.second = str3;
                return "{second}";
              case "z":
                str = "long";
                if (str.length < 4) {
                  str = "short";
                }
                obj9.timeZoneName = str;
                return "{timeZoneName}";
              default:
            }
          });
          let str22 = obj12.pattern;
          obj12.pattern = str22.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          let pattern7 = obj12.pattern;
          tmp61 = obj12;
          if (pattern7.indexOf("{ampm}") > -1) {
            obj12.hour12 = true;
            ({ pattern: obj5.pattern12, pattern: pattern4 } = obj12);
            let str23 = pattern4.replace("{ampm}", "");
            obj12.pattern = str23.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp61 = obj12;
          }
        }
        hasOwnPropertyResult2 = tmp61;
        tmp52 = tmp61;
      }
      tmp36 = tmp52;
      if (!hasOwnPropertyResult2) {
        continue;
      } else {
        let arr8 = items.push(tmp52);
        tmp36 = tmp52;
        continue;
      }
      continue;
    }
  }
  return items;
};