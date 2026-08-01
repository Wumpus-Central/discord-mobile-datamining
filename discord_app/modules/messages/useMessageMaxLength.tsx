// === Module 6185: useMessageMaxLength ===

// Module 6185 (useMessageMaxLength)
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ MAX_MESSAGE_LENGTH_PREMIUM: c4, MAX_MESSAGE_LENGTH: c5 } = ME);
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default function useMessageMaxLength() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(table[2]).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5);
};
export const getMaxMessageLength = function getMaxMessageLength() {
  return importDefault(3839).canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_4 : closure_5;
};