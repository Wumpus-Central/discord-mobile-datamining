// === Module 16746: FriendsNavigator ===

// Module 16746 (FriendsNavigator)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import native from "native" /* 4271 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4413 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7866 */;
import _modDef12596 from "module_12596" /* 12596 */;
import noop from "module_19" /* 19 */;

require = fn;
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true, children: null };
  obj = { source: _modDef12596, onPress: onPress.onPress, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["3D5yo/"]);
  obj.children = hasOwnProperty(HeaderShared.HeaderIconButton, obj);
  return hasOwnProperty(PressableNavigatorButtonWrapperDefault, obj);
}
function FriendsNavigator() {
  _require = closure_8();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7475).trackAppUIViewed(), []);
  let obj = require("Navigator");
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(arg0) {
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        let presentation = params.presentation;
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
        presentation = undefined;
        if (params2 != null) {
          presentation = params2.presentation;
        }
        if ("card" !== presentation) {
          let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        const params3 = route.params;
        let presentation1;
        if (params3 != null) {
          presentation1 = params3.presentation;
        }
        obj.fullScreenGestureEnabled = "card" === presentation1 || "card" === presentation;
        let merged = Object.assign(closure_1);
        return obj;
      }
      renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
    },
    children: null
  };
  obj = {
    name: "root",
    options(navigation) {
      navigation = navigation.navigation;
      let obj = { title: null, headerRight: null };
      let intl = navigation(1114).intl;
      obj.title = intl.string(navigation(1114).t.TdEu5X);
      obj.headerRight = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(1114).intl;
        obj.label = intl.string(navigation(1114).t.zIJnA6);
        obj.onPress = function onPress() {
          return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return closure_2_5(navigation(7863).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return closure_0(16747).default;
    }
  };
  const items = [closure_5(closure_7.Screen, obj), , , , , , , , , , ];
  const obj1 = { name: "new-message", options: null, getComponent: null };
  const obj2 = { title: null };
  let intl = require("util").intl;
  obj2.title = intl.string(require("util").t.jD1qzM);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return closure_0(16753).default;
  };
  items[1] = closure_5(closure_7.Screen, obj1);
  let obj3 = { name: "gdm", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = require("util").intl;
  obj4.title = intl2.string(require("util").t["3hF1W4"]);
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return closure_0(16765).default;
  };
  items[2] = closure_5(closure_7.Screen, obj3);
  const obj5 = { name: "add-friend", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = require("util").intl;
  obj6.title = intl3.string(require("util").t.w5uwoI);
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return closure_0(16766).default;
  };
  items[3] = closure_5(closure_7.Screen, obj5);
  const obj7 = { name: "add-friends", options: null, getComponent: null };
  const obj8 = { title: null };
  const intl4 = require("util").intl;
  obj8.title = intl4.string(require("util").t.zIJnA6);
  obj7.options = obj8;
  obj7.getComponent = function getComponent() {
    return closure_0(16767).default;
  };
  items[4] = closure_5(closure_7.Screen, obj7);
  const obj9 = { name: "username-search", options: null, getComponent: null };
  const obj10 = { title: null };
  const intl5 = require("util").intl;
  obj10.title = intl5.string(require("util").t.QzVsOs);
  obj9.options = obj10;
  obj9.getComponent = function getComponent() {
    return closure_0(16773).default;
  };
  items[5] = closure_5(closure_7.Screen, obj9);
  const obj11 = { name: "suggested-friends", options: null, getComponent: null };
  const obj12 = { title: null };
  const intl6 = require("util").intl;
  obj12.title = intl6.string(require("util").t["1uAmCw"]);
  obj11.options = obj12;
  obj11.getComponent = function getComponent() {
    return closure_0(16774).default;
  };
  items[6] = closure_5(closure_7.Screen, obj11);
  const obj13 = { name: "requests-settings", options: null, getComponent: null };
  const obj14 = { title: null };
  const intl7 = require("util").intl;
  obj14.title = intl7.string(require("util").t.XT4hVl);
  obj13.options = obj14;
  obj13.getComponent = function getComponent() {
    return closure_0(16775).default;
  };
  items[7] = closure_5(closure_7.Screen, obj13);
  items[8] = closure_5(closure_7.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerRight: null };
      const intl = navigation(1114).intl;
      obj.title = intl.string(navigation(1114).t.fyA115);
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
      return closure_0(16777).default;
    }
  });
  const obj16 = { name: "spam-requests", options: null, getComponent: null };
  const obj17 = { title: null };
  const intl8 = require("util").intl;
  obj17.title = intl8.string(require("util").t.oHVeHc);
  obj16.options = obj17;
  obj16.getComponent = function getComponent() {
    return closure_0(16780).default;
  };
  items[9] = closure_5(closure_7.Screen, obj16);
  const obj18 = { name: "ignored-user-requests", options: null, getComponent: null };
  const obj19 = { title: null };
  const intl9 = require("util").intl;
  obj19.title = intl9.string(require("util").t.tFY5Zb);
  obj18.options = obj19;
  obj18.getComponent = function getComponent() {
    return closure_0(16781).default;
  };
  items[10] = closure_5(closure_7.Screen, obj18);
  obj.children = items;
  return closure_6(closure_7.Navigator, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
fn(4560);
NativeStackNavigator = { container: null, header: null };
NativeStackNavigator = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
NativeStackNavigator.container = NativeStackNavigator;
const createStyles = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
NativeStackNavigator.header = createStyles;
let closure_8 = createStyles.createStyles(NativeStackNavigator);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  const tmp = useColorThemeBackgroundDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp2 = useSafeAreaInsetsDefault();
  let obj = { gradient: tmp, children: null };
  obj = { style: null, children: hasOwnProperty(FriendsNavigator, {}) };
  const items = [closure_8().container, { paddingLeft: left, paddingRight: right }];
  obj.style = items;
  obj.children = hasOwnProperty(View, obj);
  return hasOwnProperty(native.ThemeContextProvider, obj);
};