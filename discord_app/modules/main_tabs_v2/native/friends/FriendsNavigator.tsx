// discord_app/modules/main_tabs_v2/native/friends/FriendsNavigator.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import getGuildThemeNameDefault from "../../../client_themes/native/useColorThemeBackground.tsx";
import GenericHeaderTitle from "../shared_components/HeaderShared.tsx";
import PressableNavigatorButtonWrapperDefault from "../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";
import registerAssetDefault from "../../../../../_runtime/12384_registerAsset.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/07831_createNativeStackNavigator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

require = arg1;
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true, children: null };
  obj = { source: registerAssetDefault, onPress: onPress.onPress, accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["3D5yo/"]);
  obj[1] = callback(GenericHeaderTitle.HeaderIconButton, obj);
  return callback(PressableNavigatorButtonWrapperDefault, obj);
}
function FriendsNavigator() {
  const _require = callback3();
  const layoutEffect = React.useLayoutEffect(() => lib(7229).trackAppUIViewed(), []);
  let obj = NavigationStack;
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(arg0) {
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
        fullScreenGestureEnabled: null,
      };
      if (navigation.getState().routes[0].key === route.key) {
        const params2 = route.params;
        presentation = undefined;
        if (params2 != null) {
          presentation = params2.presentation;
        }
        if ("card" !== presentation) {
          let renderModalCloseImage = lib(closure_1_2[7]).getRenderModalCloseImage(navigation);
          const obj3 = lib(closure_1_2[7]);
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
      renderModalCloseImage = lib(closure_1_2[7]).getRenderModalBackImage(navigation);
    },
    children: null,
  };
  obj = {
    name: "root",
    options(navigation) {
      navigation = navigation.navigation;
      let obj = { title: null, headerRight: null };
      let intl = navigation(1233).intl;
      obj[0] = intl.string(navigation(1233).t.TdEu5X);
      obj[1] = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(closure_1_2[9]).intl;
        obj.label = intl.string(navigation(closure_1_2[9]).t.zIJnA6);
        obj.onPress = function onPress() {
          return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return closure_1_5(navigation(closure_1_2[7]).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return lib(16559).default;
    },
  };
  const items = [callback(closure_7.Screen, obj), , , , , , , , , ,];
  obj1 = { name: "new-message", options: null, getComponent: null };
  const obj2 = { title: null };
  let intl = require("../../../../intl/index.native.tsx").intl;
  obj2[0] = intl.string(require("../../../../intl/index.native.tsx").t.jD1qzM);
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return lib(16565).default;
  };
  items[1] = callback(closure_7.Screen, obj1);
  let obj3 = { name: "gdm", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj4[0] = intl2.string(require("../../../../intl/index.native.tsx").t["3hF1W4"]);
  obj3[1] = obj4;
  obj3[2] = function getComponent() {
    return lib(16580).default;
  };
  items[2] = callback(closure_7.Screen, obj3);
  const obj5 = { name: "add-friend", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj6[0] = intl3.string(require("../../../../intl/index.native.tsx").t.w5uwoI);
  obj5[1] = obj6;
  obj5[2] = function getComponent() {
    return lib(16581).default;
  };
  items[3] = callback(closure_7.Screen, obj5);
  const obj7 = { name: "add-friends", options: null, getComponent: null };
  const obj8 = { title: null };
  const intl4 = require("../../../../intl/index.native.tsx").intl;
  obj8[0] = intl4.string(require("../../../../intl/index.native.tsx").t.zIJnA6);
  obj7[1] = obj8;
  obj7[2] = function getComponent() {
    return lib(16582).default;
  };
  items[4] = callback(closure_7.Screen, obj7);
  const obj9 = { name: "username-search", options: null, getComponent: null };
  const obj10 = { title: null };
  const intl5 = require("../../../../intl/index.native.tsx").intl;
  obj10[0] = intl5.string(require("../../../../intl/index.native.tsx").t.QzVsOs);
  obj9[1] = obj10;
  obj9[2] = function getComponent() {
    return lib(16588).default;
  };
  items[5] = callback(closure_7.Screen, obj9);
  const obj11 = { name: "suggested-friends", options: null, getComponent: null };
  const obj12 = { title: null };
  const intl6 = require("../../../../intl/index.native.tsx").intl;
  obj12[0] = intl6.string(require("../../../../intl/index.native.tsx").t["1uAmCw"]);
  obj11[1] = obj12;
  obj11[2] = function getComponent() {
    return lib(16589).default;
  };
  items[6] = callback(closure_7.Screen, obj11);
  const obj13 = { name: "requests-settings", options: null, getComponent: null };
  const obj14 = { title: null };
  const intl7 = require("../../../../intl/index.native.tsx").intl;
  obj14[0] = intl7.string(require("../../../../intl/index.native.tsx").t.XT4hVl);
  obj13[1] = obj14;
  obj13[2] = function getComponent() {
    return lib(16590).default;
  };
  items[7] = callback(closure_7.Screen, obj13);
  items[8] = callback(closure_7.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerRight: null };
      const intl = navigation(1233).intl;
      obj[0] = intl.string(navigation(1233).t.fyA115);
      obj[1] = function headerRight() {
        return closure_1_5(closure_1_9, {
          onPress() {
            return navigation.navigate("requests-settings");
          },
        });
      };
      return obj;
    },
    getComponent() {
      return lib(16592).default;
    },
  });
  const obj16 = { name: "spam-requests", options: null, getComponent: null };
  const obj17 = { title: null };
  const intl8 = require("../../../../intl/index.native.tsx").intl;
  obj17[0] = intl8.string(require("../../../../intl/index.native.tsx").t.oHVeHc);
  obj16[1] = obj17;
  obj16[2] = function getComponent() {
    return lib(16595).default;
  };
  items[9] = callback(closure_7.Screen, obj16);
  const obj18 = { name: "ignored-user-requests", options: null, getComponent: null };
  const obj19 = { title: null };
  const intl9 = require("../../../../intl/index.native.tsx").intl;
  obj19[0] = intl9.string(require("../../../../intl/index.native.tsx").t.tFY5Zb);
  obj18[1] = obj19;
  obj18[2] = function getComponent() {
    return lib(16596).default;
  };
  items[10] = callback(closure_7.Screen, obj18);
  obj[1] = items;
  return callback2(closure_7.Navigator, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: null, header: null };
createNativeStackNavigator = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator[0] = createNativeStackNavigator;
createCacheKey = {
  borderBottomWidth: 0,
  backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  shadowColor: "transparent",
};
createNativeStackNavigator[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  const tmp = getGuildThemeNameDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp2 = useSafeAreaInsetsDefault();
  let obj = { gradient: tmp, children: null };
  obj = { style: items, children: callback(FriendsNavigator, {}) };
  items = [callback3().container, { paddingLeft: left, paddingRight: right }];
  obj[1] = callback(View, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
}
