// _runtime/metro/13853__.js
import _mod13851 from "13851__.js";
import _mod13852 from "13852__.js";
import _slicedToArray from "00032__slicedToArray.js";

let items;
let items1;
let items2;
let obj2;
const f115737 = (items2) => {
  let tmp6;
  let tmp7;
  let str = items2;
  const tmp2 = items3[Symbol.iterator]();
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
};
const obj = {
  re: items,
  safeRe: items1,
  src: items2,
  t: obj2,
  tildeTrimReplace: "$1~",
  caretTrimReplace: "$1^",
  comparatorTrimReplace: "$1$2$3",
};
items = [];
items1 = [];
items2 = [];
obj2 = {
  NUMERICIDENTIFIER: 0,
  NUMERICIDENTIFIERLOOSE: 1,
  NONNUMERICIDENTIFIER: 2,
  MAINVERSION: 3,
  MAINVERSIONLOOSE: 4,
  PRERELEASEIDENTIFIER: 5,
  PRERELEASEIDENTIFIERLOOSE: 6,
  PRERELEASE: 7,
  PRERELEASELOOSE: 8,
  BUILDIDENTIFIER: 9,
  BUILD: 10,
  FULLPLAIN: 11,
  FULL: 12,
  LOOSEPLAIN: 13,
  LOOSE: 14,
  GTLT: 15,
  XRANGEIDENTIFIERLOOSE: 16,
  XRANGEIDENTIFIER: 17,
  XRANGEPLAIN: 18,
  XRANGEPLAINLOOSE: 19,
  XRANGE: 20,
  XRANGELOOSE: 21,
  COERCEPLAIN: 22,
  COERCE: 23,
  COERCEFULL: 24,
  COERCERTL: 25,
  COERCERTLFULL: 26,
  LONETILDE: 27,
  TILDETRIM: 28,
  TILDE: 29,
  TILDELOOSE: 30,
  LONECARET: 31,
  CARETTRIM: 32,
  CARET: 33,
  CARETLOOSE: 34,
  COMPARATORLOOSE: 35,
  COMPARATOR: 36,
  COMPARATORTRIM: 37,
  HYPHENRANGE: 38,
  HYPHENRANGELOOSE: 39,
  STAR: 40,
  GTE0: 41,
  GTE0PRE: 42,
};
const items3 = [["\\s", 1], ,];
const items4 = ["\\d", _mod13851.MAX_LENGTH];
items3[1] = items4;
const items5 = ["[a-zA-Z0-9-]", _mod13851.MAX_SAFE_BUILD_LENGTH];
items3[2] = items5;
const tmp = f115737("0|[1-9]\\d*");
let tmp2 = _mod13852("NUMERICIDENTIFIER", 0, "0|[1-9]\\d*");
items2[0] = "0|[1-9]\\d*";
const regExp = new RegExp("0|[1-9]\\d*", undefined);
items[0] = regExp;
const regExp1 = new RegExp(tmp, undefined);
items1[0] = regExp1;
let tmp5 = f115737("\\d+");
const tmp6 = _mod13852("NUMERICIDENTIFIERLOOSE", 1, "\\d+");
items2[1] = "\\d+";
const regExp2 = new RegExp("\\d+", undefined);
items[1] = regExp2;
const regExp3 = new RegExp(tmp5, undefined);
items1[1] = regExp3;
const combined = "\\d*[a-zA-Z-]" + "[a-zA-Z0-9-]" + "*";
const tmp10 = f115737(combined);
_mod13852("NONNUMERICIDENTIFIER", 2, combined);
items2[2] = combined;
const regExp4 = new RegExp(combined, undefined);
items[2] = regExp4;
const regExp5 = new RegExp(tmp10, undefined);
items1[2] = regExp5;
const combined1 =
  "(" +
  items2[obj2.NUMERICIDENTIFIER] +
  ")\\.(" +
  items2[obj2.NUMERICIDENTIFIER] +
  ")\\.(" +
  items2[obj2.NUMERICIDENTIFIER] +
  ")";
const tmp15 = f115737(combined1);
_mod13852("MAINVERSION", 3, combined1);
items2[3] = combined1;
const regExp6 = new RegExp(combined1, undefined);
items[3] = regExp6;
const regExp7 = new RegExp(tmp15, undefined);
items1[3] = regExp7;
const combined2 =
  "(" +
  items2[obj2.NUMERICIDENTIFIERLOOSE] +
  ")\\.(" +
  items2[obj2.NUMERICIDENTIFIERLOOSE] +
  ")\\.(" +
  items2[obj2.NUMERICIDENTIFIERLOOSE] +
  ")";
const tmp20 = f115737(combined2);
_mod13852("MAINVERSIONLOOSE", 4, combined2);
items2[4] = combined2;
const regExp8 = new RegExp(combined2, undefined);
items[4] = regExp8;
const regExp9 = new RegExp(tmp20, undefined);
items1[4] = regExp9;
const combined3 = "(?:" + items2[obj2.NUMERICIDENTIFIER] + "|" + items2[obj2.NONNUMERICIDENTIFIER] + ")";
const tmp25 = f115737(combined3);
_mod13852("PRERELEASEIDENTIFIER", 5, combined3);
items2[5] = combined3;
const regExp10 = new RegExp(combined3, undefined);
items[5] = regExp10;
const regExp11 = new RegExp(tmp25, undefined);
items1[5] = regExp11;
const combined4 = "(?:" + items2[obj2.NUMERICIDENTIFIERLOOSE] + "|" + items2[obj2.NONNUMERICIDENTIFIER] + ")";
const tmp30 = f115737(combined4);
_mod13852("PRERELEASEIDENTIFIERLOOSE", 6, combined4);
items2[6] = combined4;
const regExp12 = new RegExp(combined4, undefined);
items[6] = regExp12;
const regExp13 = new RegExp(tmp30, undefined);
items1[6] = regExp13;
const combined5 = "(?:-(" + items2[obj2.PRERELEASEIDENTIFIER] + "(?:\\." + items2[obj2.PRERELEASEIDENTIFIER] + ")*))";
const tmp35 = f115737(combined5);
_mod13852("PRERELEASE", 7, combined5);
items2[7] = combined5;
const regExp14 = new RegExp(combined5, undefined);
items[7] = regExp14;
const regExp15 = new RegExp(tmp35, undefined);
items1[7] = regExp15;
const combined6 =
  "(?:-?(" + items2[obj2.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + items2[obj2.PRERELEASEIDENTIFIERLOOSE] + ")*))";
const tmp40 = f115737(combined6);
_mod13852("PRERELEASELOOSE", 8, combined6);
items2[8] = combined6;
const regExp16 = new RegExp(combined6, undefined);
items[8] = regExp16;
const regExp17 = new RegExp(tmp40, undefined);
items1[8] = regExp17;
const combined7 = "" + "[a-zA-Z0-9-]" + "+";
const tmp45 = f115737(combined7);
_mod13852("BUILDIDENTIFIER", 9, combined7);
items2[9] = combined7;
const regExp18 = new RegExp(combined7, undefined);
items[9] = regExp18;
const regExp19 = new RegExp(tmp45, undefined);
items1[9] = regExp19;
const combined8 = "(?:\\+(" + items2[obj2.BUILDIDENTIFIER] + "(?:\\." + items2[obj2.BUILDIDENTIFIER] + ")*))";
const tmp50 = f115737(combined8);
_mod13852("BUILD", 10, combined8);
items2[10] = combined8;
const regExp20 = new RegExp(combined8, undefined);
items[10] = regExp20;
const regExp21 = new RegExp(tmp50, undefined);
items1[10] = regExp21;
const combined9 = "v?" + items2[obj2.MAINVERSION] + items2[obj2.PRERELEASE] + "?" + items2[obj2.BUILD] + "?";
const tmp55 = f115737(combined9);
_mod13852("FULLPLAIN", 11, combined9);
items2[11] = combined9;
const regExp22 = new RegExp(combined9, undefined);
items[11] = regExp22;
const regExp23 = new RegExp(tmp55, undefined);
items1[11] = regExp23;
const combined10 = "^" + items2[obj2.FULLPLAIN] + "$";
const tmp60 = f115737(combined10);
_mod13852("FULL", 12, combined10);
items2[12] = combined10;
const regExp24 = new RegExp(combined10, undefined);
items[12] = regExp24;
const regExp25 = new RegExp(tmp60, undefined);
items1[12] = regExp25;
const combined11 =
  "[v=\\s]*" + items2[obj2.MAINVERSIONLOOSE] + items2[obj2.PRERELEASELOOSE] + "?" + items2[obj2.BUILD] + "?";
const tmp65 = f115737(combined11);
_mod13852("LOOSEPLAIN", 13, combined11);
items2[13] = combined11;
const regExp26 = new RegExp(combined11, undefined);
items[13] = regExp26;
const regExp27 = new RegExp(tmp65, undefined);
items1[13] = regExp27;
const combined12 = "^" + items2[obj2.LOOSEPLAIN] + "$";
const tmp70 = f115737(combined12);
_mod13852("LOOSE", 14, combined12);
items2[14] = combined12;
const regExp28 = new RegExp(combined12, undefined);
items[14] = regExp28;
const regExp29 = new RegExp(tmp70, undefined);
items1[14] = regExp29;
const tmp74 = f115737("((?:<|>)?=?)");
_mod13852("GTLT", 15, "((?:<|>)?=?)");
items2[15] = "((?:<|>)?=?)";
const regExp30 = new RegExp("((?:<|>)?=?)", undefined);
items[15] = regExp30;
const regExp31 = new RegExp(tmp74, undefined);
items1[15] = regExp31;
const combined13 = "" + items2[obj2.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
const tmp79 = f115737(combined13);
_mod13852("XRANGEIDENTIFIERLOOSE", 16, combined13);
items2[16] = combined13;
const regExp32 = new RegExp(combined13, undefined);
items[16] = regExp32;
const regExp33 = new RegExp(tmp79, undefined);
items1[16] = regExp33;
const combined14 = "" + items2[obj2.NUMERICIDENTIFIER] + "|x|X|\\*";
const tmp84 = f115737(combined14);
_mod13852("XRANGEIDENTIFIER", 17, combined14);
items2[17] = combined14;
const regExp34 = new RegExp(combined14, undefined);
items[17] = regExp34;
const regExp35 = new RegExp(tmp84, undefined);
items1[17] = regExp35;
const combined15 =
  "[v=\\s]*(" +
  items2[obj2.XRANGEIDENTIFIER] +
  ")(?:\\.(" +
  items2[obj2.XRANGEIDENTIFIER] +
  ")(?:\\.(" +
  items2[obj2.XRANGEIDENTIFIER] +
  ")(?:" +
  items2[obj2.PRERELEASE] +
  ")?" +
  items2[obj2.BUILD] +
  "?)?)?";
const tmp89 = f115737(combined15);
_mod13852("XRANGEPLAIN", 18, combined15);
items2[18] = combined15;
const regExp36 = new RegExp(combined15, undefined);
items[18] = regExp36;
const regExp37 = new RegExp(tmp89, undefined);
items1[18] = regExp37;
const combined16 =
  "[v=\\s]*(" +
  items2[obj2.XRANGEIDENTIFIERLOOSE] +
  ")(?:\\.(" +
  items2[obj2.XRANGEIDENTIFIERLOOSE] +
  ")(?:\\.(" +
  items2[obj2.XRANGEIDENTIFIERLOOSE] +
  ")(?:" +
  items2[obj2.PRERELEASELOOSE] +
  ")?" +
  items2[obj2.BUILD] +
  "?)?)?";
const tmp94 = f115737(combined16);
_mod13852("XRANGEPLAINLOOSE", 19, combined16);
items2[19] = combined16;
const regExp38 = new RegExp(combined16, undefined);
items[19] = regExp38;
const regExp39 = new RegExp(tmp94, undefined);
items1[19] = regExp39;
const combined17 = "^" + items2[obj2.GTLT] + "\\s*" + items2[obj2.XRANGEPLAIN] + "$";
const tmp99 = f115737(combined17);
_mod13852("XRANGE", 20, combined17);
items2[20] = combined17;
const regExp40 = new RegExp(combined17, undefined);
items[20] = regExp40;
const regExp41 = new RegExp(tmp99, undefined);
items1[20] = regExp41;
const combined18 = "^" + items2[obj2.GTLT] + "\\s*" + items2[obj2.XRANGEPLAINLOOSE] + "$";
const tmp104 = f115737(combined18);
_mod13852("XRANGELOOSE", 21, combined18);
items2[21] = combined18;
const regExp42 = new RegExp(combined18, undefined);
items[21] = regExp42;
const regExp43 = new RegExp(tmp104, undefined);
items1[21] = regExp43;
const MAX_SAFE_COMPONENT_LENGTH = _mod13851.MAX_SAFE_COMPONENT_LENGTH;
const combined19 =
  "(^|[^\\d])(\\d{1," +
  MAX_SAFE_COMPONENT_LENGTH +
  "})(?:\\.(\\d{1," +
  _mod13851.MAX_SAFE_COMPONENT_LENGTH +
  "}))?(?:\\.(\\d{1," +
  _mod13851.MAX_SAFE_COMPONENT_LENGTH +
  "}))?";
const tmp109 = f115737(combined19);
_mod13852("COERCEPLAIN", 22, combined19);
items2[22] = combined19;
const regExp44 = new RegExp(combined19, undefined);
items[22] = regExp44;
const regExp45 = new RegExp(tmp109, undefined);
items1[22] = regExp45;
const combined20 = "" + items2[obj2.COERCEPLAIN] + "(?:$|[^\\d])";
const tmp114 = f115737(combined20);
_mod13852("COERCE", 23, combined20);
items2[23] = combined20;
const regExp46 = new RegExp(combined20, undefined);
items[23] = regExp46;
const regExp47 = new RegExp(tmp114, undefined);
items1[23] = regExp47;
const sum = items2[obj2.COERCEPLAIN] + "(?:" + items2[obj2.PRERELEASE] + ")?";
const sum1 = sum + "(?:" + items2[obj2.BUILD] + ")?(?:$|[^\\d])";
const tmp120 = f115737(sum1);
_mod13852("COERCEFULL", 24, sum1);
items2[24] = sum1;
const regExp48 = new RegExp(sum1, undefined);
items[24] = regExp48;
const regExp49 = new RegExp(tmp120, undefined);
items1[24] = regExp49;
const tmp125 = f115737(items2[obj2.COERCE]);
_mod13852("COERCERTL", 25, items2[obj2.COERCE]);
items2[25] = items2[obj2.COERCE];
const regExp50 = new RegExp(tmp124, "g");
items[25] = regExp50;
const regExp51 = new RegExp(tmp125, "g");
items1[25] = regExp51;
const tmp130 = f115737(items2[obj2.COERCEFULL]);
_mod13852("COERCERTLFULL", 26, items2[obj2.COERCEFULL]);
items2[26] = items2[obj2.COERCEFULL];
const regExp52 = new RegExp(tmp129, "g");
items[26] = regExp52;
const regExp53 = new RegExp(tmp130, "g");
items1[26] = regExp53;
const tmp134 = f115737("(?:~>?)");
_mod13852("LONETILDE", 27, "(?:~>?)");
items2[27] = "(?:~>?)";
const regExp54 = new RegExp("(?:~>?)", undefined);
items[27] = regExp54;
const regExp55 = new RegExp(tmp134, undefined);
items1[27] = regExp55;
const combined21 = "(\\s*)" + items2[obj2.LONETILDE] + "\\s+";
const tmp139 = f115737(combined21);
_mod13852("TILDETRIM", 28, combined21);
items2[28] = combined21;
const regExp56 = new RegExp(combined21, "g");
items[28] = regExp56;
const regExp57 = new RegExp(tmp139, "g");
items1[28] = regExp57;
const combined22 = "^" + items2[obj2.LONETILDE] + items2[obj2.XRANGEPLAIN] + "$";
const tmp144 = f115737(combined22);
_mod13852("TILDE", 29, combined22);
items2[29] = combined22;
const regExp58 = new RegExp(combined22, undefined);
items[29] = regExp58;
const regExp59 = new RegExp(tmp144, undefined);
items1[29] = regExp59;
const combined23 = "^" + items2[obj2.LONETILDE] + items2[obj2.XRANGEPLAINLOOSE] + "$";
const tmp149 = f115737(combined23);
_mod13852("TILDELOOSE", 30, combined23);
items2[30] = combined23;
const regExp60 = new RegExp(combined23, undefined);
items[30] = regExp60;
const regExp61 = new RegExp(tmp149, undefined);
items1[30] = regExp61;
const tmp153 = f115737("(?:\\^)");
_mod13852("LONECARET", 31, "(?:\\^)");
items2[31] = "(?:\\^)";
const regExp62 = new RegExp("(?:\\^)", undefined);
items[31] = regExp62;
const regExp63 = new RegExp(tmp153, undefined);
items1[31] = regExp63;
const combined24 = "(\\s*)" + items2[obj2.LONECARET] + "\\s+";
const tmp158 = f115737(combined24);
_mod13852("CARETTRIM", 32, combined24);
items2[32] = combined24;
const regExp64 = new RegExp(combined24, "g");
items[32] = regExp64;
const regExp65 = new RegExp(tmp158, "g");
items1[32] = regExp65;
const combined25 = "^" + items2[obj2.LONECARET] + items2[obj2.XRANGEPLAIN] + "$";
const tmp163 = f115737(combined25);
_mod13852("CARET", 33, combined25);
items2[33] = combined25;
const regExp66 = new RegExp(combined25, undefined);
items[33] = regExp66;
const regExp67 = new RegExp(tmp163, undefined);
items1[33] = regExp67;
const combined26 = "^" + items2[obj2.LONECARET] + items2[obj2.XRANGEPLAINLOOSE] + "$";
const tmp168 = f115737(combined26);
_mod13852("CARETLOOSE", 34, combined26);
items2[34] = combined26;
const regExp68 = new RegExp(combined26, undefined);
items[34] = regExp68;
const regExp69 = new RegExp(tmp168, undefined);
items1[34] = regExp69;
const combined27 = "^" + items2[obj2.GTLT] + "\\s*(" + items2[obj2.LOOSEPLAIN] + ")$|^$";
const tmp173 = f115737(combined27);
_mod13852("COMPARATORLOOSE", 35, combined27);
items2[35] = combined27;
const regExp70 = new RegExp(combined27, undefined);
items[35] = regExp70;
const regExp71 = new RegExp(tmp173, undefined);
items1[35] = regExp71;
const combined28 = "^" + items2[obj2.GTLT] + "\\s*(" + items2[obj2.FULLPLAIN] + ")$|^$";
const tmp178 = f115737(combined28);
_mod13852("COMPARATOR", 36, combined28);
items2[36] = combined28;
const regExp72 = new RegExp(combined28, undefined);
items[36] = regExp72;
const regExp73 = new RegExp(tmp178, undefined);
items1[36] = regExp73;
const combined29 =
  "(\\s*)" + items2[obj2.GTLT] + "\\s*(" + items2[obj2.LOOSEPLAIN] + "|" + items2[obj2.XRANGEPLAIN] + ")";
const tmp183 = f115737(combined29);
_mod13852("COMPARATORTRIM", 37, combined29);
items2[37] = combined29;
const regExp74 = new RegExp(combined29, "g");
items[37] = regExp74;
const regExp75 = new RegExp(tmp183, "g");
items1[37] = regExp75;
const combined30 = "^\\s*(" + items2[obj2.XRANGEPLAIN] + ")\\s+-\\s+(" + items2[obj2.XRANGEPLAIN] + ")\\s*$";
const tmp188 = f115737(combined30);
_mod13852("HYPHENRANGE", 38, combined30);
items2[38] = combined30;
const regExp76 = new RegExp(combined30, undefined);
items[38] = regExp76;
const regExp77 = new RegExp(tmp188, undefined);
items1[38] = regExp77;
const combined31 = "^\\s*(" + items2[obj2.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + items2[obj2.XRANGEPLAINLOOSE] + ")\\s*$";
const tmp193 = f115737(combined31);
_mod13852("HYPHENRANGELOOSE", 39, combined31);
items2[39] = combined31;
const regExp78 = new RegExp(combined31, undefined);
items[39] = regExp78;
const regExp79 = new RegExp(tmp193, undefined);
items1[39] = regExp79;
const tmp197 = f115737("(<|>)?=?\\s*\\*");
_mod13852("STAR", 40, "(<|>)?=?\\s*\\*");
items2[40] = "(<|>)?=?\\s*\\*";
const regExp80 = new RegExp("(<|>)?=?\\s*\\*", undefined);
items[40] = regExp80;
const regExp81 = new RegExp(tmp197, undefined);
items1[40] = regExp81;
const tmp201 = f115737("^\\s*>=\\s*0\\.0\\.0\\s*$");
_mod13852("GTE0", 41, "^\\s*>=\\s*0\\.0\\.0\\s*$");
items2[41] = "^\\s*>=\\s*0\\.0\\.0\\s*$";
const regExp82 = new RegExp("^\\s*>=\\s*0\\.0\\.0\\s*$", undefined);
items[41] = regExp82;
const regExp83 = new RegExp(tmp201, undefined);
items1[41] = regExp83;
const tmp205 = f115737("^\\s*>=\\s*0\\.0\\.0-0\\s*$");
_mod13852("GTE0PRE", 42, "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
items2[42] = "^\\s*>=\\s*0\\.0\\.0-0\\s*$";
const regExp84 = new RegExp("^\\s*>=\\s*0\\.0\\.0-0\\s*$", undefined);
items[42] = regExp84;
const regExp85 = new RegExp(tmp205, undefined);
items1[42] = regExp85;

export default obj;
