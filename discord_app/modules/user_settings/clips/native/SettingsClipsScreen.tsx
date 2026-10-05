// discord_app/modules/user_settings/clips/native/SettingsClipsScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { settings: items };
        items = [MobileUserSettings.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
        const items1 = [obj2];
        const obj3 = { sections: items1 };
        const tmpResult = SettingBuilders;
        const list = tmpResult.createList(obj3);
        cResult[0] = list;
        first = list;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const node = react.useMemo(() => {
        let items;
        const obj = { settings: items };
        items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
        const sections = [obj];
        const obj2 = SettingBuilders;
        return obj2.createList({ sections });
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default tmp2;
