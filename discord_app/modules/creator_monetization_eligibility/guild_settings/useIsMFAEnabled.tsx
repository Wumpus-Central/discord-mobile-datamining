// === Module 18454: useIsMFAEnabled ===

// Module 18454 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const MFALevels = fn(1085).MFALevels;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMFAEnabled() {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    const fn2 = function b() {
      return props.getProps().mfaLevel;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(tmp8, tmp9);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  if (cResult[4] === stateFromStores1 === MFALevels.ELEVATED) {
    if (cResult[5] === tmp13) {
      let tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj2 = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  cResult[4] = stateFromStores1 === MFALevels.ELEVATED;
  cResult[5] = true === mfaEnabled;
  cResult[6] = obj2;
  tmp15 = obj2;
  const tmpResult2 = useStateFromStores;
}) : (function useIsMFAEnabled() {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
});