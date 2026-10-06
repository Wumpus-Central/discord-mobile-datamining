// === Module 15588: OrbsFlowTestModal ===

// Module 15588 (OrbsFlowTestModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import LayerScope2 from "LayerScope" /* 6658 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10675 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15589 */;
import OrbCheckoutMenuDefault from "OrbCheckoutMenu" /* 15591 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7568 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function BalanceWidgetPillSection() {
  let balance;
  let closure_1;
  let first1;
  let items2;
  let items3;
  const tmp = closure_12();
  [balance, closure_1] = react.useState(1000);
  [first1, closure_3] = react.useState("1000");
  const items = [first1];
  const callback = react.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  const items1 = [balance];
  const callback1 = react.useCallback(() => {
    const parsed = parseInt(first1, 10);
    let tmp3 = !isNaN(parsed);
    isNaN(parsed);
    if (tmp3) {
      tmp3 = parsed >= 0;
    }
    if (tmp3) {
      closure_1(parsed);
    }
  }, items);
  const callback2 = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let paths;
    let obj = { balance, primaryButtonConfig: obj2, secondaryButtonConfig: obj3 };
    obj2 = {
      buttonText: intl.string(intl3.t.cpT0Cq),
      onButtonPress() {
        const obj = closure_1_1(paths[16]);
        obj.hideActionSheet();
      }
    };
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    intl = intl3.intl;
    obj3 = {
      buttonText: intl2.string(intl3.t.WAI6xu),
      onButtonPress() {
        const obj = closure_1_1(paths[16]);
        obj.hideActionSheet();
      }
    };
    intl2 = intl3.intl;
    openLazy(() => {
      const promise = balance(paths[18])(paths[17], paths.paths);
      return promise.then((result) => result.default);
    }, "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container, children: items2 };
  const Stack = balance(first1[15]).Stack;
  let obj2 = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" };
  items2 = [closure_9(balance(first1[13]).Text, obj2), closure_9(balance(first1[20]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), closure_9(balance(first1[21]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }), ];
  let obj3 = { style: tmp.balancePillContainer, children: items3 };
  items3 = [closure_9(balance(first1[22]).BalanceWidgetPill, { balance }), closure_9(balance(first1[23]).BalanceWidgetPillButton, { balance, onPress: callback2 })];
  items2[3] = closure_10(closure_8, obj3);
  return closure_10(Stack, obj);
}
let closure_3 = ["children"];
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = NativeStackView.createNativeStackNavigator();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityNativeStackOptions;
  let tmp3;
  let tmp4;
  let tmp9;
  let obj = accessibilityNativeStackOptions(576);
  const cResult = obj.c(5);
  let obj2 = accessibilityNativeStackOptions(6503);
  accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const fn = function n(navigation) {
      let obj2;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const obj = { title: children };
          const tmp = closure_1_5(children, closure_1_3);
          const GenericHeaderTitle = accessibilityNativeStackOptions(closure_1_2[9]).GenericHeaderTitle;
          const merged = Object.assign(tmp);
          return closure_1_9(GenericHeaderTitle, obj);
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
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      name: "OrbsFlowTest",
      options() {
          return { title: "Orbs Flow Test" };
        },
      component
    };
    const tmp8 = closure_9(closure_11.Screen, obj3);
    cResult[2] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj4 = { screenOptions: tmp3, children: tmp4 };
    const tmp12 = closure_9(closure_11.Navigator, obj4);
    cResult[3] = tmp3;
    cResult[4] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  let closure_0;
  let obj3;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions(navigation) {
      let obj2;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[9]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_9(GenericHeaderTitle, obj);
        },
        headerLeft: obj2.getRenderModalCloseImage(navigation),
        headerTitleAlign: "center"
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: closure_9(closure_11.Screen, obj3)
  };
  const Navigator = closure_11.Navigator;
  obj3 = {
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component
  };
  return closure_9(Navigator, obj2);
});
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, title: { marginBottom: 8 }, balancePillContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_12();
  if (cResult[0] !== tmp4.title) {
    const obj2 = { variant: "text-lg/semibold", style: tmp4.title, children: "Balance Widget Menu" };
    const tmp7 = React4(Text_Text.Text, obj2);
    cResult[0] = tmp4.title;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = React4(BalanceWidgetMenuDefault, {});
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp12;
    if (cResult[4] === tmp5) {
      tmp12 = cResult[5];
    }
    return tmp12;
  }
  const obj3 = { spacing: 16, style: tmp4.container, children: items };
  items = [tmp5, tmp8];
  const tmp13 = authStore(Stack_Stack.Stack, obj3);
  cResult[3] = tmp4.container;
  cResult[4] = tmp5;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  let items;
  const tmp = closure_12();
  const obj = { spacing: 16, style: tmp.container, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" };
  items[0] = React4(Text_Text.Text, obj2);
  items[1] = React4(BalanceWidgetMenuDefault, {});
  return authStore(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const component = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let obj4;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === insets.bottom) {
    if (cResult[2] === insets.left) {
      if (cResult[3] === insets.right) {
        let tmp7;
        let tmp10;
        let tmp9;
        let tmp8;
        if (cResult[4] === insets.top) {
          tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = React4(closure_13, {});
          const tmp15 = React4(BalanceWidgetPillSection, {});
          const tmp16 = React4(OrbCheckoutMenuDefault, {});
          cResult[6] = tmp13;
          cResult[7] = tmp15;
          cResult[8] = tmp16;
          tmp10 = tmp16;
          tmp9 = tmp15;
          tmp8 = tmp13;
        } else {
          tmp8 = cResult[6];
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.wrap) {
          let tmp17;
          if (cResult[10] === tmp7) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
        const obj3 = { children: authStore(metroImportDefault, obj4) };
        obj4 = { style: tmp4.wrap, contentContainerStyle: tmp7, children: items };
        items = [tmp8, tmp9, tmp10];
        const LayerScope = LayerScope2.LayerScope;
        const tmp21 = React4(LayerScope, obj3);
        cResult[9] = tmp4.wrap;
        cResult[10] = tmp7;
        cResult[11] = tmp21;
        tmp17 = tmp21;
      }
    }
  }
  const obj5 = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  cResult[1] = insets.bottom;
  cResult[2] = insets.left;
  cResult[3] = insets.right;
  cResult[4] = insets.top;
  cResult[5] = obj5;
  tmp7 = obj5;
}) : (() => {
  let items;
  let obj2;
  const tmp = closure_12();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { children: authStore(metroImportDefault, obj2) };
  obj2 = { style: tmp.wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: items };
  const LayerScope = LayerScope2.LayerScope;
  items = [React4(closure_13, {}), React4(BalanceWidgetPillSection, {}), React4(OrbCheckoutMenuDefault, {})];
  return React4(LayerScope, obj);
});
const memoResult = react.memo(tmp4);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default memoResult;