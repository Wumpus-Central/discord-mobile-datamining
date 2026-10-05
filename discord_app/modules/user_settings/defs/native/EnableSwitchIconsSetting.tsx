// discord_app/modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function s() {
          return isSwitchIconsEnabled.isSwitchIconsEnabled;
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
  : () => {
      const items = [AccessibilityStore];
      return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
    };
const SettingBuilders = fn(11129);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(7634).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: fn(14277).setSwitchIconsEnabled,
  hasIcon: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export const useEnableSwitchIconsSettingValue = tmp2;
