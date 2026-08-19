// === Module 1379: addVersionedDismissedContent ===

// Module 1379 (addVersionedDismissedContent)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import isSingleUseDismissibleContent from "isSingleUseDismissibleContent" /* 1378 */;
import set2 from "set" /* 1382 */;
import getVersionedDismissibleContentCurrentVersion from "getVersionedDismissibleContentCurrentVersion" /* 1389 */;
import useNewUserDismissibleContent from "useNewUserDismissibleContent" /* 4218 */;
import handleDCShownToUser from "handleDCShownToUser" /* 9987 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import { DCFEventTypes } from "getDCFEvents" /* 1380 */;
import set from "set" /* 1381 */;
import withContent from "withContent" /* 1383 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = fn;
function addVersionedDismissedContent(closure_0, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed) {
  const obj = { lastDismissedVersion: versionedDismissibleContentCurrentVersion, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(closure_0, obj);
}
function addTimeRecurringDismissedContent(closure_0, nextNumTimesDismissed) {
  const obj = { lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(closure_0, obj);
}
function addSnowflakeBoundDismissedContent(closure_0, arg1, nextNumTimesDismissed1) {
  const obj = { lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: arg1, numTimesDismissed: nextNumTimesDismissed1 };
  return obj.updateRecurringDismissibleContentState(closure_0, obj);
}
function markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2) {
  if (tmp) {
    trackDismissibleContentDismissed(closure_0, dependencyMap);
  }
  tmp = callback3(closure_0) || dependencyMap.forceTrack;
  const guildId = dependencyMap.guildId;
  handleDCShownToUser.handleDCDismissed(closure_0, guildId);
}
function markDismissibleContentAsDismissedPostProcessing(closure_0, closure_1) {
  const obj = { content: closure_0, groupName: null };
  let groupName;
  if (importDefault != null) {
    groupName = importDefault.groupName;
  }
  obj[1] = groupName;
  callback2(obj, !closure_7.hasUserHitDCCap());
  const tmp = !closure_7.hasUserHitDCCap();
}
function _markLatestVersionDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = callback(table[9]);
              c3 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_23(callback, obj1.getVersionedDismissibleContentCurrentVersion(callback), closure_1);
              return obj1;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            table = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          table = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getNextNumTimesDismissed(closure_0, numTimesDismissed) {
  if (null != numTimesDismissed.numTimesDismissed) {
    return numTimesDismissed.numTimesDismissed;
  } else {
    const userContent = store.settings.userContent;
    let tmp2;
    if (userContent != null) {
      tmp2 = userContent.recurringDismissibleContentStates[closure_0];
    }
    let num;
    if (tmp2 != null) {
      num = tmp2.numTimesDismissed;
    }
    if (num == null) {
      num = 0;
    }
    return num + 1;
  }
}
function markVersionedDismissibleContentAsDismissed(ACTIVITIES_VOICE_LAUNCHER_BADGE, closure_0, arg2) {
  const self = this;
  const apply = _markVersionedDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markVersionedDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_4 = tmp5;
              closure_3 = tmp2;
              closure_1 = closure_2;
              closure_1_19(closure_0, closure_2);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_15(closure_0, closure_1, closure_1_22(closure_0, closure_2));
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback(closure_0, closure_1);
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp20) {
          c6 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markSnowflakeBoundDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_4 = tmp5;
              closure_3 = tmp2;
              closure_1 = closure_2;
              obj1 = {};
              const merged = Object.assign(closure_2);
              obj1.snowflakeId = closure_1;
              closure_1_19(closure_0, obj1);
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_17(closure_0, closure_1, closure_1_22(closure_0, closure_2));
              return obj2;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback(closure_0, closure_1);
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp23) {
          c6 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markTimeRecurringDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_1_19(closure_0, closure_1);
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_16(closure_0, closure_1_22(closure_0, closure_1));
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback(closure_0, closure_1);
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp19) {
          c5 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET, closure_1) {
  [tmp2, tmp3] = callback(callback4(), 2);
  const obj = { type: DismissibleContent.DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET], content_count: tmp2, fatigable_content_count: tmp3, group_name: null, bypass_fatigue: null, guild_id: null, version: null, snowflake_id: null };
  let groupName;
  if (importDefault != null) {
    groupName = importDefault.groupName;
  }
  obj[3] = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = set2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj[4] = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(WISHLIST_MOBILE_NUX_ACTION_SHEET);
  let guildId;
  if (importDefault != null) {
    guildId = importDefault.guildId;
  }
  obj[5] = guildId;
  let version;
  if (importDefault != null) {
    version = importDefault.version;
  }
  obj[6] = version;
  let snowflakeId;
  if (importDefault != null) {
    snowflakeId = importDefault.snowflakeId;
  }
  obj[7] = snowflakeId;
  obj.track(AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, obj);
  const tmp = callback(callback4(), 2);
}
function trackDismissibleContentDismissed(closure_0, guildId) {
  const renderedAtTimestamp = closure_7.getRenderedAtTimestamp(closure_0);
  const date = new Date();
  let diff = null;
  if (null != renderedAtTimestamp) {
    diff = date.getTime() - renderedAtTimestamp;
  }
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  if (null != guildId) {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId.guildId);
    let tmp9;
    if (guildDismissedContentState != null) {
      tmp9 = guildDismissedContentState[closure_0];
    }
    let num2;
    if (tmp9 != null) {
      num2 = tmp9.numTimesDismissed;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let numTimesDismissed = num2 + 1;
  } else {
    let obj = guildId;
    if (guildId == null) {
      obj = {};
    }
    if (null != obj.numTimesDismissed) {
      numTimesDismissed = obj.numTimesDismissed;
    } else {
      const userContent = store.settings.userContent;
      let tmp6;
      if (userContent != null) {
        tmp6 = userContent.recurringDismissibleContentStates[closure_0];
      }
      let num;
      if (tmp6 != null) {
        num = tmp6.numTimesDismissed;
      }
      if (num == null) {
        num = 0;
      }
      numTimesDismissed = num + 1;
    }
  }
  obj = { type: DismissibleContent.DismissibleContent[closure_0], action: null, content_count: null, group_name: null, bypass_fatigue: null, guild_id: null, shown_duration: null, version: null, num_times_dismissed: null, snowflake_id: null };
  let dismissAction;
  if (guildId != null) {
    dismissAction = guildId.dismissAction;
  }
  if (dismissAction == null) {
    dismissAction = ContentDismissActionType.UNKNOWN;
  }
  obj[1] = dismissAction;
  obj[2] = callback(callback4(), 1)[0];
  let groupName;
  if (guildId != null) {
    groupName = guildId.groupName;
  }
  obj[3] = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = set2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj[4] = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(closure_0);
  let guildId1;
  if (guildId != null) {
    guildId1 = guildId.guildId;
  }
  obj[5] = guildId1;
  obj[6] = diff;
  let version;
  if (guildId != null) {
    version = guildId.version;
  }
  obj[7] = version;
  obj[8] = numTimesDismissed;
  let snowflakeId;
  if (guildId != null) {
    snowflakeId = guildId.snowflakeId;
  }
  obj[9] = snowflakeId;
  expandEventPropertiesDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
}
({ addCandidateContent: closure_8, removeCandidateContent: c9, isContentShown: c10, getCurrentlyShownCounts: unpackModuleId } = withContent);
let c14 = 2592000000;
let items = [require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS, require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_PROMPT, require("DismissibleContent").DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK];
const set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

export const SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = 2592000000;
export const getDismissedRecurringDismissibleContentState = function getDismissedRecurringDismissibleContentState(id) {
  const userContent = store.settings.userContent;
  let tmp;
  if (userContent != null) {
    tmp = userContent.recurringDismissibleContentStates[id];
  }
  let obj = isSingleUseDismissibleContent;
  let num = 0;
  if (obj.isVersionedDismissibleContent(id)) {
    let tmp2Result = getVersionedDismissibleContentCurrentVersion;
    num = tmp2Result.getVersionedDismissibleContentCurrentVersion(id);
  }
  obj = { lastDismissedVersion: num, lastDismissedAtMs: null, lastDismissedObjectId: null, numTimesDismissed: null };
  const date = new Date();
  obj[1] = new Date().getTime().toString();
  tmp2Result = isSingleUseDismissibleContent;
  let str2 = "0";
  if (tmp2Result.isSnowflakeBoundDismissibleContent(id)) {
    const _Date = Date;
    str2 = DISCORD_EPOCHDefault.fromTimestamp(Date.now() + c14);
  }
  obj[2] = str2;
  let num2;
  if (tmp != null) {
    num2 = tmp.numTimesDismissed;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj[3] = num2;
  return obj;
};
export { addVersionedDismissedContent };
export { addTimeRecurringDismissedContent };
export { addSnowflakeBoundDismissedContent };
export const UNSAFE_addGuildDismissedContent = function UNSAFE_addGuildDismissedContent(closure_0, closure_1, guildNextNumTimesDismissed) {
  const obj = { dismissed: true, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, closure_1, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(closure_0, stateFromStores, arg2) {
  const obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: arg2 };
  return obj.updateGuildDismissedContent(closure_0, stateFromStores, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(closure_0, closure_1, guildNextNumTimesDismissed) {
  const obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, closure_1, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(closure_0, stateFromStores, numTimesDismissed) {
  const obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, stateFromStores, obj);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(closure_0, closure_1, closure_2, guildNextNumTimesDismissed) {
  const obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: closure_1, numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, closure_2, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(closure_0, stateFromStores, numTimesDismissed) {
  const obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, stateFromStores, obj);
};
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(id, latestVersion) {
  let obj = useNewUserDismissibleContent;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedVersion: null };
  } else {
    const userContent = store.settings.userContent;
    let lastDismissedVersion;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[id] != null) {
        lastDismissedVersion = tmp6.lastDismissedVersion;
      }
    }
    let versionedDismissibleContentCurrentVersion = latestVersion;
    if (latestVersion == null) {
      versionedDismissibleContentCurrentVersion = getVersionedDismissibleContentCurrentVersion.getVersionedDismissibleContentCurrentVersion(id);
      const tmpResult = getVersionedDismissibleContentCurrentVersion;
    }
    obj = { isDismissed: null, lastDismissedVersion: null };
    obj[0] = null != lastDismissedVersion && lastDismissedVersion >= versionedDismissibleContentCurrentVersion;
    obj[1] = lastDismissedVersion;
    return obj;
  }
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(id, cooldownConfig) {
  let obj = useNewUserDismissibleContent;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedAtMs: null };
  } else {
    const userContent = store.settings.userContent;
    let lastDismissedAtMs;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[id] != null) {
        lastDismissedAtMs = tmp4.lastDismissedAtMs;
      }
    }
    let tmp5;
    if (null != lastDismissedAtMs) {
      if ("0" !== lastDismissedAtMs) {
        const _Number = Number;
        const _Number2 = Number;
        let NumberResult;
        if (!Number.isNaN(Number(lastDismissedAtMs))) {
          const _Number3 = Number;
          NumberResult = Number(lastDismissedAtMs);
        }
        tmp5 = NumberResult;
      }
    }
    if (undefined === tmp5) {
      return { isDismissed: false, lastDismissedAtMs: "Array" };
    } else {
      let flag = true;
      if (null != cooldownConfig) {
        const _Date = Date;
        const sum = tmp5 + cooldownConfig.cooldownDurationMs;
        const timestamp = Date.now();
        let tmp12 = null == cooldownConfig.showAfterTimestamp;
        if (!tmp12) {
          tmp12 = timestamp >= cooldownConfig.showAfterTimestamp && tmp5 <= cooldownConfig.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp12;
      }
      obj = { isDismissed: null, lastDismissedAtMs: null };
      obj[0] = flag;
      obj[1] = tmp5;
      return obj;
    }
  }
};
export const isTimeRecurringSnowflakeBoundDismissibleContentDismissed = function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, id, cooldownDurationMs) {
  if (obj.disableNewUserDismissibleContent(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)) {
    return true;
  } else {
    const userContent = store.settings.userContent;
    let prop;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[THIRD_PARTY_OUTBOUND_PROMO_NAGBAR] != null) {
        prop = tmp5.lastDismissedObjectId;
      }
    }
    const userContent2 = store.settings.userContent;
    let lastDismissedAtMs;
    if (userContent2 != null) {
      if (userContent2.recurringDismissibleContentStates[THIRD_PARTY_OUTBOUND_PROMO_NAGBAR] != null) {
        lastDismissedAtMs = tmp7.lastDismissedAtMs;
      }
    }
    if (null != lastDismissedAtMs) {
      if ("0" !== lastDismissedAtMs) {
        const _Number = Number;
        const _Number2 = Number;
        let NumberResult;
        if (!Number.isNaN(Number(lastDismissedAtMs))) {
          const _Number3 = Number;
          NumberResult = Number(lastDismissedAtMs);
        }
      }
    }
    let flag = false;
    if (null != cooldownDurationMs) {
      flag = false;
      if (null != tmp8) {
        const _Date = Date;
        const sum = tmp8 + cooldownDurationMs.cooldownDurationMs;
        const timestamp = Date.now();
        let tmp15 = null == cooldownDurationMs.showAfterTimestamp;
        if (!tmp15) {
          tmp15 = timestamp >= cooldownDurationMs.showAfterTimestamp && tmp8 <= cooldownDurationMs.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp15;
      }
    }
    let tmp18 = null != prop;
    if (tmp18) {
      tmp18 = 1 !== DISCORD_EPOCHDefault.compare(id, prop);
    }
    if (flag) {
      flag = tmp18;
    }
    return flag;
  }
  obj = useNewUserDismissibleContent;
};
export const UNSAFE_isSingleUseGuildDismissibleContentDismissed = function UNSAFE_isSingleUseGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
    let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER];
    if (tmp5) {
      tmp5 = true === guildDismissedContentState[GDM_INVITE_REMINDER].dismissed;
    }
    return tmp5;
  }
  obj = useNewUserDismissibleContent;
};
export const useIsSingleUseGuildDismissibleContentDismissed = function useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, guildId) {
  const _require = dismissibleContent;
  closure_1 = guildId;
  const items = [closure_5];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != dismissibleContent;
    if (tmp2) {
      let flag2 = true;
      if (!obj.disableNewUserDismissibleContent(dismissibleContent)) {
        const guildDismissedContentState = closure_1_5.getGuildDismissedContentState(closure_1);
        flag2 = null != guildDismissedContentState && null != guildDismissedContentState[dismissibleContent] && true === guildDismissedContentState[dismissibleContent].dismissed;
      }
      tmp2 = flag2;
      obj = dismissibleContent(dependencyMap[12]);
    }
    return tmp2;
  });
};
export const UNSAFE_isTimeRecurringGuildDismissibleContentDismissed = function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
    let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
    if (tmp5) {
      tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
    }
    return tmp5;
  }
  obj = useNewUserDismissibleContent;
};
export const UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed = function UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
    let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
    if (tmp5) {
      tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
    }
    return tmp5;
  }
  obj = useNewUserDismissibleContent;
};
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(PASSWORDLESS_UPSELL, guildId, anyOverlayRenderingLocked, stateFromStores1) {
  closure_0 = PASSWORDLESS_UPSELL;
  importDefault = guildId;
  if (!callback3(PASSWORDLESS_UPSELL)) {
    guildId = undefined;
    if (guildId != null) {
      guildId = guildId.guildId;
    }
    if (!closure_7.hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId)) {
      let hasItem = null == stateFromStores1;
      if (hasItem) {
        hasItem = set.has(PASSWORDLESS_UPSELL);
      }
      let tmp7 = anyOverlayRenderingLocked;
      if (anyOverlayRenderingLocked) {
        tmp7 = !hasItem;
      }
      if (!tmp7) {
        let obj = { type: "DCF_EVENT_LOGGED", eventType: null, dismissibleContent: null };
        obj[1] = DCFEventTypes.DC_SHOW_REQUEST;
        obj[2] = PASSWORDLESS_UPSELL;
        obj.dispatch(obj);
        obj = { content: null, groupName: null, onAdded: null };
        obj[0] = PASSWORDLESS_UPSELL;
        let groupName;
        if (guildId != null) {
          groupName = guildId.groupName;
        }
        obj[1] = groupName;
        obj[2] = function onAdded() {
          guildId = undefined;
          if (guildId != null) {
            guildId = guildId.guildId;
          }
          PASSWORDLESS_UPSELL(dependencyMap[16]).handleDCShownToUser(PASSWORDLESS_UPSELL, guildId);
          trackDismissibleContentShown(PASSWORDLESS_UPSELL, guildId);
          if (guildId != null) {
            const onShown = guildId.onShown;
            if (onShown != null) {
              onShown();
            }
          }
          const obj = PASSWORDLESS_UPSELL(dependencyMap[16]);
        };
        callback(obj);
      }
    }
  }
};
export { markDismissibleContentAsDismissedPreProcessing };
export { markDismissibleContentAsDismissedPostProcessing };
export const markLatestVersionDismissibleContentAsDismissed = function markLatestVersionDismissibleContentAsDismissed() {
  const self = this;
  const apply = _markLatestVersionDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildNextNumTimesDismissed = function getGuildNextNumTimesDismissed(closure_0, stateFromStores) {
  const guildDismissedContentState = store.getGuildDismissedContentState(stateFromStores);
  let tmp2;
  if (guildDismissedContentState != null) {
    tmp2 = guildDismissedContentState[closure_0];
  }
  let num;
  if (tmp2 != null) {
    num = tmp2.numTimesDismissed;
  }
  if (num == null) {
    num = 0;
  }
  return num + 1;
};
export { getNextNumTimesDismissed };
export { markVersionedDismissibleContentAsDismissed };
export const markSnowflakeBoundDismissibleContentAsDismissed = function markSnowflakeBoundDismissibleContentAsDismissed(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionId, arg2) {
  const self = this;
  const apply = _markSnowflakeBoundDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markTimeRecurringDismissibleContentAsDismissed = function markTimeRecurringDismissibleContentAsDismissed(closure_1_15, arg1) {
  const self = this;
  const apply = _markTimeRecurringDismissibleContentAsDismissed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { trackDismissibleContentShown };
export { trackDismissibleContentDismissed };