// discord_app/modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: null, header: null };
createNativeStackNavigator = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator[0] = createNativeStackNavigator;
createCacheKey = { borderBottomWidth: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator[1] = createCacheKey;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  let Navigator;
  let Screen;
  const tmp = createNativeStackNavigator();
  const require = tmp;
  let obj = require(5665) /* NavigationStack */;
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = React.useLayoutEffect(() => tmp(6843).trackAppUIViewed(), []);
  const rect = importDefault(1581)();
  obj = { style: items, children: null };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerStyle: tmp.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[9]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: null
      };
      obj[4] = tmp(outer1_2[9]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  const obj1 = { name: "root", options: null, getComponent: null };
  const obj2 = { title: null };
  ({ Navigator, Screen } = createNativeStackNavigator);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl.string(require(1236) /* getSystemLocale */.t.e7GWjQ);
  let merged = Object.assign(importDefault(9597)());
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return tmp(15818).default;
  };
  const items1 = [callback(Screen, obj1), , ];
  const obj3 = { name: "spam", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl2.string(require(1236) /* getSystemLocale */.t.ulKXHp);
  let merged1 = Object.assign(importDefault(9597)());
  obj3[1] = obj4;
  obj3[2] = function getComponent() {
    return tmp(15837).default;
  };
  items1[1] = callback(createNativeStackNavigator.Screen, obj3);
  const obj5 = { name: "preview", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj6[0] = intl3.string(require(1236) /* getSystemLocale */.t.iilwGH);
  const merged2 = Object.assign(importDefault(9597)());
  obj5[1] = obj6;
  obj5[2] = function getComponent() {
    return tmp(15838).default;
  };
  items1[2] = callback(createNativeStackNavigator.Screen, obj5);
  obj[1] = items1;
  obj[1] = callback2(Navigator, obj);
  return callback(View, obj);
};