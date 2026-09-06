// discord_app/modules/dismissible_content/useGetDismissibleContent.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../user_settings/UserSettingsProtoStore.tsx";
import closure_6 from "../../stores/SelectedGuildStore.tsx";
import closure_7 from "DismissibleContentFrameworkStore.tsx";
import closure_8 from "DismissibleContentShownStateStore.tsx";
import { removeCandidateContent } from "DismissibleContentShownStateStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useNewUserDismissibleContent } from "NewUserDismissibleContentRegistry.tsx";

const require = arg1;
function useGetVisibleContent(contentType, stateFromStores, GUILD_HEADER_TOOLTIPS, latestVersion, newSnowflakeId) {
  const _require = contentType;
  closure_1 = stateFromStores;
  dependencyMap = GUILD_HEADER_TOOLTIPS;
  const callback = latestVersion;
  const React = newSnowflakeId;
  const tmp = callback2((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const tmp4 = callback(require("../overlay/OverlayTrackingUtils.native.tsx").useOverlayLockState(), 2);
  const first = tmp4[0];
  closure_6 = tmp6;
  let result = null != contentType;
  if (result) {
    let tmp2Result = tmp2(1945);
    result = tmp2Result.isDismissibleContentBlockedByOverlay(contentType, first, tmp6);
  }
  tmp2Result = tmp2(504);
  const items = [ref];
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = ref.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items1 = [contentType, GUILD_HEADER_TOOLTIPS, stateFromStores, result, latestVersion, newSnowflakeId];
  const effect = React.useEffect(() => {
    if (null != contentType) {
      if (!first.hasLoaded(closure_1_11.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = stateFromStores(GUILD_HEADER_TOOLTIPS[8]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = contentType(GUILD_HEADER_TOOLTIPS[9]).DismissibleContent[tmp];
        if (GUILD_HEADER_TOOLTIPS == null) {
          tmp6 = null;
        }
        obj[1] = tmp6;
        if (tmp7 == null) {
          tmp7 = null;
        }
        obj[2] = tmp7;
        if (current == null) {
          current = null;
        }
        obj[3] = current;
        if (tmp8 == null) {
          tmp8 = null;
        }
        obj[4] = tmp8;
        obj.track(closure_1_10.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = contentType(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, first, closure_6);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_9(obj, !closure_1_7.hasUserHitDCCap());
        }
      };
    }
  }, items1);
  let tmp11 = null;
  if (tmp) {
    tmp11 = null;
    if (null != contentType) {
      tmp11 = contentType;
    }
  }
  return tmp11;
}
function canShowTimeRecurringContent(arg0, lastDismissedAtMs, numTimesDismissed, cooldownDurationMs) {
  let tmp;
  if (null != lastDismissedAtMs) {
    const _Number = Number;
    const _Number2 = Number;
    let NumberResult;
    if (!Number.isNaN(Number(lastDismissedAtMs))) {
      const _Number3 = Number;
      NumberResult = Number(lastDismissedAtMs);
    }
    tmp = NumberResult;
  }
  let num = 0;
  if (undefined !== tmp) {
    num = tmp + cooldownDurationMs.cooldownDurationMs;
  }
  const timestamp = Date.now();
  let tmp5 = null == cooldownDurationMs.showAfterTimestamp;
  if (!tmp5) {
    let tmp6 = timestamp >= cooldownDurationMs.showAfterTimestamp;
    if (tmp6) {
      let num2 = tmp;
      if (tmp == null) {
        num2 = 0;
      }
      tmp6 = num2 <= cooldownDurationMs.showAfterTimestamp;
    }
    tmp5 = tmp6;
  }
  let tmp7 = null == cooldownDurationMs.numTimesToRecur || 0 === cooldownDurationMs.numTimesToRecur;
  if (!tmp7) {
    tmp7 = null == numTimesDismissed;
  }
  if (!tmp7) {
    tmp7 = numTimesDismissed < cooldownDurationMs.numTimesToRecur;
  }
  let hasLoadedResult = closure_5.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
  if (!hasLoadedResult) {
    hasLoadedResult = null != tmp && null != numTimesDismissed;
    const tmp9 = null != tmp && null != numTimesDismissed;
  }
  if (hasLoadedResult) {
    hasLoadedResult = arg0;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp5;
  }
  if (hasLoadedResult) {
    hasLoadedResult = null == tmp || timestamp >= num;
    const tmp10 = null == tmp || timestamp >= num;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp7;
  }
  return hasLoadedResult;
}
let closure_13 = {};
let result = require("set").fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = function useGetDismissibleContent(items3, APP_LAUNCHER_ONBOARDING) {
  const _require = APP_LAUNCHER_ONBOARDING;
  const items = [closure_5];
  const stateFromStores = _require(stateFromStores1[12]).useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj = _require(stateFromStores1[12]);
  const items1 = [closure_6];
  stateFromStores1 = _require(stateFromStores1[12]).useStateFromStores(items1, () => guildId.getGuildId());
  const obj2 = _require(stateFromStores1[12]);
  const newUserDismissibleContent = _require(stateFromStores1[13]).useNewUserDismissibleContent(items3);
  let found1 = null;
  if (closure_5.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((closure_0) => {
      let tmp2 = null == stateFromStores;
      if (!tmp2) {
        tmp2 = !APP_LAUNCHER_ONBOARDING(stateFromStores1[14]).hasBit(tmp, closure_0);
        const obj = APP_LAUNCHER_ONBOARDING(stateFromStores1[14]);
      }
      return tmp2;
    });
    found1 = found;
    let tmp3 = found;
  } else {
    tmp3 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find(
        (closure_0) => !APP_LAUNCHER_ONBOARDING(stateFromStores1[14]).hasBit(stateFromStores, closure_0),
      );
      tmp3 = found1;
    }
  }
  const items2 = [useGetVisibleContent(tmp3, stateFromStores1, APP_LAUNCHER_ONBOARDING)];
  items3 = [tmp3, APP_LAUNCHER_ONBOARDING, stateFromStores1];
  items2[1] = React.useCallback((arg0, arg1) => {
    if (null != found1) {
      let obj = APP_LAUNCHER_ONBOARDING(stateFromStores1[15]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = APP_LAUNCHER_ONBOARDING;
      obj[2] = stateFromStores1;
      obj[3] = arg1;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj);
    }
  }, items3);
  return items2;
};
export const useGetVersionedDismissibleContent = function useGetVersionedDismissibleContent(
  COLLECTIBLES_SHOP_ENTRY_MARKETING,
  latestVersion,
  groupName,
) {
  let _require = latestVersion;
  closure_1 = groupName;
  _require = COLLECTIBLES_SHOP_ENTRY_MARKETING;
  const items = [closure_5];
  const lastDismissedVersion = _require(stateFromStores[12]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = closure_1_5.settings.userContent;
      let tmp4;
      if (userContent != null) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (recurringDismissibleContentStates != null) {
          tmp4 = recurringDismissibleContentStates[tmp];
        }
      }
      tmp2 = tmp4;
    }
    if (tmp2 == null) {
      tmp2 = closure_1_13;
    }
    return tmp2;
  }).lastDismissedVersion;
  let obj = _require(stateFromStores[12]);
  const obj2 = closure_5;
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [closure_6];
  stateFromStores = _require(stateFromStores[12]).useStateFromStores(items1, () => guildId.getGuildId());
  closure_3 = null;
  let tmp4 = null;
  if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
    let result = tmp(tmp2[13]).disableNewUserDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp9 = null;
      if (!result) {
        if (null == lastDismissedVersion) {
          tmp9 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
        } else {
          tmp9 = null;
        }
      }
      closure_3 = tmp9;
      tmp4 = tmp9;
    } else {
      tmp4 = null;
      if (null != lastDismissedVersion) {
        let tmp8 = null;
        if (!result) {
          tmp8 = null;
          if (lastDismissedVersion < latestVersion) {
            tmp8 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
          }
        }
        closure_3 = tmp8;
        tmp4 = tmp8;
      }
    }
    const tmpResult = tmp(tmp2[13]);
  }
  const items2 = [useGetVisibleContent(tmp4, stateFromStores, groupName, latestVersion)];
  const items3 = [tmp4, groupName, stateFromStores, latestVersion];
  items2[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = COLLECTIBLES_SHOP_ENTRY_MARKETING(stateFromStores[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null, version: null };
      obj[0] = arg0;
      obj[1] = closure_1;
      obj[2] = stateFromStores;
      obj[3] = arg1;
      obj[4] = COLLECTIBLES_SHOP_ENTRY_MARKETING;
      const result = obj.markVersionedDismissibleContentAsDismissed(tmp, COLLECTIBLES_SHOP_ENTRY_MARKETING, obj);
    }
  }, items3);
  return items2;
};
export const useGetTimeRecurringDismissibleContent = function useGetTimeRecurringDismissibleContent(
  prop,
  closure_12,
  groupName,
) {
  const _require = prop;
  const items = [closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null !== closure_0) {
        const userContent = closure_1_5.settings.userContent;
        let tmp4;
        if (userContent != null) {
          const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
          if (recurringDismissibleContentStates != null) {
            tmp4 = recurringDismissibleContentStates[tmp];
          }
        }
        tmp2 = tmp4;
      }
      if (tmp2 == null) {
        tmp2 = closure_1_13;
      }
      return tmp2;
    },
  );
  ({ lastDismissedAtMs, numTimesDismissed } = stateFromStores);
  let obj = initialize;
  const tmp = _require;
  const items1 = [closure_6];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items1,
    () => guildId.getGuildId(),
  );
  dependencyMap = null;
  let tmp5 = null;
  if (null != prop) {
    let tmp10 = null;
    if (
      canShowTimeRecurringContent(
        !tmpResult.disableNewUserDismissibleContent(prop),
        lastDismissedAtMs,
        numTimesDismissed,
        closure_12,
      )
    ) {
      tmp10 = prop;
    }
    dependencyMap = tmp10;
    tmp5 = tmp10;
    tmpResult = tmp(4402);
  }
  const items2 = [useGetVisibleContent(tmp5, stateFromStores1, groupName)];
  const items3 = [tmp5, groupName, stateFromStores1];
  items2[1] = React.useCallback((arg0, arg1) => {
    if (null != prop2) {
      let obj = prop(prop2[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = prop;
      obj[2] = stateFromStores1;
      obj[3] = arg1;
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp, obj);
    }
  }, items3);
  return items2;
};
export const useGetSnowflakeBoundDismissibleContent = function useGetSnowflakeBoundDismissibleContent(
  prop,
  newSnowflakeId,
  groupName,
) {
  let _require = newSnowflakeId;
  importDefault = groupName;
  _require = prop;
  const items = [closure_5];
  const lastDismissedObjectId = _require(stateFromStores[12]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = closure_1_5.settings.userContent;
      let tmp4;
      if (userContent != null) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (recurringDismissibleContentStates != null) {
          tmp4 = recurringDismissibleContentStates[tmp];
        }
      }
      tmp2 = tmp4;
    }
    if (tmp2 == null) {
      tmp2 = closure_1_13;
    }
    return tmp2;
  }).lastDismissedObjectId;
  let obj = _require(stateFromStores[12]);
  const obj2 = closure_5;
  const tmp = _require;
  const items1 = [closure_6];
  stateFromStores = _require(stateFromStores[12]).useStateFromStores(items1, () => guildId.getGuildId());
  closure_3 = null;
  let tmp4 = null;
  if (null != prop) {
    let result = tmp(tmp2[13]).disableNewUserDismissibleContent(prop);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp10 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp10 = prop;
        } else {
          tmp10 = null;
          const obj6 = importDefault(tmp2[16]);
        }
      }
      closure_3 = tmp10;
      tmp4 = tmp10;
    } else {
      tmp4 = null;
      if (null != lastDismissedObjectId) {
        let tmp8 = null;
        if (!result) {
          tmp8 = null;
          if (1 === obj5.compare(newSnowflakeId, lastDismissedObjectId)) {
            tmp8 = prop;
          }
          obj5 = importDefault(tmp2[16]);
        }
        closure_3 = tmp8;
        tmp4 = tmp8;
      }
    }
    const tmpResult = tmp(tmp2[13]);
  }
  const items2 = [useGetVisibleContent(tmp4, stateFromStores, groupName, undefined, newSnowflakeId)];
  const items3 = [tmp4, groupName, stateFromStores, newSnowflakeId];
  items2[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = prop(stateFromStores[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = closure_1;
      obj[2] = stateFromStores;
      obj[3] = arg1;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, prop, obj);
    }
  }, items3);
  return items2;
};
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE =
  function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(
    prop,
    newSnowflakeId,
    stateFromStores,
    GUILD_HEADER_TOOLTIPS,
  ) {
    const _require = newSnowflakeId;
    importDefault = stateFromStores;
    dependencyMap = GUILD_HEADER_TOOLTIPS;
    const items = [closure_5];
    stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () =>
      closure_1_5.getGuildDismissedContentState(closure_1),
    );
    let tmp4 = null;
    if (null != prop) {
      let tmp5 = null;
      if (null != stateFromStores) {
        let tmp6;
        if (stateFromStores != null) {
          tmp6 = stateFromStores[prop];
        }
        tmp5 = tmp6;
      }
      tmp4 = tmp5;
    }
    if (tmp4 != null) {
      const lastDismissedObjectId = tmp4.lastDismissedObjectId;
    }
    closure_3 = null;
    let tmp7 = null;
    if (null != prop) {
      let result = require("NewUserDismissibleContentRegistry.tsx").disableNewUserDismissibleContent(prop);
      if (closure_5.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let tmp13 = null;
        if (!result) {
          if (null == lastDismissedObjectId) {
            tmp13 = prop;
          } else {
            tmp13 = null;
            const obj5 = DISCORD_EPOCHDefault;
          }
        }
        closure_3 = tmp13;
        tmp7 = tmp13;
      } else {
        tmp7 = null;
        if (null != lastDismissedObjectId) {
          let tmp11 = null;
          if (!result) {
            tmp11 = null;
            if (1 === obj4.compare(newSnowflakeId, lastDismissedObjectId)) {
              tmp11 = prop;
            }
            obj4 = DISCORD_EPOCHDefault;
          }
          closure_3 = tmp11;
          tmp7 = tmp11;
        }
      }
      const tmpResult = useNewUserDismissibleContent;
    }
    const items1 = [useGetVisibleContent(tmp7, stateFromStores, GUILD_HEADER_TOOLTIPS, undefined, newSnowflakeId)];
    const items2 = [tmp7, GUILD_HEADER_TOOLTIPS, stateFromStores, newSnowflakeId];
    items1[1] = React.useCallback((arg0, arg1) => {
      if (null != closure_3) {
        let obj = newSnowflakeId(GUILD_HEADER_TOOLTIPS[15]);
        obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
        obj[0] = arg0;
        obj[1] = GUILD_HEADER_TOOLTIPS;
        obj[2] = closure_1;
        obj[3] = arg1;
        const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
          tmp,
          newSnowflakeId,
          closure_1,
          obj,
        );
      }
    }, items2);
    return items1;
  };
export const useGetTimeRecurringSnowflakeBoundDismissibleContent =
  function useGetTimeRecurringSnowflakeBoundDismissibleContent(
    contentType,
    timeRecurringConfig,
    newSnowflakeId,
    groupName,
  ) {
    const _require = newSnowflakeId;
    closure_1 = groupName;
    const items = [closure_6];
    stateFromStores = _require(stateFromStores[12]).useStateFromStores(items, () => guildId.getGuildId());
    closure_3 = null;
    let result = null == contentType;
    if (!result) {
      result = _require(stateFromStores[11]).isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
        contentType,
        newSnowflakeId,
        timeRecurringConfig,
      );
      const tmpResult = _require(stateFromStores[11]);
    }
    let tmp6 = null;
    if (!result) {
      closure_3 = contentType;
      tmp6 = contentType;
    }
    const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, newSnowflakeId)];
    const items2 = [tmp6, groupName, stateFromStores, newSnowflakeId];
    items1[1] = React.useCallback((arg0, arg1) => {
      if (null != closure_3) {
        let obj = newSnowflakeId(stateFromStores[11]);
        obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
        obj[0] = arg0;
        obj[1] = closure_1;
        obj[2] = stateFromStores;
        obj[3] = arg1;
        const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, newSnowflakeId, obj);
      }
    }, items2);
    return items1;
  };
export const useGetSingleUseGuildDismissibleContent_UNSAFE = function useGetSingleUseGuildDismissibleContent_UNSAFE(
  items4,
  id,
  CHANNEL_NOTICES,
) {
  const _require = id;
  closure_1 = CHANNEL_NOTICES;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[12]).useStateFromStores(items, () =>
    closure_1_5.getGuildDismissedContentState(closure_0),
  );
  let obj = _require(stateFromStores[12]);
  const newUserDismissibleContent = _require(stateFromStores[13]).useNewUserDismissibleContent(items4);
  let found1 = null;
  if (closure_5.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((arg0) => {
      let tmp2 = null == stateFromStores || null == tmp[arg0];
      if (!tmp2) {
        tmp2 = false === tmp[arg0].dismissed;
      }
      return tmp2;
    });
    found1 = found;
    let tmp2 = found;
  } else {
    tmp2 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((arg0) => {
        let tmp = null == stateFromStores[arg0];
        if (!tmp) {
          tmp = false === stateFromStores[arg0].dismissed;
        }
        return tmp;
      });
      tmp2 = found1;
    }
  }
  const items1 = [useGetVisibleContent(tmp2, id, CHANNEL_NOTICES)];
  const items2 = [tmp2, CHANNEL_NOTICES, id];
  items1[1] = React.useCallback((arg0, arg1) => {
    if (null != found1) {
      let obj = id(stateFromStores[15]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = closure_1;
      obj[2] = id;
      obj[3] = arg1;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, id, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE =
  function useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_17, GUILD_HEADER_TOOLTIPS) {
    const _require = id;
    closure_1 = GUILD_HEADER_TOOLTIPS;
    const items = [closure_5];
    const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
      items,
      () => closure_1_5.getGuildDismissedContentState(closure_0),
    );
    let tmp4 = null;
    if (null != prop) {
      let tmp5 = null;
      if (null != stateFromStores) {
        let tmp6;
        if (stateFromStores != null) {
          tmp6 = stateFromStores[prop];
        }
        tmp5 = tmp6;
      }
      tmp4 = tmp5;
    }
    if (tmp4 != null) {
      const numTimesDismissed = tmp4.numTimesDismissed;
    }
    dependencyMap = null;
    let tmp7 = null;
    if (null != prop) {
      const tmp8 = !require("NewUserDismissibleContentRegistry.tsx").disableNewUserDismissibleContent(prop);
      let lastDismissedAtMs;
      if (tmp4 != null) {
        lastDismissedAtMs = tmp4.lastDismissedAtMs;
      }
      let tmp15 = null;
      if (canShowTimeRecurringContent(tmp8, lastDismissedAtMs, numTimesDismissed, closure_17)) {
        tmp15 = prop;
      }
      dependencyMap = tmp15;
      tmp7 = tmp15;
      const tmpResult = useNewUserDismissibleContent;
    }
    const items1 = [useGetVisibleContent(tmp7, id, GUILD_HEADER_TOOLTIPS)];
    const items2 = [tmp7, GUILD_HEADER_TOOLTIPS, id];
    items1[1] = React.useCallback((arg0, arg1) => {
      if (null != prop) {
        let obj = id(prop[15]);
        obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
        obj[0] = arg0;
        obj[1] = closure_1;
        obj[2] = id;
        obj[3] = arg1;
        const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp, id, obj);
      }
    }, items2);
    return items1;
  };
export const useDangerouslyPeekDismissibleContents = function useDangerouslyPeekDismissibleContents(items1) {
  const items = [closure_5];
  _require = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  return items1.filter((closure_0) => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = !callback(closure_1_2[14]).hasBit(tmp, closure_0);
      const obj = callback(closure_1_2[14]);
    }
    return tmp2;
  });
};
