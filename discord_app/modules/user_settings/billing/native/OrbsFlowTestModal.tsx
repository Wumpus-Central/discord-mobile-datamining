// === Module 15570: OrbsFlowTestModal ===

// Module 15570 (OrbsFlowTestModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import LayerScope from "LayerScope" /* 6651 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10662 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15571 */;
import OrbCheckoutMenuDefault from "OrbCheckoutMenu" /* 15573 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
function BalanceWidgetPillSection() {
  const tmp = closure_12();
  [balance, closure_1] = noop.useState(1000);
  [first1, closure_3] = noop.useState("1000");
  const items = [first1];
  const callback = noop.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  const items1 = [balance];
  const callback1 = noop.useCallback(() => {
    const parsed = parseInt(first1, 10);
    const isNaNResult = isNaN(parsed);
    let tmp3 = !isNaNResult;
    if (!isNaNResult) {
      tmp3 = parsed >= 0;
    }
    if (tmp3) {
      closure_1(parsed);
    }
  }, items);
  const callback2 = noop.useCallback(() => {
    const obj2 = { balance, primaryButtonConfig: null, secondaryButtonConfig: null };
    const obj3 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj3.buttonText = intl.string(util.t.cpT0Cq);
    obj3.onButtonPress = function onButtonPress() {
      closure_1_1(paths[16]).hideActionSheet();
    };
    obj2.primaryButtonConfig = obj3;
    const obj4 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj4.buttonText = intl2.string(util.t.WAI6xu);
    obj4.onButtonPress = function onButtonPress() {
      closure_1_1(paths[16]).hideActionSheet();
    };
    obj2.secondaryButtonConfig = obj4;
    ActionSheetActionCreatorsDefault.openLazy(() => balance(paths[18])(paths[17], paths.paths).then((result) => result.default), "OrbsFlowTestModalBalanceWidgetMenuKey", obj2);
  }, items1);
  const obj = { spacing: 16, style: tmp.container, children: null };
  const items2 = [closure_9(balance(first1[13]).Text, { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" }), closure_9(balance(first1[20]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), closure_9(balance(first1[21]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }), ];
  let obj3 = { style: tmp.balancePillContainer, children: null };
  const items3 = [closure_9(balance(first1[22]).BalanceWidgetPill, { balance }), closure_9(balance(first1[23]).BalanceWidgetPillButton, { balance, onPress: callback2 })];
  obj3.children = items3;
  items2[3] = closure_10(closure_8, obj3);
  obj.children = items2;
  return closure_10(balance(first1[15]).Stack, obj);
}
let closure_3 = ["children"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const NativeStackNavigator = fn(7556);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
let ReactCompilerGating = fn(558);
const createStyles = fn(4890);
let obj = { wrap: null, container: null, title: null, balancePillContainer: null };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = accessibilityNativeStackOptions(576).c(5);
  let obj = accessibilityNativeStackOptions(576);
  accessibilityNativeStackOptions = accessibilityNativeStackOptions(6496).useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const fn = function n(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(closure_1_5(children, closure_1_3));
          return closure_1_9(accessibilityNativeStackOptions(closure_1_2[9]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(accessibilityNativeStackOptions);
      const merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    };
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = fn;
    let tmp3 = fn;
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
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj4 = { screenOptions: tmp3, children: tmp4 };
    const tmp12 = closure_9(closure_11.Navigator, obj4);
    cResult[3] = tmp3;
    cResult[4] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_9(closure_1_0(closure_1_2[9]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: closure_9(closure_11.Screen, {
      name: "OrbsFlowTest",
      options() {
        return { title: "Orbs Flow Test" };
      },
      component
    })
  };
  return closure_9(closure_11.Navigator, obj2);
});
obj.wrap = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = { padding: nativeDefault.space.PX_16 };
obj.title = { marginBottom: 8 };
const obj6 = { padding: nativeDefault.space.PX_16 };
obj.balancePillContainer = { flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_12();
  if (cResult[0] !== tmp4.title) {
    const obj2 = { variant: "text-lg/semibold", style: tmp4.title, children: "Balance Widget Menu" };
    const tmp7 = options(Text_Text.Text, obj2);
    cResult[0] = tmp4.title;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = options(BalanceWidgetMenuDefault, {});
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp5) {
      let tmp12 = cResult[5];
    }
    return tmp12;
  }
  const obj3 = { spacing: 16, style: tmp4.container, children: null };
  const items = [tmp5, tmp8];
  obj3.children = items;
  const tmp13 = v65535(Stack_Stack.Stack, obj3);
  cResult[3] = tmp4.container;
  cResult[4] = tmp5;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  const tmp = closure_12();
  const obj = { spacing: 16, style: tmp.container, children: null };
  const items = [options(Text_Text.Text, { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" }), options(BalanceWidgetMenuDefault, {})];
  obj.children = items;
  return v65535(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
const component = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === insets.bottom) {
    if (cResult[2] === insets.left) {
      if (cResult[3] === insets.right) {
        if (cResult[4] === insets.top) {
          let tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = options(closure_13, {});
          const tmp15 = options(BalanceWidgetPillSection, {});
          const tmp16 = options(OrbCheckoutMenuDefault, {});
          cResult[6] = tmp13;
          cResult[7] = tmp15;
          cResult[8] = tmp16;
          let tmp10 = tmp16;
          let tmp9 = tmp15;
          let tmp8 = tmp13;
        } else {
          tmp8 = cResult[6];
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.wrap) {
          if (cResult[10] === tmp7) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
        const obj3 = { children: null };
        const obj4 = { style: tmp4.wrap, contentContainerStyle: tmp7, children: null };
        const items = [tmp8, tmp9, tmp10];
        obj4.children = items;
        obj3.children = v65535(React5, obj4);
        const tmp21 = options(LayerScope.LayerScope, obj3);
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
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { children: null };
  const obj2 = { style: closure_12().wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: null };
  const items = [options(closure_13, {}), options(BalanceWidgetPillSection, {}), options(OrbCheckoutMenuDefault, {})];
  obj2.children = items;
  obj.children = v65535(React5, obj2);
  return options(LayerScope.LayerScope, obj);
});
const obj7 = { flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default noop.memo(tmp4);