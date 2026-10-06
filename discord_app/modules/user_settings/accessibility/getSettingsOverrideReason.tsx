// discord_app/modules/user_settings/accessibility/getSettingsOverrideReason.tsx
import UserSettingsConstants from "../UserSettingsConstants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import _modDef3915 from "../../game_mode/GameMode.messages.js";
import UserSettingsOverridesStore from "../UserSettingsOverridesStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const constants = UserSettingsConstants.SettingsOverrideReasonKeys;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsOverridesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let formatResult;
          const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
          if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
            const intl2 = intl4.intl;
            formatResult = intl2.format(intl4.t["1dT9V4"], {});
          } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
            const intl = intl4.intl;
            formatResult = intl.string(intl4.t["2ExvRu"]);
          } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
            const intl3 = intl4.intl;
            formatResult = intl3.string(_modDef3915.VGcdxP);
          }
          return formatResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserSettingsOverridesStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let formatResult;
        const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
        if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
          const intl2 = intl4.intl;
          formatResult = intl2.format(intl4.t["1dT9V4"], {});
        } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
          const intl = intl4.intl;
          formatResult = intl.string(intl4.t["2ExvRu"]);
        } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
          const intl3 = intl4.intl;
          formatResult = intl3.string(_modDef3915.VGcdxP);
        }
        return formatResult;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl3 = intl4.intl;
    return intl3.format(intl4.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["2ExvRu"]);
  } else if (constants.GAME_MODE === arg0) {
    const intl = intl4.intl;
    return intl.string(_modDef3915.VGcdxP);
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsOverridesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserSettingsOverridesStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE,
      );
    };
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default getSettingsOverrideReason;
export const useSettingsOverrideReason = tmp2;
export const useIsSettingLockedByOverride = tmp3;
