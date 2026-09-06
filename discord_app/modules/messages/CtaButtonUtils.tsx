// discord_app/modules/messages/CtaButtonUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import useAgeVerificationRunner from "../age_assurance/AgeVerificationUtils.tsx";
import shouldRenderReportFalsePositiveButton2 from "../explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx";
import closure_2 from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";

require = arg1;
let obj = {
  MARK_AS_FALSE_POSITIVE: "mark_as_false_positive",
  AGE_VERIFICATION_RETRY: "age_verification_retry",
  CONNECT_TO_TEEN: "connect_to_teen",
  AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review",
};
let result = require("set").fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export const CtaButtonType = obj;
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  obj = shouldRenderReportFalsePositiveButton2;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    let tmpResult = tmp(4773);
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      tmpResult = tmp(4773);
      if (tmpResult.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
    }
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = function useCtaButtonType(id, channel_id) {
  obj = shouldRenderReportFalsePositiveButton2;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = useAgeVerificationRunner.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const obj2 = useAgeVerificationRunner;
  const tmp = require;
  const items = [closure_2];
  let result1 = null != initialize.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = useAgeVerificationRunner.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult = useAgeVerificationRunner;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
};
