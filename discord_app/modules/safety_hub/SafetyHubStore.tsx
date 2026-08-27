// discord_app/modules/safety_hub/SafetyHubStore.tsx
import set from "../../../_runtime/00002_set.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ContentIdType from "SafetyHubModels.tsx";
import createAggregatorDefault from "../../../_runtime/11369_createAggregator.js";
import SafetyHubView from "SafetyHubConstants.tsx";

function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    c21 = "";
    c23 = null;
    c24 = false;
  }
}
const AgeCheckStatus = SafetyHubView.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubView.AppealIngestionSignal;
let closure_5 = SafetyHubView.AGE_CHECK_MAX_POLL_ATTEMPTS;
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
let c17 = null;
let DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let c19 = "";
let c20 = "";
let c21 = "";
let c22 = 0;
let c23 = null;
let c24 = false;
const NONE = AgeCheckStatus.NONE;
let c26 = null;
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
prototype["getAppealSignal"] = function getAppealSignal() {
  return DIDNT_VIOLATE_POLICY;
};
prototype["getFreeTextAppealReason"] = function getFreeTextAppealReason() {
  return c19;
};
prototype["getIsSubmitting"] = function getIsSubmitting() {
  return c16;
};
prototype["getSubmitError"] = function getSubmitError() {
  return c17;
};
prototype["getUsername"] = function getUsername() {
  return c20;
};
prototype["getAgeVerificationWebviewUrl"] = function getAgeVerificationWebviewUrl() {
  return c21;
};
prototype["getAgeVerificationError"] = function getAgeVerificationError() {
  return c23;
};
prototype["getIsLoadingAgeVerification"] = function getIsLoadingAgeVerification() {
  return c24;
};
prototype["getAgeCheckStatus"] = function getAgeCheckStatus() {
  return NONE;
};
prototype["getAgeCheckError"] = function getAgeCheckError() {
  return c26;
};
prototype["getAgeCheckAttempts"] = function getAgeCheckAttempts() {
  return c22;
};
SafetyHubStore.displayName = "SafetyHubStore";
obj = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    c9 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ classifications, accountStanding, isDsaEligible, isAppealEligible, username, appealEligibility } = arg0);
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
    c19 = "";
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
      c16 = true;
      c17 = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    c16 = false;
    c17 = null;
    dependencyMap[arg0.classificationId].appeal_status = { status: ContentIdType.AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    c16 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      c21 = "";
      c23 = null;
      c24 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(verificationWebviewUrl) {
    verificationWebviewUrl = verificationWebviewUrl.verificationWebviewUrl;
    c23 = null;
    c24 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    c21 = "";
    error = error.error;
    c24 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      for (const key10002 in closure_6) {
        let tmp7 = key10002;
        let tmp8 = dependencyMap;
        if (!dependencyMap[key10002].is_coppa) {
          continue;
        } else {
          let tmp = dependencyMap;
          obj = { status: null };
          let tmp2 = require;
          let tmp3 = dependencyMap;
          obj[0] = ContentIdType.AppealStatusType.REVIEW_PENDING;
          dependencyMap[key10002].appeal_status = obj;
          continue;
        }
        continue;
      }
    }
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function handleSafetyHubAgeVerificationStartPoll(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      c26 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      c26 = null;
      closure_22 = closure_22 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(success) {
    if (success.success) {
      let FAILURE = AgeCheckStatus.SUCCESS;
    } else if (c22 < closure_5) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    c26 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    const ERROR = AgeCheckStatus.ERROR;
    error = error.error;
  },
  LOGOUT: function reset() {
    c9 = false;
    closure_6 = {};
    obj = { state: ContentIdType.AccountStandingState.ALL_GOOD };
    c12 = null;
    DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    c19 = "";
    closure_15 = [];
  }
};
const safetyHubStore = new SafetyHubStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default safetyHubStore;