// === Module 15767: DevToolsGuildPowerupsModal ===

// Module 15767 (DevToolsGuildPowerupsModal)
import HeaderShared from "HeaderShared" /* 7936 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11017 */;
import DevToolsGuildPowerupsScreenDefault from "DevToolsGuildPowerupsScreen" /* 15768 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7987);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default noop.memo(function DevToolsGuildPowerupsModal() {
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
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  obj = {
    name: "DevToolsGuildPowerups",
    options() {
      return { title: "Guild Powerups" };
    },
    component: DevToolsGuildPowerupsScreenDefault
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = <Screen name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={DevToolsGuildPowerupsScreenDefault} />;
  return <Navigator name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={DevToolsGuildPowerupsScreenDefault} />;
});