// discord_app/modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import DismissibleContentTypes from "DismissibleContentTypes.tsx";
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
class UNSAFE_isDismissibleContentDismissed {
  constructor(arg0) {
    obj = fn;
    if (fn === undefined) {
      obj = {};
    }
    flag = obj.bypassNewUserCheck;
    if (flag === undefined) {
      flag = false;
    }
    WEEK = obj.cooldownDurationMs;
    if (WEEK === undefined) {
      tmp = closure_1;
      tmp2 = closure_2;
      WEEK = closure_1(closure_2[3]).Millis.WEEK;
    }
    guildId = obj.guildId;
    if (!flag) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj2 = closure_0(closure_2[4]);
      if (obj2.disableNewUserDismissibleContent(global)) {
        flag2 = true;
        return true;
      }
    }
    tmp5 = closure_0;
    tmp6 = closure_2;
    obj3 = closure_0(closure_2[5]);
    if (obj3.isVersionedDismissibleContent(global)) {
      tmp5Result = tmp5(tmp6[6]);
      return tmp5Result.isVersionedDismissibleContentDismissed(global).isDismissed;
    } else {
      tmp5Result1 = tmp5(tmp6[5]);
      if (tmp5Result1.isSnowflakeBoundDismissibleContent(global)) {
        tmp11 = closure_1;
        obj15 = closure_1(tmp6[7]);
        tmp12 = globalThis;
        _Date = Date;
        fromTimestampResult = obj15.fromTimestamp(Date.now());
        tmp5Result2 = tmp5(tmp6[4]);
        if (tmp5Result2.disableNewUserDismissibleContent(global)) {
          obj = { isDismissed: true, lastDismissedSnowflakeId: null };
        } else {
          tmp14 = closure_4;
          userContent2 = closure_4.settings.userContent;
          tmp15 = null;
          prop = undefined;
          if (userContent2 != null) {
            tmp17 = userContent2.recurringDismissibleContentStates[global];
            if (tmp17 != null) {
              prop = tmp17.lastDismissedObjectId;
            }
          }
          tmp18 = null != prop;
          if (tmp18) {
            tmp11Result = tmp11(tmp6[7]);
            num = 1;
            tmp18 = 1 !== tmp11Result.compare(fromTimestampResult, prop);
          }
          obj = { isDismissed: null, lastDismissedSnowflakeId: null };
          obj.isDismissed = tmp18;
          obj.lastDismissedSnowflakeId = prop;
        }
        return obj.isDismissed;
      } else {
        tmp5Result3 = tmp5(tmp6[5]);
        if (tmp5Result3.isTimeRecurringDismissibleContent(global)) {
          tmp5Result4 = tmp5(tmp6[6]);
          obj1 = { cooldownDurationMs: null };
          obj1.cooldownDurationMs = WEEK;
          return tmp5Result4.isTimeRecurringDismissibleContentDismissed(global, obj1).isDismissed;
        } else {
          tmp5Result5 = tmp5(tmp6[5]);
          if (tmp5Result5.isSingleUseGuildDismissibleContent(global)) {
            tmp5Result6 = tmp5(tmp6[6]);
            return tmp5Result6.UNSAFE_isSingleUseGuildDismissibleContentDismissed(global, guildId);
          } else {
            tmp5Result7 = tmp5(tmp6[5]);
            if (tmp5Result7.isTimeRecurringGuildDismissibleContent(global)) {
              tmp5Result8 = tmp5(tmp6[6]);
              return tmp5Result8.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(global, guildId);
            } else {
              tmp5Result9 = tmp5(tmp6[5]);
              if (tmp5Result9.isSnowflakeBoundGuildDismissibleContent(global)) {
                tmp5Result10 = tmp5(tmp6[6]);
                return tmp5Result10.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(global, guildId);
              } else {
                tmp7 = closure_4;
                userContent = closure_4.settings.userContent;
                tmp8 = null;
                dismissedContents = undefined;
                if (userContent != null) {
                  dismissedContents = userContent.dismissedContents;
                }
                hasBitResult = null != dismissedContents;
                if (hasBitResult) {
                  tmp5Result11 = tmp5(tmp6[8]);
                  hasBitResult = tmp5Result11.hasBit(dismissedContents, global);
                }
                return hasBitResult;
              }
            }
          }
        }
      }
    }
  }
}
let closure_7 = async function _UNSAFE_markDismissibleContentAsDismissed(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          closure_130_1 = obj1;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else if (closure_131_6(closure_130_0, { bypassNewUserCheck: true })) {
            c5 = 3;
          } else {
            obj2 = closure_131_0(closure_131_2[6]);
            const result = obj2.markDismissibleContentAsDismissedPreProcessing(closure_130_0, closure_130_1);
            let obj3 = closure_131_0(closure_131_2[10]);
            c4 = 2;
            c5 = 1;
            obj3 = { value: null, done: false };
            obj3.value = obj3.addDismissedContent(closure_130_0);
            return obj3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_131_0(closure_131_2[6]);
          const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_130_0, closure_130_1);
        }
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      }
    } catch (tmp24) {
      c5 = tmp;
      throw tmp24;
    }
  }
};
let closure_8 = async function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  const result = closure_132_0(closure_132_2[6]).markDismissibleContentAsDismissedPreProcessing(
    closure_131_0,
    closure_131_2,
  );
  closure_132_0(closure_132_2[6]);
  await closure_132_0(closure_132_2[6]).UNSAFE_addGuildDismissedContent(closure_131_0, closure_131_1, 1);
  closure_132_0(closure_132_2[6]);
  const result1 = closure_132_0(closure_132_2[6]).markDismissibleContentAsDismissedPostProcessing(
    closure_131_0,
    closure_131_2,
  );
  await "HermesInternal";
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let obj1 = closure_2;
  if (closure_2 === undefined) {
    obj1 = {};
  }
  closure_131_2 = obj1;
  return "PX_16";
};
let closure_9 = async function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_2;
          const guildNextNumTimesDismissed = require("DismissibleContentUtils").getGuildNextNumTimesDismissed(
            closure_0,
            closure_1,
          );
          const obj6 = require("DismissibleContentUtils");
          const result = require("DismissibleContentUtils").markDismissibleContentAsDismissedPreProcessing(
            closure_0,
            closure_2,
          );
          const obj7 = require("DismissibleContentUtils");
          c5 = 1;
          c6 = 1;
          const obj1 = {
            value: require("DismissibleContentUtils").UNSAFE_addTimeRecurringGuildDismissedContent(
              closure_0,
              closure_1,
              guildNextNumTimesDismissed,
            ),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = closure_132_0(closure_132_2[6]);
        const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_131_0, closure_131_1);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c6 = tmp;
      throw tmp13;
    }
  }
};
let closure_10 = async function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
  arg0,
  snowflakeId,
  arg2,
  arg3,
) {
  closure_0 = arg0;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp5;
            closure_4 = tmp2;
            closure_132_0 = closure_0;
            closure_132_1 = closure_3;
            const guildNextNumTimesDismissed = require("DismissibleContentUtils").getGuildNextNumTimesDismissed(
              closure_0,
              closure_2,
            );
            const obj6 = require("DismissibleContentUtils");
            const obj1 = {};
            const merged = Object.assign(closure_3);
            obj1.snowflakeId = snowflakeId;
            const result = require("DismissibleContentUtils").markDismissibleContentAsDismissedPreProcessing(
              closure_0,
              obj1,
            );
            const obj9 = require("DismissibleContentUtils");
            c6 = 1;
            c7 = 1;
            const obj2 = {
              value: obj9.UNSAFE_addSnowflakeBoundGuildDismissedContent(
                closure_0,
                snowflakeId,
                closure_2,
                guildNextNumTimesDismissed,
              ),
              done: false,
            };
            return obj2;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = closure_133_0(closure_133_2[6]);
          const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_132_0, closure_132_1);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c7 = tmp;
        throw tmp13;
      }
    }
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = function useIsDismissibleContentDismissed_UNSAFE(
  APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
  arg1,
) {
  _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  if (arg1 === undefined) {
    const obj = {};
  }
  const items = [UserSettingsProtoStore, SelectedGuildStore];
  return require("initialize").useStateFromStores(items, () => UNSAFE_isDismissibleContentDismissed(closure_0, obj));
};
export const UNSAFE_markDismissibleContentAsDismissed = function UNSAFE_markDismissibleContentAsDismissed() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_isSnowflakeBoundDismissibleContentDismissed =
  function UNSAFE_isSnowflakeBoundDismissibleContentDismissed(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionId) {
    let obj = NewUserDismissibleContentRegistry;
    if (obj.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE)) {
      return { isDismissed: true, lastDismissedSnowflakeId: null };
    } else {
      const userContent = UserSettingsProtoStore.settings.userContent;
      let prop;
      if (userContent != null) {
        if (userContent.recurringDismissibleContentStates[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE] != null) {
          prop = tmp5.lastDismissedObjectId;
        }
      }
      let tmp6 = null != prop;
      if (tmp6) {
        tmp6 = 1 !== SnowflakeUtilsDefault.compare(promotionId, prop);
      }
      obj = { isDismissed: tmp6, lastDismissedSnowflakeId: prop };
      return obj;
    }
  };
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed =
  function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed =
  function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed =
  function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
