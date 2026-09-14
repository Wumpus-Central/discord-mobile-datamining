// discord_app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import GuildSettingsStore from "../../guild_settings/GuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const MFALevels = fn(1074).MFALevels;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx",
);

export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
};
