// discord_app/modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import updatePersistentCodesEnabled from "../../../rtc/updatePersistentCodesEnabled.tsx";
import SecureFramesPersistedStore from "../../../rtc/SecureFramesPersistedStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSecureFramesPersistentCodesValue() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SecureFramesPersistedStore];
        const fn = function n() {
          return persistentCodesEnabled.getPersistentCodesEnabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useSecureFramesPersistentCodesValue() {
      const items = [SecureFramesPersistedStore];
      return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(7974).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useSecureFramesPersistentCodesValue() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SecureFramesPersistedStore];
          const fn = function n() {
            return persistentCodesEnabled.getPersistentCodesEnabled();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        return initialize.useStateFromStores(tmp4, tmp5);
      }
    : function useSecureFramesPersistentCodesValue() {
        const items = [SecureFramesPersistedStore];
        return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
      },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = updatePersistentCodesEnabled.updatePersistentCodesEnabled(arg0);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;
