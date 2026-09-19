// === Module 17210: FriendsNavigator ===

// Module 17210 (FriendsNavigator)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4466 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4609 */;
import HeaderShared from "HeaderShared" /* 8105 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8108 */;
import _modDef12847 from "module_12847" /* 12847 */;
import noop from "module_19" /* 19 */;

require = fn;
function RequestsSettingsModalButton(onPress) {
  const obj = { isModal: true, children: null };
  const obj2 = { source: _modDef12847, onPress: onPress.onPress, accessibilityLabel: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["3D5yo/"]);
  obj.children = hasOwnProperty(HeaderShared.HeaderIconButton, obj2);
  return hasOwnProperty(PressableNavigatorButtonWrapperDefault, obj);
}
function FriendsNavigator() {
  _require = closure_8();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7715).trackAppUIViewed(), []);
  closure_1 = require("Navigator").useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions(arg0) {
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        const presentation = params.presentation;
      }
      const obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_5(closure_1_0(dependencyMap[7]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: null,
        fullScreenGestureEnabled: null
      };
      if (navigation.getState().routes[0].key === route.key) {
        const params2 = route.params;
        let presentation1;
        if (params2 != null) {
          presentation1 = params2.presentation;
        }
        if ("card" !== presentation1) {
          let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        const params3 = route.params;
        let presentation2;
        if (params3 != null) {
          presentation2 = params3.presentation;
        }
        obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
        let merged = Object.assign(closure_1);
        return obj;
      }
      renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
    },
    children: null
  };
  const items = [
    closure_5(closure_7.Screen, {
      name: "root",
      options(navigation) {
        navigation = navigation.navigation;
        let obj = { title: null, headerRight: null };
        let intl = navigation(1115).intl;
        obj.title = intl.string(navigation(1115).t.TdEu5X);
        obj.headerRight = function headerRight(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          const intl = navigation(1115).intl;
          obj.label = intl.string(navigation(1115).t.zIJnA6);
          obj.onPress = function onPress() {
            return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
          };
          return closure_2_5(navigation(8105).HeaderTextButton, obj);
        };
        return obj;
      },
      getComponent() {
        return closure_0(17211).default;
      }
    }),
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,

  ];
  const obj4 = { name: "new-message", options: null, getComponent: null };
  const obj5 = { title: null };
  let intl = require("util").intl;
  obj5.title = intl.string(require("util").t.jD1qzM);
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(17217).default;
  };
  items[1] = closure_5(closure_7.Screen, obj4);
  const obj6 = { name: "gdm", options: null, getComponent: null };
  const obj7 = { title: null };
  const intl2 = require("util").intl;
  obj7.title = intl2.string(require("util").t["3hF1W4"]);
  obj6.options = obj7;
  obj6.getComponent = function getComponent() {
    return closure_0(17220).default;
  };
  items[2] = closure_5(closure_7.Screen, obj6);
  const obj8 = { name: "add-friend", options: null, getComponent: null };
  const obj9 = { title: null };
  const intl3 = require("util").intl;
  obj9.title = intl3.string(require("util").t.w5uwoI);
  obj8.options = obj9;
  obj8.getComponent = function getComponent() {
    return closure_0(17221).default;
  };
  items[3] = closure_5(closure_7.Screen, obj8);
  const obj10 = { name: "add-friends", options: null, getComponent: null };
  const obj11 = { title: null };
  const intl4 = require("util").intl;
  obj11.title = intl4.string(require("util").t.zIJnA6);
  obj10.options = obj11;
  obj10.getComponent = function getComponent() {
    return closure_0(17222).default;
  };
  items[4] = closure_5(closure_7.Screen, obj10);
  const obj12 = { name: "username-search", options: null, getComponent: null };
  const obj13 = { title: null };
  const intl5 = require("util").intl;
  obj13.title = intl5.string(require("util").t.QzVsOs);
  obj12.options = obj13;
  obj12.getComponent = function getComponent() {
    return closure_0(17229).default;
  };
  items[5] = closure_5(closure_7.Screen, obj12);
  const obj14 = { name: "suggested-friends", options: null, getComponent: null };
  const obj15 = { title: null };
  const intl6 = require("util").intl;
  obj15.title = intl6.string(require("util").t["1uAmCw"]);
  obj14.options = obj15;
  obj14.getComponent = function getComponent() {
    return closure_0(17230).default;
  };
  items[6] = closure_5(closure_7.Screen, obj14);
  const obj16 = { name: "requests-settings", options: null, getComponent: null };
  const obj17 = { title: null };
  const intl7 = require("util").intl;
  obj17.title = intl7.string(require("util").t.XT4hVl);
  obj16.options = obj17;
  obj16.getComponent = function getComponent() {
    return closure_0(17231).default;
  };
  items[7] = closure_5(closure_7.Screen, obj16);
  items[8] = closure_5(closure_7.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerRight: null };
      const intl = navigation(1115).intl;
      obj.title = intl.string(navigation(1115).t.fyA115);
      obj.headerRight = function headerRight() {
        return closure_2_5(RequestsSettingsModalButton, {
          onPress() {
            return navigation.navigate("requests-settings");
          }
        });
      };
      return obj;
    },
    getComponent() {
      return closure_0(17233).default;
    }
  });
  const obj19 = { name: "spam-requests", options: null, getComponent: null };
  const obj20 = { title: null };
  const intl8 = require("util").intl;
  obj20.title = intl8.string(require("util").t.oHVeHc);
  obj19.options = obj20;
  obj19.getComponent = function getComponent() {
    return closure_0(17236).default;
  };
  items[9] = closure_5(closure_7.Screen, obj19);
  const obj21 = { name: "ignored-user-requests", options: null, getComponent: null };
  const obj22 = { title: null };
  const intl9 = require("util").intl;
  obj22.title = intl9.string(require("util").t.tFY5Zb);
  obj21.options = obj22;
  obj21.getComponent = function getComponent() {
    return closure_0(17237).default;
  };
  items[10] = closure_5(closure_7.Screen, obj21);
  obj2.children = items;
  return closure_6(closure_7.Navigator, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(8156);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4756);
let obj3 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.header = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  const tmp = useColorThemeBackgroundDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp2 = useSafeAreaInsetsDefault();
  const obj = { gradient: tmp, children: null };
  const obj2 = { style: null, children: hasOwnProperty(FriendsNavigator, {}) };
  const items = [closure_8().container, { paddingLeft: left, paddingRight: right }];
  obj2.style = items;
  obj.children = hasOwnProperty(View, obj2);
  return hasOwnProperty(native.ThemeContextProvider, obj);
};