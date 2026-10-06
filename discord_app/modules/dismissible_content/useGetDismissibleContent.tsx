// discord_app/modules/dismissible_content/useGetDismissibleContent.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Uint8ArrayUtils from "../../utils/Uint8ArrayUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "DismissibleContentUtils.tsx";
import DismissibleContentShownStateStore2 from "DismissibleContentShownStateStore.tsx";
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const DismissibleContentShownStateStore = DismissibleContentShownStateStore2;
let _require, currentlyShown, dependencyMap, guildId, importDefault;

function useGetVisibleContent(found1, stateFromStores, groupName, version, snowflakeId) {
  let ref;
  _require = found1;
  let closure_1 = stateFromStores;
  dependencyMap = groupName;
  guildId = version;
  react = snowflakeId;
  const tmp = DismissibleContentShownStateStore((currentlyShown) => {
    let hasItem = null != found1;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  let obj = require("OverlayTrackingUtils");
  const tmp4 = guildId(obj.useOverlayLockState(), 2);
  const first = tmp4[0];
  let tmp6 = tmp4[1];
  let closure_6 = tmp6;
  let result = null != found1;
  if (result) {
    const tmp2Result = require("DismissibleContentUtils");
    result = tmp2Result.isDismissibleContentBlockedByOverlay(found1, first, tmp6);
  }
  const items = [ref];
  const tmp2Result2 = require("get initialized");
  stateFromStores = tmp2Result2.useStateFromStores(items, () => {
    const hasUserHitDCCapResult =
      null != found1 && DismissibleContentFrameworkStore.hasUserHitDCCap(tmp, stateFromStores);
    return hasUserHitDCCapResult;
  });
  ref = react.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items1 = [found1, groupName, stateFromStores, result, version, snowflakeId];
  const effect = react.useEffect(() => {
    if (null != found1) {
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = groupName;
        let tmp7 = version;
        let tmp8 = snowflakeId;
        let obj = {
          content_type: dismissible_content.DismissibleContent[found1],
          group_name: tmp6,
          latest_version: tmp7,
          guild_id: current,
          snowflake_id: tmp8,
        };
        const track = AnalyticsUtilsDefault.track;
        const DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN =
          AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
        AnalyticsUtilsDefault;
        if (groupName == null) {
          tmp6 = null;
        }
        if (tmp7 == null) {
          tmp7 = null;
        }
        if (current == null) {
          current = null;
        }
        if (tmp8 == null) {
          tmp8 = null;
        }
        track(DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      const obj2 = DismissibleContentUtils;
      const obj3 = { groupName, guildId: ref.current, version, snowflakeId };
      const markDismissibleContentAsShown = obj2.requestMarkDismissibleContentAsShown(found1, obj3, first, closure_6);
      return () => {
        if (null != found1) {
          const obj = { content: tmp, groupName };
          removeCandidateContent(obj, !ref.hasUserHitDCCap());
        }
      };
    }
  }, items1);
  let tmp11 = null;
  if (tmp) {
    tmp11 = null;
    if (null != found1) {
      tmp11 = found1;
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
  const tmp7 =
    null == cooldownDurationMs.numTimesToRecur ||
    0 === cooldownDurationMs.numTimesToRecur ||
    null == numTimesDismissed ||
    numTimesDismissed < cooldownDurationMs.numTimesToRecur;
  let hasLoadedResult = UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
  if (!hasLoadedResult) {
    hasLoadedResult = null != tmp && null != numTimesDismissed;
  }
  if (hasLoadedResult) {
    hasLoadedResult = arg0;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp5;
  }
  if (hasLoadedResult) {
    hasLoadedResult = null == tmp || timestamp >= num;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp7;
  }
  return hasLoadedResult;
}
let react = react_mod;
const removeCandidateContent = DismissibleContentShownStateStore2.removeCandidateContent;
const AnalyticEvents = Constants.AnalyticEvents;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, groupName) => {
      let found1;
      let settings;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      _require = groupName;
      const tmp = _require;
      let tmp2 = found1;
      let obj = require("react");
      const cResult = obj.c(18);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        const fn = function o() {
          const userContent = settings.settings.userContent;
          let dismissedContents;
          if (userContent != null) {
            dismissedContents = userContent.dismissedContents;
          }
          return dismissedContents;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(tmp2[12]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectedGuildStore];
        class C {
          constructor() {
            return guildId.getGuildId();
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        tmp9 = C;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = tmp(tmp2[12]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      const tmpResult4 = tmp(tmp2[15]);
      const newUserDismissibleContent = tmpResult4.useNewUserDismissibleContent(arg0);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === newUserDismissibleContent) {
          found1 = cResult[6];
        }
        class C {
          constructor() {
            return guildId.getGuildId();
          }
        }
        if (cResult[11] === tmp12) {
          if (cResult[12] === groupName) {
            let tmp20;
            if (cResult[13] === stateFromStores1) {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp20) {
              let tmp21;
              if (cResult[16] === tmp19) {
                tmp21 = cResult[17];
              }
              return tmp21;
            }
            const items2 = [,];
            class C {
              constructor() {
                return guildId.getGuildId();
              }
            }
            items2[1] = tmp20;
            class N {
              constructor(dismissAction, forceTrack) {
                if (null != found1) {
                  const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
                  const obj = DismissibleContentUnsafeUtils;
                  const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
                }
              }
            }
            cResult[15] = tmp20;
            cResult[16] = tmp19;
            cResult[17] = items2;
            tmp21 = items2;
          }
        }
        class N {
          constructor(dismissAction, forceTrack) {
            if (null != found1) {
              const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
              const obj = DismissibleContentUnsafeUtils;
              const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
            }
          }
        }
        cResult[11] = tmp12;
        cResult[12] = groupName;
        cResult[13] = stateFromStores1;
        cResult[14] = N;
        tmp20 = N;
      }
      found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let tmp16;
        if (cResult[7] !== stateFromStores) {
          const fn2 = function _(CHANNEL_NOTICE_INVITE) {
            let tmp2 = null == stateFromStores;
            if (!tmp2) {
              const obj = Uint8ArrayUtils;
              tmp2 = !obj.hasBit(tmp, CHANNEL_NOTICE_INVITE);
            }
            return tmp2;
          };
          cResult[7] = stateFromStores;
          class C {
            constructor() {
              return guildId.getGuildId();
            }
          }
          cResult[8] = fn2;
          class N {
            constructor(dismissAction, forceTrack) {
              if (null != found1) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
                const obj = DismissibleContentUnsafeUtils;
                const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
              }
            }
          }
        } else {
          tmp16 = cResult[8];
        }
        const found = newUserDismissibleContent.find(tmp16);
        found1 = found;
        class C {
          constructor() {
            return guildId.getGuildId();
          }
        }
      } else if (null != stateFromStores) {
        if (cResult[9] !== stateFromStores) {
          class T {
            constructor(CHANNEL_NOTICE_INVITE) {
              const obj = Uint8ArrayUtils;
              return !obj.hasBit(stateFromStores, CHANNEL_NOTICE_INVITE);
            }
          }
          cResult[9] = stateFromStores;
          class C {
            constructor() {
              return guildId.getGuildId();
            }
          }
          cResult[10] = T;
          class N {
            constructor(dismissAction, forceTrack) {
              if (null != found1) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
                const obj = DismissibleContentUnsafeUtils;
                const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
              }
            }
          }
        } else {
          class T {
            constructor(CHANNEL_NOTICE_INVITE) {
              const obj = Uint8ArrayUtils;
              return !obj.hasBit(stateFromStores, CHANNEL_NOTICE_INVITE);
            }
          }
        }
        found1 = newUserDismissibleContent.find(tmp14);
        class C {
          constructor() {
            return guildId.getGuildId();
          }
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = newUserDismissibleContent;
      cResult[6] = tmp13;
    }
  : (arg0, groupName) => {
      let settings;
      let stateFromStores1;
      let tmp3;
      _require = groupName;
      let obj = require("get initialized");
      const items = [UserSettingsProtoStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const userContent = settings.settings.userContent;
        let dismissedContents;
        if (userContent != null) {
          dismissedContents = userContent.dismissedContents;
        }
        return dismissedContents;
      });
      let obj2 = require("get initialized");
      const items1 = [SelectedGuildStore];
      stateFromStores1 = obj2.useStateFromStores(items1, () => guildId.getGuildId());
      const obj3 = require("NewUserDismissibleContentRegistry");
      const newUserDismissibleContent = obj3.useNewUserDismissibleContent(arg0);
      let found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        const found = newUserDismissibleContent.find((item) => {
          let tmp2 = null == stateFromStores;
          if (!tmp2) {
            const obj = Uint8ArrayUtils;
            tmp2 = !obj.hasBit(tmp, item);
          }
          return tmp2;
        });
        found1 = found;
        tmp3 = found;
      } else {
        tmp3 = null;
        if (null != stateFromStores) {
          found1 = newUserDismissibleContent.find((item) => {
            const obj = Uint8ArrayUtils;
            return !obj.hasBit(stateFromStores, item);
          });
          tmp3 = found1;
        }
      }
      const items2 = [useGetVisibleContent(tmp3, stateFromStores1, groupName)];
      const items3 = [tmp3, groupName, stateFromStores1];
      items2[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != found1) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
        }
      }, items3);
      return items2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null;
          if (null !== closure_0) {
            const userContent = UserSettingsProtoStore.settings.userContent;
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
            tmp2 = closure_13;
          }
          return tmp2;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserSettingsProtoStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let tmp2 = null;
        if (null !== closure_0) {
          const userContent = UserSettingsProtoStore.settings.userContent;
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
          tmp2 = closure_13;
        }
        return tmp2;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, version, groupName) => {
      let tmp4;
      let tmp5;
      _require = version;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(14);
      const lastDismissedVersion = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedVersion;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function c() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedVersion) {
          if (cResult[4] === version) {
            dependencyMap = cResult[5];
          }
          const tmp21 = useGetVisibleContent(tmp8, stateFromStores, groupName, version);
          if (cResult[6] === tmp8) {
            if (cResult[7] === groupName) {
              if (cResult[8] === stateFromStores) {
                let tmp22;
                if (cResult[9] === version) {
                  tmp22 = cResult[10];
                }
                if (cResult[11] === tmp22) {
                  let tmp23;
                  if (cResult[12] === tmp21) {
                    tmp23 = cResult[13];
                  }
                  return tmp23;
                }
                const items1 = [tmp21, tmp22];
                cResult[11] = tmp22;
                cResult[12] = tmp21;
                cResult[13] = items1;
                tmp23 = items1;
              }
            }
          }
          const fn2 = function _(dismissAction, forceTrack) {
            if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
              const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack, version };
              const obj = DismissibleContentUtils;
              const result = obj.markVersionedDismissibleContentAsDismissed(tmp, version, obj2);
            }
          };
          cResult[6] = tmp8;
          cResult[7] = groupName;
          cResult[8] = stateFromStores;
          cResult[9] = version;
          cResult[10] = fn2;
          tmp22 = fn2;
        }
      }
      dependencyMap = null;
      let tmp9 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult2 = tmp(4726);
        let result = tmpResult2.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp15 = null;
          if (!result) {
            if (null == lastDismissedVersion) {
              tmp15 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              tmp15 = null;
            }
          }
          dependencyMap = tmp15;
          tmp9 = tmp15;
        } else {
          tmp9 = null;
          if (null != lastDismissedVersion) {
            let tmp14 = null;
            if (!result) {
              tmp14 = null;
              if (lastDismissedVersion < version) {
                tmp14 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            dependencyMap = tmp14;
            tmp9 = tmp14;
          }
        }
      }
      cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      cResult[3] = lastDismissedVersion;
      cResult[4] = version;
      cResult[5] = tmp9;
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, version, groupName) => {
      let stateFromStores;
      _require = version;
      const lastDismissedVersion = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedVersion;
      const tmp = _require;
      let obj = require("get initialized");
      const items = [SelectedGuildStore];
      const tmp2 = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      let closure_3 = null;
      let tmp4 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult = tmp(tmp2[15]);
        let result = tmpResult.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp10 = null;
          if (!result) {
            if (null == lastDismissedVersion) {
              tmp10 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              tmp10 = null;
            }
          }
          closure_3 = tmp10;
          tmp4 = tmp10;
        } else {
          tmp4 = null;
          if (null != lastDismissedVersion) {
            let tmp9 = null;
            if (!result) {
              tmp9 = null;
              if (lastDismissedVersion < version) {
                tmp9 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            closure_3 = tmp9;
            tmp4 = tmp9;
          }
        }
      }
      const items1 = [useGetVisibleContent(tmp4, stateFromStores, groupName, version)];
      const items2 = [tmp4, groupName, stateFromStores, version];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack, version };
          const obj = DismissibleContentUtils;
          const result = obj.markVersionedDismissibleContentAsDismissed(tmp, version, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, cooldownDurationMs, groupName) => {
      let lastDismissedAtMs;
      let numTimesDismissed;
      let stateFromStores;
      let tmp5;
      let tmp6;
      _require = groupName;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(14);
      ({ lastDismissedAtMs, numTimesDismissed } = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE));
      closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function o() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(stateFromStores[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedAtMs) {
          if (cResult[4] === numTimesDismissed) {
            if (cResult[5] === cooldownDurationMs) {
              let closure_1 = cResult[6];
            }
            const tmp17 = useGetVisibleContent(tmp9, stateFromStores, groupName);
            if (cResult[7] === tmp9) {
              if (cResult[8] === groupName) {
                let tmp18;
                if (cResult[9] === stateFromStores) {
                  tmp18 = cResult[10];
                }
                if (cResult[11] === tmp18) {
                  let tmp19;
                  if (cResult[12] === tmp17) {
                    tmp19 = cResult[13];
                  }
                  return tmp19;
                }
                const items1 = [tmp17, tmp18];
                cResult[11] = tmp18;
                cResult[12] = tmp17;
                cResult[13] = items1;
                tmp19 = items1;
              }
            }
            const fn2 = function _(dismissAction, forceTrack) {
              if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
                const obj = DismissibleContentUtils;
                const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp, obj2);
              }
            };
            cResult[7] = tmp9;
            cResult[8] = groupName;
            cResult[9] = stateFromStores;
            cResult[10] = fn2;
            tmp18 = fn2;
          }
        }
      }
      closure_1 = null;
      let tmp10 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp15 = null;
        const tmpResult2 = tmp(stateFromStores[15]);
        if (
          canShowTimeRecurringContent(
            !tmpResult2.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE),
            lastDismissedAtMs,
            numTimesDismissed,
            cooldownDurationMs,
          )
        ) {
          tmp15 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        closure_1 = tmp15;
        tmp10 = tmp15;
      }
      cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      cResult[3] = lastDismissedAtMs;
      cResult[4] = numTimesDismissed;
      cResult[5] = cooldownDurationMs;
      cResult[6] = tmp10;
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, cooldownDurationMs, groupName) => {
      let lastDismissedAtMs;
      let numTimesDismissed;
      _require = groupName;
      const tmp = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
      ({ lastDismissedAtMs, numTimesDismissed } = tmp);
      let obj = require("get initialized");
      const items = [SelectedGuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      dependencyMap = null;
      let tmp5 = null;
      const tmp2 = _require;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp10 = null;
        const tmp2Result = tmp2(4726);
        if (
          canShowTimeRecurringContent(
            !tmp2Result.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE),
            lastDismissedAtMs,
            numTimesDismissed,
            cooldownDurationMs,
          )
        ) {
          tmp10 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        dependencyMap = tmp10;
        tmp5 = tmp10;
      }
      const items1 = [useGetVisibleContent(tmp5, stateFromStores, groupName)];
      const items2 = [tmp5, groupName, stateFromStores];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const obj = DismissibleContentUtils;
          const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, groupName) => {
      let tmp4;
      let tmp5;
      _require = id;
      importDefault = groupName;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(14);
      const lastDismissedObjectId = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedObjectId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function c() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedObjectId) {
          if (cResult[4] === id) {
            dependencyMap = cResult[5];
          }
          const tmp23 = useGetVisibleContent(tmp8, stateFromStores, groupName, undefined, id);
          if (cResult[6] === tmp8) {
            if (cResult[7] === groupName) {
              if (cResult[8] === stateFromStores) {
                let tmp24;
                if (cResult[9] === id) {
                  tmp24 = cResult[10];
                }
                if (cResult[11] === tmp24) {
                  let tmp25;
                  if (cResult[12] === tmp23) {
                    tmp25 = cResult[13];
                  }
                  return tmp25;
                }
                const items1 = [tmp23, tmp24];
                cResult[11] = tmp24;
                cResult[12] = tmp23;
                cResult[13] = items1;
                tmp25 = items1;
              }
            }
          }
          const fn2 = function _(dismissAction, forceTrack) {
            if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
              const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
              const obj = DismissibleContentUtils;
              const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, id, obj2);
            }
          };
          cResult[6] = tmp8;
          cResult[7] = groupName;
          cResult[8] = stateFromStores;
          cResult[9] = id;
          cResult[10] = fn2;
          tmp24 = fn2;
        }
      }
      dependencyMap = null;
      let tmp9 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult2 = tmp(4726);
        let result = tmpResult2.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp16 = null;
          if (!result) {
            if (null == lastDismissedObjectId) {
              tmp16 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              SnowflakeUtilsDefault;
              tmp16 = null;
            }
          }
          dependencyMap = tmp16;
          tmp9 = tmp16;
        } else {
          tmp9 = null;
          if (null != lastDismissedObjectId) {
            let tmp14 = null;
            if (!result) {
              tmp14 = null;
              const obj4 = SnowflakeUtilsDefault;
              if (1 === obj4.compare(id, lastDismissedObjectId)) {
                tmp14 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            dependencyMap = tmp14;
            tmp9 = tmp14;
          }
        }
      }
      cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      cResult[3] = lastDismissedObjectId;
      cResult[4] = id;
      cResult[5] = tmp9;
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, groupName) => {
      let stateFromStores;
      _require = id;
      importDefault = groupName;
      const lastDismissedObjectId = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedObjectId;
      const tmp = _require;
      let obj = require("get initialized");
      const items = [SelectedGuildStore];
      stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      let closure_3 = null;
      let tmp4 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult = tmp(stateFromStores[15]);
        let result = tmpResult.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp11 = null;
          if (!result) {
            if (null == lastDismissedObjectId) {
              tmp11 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              require("SnowflakeUtils");
              tmp11 = null;
            }
          }
          closure_3 = tmp11;
          tmp4 = tmp11;
        } else {
          tmp4 = null;
          if (null != lastDismissedObjectId) {
            let tmp9 = null;
            if (!result) {
              tmp9 = null;
              const obj3 = require("SnowflakeUtils");
              if (1 === obj3.compare(id, lastDismissedObjectId)) {
                tmp9 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            closure_3 = tmp9;
            tmp4 = tmp9;
          }
        }
      }
      const items1 = [useGetVisibleContent(tmp4, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp4, groupName, stateFromStores, id];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const obj = DismissibleContentUtils;
          const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, id, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, stateFromStores, groupName) => {
      let first;
      let tmp6;
      _require = id;
      importDefault = stateFromStores;
      dependencyMap = groupName;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function c() {
          return UserSettingsProtoStore.getGuildDismissedContentState(guildId);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp9 = null;
        if (null != stateFromStores) {
          let tmp10;
          if (stateFromStores != null) {
            tmp10 = stateFromStores[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
          }
          tmp9 = tmp10;
        }
        tmp8 = tmp9;
      }
      let prop;
      if (tmp8 != null) {
        prop = tmp8.lastDismissedObjectId;
      }
      if (cResult[3] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[4] === prop) {
          if (cResult[5] === id) {
            let closure_3 = cResult[6];
          }
          const tmp27 = useGetVisibleContent(tmp12, stateFromStores, groupName, undefined, id);
          if (cResult[7] === tmp12) {
            if (cResult[8] === groupName) {
              if (cResult[9] === stateFromStores) {
                let tmp28;
                if (cResult[10] === id) {
                  tmp28 = cResult[11];
                }
                if (cResult[12] === tmp28) {
                  let tmp29;
                  if (cResult[13] === tmp27) {
                    tmp29 = cResult[14];
                  }
                  return tmp29;
                }
                const items1 = [tmp27, tmp28];
                cResult[12] = tmp28;
                cResult[13] = tmp27;
                cResult[14] = items1;
                tmp29 = items1;
              }
            }
          }
          const fn2 = function _(dismissAction, forceTrack) {
            if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
              const obj = DismissibleContentUnsafeUtils;
              const obj2 = { dismissAction, groupName, guildId, forceTrack };
              const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
                PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
                id,
                guildId,
                obj2,
              );
            }
          };
          cResult[7] = tmp12;
          cResult[8] = groupName;
          cResult[9] = stateFromStores;
          cResult[10] = id;
          cResult[11] = fn2;
          tmp28 = fn2;
        }
      }
      closure_3 = null;
      let tmp13 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult2 = require("NewUserDismissibleContentRegistry");
        let result = tmpResult2.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp20 = null;
          if (!result) {
            if (null == prop) {
              tmp20 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              SnowflakeUtilsDefault;
              tmp20 = null;
            }
          }
          closure_3 = tmp20;
          tmp13 = tmp20;
        } else {
          tmp13 = null;
          if (null != prop) {
            let tmp18 = null;
            if (!result) {
              tmp18 = null;
              const obj4 = SnowflakeUtilsDefault;
              if (1 === obj4.compare(id, prop)) {
                tmp18 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            closure_3 = tmp18;
            tmp13 = tmp18;
          }
        }
      }
      cResult[3] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      cResult[4] = prop;
      cResult[5] = id;
      cResult[6] = tmp13;
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, stateFromStores, groupName) => {
      let lastDismissedObjectId;
      _require = id;
      importDefault = stateFromStores;
      dependencyMap = groupName;
      let obj = require("get initialized");
      const items = [UserSettingsProtoStore];
      stateFromStores = obj.useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(guildId),
      );
      let tmp4 = null;
      const tmp = _require;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp5 = null;
        if (null != stateFromStores) {
          let tmp6;
          if (stateFromStores != null) {
            tmp6 = stateFromStores[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
          }
          tmp5 = tmp6;
        }
        tmp4 = tmp5;
      }
      if (tmp4 != null) {
        lastDismissedObjectId = tmp4.lastDismissedObjectId;
      }
      let closure_3 = null;
      let tmp7 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult = tmp(4726);
        let result = tmpResult.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          let tmp13 = null;
          if (!result) {
            if (null == lastDismissedObjectId) {
              tmp13 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
            } else {
              SnowflakeUtilsDefault;
              tmp13 = null;
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
              const obj4 = SnowflakeUtilsDefault;
              if (1 === obj4.compare(id, lastDismissedObjectId)) {
                tmp11 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            closure_3 = tmp11;
            tmp7 = tmp11;
          }
        }
      }
      const items1 = [useGetVisibleContent(tmp7, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp7, groupName, stateFromStores, id];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
          const obj = DismissibleContentUnsafeUtils;
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
            PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
            id,
            guildId,
            obj2,
          );
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, cooldownDurationMs, id, groupName) => {
      let tmp4;
      let tmp5;
      _require = id;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function c() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) {
        if (cResult[3] === id) {
          if (cResult[4] === cooldownDurationMs) {
            dependencyMap = cResult[5];
          }
          const tmp16 = useGetVisibleContent(tmp8, stateFromStores, groupName, undefined, id);
          if (cResult[6] === tmp8) {
            if (cResult[7] === groupName) {
              if (cResult[8] === stateFromStores) {
                let tmp17;
                if (cResult[9] === id) {
                  tmp17 = cResult[10];
                }
                if (cResult[11] === tmp17) {
                  let tmp18;
                  if (cResult[12] === tmp16) {
                    tmp18 = cResult[13];
                  }
                  return tmp18;
                }
                const items1 = [tmp16, tmp17];
                cResult[11] = tmp17;
                cResult[12] = tmp16;
                cResult[13] = items1;
                tmp18 = items1;
              }
            }
          }
          const fn2 = function b(dismissAction, forceTrack) {
            if (null != THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) {
              const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
              const obj = DismissibleContentUtils;
              const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, id, obj2);
            }
          };
          cResult[6] = tmp8;
          cResult[7] = groupName;
          cResult[8] = stateFromStores;
          cResult[9] = id;
          cResult[10] = fn2;
          tmp17 = fn2;
        }
      }
      dependencyMap = null;
      let result = null == THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      if (!result) {
        const tmpResult2 = tmp(2037);
        result = tmpResult2.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
          THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
          id,
          cooldownDurationMs,
        );
      }
      let tmp10 = null;
      if (!result) {
        dependencyMap = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
        tmp10 = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      }
      cResult[2] = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      cResult[3] = id;
      cResult[4] = cooldownDurationMs;
      cResult[5] = tmp10;
    }
  : (THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, cooldownDurationMs, id, groupName) => {
      let stateFromStores;
      _require = id;
      const tmp = _require;
      let obj = require("get initialized");
      const items = [SelectedGuildStore];
      const tmp2 = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      let closure_3 = null;
      let result = null == THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      if (!result) {
        const tmpResult = tmp(tmp2[11]);
        result = tmpResult.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
          THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
          id,
          cooldownDurationMs,
        );
      }
      let tmp6 = null;
      if (!result) {
        closure_3 = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
        tmp6 = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      }
      const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp6, groupName, stateFromStores, id];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const obj = DismissibleContentUtils;
          const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, id, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, stateFromStores, groupName) => {
      let first;
      let found1;
      let tmp6;
      let tmp9;
      _require = stateFromStores;
      importDefault = groupName;
      const tmp = _require;
      const tmp2 = found1;
      let obj = require("react");
      const cResult = obj.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function o() {
          return UserSettingsProtoStore.getGuildDismissedContentState(guildId);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[12]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult2 = tmp(tmp2[15]);
      const newUserDismissibleContent = tmpResult2.useNewUserDismissibleContent(arg0);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === newUserDismissibleContent) {
          found1 = cResult[5];
        }
        const tmp15 = useGetVisibleContent(tmp8, stateFromStores, groupName);
        if (cResult[10] === tmp8) {
          if (cResult[11] === groupName) {
            let tmp16;
            if (cResult[12] === stateFromStores) {
              tmp16 = cResult[13];
            }
            if (cResult[14] === tmp16) {
              let tmp17;
              if (cResult[15] === tmp15) {
                tmp17 = cResult[16];
              }
              return tmp17;
            }
            const items1 = [tmp15, tmp16];
            class E {
              constructor(dismissAction, forceTrack) {
                if (null != found1) {
                  const obj2 = { dismissAction, groupName, guildId, forceTrack };
                  const obj = DismissibleContentUnsafeUtils;
                  const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
                }
              }
            }
            cResult[14] = tmp16;
            cResult[15] = tmp15;
            cResult[16] = items1;
            tmp17 = items1;
          }
        }
        class E {
          constructor(dismissAction, forceTrack) {
            if (null != found1) {
              const obj2 = { dismissAction, groupName, guildId, forceTrack };
              const obj = DismissibleContentUnsafeUtils;
              const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
            }
          }
        }
        cResult[10] = tmp8;
        cResult[11] = groupName;
        cResult[12] = stateFromStores;
        cResult[13] = E;
        tmp16 = E;
      }
      found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let tmp12;
        if (cResult[6] !== stateFromStores) {
          const fn3 = function f(arg0) {
            return (
              null == stateFromStores || null == stateFromStores[arg0] || false === stateFromStores[arg0].dismissed
            );
          };
          cResult[6] = stateFromStores;
          cResult[7] = fn3;
          class E {
            constructor(dismissAction, forceTrack) {
              if (null != found1) {
                const obj2 = { dismissAction, groupName, guildId, forceTrack };
                const obj = DismissibleContentUnsafeUtils;
                const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
              }
            }
          }
        } else {
          tmp12 = cResult[7];
        }
        const found = newUserDismissibleContent.find(tmp12);
        found1 = found;
        tmp9 = found;
      } else {
        tmp9 = null;
        if (null != stateFromStores) {
          let tmp10;
          if (cResult[8] !== stateFromStores) {
            const fn2 = function v(arg0) {
              return null == stateFromStores[arg0] || false === stateFromStores[arg0].dismissed;
            };
            cResult[8] = stateFromStores;
            cResult[9] = fn2;
            class E {
              constructor(dismissAction, forceTrack) {
                if (null != found1) {
                  const obj2 = { dismissAction, groupName, guildId, forceTrack };
                  const obj = DismissibleContentUnsafeUtils;
                  const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
                }
              }
            }
          } else {
            tmp10 = cResult[9];
          }
          found1 = newUserDismissibleContent.find(tmp10);
          tmp9 = found1;
        }
      }
      cResult[3] = stateFromStores;
      cResult[4] = newUserDismissibleContent;
      cResult[5] = tmp9;
    }
  : (arg0, stateFromStores, groupName) => {
      let tmp2;
      _require = stateFromStores;
      let obj = require("get initialized");
      const items = [UserSettingsProtoStore];
      stateFromStores = obj.useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(guildId),
      );
      let obj2 = require("NewUserDismissibleContentRegistry");
      const newUserDismissibleContent = obj2.useNewUserDismissibleContent(arg0);
      let found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        const found = newUserDismissibleContent.find(
          (item) =>
            null == stateFromStores || null == stateFromStores[item] || false === stateFromStores[item].dismissed,
        );
        found1 = found;
        tmp2 = found;
      } else {
        tmp2 = null;
        if (null != stateFromStores) {
          found1 = newUserDismissibleContent.find(
            (item) => null == stateFromStores[item] || false === stateFromStores[item].dismissed,
          );
          tmp2 = found1;
        }
      }
      const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName)];
      const items2 = [tmp2, groupName, stateFromStores];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != found1) {
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, stateFromStores, cooldownDurationMs, groupName) => {
      let first;
      let tmp6;
      _require = stateFromStores;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function c() {
          return UserSettingsProtoStore.getGuildDismissedContentState(guildId);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp9 = null;
        if (null != stateFromStores) {
          let tmp10;
          if (stateFromStores != null) {
            tmp10 = stateFromStores[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
          }
          tmp9 = tmp10;
        }
        tmp8 = tmp9;
      }
      let numTimesDismissed;
      if (tmp8 != null) {
        numTimesDismissed = tmp8.numTimesDismissed;
      }
      if (cResult[3] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let lastDismissedAtMs;
        const tmp12 = cResult[4];
        if (tmp8 != null) {
          lastDismissedAtMs = tmp8.lastDismissedAtMs;
        }
        if (tmp12 === lastDismissedAtMs) {
          if (cResult[5] === numTimesDismissed) {
            if (cResult[6] === cooldownDurationMs) {
              dependencyMap = cResult[7];
            }
            const tmp26 = useGetVisibleContent(tmp14, stateFromStores, groupName);
            if (cResult[8] === tmp14) {
              if (cResult[9] === groupName) {
                let tmp27;
                if (cResult[10] === stateFromStores) {
                  tmp27 = cResult[11];
                }
                if (cResult[12] === tmp27) {
                  let tmp28;
                  if (cResult[13] === tmp26) {
                    tmp28 = cResult[14];
                  }
                  return tmp28;
                }
                const items1 = [tmp26, tmp27];
                cResult[12] = tmp27;
                cResult[13] = tmp26;
                cResult[14] = items1;
                tmp28 = items1;
              }
            }
            const fn2 = function _(dismissAction, forceTrack) {
              if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
                const obj2 = { dismissAction, groupName, guildId, forceTrack };
                const obj = DismissibleContentUnsafeUtils;
                const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
              }
            };
            cResult[8] = tmp14;
            cResult[9] = groupName;
            cResult[10] = stateFromStores;
            cResult[11] = fn2;
            tmp27 = fn2;
          }
        }
      }
      dependencyMap = null;
      let tmp15 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult2 = tmp(4726);
        let lastDismissedAtMs1;
        const tmp16 = !tmpResult2.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (tmp8 != null) {
          lastDismissedAtMs1 = tmp8.lastDismissedAtMs;
        }
        let tmp23 = null;
        if (canShowTimeRecurringContent(tmp16, lastDismissedAtMs1, numTimesDismissed, cooldownDurationMs)) {
          tmp23 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        dependencyMap = tmp23;
        tmp15 = tmp23;
      }
      cResult[3] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      let lastDismissedAtMs2;
      if (tmp8 != null) {
        lastDismissedAtMs2 = tmp8.lastDismissedAtMs;
      }
      cResult[4] = lastDismissedAtMs2;
      cResult[5] = numTimesDismissed;
      cResult[6] = cooldownDurationMs;
      cResult[7] = tmp15;
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, stateFromStores, cooldownDurationMs, groupName) => {
      let numTimesDismissed;
      _require = stateFromStores;
      const tmp = _require;
      let obj = require("get initialized");
      const items = [UserSettingsProtoStore];
      stateFromStores = obj.useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(guildId),
      );
      let tmp4 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp5 = null;
        if (null != stateFromStores) {
          let tmp6;
          if (stateFromStores != null) {
            tmp6 = stateFromStores[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
          }
          tmp5 = tmp6;
        }
        tmp4 = tmp5;
      }
      if (tmp4 != null) {
        numTimesDismissed = tmp4.numTimesDismissed;
      }
      dependencyMap = null;
      let tmp7 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmpResult = tmp(4726);
        let lastDismissedAtMs;
        const tmp8 = !tmpResult.disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (tmp4 != null) {
          lastDismissedAtMs = tmp4.lastDismissedAtMs;
        }
        let tmp15 = null;
        if (canShowTimeRecurringContent(tmp8, lastDismissedAtMs, numTimesDismissed, cooldownDurationMs)) {
          tmp15 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        dependencyMap = tmp15;
        tmp7 = tmp15;
      }
      const items1 = [useGetVisibleContent(tmp7, stateFromStores, groupName)];
      const items2 = [tmp7, groupName, stateFromStores];
      items1[1] = react.useCallback((dismissAction, forceTrack) => {
        if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let settings;
      let stateFromStores;
      let tmp4;
      let tmp5;
      let tmp9;
      const tmp = stateFromStores;
      let obj = stateFromStores(576);
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        const fn = function l() {
          const userContent = settings.settings.userContent;
          let dismissedContents;
          if (userContent != null) {
            dismissedContents = userContent.dismissedContents;
          }
          return dismissedContents;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arr) {
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      if (cResult[5] !== stateFromStores) {
        const fn2 = function c(CHANNEL_NOTICE_INVITE) {
          let tmp2 = null != stateFromStores;
          if (tmp2) {
            const obj = Uint8ArrayUtils;
            tmp2 = !obj.hasBit(tmp, CHANNEL_NOTICE_INVITE);
          }
          return tmp2;
        };
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[6];
      }
      const found = arr.filter(tmp9);
      cResult[2] = arr;
      cResult[3] = stateFromStores;
      cResult[4] = found;
      tmp8 = found;
    }
  : (arr) => {
      let closure_0;
      let settings;
      let obj = require("get initialized");
      const items = [UserSettingsProtoStore];
      _require = obj.useStateFromStores(items, () => {
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
          const obj = Uint8ArrayUtils;
          tmp2 = !obj.hasBit(tmp, item);
        }
        return tmp2;
      });
    };
let result = size.fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = tmp2;
export const useGetVersionedDismissibleContent = tmp3;
export const useGetTimeRecurringDismissibleContent = tmp4;
export const useGetSnowflakeBoundDismissibleContent = tmp5;
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = tmp6;
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = tmp7;
export const useGetSingleUseGuildDismissibleContent_UNSAFE = tmp8;
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = tmp9;
export const useDangerouslyPeekDismissibleContents = tmp10;
