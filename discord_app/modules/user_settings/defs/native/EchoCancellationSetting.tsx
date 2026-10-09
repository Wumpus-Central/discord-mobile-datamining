// discord_app/modules/user_settings/defs/native/EchoCancellationSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEchoCancellationSettingValue() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function l() {
          return echoCancellation.getEchoCancellation();
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
  : function useEchoCancellationSettingValue() {
      const items = [MediaEngineStore];
      return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(7974).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useEchoCancellationSettingValue() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          const fn = function l() {
            return echoCancellation.getEchoCancellation();
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
    : function useEchoCancellationSettingValue() {
        const items = [MediaEngineStore];
        return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
      },
  onValueChange: fn(11048).handleEchoCancellationChange,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
