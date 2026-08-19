// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx
import getNavigationModalPresentationDefault from "../../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import setWarningBoostsDefault from "DevToolsGuildPowerupsScreen.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../../_runtime/09931_createNativeStackNavigator.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function DevToolsGuildPowerupsModal() {
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
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
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default memoResult;