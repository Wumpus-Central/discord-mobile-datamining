// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx
import HeaderShared from "../../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import DevToolsGuildTagBadgesScreenDefault from "DevToolsGuildTagBadgesScreen.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7913);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx");

export default noop.memo(function DevToolsGuildTagBadgesModal() {
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[4]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center",
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null,
  };
  obj = {
    name: "DevToolsGuildTagBadges",
    options() {
      return { title: "Guild Tag Badges" };
    },
    component: DevToolsGuildTagBadgesScreenDefault,
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = (
    <Screen
      name="DevToolsGuildTagBadges"
      options={function options() {
        return { title: "Guild Tag Badges" };
      }}
      component={DevToolsGuildTagBadgesScreenDefault}
    />
  );
  return (
    <Navigator
      name="DevToolsGuildTagBadges"
      options={function options() {
        return { title: "Guild Tag Badges" };
      }}
      component={DevToolsGuildTagBadgesScreenDefault}
    />
  );
});
