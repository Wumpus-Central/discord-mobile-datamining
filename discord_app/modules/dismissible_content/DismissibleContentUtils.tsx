// discord_app/modules/dismissible_content/DismissibleContentUtils.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "withContent";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { DCFEventTypes } from "getDCFEvents";
import closure_7 from "set";
import withContent from "withContent";
import { ContentDismissActionType } from "ContentDismissActionType";
import { AnalyticEvents } from "ME";
import set from "handleConnectionClosedOrResumed";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function addVersionedDismissedContent(GUILD_POWERUP_NOTIFICATION, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { lastDismissedVersion: versionedDismissibleContentCurrentVersion, lastDismissedAtMs: null, lastDismissedObjectId: "0", numTimesDismissed: null };
  obj[1] = Date.now().toString();
  obj[3] = nextNumTimesDismissed;
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addTimeRecurringDismissedContent(GUILD_POWERUP_NOTIFICATION, nextNumTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: "0", numTimesDismissed: null };
  obj[1] = Date.now().toString();
  obj[3] = nextNumTimesDismissed;
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addSnowflakeBoundDismissedContent(GUILD_POWERUP_NOTIFICATION, arg1, nextNumTimesDismissed1) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: null, numTimesDismissed: null };
  obj[1] = Date.now().toString();
  obj[2] = arg1;
  obj[3] = nextNumTimesDismissed1;
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2) {
  if (tmp) {
    trackDismissibleContentDismissed(closure_0, closure_2);
  }
  tmp = callback3(closure_0) || closure_2.forceTrack;
  const guildId = closure_2.guildId;
  require(10233) /* handleDCShownToUser */.handleDCDismissed(closure_0, guildId);
}
function markDismissibleContentAsDismissedPostProcessing(closure_0, closure_1) {
  const obj = { content: closure_0, groupName: null };
  let groupName;
  if (closure_1 != null) {
    groupName = closure_1.groupName;
  }
  obj[1] = groupName;
  closure_9(obj, !closure_7.hasUserHitDCCap());
}
function _markLatestVersionDismissibleContentAsDismissed() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let obj1 = callback(table[9]);
              c3 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = outer1_23(callback, obj1.getVersionedDismissibleContentCurrentVersion(callback), closure_1);
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          table = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _markLatestVersionDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getNextNumTimesDismissed(arg0, numTimesDismissed) {
  if (null != numTimesDismissed.numTimesDismissed) {
    return numTimesDismissed.numTimesDismissed;
  } else {
    const userContent = store.settings.userContent;
    let tmp2;
    if (userContent != null) {
      tmp2 = userContent.recurringDismissibleContentStates[arg0];
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
              let closure_4 = tmp5;
              let _slicedToArray = tmp2;
              let closure_1 = closure_2;
              outer1_19(closure_0, closure_2);
              c5 = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_15(closure_0, closure_1, outer1_22(closure_0, closure_2));
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c6 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _markVersionedDismissibleContentAsDismissed = tmp;
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
              let closure_4 = tmp5;
              let _slicedToArray = tmp2;
              let closure_1 = closure_2;
              const obj1 = {};
              const merged = Object.assign(closure_2);
              obj1.snowflakeId = closure_1;
              outer1_19(closure_0, obj1);
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_17(closure_0, closure_1, outer1_22(closure_0, closure_2));
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp23) {
          c6 = tmp;
          throw tmp23;
        }
      }
    })();
  });
  const _markSnowflakeBoundDismissibleContentAsDismissed = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
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
              let _slicedToArray = tmp5;
              let closure_2 = tmp2;
              outer1_19(closure_0, closure_1);
              c4 = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_16(closure_0, outer1_22(closure_0, closure_1));
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c5 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _markTimeRecurringDismissibleContentAsDismissed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(callback4(), 2);
  let obj = importDefault(698);
  obj = { type: require(1358) /* DismissibleContent */.DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET], content_count: tmp2, fatigable_content_count: tmp3, group_name: null, bypass_fatigue: null, guild_id: null, version: null, snowflake_id: null };
  let groupName;
  if (arg1 != null) {
    groupName = arg1.groupName;
  }
  obj[3] = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1363) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj[4] = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(WISHLIST_MOBILE_NUX_ACTION_SHEET);
  let guildId;
  if (arg1 != null) {
    guildId = arg1.guildId;
  }
  obj[5] = guildId;
  let version;
  if (arg1 != null) {
    version = arg1.version;
  }
  obj[6] = version;
  let snowflakeId;
  if (arg1 != null) {
    snowflakeId = arg1.snowflakeId;
  }
  obj[7] = snowflakeId;
  obj.track(AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, obj);
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
  obj = { type: require(1358) /* DismissibleContent */.DismissibleContent[closure_0], action: null, content_count: null, group_name: null, bypass_fatigue: null, guild_id: null, shown_duration: null, version: null, num_times_dismissed: null, snowflake_id: null };
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
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1363) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
  importDefault(698).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
}
({ addCandidateContent: metroImportAll, removeCandidateContent: c9, isContentShown: c10, getCurrentlyShownCounts: unpackModuleId } = withContent);
let c14 = 2592000000;
let items = [require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS, require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_PROMPT, require("DismissibleContent").DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

export const SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = 2592000000;
export const getDismissedRecurringDismissibleContentState = function getDismissedRecurringDismissibleContentState(id) {
  const userContent = store.settings.userContent;
  let tmp;
  if (userContent != null) {
    tmp = userContent.recurringDismissibleContentStates[id];
  }
  let obj = require(1359) /* isSingleUseDismissibleContent */;
  let num = 0;
  if (obj.isVersionedDismissibleContent(id)) {
    let tmp2Result = tmp2(1370);
    num = tmp2Result.getVersionedDismissibleContentCurrentVersion(id);
  }
  obj = { lastDismissedVersion: num, lastDismissedAtMs: null, lastDismissedObjectId: null, numTimesDismissed: null };
  const date = new Date();
  obj[1] = new Date().getTime().toString();
  tmp2Result = tmp2(1359);
  let str2 = "0";
  if (tmp2Result.isSnowflakeBoundDismissibleContent(id)) {
    const _Date = Date;
    str2 = importDefault(11).fromTimestamp(Date.now() + c14);
    const obj6 = importDefault(11);
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
export const UNSAFE_addGuildDismissedContent = function UNSAFE_addGuildDismissedContent(closure_0, closure_1, arg2) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: true, lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: "0", numTimesDismissed: null };
  obj[2] = Date.now().toString();
  obj[4] = arg2;
  return obj.updateGuildDismissedContent(closure_0, closure_1, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(closure_0, closure_2, arg2) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: "0", numTimesDismissed: null };
  obj[2] = Date.now().toString();
  obj[4] = arg2;
  return obj.updateGuildDismissedContent(closure_0, closure_2, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(closure_0, closure_1, guildNextNumTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: "0", numTimesDismissed: null };
  obj[2] = Date.now().toString();
  obj[4] = guildNextNumTimesDismissed;
  return obj.updateGuildDismissedContent(closure_0, closure_1, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(closure_0, closure_2, numTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, closure_2, obj);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(closure_0, closure_1, closure_2, guildNextNumTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: null, lastDismissedObjectId: null, numTimesDismissed: null };
  obj[2] = Date.now().toString();
  obj[3] = closure_1;
  obj[4] = guildNextNumTimesDismissed;
  return obj.updateGuildDismissedContent(closure_0, closure_2, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(closure_0, closure_2, numTimesDismissed) {
  let obj = require(1355) /* updateUserGuildSettings */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(closure_0, closure_2, obj);
};
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(id, latestVersion) {
  let obj = require(4031) /* useNewUserDismissibleContent */;
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
      versionedDismissibleContentCurrentVersion = tmp(1370).getVersionedDismissibleContentCurrentVersion(id);
      const tmpResult = tmp(1370);
    }
    obj = { isDismissed: null, lastDismissedVersion: null };
    obj[0] = null != lastDismissedVersion && lastDismissedVersion >= versionedDismissibleContentCurrentVersion;
    obj[1] = lastDismissedVersion;
    return obj;
  }
  tmp = require;
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(id, cooldownConfig) {
  let obj = require(4031) /* useNewUserDismissibleContent */;
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
      return { isDismissed: false, lastDismissedAtMs: "r" };
    } else {
      let flag = true;
      if (null != cooldownConfig) {
        const _Date = Date;
        const sum = tmp5 + cooldownConfig.cooldownDurationMs;
        const timestamp = Date.now();
        let tmp12 = null == cooldownConfig.showAfterTimestamp;
        if (!tmp12) {
          tmp12 = timestamp >= cooldownConfig.showAfterTimestamp && tmp5 <= cooldownConfig.showAfterTimestamp;
          const tmp13 = timestamp >= cooldownConfig.showAfterTimestamp && tmp5 <= cooldownConfig.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp12;
        const tmp14 = timestamp < sum || !tmp12;
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
          const tmp16 = timestamp >= cooldownDurationMs.showAfterTimestamp && tmp8 <= cooldownDurationMs.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp15;
        const tmp17 = timestamp < sum || !tmp15;
      }
    }
    let tmp18 = null != prop;
    if (tmp18) {
      tmp18 = 1 !== importDefault(11).compare(id, prop);
      const obj2 = importDefault(11);
    }
    if (flag) {
      flag = tmp18;
    }
    return flag;
  }
  obj = require(4031) /* useNewUserDismissibleContent */;
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
  obj = require(4031) /* useNewUserDismissibleContent */;
};
export const useIsSingleUseGuildDismissibleContentDismissed = function useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg1) {
  const _require = dismissibleContent;
  let closure_1 = arg1;
  const items = [handleConnectionClosedOrResumed];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != dismissibleContent;
    if (tmp2) {
      let flag2 = true;
      if (!obj.disableNewUserDismissibleContent(tmp)) {
        const guildDismissedContentState = outer1_5.getGuildDismissedContentState(tmp3);
        flag2 = null != guildDismissedContentState && null != guildDismissedContentState[tmp] && true === guildDismissedContentState[tmp].dismissed;
        const tmp8 = null != guildDismissedContentState && null != guildDismissedContentState[tmp] && true === guildDismissedContentState[tmp].dismissed;
      }
      tmp2 = flag2;
      obj = dismissibleContent(outer1_2[12]);
      tmp3 = closure_1;
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
  obj = require(4031) /* useNewUserDismissibleContent */;
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
  obj = require(4031) /* useNewUserDismissibleContent */;
};
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(PASSWORDLESS_UPSELL, guildId, anyOverlayRenderingLocked, stateFromStores1) {
  let closure_0 = PASSWORDLESS_UPSELL;
  const importDefault = guildId;
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
        let obj = importDefault(709);
        obj = { type: "DCF_EVENT_LOGGED", eventType: null, dismissibleContent: null };
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
          let guildId;
          if (closure_1 != null) {
            guildId = tmp2.guildId;
          }
          PASSWORDLESS_UPSELL(outer1_2[16]).handleDCShownToUser(PASSWORDLESS_UPSELL, guildId);
          outer1_27(PASSWORDLESS_UPSELL, closure_1);
          if (closure_1 != null) {
            const onShown = tmp2.onShown;
            if (onShown != null) {
              onShown();
            }
          }
        };
        closure_8(obj);
        const tmp12 = closure_8;
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
export const getGuildNextNumTimesDismissed = function getGuildNextNumTimesDismissed(closure_0, closure_1) {
  const guildDismissedContentState = store.getGuildDismissedContentState(closure_1);
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
export const markTimeRecurringDismissibleContentAsDismissed = function markTimeRecurringDismissibleContentAsDismissed(outer1_15, arg1) {
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