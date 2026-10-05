// discord_app/modules/messages/CtaButtonUtils.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import useShouldRenderReportFalsePositiveButton from "../explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx";
import FamilyCenterPendingConnectionStore from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CtaButtonType = {
  MARK_AS_FALSE_POSITIVE: "mark_as_false_positive",
  AGE_VERIFICATION_RETRY: "age_verification_retry",
  CONNECT_TO_TEEN: "connect_to_teen",
  AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, channel_id) => {
      let CONNECT_TO_TEEN;
      let pendingConnection;
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useShouldRenderReportFalsePositiveButton;
      const shouldRenderReportFalsePositiveButton = obj2.useShouldRenderReportFalsePositiveButton(id);
      const obj3 = AgeVerificationUtils;
      const result = obj3.isAgeVerificationMessageWithRetryCta(channel_id, id);
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
      const tmpResult = get_initialized;
      let result1 = null != tmpResult.useStateFromStores(tmp6, E);
      if (result1) {
        const tmpResult2 = AgeVerificationUtils;
        result1 = tmpResult2.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
      }
      if (shouldRenderReportFalsePositiveButton) {
        CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
      } else if (result) {
        CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
      } else if (result1) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      return CONNECT_TO_TEEN;
    }
  : (id, channel_id) => {
      let CONNECT_TO_TEEN;
      let pendingConnection;
      const obj = useShouldRenderReportFalsePositiveButton;
      const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
      const obj2 = AgeVerificationUtils;
      const result = obj2.isAgeVerificationMessageWithRetryCta(channel_id, id);
      const items = [FamilyCenterPendingConnectionStore];
      const obj3 = get_initialized;
      let result1 = null != obj3.useStateFromStores(items, () => pendingConnection.getPendingConnection());
      if (result1) {
        const tmpResult = AgeVerificationUtils;
        result1 = tmpResult.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
      }
      if (shouldRenderReportFalsePositiveButton) {
        CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
      } else if (result) {
        CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
      } else if (result1) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      return CONNECT_TO_TEEN;
    };
let result = size.fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export { CtaButtonType };
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  let CONNECT_TO_TEEN;
  const obj = useShouldRenderReportFalsePositiveButton;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    const tmpResult = AgeVerificationUtils;
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      const tmpResult2 = AgeVerificationUtils;
      if (tmpResult2.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
    }
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = tmp2;
