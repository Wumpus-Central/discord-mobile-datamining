// === Module 14991: useSecureFramesVerifiedUserIds ===

// Module 14991 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 9692 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};