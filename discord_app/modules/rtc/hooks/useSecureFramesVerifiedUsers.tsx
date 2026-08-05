// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import initialize from "initialize";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return initialize /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};