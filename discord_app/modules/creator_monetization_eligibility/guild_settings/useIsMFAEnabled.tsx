// discord_app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
import handleFormInit from "handleFormInit";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MFALevels } from "ME";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  let obj = defaultAreStatesEqual /* defaultAreStatesEqual */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [handleFormInit];
  let mfaEnabled;
  const stateFromStores1 = defaultAreStatesEqual /* defaultAreStatesEqual */.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  obj = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  return obj;
};