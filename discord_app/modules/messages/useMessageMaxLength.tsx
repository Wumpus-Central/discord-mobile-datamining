// === Module 8172: useMessageMaxLength ===

// Module 8172 (useMessageMaxLength)
import initialize from "initialize" /* 586 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

require = arg1;
({ MAX_MESSAGE_LENGTH_PREMIUM: c4, MAX_MESSAGE_LENGTH: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => callback(table[2]).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5);
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return getPremiumPlanItemDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5;
};