// === Module 16909: useIsMFAEnabled ===

// Module 16909 (useIsMFAEnabled)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import closure_2 from "handleFormInit" /* 8875 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { MFALevels } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

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