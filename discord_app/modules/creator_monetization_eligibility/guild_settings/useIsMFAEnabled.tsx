// discord_app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import handleFormInit from "../../guild_settings/GuildSettingsStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { MFALevels } from "../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_2];
  let mfaEnabled;
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  return obj;
};