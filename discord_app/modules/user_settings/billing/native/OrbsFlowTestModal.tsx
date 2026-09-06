// === Module 15694: OrbsFlowTestModal ===

// Module 15694 (OrbsFlowTestModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import LayerScope from "LayerScope" /* 7156 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10925 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15695 */;
import OrbCheckoutMenuDefault from "OrbCheckoutMenu" /* 15697 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BalanceWidgetMenuSection() {
  const tmp = closure_10();
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" };
  const items = [React5(Text_Text.Text, obj), React5(BalanceWidgetMenuDefault, {})];
  obj.children = items;
  return React6(Stack_Stack.Stack, obj);
}
function BalanceWidgetPillSection() {
  const tmp = closure_10();
  const tmp2 = _slicedToArray(noop.useState(1000), 2);
  const balance = tmp2[0];
  closure_1 = tmp2[1];
  const tmp4 = _slicedToArray(noop.useState("1000"), 2);
  const first1 = tmp4[0];
  _slicedToArray = tmp4[1];
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
    let obj = { balance, primaryButtonConfig: null, secondaryButtonConfig: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj.buttonText = intl.string(util.t.cpT0Cq);
    obj.onButtonPress = function onButtonPress() {
      closure_1_1(paths[13]).hideActionSheet();
    };
    obj.primaryButtonConfig = obj;
    const obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj1.buttonText = intl2.string(util.t.WAI6xu);
    obj1.onButtonPress = function onButtonPress() {
      closure_1_1(paths[13]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.openLazy(() => balance(paths[15])(paths[14], paths.paths).then((result) => result.default), "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" };
  const items2 = [closure_7(balance(first1[11]).Text, obj), closure_7(balance(first1[17]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), closure_7(balance(first1[18]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }), ];
  obj = { style: tmp.balancePillContainer, children: null };
  const items3 = [closure_7(balance(first1[19]).BalanceWidgetPill, { balance }), closure_7(balance(first1[20]).BalanceWidgetPillButton, { balance, onPress: callback2 })];
  obj.children = items3;
  items2[3] = closure_8(closure_6, obj);
  obj.children = items2;
  return closure_8(balance(first1[10]).Stack, obj);
}
function OrbsFlowTest() {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = { children: null };
  obj = { style: closure_10().wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: null };
  const items = [React5(BalanceWidgetMenuSection, {}), React5(BalanceWidgetPillSection, {}), React5(OrbCheckoutMenuDefault, {})];
  obj.children = items;
  obj.children = React6(hasOwnProperty, obj);
  return React5(LayerScope.LayerScope, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
fn(4560);
let obj = { wrap: null, container: null, title: null, balancePillContainer: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
NativeStackNavigator = { padding: nativeDefault.space.PX_16 };
obj.container = NativeStackNavigator;
obj.title = { marginBottom: 8 };
const createStyles = { flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.balancePillContainer = createStyles;
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default noop.memo(function OrbsFlowTestModal() {
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_7(closure_1_0(closure_1_2[6]).GenericHeaderTitle, { title: children.children });
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
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component: OrbsFlowTest
  };
  obj.children = closure_7(closure_9.Screen, obj);
  return closure_7(closure_9.Navigator, obj);
});