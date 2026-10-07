// discord_app/modules/dismissible_content/useGetDismissibleContent.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Uint8ArrayUtils from "../../utils/Uint8ArrayUtils.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore.tsx";

const require = globalThis.__r;

require = fn;
function useGetVisibleContent(cResult, stateFromStores, groupName, version, id) {
  _require = cResult;
  closure_1 = stateFromStores;
  dependencyMap = groupName;
  guildId = version;
  noop = id;
  const tmp = DismissibleContentShownStateStore((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const tmp4 = guildId(require("OverlayTrackingUtils").useOverlayLockState(), 2);
  const first = tmp4[0];
  closure_6 = tmp6;
  let result = null != cResult;
  if (result) {
    result = tmp2(2037).isDismissibleContentBlockedByOverlay(cResult, first, tmp6);
    const tmp2Result = tmp2(2037);
  }
  let obj = require("OverlayTrackingUtils");
  const items = [ref];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = DismissibleContentFrameworkStore.hasUserHitDCCap(tmp, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = noop.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items1 = [cResult, groupName, stateFromStores, result, version, id];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = groupName;
        let tmp7 = version;
        let tmp8 = snowflakeId;
        const obj2 = {
          content_type: dismissible_content.DismissibleContent[closure_0],
          group_name: null,
          latest_version: null,
          guild_id: null,
          snowflake_id: null,
        };
        if (groupName == null) {
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
      const obj3 = DismissibleContentUtils;
      const obj4 = { groupName, guildId: ref.current, version, snowflakeId };
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(
        closure_0,
        obj4,
        first,
        closure_6,
      );
      return () => {
        if (null != closure_1_0) {
          const obj = { content: tmp, groupName };
          removeCandidateContent(obj, !ref.hasUserHitDCCap());
        }
      };
    }
  }, items1);
  let tmp11 = null;
  if (tmp) {
    tmp11 = null;
    if (null != cResult) {
      tmp11 = cResult;
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
  let hasLoadedResult = UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
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
const removeCandidateContent = fn(2042).removeCandidateContent;
const AnalyticEvents = fn(1085).AnalyticEvents;
const UserSettingsTypes = fn(1095).UserSettingsTypes;
fn(558);
let closure_13 = {};
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [UserSettingsProtoStore];
      return require("initialize").useStateFromStores(items, () => {
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
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, groupName) => {
      _require = groupName;
      const cResult = require("c").c(18);
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectedGuildStore];
        class C {
          constructor() {
            return closure_1_6.getGuildId();
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        let tmp9 = C;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
      const tmpResult3 = require("initialize");
      const newUserDismissibleContent = require("NewUserDismissibleContentRegistry").useNewUserDismissibleContent(arg0);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === newUserDismissibleContent) {
          found1 = tmp12;
          class C {
            constructor() {
              return closure_1_6.getGuildId();
            }
          }
          const tmp21 = useGetVisibleContent(cResult[6], stateFromStores1, groupName);
          if (cResult[11] === cResult[6]) {
            if (cResult[12] === groupName) {
              if (cResult[13] === stateFromStores1) {
                let tmp22 = cResult[14];
              }
              if (cResult[15] === tmp22) {
                if (cResult[16] === tmp21) {
                  let tmp23 = cResult[17];
                }
                return tmp23;
              }
              const items2 = [,];
              class C {
                constructor() {
                  return closure_1_6.getGuildId();
                }
              }
              items2[1] = tmp22;
              class N {
                constructor(arg0, arg1) {
                  if (null != closure_2) {
                    tmp2 = arg0;
                    tmp3 = groupName;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[17]);
                    obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
                    obj1.dismissAction = arg0;
                    tmp6 = closure_0;
                    obj1.groupName = closure_0;
                    tmp7 = closure_3;
                    obj1.guildId = closure_3;
                    obj1.forceTrack = groupName;
                    result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj1);
                  }
                  return;
                }
              }
              cResult[16] = tmp21;
              cResult[17] = items2;
              tmp23 = items2;
            }
          }
          class N {
            constructor(arg0, arg1) {
              if (null != closure_2) {
                tmp2 = arg0;
                tmp3 = groupName;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[17]);
                obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
                obj1.dismissAction = arg0;
                tmp6 = closure_0;
                obj1.groupName = closure_0;
                tmp7 = closure_3;
                obj1.guildId = closure_3;
                obj1.forceTrack = groupName;
                result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj1);
              }
              return;
            }
          }
          cResult[11] = cResult[6];
          cResult[12] = groupName;
          cResult[13] = stateFromStores1;
          cResult[14] = N;
          tmp22 = N;
        }
      }
      found1 = null;
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        if (null != stateFromStores) {
          if (cResult[9] !== stateFromStores) {
            class T {
              constructor(arg0) {
                obj = closure_0(closure_2[16]);
                return !obj.hasBit(closure_1, arg0);
              }
            }
            cResult[9] = stateFromStores;
            class C {
              constructor() {
                return closure_1_6.getGuildId();
              }
            }
            cResult[10] = T;
          } else {
            class T {
              constructor(arg0) {
                obj = closure_0(closure_2[16]);
                return !obj.hasBit(closure_1, arg0);
              }
            }
          }
          const found = newUserDismissibleContent.find(T);
          found1 = found;
          class C {
            constructor() {
              return closure_1_6.getGuildId();
            }
          }
        }
        class C {
          constructor() {
            return closure_1_6.getGuildId();
          }
        }
        cResult[5] = newUserDismissibleContent;
        class N {
          constructor(arg0, arg1) {
            if (null != closure_2) {
              tmp2 = arg0;
              tmp3 = groupName;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[17]);
              obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
              obj1.dismissAction = arg0;
              tmp6 = closure_0;
              obj1.groupName = closure_0;
              tmp7 = closure_3;
              obj1.guildId = closure_3;
              obj1.forceTrack = groupName;
              result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj1);
            }
            return;
          }
        }
        cResult[6] = null;
      }
      if (cResult[7] !== stateFromStores) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[16]);
            return !obj.hasBit(closure_1, arg0);
          }
        }
        cResult[7] = stateFromStores;
        class C {
          constructor() {
            return closure_1_6.getGuildId();
          }
        }
        cResult[8] = tmp17;
      } else {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[16]);
            return !obj.hasBit(closure_1, arg0);
          }
        }
      }
      found1 = newUserDismissibleContent.find(tmp17);
      const tmpResult4 = require("NewUserDismissibleContentRegistry");
    }
  : (arg0, groupName) => {
      _require = groupName;
      const items = [UserSettingsProtoStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        const userContent = settings.settings.userContent;
        let dismissedContents;
        if (userContent != null) {
          dismissedContents = userContent.dismissedContents;
        }
        return dismissedContents;
      });
      let obj = require("initialize");
      const items1 = [SelectedGuildStore];
      stateFromStores1 = require("initialize").useStateFromStores(items1, () => guildId.getGuildId());
      let obj2 = require("initialize");
      const newUserDismissibleContent = require("NewUserDismissibleContentRegistry").useNewUserDismissibleContent(arg0);
      let found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        const found = newUserDismissibleContent.find((item) => {
          let tmp2 = null == stateFromStores;
          if (!tmp2) {
            tmp2 = !Uint8ArrayUtils.hasBit(tmp, item);
          }
          return tmp2;
        });
        found1 = found;
        let tmp3 = found;
      } else {
        tmp3 = null;
        if (null != stateFromStores) {
          found1 = newUserDismissibleContent.find((item) => !Uint8ArrayUtils.hasBit(stateFromStores, item));
          tmp3 = found1;
        }
      }
      const items2 = [useGetVisibleContent(tmp3, stateFromStores1, groupName)];
      const items3 = [tmp3, groupName, stateFromStores1];
      items2[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != found1) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
        }
      }, items3);
      return items2;
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, version, groupName) => {
      _require = version;
      let result = _require;
      const cResult = require("c").c(14);
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
      let obj = require("c");
      const stateFromStores = result(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedVersion) {
          if (cResult[4] === version) {
            dependencyMap = tmp8;
            const tmp21 = useGetVisibleContent(cResult[5], stateFromStores, groupName, version);
            if (cResult[6] === cResult[5]) {
              if (cResult[7] === groupName) {
                if (cResult[8] === stateFromStores) {
                  if (cResult[9] === version) {
                    let tmp22 = cResult[10];
                  }
                  if (cResult[11] === tmp22) {
                    if (cResult[12] === tmp21) {
                      let tmp23 = cResult[13];
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
              if (null != c2) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack, version };
                const result = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed(tmp, version, obj2);
              }
            };
            cResult[6] = cResult[5];
            cResult[7] = groupName;
            cResult[8] = stateFromStores;
            cResult[9] = version;
            cResult[10] = fn2;
            tmp22 = fn2;
          }
        }
      }
      dependencyMap = null;
      let tmp9 = null;
      if (null == PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        cResult[3] = lastDismissedVersion;
        cResult[4] = version;
        cResult[5] = tmp9;
      } else {
        result = result(4726).disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          tmp9 = null;
          if (null != lastDismissedVersion) {
            let tmp13 = null;
            if (!result) {
              tmp13 = null;
              if (lastDismissedVersion < version) {
                tmp13 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
            }
            dependencyMap = tmp13;
            tmp9 = tmp13;
          }
        }
        const resultResult1 = result(4726);
      }
      let tmp14 = null;
      if (!result) {
        if (null == lastDismissedVersion) {
          tmp14 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        } else {
          tmp14 = null;
        }
      }
      dependencyMap = tmp14;
      tmp9 = tmp14;
      const resultResult = result(504);
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, version, groupName) => {
      _require = version;
      const lastDismissedVersion = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedVersion;
      const items = [SelectedGuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
      closure_3 = null;
      let tmp4 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let result = require("NewUserDismissibleContentRegistry").disableNewUserDismissibleContent(
          PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        );
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
        const tmpResult = require("NewUserDismissibleContentRegistry");
      }
      const items1 = [useGetVisibleContent(tmp4, stateFromStores, groupName, version)];
      const items2 = [tmp4, groupName, stateFromStores, version];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_3) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack, version };
          const result = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed(tmp, version, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, cooldownDurationMs, groupName) => {
      _require = groupName;
      const cResult = require("c").c(14);
      let obj = require("c");
      ({ lastDismissedAtMs, numTimesDismissed } = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE));
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
      const tmp4 = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
      stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedAtMs) {
          if (cResult[4] === numTimesDismissed) {
            if (cResult[5] === cooldownDurationMs) {
              closure_1 = cResult[6];
            }
            const tmp17 = useGetVisibleContent(tmp9, stateFromStores, groupName);
            if (cResult[7] === tmp9) {
              if (cResult[8] === groupName) {
                if (cResult[9] === stateFromStores) {
                  let tmp18 = cResult[10];
                }
                if (cResult[11] === tmp18) {
                  if (cResult[12] === tmp17) {
                    let tmp19 = cResult[13];
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
              if (null != closure_1) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
                const result = DismissibleContentUtils.markTimeRecurringDismissibleContentAsDismissed(tmp, obj2);
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
        tmpResult2 = tmp(tmp2[15]);
      }
      cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      cResult[3] = lastDismissedAtMs;
      cResult[4] = numTimesDismissed;
      cResult[5] = cooldownDurationMs;
      cResult[6] = tmp10;
      const tmpResult = require("initialize");
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, cooldownDurationMs, groupName) => {
      _require = groupName;
      ({ lastDismissedAtMs, numTimesDismissed } = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE));
      const tmp = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
      const tmp2 = _require;
      const items = [SelectedGuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
      dependencyMap = null;
      let tmp5 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp10 = null;
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
        tmp2Result = tmp2(4726);
      }
      const items1 = [useGetVisibleContent(tmp5, stateFromStores, groupName)];
      const items2 = [tmp5, groupName, stateFromStores];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_2) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const result = DismissibleContentUtils.markTimeRecurringDismissibleContentAsDismissed(tmp, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, groupName) => {
      _require = id;
      importDefault = groupName;
      let result = _require;
      const cResult = require("c").c(14);
      const lastDismissedObjectId = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedObjectId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function c() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      let obj2 = require("c");
      const stateFromStores = result(504).useStateFromStores(tmp3, tmp4);
      if (cResult[2] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[3] === lastDismissedObjectId) {
          if (cResult[4] === id) {
            dependencyMap = tmp7;
            const tmp22 = useGetVisibleContent(cResult[5], stateFromStores, groupName, undefined, id);
            if (cResult[6] === cResult[5]) {
              if (cResult[7] === groupName) {
                if (cResult[8] === stateFromStores) {
                  if (cResult[9] === id) {
                    let tmp23 = cResult[10];
                  }
                  if (cResult[11] === tmp23) {
                    if (cResult[12] === tmp22) {
                      let tmp24 = cResult[13];
                    }
                    return tmp24;
                  }
                  const items1 = [tmp22, tmp23];
                  cResult[11] = tmp23;
                  cResult[12] = tmp22;
                  cResult[13] = items1;
                  tmp24 = items1;
                }
              }
            }
            const fn2 = function _(dismissAction, forceTrack) {
              if (null != c2) {
                const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
                const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
                  tmp,
                  closure_0,
                  obj2,
                );
              }
            };
            cResult[6] = cResult[5];
            cResult[7] = groupName;
            cResult[8] = stateFromStores;
            cResult[9] = id;
            cResult[10] = fn2;
            tmp23 = fn2;
          }
        }
      }
      dependencyMap = null;
      let tmp8 = null;
      if (null == PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        cResult[2] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        cResult[3] = lastDismissedObjectId;
        cResult[4] = id;
        cResult[5] = tmp8;
      } else {
        result = result(4726).disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          tmp8 = null;
          if (null != lastDismissedObjectId) {
            let tmp12 = null;
            if (!result) {
              tmp12 = null;
              if (1 === obj5.compare(id, lastDismissedObjectId)) {
                tmp12 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
              obj5 = SnowflakeUtilsDefault;
            }
            dependencyMap = tmp12;
            tmp8 = tmp12;
          }
        }
        const resultResult1 = result(4726);
      }
      let tmp14 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp14 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        } else {
          result = SnowflakeUtilsDefault;
          result.compare(id, lastDismissedObjectId);
          tmp14 = null;
        }
      }
      dependencyMap = tmp14;
      tmp8 = tmp14;
      const resultResult = result(504);
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, groupName) => {
      _require = id;
      importDefault = groupName;
      const lastDismissedObjectId = closure_14(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE).lastDismissedObjectId;
      const items = [SelectedGuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
      closure_3 = null;
      let tmp4 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let result = require("NewUserDismissibleContentRegistry").disableNewUserDismissibleContent(
          PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        );
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
              if (1 === obj3.compare(id, lastDismissedObjectId)) {
                tmp9 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
              obj3 = require("SnowflakeUtils");
            }
            closure_3 = tmp9;
            tmp4 = tmp9;
          }
        }
        const tmpResult = require("NewUserDismissibleContentRegistry");
      }
      const items1 = [useGetVisibleContent(tmp4, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp4, groupName, stateFromStores, id];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_3) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(tmp, closure_0, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, stateFromStores, groupName) => {
      _require = id;
      importDefault = stateFromStores;
      dependencyMap = groupName;
      let result = _require;
      const cResult = require("c").c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function c() {
          return UserSettingsProtoStore.getGuildDismissedContentState(closure_1);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      let obj2 = require("c");
      stateFromStores = result(504).useStateFromStores(first, tmp5);
      let tmp7 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let tmp8 = null;
        if (null != stateFromStores) {
          let tmp9;
          if (stateFromStores != null) {
            tmp9 = stateFromStores[PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
          }
          tmp8 = tmp9;
        }
        tmp7 = tmp8;
      }
      if (tmp7 != null) {
        const lastDismissedObjectId = tmp7.lastDismissedObjectId;
      }
      if (cResult[3] === PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        if (cResult[4] === lastDismissedObjectId) {
          if (cResult[5] === id) {
            c3 = tmp10;
            const tmp25 = useGetVisibleContent(cResult[6], stateFromStores, groupName, undefined, id);
            if (cResult[7] === cResult[6]) {
              if (cResult[8] === groupName) {
                if (cResult[9] === stateFromStores) {
                  if (cResult[10] === id) {
                    let tmp26 = cResult[11];
                  }
                  if (cResult[12] === tmp26) {
                    if (cResult[13] === tmp25) {
                      let tmp27 = cResult[14];
                    }
                    return tmp27;
                  }
                  const items1 = [tmp25, tmp26];
                  cResult[12] = tmp26;
                  cResult[13] = tmp25;
                  cResult[14] = items1;
                  tmp27 = items1;
                }
              }
            }
            const fn2 = function _(dismissAction, forceTrack) {
              if (null != c3) {
                const obj = DismissibleContentUnsafeUtils;
                const obj2 = { dismissAction, groupName, guildId, forceTrack };
                const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
                  c3,
                  closure_0,
                  guildId,
                  obj2,
                );
              }
            };
            cResult[7] = cResult[6];
            cResult[8] = groupName;
            cResult[9] = stateFromStores;
            cResult[10] = id;
            cResult[11] = fn2;
            tmp26 = fn2;
          }
        }
      }
      c3 = null;
      let tmp11 = null;
      if (null == PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        cResult[3] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        cResult[4] = lastDismissedObjectId;
        cResult[5] = id;
        cResult[6] = tmp11;
      } else {
        result = result(4726).disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
          tmp11 = null;
          if (null != lastDismissedObjectId) {
            let tmp15 = null;
            if (!result) {
              tmp15 = null;
              if (1 === obj5.compare(id, lastDismissedObjectId)) {
                tmp15 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
              obj5 = SnowflakeUtilsDefault;
            }
            c3 = tmp15;
            tmp11 = tmp15;
          }
        }
        const resultResult1 = result(4726);
      }
      let tmp17 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp17 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        } else {
          result = SnowflakeUtilsDefault;
          result.compare(id, lastDismissedObjectId);
          tmp17 = null;
        }
      }
      c3 = tmp17;
      tmp11 = tmp17;
      const resultResult = result(504);
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, id, stateFromStores, groupName) => {
      _require = id;
      importDefault = stateFromStores;
      dependencyMap = groupName;
      const items = [UserSettingsProtoStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(closure_1),
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
        const lastDismissedObjectId = tmp4.lastDismissedObjectId;
      }
      closure_3 = null;
      let tmp7 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        let result = require("NewUserDismissibleContentRegistry").disableNewUserDismissibleContent(
          PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        );
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
              if (1 === obj4.compare(id, lastDismissedObjectId)) {
                tmp11 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
              }
              obj4 = SnowflakeUtilsDefault;
            }
            closure_3 = tmp11;
            tmp7 = tmp11;
          }
        }
        const tmpResult = require("NewUserDismissibleContentRegistry");
      }
      const items1 = [useGetVisibleContent(tmp7, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp7, groupName, stateFromStores, id];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_3) {
          const obj = DismissibleContentUnsafeUtils;
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(
            closure_3,
            closure_0,
            guildId,
            obj2,
          );
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, cooldownDurationMs, id, groupName) => {
      _require = id;
      const cResult = require("c").c(14);
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) {
        if (cResult[3] === id) {
          if (cResult[4] === cooldownDurationMs) {
            dependencyMap = cResult[5];
          }
          const tmp16 = useGetVisibleContent(tmp8, stateFromStores, groupName, undefined, id);
          if (cResult[6] === tmp8) {
            if (cResult[7] === groupName) {
              if (cResult[8] === stateFromStores) {
                if (cResult[9] === id) {
                  let tmp17 = cResult[10];
                }
                if (cResult[11] === tmp17) {
                  if (cResult[12] === tmp16) {
                    let tmp18 = cResult[13];
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
            if (null != closure_2) {
              const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
              const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
                tmp,
                closure_0,
                obj2,
              );
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
        result = tmp(2037).isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
          THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
          id,
          cooldownDurationMs,
        );
        const tmpResult2 = tmp(2037);
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
      const tmpResult = require("initialize");
    }
  : (THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, cooldownDurationMs, id, groupName) => {
      _require = id;
      const items = [SelectedGuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
      closure_3 = null;
      let result = null == THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      if (!result) {
        result = require("DismissibleContentUtils").isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
          THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
          id,
          cooldownDurationMs,
        );
        const tmpResult = require("DismissibleContentUtils");
      }
      let tmp6 = null;
      if (!result) {
        closure_3 = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
        tmp6 = THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
      }
      const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, id)];
      const items2 = [tmp6, groupName, stateFromStores, id];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_3) {
          const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
          const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(tmp, closure_0, obj2);
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, stateFromStores, groupName) => {
      _require = stateFromStores;
      importDefault = groupName;
      const cResult = require("c").c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function o() {
          return UserSettingsProtoStore.getGuildDismissedContentState(closure_0);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmpResult = require("initialize");
      const newUserDismissibleContent = require("NewUserDismissibleContentRegistry").useNewUserDismissibleContent(arg0);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === newUserDismissibleContent) {
          found1 = tmp8;
          const tmp16 = useGetVisibleContent(cResult[5], stateFromStores, groupName);
          if (cResult[10] === cResult[5]) {
            if (cResult[11] === groupName) {
              if (cResult[12] === stateFromStores) {
                let tmp17 = cResult[13];
              }
              if (cResult[14] === tmp17) {
                if (cResult[15] === tmp16) {
                  let tmp18 = cResult[16];
                }
                return tmp18;
              }
              const items1 = [tmp16, tmp17];
              class E {
                constructor(arg0, arg1) {
                  if (null != closure_2) {
                    tmp2 = arg0;
                    tmp3 = stateFromStores;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[17]);
                    tmp6 = closure_0;
                    obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
                    obj1.dismissAction = arg0;
                    tmp7 = closure_1;
                    obj1.groupName = closure_1;
                    obj1.guildId = closure_0;
                    obj1.forceTrack = stateFromStores;
                    result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, closure_0, obj1);
                  }
                  return;
                }
              }
              cResult[15] = tmp16;
              cResult[16] = items1;
              tmp18 = items1;
            }
          }
          class E {
            constructor(arg0, arg1) {
              if (null != closure_2) {
                tmp2 = arg0;
                tmp3 = stateFromStores;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[17]);
                tmp6 = closure_0;
                obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
                obj1.dismissAction = arg0;
                tmp7 = closure_1;
                obj1.groupName = closure_1;
                obj1.guildId = closure_0;
                obj1.forceTrack = stateFromStores;
                result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, closure_0, obj1);
              }
              return;
            }
          }
          cResult[10] = cResult[5];
          cResult[11] = groupName;
          cResult[12] = stateFromStores;
          cResult[13] = E;
          tmp17 = E;
        }
      }
      found1 = null;
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let tmp9 = null;
        if (null != stateFromStores) {
          if (cResult[8] !== stateFromStores) {
            const fn2 = function v(arg0) {
              let tmp = null == stateFromStores[arg0];
              if (!tmp) {
                tmp = false === stateFromStores[arg0].dismissed;
              }
              return tmp;
            };
            cResult[8] = stateFromStores;
            cResult[9] = fn2;
            let tmp10 = fn2;
          } else {
            tmp10 = cResult[9];
          }
          const found = newUserDismissibleContent.find(tmp10);
          found1 = found;
          tmp9 = found;
        }
        cResult[3] = stateFromStores;
        cResult[4] = newUserDismissibleContent;
        class E {
          constructor(arg0, arg1) {
            if (null != closure_2) {
              tmp2 = arg0;
              tmp3 = stateFromStores;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[17]);
              tmp6 = closure_0;
              obj1 = { dismissAction: null, groupName: null, guildId: null, forceTrack: null };
              obj1.dismissAction = arg0;
              tmp7 = closure_1;
              obj1.groupName = closure_1;
              obj1.guildId = closure_0;
              obj1.forceTrack = stateFromStores;
              result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, closure_0, obj1);
            }
            return;
          }
        }
        cResult[5] = tmp9;
      }
      if (cResult[6] !== stateFromStores) {
        const fn3 = function f(arg0) {
          let tmp2 = null == stateFromStores || null == stateFromStores[arg0];
          if (!tmp2) {
            tmp2 = false === stateFromStores[arg0].dismissed;
          }
          return tmp2;
        };
        cResult[6] = stateFromStores;
        cResult[7] = fn3;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[7];
      }
      found1 = newUserDismissibleContent.find(tmp12);
      const tmpResult2 = require("NewUserDismissibleContentRegistry");
    }
  : (arg0, stateFromStores, groupName) => {
      _require = stateFromStores;
      const items = [UserSettingsProtoStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(closure_0),
      );
      let obj = require("initialize");
      const newUserDismissibleContent = require("NewUserDismissibleContentRegistry").useNewUserDismissibleContent(arg0);
      let found1 = null;
      if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        const found = newUserDismissibleContent.find((item) => {
          let tmp2 = null == stateFromStores || null == stateFromStores[item];
          if (!tmp2) {
            tmp2 = false === stateFromStores[item].dismissed;
          }
          return tmp2;
        });
        found1 = found;
        let tmp2 = found;
      } else {
        tmp2 = null;
        if (null != stateFromStores) {
          found1 = newUserDismissibleContent.find((item) => {
            let tmp = null == stateFromStores[item];
            if (!tmp) {
              tmp = false === stateFromStores[item].dismissed;
            }
            return tmp;
          });
          tmp2 = found1;
        }
      }
      const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName)];
      const items2 = [tmp2, groupName, stateFromStores];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != found1) {
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const result = DismissibleContentUnsafeUtils.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(
            tmp,
            guildId,
            obj2,
          );
        }
      }, items2);
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, stateFromStores, cooldownDurationMs, groupName) => {
      _require = stateFromStores;
      const cResult = require("c").c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stateFromStores) {
        const fn = function c() {
          return UserSettingsProtoStore.getGuildDismissedContentState(closure_0);
        };
        cResult[1] = stateFromStores;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, tmp6);
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
        if (tmp8 != null) {
          lastDismissedAtMs = tmp8.lastDismissedAtMs;
        }
        if (cResult[4] === lastDismissedAtMs) {
          if (cResult[5] === numTimesDismissed) {
            if (cResult[6] === cooldownDurationMs) {
              dependencyMap = cResult[7];
            }
            const tmp25 = useGetVisibleContent(tmp13, stateFromStores, groupName);
            if (cResult[8] === tmp13) {
              if (cResult[9] === groupName) {
                if (cResult[10] === stateFromStores) {
                  let tmp26 = cResult[11];
                }
                if (cResult[12] === tmp26) {
                  if (cResult[13] === tmp25) {
                    let tmp27 = cResult[14];
                  }
                  return tmp27;
                }
                const items1 = [tmp25, tmp26];
                cResult[12] = tmp26;
                cResult[13] = tmp25;
                cResult[14] = items1;
                tmp27 = items1;
              }
            }
            const fn2 = function _(dismissAction, forceTrack) {
              if (null != closure_2) {
                const obj2 = { dismissAction, groupName, guildId, forceTrack };
                const result = DismissibleContentUnsafeUtils.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(
                  tmp,
                  guildId,
                  obj2,
                );
              }
            };
            cResult[8] = tmp13;
            cResult[9] = groupName;
            cResult[10] = stateFromStores;
            cResult[11] = fn2;
            tmp26 = fn2;
          }
        }
      }
      dependencyMap = null;
      let tmp14 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmp15 = !tmp(4726).disableNewUserDismissibleContent(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE);
        let lastDismissedAtMs1;
        if (tmp8 != null) {
          lastDismissedAtMs1 = tmp8.lastDismissedAtMs;
        }
        let tmp22 = null;
        if (canShowTimeRecurringContent(tmp15, lastDismissedAtMs1, numTimesDismissed, cooldownDurationMs)) {
          tmp22 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        dependencyMap = tmp22;
        tmp14 = tmp22;
        const tmpResult2 = tmp(4726);
      }
      cResult[3] = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
      let lastDismissedAtMs2;
      if (tmp8 != null) {
        lastDismissedAtMs2 = tmp8.lastDismissedAtMs;
      }
      cResult[4] = lastDismissedAtMs2;
      cResult[5] = numTimesDismissed;
      cResult[6] = cooldownDurationMs;
      cResult[7] = tmp14;
      const tmpResult = require("initialize");
    }
  : (PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, stateFromStores, cooldownDurationMs, groupName) => {
      _require = stateFromStores;
      const items = [UserSettingsProtoStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        UserSettingsProtoStore.getGuildDismissedContentState(closure_0),
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
        const numTimesDismissed = tmp4.numTimesDismissed;
      }
      dependencyMap = null;
      let tmp7 = null;
      if (null != PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE) {
        const tmp8 = !require("NewUserDismissibleContentRegistry").disableNewUserDismissibleContent(
          PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        );
        let lastDismissedAtMs;
        if (tmp4 != null) {
          lastDismissedAtMs = tmp4.lastDismissedAtMs;
        }
        let tmp15 = null;
        if (canShowTimeRecurringContent(tmp8, lastDismissedAtMs, numTimesDismissed, cooldownDurationMs)) {
          tmp15 = PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
        dependencyMap = tmp15;
        tmp7 = tmp15;
        const tmpResult = require("NewUserDismissibleContentRegistry");
      }
      const items1 = [useGetVisibleContent(tmp7, stateFromStores, groupName)];
      const items2 = [tmp7, groupName, stateFromStores];
      items1[1] = noop.useCallback((dismissAction, forceTrack) => {
        if (null != closure_2) {
          const obj2 = { dismissAction, groupName, guildId, forceTrack };
          const result = DismissibleContentUnsafeUtils.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(
            tmp,
            guildId,
            obj2,
          );
        }
      }, items2);
      return items1;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = tmp2;
export const useGetVersionedDismissibleContent = tmp3;
export const useGetTimeRecurringDismissibleContent = tmp4;
export const useGetSnowflakeBoundDismissibleContent = tmp5;
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = tmp6;
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = tmp7;
export const useGetSingleUseGuildDismissibleContent_UNSAFE = tmp8;
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = tmp9;
export const useDangerouslyPeekDismissibleContents = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      const cResult = stateFromStores(576).c(7);
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
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arr) {
        if (cResult[3] === stateFromStores) {
          return cResult[4];
        }
      }
      if (cResult[5] !== stateFromStores) {
        const fn2 = function c(CHANNEL_NOTICE_INVITE) {
          let tmp2 = null != stateFromStores;
          if (tmp2) {
            tmp2 = !Uint8ArrayUtils.hasBit(tmp, CHANNEL_NOTICE_INVITE);
          }
          return tmp2;
        };
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[6];
      }
      const found = arr.filter(tmp8);
      cResult[2] = arr;
      cResult[3] = stateFromStores;
      cResult[4] = found;
      const tmpResult = stateFromStores(504);
    }
  : (arr) => {
      const items = [UserSettingsProtoStore];
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
    };
