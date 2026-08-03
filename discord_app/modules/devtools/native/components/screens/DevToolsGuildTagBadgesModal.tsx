import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("noop").memo(function DevToolsGuildTagBadgesModal() {
  let Navigator;
  let Screen;
  let obj = _require(5636);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[4]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[4]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[5])());
      return obj;
    },
    children: null
  };
  obj = {
    name: "DevToolsGuildTagBadges",
    options() {
      return { title: "Guild Tag Badges" };
    },
    component: importDefault(14888)
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj[1] = <Screen name="DevToolsGuildTagBadges" options={function options() {
    return { title: "Guild Tag Badges" };
  }} component={importDefault(14888)} />;
  return <Navigator name="DevToolsGuildTagBadges" options={function options() {
    return { title: "Guild Tag Badges" };
  }} component={importDefault(14888)} />;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx");

export default memoResult;