// discord_app/modules/safety_hub/SafetyHubStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SafetyHubModels from "SafetyHubModels.tsx";
import _modDef8431 from "../../../_runtime/metro/08431__.js";
import SafetyHubConstants from "SafetyHubConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    c23 = "";
    error = null;
    c26 = false;
  }
}
function reset() {
  c9 = false;
  closure_6 = {};
  accountStanding = { state: SafetyHubModels.AccountStandingState.ALL_GOOD };
  c12 = null;
  signal = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
  userInput = "";
  appealEligibility = [];
  showExpressiveModalSubtitleAlt = false;
  NONE = AgeCheckStatus.NONE;
  c24 = 0;
  c28 = null;
}
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubConstants.AppealIngestionSignal;
({ SuspendedAgeCheckStatus, AGE_CHECK_MAX_POLL_ATTEMPTS: hasOwnProperty } = SafetyHubConstants);
const dependencyMap = {};
let closure_7 = {};
let obj = { state: SafetyHubModels.AccountStandingState.ALL_GOOD };
let accountStanding = obj;
let c9 = false;
let c10 = false;
let c12 = null;
const isDsaEligible = false;
const isAppealEligible = false;
let appealEligibility = [];
const expressiveModalV2Enabled = false;
let showExpressiveModalSubtitleAlt = false;
let c18 = false;
let signal = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let userInput = "";
const username = "";
let c23 = "";
let c24 = 0;
let error = null;
let c26 = false;
let NONE = AgeCheckStatus.NONE;
let c28 = null;
let closure_29 = {
  [SuspendedAgeCheckStatus.PENDING]: AgeCheckStatus.LOADING,
  [SuspendedAgeCheckStatus.UNBANNED]: AgeCheckStatus.VERIFIED,
  [SuspendedAgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN]: AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN,
  [SuspendedAgeCheckStatus.UNDERAGE]: AgeCheckStatus.UNDERAGE,
  [SuspendedAgeCheckStatus.UNDERAGE_MANUAL_REVIEW]: AgeCheckStatus.UNDERAGE_MANUAL_REVIEW,
};
const Store = initializeDefault.Store;
class SafetyHubStore extends Store {}
const prototype = SafetyHubStore.prototype;
prototype["isFetching"] = function isFetching() {
  return c9;
};
prototype["getClassifications"] = function getClassifications() {
  return Object.values(closure_6);
};
prototype["getClassification"] = function getClassification(arg0) {
  return dependencyMap[arg0];
};
prototype["getAccountStanding"] = function getAccountStanding() {
  return accountStanding;
};
prototype["getFetchError"] = function getFetchError() {
  return error;
};
prototype["isInitialized"] = function isInitialized() {
  return c10;
};
prototype["getClassificationRequestState"] = function getClassificationRequestState(arg0) {
  return closure_7[arg0];
};
prototype["getAppealClassificationId"] = function getAppealClassificationId() {
  return c12;
};
prototype["getIsDsaEligible"] = function getIsDsaEligible() {
  return isDsaEligible;
};
prototype["getIsAppealEligible"] = function getIsAppealEligible() {
  return isAppealEligible;
};
prototype["getAppealEligibility"] = function getAppealEligibility() {
  return appealEligibility;
};
prototype["getIsExpressiveModalV2Enabled"] = function getIsExpressiveModalV2Enabled() {
  return expressiveModalV2Enabled;
};
prototype["getShowExpressiveModalSubtitleAlt"] = function getShowExpressiveModalSubtitleAlt() {
  return showExpressiveModalSubtitleAlt;
};
prototype["getAppealSignal"] = function getAppealSignal() {
  return signal;
};
prototype["getFreeTextAppealReason"] = function getFreeTextAppealReason() {
  return userInput;
};
prototype["getIsSubmitting"] = function getIsSubmitting() {
  return c18;
};
prototype["getSubmitError"] = function getSubmitError() {
  return error;
};
prototype["getUsername"] = function getUsername() {
  return username;
};
prototype["getAgeVerificationWebviewUrl"] = function getAgeVerificationWebviewUrl() {
  return c23;
};
prototype["getAgeVerificationError"] = function getAgeVerificationError() {
  return error;
};
prototype["getIsLoadingAgeVerification"] = function getIsLoadingAgeVerification() {
  return c26;
};
prototype["getAgeCheckStatus"] = function getAgeCheckStatus() {
  return NONE;
};
prototype["getAgeCheckError"] = function getAgeCheckError() {
  return c28;
};
prototype["getAgeCheckAttempts"] = function getAgeCheckAttempts() {
  return c24;
};
SafetyHubStore.displayName = "SafetyHubStore";
obj = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    c9 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({
      classifications,
      accountStanding,
      isDsaEligible,
      isAppealEligible,
      username,
      appealEligibility,
      expressiveModalV2Enabled,
      showExpressiveModalSubtitleAlt,
    } = arg0);
    closure_6 = _modDef8431(classifications, "id");
    c9 = false;
    c10 = true;
    error = null;
  },
  SAFETY_HUB_FETCH_FAILURE: function handleFetchFailure(error) {
    c9 = false;
    c10 = false;
    error = error.error;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function handleFetchClassificationStart(classificationId) {
    closure_7[classificationId.classificationId] = SafetyHubModels.ClassificationRequestState.PENDING;
    c9 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function handleFetchClassificationSuccess(classification) {
    classification = classification.classification;
    closure_6[classification.id] = classification;
    ({ accountStanding, isDsaEligible, username, isAppealEligible } = classification);
    closure_7[classification.id] = SafetyHubModels.ClassificationRequestState.SUCCESS;
    c9 = false;
    error = null;
    c10 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function handleFetchClassificationFailure(error) {
    c9 = false;
    error = error.error;
    closure_7[error.classificationId] = SafetyHubModels.ClassificationRequestState.FAILED;
    c10 = false;
  },
  SAFETY_HUB_APPEAL_OPEN: function handleAppealOpen(classificationId) {
    classificationId = classificationId.classificationId;
  },
  SAFETY_HUB_APPEAL_CLOSE: function handleAppealClose() {
    c12 = null;
    signal = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    userInput = "";
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function handleAppealSignalSelect(signal) {
    signal = signal.signal;
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function handleAppealSignalCustomInputChange(userInput) {
    userInput = userInput.userInput;
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function handleSafetyHubRequestReviewStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c18 = true;
      error = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    c18 = false;
    error = null;
    dependencyMap[arg0.classificationId].appeal_status = { status: SafetyHubModels.AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    c18 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c23 = "";
      error = null;
      c26 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(
    verificationWebviewUrl,
  ) {
    c23 = verificationWebviewUrl.verificationWebviewUrl;
    error = null;
    c26 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    c23 = "";
    error = error.error;
    c26 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS:
    function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        NONE = AgeCheckStatus.LOADING;
        for (const key10007 in closure_6) {
          if (!dependencyMap[key10007].is_coppa) {
            continue;
          } else {
            let obj = { status: SafetyHubModels.AppealStatusType.REVIEW_PENDING };
            dependencyMap[key10007].appeal_status = obj;
            continue;
          }
          continue;
        }
      }
    },
  SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED:
    function handleSafetyHubExpressiveModalV2VerificationSubmittedAction(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        NONE = AgeCheckStatus.LOADING;
      }
    },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function handleSafetyHubAgeVerificationStartPoll(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      NONE = AgeCheckStatus.LOADING;
      c28 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      NONE = AgeCheckStatus.LOADING;
      c28 = null;
      c24 = c24 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(
    success,
  ) {
    if (success.success) {
      let FAILURE = AgeCheckStatus.SUCCESS;
    } else if (c24 < hasOwnProperty) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    NONE = FAILURE;
    c28 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function handleSafetyHubCheckAgeVerificationCheckSuccessV2(
    arg0,
  ) {
    NONE = closure_29[arg0.status];
    c28 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    NONE = AgeCheckStatus.ERROR;
    error = error.error;
  },
  SAFETY_HUB_RESET_AGE_CHECK_STATUS: function handleSafetyHubResetAgeCheckStatus(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      NONE = AgeCheckStatus.NONE;
      c24 = 0;
      c28 = null;
    }
  },
  LOGOUT: reset,
  LOGIN_SUSPENDED_USER: reset,
};
const safetyHubStore = new SafetyHubStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default safetyHubStore;
