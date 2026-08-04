import _slicedToArray from "_slicedToArray";
import importAllResult from "BalanceWidgetPill";
import get_ActivityIndicator from "TextInput";
import jsxProd from "useSafeAreaInsetsKeyboardAware";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function BalanceWidgetMenuSection() {
  const tmp = callback4();
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" };
  const items = [callback2(require(4281) /* Text */.Text, obj), callback2(importDefault(14913), {})];
  obj[2] = items;
  return callback3(require(4693) /* Stack */.Stack, obj);
}
function BalanceWidgetPillSection() {
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(1000), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const tmp4 = callback(importAllResult.useState("1000"), 2);
  const first1 = tmp4[0];
  callback = tmp4[1];
  const items = [first1];
  callback = importAllResult.useCallback((arg0) => {
    callback2(arg0);
  }, []);
  const items1 = [first];
  const callback1 = importAllResult.useCallback(() => {
    const parsed = parseInt(first1, 10);
    const isNaNResult = isNaN(parsed);
    let tmp3 = !isNaNResult;
    if (!isNaNResult) {
      tmp3 = parsed >= 0;
    }
    if (tmp3) {
      callback(parsed);
    }
  }, items);
  const callback2 = importAllResult.useCallback(() => {
    let obj = callback(first1[13]);
    obj = { balance: first, primaryButtonConfig: null, secondaryButtonConfig: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = first(first1[16]).intl;
    obj[0] = intl.string(first(first1[16]).t.cpT0Cq);
    obj[1] = function onButtonPress() {
      callback2(paths[13]).hideActionSheet();
    };
    obj[1] = obj;
    const obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = first(first1[16]).intl;
    obj1[0] = intl2.string(first(first1[16]).t.WAI6xu);
    obj1[1] = function onButtonPress() {
      callback2(paths[13]).hideActionSheet();
    };
    obj[2] = obj1;
    obj.openLazy(() => callback(paths[15])(paths[14], paths.paths).then((arg0) => arg0.default), "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" };
  const items2 = [callback2(first(first1[11]).Text, obj), callback2(first(first1[17]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), callback2(first(first1[18]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }), ];
  obj = { style: tmp.balancePillContainer, children: null };
  const items3 = [callback2(first(first1[19]).BalanceWidgetPill, { balance: first }), callback2(first(first1[20]).BalanceWidgetPillButton, { balance: first, onPress: callback2 })];
  obj[1] = items3;
  items2[3] = callback3(closure_6, obj);
  obj[2] = items2;
  return callback3(first(first1[10]).Stack, obj);
}
function OrbsFlowTest() {
  const insets = importDefault(5310)({ includeKeyboardHeight: true }).insets;
  let obj = { children: null };
  obj = { style: callback4().wrap, contentContainerStyle: obj, children: null };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  const items = [callback2(BalanceWidgetMenuSection, {}), callback2(BalanceWidgetPillSection, {}), callback2(importDefault(14915), {})];
  obj[2] = items;
  obj[0] = callback3(closure_5, obj);
  return callback2(require(5597) /* Layer */.LayerScope, obj);
}
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = { wrap: null, container: null, title: null, balancePillContainer: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createNativeStackNavigator = { padding: require("Themes").space.PX_16 };
obj[1] = createNativeStackNavigator;
obj[2] = { marginBottom: 8 };
createCacheKey = { flexDirection: "row", justifyContent: "center", marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
obj[3] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function OrbsFlowTestModal() {
  let obj = _require(5665);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[6]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[6]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[7])());
      return obj;
    },
    children: callback2(createNativeStackNavigator.Screen, obj)
  };
  obj = {
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component: OrbsFlowTest
  };
  return callback2(createNativeStackNavigator.Navigator, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default memoResult;