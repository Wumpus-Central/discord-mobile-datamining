// === Module 15529: AutomaticGainControlSetting ===

// Module 15529 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutomaticGainControlSettingValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return automaticGainControl.getAutomaticGainControl();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useAutomaticGainControlSettingValue() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(7992).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useAutomaticGainControlSettingValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      const fn = function o() {
        return automaticGainControl.getAutomaticGainControl();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useAutomaticGainControlSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  }),
  onValueChange: fn(11088).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;