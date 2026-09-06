// === Module 17688: useIsMFAEnabled ===

// Module 17688 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 563 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const MFALevels = fn(1074).MFALevels;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let obj = useStateFromStores;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  return obj;
};