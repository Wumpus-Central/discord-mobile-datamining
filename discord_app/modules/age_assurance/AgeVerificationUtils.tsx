// === Module 4992: useAgeVerificationRunner ===

// Module 4992 (useAgeVerificationRunner)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import isFeatureAgeGated2 from "isFeatureAgeGated" /* 4072 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5039 */;
import apexExperiment from "apexExperiment" /* 6700 */;
import usePreviousDefault from "usePrevious" /* 6701 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getRegionalFeatureConfig from "getRegionalFeatureConfig" /* 4073 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import initialize2 from "initialize" /* 5426 */;
import { FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS as closure_12 } from "set" /* 5427 */;
import ME from "ME" /* 676 */;
import result from "result" /* 1221 */;
import { SafetyToastType } from "SafetyToastType" /* 5430 */;

require = fn;
function useAgeVerificationRunner(onComplete) {
  onComplete = onComplete.onComplete;
  let _require = onComplete;
  const entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  let callback2;
  let current;
  let callback;
  obj = current;
  const tmp = callback2(current.useState(false), 2);
  callback2 = tmp[1];
  const items = [closure_10];
  const stateFromStores = _require(flag[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = current.useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    entryPoint(flag[19]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  _require = onMethodUnavailable((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v02 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp6;
              let lib;
              v0(true);
              v0 = 2;
              entryPoint(flag[19]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              c5 = 3;
              v02 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib();
              return obj1;
            }
          } else if (1 === tmp9) {
            v0 = 0;
            v0(false);
            throw closure_3;
          } else {
            if (2 === tmp9) {
              v0 = 1;
              closure_1 = closure_3;
              v02();
              if (null != onMethodUnavailable) {
                let code;
                if (closure_1_1 != null) {
                  const body = closure_1_1.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === closure_2_13.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  let obj3 = entryPoint(flag[21]);
                  obj3.showFailedToast(SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  onMethodUnavailable();
                }
                v0 = 0;
                v0(false);
                v02 = 3;
              }
              let obj2 = entryPoint(flag[21]);
              obj2.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj2 = { webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, onClose: null, onCancel: null, entryPoint: null, shouldShowExpressiveModal: null };
              obj2[0] = lib.verification_webview_url;
              obj2[1] = lib.verification_request_id;
              obj2[2] = lib.verification_vendor_name;
              obj2[3] = lib.incode_parameters;
              obj2[4] = lib;
              obj2[5] = v02;
              obj2[6] = v02;
              obj2[7] = closure_1_1;
              obj2[8] = closure_1_2;
              if (false === obj9.showAgeVerification(obj2)) {
                obj = entryPoint(flag[21]);
                obj.showFailedToast(SafetyToastType.TIGGER_PAWTECT_ERROR);
                v02();
              }
              v0 = 1;
              obj9 = entryPoint(flag[20]);
            }
            v0 = 0;
            v0(false);
            v02 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
        } catch (tmp57) {
          closure_3 = tmp57;
          if (tmp5 === v0) {
            v02 = tmp3;
            throw tmp57;
          } else if (tmp2 === tmp59) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  obj = {
    loading: tmp[0],
    startVerification: obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2)
  };
  return obj;
}
function useShouldCallReactiveCheck() {
  const items = [closure_10];
  const stateFromStores = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1954).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1954).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  _require = tmp5;
  let tmpResult = tmp(4072);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(5039).AgeGatedFeature.REACTIVE_CHECK);
  tmpResult = tmp(589);
  const items1 = [closure_11];
  const items2 = [tmp5, isFeatureAgeGated];
  return tmpResult.useStateFromStores(items1, () => {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = closure_1_11.shouldCallReactiveCheck();
      }
      tmp = result;
    }
    return tmp;
  }, items2);
}
function shouldCallReactiveCheck() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (!tmp5) {
    let isFeatureAgeGatedResult = closure_7.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = closure_11.shouldCallReactiveCheck();
    }
    tmp7 = isFeatureAgeGatedResult;
  }
  return tmp7;
}
function _maybePerformReactiveCheck() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let tmp5 = null;
            if (closure_1_23()) {
              let obj2 = v0(closure_1_2[26]);
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.fetchReactiveCheckResult();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else {
          tmp5 = arg1;
          if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
        v0 = 3;
        obj2 = { value: null, done: true };
        obj2[0] = tmp5;
        return obj2;
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
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
({ AbortCodes: map1, MessageEmbedTypes: closure_14 } = ME);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_15 } = result);
let items = [require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.START_STAGE_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let obj = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen" };
result = require("obj132").fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp5) {
    const isFeatureAgeGatedResult = closure_7.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    let tmp8 = !isFeatureAgeGatedResult;
    if (isFeatureAgeGatedResult) {
      tmp8 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp5 = tmp8;
  }
  return tmp5;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  return prop1 !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && !isFeatureAgeGated;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    tmp5 = closure_7.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    const tmp7 = closure_7.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  return prop1 === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || isFeatureAgeGated;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
};
export const useIsAssignedByDiscord = function useIsAssignedByDiscord() {
  const items = [closure_10];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
};
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
  return isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores;
};
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj;
export const AgeVerificationSystemNotificationContentType = { VERIFIED_ADULT: "verified_adult", VERIFIED_TEEN: "verified_teen", ERROR: "error", FAE_FAILED: "fae_failed", ID_FAILED: "id_failed", UNDERAGE: "underage" };
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = store.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((item, index) => item.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj.RETRY);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(channel_id, id) {
  if (null == pendingConnection.getPendingConnection()) {
    return false;
  } else {
    const message = store.getMessage(channel_id, id);
    if (null != message) {
      if (null != message.embeds) {
        if (0 !== message.embeds.length) {
          if (null != message.embeds[0].fields) {
            if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((item, index) => item.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
              }
              let enabled = true === hasItem;
              if (enabled) {
                const FamilyCenterConnectionPrereqExperiment = apexExperiment.FamilyCenterConnectionPrereqExperiment;
                enabled = FamilyCenterConnectionPrereqExperiment.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled;
              }
              return enabled;
            }
          }
        }
      }
    }
    return false;
  }
};
export const isAgeVerified = function isAgeVerified() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useIsAgeVerified = function useIsAgeVerified() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useInitiateAgeVerification = function useInitiateAgeVerification(shouldShowExpressiveModal) {
  let flag = shouldShowExpressiveModal.shouldShowExpressiveModal;
  ({ onComplete, entryPoint } = shouldShowExpressiveModal);
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = shouldShowExpressiveModal.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  let startVerification = tmp2.startVerification;
  const items = [startVerification, classificationId];
  return {
    loading: tmp2.loading,
    initiateAgeVerification: React.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      startVerification = arg1;
      return startVerification(() => {
        classificationId(dependencyMap[22]);
        obj = { method: closure_0, classificationId: closure_0, vendor: closure_1 };
        return obj.requestAgeVerification(obj);
      });
    }, items)
  };
};
export const useInitiateAgeVerificationV2 = function useInitiateAgeVerificationV2(onComplete) {
  obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  let startVerification = tmp.startVerification;
  obj = {
    loading: tmp.loading,
    initiateAgeVerificationV2: React.useCallback((arg0, arg1) => {
      startVerification = arg0;
      closure_1 = arg1;
      return startVerification(() => callback(closure_1_2[22]).initiateAgeVerificationV2(callback, closure_1));
    }, items)
  };
  items = [startVerification];
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  const _require = callback1;
  const items = [closure_10];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  obj = _require(589);
  const items1 = [closure_8];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => null != closure_8.getSuspendedUserToken());
  const obj2 = _require(589);
  const items2 = [closure_8];
  let tmp5 = null != tmp2;
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => closure_8.isAuthenticated());
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
  const items3 = [callback1, tmp5, tmp6];
  const effect = React.useEffect(() => {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = closure_2;
    }
    if (tmp) {
      callback1();
    }
  }, items3);
};
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint) {
  const hasItem = set.has(entryPoint);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (hasItem) {
    let stringResult = string(t.lSWVTM);
  } else {
    stringResult = string(t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, arg1, isSuspendedUser) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  if (set.has(entryPoint)) {
    const intl4 = getSystemLocale.intl;
    let stringResult = intl4.string(getSystemLocale.t["S/xS/w"]);
  } else if (flag) {
    const intl3 = getSystemLocale.intl;
    stringResult = intl3.string(messagesProxyDefault.h7qzoa);
  } else if (null != arg1) {
    const intl2 = getSystemLocale.intl;
    obj = { handleOnHelpUrlHook: null };
    obj[0] = arg1;
    stringResult = intl2.format(messagesProxyDefault.RpMIT0, obj);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.HxS3oQ);
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(NSFW_SERVER) {
  closure_0 = NSFW_SERVER;
  const tmp = useShouldCallReactiveCheck();
  closure_1 = tmp;
  const items = [tmp, NSFW_SERVER];
  const effect = React.useEffect(() => {
    let hasItem = closure_1;
    if (closure_1) {
      hasItem = closure_1_15.has(NSFW_SERVER);
    }
    if (hasItem) {
      NSFW_SERVER(dependencyMap[26]).fetchReactiveCheckResult();
      obj = NSFW_SERVER(dependencyMap[26]);
    }
  }, items);
};
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  const self = this;
  const apply = _maybePerformReactiveCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};