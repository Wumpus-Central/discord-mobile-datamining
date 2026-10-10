// === Module 11521: CtaButtonUtils ===

// Module 11521 (CtaButtonUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useShouldRenderReportFalsePositiveButton from "useShouldRenderReportFalsePositiveButton" /* 11522 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 11523 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 10487 */;

require = fn;
const CtaButtonType = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen", AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export { CtaButtonType };
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      if (tmpResult2.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      tmpResult2 = AgeVerificationSystemNotificationUtils;
    }
    tmpResult = AgeVerificationSystemNotificationUtils;
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = ReactCompilerGating.isReactCompilerEnabled() ? (function useCtaButtonType(id, channel_id) {
  const obj = c;
  const cResult = obj.c(2);
  const shouldRenderReportFalsePositiveButton = useShouldRenderReportFalsePositiveButton.useShouldRenderReportFalsePositiveButton(id);
  const result = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithRetryCta(channel_id, id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterPendingConnectionStore];
    class E {
      constructor() {
        return closure_1_2.getPendingConnection();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let result1 = null != initialize.useStateFromStores(tmp6, E);
  if (result1) {
    result1 = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult2 = AgeVerificationSystemNotificationUtils;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
}) : (function useCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const items = [FamilyCenterPendingConnectionStore];
  let result1 = null != initialize.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult = AgeVerificationSystemNotificationUtils;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
});