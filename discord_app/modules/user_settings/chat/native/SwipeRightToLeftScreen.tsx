// discord_app/modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7966).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsSwipeRightToLeft() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { sections: null };
        const obj3 = { settings: null };
        const items = [MobileUserSettings.CHAT_GESTURES];
        obj3.settings = items;
        const items1 = [obj3];
        const items2 = [];
        HermesBuiltin.arraySpread(items1, 0);
        obj2.sections = items2;
        const list = SettingBuilders.createList(obj2);
        cResult[0] = list;
        let first = list;
        const tmpResult = SettingBuilders;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { node: first };
        const tmp13 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[1];
      }
      return tmp10;
    }
  : function UserSettingsSwipeRightToLeft() {
      const node = noop.useMemo(() => {
        const obj2 = { sections: null };
        const obj3 = { settings: null };
        const items = [constants.CHAT_GESTURES];
        obj3.settings = items;
        const items1 = [obj3];
        const items2 = [...items1];
        obj2.sections = items2;
        return SettingBuilders.createList(obj2);
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
