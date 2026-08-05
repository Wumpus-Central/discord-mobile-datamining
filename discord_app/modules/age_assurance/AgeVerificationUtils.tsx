// discord_app/modules/age_assurance/AgeVerificationUtils.tsx
import fetchFingerprint from "fetchFingerprint";
import _slicedToArray from "_slicedToArray";
import dispatcher from "dispatcher";
import initialize from "initialize";
import getRegionalFeatureConfig from "getRegionalFeatureConfig";
import closure_8 from "fetchFingerprint";
import reinjectEphemerals from "reinjectEphemerals";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_11 from "initialize";
import { FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS as closure_12 } from "set";
import { MessageEmbedTypes } from "ME";
import result from "result";
import { SafetyToastType } from "SafetyToastType";
import set from "noop";

let AgeGateSource;
let closure_14;
let require = arg1;
function useAgeVerificationRunner(onComplete) {
  onComplete = onComplete.onComplete;
  let _require = onComplete;
  const entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let current;
  callback = undefined;
  let obj = callback;
  const tmp = current(callback.useState(false), 2);
  callback = tmp[1];
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(flag[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = callback.useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    let obj = entryPoint(flag[19]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
          if (0 === v0) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp6;
              let lib;
              outer1_3(true);
              let c4 = 2;
              let obj3 = entryPoint(flag[19]);
              obj3.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              v0 = 3;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = lib();
              return obj1;
            }
          } else if (1 === tmp9) {
            c4 = 0;
            outer1_3(false);
            throw fetchFingerprint;
          } else {
            if (2 === tmp9) {
              c4 = 1;
              let obj2 = entryPoint(flag[21]);
              obj2.showFailedToast(outer2_15.TIGGER_PAWTECT_ERROR);
              v0();
              c4 = 0;
              outer1_3(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj2 = { webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, onClose: null, onCancel: null, entryPoint: null, shouldShowExpressiveModal: null };
              obj2[0] = lib.verification_webview_url;
              obj2[1] = lib.verification_request_id;
              obj2[2] = lib.verification_vendor_name;
              obj2[3] = lib.incode_parameters;
              obj2[4] = lib;
              obj2[5] = v0;
              obj2[6] = v0;
              obj2[7] = outer1_1;
              obj2[8] = outer1_2;
              if (false === obj8.showAgeVerification(obj2)) {
                obj = entryPoint(flag[21]);
                obj.showFailedToast(outer2_15.TIGGER_PAWTECT_ERROR);
                v0();
              }
              c4 = 1;
              obj8 = entryPoint(flag[20]);
            }
            c4 = 0;
            outer1_3(false);
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
        } catch (tmp42) {
          fetchFingerprint = tmp42;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint];
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
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1906).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  require = tmp5;
  let tmpResult = tmp(3964);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(5108).AgeGatedFeature.REACTIVE_CHECK);
  tmpResult = tmp(589);
  const items1 = [closure_11];
  const items2 = [tmp5, isFeatureAgeGated];
  return tmpResult.useStateFromStores(items1, () => {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = outer1_11.shouldCallReactiveCheck();
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
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp3(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (!tmp5) {
    let isFeatureAgeGatedResult = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5108).AgeGatedFeature.REACTIVE_CHECK);
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            if (outer1_22()) {
              let obj2 = v0(outer1_2[26]);
              c1 = 1;
              v0 = 1;
              const obj1 = { value: null, done: false };
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
  const _maybePerformReactiveCheck = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_14 } = result);
let items = [require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.START_STAGE_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
let set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
obj = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen" };
result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp5) {
    const isFeatureAgeGatedResult = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5108).AgeGatedFeature.REACTIVE_CHECK);
    let tmp8 = !isFeatureAgeGatedResult;
    if (isFeatureAgeGatedResult) {
      tmp8 = prop !== tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp5 = tmp8;
  }
  return tmp5;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  let isFeatureAgeGated = require(3964) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5108) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = require(3964) /* isFeatureAgeGated */;
  return prop1 !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && !isFeatureAgeGated;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    tmp5 = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5108).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    const tmp7 = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5108).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  let isFeatureAgeGated = require(3964) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5108) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = require(3964) /* isFeatureAgeGated */;
  return prop1 === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || isFeatureAgeGated;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
};
export const useIsAssignedByDiscord = function useIsAssignedByDiscord() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
};
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
  const obj = require(589) /* initialize */;
  const obj2 = require(3964) /* isFeatureAgeGated */;
  return require(3964) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5108) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores;
};
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj;
export const AgeVerificationSystemNotificationContentType = { VERIFIED_ADULT: "verified_adult", VERIFIED_TEEN: "verified_teen", ERROR: "error" };
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = store.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj.RETRY);
              const str = found.rawValue;
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
            if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
                const str = found.rawValue;
              }
              let enabled = true === hasItem;
              if (enabled) {
                const FamilyCenterConnectionPrereqExperiment = require(11247) /* apexExperiment */.FamilyCenterConnectionPrereqExperiment;
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
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useIsAgeVerified = function useIsAgeVerified() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1906).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useInitiateAgeVerification = function useInitiateAgeVerification(shouldShowExpressiveModal) {
  let entryPoint;
  let onComplete;
  let flag = shouldShowExpressiveModal.shouldShowExpressiveModal;
  ({ onComplete, entryPoint } = shouldShowExpressiveModal);
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = shouldShowExpressiveModal.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  let startVerification;
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  startVerification = tmp2.startVerification;
  const items = [startVerification, classificationId];
  return {
    loading: tmp2.loading,
    initiateAgeVerification: React.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      const startVerification = arg1;
      return startVerification(() => {
        let obj = classificationId(outer2_2[22]);
        obj = { method: closure_0, classificationId: null, vendor: null };
        obj[1] = closure_0;
        obj[2] = closure_1;
        return obj.requestAgeVerification(obj);
      });
    }, items)
  };
};
export const useInitiateAgeVerificationV2 = function useInitiateAgeVerificationV2(onComplete) {
  let startVerification;
  let obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true };
  const tmp = useAgeVerificationRunner(obj);
  startVerification = tmp.startVerification;
  obj = {
    loading: tmp.loading,
    initiateAgeVerificationV2: React.useCallback((arg0, arg1) => {
      const startVerification = arg0;
      let closure_1 = arg1;
      return startVerification(() => callback(outer1_2[22]).initiateAgeVerificationV2(callback, closure_1));
    }, items)
  };
  items = [startVerification];
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  const _require = callback1;
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = importDefault(8775)(stateFromStores);
  const obj = _require(589);
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
  const dependencyMap = tmp6;
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
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
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
    const intl4 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1236) /* getSystemLocale */.t["S/xS/w"]);
  } else if (flag) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl3.string(importDefault(2803).h7qzoa);
  } else if (null != arg1) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { handleOnHelpUrlHook: null };
    obj[0] = arg1;
    stringResult = intl2.format(importDefault(2803).RpMIT0, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t.HxS3oQ);
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(NSFW_SERVER) {
  let closure_0 = NSFW_SERVER;
  const tmp = useShouldCallReactiveCheck();
  const importDefault = tmp;
  const items = [tmp, NSFW_SERVER];
  const effect = React.useEffect(() => {
    let hasItem = closure_1;
    if (closure_1) {
      hasItem = outer1_14.has(NSFW_SERVER);
    }
    if (hasItem) {
      NSFW_SERVER(outer1_2[26]).fetchReactiveCheckResult();
      const obj = NSFW_SERVER(outer1_2[26]);
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