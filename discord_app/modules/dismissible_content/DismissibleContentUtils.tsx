// discord_app/modules/dismissible_content/DismissibleContentUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentTypes from "DismissibleContentTypes.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry.tsx";
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

const VersionedDismissibleContentUtils = tmp(1955);
require = fn;
function addVersionedDismissedContent(
  GUILD_POWERUP_NOTIFICATION,
  versionedDismissibleContentCurrentVersion,
  nextNumTimesDismissed,
) {
  const obj = {
    lastDismissedVersion: versionedDismissibleContentCurrentVersion,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: nextNumTimesDismissed,
  };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addTimeRecurringDismissedContent(GUILD_POWERUP_NOTIFICATION, nextNumTimesDismissed) {
  const obj = {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: nextNumTimesDismissed,
  };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addSnowflakeBoundDismissedContent(GUILD_POWERUP_NOTIFICATION, lastDismissedObjectId, nextNumTimesDismissed1) {
  const obj = {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId,
    numTimesDismissed: nextNumTimesDismissed1,
  };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function markDismissibleContentAsDismissedPreProcessing(arg0, forceTrack) {
  if (tmp) {
    trackDismissibleContentDismissed(arg0, forceTrack);
  }
  tmp = closure_1_10(arg0) || forceTrack.forceTrack;
  const guildId = forceTrack.guildId;
  DismissibleContentFrameworkActionCreators.handleDCDismissed(arg0, guildId);
}
function markDismissibleContentAsDismissedPostProcessing(content, groupName) {
  const obj = { content, groupName: null };
  groupName = undefined;
  if (groupName != null) {
    groupName = groupName.groupName;
  }
  obj.groupName = groupName;
  React7(obj, !DismissibleContentFrameworkStore.hasUserHitDCCap());
}
let closure_21 = async function _markLatestVersionDismissibleContentAsDismissed(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = require("VersionedDismissibleContentUtils");
          c3 = 1;
          c2 = 1;
          obj1 = { value: null, done: false };
          obj1.value = markVersionedDismissibleContentAsDismissed(
            closure_0,
            obj1.getVersionedDismissibleContentCurrentVersion(closure_0),
            closure_1,
          );
          return obj1;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
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
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _markVersionedDismissibleContentAsDismissed(arg0, value) {
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
          markDismissibleContentAsDismissedPreProcessing(closure_0, closure_2);
          c5 = 1;
          c6 = 1;
          const obj1 = {
            value: addVersionedDismissedContent(closure_0, closure_1, getNextNumTimesDismissed(closure_0, closure_2)),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_132_20(closure_131_0, closure_131_1);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp20) {
      c6 = tmp;
      throw tmp20;
    }
  }
};
let closure_25 = async function _markSnowflakeBoundDismissibleContentAsDismissed(arg0, snowflakeId, arg2) {
  closure_0 = arg0;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
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
            const obj1 = {};
            const merged = Object.assign(closure_2);
            obj1.snowflakeId = snowflakeId;
            markDismissibleContentAsDismissedPreProcessing(closure_0, obj1);
            c5 = 1;
            c6 = 1;
            const obj2 = {
              value: addSnowflakeBoundDismissedContent(
                closure_0,
                snowflakeId,
                getNextNumTimesDismissed(closure_0, closure_2),
              ),
              done: false,
            };
            return obj2;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_132_20(closure_131_0, closure_131_1);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp23) {
        c6 = tmp;
        throw tmp23;
      }
    }
  })();
};
let closure_26 = async function _markTimeRecurringDismissibleContentAsDismissed(arg0, value) {
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
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          markDismissibleContentAsDismissedPreProcessing(closure_0, closure_1);
          c4 = 1;
          c5 = 1;
          const obj1 = {
            value: addTimeRecurringDismissedContent(closure_0, getNextNumTimesDismissed(closure_0, closure_1)),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_131_20(closure_130_0, closure_130_1);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET, groupName, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  [tmp3, tmp4] = _slicedToArray(closure_1_11(), 2);
  const obj = {
    type: dismissible_content.DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET],
    unselected_content_types: null,
    content_count: null,
    fatigable_content_count: null,
    group_name: null,
    bypass_fatigue: null,
    guild_id: null,
    version: null,
    snowflake_id: null,
  };
  let mapped;
  if (tmp != null) {
    mapped = tmp.map((item) => require("dismissible_content").DismissibleContent[item]);
  }
  if (mapped == null) {
    mapped = null;
  }
  obj.unselected_content_types = mapped;
  obj.content_count = tmp3;
  obj.fatigable_content_count = tmp4;
  groupName = undefined;
  if (groupName != null) {
    groupName = groupName.groupName;
  }
  obj.group_name = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(WISHLIST_MOBILE_NUX_ACTION_SHEET);
  let guildId;
  if (groupName != null) {
    guildId = groupName.guildId;
  }
  obj.guild_id = guildId;
  let version;
  if (groupName != null) {
    version = groupName.version;
  }
  obj.version = version;
  let snowflakeId;
  if (groupName != null) {
    snowflakeId = groupName.snowflakeId;
  }
  obj.snowflake_id = snowflakeId;
  obj.track(AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, obj);
}
function trackDismissibleContentDismissed(arg0, guildId) {
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(arg0);
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
    const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId.guildId);
    let tmp9;
    if (guildDismissedContentState != null) {
      tmp9 = guildDismissedContentState[arg0];
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
      const userContent = UserSettingsProtoStore.settings.userContent;
      let tmp6;
      if (userContent != null) {
        tmp6 = userContent.recurringDismissibleContentStates[arg0];
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
  obj = {
    type: dismissible_content.DismissibleContent[arg0],
    action: null,
    content_count: null,
    group_name: null,
    bypass_fatigue: null,
    guild_id: null,
    shown_duration: null,
    version: null,
    num_times_dismissed: null,
    snowflake_id: null,
  };
  let dismissAction;
  if (guildId != null) {
    dismissAction = guildId.dismissAction;
  }
  if (dismissAction == null) {
    dismissAction = ContentDismissActionType.UNKNOWN;
  }
  obj.action = dismissAction;
  obj.content_count = _slicedToArray(closure_1_11(), 1)[0];
  let groupName;
  if (guildId != null) {
    groupName = guildId.groupName;
  }
  obj.group_name = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  let guildId1;
  if (guildId != null) {
    guildId1 = guildId.guildId;
  }
  obj.guild_id = guildId1;
  obj.shown_duration = diff;
  let version;
  if (guildId != null) {
    version = guildId.version;
  }
  obj.version = version;
  obj.num_times_dismissed = numTimesDismissed;
  let snowflakeId;
  if (guildId != null) {
    snowflakeId = guildId.snowflakeId;
  }
  obj.snowflake_id = snowflakeId;
  AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
}
const DCFEventTypes = fn(1946).DCFEventTypes;
const DismissibleContentShownStateStore = fn(1949);
({
  addCandidateContent: closure_8,
  removeCandidateContent: closure_9,
  isContentShown: c10,
  getCurrentlyShownCounts: closure_11,
} = DismissibleContentShownStateStore);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const AnalyticEvents = fn(1074).AnalyticEvents;
let c14 = 2592000000;
let items = [
  fn(1943).DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS,
  fn(1943).DismissibleContent.ACCOUNT_LINK_PROMPT,
  fn(1943).DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

export const SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = 2592000000;
export const getDismissedRecurringDismissibleContentState = function getDismissedRecurringDismissibleContentState(id) {
  const userContent = UserSettingsProtoStore.settings.userContent;
  let tmp;
  if (userContent != null) {
    tmp = userContent.recurringDismissibleContentStates[id];
  }
  let obj = DismissibleContentTypes;
  let num = 0;
  if (obj.isVersionedDismissibleContent(id)) {
    let tmp2Result = tmp2(1955);
    num = tmp2Result.getVersionedDismissibleContentCurrentVersion(id);
  }
  obj = { lastDismissedVersion: num, lastDismissedAtMs: null, lastDismissedObjectId: null, numTimesDismissed: null };
  const date = new Date();
  obj.lastDismissedAtMs = new Date().getTime().toString();
  tmp2Result = tmp2(1944);
  let str2 = "0";
  if (tmp2Result.isSnowflakeBoundDismissibleContent(id)) {
    const _Date = Date;
    str2 = SnowflakeUtilsDefault.fromTimestamp(Date.now() + c14);
  }
  obj.lastDismissedObjectId = str2;
  let num2;
  if (tmp != null) {
    num2 = tmp.numTimesDismissed;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj.numTimesDismissed = num2;
  return obj;
};
export { addVersionedDismissedContent };
export { addTimeRecurringDismissedContent };
export { addSnowflakeBoundDismissedContent };
export const UNSAFE_addGuildDismissedContent = function UNSAFE_addGuildDismissedContent(
  arg0,
  stateFromStores,
  guildNextNumTimesDismissed,
) {
  const obj = {
    dismissed: true,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: guildNextNumTimesDismissed,
  };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(
  arg0,
  stateFromStores,
  numTimesDismissed,
) {
  const obj = {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed,
  };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(
  arg0,
  stateFromStores,
  guildNextNumTimesDismissed,
) {
  const obj = {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: guildNextNumTimesDismissed,
  };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(
  arg0,
  stateFromStores,
  numTimesDismissed,
) {
  const obj = {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed,
  };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(
  arg0,
  lastDismissedObjectId,
  stateFromStores,
  guildNextNumTimesDismissed,
) {
  const obj = {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId,
    numTimesDismissed: guildNextNumTimesDismissed,
  };
  return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent =
  function UNSAFE_removeSnowflakeBoundGuildDismissedContent(arg0, stateFromStores, numTimesDismissed) {
    const obj = {
      dismissed: false,
      lastDismissedVersion: 0,
      lastDismissedAtMs: "0",
      lastDismissedObjectId: "0",
      numTimesDismissed,
    };
    return obj.updateGuildDismissedContent(arg0, stateFromStores, obj);
  };
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(
  id,
  latestVersion,
) {
  let obj = NewUserDismissibleContentRegistry;
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
      versionedDismissibleContentCurrentVersion =
        VersionedDismissibleContentUtils.getVersionedDismissibleContentCurrentVersion(id);
      const tmpResult = VersionedDismissibleContentUtils;
    }
    obj = {
      isDismissed: null != lastDismissedVersion && lastDismissedVersion >= versionedDismissibleContentCurrentVersion,
      lastDismissedVersion,
    };
    return obj;
  }
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(
  id,
  cooldownConfig,
) {
  let obj = NewUserDismissibleContentRegistry;
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
      return { isDismissed: false, lastDismissedAtMs: "PX_16" };
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
      obj = { isDismissed: flag, lastDismissedAtMs: tmp5 };
      return obj;
    }
  }
};
export const isTimeRecurringSnowflakeBoundDismissibleContentDismissed =
  function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
    THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
    id,
    cooldownDurationMs,
  ) {
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
            const tmp16 =
              timestamp >= cooldownDurationMs.showAfterTimestamp && tmp8 <= cooldownDurationMs.showAfterTimestamp;
          }
          flag = timestamp < sum || !tmp15;
          const tmp17 = timestamp < sum || !tmp15;
        }
      }
      let tmp18 = null != prop;
      if (tmp18) {
        tmp18 = 1 !== SnowflakeUtilsDefault.compare(id, prop);
      }
      if (flag) {
        flag = tmp18;
      }
      return flag;
    }
    obj = NewUserDismissibleContentRegistry;
  };
export const UNSAFE_isSingleUseGuildDismissibleContentDismissed =
  function UNSAFE_isSingleUseGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
    if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
      return true;
    } else {
      const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
      let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER];
      if (tmp5) {
        tmp5 = true === guildDismissedContentState[GDM_INVITE_REMINDER].dismissed;
      }
      return tmp5;
    }
    obj = NewUserDismissibleContentRegistry;
  };
export const useIsSingleUseGuildDismissibleContentDismissed = function useIsSingleUseGuildDismissibleContentDismissed(
  dismissibleContent,
  arg1,
) {
  _require = dismissibleContent;
  closure_1 = arg1;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let flag2 = true;
      if (!obj.disableNewUserDismissibleContent(tmp)) {
        const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(tmp3);
        flag2 =
          null != guildDismissedContentState &&
          null != guildDismissedContentState[tmp] &&
          true === guildDismissedContentState[tmp].dismissed;
        const tmp8 =
          null != guildDismissedContentState &&
          null != guildDismissedContentState[tmp] &&
          true === guildDismissedContentState[tmp].dismissed;
      }
      tmp2 = flag2;
      obj = NewUserDismissibleContentRegistry;
      tmp3 = closure_1;
    }
    return tmp2;
  });
};
export const UNSAFE_isTimeRecurringGuildDismissibleContentDismissed =
  function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
    if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
      return true;
    } else {
      const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
      let tmp5 =
        null != guildDismissedContentState &&
        null != guildDismissedContentState[GDM_INVITE_REMINDER] &&
        null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
      if (tmp5) {
        tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
      }
      return tmp5;
    }
    obj = NewUserDismissibleContentRegistry;
  };
export const UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed =
  function UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
    if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
      return true;
    } else {
      const guildDismissedContentState = UserSettingsProtoStore.getGuildDismissedContentState(guildId);
      let tmp5 =
        null != guildDismissedContentState &&
        null != guildDismissedContentState[GDM_INVITE_REMINDER] &&
        null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
      if (tmp5) {
        tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
      }
      return tmp5;
    }
    obj = NewUserDismissibleContentRegistry;
  };
export const isDismissibleContentBlockedByOverlay = function isDismissibleContentBlockedByOverlay(found1, arg1, arg2) {
  let tmp = arg1;
  if (arg1) {
    let hasItem = null == arg2;
    if (hasItem) {
      hasItem = set.has(found1);
    }
    tmp = !hasItem;
  }
  return tmp;
};
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(
  PASSWORDLESS_UPSELL,
  guildId,
  arg2,
  arg3,
) {
  closure_0 = PASSWORDLESS_UPSELL;
  importDefault = guildId;
  let hasUserHitDCCapResult = closure_10(PASSWORDLESS_UPSELL);
  if (!hasUserHitDCCapResult) {
    guildId = undefined;
    if (guildId != null) {
      guildId = guildId.guildId;
    }
    hasUserHitDCCapResult = DismissibleContentFrameworkStore.hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId);
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
      let hasItem = null == tmp6;
      if (hasItem) {
        hasItem = set.has(PASSWORDLESS_UPSELL);
      }
      flag = !hasItem;
    }
    hasUserHitDCCapResult = flag;
  }
  if (!hasUserHitDCCapResult) {
    let obj = {
      type: "DCF_EVENT_LOGGED",
      eventType: DCFEventTypes.DC_SHOW_REQUEST,
      dismissibleContent: PASSWORDLESS_UPSELL,
    };
    obj.dispatch(obj);
    obj = { content: PASSWORDLESS_UPSELL, groupName: null, onAdded: null };
    let groupName;
    if (guildId != null) {
      groupName = guildId.groupName;
    }
    obj.groupName = groupName;
    obj.onAdded = function onAdded(arg0) {
      guildId = undefined;
      if (closure_1 != null) {
        guildId = tmp2.guildId;
      }
      DismissibleContentFrameworkActionCreators.handleDCShownToUser(closure_0, guildId);
      trackDismissibleContentShown(closure_0, closure_1, arg0);
      if (closure_1 != null) {
        const onShown = tmp2.onShown;
        if (onShown != null) {
          onShown();
        }
      }
    };
    closure_8(obj);
  }
};
export { markDismissibleContentAsDismissedPreProcessing };
export { markDismissibleContentAsDismissedPostProcessing };
export const markLatestVersionDismissibleContentAsDismissed =
  function markLatestVersionDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_21.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const getGuildNextNumTimesDismissed = function getGuildNextNumTimesDismissed(arg0, stateFromStores) {
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
};
export { getNextNumTimesDismissed };
export { markVersionedDismissibleContentAsDismissed };
export const markSnowflakeBoundDismissibleContentAsDismissed =
  function markSnowflakeBoundDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_25.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const markTimeRecurringDismissibleContentAsDismissed =
  function markTimeRecurringDismissibleContentAsDismissed() {
    const self = this;
    const apply = closure_26.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export { trackDismissibleContentShown };
export { trackDismissibleContentDismissed };
