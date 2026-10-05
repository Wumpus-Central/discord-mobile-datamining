// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import UserSettingsFriendRequestsDefault from "../../../../user_settings/content_and_social/native/UserSettingsFriendRequests.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let closure_7 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp12;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp3 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React3(ThemedGradientDefault, { absolute: true });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = React3(UserSettingsFriendRequestsDefault, {});
        cResult[1] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp3.container) {
        const obj2 = { children: items };
        items = [first];
        const obj3 = { style: tmp3.container, children: tmp8 };
        items[1] = React3(ScrollView, obj3);
        const tmp17 = metroRequire(hasOwnProperty, obj2);
        cResult[2] = tmp3.container;
        cResult[3] = tmp17;
        tmp12 = tmp17;
      } else {
        tmp12 = cResult[3];
      }
      return tmp12;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [,];
      const tmp = closure_7();
      items[0] = React3(ThemedGradientDefault, { absolute: true });
      const obj2 = { style: tmp.container, children: React3(UserSettingsFriendRequestsDefault, {}) };
      items[1] = React3(ScrollView, obj2);
      return metroRequire(hasOwnProperty, obj);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx",
);

export default tmp4;
