// === Module 15228: useSecureFramesVerifiedUserIds ===

// Module 15228 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 9744 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};