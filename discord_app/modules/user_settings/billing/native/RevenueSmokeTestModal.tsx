// === Module 15698: RevenueSmokeTestModal ===

// Module 15698 (RevenueSmokeTestModal)
import HeaderShared from "HeaderShared" /* 7863 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10925 */;
import BillingFlowsDefault from "BillingFlows" /* 15699 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7913);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default noop.memo(function RevenueSmokeTestModal() {
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: <Screen name="RunAllFlows" options={function options() {
      return { title: "Run All Payment Flows" };
    }} component={BillingFlowsDefault.RunAllFlows} />
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}><Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} component={BillingFlowsDefault.RunAllFlows} /></Navigator>;
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: <Screen name="RunAllFlows" options={function options() {
      return { title: "Run All Payment Flows" };
    }} component={BillingFlowsDefault.RunAllFlows} />
  });
});