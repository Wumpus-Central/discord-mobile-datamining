// discord_app/modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx";
import MobileVoiceOverlayStore from "../../../../stores/native/MobileVoiceOverlayStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MobileVoiceOverlayStore];
        const fn = function s() {
          return enabled.getEnabled();
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
      const items = [MobileVoiceOverlayStore];
      return initialize.useStateFromStores(items, () => enabled.getEnabled());
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(7634).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MobileVoiceOverlayStore];
          const fn = function s() {
            return enabled.getEnabled();
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
        const items = [MobileVoiceOverlayStore];
        return initialize.useStateFromStores(items, () => enabled.getEnabled());
      },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(9658).isMobileOverlaySupported,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;
