// === Module 15585: PaymentFlowTestModal ===

// Module 15585 (PaymentFlowTestModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10675 */;
import PaymentFlowTestDefault from "PaymentFlowTest" /* 15586 */;
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
  let tmp10;
  let tmp4;
  let tmp5;
  let obj = accessibilityNativeStackOptions(576);
  const cResult = obj.c(5);
  let obj2 = accessibilityNativeStackOptions(6503);
  accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const fn = function l(navigation) {
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
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    Screen = Screen.Screen;
    const tmp9 = <Screen name="PaymentFlowTest" options={function options() {
      return { title: "Payment Flow Test" };
    }} component={PaymentFlowTestDefault} />;
    cResult[2] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const tmp13 = <closure_6.Navigator screenOptions={tmp4}>{tmp5}</closure_6.Navigator>;
    cResult[3] = tmp4;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (() => {
  let Navigator;
  let closure_0;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  ({ Navigator, Screen } = closure_6);
  ({
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: PaymentFlowTestDefault
  });
  return <Navigator screenOptions={function screenOptions(navigation) {
    let obj2;
    let obj = {
      headerTitle(children) {
        children = children.children;
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const obj = { title: children };
        const GenericHeaderTitle = closure_1_0(closure_1_2[7]).GenericHeaderTitle;
        const merged1 = Object.assign(merged);
        return closure_1_5(GenericHeaderTitle, obj);
      },
      headerLeft: obj2.getRenderModalCloseImage(navigation),
      headerTitleAlign: "center"
    };
    navigation = navigation.navigation;
    obj2 = HeaderShared;
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
}));
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default memoResult;