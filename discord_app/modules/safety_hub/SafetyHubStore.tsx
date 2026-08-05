// discord_app/modules/safety_hub/SafetyHubStore.tsx
import SafetyHubView from "SafetyHubView";
import { Store } from "initialize";

function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let c21 = "";
    let c23 = null;
    let c24 = false;
  }
}
const AgeCheckStatus = SafetyHubView.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubView.AppealIngestionSignal;
let closure_5 = SafetyHubView.AGE_CHECK_MAX_POLL_ATTEMPTS;
let closure_6 = {};
let closure_7 = {};
let obj = { state: require("ContentIdType").AccountStandingState.ALL_GOOD };
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
    let c9 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let accountStanding;
    let appealEligibility;
    let classifications;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    ({ classifications, accountStanding, isDsaEligible, isAppealEligible, username, appealEligibility } = arg0);
    let closure_6 = importDefault(11194)(classifications, "id");
    let c9 = false;
    let c10 = true;
    let c11 = null;
  },
  SAFETY_HUB_FETCH_FAILURE: function handleFetchFailure(error) {
    let c9 = false;
    let c10 = false;
    error = error.error;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function handleFetchClassificationStart(classificationId) {
    closure_7[classificationId.classificationId] = require(7729) /* ContentIdType */.ClassificationRequestState.PENDING;
    let c9 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function handleFetchClassificationSuccess(classification) {
    let accountStanding;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    classification = classification.classification;
    closure_6[classification.id] = classification;
    ({ accountStanding, isDsaEligible, username, isAppealEligible } = classification);
    closure_7[classification.id] = require(7729) /* ContentIdType */.ClassificationRequestState.SUCCESS;
    let c9 = false;
    let c11 = null;
    let c10 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function handleFetchClassificationFailure(error) {
    let c9 = false;
    error = error.error;
    closure_7[error.classificationId] = require(7729) /* ContentIdType */.ClassificationRequestState.FAILED;
    let c10 = false;
  },
  SAFETY_HUB_APPEAL_OPEN: function handleAppealOpen(classificationId) {
    classificationId = classificationId.classificationId;
  },
  SAFETY_HUB_APPEAL_CLOSE: function handleAppealClose() {
    let c12 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let c19 = "";
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
      let c16 = true;
      let c17 = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    let c16 = false;
    let c17 = null;
    dependencyMap[arg0.classificationId].appeal_status = { status: require(7729) /* ContentIdType */.AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    let c16 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c21 = "";
      let c23 = null;
      let c24 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(verificationWebviewUrl) {
    verificationWebviewUrl = verificationWebviewUrl.verificationWebviewUrl;
    let c23 = null;
    let c24 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    let c21 = "";
    error = error.error;
    let c24 = false;
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
          let obj = { status: null };
          let tmp2 = require;
          let tmp3 = dependencyMap;
          obj[0] = require(7729) /* ContentIdType */.AppealStatusType.REVIEW_PENDING;
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
      let c26 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      let c26 = null;
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
    let c26 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    const ERROR = AgeCheckStatus.ERROR;
    error = error.error;
  },
  LOGOUT: function reset() {
    let c9 = false;
    let closure_6 = {};
    const obj = { state: require(7729) /* ContentIdType */.AccountStandingState.ALL_GOOD };
    let c12 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let c19 = "";
    let closure_15 = [];
  }
};
const safetyHubStore = new SafetyHubStore(require("dispatcher"), obj);
const result = require("createAggregator").fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default safetyHubStore;