// === Module 14376: mapColorToHighlightColor ===

// Module 14376 (mapColorToHighlightColor)
import set from "set" /* 2 */;
import unsafe_getRawColor from "unsafe_getRawColor" /* 711 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import items2 from "items" /* 4137 */;
import ME from "ME" /* 676 */;

function mapColorToHighlightColor(arg0) {
  if (obj.unsafe_getRawColor("PRIMARY_400") === arg0) {
    return tmp(14377).HighlightColors.ACCENT;
  } else {
    let tmpResult = tmp(711);
    if (tmpResult.unsafe_getRawColor("GREEN_360") === arg0) {
      return tmp(14377).HighlightColors.GREEN;
    } else {
      tmpResult = tmp(711);
      if (tmpResult.unsafe_getRawColor("YELLOW_360") === arg0) {
        return tmp(14377).HighlightColors.YELLOW;
      } else {
        if (tmpResult1.unsafe_getRawColor("ORANGE_345") === arg0) {
          return tmp(14377).HighlightColors.ORANGE;
        } else {
          if (tmpResult2.unsafe_getRawColor("RED_400") === arg0) {
            return tmp(14377).HighlightColors.RED;
          } else {
            return tmp(14377).HighlightColors.NONE;
          }
          tmpResult2 = tmp(711);
        }
        tmpResult1 = tmp(711);
      }
    }
  }
  obj = unsafe_getRawColor;
}
({ VerificationLevels: obj1, VerificationCriteria: c3, GuildExplicitContentFilterTypes: c4 } = ME);
let closure_5 = items2.ExplicitContentFilterTypes;
const result = set.fileFinishedImporting("utils/ModerationUtils.tsx");

export { mapColorToHighlightColor };
export const mapOptionToHighlightedRowOptions = function mapOptionToHighlightedRowOptions(arr) {
  return arr.map((name) => ({ title: name.name, description: name.desc, highlightColor: callback(name.color), value: name.value, disabled: name.disabled }));
};
export const generateVerificationLevelOptions = function generateVerificationLevelOptions(features) {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  let obj = { name: null, desc: null, value: null, disabled: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.PEzffq);
  const intl2 = getSystemLocale.intl;
  const string = intl2.string;
  const t = getSystemLocale.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.nDQy0p);
  }
  obj[1] = stringResult;
  obj[2] = constants.NONE;
  obj[3] = flag;
  const items = [obj, , , , ];
  obj = { name: null, desc: null, value: null, color: null };
  const intl3 = tmp(1236).intl;
  obj[0] = intl3.string(getSystemLocale.t.SsCK8I);
  const intl4 = tmp(1236).intl;
  obj[1] = intl4.string(getSystemLocale.t["8GCOX6"]);
  obj[2] = constants.LOW;
  let unsafe_getRawColorResult;
  if (!flag2) {
    let tmpResult = tmp(711);
    unsafe_getRawColorResult = tmpResult.unsafe_getRawColor("GREEN_360");
  }
  obj[3] = unsafe_getRawColorResult;
  items[1] = obj;
  obj = { name: null, desc: null, value: null, color: null };
  const intl5 = tmp(1236).intl;
  obj[0] = intl5.string(getSystemLocale.t.WwNoR4);
  const intl6 = tmp(1236).intl;
  obj[1] = intl6.formatToPlainString(getSystemLocale.t.VS14ga, { min: constants2.ACCOUNT_AGE });
  obj[2] = constants.MEDIUM;
  let unsafe_getRawColorResult1;
  if (!flag2) {
    tmpResult = tmp(711);
    unsafe_getRawColorResult1 = tmpResult.unsafe_getRawColor("YELLOW_360");
  }
  obj[3] = unsafe_getRawColorResult1;
  items[2] = obj;
  const obj2 = { name: null, desc: null, value: null, color: null };
  const intl7 = tmp(1236).intl;
  obj2[0] = intl7.string(getSystemLocale.t.I2jMUF);
  const intl8 = tmp(1236).intl;
  obj2[1] = intl8.formatToPlainString(getSystemLocale.t["r+b3I4"], { min: constants2.MEMBER_AGE });
  obj2[2] = constants.HIGH;
  let unsafe_getRawColorResult2;
  if (!flag2) {
    unsafe_getRawColorResult2 = tmp(711).unsafe_getRawColor("ORANGE_345");
    const tmpResult1 = tmp(711);
  }
  obj2[3] = unsafe_getRawColorResult2;
  items[3] = obj2;
  const obj4 = { name: null, desc: null, value: null, color: null };
  const intl9 = tmp(1236).intl;
  obj4[0] = intl9.string(getSystemLocale.t.cJY8w9);
  const intl10 = tmp(1236).intl;
  obj4[1] = intl10.string(getSystemLocale.t.PWaKme);
  obj4[2] = constants.VERY_HIGH;
  let unsafe_getRawColorResult3;
  if (!flag2) {
    unsafe_getRawColorResult3 = tmp(711).unsafe_getRawColor("RED_400");
    const tmpResult2 = tmp(711);
  }
  obj4[3] = unsafe_getRawColorResult3;
  items[4] = obj4;
  return items;
};
export const generateContentFilterHighlightedOptions = function generateContentFilterHighlightedOptions() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { name: null, desc: null, value: null, color: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.iHuPE6);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Z+yUWF"]);
  obj[2] = constants3.ALL_MEMBERS;
  obj[3] = unsafe_getRawColor.unsafe_getRawColor("RED_400");
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.ynfFaI);
  const intl4 = getSystemLocale.intl;
  const string = intl4.string;
  const t = getSystemLocale.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj[1] = stringResult;
  obj[2] = constants3.MEMBERS_WITHOUT_ROLES;
  obj[3] = flag;
  let tmpResult = tmp(711);
  obj[4] = tmpResult.unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl5 = tmp(1236).intl;
  obj[0] = intl5.string(getSystemLocale.t.VbSyAx);
  const intl6 = tmp(1236).intl;
  const string2 = intl6.string;
  const t2 = tmp(1236).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj[1] = string2Result;
  obj[2] = constants3.DISABLED;
  obj[3] = flag;
  tmpResult = tmp(711);
  obj[4] = tmpResult.unsafe_getRawColor("PRIMARY_400");
  items[2] = obj;
  return items;
};
export const generateContentFilterOptions = function generateContentFilterOptions(features) {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let obj = { name: null, desc: null, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.iHuPE6);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Z+yUWF"]);
  obj[2] = constants3.ALL_MEMBERS;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, disabled: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.ynfFaI);
  const intl4 = getSystemLocale.intl;
  const string = intl4.string;
  const t = getSystemLocale.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj[1] = stringResult;
  obj[2] = constants3.MEMBERS_WITHOUT_ROLES;
  obj[3] = flag;
  items[1] = obj;
  obj = { name: null, desc: null, value: null, disabled: null };
  const intl5 = tmp(1236).intl;
  obj[0] = intl5.string(getSystemLocale.t.VbSyAx);
  const intl6 = tmp(1236).intl;
  const string2 = intl6.string;
  const t2 = tmp(1236).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj[1] = string2Result;
  obj[2] = constants3.DISABLED;
  obj[3] = flag;
  items[2] = obj;
  return items;
};
export const generateDmSpamOptions = function generateDmSpamOptions() {
  let obj = { name: null, desc: null, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["4IaoCI"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.TgipjE);
  obj[2] = create.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["6NnX6F"]);
  const intl4 = getSystemLocale.intl;
  obj[1] = intl4.string(getSystemLocale.t["+dw1qu"]);
  obj[2] = create.DmSpamFilterV2.NON_FRIENDS;
  items[1] = obj;
  obj = { name: null, desc: null, value: null };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t["1tiAFz"]);
  const intl6 = getSystemLocale.intl;
  obj[1] = intl6.string(getSystemLocale.t.LKTyeA);
  obj[2] = create.DmSpamFilterV2.DISABLED;
  items[2] = obj;
  return items;
};
export const generateExplicitImageOptions = function generateExplicitImageOptions() {
  let obj = { name: null, desc: null, value: null, color: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.PhNlhz);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Fw+Lvp"]);
  obj[2] = constants4.FRIENDS_AND_NON_FRIENDS;
  obj[3] = unsafe_getRawColor.unsafe_getRawColor("GREEN_360");
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, color: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["8ioJ4S"]);
  const intl4 = getSystemLocale.intl;
  obj[1] = intl4.string(getSystemLocale.t.z4l4Cr);
  obj[2] = constants4.NON_FRIENDS;
  const obj2 = unsafe_getRawColor;
  obj[3] = unsafe_getRawColor.unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = { name: null, desc: null, value: null, color: null };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t.FLfuhL);
  const intl6 = getSystemLocale.intl;
  obj[1] = intl6.string(getSystemLocale.t.MoZlaD);
  obj[2] = constants4.DISABLED;
  const obj4 = unsafe_getRawColor;
  obj[3] = unsafe_getRawColor.unsafe_getRawColor("RED_400");
  items[2] = obj;
  return items;
};