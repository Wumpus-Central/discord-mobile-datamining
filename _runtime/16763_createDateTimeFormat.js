// _runtime/16763_createDateTimeFormat.js
arg5.createDateTimeFormat = function createDateTimeFormat(str) {
  if (!regex.test(str)) {
    const obj = {};
    obj.pattern = str.replace(obj, (arg0) => {
      let str = "long";
      if (arr.length < 4) {
        str = "short";
      }
      obj2.timeZoneName = str;
      return "{timeZoneName}";
    });
    obj.pattern = obj.pattern.replace(/'([^']*)'/g, (arg0, arg1) => {
      let str = arg1;
      if (!arg1) {
        str = "'";
      }
      return str;
    });
    pattern = obj.pattern;
    if (pattern.indexOf("{ampm}") > -1) {
      obj.hour12 = true;
      ({ pattern: obj.pattern12, pattern } = obj);
      obj.pattern = pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      const str4 = pattern.replace("{ampm}", "");
    }
    return obj;
  }
};
arg5.createDateTimeFormats = function createDateTimeFormats(formats) {
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
      let tmp65 = str;
      let hasOwnPropertyResult = availableFormats.hasOwnProperty(str);
      if (hasOwnPropertyResult) {
        let str2 = availableFormats[str];
        let arr3 = str.match(/M/g) || [];
        let tmp7 = new.target;
        let tmp8 = new.target;
        let array = new Array(arr3.length + 1);
        let arr6 = str.match(/E/g) || [];
        let tmp9 = array;
        let tmp10 = new.target;
        let tmp11 = new.target;
        array = new Array(arr6.length + 1);
        let str3 = str2;
        if (array.length > 2) {
          str3 = str2.replace(/(M|L)+/, array.join("$1"));
        }
        let tmp12 = array;
        let str4 = str3;
        if (array.length > 2) {
          str4 = str3.replace(/([Eec])+/, array.join("$1"));
        }
        let tmp13 = regex;
        let tmp14;
        if (!regex.test(str4)) {
          obj = {};
          let obj2 = obj;
          let tmp15 = obj2;
          obj.pattern = str4.replace(obj2, (arg0) => {
            let str = "long";
            if (arr.length < 4) {
              str = "short";
            }
            obj2.timeZoneName = str;
            return "{timeZoneName}";
          });
          let str5 = obj.pattern;
          obj.pattern = str5.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern = obj.pattern;
          tmp14 = obj;
          if (pattern.indexOf("{ampm}") > -1) {
            obj.hour12 = true;
            ({ pattern: obj2.pattern12, pattern } = obj);
            let str6 = pattern.replace("{ampm}", "");
            obj.pattern = str6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp14 = obj;
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
        let tmp18 = length2;
        let num = 0;
        let flag = true;
        if (0 < length2.length) {
          let arr9 = length2;
          let tmp19 = num;
          flag = false;
          while (!obj.hasOwnProperty(length2[num])) {
            let sum = num + 1;
            num = sum;
            flag = true;
            if (sum >= arr9.length) {
              break;
            }
          }
        }
        if (flag) {
          arr = items2.push(tmp6);
          tmp2 = obj;
          tmp3 = tmp6;
          continue;
        } else {
          let tmp21 = length;
          let num2 = 0;
          let flag2 = true;
          if (0 < length.length) {
            let arr10 = length;
            let tmp22 = num2;
            flag2 = false;
            while (!obj.hasOwnProperty(length[num2])) {
              let sum1 = num2 + 1;
              num2 = sum1;
              flag2 = true;
              if (sum1 >= arr10.length) {
                break;
              }
            }
          }
          tmp2 = obj;
          tmp3 = tmp6;
          if (!flag2) {
            continue;
          } else {
            let arr1 = items1.push(tmp6);
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
      let tmp28 = num3;
      let tmp29 = tmp26;
      let num4 = 0;
      if (0 < items2.length) {
        do {
          let str7 = medium.replace("{0}", items1[num3]);
          let str8 = str7.replace("{1}", items2[num4]);
          let str9 = str8.replace(/^[,\s]+|[,\s]+$/gi, "");
          obj2 = undefined;
          let tmp30 = regex;
          let tmp31 = num4;
          let tmp32;
          if (!regex.test(str9)) {
            obj = {};
            obj2 = obj;
            let tmp33 = obj2;
            obj.pattern = str9.replace(obj2, (arg0) => {
              let str = "long";
              if (arr.length < 4) {
                str = "short";
              }
              obj2.timeZoneName = str;
              return "{timeZoneName}";
            });
            let str10 = obj.pattern;
            obj.pattern = str10.replace(/'([^']*)'/g, (arg0, arg1) => {
              let str = arg1;
              if (!arg1) {
                str = "'";
              }
              return str;
            });
            let pattern1 = obj.pattern;
            tmp32 = obj;
            if (pattern1.indexOf("{ampm}") > -1) {
              obj.hour12 = true;
              ({ pattern: obj3.pattern12, pattern: pattern2 } = obj);
              let str11 = pattern2.replace("{ampm}", "");
              obj.pattern = str11.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              tmp32 = obj;
            }
          }
          if (tmp32) {
            let arr2 = items.push(tmp32);
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
      let tmp66 = str12;
      let hasOwnPropertyResult1 = timeFormats.hasOwnProperty(str12);
      if (hasOwnPropertyResult1) {
        let str13 = timeFormats[str12];
        let arr12 = str12.match(/M/g) || [];
        let tmp39 = new.target;
        let tmp40 = new.target;
        let array1 = new Array(arr12.length + 1);
        let arr14 = str12.match(/E/g) || [];
        let tmp41 = array1;
        let tmp42 = new.target;
        let tmp43 = new.target;
        let array2 = new Array(arr14.length + 1);
        let str14 = str13;
        if (array1.length > 2) {
          str14 = str13.replace(/(M|L)+/, array1.join("$1"));
        }
        let tmp44 = array2;
        let str15 = str14;
        if (array2.length > 2) {
          str15 = str14.replace(/([Eec])+/, array2.join("$1"));
        }
        let tmp45 = regex;
        let tmp46 = str15;
        let tmp47;
        if (!regex.test(str15)) {
          obj1 = {};
          obj2 = obj1;
          let tmp48 = obj2;
          obj1.pattern = str15.replace(obj2, (arg0) => {
            let str = "long";
            if (arr.length < 4) {
              str = "short";
            }
            obj2.timeZoneName = str;
            return "{timeZoneName}";
          });
          let str16 = obj1.pattern;
          obj1.pattern = str16.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern2 = obj1.pattern;
          tmp47 = obj1;
          if (pattern2.indexOf("{ampm}") > -1) {
            obj1.hour12 = true;
            ({ pattern: obj4.pattern12, pattern: pattern3 } = obj1);
            let str17 = pattern3.replace("{ampm}", "");
            obj1.pattern = str17.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp47 = obj1;
          }
        }
        hasOwnPropertyResult1 = tmp47;
        tmp38 = tmp47;
      }
      tmp35 = tmp38;
      if (!hasOwnPropertyResult1) {
        continue;
      } else {
        arr3 = items.push(tmp38);
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
      let tmp67 = str18;
      let hasOwnPropertyResult2 = dateFormats.hasOwnProperty(str18);
      if (hasOwnPropertyResult2) {
        let str19 = dateFormats[str18];
        let arr17 = str18.match(/M/g) || [];
        let tmp53 = new.target;
        let tmp54 = new.target;
        let array3 = new Array(arr17.length + 1);
        let arr19 = str18.match(/E/g) || [];
        let tmp55 = array3;
        let tmp56 = new.target;
        let tmp57 = new.target;
        let array4 = new Array(arr19.length + 1);
        let str20 = str19;
        if (array3.length > 2) {
          str20 = str19.replace(/(M|L)+/, array3.join("$1"));
        }
        let tmp58 = array4;
        let str21 = str20;
        if (array4.length > 2) {
          str21 = str20.replace(/([Eec])+/, array4.join("$1"));
        }
        let tmp59 = regex;
        let tmp60 = str21;
        let tmp61;
        if (!regex.test(str21)) {
          obj2 = {};
          let tmp62 = obj2;
          obj2.pattern = str21.replace(obj2, (arg0) => {
            let str = "long";
            if (arr.length < 4) {
              str = "short";
            }
            obj2.timeZoneName = str;
            return "{timeZoneName}";
          });
          let str22 = obj2.pattern;
          obj2.pattern = str22.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern3 = obj2.pattern;
          tmp61 = obj2;
          if (pattern3.indexOf("{ampm}") > -1) {
            obj2.hour12 = true;
            ({ pattern: obj5.pattern12, pattern: pattern4 } = obj2);
            let str23 = pattern4.replace("{ampm}", "");
            obj2.pattern = str23.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp61 = obj2;
          }
        }
        hasOwnPropertyResult2 = tmp61;
        tmp52 = tmp61;
      }
      tmp36 = tmp52;
      if (!hasOwnPropertyResult2) {
        continue;
      } else {
        let arr4 = items.push(tmp52);
        tmp36 = tmp52;
        continue;
      }
      continue;
    }
  }
  return items;
};
const re0 = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
const re1 = /[QxXVOvZASjgFDwWIQqH]/;
let closure_2 = { month: ["numeric", "2-digit", "short", "long", "narrow"], weekday: ["short", "short", "short", "long", "narrow"], era: ["short", "short", "short", "long", "narrow"] };
let closure_3 = ["weekday", "era", "year", "month", "day"];
let closure_4 = ["hour", "minute", "second", "timeZoneName"];