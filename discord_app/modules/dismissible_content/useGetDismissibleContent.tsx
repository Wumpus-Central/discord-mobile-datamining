// discord_app/modules/dismissible_content/useGetDismissibleContent.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Uint8ArrayUtils from "../../utils/Uint8ArrayUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "DismissibleContentUtils.tsx";
import DismissibleContentAvailability from "DismissibleContentAvailability.tsx";
import markScopedDismissibleContentAsDismissed from "markScopedDismissibleContentAsDismissed.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore.tsx";

const require = globalThis.__r;

require = fn;
function checksNewUsersWithHook(kind) {
  let tmp = "single_use" === kind.kind;
  if (!tmp) {
    tmp = "single_use_guild" === kind.kind;
  }
  return tmp;
}
function useScopedDismissibleContentSelection(items1, groupName) {
  _require = groupName;
  const found = items1.filter((kind) => {
    let tmp = "snowflake_bound_guild" === kind.kind;
    if (tmp) {
      tmp = "" === kind.scope.snowflakeId;
    }
    return !tmp;
  });
  closure_129_0 = found.some((kind) => "single_use" === kind.kind);
  closure_129_1 = found.some(require("DismissibleContentScope").isRecurringScopedDismissibleContent);
  items = [
    ...new Set(
      found.flatMap((scope) => {
        if (obj.isGuildScopedDismissibleContent(scope)) {
          items = [scope.scope.guildId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }),
    ),
  ];
  closure_129_2 = items;
  const set = new Set(
    found.flatMap((scope) => {
      if (obj.isGuildScopedDismissibleContent(scope)) {
        items = [scope.scope.guildId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }),
  );
  items1 = [closure_5];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let tmp;
    if (closure_0) {
      let dismissedContents;
      if (userContent != null) {
        dismissedContents = userContent.dismissedContents;
      }
      tmp = dismissedContents;
    }
    const obj = { dismissedContents: tmp, recurringStates: null };
    let tmp4;
    if (obj3) {
      let prop;
      if (userContent != null) {
        prop = userContent.recurringDismissibleContentStates;
      }
      tmp4 = prop;
    }
    obj.recurringStates = tmp4;
    return obj;
  });
  ({ dismissedContents, recurringStates } = stateFromStoresObject);
  let obj = require("initialize");
  const items2 = [closure_5];
  closure_129_3 = require("initialize").useStateFromStoresArray(items2, () =>
    groupName2.map((item) => guildDismissedContentState.getGuildDismissedContentState(item)),
  );
  let obj3 = { dismissedContents, recurringStates, guildStates: null };
  let obj2 = require("initialize");
  obj3.guildStates = new Map(
    items.map((item, index) => {
      items = [item, version[index]];
      return items;
    }),
  );
  const map = new Map(
    items.map((item, index) => {
      items = [item, version[index]];
      return items;
    }),
  );
  const found1 = found.filter(checksNewUsersWithHook);
  dependencyMap = require("NewUserDismissibleContentRegistry").useNewUserDismissibleContent(
    found1.map((content) => content.content),
  );
  let obj4 = require("NewUserDismissibleContentRegistry");
  const items3 = [closure_5];
  _slicedToArray = require("initialize").useStateFromStores(items3, () =>
    closure_5.hasLoaded(constants.PRELOADED_USER_SETTINGS),
  );
  let found2 = found.find((kind) => {
    let tmp = "single_use" === kind.kind;
    if (!tmp) {
      tmp = "single_use_guild" === kind.kind;
    }
    let hasItem = !tmp;
    if (tmp) {
      hasItem = groupName2.includes(kind.content);
    }
    if (hasItem) {
      hasItem = DismissibleContentAvailability.canShowScopedDismissibleContent(kind, obj3, closure_3);
    }
    return hasItem;
  });
  if (found2 == null) {
    found2 = null;
  }
  if (null != found2) {
    let dismissibleContentShowing = tmp(7714).getDismissibleContentShowing(found2);
    const tmpResult = tmp(7714);
  } else {
    dismissibleContentShowing = closure_12;
  }
  ({ version, snowflakeId } = dismissibleContentShowing);
  closure_5 = found.some((item) => !groupName(groupName2[13]).isGuildScopedDismissibleContent(item));
  const obj5 = require("initialize");
  const items4 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
    guildId = null;
    if (closure_5) {
      guildId = SelectedGuildStore.getGuildId();
    }
    return guildId;
  });
  guildId = stateFromStores;
  if (null != found2) {
    guildId = stateFromStores;
    if (tmpResult7.isGuildScopedDismissibleContent(found2)) {
      guildId = found2.scope.guildId;
    }
    tmpResult7 = tmp(7714);
  }
  let content;
  if (found2 != null) {
    content = found2.content;
  }
  if (content == null) {
    content = null;
  }
  closure_130_0 = content;
  closure_130_1 = guildId;
  closure_130_2 = groupName;
  closure_130_3 = version;
  closure_130_4 = snowflakeId;
  const tmpResult6 = require("initialize");
  const tmp10 = DismissibleContentShownStateStore((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  [first] = require("OverlayTrackingUtils").useOverlayLockState();
  closure_130_5 = first;
  closure_130_6 = tmp13;
  let result = null != content;
  if (result) {
    result = tmp(4977).isDismissibleContentBlockedByOverlay(content, first, tmp13);
    const tmpResult9 = tmp(4977);
  }
  const tmpResult8 = require("OverlayTrackingUtils");
  const items5 = [DismissibleContentFrameworkStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = DismissibleContentFrameworkStore.hasUserHitDCCap(tmp, obj3);
    }
    return hasUserHitDCCapResult;
  });
  const ref = found2.useRef(guildId);
  closure_130_7 = ref;
  ref.current = guildId;
  const items6 = [content, groupName, stateFromStores1, result, version, snowflakeId];
  const effect = found2.useEffect(() => {
    if (null != closure_0) {
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = groupName2;
        let tmp7 = version;
        let tmp8 = found2;
        const obj2 = {
          content_type: dismissible_content.DismissibleContent[closure_0],
          group_name: null,
          latest_version: null,
          guild_id: null,
          snowflake_id: null,
        };
        if (groupName2 == null) {
          tmp6 = null;
        }
        obj2.group_name = tmp6;
        if (tmp7 == null) {
          tmp7 = null;
        }
        obj2.latest_version = tmp7;
        if (current == null) {
          current = null;
        }
        obj2.guild_id = current;
        if (tmp8 == null) {
          tmp8 = null;
        }
        obj2.snowflake_id = tmp8;
        AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj2);
      }
      obj3 = DismissibleContentUtils;
      const obj4 = { groupName: groupName2, guildId: ref.current, version, snowflakeId: found2 };
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(
        closure_0,
        obj4,
        closure_5,
        guildId,
      );
      return () => {
        if (null != closure_1_0) {
          const obj = { content: tmp, groupName };
          removeCandidateContent(obj, !ref.hasUserHitDCCap());
        }
      };
    }
  }, items6);
  let tmp18 = null;
  if (tmp10) {
    tmp18 = null;
    if (null != content) {
      tmp18 = content;
    }
  }
  const items7 = [content, groupName, guildId, version, snowflakeId];
  const tmpResult10 = require("initialize");
  return {
    candidate: found2,
    visibleContent: tmp18,
    markAsDismissed: found2.useCallback((dismissAction, forceTrack) => {
      if (null != found2) {
        const obj2 = { dismissAction, groupName, guildId, forceTrack };
        const result = markScopedDismissibleContentAsDismissed.markScopedDismissibleContentAsDismissed(tmp, obj2);
      }
    }, items7),
  };
}
const removeCandidateContent = fn(4984).removeCandidateContent;
const AnalyticEvents = fn(1072).AnalyticEvents;
const UserSettingsTypes = fn(1082).UserSettingsTypes;
let closure_12 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export { useScopedDismissibleContentSelection };
export function useGetDismissibleContent(items3, groupName) {
  items = [,];
  ({ visibleContent: arr[0], markAsDismissed: arr[1] } = useScopedDismissibleContentSelection(
    items3.flatMap((item) => {
      let result = require("DismissibleContentScope").scopeDismissibleContentEntry(item);
      if (result == null) {
        result = [];
      }
      return result;
    }),
    groupName,
  ));
  const tmp = useScopedDismissibleContentSelection(
    items3.flatMap((item) => {
      let result = require("DismissibleContentScope").scopeDismissibleContentEntry(item);
      if (result == null) {
        result = [];
      }
      return result;
    }),
    groupName,
  );
  const items1 = [,];
  [arr2[0], arr2[1]] = items;
  return items1;
}
export function useGetVersionedDismissibleContent(content, version, groupName) {
  if (null != content) {
    const obj = { kind: "versioned", content, scope: null };
    const obj2 = { version };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  return items2;
}
export function useGetTimeRecurringDismissibleContent(content, timeRecurringConfig, groupName) {
  if (null != content) {
    const obj = { kind: "time_recurring", content, scope: null };
    const obj2 = { timeRecurringConfig };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  return items2;
}
export function useGetSnowflakeBoundDismissibleContent(content, snowflakeId, groupName) {
  if (null != content) {
    const obj = { kind: "snowflake_bound", content, scope: null };
    const obj2 = { snowflakeId };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  return items2;
}
export function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName) {
  if (null != content) {
    const obj = { kind: "snowflake_bound_guild", content, scope: null };
    const obj2 = { snowflakeId, guildId };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  return items2;
}
export function useGetTimeRecurringSnowflakeBoundDismissibleContent(
  content,
  timeRecurringConfig,
  snowflakeId,
  groupName,
) {
  if (null != content) {
    const obj = { kind: "time_recurring_snowflake_bound", content, scope: null };
    const obj2 = { snowflakeId, timeRecurringConfig };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  return items2;
}
export function useGetSingleUseGuildDismissibleContent_UNSAFE(arr, id, CHANNEL_NOTICES) {
  const guildId = id;
  items = [,];
  ({ visibleContent: arr[0], markAsDismissed: arr[1] } = useScopedDismissibleContentSelection(
    arr.map((content) => {
      const obj = { kind: "single_use_guild", content, scope: { guildId } };
      return obj;
    }),
    CHANNEL_NOTICES,
  ));
  return items;
}
export function useGetTimeRecurringGuildDismissibleContent_UNSAFE(
  content,
  guildId,
  timeRecurringConfig,
  GUILD_HEADER_TOOLTIPS,
) {
  if (null != content) {
    const obj = { kind: "time_recurring_guild", content, scope: null };
    const obj2 = { timeRecurringConfig, guildId };
    obj.scope = obj2;
    items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [,];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(
    items1,
    GUILD_HEADER_TOOLTIPS,
  ));
  return items2;
}
export function useDangerouslyPeekDismissibleContents(arr) {
  items = [UserSettingsProtoStore];
  _require = require("initialize").useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  return arr.filter((item) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = !Uint8ArrayUtils.hasBit(tmp, item);
    }
    return tmp2;
  });
}
