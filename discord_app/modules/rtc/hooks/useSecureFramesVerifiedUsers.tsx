// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../VerifiedKeyStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};