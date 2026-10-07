// === Module 15165: getSettingsOverrideReason ===

// Module 15165 (getSettingsOverrideReason)
import util from "util" /* 1126 */;
import _modDef3915 from "module_3915" /* 3915 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2029 */;

const require = globalThis.__r;

require = fn;
const constants = fn(1095).SettingsOverrideReasonKeys;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
      if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
        const intl2 = util.intl;
        let formatResult = intl2.format(util.t["1dT9V4"], {});
      } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
        const intl = util.intl;
        formatResult = intl.string(util.t["2ExvRu"]);
      } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
        const intl3 = util.intl;
        formatResult = intl3.string(_modDef3915.VGcdxP);
      }
      return formatResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => {
    const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
    if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = util.intl;
      let formatResult = intl2.format(util.t["1dT9V4"], {});
    } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = util.intl;
      formatResult = intl.string(util.t["2ExvRu"]);
    } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
      const intl3 = util.intl;
      formatResult = intl3.string(_modDef3915.VGcdxP);
    }
    return formatResult;
  });
});
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl3 = util.intl;
    return intl3.format(util.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["2ExvRu"]);
  } else if (constants.GAME_MODE === arg0) {
    const intl = util.intl;
    return intl.string(_modDef3915.VGcdxP);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = tmp2;
export const useIsSettingLockedByOverride = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE);
});