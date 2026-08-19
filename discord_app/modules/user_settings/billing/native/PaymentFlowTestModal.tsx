// discord_app/modules/user_settings/billing/native/PaymentFlowTestModal.tsx
import getNavigationModalPresentationDefault from "../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import TestViewDefault from "PaymentFlowTest.android.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/09931_createNativeStackNavigator.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function PaymentFlowTestModal() {
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: TestViewDefault
  };
  ({ Navigator, Screen } = closure_4);
  obj[1] = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={TestViewDefault} />;
  return <Navigator name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={TestViewDefault} />;
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default memoResult;