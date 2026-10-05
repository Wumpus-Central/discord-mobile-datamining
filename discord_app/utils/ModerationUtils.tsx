// discord_app/utils/ModerationUtils.tsx
import shims from "../../discord_common/js/packages/tokens/shims.native.tsx";
import intl11 from "../intl/index.native.tsx";
import preloaded_user_settings from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import DMSafetyConstants from "../modules/user_settings/privacy_and_safety/DMSafetyConstants.tsx";
import HighlightedSettingsTypes from "../modules/guild_settings/safety/HighlightedSettingsTypes.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
function mapColorToHighlightColor(color) {
  const obj = shims;
  if (obj.unsafe_getRawColor("PRIMARY_400") === color) {
    return HighlightedSettingsTypes.HighlightColors.ACCENT;
  } else {
    const tmpResult = shims;
    if (tmpResult.unsafe_getRawColor("GREEN_360") === color) {
      return HighlightedSettingsTypes.HighlightColors.GREEN;
    } else {
      const tmpResult4 = shims;
      if (tmpResult4.unsafe_getRawColor("YELLOW_360") === color) {
        return HighlightedSettingsTypes.HighlightColors.YELLOW;
      } else {
        const tmpResult5 = shims;
        if (tmpResult5.unsafe_getRawColor("ORANGE_345") === color) {
          return HighlightedSettingsTypes.HighlightColors.ORANGE;
        } else {
          const tmpResult6 = shims;
          if (tmpResult6.unsafe_getRawColor("RED_400") === color) {
            return HighlightedSettingsTypes.HighlightColors.RED;
          } else {
            return HighlightedSettingsTypes.HighlightColors.NONE;
          }
        }
      }
    }
  }
}
({ VerificationLevels: c2, VerificationCriteria: c3, GuildExplicitContentFilterTypes: closure_4 } = Constants);
const constants4 = DMSafetyConstants.ExplicitContentFilterTypes;
const result = size.fileFinishedImporting("utils/ModerationUtils.tsx");

export { mapColorToHighlightColor };
export const mapOptionToHighlightedRowOptions = function mapOptionToHighlightedRowOptions(arr) {
  return arr.map((name) => {
    const obj = {
      title: name.name,
      description: name.desc,
      highlightColor: mapColorToHighlightColor(name.color),
      value: name.value,
      disabled: name.disabled,
    };
    return obj;
  });
};
export const generateVerificationLevelOptions = function generateVerificationLevelOptions() {
  let intl;
  let intl10;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj4;
  let obj6;
  let stringResult;
  let unsafe_getRawColorResult;
  let unsafe_getRawColorResult1;
  let unsafe_getRawColorResult2;
  let unsafe_getRawColorResult3;
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { name: intl.string(intl11.t.PEzffq), desc: stringResult, value: constants.NONE, disabled: flag };
  intl = intl11.intl;
  const intl2 = intl11.intl;
  const string = intl2.string;
  const t = intl11.t;
  if (flag) {
    stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.nDQy0p);
  }
  const items = [obj, , , ,];
  const obj2 = {
    name: intl3.string(intl11.t.SsCK8I),
    desc: intl4.string(intl11.t["8GCOX6"]),
    value: constants.LOW,
    color: unsafe_getRawColorResult,
  };
  intl3 = intl11.intl;
  intl4 = intl11.intl;
  unsafe_getRawColorResult = undefined;
  if (!flag2) {
    const tmpResult = shims;
    unsafe_getRawColorResult = tmpResult.unsafe_getRawColor("GREEN_360");
  }
  items[1] = obj2;
  const obj3 = {
    name: intl5.string(intl11.t.WwNoR4),
    desc: intl6.formatToPlainString(intl11.t.VS14ga, obj4),
    value: constants.MEDIUM,
    color: unsafe_getRawColorResult1,
  };
  intl5 = intl11.intl;
  intl6 = intl11.intl;
  unsafe_getRawColorResult1 = undefined;
  obj4 = { min: constants2.ACCOUNT_AGE };
  if (!flag2) {
    const tmpResult4 = shims;
    unsafe_getRawColorResult1 = tmpResult4.unsafe_getRawColor("YELLOW_360");
  }
  items[2] = obj3;
  const obj5 = {
    name: intl7.string(intl11.t.I2jMUF),
    desc: intl8.formatToPlainString(intl11.t["r+b3I4"], obj6),
    value: constants.HIGH,
    color: unsafe_getRawColorResult2,
  };
  intl7 = intl11.intl;
  intl8 = intl11.intl;
  unsafe_getRawColorResult2 = undefined;
  obj6 = { min: constants2.MEMBER_AGE };
  if (!flag2) {
    const tmpResult5 = shims;
    unsafe_getRawColorResult2 = tmpResult5.unsafe_getRawColor("ORANGE_345");
  }
  items[3] = obj5;
  const obj7 = {
    name: intl9.string(intl11.t.cJY8w9),
    desc: intl10.string(intl11.t.PWaKme),
    value: constants.VERY_HIGH,
    color: unsafe_getRawColorResult3,
  };
  intl9 = intl11.intl;
  intl10 = intl11.intl;
  unsafe_getRawColorResult3 = undefined;
  if (!flag2) {
    const tmpResult6 = shims;
    unsafe_getRawColorResult3 = tmpResult6.unsafe_getRawColor("RED_400");
  }
  items[4] = obj7;
  return items;
};
export const generateContentFilterHighlightedOptions = function generateContentFilterHighlightedOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let obj2;
  let string2Result;
  let stringResult;
  let tmpResult;
  let tmpResult2;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = {
    name: intl.string(intl11.t.iHuPE6),
    desc: intl2.string(intl11.t["Z+yUWF"]),
    value: constants3.ALL_MEMBERS,
    color: obj2.unsafe_getRawColor("RED_400"),
  };
  intl = intl11.intl;
  intl2 = intl11.intl;
  const items = [obj, ,];
  obj2 = shims;
  const obj3 = {
    name: intl3.string(intl11.t.ynfFaI),
    desc: stringResult,
    value: constants3.MEMBERS_WITHOUT_ROLES,
    disabled: flag,
    color: tmpResult.unsafe_getRawColor("YELLOW_360"),
  };
  intl3 = intl11.intl;
  const intl4 = intl11.intl;
  const string = intl4.string;
  const t = intl11.t;
  if (flag) {
    stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  items[1] = obj3;
  tmpResult = shims;
  const obj4 = {
    name: intl5.string(intl11.t.VbSyAx),
    desc: string2Result,
    value: constants3.DISABLED,
    disabled: flag,
    color: tmpResult2.unsafe_getRawColor("PRIMARY_400"),
  };
  intl5 = intl11.intl;
  const intl6 = intl11.intl;
  const string2 = intl6.string;
  const t2 = intl11.t;
  if (flag) {
    string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  items[2] = obj4;
  tmpResult2 = shims;
  return items;
};
export const generateContentFilterOptions = function generateContentFilterOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let string2Result;
  let stringResult;
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  const obj = {
    name: intl.string(intl11.t.iHuPE6),
    desc: intl2.string(intl11.t["Z+yUWF"]),
    value: constants3.ALL_MEMBERS,
  };
  intl = intl11.intl;
  intl2 = intl11.intl;
  const items = [obj, ,];
  const obj2 = {
    name: intl3.string(intl11.t.ynfFaI),
    desc: stringResult,
    value: constants3.MEMBERS_WITHOUT_ROLES,
    disabled: flag,
  };
  intl3 = intl11.intl;
  const intl4 = intl11.intl;
  const string = intl4.string;
  const t = intl11.t;
  if (flag) {
    stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  items[1] = obj2;
  const obj3 = { name: intl5.string(intl11.t.VbSyAx), desc: string2Result, value: constants3.DISABLED, disabled: flag };
  intl5 = intl11.intl;
  const intl6 = intl11.intl;
  const string2 = intl6.string;
  const t2 = intl11.t;
  if (flag) {
    string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  items[2] = obj3;
  return items;
};
export const generateDmSpamOptions = function generateDmSpamOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = {
    name: intl.string(intl11.t["4IaoCI"]),
    desc: intl2.string(intl11.t.TgipjE),
    value: preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
  };
  intl = intl11.intl;
  intl2 = intl11.intl;
  const items = [obj, ,];
  const obj2 = {
    name: intl3.string(intl11.t["6NnX6F"]),
    desc: intl4.string(intl11.t["+dw1qu"]),
    value: preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS,
  };
  intl3 = intl11.intl;
  intl4 = intl11.intl;
  items[1] = obj2;
  const obj3 = {
    name: intl5.string(intl11.t["1tiAFz"]),
    desc: intl6.string(intl11.t.LKTyeA),
    value: preloaded_user_settings.DmSpamFilterV2.DISABLED,
  };
  intl5 = intl11.intl;
  intl6 = intl11.intl;
  items[2] = obj3;
  return items;
};
export const generateExplicitImageOptions = function generateExplicitImageOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj2;
  let obj4;
  let obj6;
  const obj = {
    name: intl.string(intl11.t.PhNlhz),
    desc: intl2.string(intl11.t["Fw+Lvp"]),
    value: constants4.FRIENDS_AND_NON_FRIENDS,
    color: obj2.unsafe_getRawColor("GREEN_360"),
  };
  intl = intl11.intl;
  intl2 = intl11.intl;
  const items = [obj, ,];
  obj2 = shims;
  const obj3 = {
    name: intl3.string(intl11.t["8ioJ4S"]),
    desc: intl4.string(intl11.t.z4l4Cr),
    value: constants4.NON_FRIENDS,
    color: obj4.unsafe_getRawColor("YELLOW_360"),
  };
  intl3 = intl11.intl;
  intl4 = intl11.intl;
  items[1] = obj3;
  obj4 = shims;
  const obj5 = {
    name: intl5.string(intl11.t.FLfuhL),
    desc: intl6.string(intl11.t.MoZlaD),
    value: constants4.DISABLED,
    color: obj6.unsafe_getRawColor("RED_400"),
  };
  intl5 = intl11.intl;
  intl6 = intl11.intl;
  items[2] = obj5;
  obj6 = shims;
  return items;
};
