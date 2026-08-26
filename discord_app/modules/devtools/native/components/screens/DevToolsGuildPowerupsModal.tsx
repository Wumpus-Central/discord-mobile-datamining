// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx
import setWarningBoostsDefault from "DevToolsGuildPowerupsScreen.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../../_runtime/08785_createNativeStackNavigator.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function DevToolsGuildPowerupsModal() {
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[4]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: callback(closure_1_2[4]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(closure_1_1(closure_1_2[5])());
      return obj;
    },
    children: null
  };
  obj = {
    name: "DevToolsGuildPowerups",
    options() {
      return { title: "Guild Powerups" };
    },
    component: setWarningBoostsDefault
  };
  ({ Navigator, Screen } = closure_4);
  obj[1] = <Screen name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={setWarningBoostsDefault} />;
  return <Navigator name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={setWarningBoostsDefault} />;
});
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default memoResult;