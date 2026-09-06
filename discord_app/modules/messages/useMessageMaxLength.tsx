// === Module 9304: useMessageMaxLength ===

// Module 9304 (useMessageMaxLength)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5);
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return PremiumUtilsDefault.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React4 : hasOwnProperty;
};