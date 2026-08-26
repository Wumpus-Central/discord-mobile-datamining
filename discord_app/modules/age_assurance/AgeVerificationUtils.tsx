// discord_app/modules/age_assurance/AgeVerificationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import messagesProxyDefault from "AgeAssurance.messages.js";
import isFeatureAgeGated2 from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import usePreviousDefault from "../../hooks/usePrevious.tsx";
import apexExperiment from "../parent_tools/FamilyCenterConnectionPrereqExperiment.tsx";
import isManualAgeAssuranceFallbackEnabled from "ManualAgeAssuranceFallbackExperiment.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../_runtime/00019_noop.js";
import closure_6 from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import closure_7 from "../regional_feature_config/RegionalFeatureConfigStore.tsx";
import closure_8 from "../../stores/AuthenticationStore.tsx";
import closure_9 from "../../stores/MessageStore.tsx";
import closure_10 from "../../stores/UserStore.tsx";
import closure_11 from "AgeVerificationStore.tsx";
import { FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS as closure_12 } from "AgeVerificationConstants.tsx";
import ME from "../../Constants.tsx";
import result from "../age_gate/AgeGateConstants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";
import set from "../../../_runtime/00002_set.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
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
    obj = entryPoint(flag[20]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  _require = undefined;
  _require = onMethodUnavailable((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp6;
              const lib = closure_1;
              closure_1 = undefined;
              closure_1_4(true);
              c5 = 2;
              entryPoint(flag[20]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              v0 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib();
              return obj1;
            }
          } else if (1 === tmp9) {
            c5 = 0;
            closure_1_4(false);
            throw closure_4;
          } else {
            if (2 === tmp9) {
              c5 = 1;
              closure_2 = closure_4;
              v0();
              if (null != closure_1_3) {
                let code;
                if (closure_1_2 != null) {
                  const body = closure_1_2.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === closure_2_13.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  entryPoint(flag[22]).showFailedToast(closure_2_16.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  closure_1_3();
                  const obj5 = entryPoint(flag[22]);
                }
                c5 = 0;
                closure_1_4(false);
                c7 = 3;
              }
              entryPoint(flag[22]).showFailedToast(closure_2_16.TIGGER_PAWTECT_ERROR);
              const obj4 = entryPoint(flag[22]);
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_1 = arg1;
              let method;
              if (lib != null) {
                method = lib.method;
              }
              obj = { method: null, externalWindow: null, webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, onClose: null, onCancel: null, entryPoint: null, shouldShowExpressiveModal: null };
              obj[0] = method;
              let externalWindow;
              if (lib != null) {
                externalWindow = lib.externalWindow;
              }
              obj[1] = externalWindow;
              obj[2] = closure_1.verification_webview_url;
              obj[3] = closure_1.verification_request_id;
              obj[4] = closure_1.verification_vendor_name;
              obj[5] = closure_1.incode_parameters;
              obj[6] = lib;
              obj[7] = v0;
              obj[8] = v0;
              obj[9] = closure_1;
              obj[10] = closure_1_2;
              if (false === obj10.showAgeVerification(obj)) {
                obj1 = entryPoint(flag[22]);
                obj1.showFailedToast(closure_2_16.TIGGER_PAWTECT_ERROR);
                v0();
              }
              c5 = 1;
              obj10 = entryPoint(flag[21]);
            }
            c5 = 0;
            closure_1_4(false);
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
        } catch (tmp72) {
          closure_4 = tmp72;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp72;
          } else if (tmp2 === tmp74) {
            v0 = tmp2;
          } else {
            v0 = tmp;
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
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1955).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1955).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  _require = tmp5;
  let tmpResult = tmp(4140);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(5314).AgeGatedFeature.REACTIVE_CHECK);
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
    tmp5 = prop1 !== tmp3(1955).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (!tmp5) {
    let isFeatureAgeGatedResult = closure_7.isFeatureAgeGated(tmp3(5314).AgeGatedFeature.REACTIVE_CHECK);
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
            if (closure_1_23()) {
              let obj2 = v0(closure_1_2[27]);
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
let set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
obj = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
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
  let tmp5 = prop !== PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp5) {
    const isFeatureAgeGatedResult = closure_7.isFeatureAgeGated(tmp3(5314).AgeGatedFeature.REACTIVE_CHECK);
    let tmp8 = !isFeatureAgeGatedResult;
    if (isFeatureAgeGatedResult) {
      tmp8 = prop !== tmp3(1955).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp5 = tmp8;
  }
  return tmp5;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = initialize;
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1955).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = isFeatureAgeGated2;
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
    tmp5 = closure_7.isFeatureAgeGated(tmp3(5314).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1955).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    const tmp7 = closure_7.isFeatureAgeGated(tmp3(5314).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1955).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = initialize;
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1955).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = isFeatureAgeGated2;
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
  obj = initialize;
  const obj2 = isFeatureAgeGated2;
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
export const isAgeVerificationMessageWithManualReviewCta = function isAgeVerificationMessageWithManualReviewCta(channel_id, id) {
  const message = store.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj.REQUEST_MANUAL_REVIEW);
              const str = found.rawValue;
            }
            let result = true === hasItem;
            if (result) {
              result = isManualAgeAssuranceFallbackEnabled.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
              const obj2 = isManualAgeAssuranceFallbackEnabled;
            }
            return result;
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
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
                const str = found.rawValue;
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
  let tmp5 = prop !== tmp(1955).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1955).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
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
  let startVerification;
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  startVerification = tmp2.startVerification;
  const items = [startVerification, classificationId];
  return {
    loading: tmp2.loading,
    initiateAgeVerification: React.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      startVerification = arg1;
      return startVerification(() => {
        obj = classificationId(closure_2_2[23]);
        obj = { method: closure_0, classificationId: closure_0, vendor: closure_1 };
        return obj.requestAgeVerification(obj);
      });
    }, items)
  };
};
export const useInitiateAgeVerificationV2 = function useInitiateAgeVerificationV2(onComplete) {
  let startVerification;
  obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  startVerification = tmp.startVerification;
  obj = {
    loading: tmp.loading,
    initiateAgeVerificationV2: React.useCallback((arg0) => {
      startVerification = arg0;
      return startVerification(() => lib(closure_1_2[23]).initiateAgeVerificationV2(lib.method, lib.vendor), arg0);
    }, items)
  };
  items = [startVerification];
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback) {
  const _require = callback;
  const items = [closure_10];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  obj = initialize;
  const items1 = [closure_8];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => null != closure_8.getSuspendedUserToken());
  const obj2 = initialize;
  const items2 = [closure_8];
  let tmp5 = null != tmp2;
  const stateFromStores2 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => closure_8.isAuthenticated());
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
  const items3 = [callback, tmp5, tmp6];
  const effect = React.useEffect(() => {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = closure_2;
    }
    if (tmp) {
      callback();
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
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  if (hasItem) {
    let stringResult = string(tmp2(1236).t.lSWVTM);
  } else if (flag) {
    stringResult = string(messagesProxyDefault["/kgWIg"]);
  } else {
    stringResult = string(tmp2(1236).t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, arg1, isSuspendedUser, arg3) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  if (set.has(entryPoint)) {
    const intl5 = getSystemLocale.intl;
    let stringResult = intl5.string(getSystemLocale.t["S/xS/w"]);
  } else if (flag) {
    const intl4 = getSystemLocale.intl;
    stringResult = intl4.string(messagesProxyDefault.h7qzoa);
  } else {
    if (null != arg1) {
      if (null != arg3) {
        const intl3 = getSystemLocale.intl;
        obj = { handleOnHelpUrlHook: null, handleOnTrustedProvidersHook: null };
        obj[0] = arg1;
        obj[1] = arg3;
        stringResult = intl3.format(messagesProxyDefault["+Ft5ch"], obj);
      }
    }
    if (null != arg1) {
      const intl2 = getSystemLocale.intl;
      obj = { handleOnHelpUrlHook: null };
      obj[0] = arg1;
      stringResult = intl2.format(messagesProxyDefault.RpMIT0, obj);
    } else {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.HxS3oQ);
    }
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
      NSFW_SERVER(closure_1_2[27]).fetchReactiveCheckResult();
      obj = NSFW_SERVER(closure_1_2[27]);
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