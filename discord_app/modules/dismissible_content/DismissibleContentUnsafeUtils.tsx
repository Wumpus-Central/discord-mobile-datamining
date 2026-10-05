// === Module 4698: DismissibleContentUnsafeUtils ===

// Module 4698 (DismissibleContentUnsafeUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1102 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2035 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 2037 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry" /* 4720 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, closure_5;

class UNSAFE_isDismissibleContentDismissed {
  constructor(GDM_INVITE_REMINDER, arg1) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.bypassNewUserCheck;
    if (flag === undefined) {
      flag = false;
    }
    let WEEK = obj.cooldownDurationMs;
    if (WEEK === undefined) {
      WEEK = DurationsDefault.Millis.WEEK;
    }
    const guildId = obj.guildId;
    if (!flag) {
      const obj2 = NewUserDismissibleContentRegistry;
      if (obj2.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
        return true;
      }
    }
    const obj3 = DismissibleContentTypes;
    if (obj3.isVersionedDismissibleContent(GDM_INVITE_REMINDER)) {
      const tmp5Result = DismissibleContentUtils;
      return tmp5Result.isVersionedDismissibleContentDismissed(GDM_INVITE_REMINDER).isDismissed;
    } else {
      const tmp5Result12 = DismissibleContentTypes;
      if (tmp5Result12.isSnowflakeBoundDismissibleContent(GDM_INVITE_REMINDER)) {
        let obj4;
        const _Date = Date;
        const obj15 = SnowflakeUtilsDefault;
        const fromTimestampResult = obj15.fromTimestamp(Date.now());
        const tmp5Result13 = NewUserDismissibleContentRegistry;
        if (tmp5Result13.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
          obj4 = { isDismissed: true, lastDismissedSnowflakeId: null };
        } else {
          const userContent2 = UserSettingsProtoStore.settings.userContent;
          let prop;
          if (userContent2 != null) {
            if (userContent2.recurringDismissibleContentStates[GDM_INVITE_REMINDER] != null) {
              prop = tmp17.lastDismissedObjectId;
            }
          }
          let tmp18 = null != prop;
          if (tmp18) {
            const tmp11Result = SnowflakeUtilsDefault;
            tmp18 = 1 !== tmp11Result.compare(fromTimestampResult, prop);
          }
          obj4 = { isDismissed: tmp18, lastDismissedSnowflakeId: prop };
        }
        return obj4.isDismissed;
      } else {
        const tmp5Result14 = DismissibleContentTypes;
        if (tmp5Result14.isTimeRecurringDismissibleContent(GDM_INVITE_REMINDER)) {
          const obj5 = { cooldownDurationMs: WEEK };
          const tmp5Result15 = DismissibleContentUtils;
          return tmp5Result15.isTimeRecurringDismissibleContentDismissed(GDM_INVITE_REMINDER, obj5).isDismissed;
        } else {
          const tmp5Result16 = DismissibleContentTypes;
          if (tmp5Result16.isSingleUseGuildDismissibleContent(GDM_INVITE_REMINDER)) {
            const tmp5Result17 = DismissibleContentUtils;
            return tmp5Result17.UNSAFE_isSingleUseGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId);
          } else {
            const tmp5Result18 = DismissibleContentTypes;
            if (tmp5Result18.isTimeRecurringGuildDismissibleContent(GDM_INVITE_REMINDER)) {
              const tmp5Result19 = DismissibleContentUtils;
              return tmp5Result19.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId);
            } else {
              const tmp5Result20 = DismissibleContentTypes;
              if (tmp5Result20.isSnowflakeBoundGuildDismissibleContent(GDM_INVITE_REMINDER)) {
                const tmp5Result21 = DismissibleContentUtils;
                return tmp5Result21.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId);
              } else {
                const userContent = UserSettingsProtoStore.settings.userContent;
                let dismissedContents;
                if (userContent != null) {
                  dismissedContents = userContent.dismissedContents;
                }
                let hasBitResult = null != dismissedContents;
                if (hasBitResult) {
                  const tmp5Result22 = Uint8ArrayUtils;
                  hasBitResult = tmp5Result22.hasBit(dismissedContents, GDM_INVITE_REMINDER);
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
let obj = function _UNSAFE_markDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let closure_3;
    let obj4;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (1 === c4) {
      if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else if (!closure_131_6(closure_0, { bypassNewUserCheck: true })) {
        const obj3 = closure_131_0(closure_131_2[6]);
        const result = obj3.markDismissibleContentAsDismissedPreProcessing(closure_0, obj6);
        c4 = 2;
        c5 = 1;
        const obj8 = { value: obj4.addDismissedContent(closure_0), done: false };
        obj4 = closure_131_0(closure_131_2[12]);
        return obj8;
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } else {
      obj = closure_131_0(closure_131_2[6]);
      const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_0, obj6);
    }
    await "IconComponent";
    obj6 = closure_1;
    if (closure_1 === undefined) {
      obj6 = {};
    }
    return "Set";
  });
  return obj(...arguments);
};
obj = function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj6;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            obj6 = closure_2;
            if (closure_2 === undefined) {
              obj6 = {};
            }
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const obj3 = closure_132_0(closure_132_2[6]);
            const result = obj3.markDismissibleContentAsDismissedPreProcessing(closure_0, obj6);
            c5 = 2;
            c6 = 1;
            const obj8 = { value: obj4.UNSAFE_addGuildDismissedContent(closure_0, closure_1, 1), done: false };
            obj4 = closure_132_0(closure_132_2[6]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          obj = closure_132_0(closure_132_2[6]);
          const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_0, obj6);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp25) {
        c6 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
obj = function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_4 = tmp4;
            let closure_3 = tmp;
            closure_1 = closure_2;
            const obj6 = require("DismissibleContentUtils");
            const guildNextNumTimesDismissed = obj6.getGuildNextNumTimesDismissed(closure_0, closure_1);
            const obj7 = require("DismissibleContentUtils");
            const result = obj7.markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2);
            c5 = 1;
            c6 = 1;
            const obj4 = { value: obj8.UNSAFE_addTimeRecurringGuildDismissedContent(closure_0, closure_1, guildNextNumTimesDismissed), done: false };
            obj8 = require("DismissibleContentUtils");
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
          obj = closure_132_0(closure_132_2[6]);
          const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_0, closure_1);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c6 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
obj = function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, snowflakeId, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              snowflakeId = closure_3;
              const obj6 = require("DismissibleContentUtils");
              const guildNextNumTimesDismissed = obj6.getGuildNextNumTimesDismissed(closure_0, closure_2);
              const obj4 = { snowflakeId };
              const markDismissibleContentAsDismissedPreProcessing = require("DismissibleContentUtils").markDismissibleContentAsDismissedPreProcessing;
              require("DismissibleContentUtils");
              const merged = Object.assign(closure_3);
              const result = markDismissibleContentAsDismissedPreProcessing(closure_0, obj4);
              c6 = 1;
              c7 = 1;
              const obj8 = require("DismissibleContentUtils");
              const obj5 = { value: obj8.UNSAFE_addSnowflakeBoundGuildDismissedContent(closure_0, snowflakeId, closure_2, guildNextNumTimesDismissed), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            obj = closure_133_0(closure_133_2[6]);
            const result1 = obj.markDismissibleContentAsDismissedPostProcessing(closure_0, snowflakeId);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c7 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let closure_1 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore, SelectedGuildStore];
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp8;
    if (cResult[4] === tmp4) {
      tmp8 = cResult[5];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(tmp5, tmp8);
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
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const items = [UserSettingsProtoStore, SelectedGuildStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => UNSAFE_isDismissibleContentDismissed(closure_0, obj));
});
class UNSAFE_isSnowflakeBoundDismissibleContentDismissed {
  constructor(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionId) {
    obj = NewUserDismissibleContentRegistry;
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
        const obj2 = SnowflakeUtilsDefault;
        tmp6 = 1 !== obj2.compare(promotionId, prop);
      }
      return { isDismissed: tmp6, lastDismissedSnowflakeId: prop };
    }
  }
}
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = tmp2;
export const UNSAFE_markDismissibleContentAsDismissed = function UNSAFE_markDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export { UNSAFE_isSnowflakeBoundDismissibleContentDismissed };
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed() {
  return obj(...arguments);
};