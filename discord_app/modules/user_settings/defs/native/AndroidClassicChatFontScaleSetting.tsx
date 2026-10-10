// === Module 15587: AndroidClassicChatFontScaleSetting ===

// Module 15587 (AndroidClassicChatFontScaleSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _mod4733 from "module_4733" /* 4733 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import FontScaleStore from "FontScaleStore" /* 15535 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useClassicChatFontScaleValue() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(isClassicChatFontScaleEnabled) {
      return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return useFontScaleStore(first, _mod4733.shallow);
}) : (function useClassicChatFontScaleValue() {
  return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4733.shallow);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useClassicChatFontScaleValue() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(isClassicChatFontScaleEnabled) {
        return isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    return useFontScaleStore(first, _mod4733.shallow);
  }) : (function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, _mod4733.shallow);
  }),
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    return require("ReactBatchUpdates").batchUpdates(() => useFontScaleStore.setState({ isClassicChatFontScaleEnabled }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = util.intl;
    return intl.string(util.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;