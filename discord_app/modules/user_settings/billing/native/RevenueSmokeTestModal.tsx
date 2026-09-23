// === Module 16077: RevenueSmokeTestModal ===

// Module 16077 (RevenueSmokeTestModal)
import HeaderShared from "HeaderShared" /* 8192 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11271 */;
import BillingFlowsDefault from "BillingFlows" /* 16078 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8243);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default noop.memo(function RevenueSmokeTestModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = {
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
    children: null
  };
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_4);
  obj3.children = <Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} component={BillingFlowsDefault.RunAllFlows} />;
  obj2.children = <Navigator screenOptions={function screenOptions(navigation) {
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
  }}>{null}</Navigator>;
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
});