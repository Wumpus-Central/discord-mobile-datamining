// === Module 4698: DismissibleContentUnsafeUtils ===

// Module 4698 (DismissibleContentUnsafeUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1102 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2035 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 2037 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry" /* 4720 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

const require = globalThis.__r;

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
          obj1 = { isDismissed: true, lastDismissedSnowflakeId: null };
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
          obj1 = { isDismissed: null, lastDismissedSnowflakeId: null };
          obj1.isDismissed = tmp18;
          obj1.lastDismissedSnowflakeId = prop;
        }
        return obj1.isDismissed;
      } else {
        tmp5Result3 = tmp5(tmp6[5]);
        if (tmp5Result3.isTimeRecurringDismissibleContent(global)) {
          tmp5Result4 = tmp5(tmp6[6]);
          obj20 = { cooldownDurationMs: null };
          obj20.cooldownDurationMs = WEEK;
          return tmp5Result4.isTimeRecurringDismissibleContentDismissed(global, obj20).isDismissed;
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
let closure_7 = async function _UNSAFE_markDismissibleContentAsDismissed(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj6 = closure_1;
          if (closure_1 === undefined) {
            obj6 = {};
          }
          closure_130_1 = obj6;
          c4 = 1;
          c5 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (closure_131_6(closure_130_0, { bypassNewUserCheck: true })) {
            c5 = 3;
          } else {
            const result = closure_131_0(closure_131_2[6]).markDismissibleContentAsDismissedPreProcessing(closure_130_0, closure_130_1);
            const obj3 = closure_131_0(closure_131_2[6]);
            c4 = 2;
            c5 = 1;
            const obj8 = { value: closure_131_0(closure_131_2[12]).addDismissedContent(closure_130_0), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const result1 = closure_131_0(closure_131_2[6]).markDismissibleContentAsDismissedPostProcessing(closure_130_0, closure_130_1);
          const obj = closure_131_0(closure_131_2[6]);
        }
        c5 = 3;
        const obj9 = { value, done: true };
        return obj9;
      }
    } catch (tmp24) {
      c5 = tmp;
      throw tmp24;
    }
  }
};
let closure_8 = async function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  const result = closure_132_0(closure_132_2[6]).markDismissibleContentAsDismissedPreProcessing(closure_131_0, closure_131_2);
  closure_132_0(closure_132_2[6]);
  await closure_132_0(closure_132_2[6]).UNSAFE_addGuildDismissedContent(closure_131_0, closure_131_1, 1);
  const result1 = closure_132_0(closure_132_2[6]).markDismissibleContentAsDismissedPostProcessing(closure_131_0, closure_131_2);
  await "IconComponent";
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let obj6 = closure_2;
  if (closure_2 === undefined) {
    obj6 = {};
  }
  closure_131_2 = obj6;
  return "Reflect";
};
let closure_9 = async function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_2;
          const guildNextNumTimesDismissed = require("DismissibleContentUtils").getGuildNextNumTimesDismissed(closure_0, closure_1);
          const obj6 = require("DismissibleContentUtils");
          const result = require("DismissibleContentUtils").markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2);
          const obj7 = require("DismissibleContentUtils");
          c5 = 1;
          c6 = 1;
          const obj4 = { value: require("DismissibleContentUtils").UNSAFE_addTimeRecurringGuildDismissedContent(closure_0, closure_1, guildNextNumTimesDismissed), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const result1 = closure_132_0(closure_132_2[6]).markDismissibleContentAsDismissedPostProcessing(closure_131_0, closure_131_1);
        c6 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      }
    } catch (tmp13) {
      c6 = tmp;
      throw tmp13;
    }
  }
};
let closure_10 = async function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(arg0) {
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp5;
            closure_4 = tmp2;
            closure_132_0 = closure_0;
            closure_132_1 = closure_3;
            const guildNextNumTimesDismissed = require("DismissibleContentUtils").getGuildNextNumTimesDismissed(closure_0, closure_2);
            const obj6 = require("DismissibleContentUtils");
            const obj4 = {};
            const merged = Object.assign(closure_3);
            obj4.snowflakeId = snowflakeId;
            const result = require("DismissibleContentUtils").markDismissibleContentAsDismissedPreProcessing(closure_0, obj4);
            const obj9 = require("DismissibleContentUtils");
            c6 = 1;
            c7 = 1;
            const obj5 = { value: obj9.UNSAFE_addSnowflakeBoundGuildDismissedContent(closure_0, snowflakeId, closure_2, guildNextNumTimesDismissed), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const result1 = closure_133_0(closure_133_2[6]).markDismissibleContentAsDismissedPostProcessing(closure_132_0, closure_132_1);
          c7 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp13) {
        c7 = tmp;
        throw tmp13;
      }
    }
  })();
};
const ReactCompilerGating = fn(558);
class UNSAFE_isSnowflakeBoundDismissibleContentDismissed {
  constructor(arg0, arg1) {
    tmp = closure_2;
    obj = closure_0(closure_2[4]);
    if (obj.disableNewUserDismissibleContent(global)) {
      return { isDismissed: true, lastDismissedSnowflakeId: null };
    } else {
      tmp2 = closure_4;
      userContent = closure_4.settings.userContent;
      tmp3 = null;
      prop = undefined;
      if (userContent != null) {
        tmp5 = userContent.recurringDismissibleContentStates[global];
        if (tmp5 != null) {
          prop = tmp5.lastDismissedObjectId;
        }
      }
      tmp6 = null != prop;
      if (tmp6) {
        tmp7 = fn;
        tmp8 = closure_1;
        obj2 = closure_1(tmp[7]);
        num = 1;
        tmp6 = 1 !== obj2.compare(fn, prop);
      }
      obj1 = { isDismissed: null, lastDismissedSnowflakeId: null };
      obj1.isDismissed = tmp6;
      obj1.lastDismissedSnowflakeId = prop;
      return obj1;
    }
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  closure_1 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore, SelectedGuildStore];
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === arg0) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp(504).useStateFromStores(tmp5, tmp8);
  }
  class A {
    constructor() {
      return UNSAFE_isDismissibleContentDismissed(closure_0, closure_1);
    }
  }
  cResult[3] = arg0;
  cResult[4] = tmp4;
  cResult[5] = A;
  tmp8 = A;
  const obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  if (arg1 === undefined) {
    const obj = {};
  }
  const items = [UserSettingsProtoStore, SelectedGuildStore];
  return require("initialize").useStateFromStores(items, () => UNSAFE_isDismissibleContentDismissed(closure_0, obj));
});
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
export { UNSAFE_isSnowflakeBoundDismissibleContentDismissed };
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};