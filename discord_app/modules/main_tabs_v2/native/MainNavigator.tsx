// === Module 15207: getAuthComponent ===

// Module 15207 (getAuthComponent)
import AccessibleNativeStackNavigatorDefault from "AccessibleNativeStackNavigator" /* 13537 */;
import ChatPanelNativeStackNavigatorDefault from "ChatPanelNativeStackNavigator" /* 15209 */;
import componentDidMount from "componentDidMount" /* 15956 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import { StackNavigationAnimationSettings as closure_7 } from "StackNavigationAnimationSettings" /* 15208 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

require = fn;
function getAuthComponent() {
  return require(15210) /* NavigatorWithCaptchaHook */.default;
}
function getTabsComponent() {
  return require(15268).default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return callback2(componentDidMount.default, {});
}
function getMemberVerificationComponent() {
  return require(15962) /* Loading */.default;
}
function getFriendsNavigatorComponent() {
  return require(15965) /* RequestsSettingsModalButton */.default;
}
function getYouComponent() {
  return require(16002).default;
}
function getChannelDetailsComponent() {
  return require(16026) /* ConnectedCreateThreadHeaderButton */.default;
}
function getConversationsComponent() {
  return require(12687) /* HeaderWithBorder */.default;
}
function getSearchComponent() {
  return require(16080).default;
}
function getContextMenuCommandNavigatorComponent() {
  return require(16083) /* ContextMenuCommandNavigator */.default;
}
function getModalComponent() {
  return require(16087) /* Modal */.default;
}
function getMessageRequestsComponent() {
  return require(16089) /* MessageRequestsNavigator */.default;
}
function getSettingsComponent() {
  return require(16118) /* Settings */.default;
}
function getAccountStanding() {
  return require(16123) /* SuspendedUserSafetyHubPage */.default;
}
let c4 = importAllResult;
({ AnalyticEvents: closure_8, DrawerSourceTypes: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
let closure_14 = createCacheKey.createStyles({ flex: { flex: 1 } });
obj132 = obj132.isIOS();
if (obj132) {
  obj132 = require("DCDDeviceManager").getSystemVersionMajor() <= 15;
  let obj4 = require("DCDDeviceManager");
}
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  const obj = {
    beforeRemove(data) {
      let obj = animation(4237);
      if (null != obj.getBestActiveInput()) {
        obj = { type: null };
        obj[0] = animation(1627).KeyboardTypes.SYSTEM;
        animation(1498).setKeyboardType(obj);
        const tmpResult = animation(1498);
      }
      data = data.data;
      let type;
      if (data != null) {
        const action = data.action;
        if (action != null) {
          type = action.type;
        }
      }
      if ("GO_BACK" === type) {
        let SWIPE = constants2.BACK_BUTTON;
      } else {
        SWIPE = constants2.SWIPE;
      }
      callback(5042).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
      const obj4 = callback(5042);
    }
  };
  return callback2(Screen.Screen, obj);
}
let closure_16 = AccessibleNativeStackNavigatorDefault();
let closure_17 = ChatPanelNativeStackNavigatorDefault();
let closure_30 = Object.freeze({ animation: "none" });
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default importAllResult.memo(function StackNavigator() {
  const tmp = callback3();
  const _require = tmp;
  const screenReaderEnabled = _require(first[31]).useScreenReaderEnabled();
  let obj = _require(first[31]);
  const appKeyCommands = _require(first[31]).useAppKeyCommands();
  stateFromStores(first[32])();
  let obj2 = _require(first[31]);
  let items = [accessibilityNativeStackOptions];
  stateFromStores = _require(first[33]).useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  const tmp6 = callback(homeIndicatorStore.useState(closure_7.animation), 2);
  first = tmp6[0];
  callback = tmp6[1];
  let obj3 = _require(first[33]);
  homeIndicatorStore = _require(first[34]).useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
  let obj4 = _require(first[34]);
  accessibilityNativeStackOptions = _require(first[36]).useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    { profile: lib(first[37]).Profiles.MainNavigator, children: null };
    let obj = { style: lib.flex, nativeID: mainNavigator, collapsableChildren: false, children: null };
    const tmp4 = stateFromStores(first[37]);
    const tmp7 = stateFromStores(first[38]);
    const tmp8 = stateFromStores(first[39]);
    let tmpResult = null;
    const tmp9 = stateFromStores(first[40]);
    if (stateFromStores) {
      tmpResult = closure_1_10(WrappedAutoAnalytics, {});
    }
    let items = [tmpResult, ];
    obj = { profile: null, children: null };
    const tmp10 = stateFromStores(first[41]);
    obj[0] = lib(first[37]).Profiles.StackNavigator;
    obj1 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator: closure_4 };
      },
      children: null
    };
    let items1 = [
      closure_1_10(closure_1_16.Screen, {
        name: "main",
        options: closure_1_30,
        children() {
          let obj = { name: "tabs", getComponent: closure_1_19, options: closure_1_30 };
          const items = [closure_1_10(closure_1_17.Screen, obj), , ];
          obj = {
            name: "member-verification",
            getId(params) {
              return params.params.guildId;
            },
            getComponent: closure_1_22,
            options: { presentation: "transparentModal", animation: "slide_from_bottom" }
          };
          items[1] = closure_1_10(closure_1_17.Screen, obj);
          let animation;
          if (animation != null) {
            animation = animation.animation;
          }
          if (animation == null) {
            animation = closure_2;
          }
          if (animation === undefined) {
            animation = closure_1_7.animation;
          }
          obj1 = { children: null };
          items[2] = closure_1_10(closure_1_17.Screen, {
            name: "channel",
            getId(params) {
              return params.params.screenKey;
            },
            listeners: obj3,
            options(arg0) {
              const obj = { headerShown: true, header: animation(closure_1_2[30]).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(animation(closure_1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(closure_1_7);
              obj.animation = animation;
              return obj;
            },
            getComponent: closure_1_20
          });
          obj[2] = items;
          const items1 = [closure_1_11(closure_1_17.Navigator, obj), closure_1_0(first[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj1[0] = items1;
          return closure_1_11(closure_1_12, obj1);
        }
      }),
      closure_1_10(closure_1_16.Screen, { name: "search", getComponent: getSearchComponent }),
      closure_1_10(closure_1_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return callback2(9941)();
        }
      }),
      closure_1_10(closure_1_16.Screen, { name: "auth", getComponent: getAuthComponent, options: closure_1_30 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj6 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(closure_1_30);
    obj6[2] = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = closure_1_10(closure_1_16.Screen, obj6);
    items1[5] = closure_1_10(closure_1_16.Screen, {
      name: "you",
      options() {
        let obj = closure_1_0(first[9]);
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        } else {
          let tmp3Result = closure_1_0(first[8]);
          if (tmp3Result.isAndroid()) {
            if (closure_5) {
              obj = { presentation: "transparentModal" };
            }
          }
        }
        obj = {};
        const merged = Object.assign(stateFromStores(first[43])(obj));
        tmp3Result = closure_1_0(first[8]);
        obj1 = undefined;
        if (tmp3Result.isAndroid()) {
          if (closure_5) {
            obj1 = { backgroundColor: "transparent" };
          }
        }
        obj.contentStyle = obj1;
        obj.animation = "slide_from_bottom";
        return obj;
      },
      getComponent: getYouComponent
    });
    const obj9 = {
      name: "friends",
      options(route) {
        route = route.route;
        const params = route.params;
        let str;
        if (params != null) {
          const params2 = params.params;
          if (params2 != null) {
            str = params2.presentation;
          }
        }
        if (str == null) {
          str = "modal";
        }
        const obj = {};
        const merged = Object.assign(callback2(9941)({ presentation: str }));
        const params3 = route.params;
        let presentation;
        if (params3 != null) {
          const params4 = params3.params;
          if (params4 != null) {
            presentation = params4.presentation;
          }
        }
        obj.fullScreenGestureEnabled = "card" === presentation;
        return obj;
      },
      listeners: null,
      getComponent: null
    };
    const tmp2Result = stateFromStores(first[37]);
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        callback3("none");
        const timerId = setTimeout(() => callback(closure_1_7.animation), closure_1_7.duration);
      };
    }
    const obj10 = { children: null };
    const obj11 = { children: null };
    const obj12 = { children: null };
    obj9[2] = { beforeRemove: fn };
    obj9[3] = getFriendsNavigatorComponent;
    items1[6] = closure_1_10(closure_1_16.Screen, obj9);
    items1[7] = closure_1_10(closure_1_16.Screen, {
      name: "settings",
      options() {
        callback(4354);
        let obj;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(callback2(9941)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: getSettingsComponent
    });
    items1[8] = closure_1_10(closure_1_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return callback2(9941)({ lockOrientation: false });
      }
    });
    tmp5Result = lib(first[8]);
    items1[9] = closure_1_10(closure_1_16.Screen, { name: "message-requests", options: stateFromStores(first[43])(), getComponent: getMessageRequestsComponent });
    const obj15 = { name: "message-requests", options: stateFromStores(first[43])(), getComponent: getMessageRequestsComponent };
    items1[10] = closure_1_10(closure_1_16.Screen, { name: "context-menu-commands", options: stateFromStores(first[43])(), getComponent: getContextMenuCommandNavigatorComponent });
    items1[11] = closure_1_10(closure_1_16.Screen, {
      name: "modal",
      getId(params) {
        return params.params.modal.key;
      },
      options(route) {
        route = route.route;
        const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: null };
        let str = route.params.animation;
        if (str == null) {
          str = "slide_from_bottom";
        }
        obj[1] = str;
        let str2 = "transparentModal";
        if ("card" !== route.params.presentation) {
          let str3 = route.params.presentation;
          if (str3 == null) {
            str3 = "transparentModal";
          }
          str2 = str3;
        }
        const merged = Object.assign(callback2(9941)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    });
    obj1[2] = items1;
    obj[1] = closure_1_11(closure_1_16.Navigator, obj1);
    items[1] = closure_1_10(tmp2Result, obj);
    obj12[0] = items;
    obj11[0] = closure_1_11(tmp10, obj12);
    obj10[0] = closure_1_10(tmp9, obj11);
    const items2 = [closure_1_10(tmp8, obj10), lib(first[42]).APP_EXTRA_COMPONENTS, lib(first[42]).APP_EXTRA_COMPONENTS_NEVER_FREEZE, lib(first[42]).APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj[3] = items2;
    obj[1] = closure_1_11(tmp7, obj);
    return closure_1_10(tmp4, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };