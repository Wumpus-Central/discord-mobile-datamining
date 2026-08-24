// discord_app/modules/dismissible_content/useGetDismissibleContent.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../user_settings/UserSettingsProtoStore.tsx";
import closure_5 from "../../stores/SelectedGuildStore.tsx";
import closure_6 from "DismissibleContentFrameworkStore.tsx";
import closure_7 from "DismissibleContentShownStateStore.tsx";
import { removeCandidateContent } from "DismissibleContentShownStateStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
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
  let hasLoadedResult = closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
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
let closure_11 = {};
let result = require("set").fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = function useGetDismissibleContent(items3, APP_LAUNCHER_ONBOARDING) {
  let found1 = APP_LAUNCHER_ONBOARDING;
  const items = [closure_4];
  const stateFromStores = found1(589).useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let stateFromStores1 = stateFromStores;
  let obj = found1(589);
  const items1 = [anyOverlayRenderingLocked];
  stateFromStores1 = found1(589).useStateFromStores(items1, () => anyOverlayRenderingLocked.getGuildId());
  dependencyMap = stateFromStores1;
  const obj2 = found1(589);
  const newUserDismissibleContent = found1(4218).useNewUserDismissibleContent(items3);
  found1 = null;
  if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((closure_0) => {
      let tmp2 = null == stateFromStores1;
      if (!tmp2) {
        tmp2 = !found1(APP_LAUNCHER_ONBOARDING[13]).hasBit(tmp, closure_0);
        const obj = found1(APP_LAUNCHER_ONBOARDING[13]);
      }
      return tmp2;
    });
    found1 = found;
    let tmp5 = found;
  } else {
    tmp5 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((closure_0) => !found1(APP_LAUNCHER_ONBOARDING[13]).hasBit(stateFromStores1, closure_0));
      tmp5 = found1;
    }
  }
  found1 = tmp5;
  dependencyMap = APP_LAUNCHER_ONBOARDING;
  const obj3 = found1(4218);
  let tmpResult = tmp(7368);
  anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  tmpResult = tmp(589);
  const stateFromStores2 = tmpResult.useStateFromStores([], () => {

  });
  const tmp8 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const items2 = [stateFromStores2];
  const stateFromStores3 = found1(589).useStateFromStores(items2, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = found1.useRef(stateFromStores1);
  ref.current = stateFromStores1;
  items3 = [tmp5, APP_LAUNCHER_ONBOARDING, stateFromStores3, anyOverlayRenderingLocked, undefined, stateFromStores2, undefined];
  const effect = found1.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items3);
  let tmp14 = null;
  if (tmp8) {
    tmp14 = null;
    if (null != tmp5) {
      tmp14 = tmp5;
    }
  }
  const items4 = [tmp14, ];
  const items5 = [tmp5, APP_LAUNCHER_ONBOARDING, stateFromStores1];
  items4[1] = found1.useCallback((arg0, arg1) => {
    if (null != found1) {
      let obj = found1(APP_LAUNCHER_ONBOARDING[14]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = found1;
      obj[2] = APP_LAUNCHER_ONBOARDING;
      obj[3] = arg1;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj);
    }
  }, items5);
  return items4;
};
export const useGetVersionedDismissibleContent = function useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName) {
  let _require = latestVersion;
  let stateFromStores = groupName;
  _require = COLLECTIBLES_SHOP_ENTRY_MARKETING;
  const items = [closure_4];
  const lastDismissedVersion = _initialize.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = newSnowflakeId.settings.userContent;
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
      tmp2 = closure_1_11;
    }
    return tmp2;
  }).lastDismissedVersion;
  let obj = _initialize;
  const obj2 = closure_4;
  const items1 = [anyOverlayRenderingLocked];
  stateFromStores = _initialize.useStateFromStores(items1, () => anyOverlayRenderingLocked.getGuildId());
  dependencyMap = stateFromStores;
  let React = null;
  let tmp4 = null;
  if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
    let tmpResult = tmp(4218);
    let result = tmpResult.disableNewUserDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp9 = null;
      if (!result) {
        if (null == lastDismissedVersion) {
          tmp9 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
        } else {
          tmp9 = null;
        }
      }
      React = tmp9;
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
        React = tmp8;
        tmp4 = tmp8;
      }
    }
  }
  _require = tmp4;
  dependencyMap = groupName;
  React = latestVersion;
  const obj3 = _initialize;
  tmpResult = tmp(7368);
  anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp10 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores1 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items2 = [stateFromStores1];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items3 = [tmp4, groupName, stateFromStores2, anyOverlayRenderingLocked, latestVersion, stateFromStores1, undefined];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items3);
  let tmp16 = null;
  if (tmp10) {
    tmp16 = null;
    if (null != tmp4) {
      tmp16 = tmp4;
    }
  }
  const items4 = [tmp16, ];
  const items5 = [tmp4, groupName, stateFromStores, latestVersion];
  items4[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = COLLECTIBLES_SHOP_ENTRY_MARKETING(groupName[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null, version: null };
      obj[0] = arg0;
      obj[1] = stateFromStores;
      obj[2] = groupName;
      obj[3] = arg1;
      obj[4] = COLLECTIBLES_SHOP_ENTRY_MARKETING;
      const result = obj.markVersionedDismissibleContentAsDismissed(tmp, COLLECTIBLES_SHOP_ENTRY_MARKETING, obj);
    }
  }, items5);
  return items4;
};
export const useGetTimeRecurringDismissibleContent = function useGetTimeRecurringDismissibleContent(prop, closure_12, groupName) {
  let _require = prop;
  const items = [closure_4];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = newSnowflakeId.settings.userContent;
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
      tmp2 = closure_1_11;
    }
    return tmp2;
  });
  ({ lastDismissedAtMs, numTimesDismissed } = stateFromStores);
  let obj = _initialize;
  const items1 = [anyOverlayRenderingLocked];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => anyOverlayRenderingLocked.getGuildId());
  dependencyMap = null;
  let tmp5 = null;
  if (null != prop) {
    let tmpResult = tmp(4218);
    let tmp10 = null;
    if (canShowTimeRecurringContent(!tmpResult.disableNewUserDismissibleContent(prop), lastDismissedAtMs, numTimesDismissed, closure_12)) {
      tmp10 = prop;
    }
    dependencyMap = tmp10;
    tmp5 = tmp10;
  }
  _require = tmp5;
  dependencyMap = groupName;
  const obj2 = _initialize;
  tmpResult = tmp(7368);
  anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp11 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores2 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items2 = [stateFromStores2];
  const stateFromStores3 = _initialize.useStateFromStores(items2, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores1);
  ref.current = stateFromStores1;
  const items3 = [tmp5, groupName, stateFromStores3, anyOverlayRenderingLocked, undefined, stateFromStores2, undefined];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items3);
  let tmp17 = null;
  if (tmp11) {
    tmp17 = null;
    if (null != tmp5) {
      tmp17 = tmp5;
    }
  }
  const items4 = [tmp17, ];
  const items5 = [tmp5, groupName, stateFromStores1];
  items4[1] = React.useCallback((arg0, arg1) => {
    if (null != groupName) {
      let obj = prop(groupName[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = prop;
      obj[2] = stateFromStores1;
      obj[3] = arg1;
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp, obj);
    }
  }, items5);
  return items4;
};
export const useGetSnowflakeBoundDismissibleContent = function useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName) {
  let _require = newSnowflakeId;
  let stateFromStores = groupName;
  _require = prop;
  const items = [closure_4];
  const lastDismissedObjectId = _initialize.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = newSnowflakeId.settings.userContent;
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
      tmp2 = closure_1_11;
    }
    return tmp2;
  }).lastDismissedObjectId;
  let obj = _initialize;
  const obj2 = closure_4;
  const items1 = [anyOverlayRenderingLocked];
  stateFromStores = _initialize.useStateFromStores(items1, () => anyOverlayRenderingLocked.getGuildId());
  dependencyMap = stateFromStores;
  let React = null;
  let tmp4 = null;
  if (null != prop) {
    let tmpResult = tmp(4218);
    let result = tmpResult.disableNewUserDismissibleContent(prop);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp10 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp10 = prop;
        } else {
          tmp10 = null;
          const obj6 = stateFromStores(11);
        }
      }
      React = tmp10;
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
          obj5 = stateFromStores(11);
        }
        React = tmp8;
        tmp4 = tmp8;
      }
    }
  }
  _require = tmp4;
  dependencyMap = groupName;
  closure_4 = newSnowflakeId;
  const obj3 = _initialize;
  tmpResult = tmp(7368);
  anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp12 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores1 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items2 = [stateFromStores1];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items3 = [tmp4, groupName, stateFromStores2, anyOverlayRenderingLocked, undefined, stateFromStores1, newSnowflakeId];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items3);
  let tmp18 = null;
  if (tmp12) {
    tmp18 = null;
    if (null != tmp4) {
      tmp18 = tmp4;
    }
  }
  const items4 = [tmp18, ];
  const items5 = [tmp4, groupName, stateFromStores, newSnowflakeId];
  items4[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = prop(groupName[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = stateFromStores;
      obj[2] = groupName;
      obj[3] = arg1;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, prop, obj);
    }
  }, items5);
  return items4;
};
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, arg1, current, arg3) {
  let _require = arg1;
  importDefault = current;
  dependencyMap = arg3;
  const items = [closure_4];
  const stateFromStores = _initialize.useStateFromStores(items, () => guildDismissedContentState.getGuildDismissedContentState(closure_1));
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
  let React = null;
  let tmp7 = null;
  if (null != prop) {
    let tmpResult = tmp(4218);
    let result = tmpResult.disableNewUserDismissibleContent(prop);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp13 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp13 = prop;
        } else {
          tmp13 = null;
          const obj5 = DISCORD_EPOCHDefault;
        }
      }
      React = tmp13;
      tmp7 = tmp13;
    } else {
      tmp7 = null;
      if (null != lastDismissedObjectId) {
        let tmp11 = null;
        if (!result) {
          tmp11 = null;
          if (1 === obj4.compare(arg1, lastDismissedObjectId)) {
            tmp11 = prop;
          }
          obj4 = DISCORD_EPOCHDefault;
        }
        React = tmp11;
        tmp7 = tmp11;
      }
    }
  }
  _require = tmp7;
  importDefault = current;
  dependencyMap = arg3;
  closure_4 = arg1;
  let obj = _initialize;
  obj2 = closure_4;
  tmpResult = tmp(7368);
  const anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp15 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores1 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items1 = [stateFromStores1];
  const stateFromStores2 = _initialize.useStateFromStores(items1, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(current);
  ref.current = current;
  const items2 = [tmp7, arg3, stateFromStores2, anyOverlayRenderingLocked, undefined, stateFromStores1, arg1];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items2);
  let tmp21 = null;
  if (tmp15) {
    tmp21 = null;
    if (null != tmp7) {
      tmp21 = tmp7;
    }
  }
  const items3 = [tmp21, ];
  const items4 = [tmp7, arg3, current, arg1];
  items3[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = prop(table[14]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = table;
      obj[2] = closure_1;
      obj[3] = arg1;
      const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(tmp, prop, closure_1, obj);
    }
  }, items4);
  return items3;
};
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = function useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName) {
  let _require = newSnowflakeId;
  let stateFromStores = groupName;
  const items = [anyOverlayRenderingLocked];
  stateFromStores = _initialize.useStateFromStores(items, () => anyOverlayRenderingLocked.getGuildId());
  dependencyMap = stateFromStores;
  let React = null;
  let result = null == contentType;
  if (!result) {
    let tmpResult = tmp(1379);
    result = tmpResult.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(contentType, newSnowflakeId, timeRecurringConfig);
  }
  let tmp6 = null;
  if (!result) {
    React = contentType;
    tmp6 = contentType;
  }
  _require = tmp6;
  dependencyMap = groupName;
  closure_4 = newSnowflakeId;
  let obj = _initialize;
  tmpResult = tmp(7368);
  anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp7 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores1 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items1 = [stateFromStores1];
  const stateFromStores2 = _initialize.useStateFromStores(items1, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items2 = [tmp6, groupName, stateFromStores2, anyOverlayRenderingLocked, undefined, stateFromStores1, newSnowflakeId];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items2);
  let tmp13 = null;
  if (tmp7) {
    tmp13 = null;
    if (null != tmp6) {
      tmp13 = tmp6;
    }
  }
  const items3 = [tmp13, ];
  const items4 = [tmp6, groupName, stateFromStores, newSnowflakeId];
  items3[1] = React.useCallback((arg0, arg1) => {
    if (null != closure_3) {
      let obj = contentType(groupName[11]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = stateFromStores;
      obj[2] = groupName;
      obj[3] = arg1;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, contentType, obj);
    }
  }, items4);
  return items3;
};
export const useGetSingleUseGuildDismissibleContent_UNSAFE = function useGetSingleUseGuildDismissibleContent_UNSAFE(items4, current, CHANNEL_NOTICES) {
  let found1 = current;
  closure_1 = CHANNEL_NOTICES;
  const items = [closure_4];
  const stateFromStores = found1(589).useStateFromStores(items, () => closure_1_4.getGuildDismissedContentState(found1));
  dependencyMap = stateFromStores;
  let obj = found1(589);
  const newUserDismissibleContent = found1(4218).useNewUserDismissibleContent(items4);
  found1 = null;
  if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((arg0) => {
      let tmp2 = null == closure_2 || null == tmp[arg0];
      if (!tmp2) {
        tmp2 = false === tmp[arg0].dismissed;
      }
      return tmp2;
    });
    found1 = found;
    let tmp4 = found;
  } else {
    tmp4 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((arg0) => {
        let tmp = null == CHANNEL_NOTICES[arg0];
        if (!tmp) {
          tmp = false === CHANNEL_NOTICES[arg0].dismissed;
        }
        return tmp;
      });
      tmp4 = found1;
    }
  }
  found1 = tmp4;
  closure_1 = current;
  dependencyMap = CHANNEL_NOTICES;
  const obj2 = found1(4218);
  let tmpResult = tmp(7368);
  const anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  tmpResult = tmp(589);
  const stateFromStores1 = tmpResult.useStateFromStores([], () => {

  });
  const tmp7 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const items1 = [stateFromStores1];
  const stateFromStores2 = found1(589).useStateFromStores(items1, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = found1.useRef(current);
  ref.current = current;
  const items2 = [tmp4, CHANNEL_NOTICES, stateFromStores2, anyOverlayRenderingLocked, undefined, stateFromStores1, undefined];
  const effect = found1.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items2);
  let tmp13 = null;
  if (tmp7) {
    tmp13 = null;
    if (null != tmp4) {
      tmp13 = tmp4;
    }
  }
  const items3 = [tmp13, ];
  items4 = [tmp4, CHANNEL_NOTICES, current];
  items3[1] = found1.useCallback((arg0, arg1) => {
    if (null != found1) {
      let obj = found1(CHANNEL_NOTICES[14]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = closure_1;
      obj[2] = found1;
      obj[3] = arg1;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, found1, obj);
    }
  }, items4);
  return items3;
};
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = function useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, current, closure_17, GUILD_HEADER_TOOLTIPS) {
  let _require = current;
  closure_1 = GUILD_HEADER_TOOLTIPS;
  const items = [closure_4];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_4.getGuildDismissedContentState(closure_0));
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
    let tmpResult = tmp(4218);
    let tmp8 = !tmpResult.disableNewUserDismissibleContent(prop);
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
  }
  _require = tmp7;
  closure_1 = current;
  dependencyMap = GUILD_HEADER_TOOLTIPS;
  let obj = _initialize;
  tmpResult = tmp(7368);
  const anyOverlayRenderingLocked = tmpResult.useAnyOverlayRenderingLocked();
  const tmp16 = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const stateFromStores1 = _initialize.useStateFromStores([], () => {

  });
  const tmpResult1 = _initialize;
  const items1 = [stateFromStores1];
  const stateFromStores2 = _initialize.useStateFromStores(items1, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores1.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(current);
  ref.current = current;
  const items2 = [tmp7, GUILD_HEADER_TOOLTIPS, stateFromStores2, anyOverlayRenderingLocked, undefined, stateFromStores1, undefined];
  const effect = React.useEffect(() => {
    if (null != prop) {
      if (!closure_1_4.hasLoaded(closure_1_10.PRELOADED_USER_SETTINGS)) {
        current = ref.current;
        let tmp6 = GUILD_HEADER_TOOLTIPS;
        let tmp7 = closure_3;
        let tmp8 = closure_4;
        let obj = current(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: null, group_name: null, latest_version: null, guild_id: null, snowflake_id: null };
        obj[0] = prop(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[tmp];
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
        obj.track(closure_1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj3 = prop(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: null, guildId: null, version: null, snowflakeId: null };
      obj[0] = GUILD_HEADER_TOOLTIPS;
      obj[1] = ref.current;
      obj[2] = closure_3;
      obj[3] = closure_4;
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(tmp, obj, anyOverlayRenderingLocked, stateFromStores1);
      return () => {
        if (null != closure_0) {
          const obj = { content: null, groupName: null };
          obj[0] = tmp;
          obj[1] = closure_2;
          closure_1_8(obj, !closure_1_6.hasUserHitDCCap());
        }
      };
    }
  }, items2);
  let tmp22 = null;
  if (tmp16) {
    tmp22 = null;
    if (null != tmp7) {
      tmp22 = tmp7;
    }
  }
  const items3 = [tmp22, ];
  const items4 = [tmp7, GUILD_HEADER_TOOLTIPS, current];
  items3[1] = React.useCallback((arg0, arg1) => {
    if (null != GUILD_HEADER_TOOLTIPS) {
      let obj = prop(GUILD_HEADER_TOOLTIPS[14]);
      obj = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
      obj[0] = arg0;
      obj[1] = closure_1;
      obj[2] = prop;
      obj[3] = arg1;
      const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp, prop, obj);
    }
  }, items4);
  return items3;
};
export const useDangerouslyPeekDismissibleContents = function useDangerouslyPeekDismissibleContents(items1) {
  const items = [closure_4];
  _require = _initialize.useStateFromStores(items, () => {
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
      tmp2 = !callback(closure_1_2[13]).hasBit(tmp, closure_0);
      const obj = callback(closure_1_2[13]);
    }
    return tmp2;
  });
};