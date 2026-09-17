// === Module 15828: PaymentFlowTestModal ===

// Module 15828 (PaymentFlowTestModal)
import HeaderShared from "HeaderShared" /* 7984 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11082 */;
import PaymentFlowTestDefault from "PaymentFlowTest" /* 15829 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8035);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default noop.memo(function PaymentFlowTestModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
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
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_4);
  obj2.children = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={PaymentFlowTestDefault} />;
  return <Navigator screenOptions={function screenOptions(navigation) {
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
  }}>{null}</Navigator>;
});