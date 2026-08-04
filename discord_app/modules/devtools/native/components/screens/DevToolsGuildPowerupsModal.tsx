import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("noop").memo(function DevToolsGuildPowerupsModal() {
  let Navigator;
  let Screen;
  let obj = _require(5665);
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
    name: "DevToolsGuildPowerups",
    options() {
      return { title: "Guild Powerups" };
    },
    component: importDefault(14918)
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj[1] = <Screen name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={importDefault(14918)} />;
  return <Navigator name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={importDefault(14918)} />;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default memoResult;