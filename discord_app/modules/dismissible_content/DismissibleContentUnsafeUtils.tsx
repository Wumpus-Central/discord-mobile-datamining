// discord_app/modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
import isSingleUseDismissibleContent from "isSingleUseDismissibleContent";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
class UNSAFE_isDismissibleContentDismissed {
  constructor(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
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
      WEEK = require("set").Millis.WEEK;
    }
    guildId = obj.guildId;
    if (!flag) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj2 = require("useNewUserDismissibleContent");
      if (obj2.disableNewUserDismissibleContent(global)) {
        flag2 = true;
        return true;
      }
    }
    tmp5 = closure_0;
    tmp6 = closure_2;
    obj3 = require("isSingleUseDismissibleContent");
    if (obj3.isVersionedDismissibleContent(global)) {
      tmp5Result = require("addVersionedDismissedContent");
      return tmp5Result.isVersionedDismissibleContentDismissed(global).isDismissed;
    } else {
      tmp5Result1 = require("isSingleUseDismissibleContent");
      if (tmp5Result1.isSnowflakeBoundDismissibleContent(global)) {
        tmp11 = closure_1;
        obj15 = require("DISCORD_EPOCH");
        tmp12 = globalThis;
        _Date = Date;
        fromTimestampResult = obj15.fromTimestamp(Date.now());
        tmp5Result2 = require("useNewUserDismissibleContent");
        if (tmp5Result2.disableNewUserDismissibleContent(global)) {
          obj = { isDismissed: true, lastDismissedSnowflakeId: null };
        } else {
          tmp14 = _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed;
          userContent2 = _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed.settings.userContent;
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
            tmp11Result = require("DISCORD_EPOCH");
            num = 1;
            tmp18 = 1 !== tmp11Result.compare(fromTimestampResult, prop);
          }
          obj = { isDismissed: null, lastDismissedSnowflakeId: null };
          obj[0] = tmp18;
          obj[1] = prop;
        }
        return obj.isDismissed;
      } else {
        tmp5Result3 = require("isSingleUseDismissibleContent");
        if (tmp5Result3.isTimeRecurringDismissibleContent(global)) {
          tmp5Result4 = require("addVersionedDismissedContent");
          obj1 = { cooldownDurationMs: null };
          obj1[0] = WEEK;
          return tmp5Result4.isTimeRecurringDismissibleContentDismissed(global, obj1).isDismissed;
        } else {
          tmp5Result5 = require("isSingleUseDismissibleContent");
          if (tmp5Result5.isSingleUseGuildDismissibleContent(global)) {
            tmp5Result6 = require("addVersionedDismissedContent");
            return tmp5Result6.UNSAFE_isSingleUseGuildDismissibleContentDismissed(global, guildId);
          } else {
            tmp5Result7 = require("isSingleUseDismissibleContent");
            if (tmp5Result7.isTimeRecurringGuildDismissibleContent(global)) {
              tmp5Result8 = require("addVersionedDismissedContent");
              return tmp5Result8.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(global, guildId);
            } else {
              tmp5Result9 = require("isSingleUseDismissibleContent");
              if (tmp5Result9.isSnowflakeBoundGuildDismissibleContent(global)) {
                tmp5Result10 = require("addVersionedDismissedContent");
                return tmp5Result10.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(global, guildId);
              } else {
                tmp7 = _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed;
                userContent = _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed.settings.userContent;
                tmp8 = null;
                dismissedContents = undefined;
                if (userContent != null) {
                  dismissedContents = userContent.dismissedContents;
                }
                hasBitResult = null != dismissedContents;
                if (hasBitResult) {
                  tmp5Result11 = require("hasBit");
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
function _UNSAFE_markDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let isSingleUseDismissibleContent = tmp5;
              const dependencyMap = tmp2;
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else if (callback2(callback, { bypassNewUserCheck: true })) {
                c5 = 3;
              } else {
                obj2 = callback(1360);
                const result = obj2.markDismissibleContentAsDismissedPreProcessing(callback, obj1);
                let obj3 = callback(1355);
                c4 = 2;
                c5 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.addDismissedContent(callback);
                return obj3;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = callback(1360);
              const result1 = obj.markDismissibleContentAsDismissedPostProcessing(callback, obj1);
            }
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } catch (tmp24) {
          c5 = tmp;
          throw tmp24;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _UNSAFE_markDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleConnectionClosedOrResumed = tmp5;
              let isSingleUseDismissibleContent = tmp2;
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj2 = callback(obj1[6]);
              const result = obj2.markDismissibleContentAsDismissedPreProcessing(callback, obj1);
              let obj3 = callback(obj1[6]);
              c5 = 2;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.UNSAFE_addGuildDismissedContent(callback, closure_1, 1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback(obj1[6]);
            const result1 = obj.markDismissibleContentAsDismissedPostProcessing(callback, obj1);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp26) {
          c6 = tmp;
          throw tmp26;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleConnectionClosedOrResumed = tmp5;
              let isSingleUseDismissibleContent = tmp2;
              let closure_1 = dependencyMap;
              const guildNextNumTimesDismissed = callback(1360).getGuildNextNumTimesDismissed(callback, closure_1);
              const obj6 = callback(1360);
              const result = callback(1360).markDismissibleContentAsDismissedPreProcessing(callback, dependencyMap);
              const obj7 = callback(1360);
              c5 = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(1360).UNSAFE_addTimeRecurringGuildDismissedContent(callback, closure_1, guildNextNumTimesDismissed);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = callback(1360);
            const result1 = obj.markDismissibleContentAsDismissedPostProcessing(callback, closure_1);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c6 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let isSingleUseDismissibleContent = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleConnectionOpen = tmp5;
              let handleConnectionClosedOrResumed = tmp2;
              let closure_1 = isSingleUseDismissibleContent;
              const guildNextNumTimesDismissed = callback(1360).getGuildNextNumTimesDismissed(callback, dependencyMap);
              const obj6 = callback(1360);
              const obj1 = {};
              const merged = Object.assign(isSingleUseDismissibleContent);
              obj1.snowflakeId = closure_1;
              const result = callback(1360).markDismissibleContentAsDismissedPreProcessing(callback, obj1);
              const obj9 = callback(1360);
              c6 = 1;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj9.UNSAFE_addSnowflakeBoundGuildDismissedContent(callback, closure_1, dependencyMap, guildNextNumTimesDismissed);
              return obj2;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj = callback(1360);
            const result1 = obj.markDismissibleContentAsDismissedPostProcessing(callback, closure_1);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c7 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("handleConnectionOpen").fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = function useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, arg1) {
  const _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const items = [handleConnectionClosedOrResumed, handleConnectionOpen];
  return _require(589).useStateFromStores(items, () => outer1_6(closure_0, obj));
};
export const UNSAFE_markDismissibleContentAsDismissed = function UNSAFE_markDismissibleContentAsDismissed(DONUT_MOBILE_NUX, arg1) {
  const self = this;
  const apply = _UNSAFE_markDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_isSnowflakeBoundDismissibleContentDismissed = function UNSAFE_isSnowflakeBoundDismissibleContentDismissed(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionId) {
  let obj = require(4031) /* useNewUserDismissibleContent */;
  if (obj.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE)) {
    return { isDismissed: true, lastDismissedSnowflakeId: null };
  } else {
    const userContent = handleConnectionClosedOrResumed.settings.userContent;
    let prop;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE] != null) {
        prop = tmp5.lastDismissedObjectId;
      }
    }
    let tmp6 = null != prop;
    if (tmp6) {
      tmp6 = 1 !== importDefault(11).compare(promotionId, prop);
      const obj2 = importDefault(11);
    }
    obj = { isDismissed: null, lastDismissedSnowflakeId: null };
    obj[0] = tmp6;
    obj[1] = prop;
    return obj;
  }
};
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(MOBILE_ACCOUNT_LINKING_BANNER, closure_0, arg2) {
  const self = this;
  const apply = _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(arg0, closure_0, arg2) {
  const self = this;
  const apply = _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(arg0, closure_0, closure_1, arg3) {
  const self = this;
  const apply = _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};