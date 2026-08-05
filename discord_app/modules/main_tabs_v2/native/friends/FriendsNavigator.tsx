// discord_app/modules/main_tabs_v2/native/friends/FriendsNavigator.tsx
import FriendRequestsSettingsScreen from "FriendRequestsSettingsScreen";
import { View } from "UsernameSearchScreen";
import jsxProd from "SpamRequestsScreen";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true, children: null };
  obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault(11867);
  obj[1] = onPress.onPress;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["3D5yo/"]);
  obj[1] = callback(require(8193) /* GenericHeaderTitle */.HeaderIconButton, obj);
  return callback(importDefault(8196), obj);
}
function FriendsNavigator() {
  const _require = createNativeStackNavigator();
  const layoutEffect = React.useLayoutEffect(() => lib(6843).trackAppUIViewed(), []);
  let obj = _require(5665);
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(arg0) {
      let navigation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        let presentation = params.presentation;
      }
      const obj = {
        headerStyle: lib.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[7]).GenericHeaderTitle, { title: children.children });
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
          let renderModalCloseImage = lib(outer1_2[7]).getRenderModalCloseImage(navigation);
          const obj3 = lib(outer1_2[7]);
        }
        obj[4] = renderModalCloseImage;
        const params3 = route.params;
        let presentation1;
        if (params3 != null) {
          presentation1 = params3.presentation;
        }
        obj[5] = "card" === presentation1 || "card" === presentation;
        let merged = Object.assign(closure_1);
        return obj;
      }
      renderModalCloseImage = lib(outer1_2[7]).getRenderModalBackImage(navigation);
    },
    children: null
  };
  obj = {
    name: "root",
    options(navigation) {
      navigation = navigation.navigation;
      let obj = { title: null, headerRight: null };
      let intl = navigation(1236).intl;
      obj[0] = intl.string(navigation(1236).t.TdEu5X);
      obj[1] = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(outer1_2[9]).intl;
        obj.label = intl.string(navigation(outer1_2[9]).t.zIJnA6);
        obj.onPress = function onPress() {
          return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return outer1_5(navigation(outer1_2[7]).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return lib(15696).default;
    }
  };
  const items = [callback(createNativeStackNavigator.Screen, obj), , , , , , , , , , ];
  const obj1 = { name: "new-message", options: null, getComponent: null };
  const obj2 = { title: null };
  let intl = _require(1236).intl;
  obj2[0] = intl.string(_require(1236).t.jD1qzM);
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return lib(15702).default;
  };
  items[1] = callback(createNativeStackNavigator.Screen, obj1);
  let obj3 = { name: "gdm", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = _require(1236).intl;
  obj4[0] = intl2.string(_require(1236).t["3hF1W4"]);
  obj3[1] = obj4;
  obj3[2] = function getComponent() {
    return lib(15714).default;
  };
  items[2] = callback(createNativeStackNavigator.Screen, obj3);
  const obj5 = { name: "add-friend", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = _require(1236).intl;
  obj6[0] = intl3.string(_require(1236).t.w5uwoI);
  obj5[1] = obj6;
  obj5[2] = function getComponent() {
    return lib(15715).default;
  };
  items[3] = callback(createNativeStackNavigator.Screen, obj5);
  const obj7 = { name: "add-friends", options: null, getComponent: null };
  const obj8 = { title: null };
  const intl4 = _require(1236).intl;
  obj8[0] = intl4.string(_require(1236).t.zIJnA6);
  obj7[1] = obj8;
  obj7[2] = function getComponent() {
    return lib(15716).default;
  };
  items[4] = callback(createNativeStackNavigator.Screen, obj7);
  const obj9 = { name: "username-search", options: null, getComponent: null };
  const obj10 = { title: null };
  const intl5 = _require(1236).intl;
  obj10[0] = intl5.string(_require(1236).t.QzVsOs);
  obj9[1] = obj10;
  obj9[2] = function getComponent() {
    return lib(15722).default;
  };
  items[5] = callback(createNativeStackNavigator.Screen, obj9);
  const obj11 = { name: "suggested-friends", options: null, getComponent: null };
  const obj12 = { title: null };
  const intl6 = _require(1236).intl;
  obj12[0] = intl6.string(_require(1236).t["1uAmCw"]);
  obj11[1] = obj12;
  obj11[2] = function getComponent() {
    return lib(15723).default;
  };
  items[6] = callback(createNativeStackNavigator.Screen, obj11);
  const obj13 = { name: "requests-settings", options: null, getComponent: null };
  const obj14 = { title: null };
  const intl7 = _require(1236).intl;
  obj14[0] = intl7.string(_require(1236).t.XT4hVl);
  obj13[1] = obj14;
  obj13[2] = function getComponent() {
    return lib(15724).default;
  };
  items[7] = callback(createNativeStackNavigator.Screen, obj13);
  items[8] = callback(createNativeStackNavigator.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerRight: null };
      const intl = navigation(1236).intl;
      obj[0] = intl.string(navigation(1236).t.fyA115);
      obj[1] = function headerRight() {
        return outer1_5(outer1_9, {
          onPress() {
            return navigation.navigate("requests-settings");
          }
        });
      };
      return obj;
    },
    getComponent() {
      return lib(15726).default;
    }
  });
  const obj16 = { name: "spam-requests", options: null, getComponent: null };
  const obj17 = { title: null };
  const intl8 = _require(1236).intl;
  obj17[0] = intl8.string(_require(1236).t.oHVeHc);
  obj16[1] = obj17;
  obj16[2] = function getComponent() {
    return lib(15729).default;
  };
  items[9] = callback(createNativeStackNavigator.Screen, obj16);
  const obj18 = { name: "ignored-user-requests", options: null, getComponent: null };
  const obj19 = { title: null };
  const intl9 = _require(1236).intl;
  obj19[0] = intl9.string(_require(1236).t.tFY5Zb);
  obj18[1] = obj19;
  obj18[2] = function getComponent() {
    return lib(15730).default;
  };
  items[10] = callback(createNativeStackNavigator.Screen, obj18);
  obj[1] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: null, header: null };
createNativeStackNavigator = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator[0] = createNativeStackNavigator;
createCacheKey = { borderBottomWidth: 0, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
createNativeStackNavigator[1] = createCacheKey;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  let left;
  let right;
  const tmp = importDefault(4132)();
  ({ left, right } = importDefault(1581)());
  const tmp2 = importDefault(1581)();
  let obj = { gradient: tmp, children: null };
  obj = { style: items, children: null };
  items = [createNativeStackNavigator().container, { paddingLeft: left, paddingRight: right }];
  obj[1] = callback(FriendsNavigator, {});
  obj[1] = callback(View, obj);
  return callback(require(3997) /* ManaContext */.ThemeContextProvider, obj);
};