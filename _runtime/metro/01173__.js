// === Module 1173: ? ===

// Module 1173
const re0 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

export const parseDateTimeSkeleton = function parseDateTimeSkeleton(nodes) {
  const obj = {};
  const replaced = nodes.replace(re0, function(arg0) {
    let diff;
    let items;
    let rangeError;
    let rangeError1;
    let rangeError2;
    let rangeError3;
    let rangeError6;
    let rangeError7;
    let rangeError8;
    let rangeError9;
    switch (arg0[0]) {
      case "G":
      {
        let str19 = "long";
        if (4 !== arg0.length) {
          let str20 = "short";
          if (5 === arg0.length) {
            str20 = "narrow";
          }
          str19 = str20;
        }
        obj.era = str19;
        return "";
      }
      case "y":
      {
        let str18 = "numeric";
        if (2 === arg0.length) {
          str18 = "2-digit";
        }
        obj.year = str18;
        break;
      }
      case "Y":
      {
        let _RangeError10 = RangeError;
        let self19 = this;
        let self20 = this;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      }
      case "u":
      {
        let _RangeError10 = RangeError;
        let self19 = this;
        let self20 = this;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      }
      case "U":
      {
        let _RangeError10 = RangeError;
        let self19 = this;
        let self20 = this;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      }
      case "r":
      {
        let _RangeError10 = RangeError;
        let self19 = this;
        let self20 = this;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      }
      case "q":
      {
        let _RangeError9 = RangeError;
        let self17 = this;
        let self18 = this;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      }
      case "Q":
      {
        let _RangeError9 = RangeError;
        let self17 = this;
        let self18 = this;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      }
      case "M":
      {
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
        break;
      }
      case "L":
      {
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
        break;
      }
      case "w":
      {
        let _RangeError8 = RangeError;
        let self15 = this;
        let self16 = this;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      }
      case "W":
      {
        let _RangeError8 = RangeError;
        let self15 = this;
        let self16 = this;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      }
      case "d":
      {
        obj.day = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "D":
      {
        let _RangeError7 = RangeError;
        let self13 = this;
        let self14 = this;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      }
      case "F":
      {
        let _RangeError7 = RangeError;
        let self13 = this;
        let self14 = this;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      }
      case "g":
      {
        let _RangeError7 = RangeError;
        let self13 = this;
        let self14 = this;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      }
      case "E":
      {
        let str12 = "long";
        if (4 !== arg0.length) {
          let str13 = "short";
          if (5 === arg0.length) {
            str13 = "narrow";
          }
          str12 = str13;
        }
        obj.weekday = str12;
        break;
      }
      case "e":
      {
        if (arg0.length < 4) {
          const _RangeError6 = RangeError;
          const self11 = this;
          const self12 = this;
          const rangeError4 = new RangeError("`e..eee` (weekday) patterns are not supported");
          throw rangeError4;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][arg0.length - 4];
        }
        break;
      }
      case "c":
      {
        if (arg0.length < 4) {
          const _RangeError5 = RangeError;
          const self9 = this;
          const self10 = this;
          const rangeError5 = new RangeError("`c..ccc` (weekday) patterns are not supported");
          throw rangeError5;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][arg0.length - 4];
        }
        break;
      }
      case "a":
      {
        obj.hour12 = true;
        break;
      }
      case "b":
      {
        let _RangeError4 = RangeError;
        let self7 = this;
        let self8 = this;
        rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      }
      case "B":
      {
        let _RangeError4 = RangeError;
        let self7 = this;
        let self8 = this;
        rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      }
      case "h":
      {
        obj.hourCycle = "h12";
        obj.hour = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "H":
      {
        obj.hourCycle = "h23";
        obj.hour = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "K":
      {
        obj.hourCycle = "h11";
        obj.hour = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "k":
      {
        obj.hourCycle = "h24";
        obj.hour = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "j":
      {
        let _RangeError3 = RangeError;
        let self5 = this;
        let self6 = this;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      }
      case "J":
      {
        let _RangeError3 = RangeError;
        let self5 = this;
        let self6 = this;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      }
      case "C":
      {
        let _RangeError3 = RangeError;
        let self5 = this;
        let self6 = this;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      }
      case "m":
      {
        obj.minute = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "s":
      {
        obj.second = ["numeric", "2-digit"][arg0.length - 1];
        break;
      }
      case "S":
      {
        let _RangeError2 = RangeError;
        let self3 = this;
        let self4 = this;
        rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      }
      case "A":
      {
        let _RangeError2 = RangeError;
        let self3 = this;
        let self4 = this;
        rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      }
      case "z":
      {
        let str2 = "long";
        if (arg0.length < 4) {
          str2 = "short";
        }
        obj.timeZoneName = str2;
        break;
      }
      case "Z":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
      case "O":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
      case "v":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
      case "V":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
      case "X":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
      case "x":
      {
        let _RangeError = RangeError;
        let self = this;
        let self2 = this;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      }
    }
  });
  return obj;
};