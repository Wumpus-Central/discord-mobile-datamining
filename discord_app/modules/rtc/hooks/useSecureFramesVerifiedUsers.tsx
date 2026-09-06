// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [VerifiedKeyStore];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
