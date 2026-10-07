// discord_app/modules/messages/useMessageMaxLength.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1085);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser())
            ? closure_1_4
            : closure_1_5;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () =>
        PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5,
      );
    };
export const getMaxMessageLength = function getMaxMessageLength() {
  return PremiumUtilsDefault.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React4 : hasOwnProperty;
};
