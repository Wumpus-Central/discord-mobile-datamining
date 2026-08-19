// === Module 15145: ? ===

// Module 15145
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9941 */;
import TestViewDefault from "TestView" /* 15146 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function PaymentFlowTestModal() {
  let obj = _require(6312);
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