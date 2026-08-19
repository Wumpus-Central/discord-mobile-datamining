// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx
import getNavigationModalPresentationDefault from "../../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import itemsDefault from "DevToolsGuildTagBadgesScreen.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../../_runtime/09931_createNativeStackNavigator.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function DevToolsGuildTagBadgesModal() {
  let obj = NavigationStack;
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