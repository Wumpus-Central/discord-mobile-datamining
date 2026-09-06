// discord_app/modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HeaderShared from "../shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../utils/getNavigationModalPresentation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
fn(4560);
NativeStackNavigator = { container: null, header: null };
NativeStackNavigator = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
NativeStackNavigator.container = NativeStackNavigator;
const createStyles = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  shadowColor: "transparent",
};
NativeStackNavigator.header = createStyles;
let closure_8 = createStyles.createStyles(NativeStackNavigator);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7475).trackAppUIViewed(), []);
  const rect = useSafeAreaInsetsDefault();
  obj = { style: null, children: null };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj.style = items;
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_5(closure_1_0(dependencyMap[9]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      };
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null,
  };
  const obj1 = { name: "root", options: null, getComponent: null };
  const obj2 = { title: null };
  ({ Navigator, Screen } = closure_7);
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.e7GWjQ);
  let merged = Object.assign(getNavigationModalPresentationDefault());
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return closure_0(16874).default;
  };
  const items1 = [closure_5(Screen, obj1), ,];
  const obj3 = { name: "spam", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = require("util").intl;
  obj4.title = intl2.string(require("util").t.ulKXHp);
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return closure_0(16893).default;
  };
  items1[1] = closure_5(closure_7.Screen, obj3);
  const obj5 = { name: "preview", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = require("util").intl;
  obj6.title = intl3.string(require("util").t.iilwGH);
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return closure_0(16894).default;
  };
  items1[2] = closure_5(closure_7.Screen, obj5);
  obj.children = items1;
  obj.children = closure_6(Navigator, obj);
  return closure_5(View, obj);
}
