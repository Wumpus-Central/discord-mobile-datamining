// === Module 20506: useIsMFAEnabled ===

// Module 20506 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 563 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8339 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const MFALevels = fn(1072).MFALevels;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export function useIsMFAEnabled() {
  items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
}