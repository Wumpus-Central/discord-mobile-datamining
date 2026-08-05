// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};