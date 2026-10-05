// discord_app/modules/user_settings/defs/native/EncryptionSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useSecureFramesVerifiedUsers from "../../../rtc/hooks/useSecureFramesVerifiedUsers.tsx";
import SecureFramesPersistedStore from "../../../rtc/SecureFramesPersistedStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let persistentCodesEnabled;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SecureFramesPersistedStore];
        const fn = function s() {
          return persistentCodesEnabled.getPersistentCodesEnabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let persistentCodesEnabled;
      const items = [SecureFramesPersistedStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useSecureFramesVerifiedUsers;
      const secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
      if (cResult[0] !== secureFramesVerifiedUserIds.length) {
        const intl = intl2.intl;
        const obj3 = { count: secureFramesVerifiedUserIds.length };
        const formatToPlainStringResult = intl.formatToPlainString(intl2.t["6vrePS"], obj3);
        cResult[0] = secureFramesVerifiedUserIds.length;
        cResult[1] = formatToPlainStringResult;
        tmp4 = formatToPlainStringResult;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = useSecureFramesVerifiedUsers;
      const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
      const intl = intl2.intl;
      const obj2 = { count: secureFramesVerifiedUserIds.length };
      return intl.formatToPlainString(intl2.t["6vrePS"], obj2);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.x8U2eC);
  },
  useDescription: tmp3,
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: tmp2,
  screen: {
    route: UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;
