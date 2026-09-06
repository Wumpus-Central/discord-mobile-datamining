// === Module 15691: PaymentFlowTestModal ===

// Module 15691 (PaymentFlowTestModal)
import HeaderShared from "HeaderShared" /* 7863 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10925 */;
import PaymentFlowTestDefault from "PaymentFlowTest" /* 15692 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7913);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default noop.memo(function PaymentFlowTestModal() {
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
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: PaymentFlowTestDefault
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={PaymentFlowTestDefault} />;
  return <Navigator name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={PaymentFlowTestDefault} />;
});