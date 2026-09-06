// === Module 14837: ModerationUtils ===

// Module 14837 (ModerationUtils)
import shims from "shims" /* 575 */;
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import DMSafetyConstants from "DMSafetyConstants" /* 1937 */;
import HighlightedSettingsTypes from "HighlightedSettingsTypes" /* 14838 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function mapColorToHighlightColor(color) {
  if (obj.unsafe_getRawColor("PRIMARY_400") === color) {
    return HighlightedSettingsTypes.HighlightColors.ACCENT;
  } else {
    let tmpResult = shims;
    if (tmpResult.unsafe_getRawColor("GREEN_360") === color) {
      return HighlightedSettingsTypes.HighlightColors.GREEN;
    } else {
      tmpResult = shims;
      if (tmpResult.unsafe_getRawColor("YELLOW_360") === color) {
        return HighlightedSettingsTypes.HighlightColors.YELLOW;
      } else {
        if (tmpResult1.unsafe_getRawColor("ORANGE_345") === color) {
          return HighlightedSettingsTypes.HighlightColors.ORANGE;
        } else {
          if (tmpResult2.unsafe_getRawColor("RED_400") === color) {
            return HighlightedSettingsTypes.HighlightColors.RED;
          } else {
            return HighlightedSettingsTypes.HighlightColors.NONE;
          }
          tmpResult2 = shims;
        }
        tmpResult1 = shims;
      }
    }
  }
  obj = shims;
}
({ VerificationLevels: c2, VerificationCriteria: c3, GuildExplicitContentFilterTypes: closure_4 } = Constants);
const constants4 = DMSafetyConstants.ExplicitContentFilterTypes;
const result = size.fileFinishedImporting("utils/ModerationUtils.tsx");

export { mapColorToHighlightColor };
export const mapOptionToHighlightedRowOptions = function mapOptionToHighlightedRowOptions(arr) {
  return arr.map((name) => ({ title: name.name, description: name.desc, highlightColor: mapColorToHighlightColor(name.color), value: name.value, disabled: name.disabled }));
};
export const generateVerificationLevelOptions = function generateVerificationLevelOptions() {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  let obj = { name: null, desc: null, value: null, disabled: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PEzffq);
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.nDQy0p);
  }
  obj.desc = stringResult;
  obj.value = constants.NONE;
  obj.disabled = flag;
  const items = [obj, , , , ];
  obj = { name: null, desc: null, value: null, color: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t.SsCK8I);
  const intl4 = util.intl;
  obj.desc = intl4.string(util.t["8GCOX6"]);
  obj.value = constants.LOW;
  let unsafe_getRawColorResult;
  if (!flag2) {
    let tmpResult = shims;
    unsafe_getRawColorResult = tmpResult.unsafe_getRawColor("GREEN_360");
  }
  obj.color = unsafe_getRawColorResult;
  items[1] = obj;
  obj = { name: null, desc: null, value: null, color: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t.WwNoR4);
  const intl6 = util.intl;
  obj.desc = intl6.formatToPlainString(util.t.VS14ga, { min: constants2.ACCOUNT_AGE });
  obj.value = constants.MEDIUM;
  let unsafe_getRawColorResult1;
  if (!flag2) {
    tmpResult = shims;
    unsafe_getRawColorResult1 = tmpResult.unsafe_getRawColor("YELLOW_360");
  }
  obj.color = unsafe_getRawColorResult1;
  items[2] = obj;
  const obj2 = { name: null, desc: null, value: null, color: null };
  const intl7 = util.intl;
  obj2.name = intl7.string(util.t.I2jMUF);
  const intl8 = util.intl;
  obj2.desc = intl8.formatToPlainString(util.t["r+b3I4"], { min: constants2.MEMBER_AGE });
  obj2.value = constants.HIGH;
  let unsafe_getRawColorResult2;
  if (!flag2) {
    unsafe_getRawColorResult2 = shims.unsafe_getRawColor("ORANGE_345");
    const tmpResult1 = shims;
  }
  obj2.color = unsafe_getRawColorResult2;
  items[3] = obj2;
  const obj4 = { name: null, desc: null, value: null, color: null };
  const intl9 = util.intl;
  obj4.name = intl9.string(util.t.cJY8w9);
  const intl10 = util.intl;
  obj4.desc = intl10.string(util.t.PWaKme);
  obj4.value = constants.VERY_HIGH;
  let unsafe_getRawColorResult3;
  if (!flag2) {
    unsafe_getRawColorResult3 = shims.unsafe_getRawColor("RED_400");
    const tmpResult2 = shims;
  }
  obj4.color = unsafe_getRawColorResult3;
  items[4] = obj4;
  return items;
};
export const generateContentFilterHighlightedOptions = function generateContentFilterHighlightedOptions() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { name: null, desc: null, value: null, color: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.iHuPE6);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Z+yUWF"]);
  obj.value = constants3.ALL_MEMBERS;
  obj.color = shims.unsafe_getRawColor("RED_400");
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t.ynfFaI);
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj.desc = stringResult;
  obj.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj.disabled = flag;
  let tmpResult = shims;
  obj.color = tmpResult.unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t.VbSyAx);
  const intl6 = util.intl;
  const string2 = intl6.string;
  const t2 = util.t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj.desc = string2Result;
  obj.value = constants3.DISABLED;
  obj.disabled = flag;
  tmpResult = shims;
  obj.color = tmpResult.unsafe_getRawColor("PRIMARY_400");
  items[2] = obj;
  return items;
};
export const generateContentFilterOptions = function generateContentFilterOptions() {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let obj = { name: null, desc: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.iHuPE6);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Z+yUWF"]);
  obj.value = constants3.ALL_MEMBERS;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, disabled: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t.ynfFaI);
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj.desc = stringResult;
  obj.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj.disabled = flag;
  items[1] = obj;
  obj = { name: null, desc: null, value: null, disabled: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t.VbSyAx);
  const intl6 = util.intl;
  const string2 = intl6.string;
  const t2 = util.t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj.desc = string2Result;
  obj.value = constants3.DISABLED;
  obj.disabled = flag;
  items[2] = obj;
  return items;
};
export const generateDmSpamOptions = function generateDmSpamOptions() {
  let obj = { name: null, desc: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["4IaoCI"]);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t.TgipjE);
  obj.value = preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t["6NnX6F"]);
  const intl4 = util.intl;
  obj.desc = intl4.string(util.t["+dw1qu"]);
  obj.value = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
  items[1] = obj;
  obj = { name: null, desc: null, value: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t["1tiAFz"]);
  const intl6 = util.intl;
  obj.desc = intl6.string(util.t.LKTyeA);
  obj.value = preloaded_user_settings.DmSpamFilterV2.DISABLED;
  items[2] = obj;
  return items;
};
export const generateExplicitImageOptions = function generateExplicitImageOptions() {
  let obj = { name: null, desc: null, value: null, color: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PhNlhz);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Fw+Lvp"]);
  obj.value = constants4.FRIENDS_AND_NON_FRIENDS;
  obj.color = shims.unsafe_getRawColor("GREEN_360");
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null, color: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t["8ioJ4S"]);
  const intl4 = util.intl;
  obj.desc = intl4.string(util.t.z4l4Cr);
  obj.value = constants4.NON_FRIENDS;
  obj.color = shims.unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = { name: null, desc: null, value: null, color: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t.FLfuhL);
  const intl6 = util.intl;
  obj.desc = intl6.string(util.t.MoZlaD);
  obj.value = constants4.DISABLED;
  obj.color = shims.unsafe_getRawColor("RED_400");
  items[2] = obj;
  return items;
};