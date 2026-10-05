// discord_app/modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx
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
      let items2;
      let tmp12;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { settings: items };
        items = [MobileUserSettings.CHAT_GESTURES];
        const items1 = [obj3];
        const obj2 = { sections: items2 };
        items2 = [];
        const createList = SettingBuilders.createList;
        SettingBuilders;
        HermesBuiltin.arraySpread(items2, items1, 0);
        const list = createList(obj2);
        cResult[0] = list;
        first = list;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[1];
      }
      return tmp12;
    }
  : () => {
      const node = react.useMemo(() => {
        let items;
        let items2;
        const obj3 = { settings: items };
        items = [constants.CHAT_GESTURES];
        const items1 = [obj3];
        const obj2 = { sections: items2 };
        items2 = [...items1];
        const obj = SettingBuilders;
        return obj.createList(obj2);
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default tmp2;
