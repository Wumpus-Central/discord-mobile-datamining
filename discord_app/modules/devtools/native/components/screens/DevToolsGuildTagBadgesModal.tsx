// === Module 15157: ? ===

// Module 15157
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9941 */;
import itemsDefault from "items" /* 15158 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function DevToolsGuildTagBadgesModal() {
  let obj = _require(6312);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    name: "DevToolsGuildTagBadges",
    options() {
      return { title: "Guild Tag Badges" };
    },
    component: itemsDefault
  };
  ({ Navigator, Screen } = closure_4);
  obj[1] = <Screen name="DevToolsGuildTagBadges" options={function options() {
    return { title: "Guild Tag Badges" };
  }} component={itemsDefault} />;
  return <Navigator name="DevToolsGuildTagBadges" options={function options() {
    return { title: "Guild Tag Badges" };
  }} component={itemsDefault} />;
});
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx");

export default memoResult;