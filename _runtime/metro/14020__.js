// === Module 14020: ? ===

// Module 14020
import _mod14018 from "module_14018" /* 14018 */;
import _mod14019 from "module_14019" /* 14019 */;
import _slicedToArray from "module_32" /* 32 */;

let obj = {};
const items = [];
obj.re = items;
const items1 = [];
obj.safeRe = items1;
const items2 = [];
obj.src = items2;
obj = {};
obj.t = obj;
const items3 = [["\\s", 1], , ];
const items4 = ["\\d", _mod14018.MAX_LENGTH];
items3[1] = items4;
const items5 = ["[a-zA-Z0-9-]", _mod14018.MAX_SAFE_BUILD_LENGTH];
items3[2] = items5;
_mod14019("NUMERICIDENTIFIER", 0, "0|[1-9]\\d*");
obj.NUMERICIDENTIFIER = 0;
items2[0] = "0|[1-9]\\d*";
const regExp = new RegExp("0|[1-9]\\d*", undefined);
items[0] = regExp;
const regExp1 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("0|[1-9]\\d*"), undefined);
items1[0] = regExp1;
const tmp = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("0|[1-9]\\d*");
_mod14019("NUMERICIDENTIFIERLOOSE", 1, "\\d+");
obj.NUMERICIDENTIFIERLOOSE = 1;
items2[1] = "\\d+";
const regExp2 = new RegExp("\\d+", undefined);
items[1] = regExp2;
const regExp3 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("\\d+"), undefined);
items1[1] = regExp3;
const combined = "\\d*[a-zA-Z-]" + "[a-zA-Z0-9-]" + "*";
let tmp5 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("\\d+");
_mod14019("NONNUMERICIDENTIFIER", 2, combined);
obj.NONNUMERICIDENTIFIER = 2;
items2[2] = combined;
const regExp4 = new RegExp(combined, undefined);
items[2] = regExp4;
const regExp5 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined), undefined);
items1[2] = regExp5;
const combined1 = "(" + items2[obj.NUMERICIDENTIFIER] + ")\\.(" + items2[obj.NUMERICIDENTIFIER] + ")\\.(" + items2[obj.NUMERICIDENTIFIER] + ")";
const tmp10 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined);
_mod14019("MAINVERSION", 3, combined1);
obj.MAINVERSION = 3;
items2[3] = combined1;
const regExp6 = new RegExp(combined1, undefined);
items[3] = regExp6;
const regExp7 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined1), undefined);
items1[3] = regExp7;
const combined2 = "(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")\\.(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")\\.(" + items2[obj.NUMERICIDENTIFIERLOOSE] + ")";
const tmp15 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined1);
_mod14019("MAINVERSIONLOOSE", 4, combined2);
obj.MAINVERSIONLOOSE = 4;
items2[4] = combined2;
const regExp8 = new RegExp(combined2, undefined);
items[4] = regExp8;
const regExp9 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined2), undefined);
items1[4] = regExp9;
const combined3 = "(?:" + items2[obj.NUMERICIDENTIFIER] + "|" + items2[obj.NONNUMERICIDENTIFIER] + ")";
const tmp20 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined2);
_mod14019("PRERELEASEIDENTIFIER", 5, combined3);
obj.PRERELEASEIDENTIFIER = 5;
items2[5] = combined3;
const regExp10 = new RegExp(combined3, undefined);
items[5] = regExp10;
const regExp11 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined3), undefined);
items1[5] = regExp11;
const combined4 = "(?:" + items2[obj.NUMERICIDENTIFIERLOOSE] + "|" + items2[obj.NONNUMERICIDENTIFIER] + ")";
const tmp25 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined3);
_mod14019("PRERELEASEIDENTIFIERLOOSE", 6, combined4);
obj.PRERELEASEIDENTIFIERLOOSE = 6;
items2[6] = combined4;
const regExp12 = new RegExp(combined4, undefined);
items[6] = regExp12;
const regExp13 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined4), undefined);
items1[6] = regExp13;
const combined5 = "(?:-(" + items2[obj.PRERELEASEIDENTIFIER] + "(?:\\." + items2[obj.PRERELEASEIDENTIFIER] + ")*))";
const tmp30 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined4);
_mod14019("PRERELEASE", 7, combined5);
obj.PRERELEASE = 7;
items2[7] = combined5;
const regExp14 = new RegExp(combined5, undefined);
items[7] = regExp14;
const regExp15 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined5), undefined);
items1[7] = regExp15;
const combined6 = "(?:-?(" + items2[obj.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + items2[obj.PRERELEASEIDENTIFIERLOOSE] + ")*))";
const tmp35 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined5);
_mod14019("PRERELEASELOOSE", 8, combined6);
obj.PRERELEASELOOSE = 8;
items2[8] = combined6;
const regExp16 = new RegExp(combined6, undefined);
items[8] = regExp16;
const regExp17 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined6), undefined);
items1[8] = regExp17;
const combined7 = "" + "[a-zA-Z0-9-]" + "+";
const tmp40 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined6);
_mod14019("BUILDIDENTIFIER", 9, combined7);
obj.BUILDIDENTIFIER = 9;
items2[9] = combined7;
const regExp18 = new RegExp(combined7, undefined);
items[9] = regExp18;
const regExp19 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined7), undefined);
items1[9] = regExp19;
const combined8 = "(?:\\+(" + items2[obj.BUILDIDENTIFIER] + "(?:\\." + items2[obj.BUILDIDENTIFIER] + ")*))";
const tmp45 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined7);
_mod14019("BUILD", 10, combined8);
obj.BUILD = 10;
items2[10] = combined8;
const regExp20 = new RegExp(combined8, undefined);
items[10] = regExp20;
const regExp21 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined8), undefined);
items1[10] = regExp21;
const combined9 = "v?" + items2[obj.MAINVERSION] + items2[obj.PRERELEASE] + "?" + items2[obj.BUILD] + "?";
const tmp50 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined8);
_mod14019("FULLPLAIN", 11, combined9);
obj.FULLPLAIN = 11;
items2[11] = combined9;
const regExp22 = new RegExp(combined9, undefined);
items[11] = regExp22;
const regExp23 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined9), undefined);
items1[11] = regExp23;
const combined10 = "^" + items2[obj.FULLPLAIN] + "$";
const tmp55 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined9);
_mod14019("FULL", 12, combined10);
obj.FULL = 12;
items2[12] = combined10;
const regExp24 = new RegExp(combined10, undefined);
items[12] = regExp24;
const regExp25 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined10), undefined);
items1[12] = regExp25;
const combined11 = "[v=\\s]*" + items2[obj.MAINVERSIONLOOSE] + items2[obj.PRERELEASELOOSE] + "?" + items2[obj.BUILD] + "?";
const tmp60 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined10);
_mod14019("LOOSEPLAIN", 13, combined11);
obj.LOOSEPLAIN = 13;
items2[13] = combined11;
const regExp26 = new RegExp(combined11, undefined);
items[13] = regExp26;
const regExp27 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined11), undefined);
items1[13] = regExp27;
const combined12 = "^" + items2[obj.LOOSEPLAIN] + "$";
const tmp65 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined11);
_mod14019("LOOSE", 14, combined12);
obj.LOOSE = 14;
items2[14] = combined12;
const regExp28 = new RegExp(combined12, undefined);
items[14] = regExp28;
const regExp29 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined12), undefined);
items1[14] = regExp29;
const tmp70 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined12);
_mod14019("GTLT", 15, "((?:<|>)?=?)");
obj.GTLT = 15;
items2[15] = "((?:<|>)?=?)";
const regExp30 = new RegExp("((?:<|>)?=?)", undefined);
items[15] = regExp30;
const regExp31 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("((?:<|>)?=?)"), undefined);
items1[15] = regExp31;
const combined13 = "" + items2[obj.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
const tmp74 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("((?:<|>)?=?)");
_mod14019("XRANGEIDENTIFIERLOOSE", 16, combined13);
obj.XRANGEIDENTIFIERLOOSE = 16;
items2[16] = combined13;
const regExp32 = new RegExp(combined13, undefined);
items[16] = regExp32;
const regExp33 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined13), undefined);
items1[16] = regExp33;
const combined14 = "" + items2[obj.NUMERICIDENTIFIER] + "|x|X|\\*";
const tmp79 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined13);
_mod14019("XRANGEIDENTIFIER", 17, combined14);
obj.XRANGEIDENTIFIER = 17;
items2[17] = combined14;
const regExp34 = new RegExp(combined14, undefined);
items[17] = regExp34;
const regExp35 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined14), undefined);
items1[17] = regExp35;
const combined15 = "[v=\\s]*(" + items2[obj.XRANGEIDENTIFIER] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIER] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIER] + ")(?:" + items2[obj.PRERELEASE] + ")?" + items2[obj.BUILD] + "?)?)?";
const tmp84 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined14);
_mod14019("XRANGEPLAIN", 18, combined15);
obj.XRANGEPLAIN = 18;
items2[18] = combined15;
const regExp36 = new RegExp(combined15, undefined);
items[18] = regExp36;
const regExp37 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined15), undefined);
items1[18] = regExp37;
const combined16 = "[v=\\s]*(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + items2[obj.XRANGEIDENTIFIERLOOSE] + ")(?:" + items2[obj.PRERELEASELOOSE] + ")?" + items2[obj.BUILD] + "?)?)?";
const tmp89 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined15);
_mod14019("XRANGEPLAINLOOSE", 19, combined16);
obj.XRANGEPLAINLOOSE = 19;
items2[19] = combined16;
const regExp38 = new RegExp(combined16, undefined);
items[19] = regExp38;
const regExp39 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined16), undefined);
items1[19] = regExp39;
const combined17 = "^" + items2[obj.GTLT] + "\\s*" + items2[obj.XRANGEPLAIN] + "$";
const tmp94 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined16);
_mod14019("XRANGE", 20, combined17);
obj.XRANGE = 20;
items2[20] = combined17;
const regExp40 = new RegExp(combined17, undefined);
items[20] = regExp40;
const regExp41 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined17), undefined);
items1[20] = regExp41;
const combined18 = "^" + items2[obj.GTLT] + "\\s*" + items2[obj.XRANGEPLAINLOOSE] + "$";
const tmp99 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined17);
_mod14019("XRANGELOOSE", 21, combined18);
obj.XRANGELOOSE = 21;
items2[21] = combined18;
const regExp42 = new RegExp(combined18, undefined);
items[21] = regExp42;
const regExp43 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined18), undefined);
items1[21] = regExp43;
const combined19 = "(^|[^\\d])(\\d{1," + _mod14018.MAX_SAFE_COMPONENT_LENGTH + "})(?:\\.(\\d{1," + _mod14018.MAX_SAFE_COMPONENT_LENGTH + "}))?(?:\\.(\\d{1," + _mod14018.MAX_SAFE_COMPONENT_LENGTH + "}))?";
const tmp104 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined18);
_mod14019("COERCEPLAIN", 22, combined19);
obj.COERCEPLAIN = 22;
items2[22] = combined19;
const regExp44 = new RegExp(combined19, undefined);
items[22] = regExp44;
const regExp45 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined19), undefined);
items1[22] = regExp45;
const combined20 = "" + items2[obj.COERCEPLAIN] + "(?:$|[^\\d])";
const tmp109 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined19);
_mod14019("COERCE", 23, combined20);
obj.COERCE = 23;
items2[23] = combined20;
const regExp46 = new RegExp(combined20, undefined);
items[23] = regExp46;
const regExp47 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined20), undefined);
items1[23] = regExp47;
const sum = items2[obj.COERCEPLAIN] + "(?:" + items2[obj.PRERELEASE] + ")?";
const sum1 = sum + "(?:" + items2[obj.BUILD] + ")?(?:$|[^\\d])";
const tmp114 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined20);
_mod14019("COERCEFULL", 24, sum1);
obj.COERCEFULL = 24;
items2[24] = sum1;
const regExp48 = new RegExp(sum1, undefined);
items[24] = regExp48;
const regExp49 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(sum1), undefined);
items1[24] = regExp49;
const tmp120 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(sum1);
_mod14019("COERCERTL", 25, items2[obj.COERCE]);
obj.COERCERTL = 25;
items2[25] = items2[obj.COERCE];
const regExp50 = new RegExp(tmp124, "g");
items[25] = regExp50;
const regExp51 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(items2[obj.COERCE]), "g");
items1[25] = regExp51;
const tmp125 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(items2[obj.COERCE]);
_mod14019("COERCERTLFULL", 26, items2[obj.COERCEFULL]);
obj.COERCERTLFULL = 26;
items2[26] = items2[obj.COERCEFULL];
const regExp52 = new RegExp(tmp129, "g");
items[26] = regExp52;
const regExp53 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(items2[obj.COERCEFULL]), "g");
items1[26] = regExp53;
const tmp130 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(items2[obj.COERCEFULL]);
_mod14019("LONETILDE", 27, "(?:~>?)");
obj.LONETILDE = 27;
items2[27] = "(?:~>?)";
const regExp54 = new RegExp("(?:~>?)", undefined);
items[27] = regExp54;
const regExp55 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(?:~>?)"), undefined);
items1[27] = regExp55;
const combined21 = "(\\s*)" + items2[obj.LONETILDE] + "\\s+";
const tmp134 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(?:~>?)");
_mod14019("TILDETRIM", 28, combined21);
obj.TILDETRIM = 28;
items2[28] = combined21;
const regExp56 = new RegExp(combined21, "g");
items[28] = regExp56;
const regExp57 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined21), "g");
items1[28] = regExp57;
obj.tildeTrimReplace = "$1~";
const combined22 = "^" + items2[obj.LONETILDE] + items2[obj.XRANGEPLAIN] + "$";
const tmp139 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined21);
_mod14019("TILDE", 29, combined22);
obj.TILDE = 29;
items2[29] = combined22;
const regExp58 = new RegExp(combined22, undefined);
items[29] = regExp58;
const regExp59 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined22), undefined);
items1[29] = regExp59;
const combined23 = "^" + items2[obj.LONETILDE] + items2[obj.XRANGEPLAINLOOSE] + "$";
const tmp144 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined22);
_mod14019("TILDELOOSE", 30, combined23);
obj.TILDELOOSE = 30;
items2[30] = combined23;
const regExp60 = new RegExp(combined23, undefined);
items[30] = regExp60;
const regExp61 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined23), undefined);
items1[30] = regExp61;
const tmp149 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined23);
_mod14019("LONECARET", 31, "(?:\\^)");
obj.LONECARET = 31;
items2[31] = "(?:\\^)";
const regExp62 = new RegExp("(?:\\^)", undefined);
items[31] = regExp62;
const regExp63 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(?:\\^)"), undefined);
items1[31] = regExp63;
const combined24 = "(\\s*)" + items2[obj.LONECARET] + "\\s+";
const tmp153 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(?:\\^)");
_mod14019("CARETTRIM", 32, combined24);
obj.CARETTRIM = 32;
items2[32] = combined24;
const regExp64 = new RegExp(combined24, "g");
items[32] = regExp64;
const regExp65 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined24), "g");
items1[32] = regExp65;
obj.caretTrimReplace = "$1^";
const combined25 = "^" + items2[obj.LONECARET] + items2[obj.XRANGEPLAIN] + "$";
const tmp158 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined24);
_mod14019("CARET", 33, combined25);
obj.CARET = 33;
items2[33] = combined25;
const regExp66 = new RegExp(combined25, undefined);
items[33] = regExp66;
const regExp67 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined25), undefined);
items1[33] = regExp67;
const combined26 = "^" + items2[obj.LONECARET] + items2[obj.XRANGEPLAINLOOSE] + "$";
const tmp163 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined25);
_mod14019("CARETLOOSE", 34, combined26);
obj.CARETLOOSE = 34;
items2[34] = combined26;
const regExp68 = new RegExp(combined26, undefined);
items[34] = regExp68;
const regExp69 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined26), undefined);
items1[34] = regExp69;
const combined27 = "^" + items2[obj.GTLT] + "\\s*(" + items2[obj.LOOSEPLAIN] + ")$|^$";
const tmp168 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined26);
_mod14019("COMPARATORLOOSE", 35, combined27);
obj.COMPARATORLOOSE = 35;
items2[35] = combined27;
const regExp70 = new RegExp(combined27, undefined);
items[35] = regExp70;
const regExp71 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined27), undefined);
items1[35] = regExp71;
const combined28 = "^" + items2[obj.GTLT] + "\\s*(" + items2[obj.FULLPLAIN] + ")$|^$";
const tmp173 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined27);
_mod14019("COMPARATOR", 36, combined28);
obj.COMPARATOR = 36;
items2[36] = combined28;
const regExp72 = new RegExp(combined28, undefined);
items[36] = regExp72;
const regExp73 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined28), undefined);
items1[36] = regExp73;
const combined29 = "(\\s*)" + items2[obj.GTLT] + "\\s*(" + items2[obj.LOOSEPLAIN] + "|" + items2[obj.XRANGEPLAIN] + ")";
const tmp178 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined28);
_mod14019("COMPARATORTRIM", 37, combined29);
obj.COMPARATORTRIM = 37;
items2[37] = combined29;
const regExp74 = new RegExp(combined29, "g");
items[37] = regExp74;
const regExp75 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined29), "g");
items1[37] = regExp75;
obj.comparatorTrimReplace = "$1$2$3";
const combined30 = "^\\s*(" + items2[obj.XRANGEPLAIN] + ")\\s+-\\s+(" + items2[obj.XRANGEPLAIN] + ")\\s*$";
const tmp183 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined29);
_mod14019("HYPHENRANGE", 38, combined30);
obj.HYPHENRANGE = 38;
items2[38] = combined30;
const regExp76 = new RegExp(combined30, undefined);
items[38] = regExp76;
const regExp77 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined30), undefined);
items1[38] = regExp77;
const combined31 = "^\\s*(" + items2[obj.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + items2[obj.XRANGEPLAINLOOSE] + ")\\s*$";
const tmp188 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined30);
_mod14019("HYPHENRANGELOOSE", 39, combined31);
obj.HYPHENRANGELOOSE = 39;
items2[39] = combined31;
const regExp78 = new RegExp(combined31, undefined);
items[39] = regExp78;
const regExp79 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined31), undefined);
items1[39] = regExp79;
const tmp193 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})(combined31);
_mod14019("STAR", 40, "(<|>)?=?\\s*\\*");
obj.STAR = 40;
items2[40] = "(<|>)?=?\\s*\\*";
const regExp80 = new RegExp("(<|>)?=?\\s*\\*", undefined);
items[40] = regExp80;
const regExp81 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(<|>)?=?\\s*\\*"), undefined);
items1[40] = regExp81;
const tmp197 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("(<|>)?=?\\s*\\*");
_mod14019("GTE0", 41, "^\\s*>=\\s*0\\.0\\.0\\s*$");
obj.GTE0 = 41;
items2[41] = "^\\s*>=\\s*0\\.0\\.0\\s*$";
const regExp82 = new RegExp("^\\s*>=\\s*0\\.0\\.0\\s*$", undefined);
items[41] = regExp82;
const regExp83 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("^\\s*>=\\s*0\\.0\\.0\\s*$"), undefined);
items1[41] = regExp83;
const tmp201 = ((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("^\\s*>=\\s*0\\.0\\.0\\s*$");
_mod14019("GTE0PRE", 42, "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
obj.GTE0PRE = 42;
items2[42] = "^\\s*>=\\s*0\\.0\\.0-0\\s*$";
const regExp84 = new RegExp("^\\s*>=\\s*0\\.0\\.0-0\\s*$", undefined);
items[42] = regExp84;
const regExp85 = new RegExp(((items2) => {
  let str = items2;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let _HermesInternal = HermesInternal;
    let parts = str.split("" + tmp6 + "*");
    let _HermesInternal2 = HermesInternal;
    let str2 = "";
    let str3 = "{0,";
    let str4 = "}";
    let str5 = parts.join("" + tmp6 + "{0," + tmp7 + "}");
    let _HermesInternal3 = HermesInternal;
    let parts1 = str5.split("" + tmp6 + "+");
    let _HermesInternal4 = HermesInternal;
    let str6 = "";
    let str7 = "{1,";
    str = parts1.join("" + tmp6 + "{1," + tmp7 + "}");
    continue;
  }
  return str;
})("^\\s*>=\\s*0\\.0\\.0-0\\s*$"), undefined);
items1[42] = regExp85;

export default obj;