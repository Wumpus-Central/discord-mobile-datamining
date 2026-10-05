// === Module 2038: DismissibleContentUtils ===

// Module 2038 (DismissibleContentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 2037 */;
import DCFEventStore from "DCFEventStore" /* 2039 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2041 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import VersionedDismissibleContentUtils from "VersionedDismissibleContentUtils" /* 2049 */;
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry" /* 4720 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10047 */;
import trackDismissibleContentActioned from "trackDismissibleContentActioned" /* 13806 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2040 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2042 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, c4, importDefault;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
function addVersionedDismissedContent(GUILD_POWERUP_NOTIFICATION, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed) {
  let str;
  obj = { lastDismissedVersion: versionedDismissibleContentCurrentVersion, lastDismissedAtMs: str.toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  const updateRecurringDismissibleContentState = UserSettingsProtoActionCreators.updateRecurringDismissibleContentState;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addTimeRecurringDismissedContent(GUILD_POWERUP_NOTIFICATION, nextNumTimesDismissed) {
  let str;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  const updateRecurringDismissibleContentState = UserSettingsProtoActionCreators.updateRecurringDismissibleContentState;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addSnowflakeBoundDismissedContent(GUILD_POWERUP_NOTIFICATION, lastDismissedObjectId, nextNumTimesDismissed1) {
  let str;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId, numTimesDismissed: nextNumTimesDismissed1 };
  const updateRecurringDismissibleContentState = UserSettingsProtoActionCreators.updateRecurringDismissibleContentState;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function markDismissibleContentAsDismissedPreProcessing(arg0, forceTrack) {
  const tmp = authStore(arg0) || forceTrack.forceTrack;
  if (tmp) {
    trackDismissibleContentDismissed(arg0, forceTrack);
  }
  const guildId = forceTrack.guildId;
  const handleDCDismissed = DismissibleContentFrameworkActionCreators.handleDCDismissed;
  DismissibleContentFrameworkActionCreators;
  handleDCDismissed(arg0, guildId);
}
function markDismissibleContentAsDismissedPostProcessing(content, groupName) {
  obj = { content, groupName };
  groupName = undefined;
  const tmp = !DismissibleContentFrameworkStore.hasUserHitDCCap();
  if (groupName != null) {
    groupName = groupName.groupName;
  }
  React4(obj, tmp);
}
let obj = function _markLatestVersionDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 1;
            const obj5 = { value: markVersionedDismissibleContentAsDismissed(closure_0, obj2.getVersionedDismissibleContentCurrentVersion(closure_0), closure_1), done: false };
            obj2 = require("VersionedDismissibleContentUtils");
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function getNextNumTimesDismissed(arg0, numTimesDismissed) {
  if (null != numTimesDismissed.numTimesDismissed) {
    return numTimesDismissed.numTimesDismissed;
  } else {
    const userContent = UserSettingsProtoStore.settings.userContent;
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
function markVersionedDismissibleContentAsDismissed() {
  return obj(...arguments);
}
obj = function _markVersionedDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
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
            const tmp15 = getNextNumTimesDismissed(closure_0, closure_2);
            markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2);
            c5 = 1;
            c6 = 1;
            const obj4 = { value: addVersionedDismissedContent(closure_0, closure_1, tmp15), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_132_20(closure_0, closure_1);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c6 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
obj = function _markSnowflakeBoundDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, snowflakeId, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              snowflakeId = closure_2;
              const obj4 = { snowflakeId };
              const tmp15 = getNextNumTimesDismissed(closure_0, closure_2);
              const merged = Object.assign(closure_2);
              markDismissibleContentAsDismissedPreProcessing(closure_0, obj4);
              c5 = 1;
              c6 = 1;
              const obj5 = { value: addSnowflakeBoundDismissedContent(closure_0, snowflakeId, tmp15), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_132_20(closure_0, snowflakeId);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          c6 = 3;
          throw tmp22;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _markTimeRecurringDismissibleContentAsDismissed() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            const tmp14 = getNextNumTimesDismissed(closure_0, closure_1);
            markDismissibleContentAsDismissedPreProcessing(closure_0, closure_1);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: addTimeRecurringDismissedContent(closure_0, tmp14), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_131_20(closure_0, closure_1);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c5 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET, groupName) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let guildId;
  let mapped;
  let snowflakeId;
  let tmp3;
  let tmp4;
  let version;
  let tmp = found;
  if (found === undefined) {
    tmp = null;
  }
  [tmp3, tmp4] = unpackModuleId();
  _slicedToArray(unpackModuleId(), 2);
  const tmp6 = AnalyticsUtilsDefault;
  const track = tmp6.track;
  const DISMISSIBLE_CONTENT_SHOWN = AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN;
  obj = { type: dismissible_content.DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET], unselected_content_types: mapped, content_count: tmp3, fatigable_content_count: tmp4, group_name: groupName, bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(WISHLIST_MOBILE_NUX_ACTION_SHEET), guild_id: guildId, version, snowflake_id: snowflakeId };
  mapped = undefined;
  if (tmp != null) {
    mapped = tmp.map((item) => require("dismissible_content").DismissibleContent[item]);
  }
  if (mapped == null) {
    mapped = null;
  }
  groupName = undefined;
  if (groupName != null) {
    groupName = groupName.groupName;
  }
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  guildId = undefined;
  if (groupName != null) {
    guildId = groupName.guildId;
  }
  version = undefined;
  if (groupName != null) {
    version = groupName.version;
  }
  snowflakeId = undefined;
  if (groupName != null) {
    snowflakeId = groupName.snowflakeId;
  }
  track(DISMISSIBLE_CONTENT_SHOWN, obj);
}
function trackDismissibleContentDismissed(arg0, dismissAction) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let dismissAction1;
  let groupName;
  let guildId1;
  let numTimesDismissed;
  let snowflakeId;
  let version;
  dismissAction = undefined;
  if (dismissAction != null) {
    dismissAction = dismissAction.dismissAction;
  }
  if (dismissAction === ContentDismissActionType.TAKE_ACTION) {
    obj = trackDismissibleContentActioned;
    const result = obj.trackDismissibleContentActioned(arg0, dismissAction);
  }
  const first = _slicedToArray(unpackModuleId(), 1)[0];
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(arg0);
  let diff = null;
  const date = new Date();
  if (null != renderedAtTimestamp) {
    diff = date.getTime() - renderedAtTimestamp;
  }
  let guildId;
  if (dismissAction != null) {
    guildId = dismissAction.guildId;
  }
  if (null != guildId) {
    const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(dismissAction.guildId);
    let tmp15;
    if (guildDismissedContentState != null) {
      tmp15 = guildDismissedContentState[arg0];
    }
    let num2;
    if (tmp15 != null) {
      num2 = tmp15.numTimesDismissed;
    }
    if (num2 == null) {
      num2 = 0;
    }
    numTimesDismissed = num2 + 1;
  } else {
    let obj2 = dismissAction;
    if (dismissAction == null) {
      obj2 = {};
    }
    if (null != obj2.numTimesDismissed) {
      numTimesDismissed = obj2.numTimesDismissed;
    } else {
      const userContent = UserSettingsProtoStore.settings.userContent;
      let tmp12;
      if (userContent != null) {
        tmp12 = userContent.recurringDismissibleContentStates[arg0];
      }
      let num;
      if (tmp12 != null) {
        num = tmp12.numTimesDismissed;
      }
      if (num == null) {
        num = 0;
      }
      numTimesDismissed = num + 1;
    }
  }
  const tmp17 = AnalyticsUtilsDefault;
  const track = tmp17.track;
  const DISMISSIBLE_CONTENT_DISMISSED = AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED;
  const obj3 = { type: dismissible_content.DismissibleContent[arg0], action: dismissAction1, content_count: first, group_name: groupName, bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0), guild_id: guildId1, shown_duration: diff, version, num_times_dismissed: numTimesDismissed, snowflake_id: snowflakeId };
  dismissAction1 = undefined;
  if (dismissAction != null) {
    dismissAction1 = dismissAction.dismissAction;
  }
  if (dismissAction1 == null) {
    dismissAction1 = ContentDismissActionType.UNKNOWN;
  }
  groupName = undefined;
  if (dismissAction != null) {
    groupName = dismissAction.groupName;
  }
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  guildId1 = undefined;
  if (dismissAction != null) {
    guildId1 = dismissAction.guildId;
  }
  version = undefined;
  if (dismissAction != null) {
    version = dismissAction.version;
  }
  snowflakeId = undefined;
  if (dismissAction != null) {
    snowflakeId = dismissAction.snowflakeId;
  }
  track(DISMISSIBLE_CONTENT_DISMISSED, obj3);
}
const DCFEventTypes = DCFEventStore.DCFEventTypes;
({ addCandidateContent: metroImportAll, removeCandidateContent: c9, isContentShown: c10, getCurrentlyShownCounts: unpackModuleId } = DismissibleContentShownStateStore);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const AnalyticEvents = Constants.AnalyticEvents;
let c14 = 2592000000;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function l() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let flag2 = true;
      obj = NewUserDismissibleContentRegistry;
      if (!obj.disableNewUserDismissibleContent(closure_0)) {
        const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(closure_1);
        flag2 = null != guildDismissedContentState && null != guildDismissedContentState[closure_0] && true === guildDismissedContentState[closure_0].dismissed;
      }
      tmp2 = flag2;
    }
    return tmp2;
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let flag2 = true;
      obj = NewUserDismissibleContentRegistry;
      if (!obj.disableNewUserDismissibleContent(closure_0)) {
        const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(closure_1);
        flag2 = null != guildDismissedContentState && null != guildDismissedContentState[closure_0] && true === guildDismissedContentState[closure_0].dismissed;
      }
      tmp2 = flag2;
    }
    return tmp2;
  });
});
class UNSAFE_isSingleUseGuildDismissibleContentDismissed {
  constructor(GDM_INVITE_REMINDER, guildId) {
    obj = NewUserDismissibleContentRegistry;
    if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
      return true;
    } else {
      const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
      return null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && true === guildDismissedContentState[GDM_INVITE_REMINDER].dismissed;
    }
  }
}
function isDismissibleContentBlockedByOverlay(found1, arg1, arg2) {
  let tmp = arg1;
  if (tmp) {
    const hasItem = null == arg2 && set.has(found1);
    tmp = !hasItem;
  }
  return tmp;
}
function getGuildNextNumTimesDismissed(arg0, stateFromStores) {
  const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(stateFromStores);
  let tmp2;
  if (guildDismissedContentState != null) {
    tmp2 = guildDismissedContentState[arg0];
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
let items = [dismissible_content.DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS, dismissible_content.DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK];
const set = new Set(items);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

export const SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = 2592000000;
export const getDismissedRecurringDismissibleContentState = function getDismissedRecurringDismissibleContentState(id) {
  let num2;
  let str;
  let str2;
  const userContent = UserSettingsProtoStore.settings.userContent;
  let tmp;
  if (userContent != null) {
    tmp = userContent.recurringDismissibleContentStates[id];
  }
  let num = 0;
  obj = DismissibleContentTypes;
  if (obj.isVersionedDismissibleContent(id)) {
    const tmp2Result = VersionedDismissibleContentUtils;
    num = tmp2Result.getVersionedDismissibleContentCurrentVersion(id);
  }
  const obj2 = { lastDismissedVersion: num, lastDismissedAtMs: str.toString(), lastDismissedObjectId: str2, numTimesDismissed: num2 };
  const date = new Date();
  str2 = "0";
  str = date.getTime();
  const tmp2Result2 = DismissibleContentTypes;
  if (tmp2Result2.isSnowflakeBoundDismissibleContent(id)) {
    const _Date = Date;
    const obj6 = SnowflakeUtilsDefault;
    str2 = obj6.fromTimestamp(Date.now() + c14);
  }
  num2 = undefined;
  if (tmp != null) {
    num2 = tmp.numTimesDismissed;
  }
  if (num2 == null) {
    num2 = 0;
  }
  return obj2;
};
export { addVersionedDismissedContent };
export { addTimeRecurringDismissedContent };
export { addSnowflakeBoundDismissedContent };
export const UNSAFE_addGuildDismissedContent = function UNSAFE_addGuildDismissedContent(arg0, stateFromStores, guildNextNumTimesDismissed) {
  let str;
  obj = { dismissed: true, lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId: "0", numTimesDismissed: guildNextNumTimesDismissed };
  const updateGuildDismissedContent = UserSettingsProtoActionCreators.updateGuildDismissedContent;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(arg0, stateFromStores, numTimesDismissed) {
  let str;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId: "0", numTimesDismissed };
  const updateGuildDismissedContent = UserSettingsProtoActionCreators.updateGuildDismissedContent;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(arg0, stateFromStores, guildNextNumTimesDismissed) {
  let str;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId: "0", numTimesDismissed: guildNextNumTimesDismissed };
  const updateGuildDismissedContent = UserSettingsProtoActionCreators.updateGuildDismissedContent;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(arg0, stateFromStores, numTimesDismissed) {
  obj = UserSettingsProtoActionCreators;
  const obj2 = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj2);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(arg0, lastDismissedObjectId, stateFromStores, guildNextNumTimesDismissed) {
  let str;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: str.toString(), lastDismissedObjectId, numTimesDismissed: guildNextNumTimesDismissed };
  const updateGuildDismissedContent = UserSettingsProtoActionCreators.updateGuildDismissedContent;
  UserSettingsProtoActionCreators;
  str = Date.now();
  return updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(arg0, stateFromStores, numTimesDismissed) {
  obj = UserSettingsProtoActionCreators;
  const obj2 = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj2);
};
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(id, latestVersion) {
  obj = NewUserDismissibleContentRegistry;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedVersion: null };
  } else {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let lastDismissedVersion;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[id] != null) {
        lastDismissedVersion = tmp6.lastDismissedVersion;
      }
    }
    let versionedDismissibleContentCurrentVersion = latestVersion;
    if (latestVersion == null) {
      const tmpResult = VersionedDismissibleContentUtils;
      versionedDismissibleContentCurrentVersion = tmpResult.getVersionedDismissibleContentCurrentVersion(id);
    }
    const obj2 = { isDismissed: tmp8, lastDismissedVersion };
    return obj2;
  }
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(id, cooldownConfig) {
  obj = NewUserDismissibleContentRegistry;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedAtMs: null };
  } else {
    const userContent = UserSettingsProtoStore.settings.userContent;
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
      return { isDismissed: false, lastDismissedAtMs: "a" };
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
      return { isDismissed: flag, lastDismissedAtMs: tmp5 };
    }
  }
};
export const isTimeRecurringSnowflakeBoundDismissibleContentDismissed = function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, id, cooldownDurationMs) {
  obj = NewUserDismissibleContentRegistry;
  if (obj.disableNewUserDismissibleContent(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)) {
    return true;
  } else {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let prop;
    if (userContent != null) {
      if (userContent.recurringDismissibleContentStates[THIRD_PARTY_OUTBOUND_PROMO_NAGBAR] != null) {
        prop = tmp5.lastDismissedObjectId;
      }
    }
    const userContent2 = UserSettingsProtoStore.settings.userContent;
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
        if (!Number.isNaN(Number(lastDismissedAtMs))) {
          const _Number3 = Number;
          Number(lastDismissedAtMs);
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
      const obj2 = SnowflakeUtilsDefault;
      tmp18 = 1 !== obj2.compare(id, prop);
    }
    if (flag) {
      flag = tmp18;
    }
    return flag;
  }
};
export { UNSAFE_isSingleUseGuildDismissibleContentDismissed };
export const useIsSingleUseGuildDismissibleContentDismissed = tmp3;
export const UNSAFE_isTimeRecurringGuildDismissibleContentDismissed = function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  obj = NewUserDismissibleContentRegistry;
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
    return null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs && "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
  }
};
export const UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed = function UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  obj = NewUserDismissibleContentRegistry;
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
    return null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId && "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
  }
};
export { isDismissibleContentBlockedByOverlay };
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(PASSWORDLESS_UPSELL, guildId, arg2, arg3) {
  let groupName;
  let closure_0 = PASSWORDLESS_UPSELL;
  importDefault = guildId;
  let hasUserHitDCCapResult = closure_10(PASSWORDLESS_UPSELL);
  if (!hasUserHitDCCapResult) {
    guildId = undefined;
    const hasUserHitDCCap = DismissibleContentFrameworkStore.hasUserHitDCCap;
    if (guildId != null) {
      guildId = guildId.guildId;
    }
    hasUserHitDCCapResult = hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId);
  }
  if (!hasUserHitDCCapResult) {
    let flag = arg2;
    if (arg2 == null) {
      flag = false;
    }
    let tmp6 = arg3;
    if (arg3 == null) {
      tmp6 = null;
    }
    if (flag) {
      const hasItem = null == tmp6 && set.has(PASSWORDLESS_UPSELL);
      flag = !hasItem;
    }
    hasUserHitDCCapResult = flag;
  }
  if (!hasUserHitDCCapResult) {
    const obj2 = { type: "DCF_EVENT_LOGGED", eventType: DCFEventTypes.DC_SHOW_REQUEST, dismissibleContent: PASSWORDLESS_UPSELL };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
    const obj3 = {
      content: PASSWORDLESS_UPSELL,
      groupName,
      onAdded(found) {
          guildId = undefined;
          const handleDCShownToUser = DismissibleContentFrameworkActionCreators.handleDCShownToUser;
          DismissibleContentFrameworkActionCreators;
          if (guildId != null) {
            guildId = guildId.guildId;
          }
          handleDCShownToUser(PASSWORDLESS_UPSELL, guildId);
          trackDismissibleContentShown(PASSWORDLESS_UPSELL, guildId, found);
          if (guildId != null) {
            const onShown = guildId.onShown;
            if (onShown != null) {
              onShown();
            }
          }
        }
    };
    groupName = undefined;
    if (guildId != null) {
      groupName = guildId.groupName;
    }
    closure_8(obj3);
  }
};
export { markDismissibleContentAsDismissedPreProcessing };
export { markDismissibleContentAsDismissedPostProcessing };
export const markLatestVersionDismissibleContentAsDismissed = function markLatestVersionDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export { getGuildNextNumTimesDismissed };
export { getNextNumTimesDismissed };
export { markVersionedDismissibleContentAsDismissed };
export const markSnowflakeBoundDismissibleContentAsDismissed = function markSnowflakeBoundDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export const markTimeRecurringDismissibleContentAsDismissed = function markTimeRecurringDismissibleContentAsDismissed() {
  return obj(...arguments);
};
export { trackDismissibleContentShown };
export { trackDismissibleContentDismissed };