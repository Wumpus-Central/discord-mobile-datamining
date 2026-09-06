// _runtime/metro/01163__.js
const re0 =
  /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

export const parseDateTimeSkeleton = function parseDateTimeSkeleton(str) {
  const obj = {};
  const replaced = str.replace(re0, (arg0) => {
    switch (arg0[0]) {
      case "G":
        let str19 = "long";
        if (4 !== length) {
          let str20 = "short";
          if (5 === length) {
            str20 = "narrow";
          }
          str19 = str20;
        }
        obj.era = str19;
        return "";
      case "y":
        let str18 = "numeric";
        if (2 === length) {
          str18 = "2-digit";
        }
        obj.year = str18;
        break;
      case "Y":
        let _RangeError10 = RangeError;
        let rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "u":
        _RangeError10 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "U":
        _RangeError10 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "r":
        _RangeError10 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "q":
        let _RangeError9 = RangeError;
        let rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "Q":
        _RangeError9 = RangeError;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "M":
        let diff = length - 1;
        let items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
        break;
      case "L":
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
        break;
      case "w":
        let _RangeError8 = RangeError;
        let rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "W":
        _RangeError8 = RangeError;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "d":
        obj.day = ["numeric", "2-digit"][length - 1];
        break;
      case "D":
        let _RangeError7 = RangeError;
        let rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "F":
        _RangeError7 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "g":
        _RangeError7 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "E":
        let str12 = "long";
        if (4 !== length) {
          let str13 = "short";
          if (5 === length) {
            str13 = "narrow";
          }
          str12 = str13;
        }
        obj.weekday = str12;
        break;
      case "e":
        if (length < 4) {
          const _RangeError6 = RangeError;
          const rangeError4 = new RangeError("`e..eee` (weekday) patterns are not supported");
          throw rangeError4;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
        break;
      case "c":
        if (length < 4) {
          const _RangeError5 = RangeError;
          const rangeError5 = new RangeError("`c..ccc` (weekday) patterns are not supported");
          throw rangeError5;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
        break;
      case "a":
        obj.hour12 = true;
        break;
      case "b":
        let _RangeError4 = RangeError;
        let rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      case "B":
        _RangeError4 = RangeError;
        rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      case "h":
        obj.hourCycle = "h12";
        obj.hour = ["numeric", "2-digit"][length - 1];
        break;
      case "H":
        obj.hourCycle = "h23";
        obj.hour = ["numeric", "2-digit"][length - 1];
        break;
      case "K":
        obj.hourCycle = "h11";
        obj.hour = ["numeric", "2-digit"][length - 1];
        break;
      case "k":
        obj.hourCycle = "h24";
        obj.hour = ["numeric", "2-digit"][length - 1];
        break;
      case "j":
        let _RangeError3 = RangeError;
        let rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "J":
        _RangeError3 = RangeError;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "C":
        _RangeError3 = RangeError;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "m":
        obj.minute = ["numeric", "2-digit"][length - 1];
        break;
      case "s":
        obj.second = ["numeric", "2-digit"][length - 1];
        break;
      case "S":
        let _RangeError2 = RangeError;
        let rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      case "A":
        _RangeError2 = RangeError;
        rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      case "z":
        let str2 = "long";
        if (length < 4) {
          str2 = "short";
        }
        obj.timeZoneName = str2;
        break;
      case "Z":
        let _RangeError = RangeError;
        let rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      case "O":
        _RangeError = RangeError;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      case "v":
        _RangeError = RangeError;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      case "V":
        _RangeError = RangeError;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      case "X":
        _RangeError = RangeError;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
      case "x":
        _RangeError = RangeError;
        rangeError9 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw rangeError9;
    }
  });
  return obj;
};
