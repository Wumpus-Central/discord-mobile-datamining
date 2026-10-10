// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import UserSettingsFriendRequestsDefault from "../../../../user_settings/content_and_social/native/UserSettingsFriendRequests.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    flex: 1,
    paddingTop: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FriendRequestsSettingsScreen() {
      const cResult = c.c(4);
      const tmp3 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React4(ThemedGradientDefault, { absolute: true });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = React4(UserSettingsFriendRequestsDefault, {});
        cResult[1] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp3.container) {
        const obj2 = { children: null };
        const items = [first];
        const obj3 = { style: tmp3.container, children: tmp8 };
        items[1] = React4(ScrollView, obj3);
        obj2.children = items;
        const tmp17 = timestampProducer(hasOwnProperty, obj2);
        cResult[2] = tmp3.container;
        cResult[3] = tmp17;
        let tmp12 = tmp17;
      } else {
        tmp12 = cResult[3];
      }
      return tmp12;
    }
  : function FriendRequestsSettingsScreen() {
      const obj = { children: null };
      const items = [React4(ThemedGradientDefault, { absolute: true })];
      const tmp = closure_7();
      items[1] = React4(ScrollView, {
        style: closure_7().container,
        children: React4(UserSettingsFriendRequestsDefault, {}),
      });
      obj.children = items;
      return timestampProducer(hasOwnProperty, obj);
    };
