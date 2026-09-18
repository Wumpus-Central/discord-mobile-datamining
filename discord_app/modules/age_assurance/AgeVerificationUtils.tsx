// discord_app/modules/age_assurance/AgeVerificationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import _modDef3032 from "AgeAssurance.messages.js";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import usePreviousDefault from "../../hooks/usePrevious.tsx";
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators.tsx";
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment.tsx";
import FamilyCenterConnectionPrereqExperiment2 from "../parent_tools/FamilyCenterConnectionPrereqExperiment.tsx";
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import FamilyCenterPendingConnectionStore from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import RegionalFeatureConfigStore from "../regional_feature_config/RegionalFeatureConfigStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AgeVerificationStore from "AgeVerificationStore.tsx";

const require = globalThis.__r;

require = fn;
function useAgeVerificationRunner(onComplete) {
  onComplete = onComplete.onComplete;
  _require = onComplete;
  let entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  _slicedToArray = undefined;
  let current;
  let callback;
  const tmp = _slicedToArray(current.useState(false), 2);
  _slicedToArray = tmp[1];
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = current.useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    DispatcherDefault.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: current });
  }, items1);
  _require = onMethodUnavailable((onComplete, entryPoint) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              shouldShowExpressiveModal = tmp6;
              closure_130_0 = entryPoint;
              closure_130_1 = undefined;
              tmp72(true);
              c5 = 2;
              entryPoint(flag[20]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              v3 = 3;
              c7 = 1;
              const obj8 = { value: onComplete(), done: false };
              return obj8;
            }
          } else if (1 === tmp9) {
            c5 = 0;
            tmp72(false);
            throw tmp72;
          } else {
            if (2 === tmp9) {
              c5 = 1;
              closure_130_2 = tmp72;
              v3();
              if (null != tmp4) {
                let code;
                if (closure_130_2 != null) {
                  const body = closure_130_2.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  entryPoint(flag[22]).showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp4();
                  const obj5 = entryPoint(flag[22]);
                }
                c5 = 0;
                tmp72(false);
                c7 = 3;
              }
              entryPoint(flag[22]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
              const obj4 = entryPoint(flag[22]);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_1 = value;
              let method;
              if (closure_130_0 != null) {
                method = closure_130_0.method;
              }
              obj = {
                method,
                externalWindow: null,
                webviewUrl: null,
                verificationRequestId: null,
                verificationVendorName: null,
                incodeParameters: null,
                onComplete: null,
                onClose: null,
                onCancel: null,
                entryPoint: null,
                shouldShowExpressiveModal: null,
              };
              let externalWindow;
              if (closure_130_0 != null) {
                externalWindow = closure_130_0.externalWindow;
              }
              obj.externalWindow = externalWindow;
              obj.webviewUrl = closure_130_1.verification_webview_url;
              obj.verificationRequestId = closure_130_1.verification_request_id;
              obj.verificationVendorName = closure_130_1.verification_vendor_name;
              obj.incodeParameters = closure_130_1.incode_parameters;
              obj.onComplete = onComplete;
              obj.onClose = v3;
              obj.onCancel = v3;
              obj.entryPoint = entryPoint;
              obj.shouldShowExpressiveModal = shouldShowExpressiveModal;
              if (false === obj10.showAgeVerification(obj)) {
                entryPoint(flag[22]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v3();
                obj2 = entryPoint(flag[22]);
              }
              c5 = 1;
              obj10 = entryPoint(flag[21]);
            }
            c5 = 0;
            tmp72(false);
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } catch (tmp72) {
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp72;
          } else if (tmp2 === tmp74) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  obj2 = require("initialize");
  return {
    loading: tmp[0],
    startVerification: current.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2),
  };
}
function useShouldCallReactiveCheck() {
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1895).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1895).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  _require = tmp5;
  obj = require("initialize");
  const isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(
    tmp(5594).AgeGatedFeature.REACTIVE_CHECK,
  );
  const tmpResult = require("RegionalFeatureConfigUtils");
  const items1 = [AgeVerificationStore];
  const items2 = [tmp5, isFeatureAgeGated];
  return require("initialize").useStateFromStores(
    items1,
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
    items2,
  );
}
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
let closure_24 = async function _maybePerformReactiveCheck() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
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
fn(8644).FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
const Constants = fn(1074);
({ AbortCodes: map1, MessageEmbedTypes: closure_14 } = Constants);
const AgeGateConstants = fn(1099);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_15 } = AgeGateConstants);
const SafetyToastType = fn(8631).SafetyToastType;
let items = [
  fn(8645).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
  fn(8645).AgeVerificationModalEntryPoint.START_STAGE_PROMPT,
  fn(8645).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
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
let obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
let obj2 = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

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
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
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
  return !tmp5;
};
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
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
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
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return (
    prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT ||
    prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT
  );
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
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
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
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
export const useIsAssignedByDiscord = function useIsAssignedByDiscord() {
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
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
  return (
    RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores
  );
};
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj2;
export const AgeVerificationSystemNotificationContentType = {
  VERIFIED_ADULT: "verified_adult",
  VERIFIED_TEEN: "verified_teen",
  ERROR: "error",
  FAE_FAILED: "fae_failed",
  ID_FAILED: "id_failed",
  UNDERAGE: "underage",
};
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
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
              hasItem = parts.includes(obj2.RETRY);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithManualReviewCta = function isAgeVerificationMessageWithManualReviewCta(
  channel_id,
  id,
) {
  const message = MessageStore.getMessage(channel_id, id);
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
              hasItem = parts.includes(obj2.REQUEST_MANUAL_REVIEW);
            }
            let result = true === hasItem;
            if (result) {
              obj2 = ManualAgeAssuranceFallbackExperiment;
              result = obj2.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
            }
            return result;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(
  channel_id,
  id,
) {
  if (null == FamilyCenterPendingConnectionStore.getPendingConnection()) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel_id, id);
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
                hasItem = parts.includes(obj2.CONNECT_TO_TEEN);
              }
              let enabled = true === hasItem;
              if (enabled) {
                const FamilyCenterConnectionPrereqExperiment =
                  FamilyCenterConnectionPrereqExperiment2.FamilyCenterConnectionPrereqExperiment;
                enabled = FamilyCenterConnectionPrereqExperiment.getConfig({
                  location: "isAgeVerificationMessageWithConnectToTeenCta",
                }).enabled;
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
};
export const useIsAgeVerified = function useIsAgeVerified() {
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
  obj = { loading: tmp2.loading, initiateAgeVerification: null };
  const items = [startVerification, classificationId];
  obj.initiateAgeVerification = noop.useCallback((method, vendor) => {
    startVerification = vendor;
    return startVerification(() => {
      obj2 = { method, classificationId, vendor };
      return AgeVerificationURLActionCreators.requestAgeVerification(obj2);
    });
  }, items);
  return obj;
};
export const useInitiateAgeVerificationV2 = function useInitiateAgeVerificationV2(onComplete) {
  const tmp = useAgeVerificationRunner({
    onComplete: onComplete.onComplete,
    entryPoint: onComplete.entryPoint,
    shouldShowExpressiveModal: true,
    onMethodUnavailable: onComplete.onMethodUnavailable,
  });
  const startVerification = tmp.startVerification;
  obj2 = { loading: tmp.loading, initiateAgeVerificationV2: null };
  const items = [startVerification];
  obj2.initiateAgeVerificationV2 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return startVerification(
      () => startVerification(dependencyMap[23]).requestAgeVerificationV2(closure_0.method, closure_0.vendor),
      arg0,
    );
  }, items);
  return obj2;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  _require = callback1;
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
  obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => null != AuthenticationStore.getSuspendedUserToken(),
  );
  obj2 = require("initialize");
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
  const items3 = [callback1, tmp5, tmp6];
  const effect = noop.useEffect(() => {
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
    stringResult = string(_modDef3032["/kgWIg"]);
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
    stringResult = intl5.string(_modDef3032.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = util.intl;
          obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3032["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = util.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3032["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = util.intl;
      obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3032.RpMIT0, obj);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.HxS3oQ);
    }
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(arg0) {
  closure_0 = arg0;
  const tmp = useShouldCallReactiveCheck();
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
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
