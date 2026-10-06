// === Module 17931: useIsMFAEnabled ===

// Module 17931 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MFALevels = Constants.MFALevels;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let props;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(7);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    const fn2 = function c() {
      return props.getProps().mfaLevel;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let mfaEnabled;
  const tmpResult2 = useStateFromStores;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  if (cResult[4] === stateFromStores1 === MFALevels.ELEVATED) {
    let tmp15;
    if (cResult[5] === true === mfaEnabled) {
      tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj2 = { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
  cResult[4] = stateFromStores1 === MFALevels.ELEVATED;
  cResult[5] = true === mfaEnabled;
  cResult[6] = obj2;
  tmp15 = obj2;
}) : (() => {
  let currentUser;
  let props;
  const items = [UserStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
});
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = tmp2;