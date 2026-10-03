// discord_app/modules/user_settings/clips/native/SettingsClipsScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7634).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { settings: null };
        const items = [MobileUserSettings.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
        obj2.settings = items;
        const items1 = [obj2];
        const obj3 = { sections: items1 };
        const list = SettingBuilders.createList(obj3);
        cResult[0] = list;
        let first = list;
        const tmpResult = SettingBuilders;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { node: first };
        const tmp10 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const node = noop.useMemo(() => {
        const obj = { settings: null };
        const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
        obj.settings = items;
        const sections = [obj];
        return SettingBuilders.createList({ sections });
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
