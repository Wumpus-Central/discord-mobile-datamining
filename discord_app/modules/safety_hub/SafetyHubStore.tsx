// === Module 8720: handleSafetyHubRequestAgeVerificationResetModalAction ===

// Module 8720 (handleSafetyHubRequestAgeVerificationResetModalAction)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import ContentIdType from "ContentIdType" /* 8710 */;
import createAggregatorDefault from "createAggregator" /* 8721 */;
import SafetyHubView from "SafetyHubView" /* 8709 */;

function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    c22 = "";
    c24 = null;
    c25 = false;
  }
}
function reset() {
  c9 = false;
  closure_6 = {};
  obj = { state: ContentIdType.AccountStandingState.ALL_GOOD };
  c12 = null;
  DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
  c20 = "";
  closure_15 = [];
  NONE = AgeCheckStatus.NONE;
  c23 = 0;
  c27 = null;
}
const AgeCheckStatus = SafetyHubView.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubView.AppealIngestionSignal;
({ SuspendedAgeCheckStatus, AGE_CHECK_MAX_POLL_ATTEMPTS: c5 } = SafetyHubView);
let closure_6 = {};
let closure_7 = {};
let obj = { state: ContentIdType.AccountStandingState.ALL_GOOD };
let c9 = false;
let c10 = false;
let c11 = null;
let c12 = null;
let c13 = false;
let c14 = false;
let closure_15 = [];
let c16 = false;
let c17 = false;
let c18 = null;
let DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let c20 = "";
let c21 = "";
let c22 = "";
let c23 = 0;
let c24 = null;
let c25 = false;
let NONE = AgeCheckStatus.NONE;
let c27 = null;
let closure_28 = { [SuspendedAgeCheckStatus.PENDING]: AgeCheckStatus.LOADING, [SuspendedAgeCheckStatus.UNBANNED]: AgeCheckStatus.VERIFIED, [SuspendedAgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN]: AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN, [SuspendedAgeCheckStatus.UNDERAGE]: AgeCheckStatus.UNDERAGE, [SuspendedAgeCheckStatus.UNDERAGE_MANUAL_REVIEW]: AgeCheckStatus.UNDERAGE_MANUAL_REVIEW };
const Store = initializeDefault.Store;
class SafetyHubStore extends Store {
}
const prototype = SafetyHubStore.prototype;
prototype["isFetching"] = function isFetching() {
  return c9;
};
prototype["getClassifications"] = function getClassifications() {
  return Object.values(closure_6);
};
prototype["getClassification"] = function getClassification(closure_0) {
  return dependencyMap[closure_0];
};
prototype["getAccountStanding"] = function getAccountStanding() {
  return obj;
};
prototype["getFetchError"] = function getFetchError() {
  return c11;
};
prototype["isInitialized"] = function isInitialized() {
  return c10;
};
prototype["getClassificationRequestState"] = function getClassificationRequestState(closure_0) {
  return table[closure_0];
};
prototype["getAppealClassificationId"] = function getAppealClassificationId() {
  return c12;
};
prototype["getIsDsaEligible"] = function getIsDsaEligible() {
  return c13;
};
prototype["getIsAppealEligible"] = function getIsAppealEligible() {
  return c14;
};
prototype["getAppealEligibility"] = function getAppealEligibility() {
  return closure_15;
};
prototype["getIsExpressiveModalV2Enabled"] = function getIsExpressiveModalV2Enabled() {
  return c16;
};
prototype["getAppealSignal"] = function getAppealSignal() {
  return DIDNT_VIOLATE_POLICY;
};
prototype["getFreeTextAppealReason"] = function getFreeTextAppealReason() {
  return c20;
};
prototype["getIsSubmitting"] = function getIsSubmitting() {
  return c17;
};
prototype["getSubmitError"] = function getSubmitError() {
  return c18;
};
prototype["getUsername"] = function getUsername() {
  return c21;
};
prototype["getAgeVerificationWebviewUrl"] = function getAgeVerificationWebviewUrl() {
  return c22;
};
prototype["getAgeVerificationError"] = function getAgeVerificationError() {
  return c24;
};
prototype["getIsLoadingAgeVerification"] = function getIsLoadingAgeVerification() {
  return c25;
};
prototype["getAgeCheckStatus"] = function getAgeCheckStatus() {
  return NONE;
};
prototype["getAgeCheckError"] = function getAgeCheckError() {
  return c27;
};
prototype["getAgeCheckAttempts"] = function getAgeCheckAttempts() {
  return c23;
};
SafetyHubStore.displayName = "SafetyHubStore";
obj = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    c9 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ classifications, accountStanding, isDsaEligible, isAppealEligible, username, appealEligibility, expressiveModalV2Enabled } = arg0);
    closure_6 = createAggregatorDefault(classifications, "id");
    c9 = false;
    c10 = true;
    c11 = null;
  },
  SAFETY_HUB_FETCH_FAILURE: function handleFetchFailure(error) {
    c9 = false;
    c10 = false;
    error = error.error;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function handleFetchClassificationStart(classificationId) {
    closure_7[classificationId.classificationId] = ContentIdType.ClassificationRequestState.PENDING;
    c9 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function handleFetchClassificationSuccess(classification) {
    classification = classification.classification;
    closure_6[classification.id] = classification;
    ({ accountStanding, isDsaEligible, username, isAppealEligible } = classification);
    closure_7[classification.id] = ContentIdType.ClassificationRequestState.SUCCESS;
    c9 = false;
    c11 = null;
    c10 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function handleFetchClassificationFailure(error) {
    c9 = false;
    error = error.error;
    closure_7[error.classificationId] = ContentIdType.ClassificationRequestState.FAILED;
    c10 = false;
  },
  SAFETY_HUB_APPEAL_OPEN: function handleAppealOpen(classificationId) {
    classificationId = classificationId.classificationId;
  },
  SAFETY_HUB_APPEAL_CLOSE: function handleAppealClose() {
    c12 = null;
    DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    c20 = "";
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function handleAppealSignalSelect(signal) {
    signal = signal.signal;
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function handleAppealSignalCustomInputChange(userInput) {
    userInput = userInput.userInput;
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function handleSafetyHubRequestReviewStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      c17 = true;
      c18 = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    c17 = false;
    c18 = null;
    dependencyMap[arg0.classificationId].appeal_status = { status: ContentIdType.AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    c17 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      c22 = "";
      c24 = null;
      c25 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(verificationWebviewUrl) {
    verificationWebviewUrl = verificationWebviewUrl.verificationWebviewUrl;
    c24 = null;
    c25 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    c22 = "";
    error = error.error;
    c25 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      for (const key10007 in closure_6) {
        let tmp7 = key10007;
        let tmp8 = dependencyMap;
        if (!dependencyMap[key10007].is_coppa) {
          continue;
        } else {
          let tmp3 = dependencyMap;
          obj = { status: null };
          let tmp4 = require;
          let tmp5 = dependencyMap;
          obj[0] = ContentIdType.AppealStatusType.REVIEW_PENDING;
          dependencyMap[key10007].appeal_status = obj;
          continue;
        }
        continue;
      }
    }
  },
  SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED: function handleSafetyHubExpressiveModalV2VerificationSubmittedAction(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
    }
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function handleSafetyHubAgeVerificationStartPoll(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      c27 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      c27 = null;
      closure_23 = closure_23 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(success) {
    if (success.success) {
      let FAILURE = AgeCheckStatus.SUCCESS;
    } else if (c23 < closure_5) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    c27 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function handleSafetyHubCheckAgeVerificationCheckSuccessV2(arg0) {
    closure_26 = table2[arg0.status];
    c27 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    const ERROR = AgeCheckStatus.ERROR;
    error = error.error;
  },
  SAFETY_HUB_RESET_AGE_CHECK_STATUS: function handleSafetyHubResetAgeCheckStatus(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      NONE = AgeCheckStatus.NONE;
      c23 = 0;
      c27 = null;
    }
  },
  LOGOUT: reset,
  LOGIN_SUSPENDED_USER: reset
};
const safetyHubStore = new SafetyHubStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default safetyHubStore;