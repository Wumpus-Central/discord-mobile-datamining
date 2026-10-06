// === Module 15592: RevenueSmokeTestModal ===

// Module 15592 (RevenueSmokeTestModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10675 */;
import BillingFlowsDefault from "BillingFlows" /* 15593 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 7568 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["children"];
const jsx = Fragment.jsx;
let Screen = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityNativeStackOptions;
  let first;
  let tmp12;
  let tmp6;
  let tmp = accessibilityNativeStackOptions;
  let obj = accessibilityNativeStackOptions(576);
  const cResult = obj.c(6);
  let obj2 = accessibilityNativeStackOptions(6503);
  accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== accessibilityNativeStackOptions) {
    const fn = function s(navigation) {
      let obj2;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const obj = { title: children };
          const tmp = closure_1_4(children, closure_1_3);
          const GenericHeaderTitle = accessibilityNativeStackOptions(closure_1_2[7]).GenericHeaderTitle;
          const merged = Object.assign(tmp);
          return closure_1_5(GenericHeaderTitle, obj);
        },
        headerLeft: obj2.getRenderModalCloseImage(navigation),
        headerTitleAlign: "center"
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(accessibilityNativeStackOptions);
      const merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    };
    cResult[1] = accessibilityNativeStackOptions;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    Screen = Screen.Screen;
    const tmp11 = <Screen name="RunAllFlows" options={function options() {
      return { title: "Run All Payment Flows" };
    }} component={BillingFlowsDefault.RunAllFlows} />;
    cResult[3] = tmp11;
  }
  if (cResult[4] !== tmp6) {
    const NativePaymentContextProvider = tmp(10564).NativePaymentContextProvider;
    const tmp15 = <NativePaymentContextProvider skuIDs={first} activeSubscription={null}>{null}</NativePaymentContextProvider>;
    cResult[4] = tmp6;
    cResult[5] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  return tmp12;
}) : (() => {
  let Navigator;
  let closure_0;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  ({
    name: "RunAllFlows",
    options() {
      return { title: "Run All Payment Flows" };
    },
    component: BillingFlowsDefault.RunAllFlows
  });
  const NativePaymentContextProvider = require("NativePaymentContext").NativePaymentContextProvider;
  ({ Navigator, Screen } = closure_6);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
}));
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;