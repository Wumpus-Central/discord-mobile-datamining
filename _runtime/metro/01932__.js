// _runtime/metro/01932__.js
const f85419 = (arg0, arg1) => arg1 || "'";
const re0 =
  /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
const re1 = /[QxXVOvZASjgFDwWIQqH]/;
let closure_2 = {
  month: ["numeric", "2-digit", "short", "long", "narrow"],
  weekday: ["short", "short", "short", "long", "narrow"],
  era: ["short", "short", "short", "long", "narrow"],
};
const length = ["weekday", "era", "year", "month", "day"];
const length2 = ["hour", "minute", "second", "timeZoneName"];

export const createDateTimeFormat = function createDateTimeFormat(str) {
  let obj;
  let pattern;
  if (!regex.test(str)) {
    obj = { pattern: obj.pattern.replace(/'([^']*)'/g, f85419) };
    const pattern1 = obj.pattern;
    if (pattern1.indexOf("{ampm}") > -1) {
      obj.hour12 = true;
      ({ pattern: obj.pattern12, pattern } = obj);
      const str4 = pattern.replace("{ampm}", "");
      obj.pattern = str4.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    return obj;
  }
};
export const createDateTimeFormats = function createDateTimeFormats(formats) {
  let availableFormats;
  let dateFormats;
  let medium;
  let pattern;
  let pattern2;
  let pattern3;
  let pattern4;
  let str10;
  let str16;
  let str22;
  let str5;
  let timeFormats;
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
    let str = keys[tmp];
    while (str !== undefined) {
      let hasOwnPropertyResult = availableFormats.hasOwnProperty(str);
      if (hasOwnPropertyResult) {
        let str2 = availableFormats[str];
        let _Array = Array;
        let arr4 = str.match(/M/g) || [];
        let self = this;
        let self2 = this;
        let _Array1 = new _Array(arr4.length + 1);
        let _Array2 = Array;
        let arr6 = str.match(/E/g) || [];
        let self3 = this;
        let self4 = this;
        let _Array21 = new _Array2(arr6.length + 1);
        let str3 = str2;
        if (_Array1.length > 2) {
          str3 = str2.replace(/(M|L)+/, _Array1.join("$1"));
        }
        let str4 = str3;
        if (_Array21.length > 2) {
          str4 = str3.replace(/([Eec])+/, _Array21.join("$1"));
        }
        let tmp10;
        if (!regex.test(str4)) {
          let obj9 = { pattern: str5.replace(/'([^']*)'/g, f85419) };
          str5 = obj9.pattern;
          let pattern1 = obj9.pattern;
          tmp10 = obj9;
          if (pattern1.indexOf("{ampm}") > -1) {
            obj9.hour12 = true;
            ({ pattern: obj2.pattern12, pattern } = obj9);
            let str6 = pattern.replace("{ampm}", "");
            obj9.pattern = str6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp10 = obj9;
          }
        }
        hasOwnPropertyResult = tmp10;
        obj = tmp10;
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
  let tmp22 = tmp4;
  let num3 = 0;
  let tmp23 = tmp4;
  if (0 < items1.length) {
    do {
      let tmp25 = tmp22;
      let num4 = 0;
      if (0 < items2.length) {
        do {
          let str7 = medium.replace("{0}", items1[num3]);
          let str8 = str7.replace("{1}", items2[num4]);
          let str9 = str8.replace(/^[,\s]+|[,\s]+$/gi, "");
          let obj10;
          let tmp28;
          if (!regex.test(str9)) {
            obj10 = { pattern: str10.replace(/'([^']*)'/g, f85419) };
            str10 = obj10.pattern;
            let pattern5 = obj10.pattern;
            tmp28 = obj10;
            if (pattern5.indexOf("{ampm}") > -1) {
              obj10.hour12 = true;
              ({ pattern: obj3.pattern12, pattern: pattern2 } = obj10);
              let str11 = pattern2.replace("{ampm}", "");
              obj10.pattern = str11.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              tmp28 = obj10;
            }
          }
          if (tmp28) {
            let arr5 = items.push(tmp28);
          }
          num4 = num4 + 1;
          tmp25 = tmp28;
        } while (num4 < items2.length);
      }
      num3 = num3 + 1;
      tmp22 = tmp25;
      tmp23 = tmp25;
    } while (num3 < items1.length);
  }
  let tmp31 = tmp23;
  let tmp32 = tmp23;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp34 = tmp31;
    tmp32 = tmp31;
    while (keys1[0] !== undefined) {
      let hasOwnPropertyResult1 = timeFormats.hasOwnProperty(str12);
      if (hasOwnPropertyResult1) {
        let str13 = timeFormats[str12];
        let _Array3 = Array;
        let arr12 = str12.match(/M/g) || [];
        let self5 = this;
        let self6 = this;
        let _Array31 = new _Array3(arr12.length + 1);
        let _Array4 = Array;
        let arr14 = str12.match(/E/g) || [];
        let self7 = this;
        let self8 = this;
        let _Array41 = new _Array4(arr14.length + 1);
        let str14 = str13;
        if (_Array31.length > 2) {
          str14 = str13.replace(/(M|L)+/, _Array31.join("$1"));
        }
        let str15 = str14;
        if (_Array41.length > 2) {
          str15 = str14.replace(/([Eec])+/, _Array41.join("$1"));
        }
        let tmp39;
        if (!regex.test(str15)) {
          let obj11 = { pattern: str16.replace(/'([^']*)'/g, f85419) };
          str16 = obj11.pattern;
          let pattern6 = obj11.pattern;
          tmp39 = obj11;
          if (pattern6.indexOf("{ampm}") > -1) {
            obj11.hour12 = true;
            ({ pattern: obj4.pattern12, pattern: pattern3 } = obj11);
            let str17 = pattern3.replace("{ampm}", "");
            obj11.pattern = str17.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp39 = obj11;
          }
        }
        hasOwnPropertyResult1 = tmp39;
        tmp34 = tmp39;
      }
      tmp31 = tmp34;
      if (!hasOwnPropertyResult1) {
        continue;
      } else {
        let arr7 = items.push(tmp34);
        tmp31 = tmp34;
        continue;
      }
      continue;
    }
  }
  const keys2 = Object.keys();
  if (keys2 !== undefined) {
    let tmp44 = tmp32;
    while (keys2[0] !== undefined) {
      let hasOwnPropertyResult2 = dateFormats.hasOwnProperty(str18);
      if (hasOwnPropertyResult2) {
        let str19 = dateFormats[str18];
        let _Array5 = Array;
        let arr17 = str18.match(/M/g) || [];
        let self9 = this;
        let self10 = this;
        let _Array51 = new _Array5(arr17.length + 1);
        let _Array6 = Array;
        let arr19 = str18.match(/E/g) || [];
        let self11 = this;
        let self12 = this;
        let _Array61 = new _Array6(arr19.length + 1);
        let str20 = str19;
        if (_Array51.length > 2) {
          str20 = str19.replace(/(M|L)+/, _Array51.join("$1"));
        }
        let str21 = str20;
        if (_Array61.length > 2) {
          str21 = str20.replace(/([Eec])+/, _Array61.join("$1"));
        }
        let tmp49;
        if (!regex.test(str21)) {
          let obj12 = { pattern: str22.replace(/'([^']*)'/g, f85419) };
          str22 = obj12.pattern;
          let pattern7 = obj12.pattern;
          tmp49 = obj12;
          if (pattern7.indexOf("{ampm}") > -1) {
            obj12.hour12 = true;
            ({ pattern: obj5.pattern12, pattern: pattern4 } = obj12);
            let str23 = pattern4.replace("{ampm}", "");
            obj12.pattern = str23.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp49 = obj12;
          }
        }
        hasOwnPropertyResult2 = tmp49;
        tmp44 = tmp49;
      }
      tmp32 = tmp44;
      if (!hasOwnPropertyResult2) {
        continue;
      } else {
        let arr8 = items.push(tmp44);
        tmp32 = tmp44;
        continue;
      }
      continue;
    }
  }
  return items;
};
