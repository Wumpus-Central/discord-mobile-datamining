// discord_app/modules/user_settings/billing/native/OrbsFlowTestModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import LayerScope from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import BalanceWidgetMenuDefault from "../../../virtual_currency/native/BalanceWidgetMenu.tsx";
import OrbCheckoutMenuDefault from "../../../virtual_currency/native/OrbCheckoutMenu.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function BalanceWidgetMenuSection() {
  const tmp = closure_10();
  const obj = { spacing: 16, style: tmp.container, children: null };
  const items = [
    React5(Text_Text.Text, { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" }),
    React5(BalanceWidgetMenuDefault, {}),
  ];
  obj.children = items;
  return React6(Stack_Stack.Stack, obj);
}
function BalanceWidgetPillSection() {
  const tmp = closure_10();
  [balance, closure_1] = noop.useState(1000);
  [first1, _slicedToArray] = noop.useState("1000");
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
      closure_1_1(paths[13]).hideActionSheet();
    };
    obj2.primaryButtonConfig = obj3;
    const obj4 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj4.buttonText = intl2.string(util.t.WAI6xu);
    obj4.onButtonPress = function onButtonPress() {
      closure_1_1(paths[13]).hideActionSheet();
    };
    obj2.secondaryButtonConfig = obj4;
    ActionSheetActionCreatorsDefault.openLazy(
      () => balance(paths[15])(paths[14], paths.paths).then((result) => result.default),
      "OrbsFlowTestModalBalanceWidgetMenuKey",
      obj2,
    );
  }, items1);
  const obj = { spacing: 16, style: tmp.container, children: null };
  const items2 = [
    closure_7(balance(first1[11]).Text, {
      variant: "text-lg/semibold",
      style: tmp.title,
      children: "Balance Widget Pill",
    }),
    closure_7(balance(first1[17]).TextInput, {
      value: first1,
      onChange: callback,
      placeholder: "Enter balance amount",
      keyboardType: "numeric",
    }),
    closure_7(balance(first1[18]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }),
  ];
  let obj3 = { style: tmp.balancePillContainer, children: null };
  const items3 = [
    closure_7(balance(first1[19]).BalanceWidgetPill, { balance }),
    closure_7(balance(first1[20]).BalanceWidgetPillButton, { balance, onPress: callback2 }),
  ];
  obj3.children = items3;
  items2[3] = closure_8(closure_6, obj3);
  obj.children = items2;
  return closure_8(balance(first1[10]).Stack, obj);
}
function OrbsFlowTest() {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { children: null };
  const obj2 = {
    style: closure_10().wrap,
    contentContainerStyle: {
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    children: null,
  };
  const items = [
    React5(BalanceWidgetMenuSection, {}),
    React5(BalanceWidgetPillSection, {}),
    React5(OrbCheckoutMenuDefault, {}),
  ];
  obj2.children = items;
  obj.children = React6(hasOwnProperty, obj2);
  return React5(LayerScope.LayerScope, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const NativeStackNavigator = fn(8157);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4756);
let obj = {
  wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  container: null,
  title: null,
  balancePillContainer: null,
};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = { padding: nativeDefault.space.PX_16 };
obj.title = { marginBottom: 8 };
const obj5 = { padding: nativeDefault.space.PX_16 };
obj.balancePillContainer = {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let closure_10 = createStyles.createStyles(obj);
const obj6 = {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default noop.memo(function OrbsFlowTestModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_7(closure_1_0(closure_1_2[6]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center",
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: closure_7(closure_9.Screen, {
      name: "OrbsFlowTest",
      options() {
        return { title: "Orbs Flow Test" };
      },
      component: OrbsFlowTest,
    }),
  };
  return closure_7(closure_9.Navigator, obj2);
});
