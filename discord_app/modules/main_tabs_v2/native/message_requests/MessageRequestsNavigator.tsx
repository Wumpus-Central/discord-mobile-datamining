// === Module 19740: MessageRequestsNavigator ===

// Module 19740 (MessageRequestsNavigator)
import nativeDefault from "native" /* 575 */;
import HeaderShared from "HeaderShared" /* 9051 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10908 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19622 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const NativeStackNavigator = fn(9128);
let closure_6 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5306);
let obj3 = { header: { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_7 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  _require = closure_7();
  importDefault = require("Navigator").useAccessibilityNativeStackOptions();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(8678).trackAppUIViewed(), []);
  const obj2 = { children: null };
  const obj3 = {
    screenOptions(navigation) {
      const obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_4(closure_1_0(dependencyMap[8]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation)
      };
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  const obj4 = { name: "root", options: null, getComponent: null };
  const obj5 = { title: null };
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_6);
  const intl = require("util").intl;
  obj5.title = intl.string(require("util").t.e7GWjQ);
  let merged = Object.assign(getNavigationModalPresentationDefault());
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(19741).default;
  };
  items = [closure_4(Screen, obj4), , ];
  const obj6 = { name: "spam", options: null, getComponent: null };
  const obj7 = { title: null };
  const intl2 = require("util").intl;
  obj7.title = intl2.string(require("util").t.ulKXHp);
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  obj6.options = obj7;
  obj6.getComponent = function getComponent() {
    return closure_0(19760).default;
  };
  items[1] = closure_4(closure_6.Screen, obj6);
  const obj8 = { name: "preview", options: null, getComponent: null };
  const obj9 = { title: null };
  const intl3 = require("util").intl;
  obj9.title = intl3.string(require("util").t.iilwGH);
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  obj8.options = obj9;
  obj8.getComponent = function getComponent() {
    return closure_0(19761).default;
  };
  items[2] = closure_4(closure_6.Screen, obj8);
  obj3.children = items;
  obj2.children = closure_5(Navigator, obj3);
  return closure_4(AppFrameContainerDefault, obj2);
};