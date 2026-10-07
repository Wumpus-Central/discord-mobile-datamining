// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4498 from "../../../../../_runtime/metro/04498__.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FontScaleStore from "../../appearance/native/FontScaleStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isClassicChatFontScaleEnabled) {
          return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return useFontScaleStore(first, _mod4498.shallow);
    }
  : () =>
      useFontScaleStore(
        (isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled,
        _mod4498.shallow,
      );
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(isClassicChatFontScaleEnabled) {
            return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        return useFontScaleStore(first, _mod4498.shallow);
      }
    : () =>
        useFontScaleStore(
          (isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled,
          _mod4498.shallow,
        ),
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    return require("ReactBatchUpdates").batchUpdates(() =>
      useFontScaleStore.setState({ isClassicChatFontScaleEnabled }),
    );
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = util.intl;
    return intl.string(util.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
