// === Module 15154: ? ===

// Module 15154
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9941 */;
import setWarningBoostsDefault from "setWarningBoosts" /* 15155 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function DevToolsGuildPowerupsModal() {
  let obj = _require(6312);
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