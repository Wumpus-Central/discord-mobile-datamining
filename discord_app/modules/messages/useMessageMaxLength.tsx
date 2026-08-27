// === Module 8092: useMessageMaxLength ===

// Module 8092 (useMessageMaxLength)
import initialize from "initialize" /* 589 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4107 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

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