// discord_app/modules/age_assurance/AgeVerificationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import _modDef3120 from "AgeAssurance.messages.js";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import usePreviousDefault from "../../hooks/usePrevious.tsx";
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import RegionalFeatureConfigStore from "../regional_feature_config/RegionalFeatureConfigStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AgeVerificationStore from "AgeVerificationStore.tsx";

const require = globalThis.__r;

require = fn;
function shouldCallReactiveCheck() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (!tmp5) {
    let isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(
      AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK,
    );
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = AgeVerificationStore.shouldCallReactiveCheck();
    }
    tmp7 = isFeatureAgeGatedResult;
  }
  return tmp7;
}
let closure_18 = async function _maybePerformReactiveCheck() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let tmp5 = null;
          if (shouldCallReactiveCheck()) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: require("ReactiveCheckActionCreators").fetchReactiveCheckResult(), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      c0 = 3;
      const obj6 = { value: tmp5, done: true };
      return obj6;
    } catch (tmp9) {
      c0 = tmp;
      throw tmp9;
    }
  }
};
fn(5917).FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
const AgeGateConstants = fn(1110);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: c10 } = AgeGateConstants);
let items = [
  fn(5918).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
  fn(5918).AgeVerificationModalEntryPoint.START_STAGE_PROMPT,
  fn(5918).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
];
const set = new Set(items);
let items1 = [, , , , ,];
({
  NSFW_SERVER: arr2[0],
  NSFW_SERVER_INVITE: arr2[1],
  NSFW_SERVER_INVITE_EMBED: arr2[2],
  LARGE_GUILD: arr2[3],
  JOIN_LARGE_GUILD_UNDERAGE: arr2[4],
  ACCESS_LARGE_GUILD_UNDERAGE: arr2[5],
} = AgeGateSource);
const set1 = new Set(items1);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVerifiedAdult() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      let tmp9 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      if (!tmp9) {
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.ageVerificationStatus;
        }
        tmp9 = prop1 === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
      }
      return tmp9;
    }
  : function useIsVerifiedAdult() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      let tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
      if (!tmp5) {
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.ageVerificationStatus;
        }
        tmp5 = prop1 === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
      }
      return tmp5;
    };
let closure_13 = tmp7;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsAssignedByDiscord() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          return (
            prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT ||
            prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
          );
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useIsAssignedByDiscord() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        return (
          prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT ||
          prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
        );
      });
    };
let closure_14 = tmp8;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVerifiedTeen() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          return (
            prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN ||
            prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
          );
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useIsVerifiedTeen() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        return (
          prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN ||
          prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
        );
      });
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsAgeVerified() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      let tmp9 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
      if (tmp9) {
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.ageVerificationStatus;
        }
        tmp9 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
      }
      return tmp9;
    }
  : function useIsAgeVerified() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
      if (tmp5) {
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.ageVerificationStatus;
        }
        tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
      }
      return tmp5;
    };
let closure_15 = tmp10;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowAssignedAgeGroupSettings() {
      const tmp = closure_14();
      return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
    }
  : function useShowAssignedAgeGroupSettings() {
      const tmp = closure_14();
      return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
    };
ReactCompilerGating = fn(558);
const tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldCallReactiveCheck() {
      const cResult = require("c").c(5);
      const tmp4 = closure_15();
      _require = tmp4;
      const obj = require("c");
      let tmp = _require;
      const isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(
        require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AgeVerificationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isFeatureAgeGated) {
        if (cResult[2] === tmp4) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        return tmp(504).useStateFromStores(first, tmp8, tmp9);
      }
      const fn = function n() {
        let tmp = !closure_0;
        if (!closure_0) {
          let result = isFeatureAgeGated;
          if (isFeatureAgeGated) {
            result = AgeVerificationStore.shouldCallReactiveCheck();
          }
          tmp = result;
        }
        return tmp;
      };
      const items1 = [tmp4, isFeatureAgeGated];
      cResult[1] = isFeatureAgeGated;
      cResult[2] = tmp4;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = fn;
      const obj2 = require("RegionalFeatureConfigUtils");
    }
  : function useShouldCallReactiveCheck() {
      let tmp = closure_15();
      _require = tmp;
      const isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(
        require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK,
      );
      const obj = require("RegionalFeatureConfigUtils");
      const items = [AgeVerificationStore];
      const items1 = [tmp, isFeatureAgeGated];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let tmp = !closure_0;
          if (!closure_0) {
            let result = isFeatureAgeGated;
            if (isFeatureAgeGated) {
              result = AgeVerificationStore.shouldCallReactiveCheck();
            }
            tmp = result;
          }
          return tmp;
        },
        items1,
      );
    };
let closure_16 = tmp12;
ReactCompilerGating = fn(558);
const tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useWatchAgeVerificationStatusChange(arg0) {
      _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function c() {
          currentUser = currentUser.getCurrentUser();
          let prop;
          if (currentUser != null) {
            prop = currentUser.ageVerificationStatus;
          }
          return prop;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      const tmp8 = usePreviousDefault(stateFromStores);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn2 = function f() {
          return null != AuthenticationStore.getSuspendedUserToken();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [AuthenticationStore];
        class C {
          constructor() {
            return closure_1_6.isAuthenticated();
          }
        }
        cResult[4] = items2;
        cResult[5] = C;
        let tmp14 = C;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[4];
        tmp14 = cResult[5];
      }
      const tmpResult3 = require("initialize");
      let tmp17 = null != tmp8;
      const stateFromStores2 = require("initialize").useStateFromStores(tmp13, tmp14);
      if (tmp17) {
        tmp17 = null != stateFromStores;
      }
      if (tmp17) {
        tmp17 = tmp8 !== stateFromStores;
      }
      importDefault = tmp17;
      let tmp18 = !stateFromStores1;
      if (!stateFromStores1) {
        tmp18 = !stateFromStores2;
      }
      dependencyMap = tmp18;
      if (cResult[6] === arg0) {
        if (cResult[7] === tmp17) {
          if (cResult[8] === tmp18) {
            let tmp19 = cResult[9];
            let tmp20 = cResult[10];
          }
          const effect = noop.useEffect(tmp19, tmp20);
          class C {
            constructor() {
              return closure_1_6.isAuthenticated();
            }
          }
        }
      }
      const fn3 = function h() {
        let tmp = closure_1;
        if (!closure_1) {
          tmp = closure_2;
        }
        if (tmp) {
          closure_0();
        }
      };
      const items3 = [arg0, tmp17, tmp18];
      cResult[6] = arg0;
      cResult[7] = tmp17;
      cResult[8] = tmp18;
      cResult[9] = fn3;
      cResult[10] = items3;
      tmp20 = items3;
      tmp19 = fn3;
      const tmpResult4 = require("initialize");
    }
  : function useWatchAgeVerificationStatusChange(arg0) {
      _require = arg0;
      const items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        return prop;
      });
      const tmp2 = usePreviousDefault(stateFromStores);
      const obj = require("initialize");
      const items1 = [AuthenticationStore];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items1,
        () => null != AuthenticationStore.getSuspendedUserToken(),
      );
      const obj2 = require("initialize");
      const items2 = [AuthenticationStore];
      let tmp5 = null != tmp2;
      const stateFromStores2 = require("initialize").useStateFromStores(items2, () =>
        AuthenticationStore.isAuthenticated(),
      );
      if (tmp5) {
        tmp5 = null != stateFromStores;
      }
      if (tmp5) {
        tmp5 = tmp2 !== stateFromStores;
      }
      importDefault = tmp5;
      let tmp6 = !stateFromStores1;
      if (!stateFromStores1) {
        tmp6 = !stateFromStores2;
      }
      dependencyMap = tmp6;
      const items3 = [arg0, tmp5, tmp6];
      const effect = noop.useEffect(() => {
        let tmp = closure_1;
        if (!closure_1) {
          tmp = closure_2;
        }
        if (tmp) {
          closure_0();
        }
      }, items3);
    };
function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return (
    prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT ||
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT
  );
}
function isAgeVerified() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
}
function useShouldShowTiggerPawtect() {
  return !closure_13();
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return !(
    prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT ||
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT
  );
};
export { useShouldShowTiggerPawtect };
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return (
    prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN ||
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
  );
};
export const useIsVerifiedTeen = tmp6;
export { isVerifiedAdult };
export const useIsVerifiedAdult = tmp7;
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return (
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT ||
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN
  );
};
export const useIsAssignedByDiscord = tmp8;
export const useShowAssignedAgeGroupSettings = tmp9;
export { isAgeVerified };
export const useIsAgeVerified = tmp10;
export const useWatchAgeVerificationStatusChange = tmp11;
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = util.intl;
  const string = intl.string;
  if (hasItem) {
    let stringResult = string(util.t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3120["/kgWIg"]);
  } else {
    stringResult = string(util.t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(
  entryPoint,
  handleOnHelpUrlHook,
) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (set.has(entryPoint)) {
    const intl6 = util.intl;
    let stringResult = intl6.string(util.t["S/xS/w"]);
  } else if (flag) {
    const intl5 = util.intl;
    stringResult = intl5.string(_modDef3120.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = util.intl;
          const obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3120["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = util.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3120["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = util.intl;
      const obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3120.RpMIT0, obj);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.HxS3oQ);
    }
  }
  return stringResult;
};
export const useShouldCallReactiveCheck = tmp12;
export const useMaybePerformReactiveCheckForSource = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaybePerformReactiveCheckForSource(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      const tmp2 = closure_16();
      closure_1 = tmp2;
      if (cResult[0] === tmp2) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
          let tmp4 = cResult[3];
        }
        const effect = noop.useEffect(tmp3, tmp4);
      }
      const fn = function s() {
        let hasItem = closure_1;
        if (closure_1) {
          hasItem = set2.has(closure_0);
        }
        if (hasItem) {
          ReactiveCheckActionCreators.fetchReactiveCheckResult();
        }
      };
      const items = [tmp2, arg0];
      cResult[0] = tmp2;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
      let obj = require("c");
    }
  : function useMaybePerformReactiveCheckForSource(arg0) {
      closure_0 = arg0;
      const tmp = closure_16();
      closure_1 = tmp;
      const items = [tmp, arg0];
      const effect = noop.useEffect(() => {
        let hasItem = closure_1;
        if (closure_1) {
          hasItem = set2.has(closure_0);
        }
        if (hasItem) {
          ReactiveCheckActionCreators.fetchReactiveCheckResult();
        }
      }, items);
    };
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
