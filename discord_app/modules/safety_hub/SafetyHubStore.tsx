// discord_app/modules/safety_hub/SafetyHubStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SafetyHubModels from "SafetyHubModels.tsx";
import createAggregatorDefault from "../../../_runtime/08107_createAggregator.js";
import SafetyHubConstants from "SafetyHubConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_6;

let SuspendedAgeCheckStatus;
let hasOwnProperty;
function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    c25 = "";
    error = null;
    c28 = false;
  }
}
function reset() {
  c9 = false;
  closure_6 = {};
  accountStanding = { state: SafetyHubModels.AccountStandingState.ALL_GOOD };
  c12 = null;
  DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
  userInput = "";
  appealEligibility = [];
  showExpressiveModalSubtitleAlt = false;
  manualReviewFallbackEnabled = false;
  FAILURE = AgeCheckStatus.NONE;
  c26 = 0;
  c30 = null;
  ({ state: SafetyHubModels.AccountStandingState.ALL_GOOD });
}
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubConstants.AppealIngestionSignal;
({ SuspendedAgeCheckStatus, AGE_CHECK_MAX_POLL_ATTEMPTS: hasOwnProperty } = SafetyHubConstants);
const metroRequire = {};
const metroImportDefault = {};
let obj = { state: SafetyHubModels.AccountStandingState.ALL_GOOD };
let accountStanding = obj;
let c9 = false;
let c10 = false;
let c12 = null;
let isDsaEligible = false;
let isAppealEligible = false;
let appealEligibility = [];
let expressiveModalV2Enabled = false;
let showExpressiveModalSubtitleAlt = false;
let manualReviewFallbackEnabled = false;
let manualReviewDecidedUnderage = false;
let c20 = false;
let DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let userInput = "";
let username = "";
let c25 = "";
let c26 = 0;
let error = null;
let c28 = false;
let FAILURE = AgeCheckStatus.NONE;
let c30 = null;
let closure_31 = {
  [SuspendedAgeCheckStatus.PENDING]: AgeCheckStatus.LOADING,
  [SuspendedAgeCheckStatus.UNBANNED]: AgeCheckStatus.VERIFIED,
  [SuspendedAgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN]: AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN,
  [SuspendedAgeCheckStatus.UNDERAGE]: AgeCheckStatus.UNDERAGE,
  [SuspendedAgeCheckStatus.UNDERAGE_MANUAL_REVIEW]: AgeCheckStatus.UNDERAGE_MANUAL_REVIEW,
};
const Store = get_initializedDefault.Store;
class SafetyHubStore extends Store {
  isFetching() {
    return c9;
  }
  getClassifications() {
    return Object.values(closure_6);
  }
  getClassification(arg0) {
    return closure_6[arg0];
  }
  getAccountStanding() {
    return accountStanding;
  }
  getFetchError() {
    return error;
  }
  isInitialized() {
    return c10;
  }
  getClassificationRequestState(arg0) {
    return closure_7[arg0];
  }
  getAppealClassificationId() {
    return c12;
  }
  getIsDsaEligible() {
    return isDsaEligible;
  }
  getIsAppealEligible() {
    return isAppealEligible;
  }
  getAppealEligibility() {
    return appealEligibility;
  }
  getIsExpressiveModalV2Enabled() {
    return expressiveModalV2Enabled;
  }
  getShowExpressiveModalSubtitleAlt() {
    return showExpressiveModalSubtitleAlt;
  }
  getIsManualReviewFallbackEnabled() {
    return manualReviewFallbackEnabled;
  }
  getIsManualReviewDecidedUnderage() {
    return manualReviewDecidedUnderage;
  }
  getAppealSignal() {
    return DIDNT_VIOLATE_POLICY;
  }
  getFreeTextAppealReason() {
    return userInput;
  }
  getIsSubmitting() {
    return c20;
  }
  getSubmitError() {
    return error;
  }
  getUsername() {
    return username;
  }
  getAgeVerificationWebviewUrl() {
    return c25;
  }
  getAgeVerificationError() {
    return error;
  }
  getIsLoadingAgeVerification() {
    return c28;
  }
  getAgeCheckStatus() {
    return FAILURE;
  }
  getAgeCheckError() {
    return c30;
  }
  getAgeCheckAttempts() {
    return c26;
  }
}
const prototype = SafetyHubStore.prototype;
SafetyHubStore.displayName = "SafetyHubStore";
const obj2 = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    c9 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let classifications;
    ({
      classifications,
      accountStanding,
      isDsaEligible,
      isAppealEligible,
      username,
      appealEligibility,
      expressiveModalV2Enabled,
      showExpressiveModalSubtitleAlt,
      manualReviewFallbackEnabled,
      manualReviewDecidedUnderage,
    } = arg0);
    closure_6 = createAggregatorDefault(classifications, "id");
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
    DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    userInput = "";
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function handleAppealSignalSelect(signal) {
    DIDNT_VIOLATE_POLICY = signal.signal;
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function handleAppealSignalCustomInputChange(userInput) {
    userInput = userInput.userInput;
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function handleSafetyHubRequestReviewStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c20 = true;
      error = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    c20 = false;
    error = null;
    closure_6[arg0.classificationId].appeal_status = { status: SafetyHubModels.AppealStatusType.REVIEW_PENDING };
    ({ status: SafetyHubModels.AppealStatusType.REVIEW_PENDING });
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    c20 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c25 = "";
      error = null;
      c28 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(
    verificationWebviewUrl,
  ) {
    c25 = verificationWebviewUrl.verificationWebviewUrl;
    error = null;
    c28 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    c25 = "";
    error = error.error;
    c28 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS:
    function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        FAILURE = AgeCheckStatus.LOADING;
        for (const key10007 in closure_6) {
          if (!closure_6[key10007].is_coppa) {
            continue;
          } else {
            let obj = { status: SafetyHubModels.AppealStatusType.REVIEW_PENDING };
            let tmp4 = closure_6[key10007];
            tmp4.appeal_status = obj;
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
        FAILURE = AgeCheckStatus.LOADING;
      }
    },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function handleSafetyHubAgeVerificationStartPoll(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      FAILURE = AgeCheckStatus.LOADING;
      c30 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      FAILURE = AgeCheckStatus.LOADING;
      c30 = null;
      c26 = c26 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(
    success,
  ) {
    if (success.success) {
      FAILURE = AgeCheckStatus.SUCCESS;
    } else if (c26 < hasOwnProperty) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    c30 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function handleSafetyHubCheckAgeVerificationCheckSuccessV2(
    arg0,
  ) {
    FAILURE = closure_31[arg0.status];
    c30 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    FAILURE = AgeCheckStatus.ERROR;
    error = error.error;
  },
  SAFETY_HUB_RESET_AGE_CHECK_STATUS: function handleSafetyHubResetAgeCheckStatus(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      FAILURE = AgeCheckStatus.NONE;
      c26 = 0;
      c30 = null;
    }
  },
  LOGOUT: reset,
  LOGIN_SUSPENDED_USER: reset,
};
const safetyHubStore = new SafetyHubStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default safetyHubStore;
