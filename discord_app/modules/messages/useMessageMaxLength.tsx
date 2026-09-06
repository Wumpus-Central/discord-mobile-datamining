// discord_app/modules/messages/useMessageMaxLength.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () =>
    PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5,
  );
}
export const getMaxMessageLength = function getMaxMessageLength() {
  return PremiumUtilsDefault.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React4 : hasOwnProperty;
};
