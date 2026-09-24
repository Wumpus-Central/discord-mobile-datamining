// discord_app/modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HeaderShared from "../shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../utils/getNavigationModalPresentation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(8245);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4829);
let obj3 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.header = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  shadowColor: "transparent",
};
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  const tmp = closure_8();
  _require = tmp;
  importDefault = require("Navigator").useAccessibilityNativeStackOptions();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7805).trackAppUIViewed(), []);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items;
  const obj3 = {
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
  const obj4 = { name: "root", options: null, getComponent: null };
  const obj5 = { title: null };
  ({ Navigator, Screen } = closure_7);
  const intl = require("util").intl;
  obj5.title = intl.string(require("util").t.e7GWjQ);
  let merged = Object.assign(getNavigationModalPresentationDefault());
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(17447).default;
  };
  const items1 = [closure_5(Screen, obj4), ,];
  const obj6 = { name: "spam", options: null, getComponent: null };
  const obj7 = { title: null };
  const intl2 = require("util").intl;
  obj7.title = intl2.string(require("util").t.ulKXHp);
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  obj6.options = obj7;
  obj6.getComponent = function getComponent() {
    return closure_0(17466).default;
  };
  items1[1] = closure_5(closure_7.Screen, obj6);
  const obj8 = { name: "preview", options: null, getComponent: null };
  const obj9 = { title: null };
  const intl3 = require("util").intl;
  obj9.title = intl3.string(require("util").t.iilwGH);
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  obj8.options = obj9;
  obj8.getComponent = function getComponent() {
    return closure_0(17467).default;
  };
  items1[2] = closure_5(closure_7.Screen, obj8);
  obj3.children = items1;
  obj2.children = closure_6(Navigator, obj3);
  return closure_5(View, obj2);
}
