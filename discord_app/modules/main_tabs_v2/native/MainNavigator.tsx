import useNativeThemeUpdater from "useNativeThemeUpdater";
import importAllResult from "HeaderWithBorder";
import { View } from "module_15635";
import fetchFingerprint from "fetchFingerprint";
import { StackNavigationAnimationSettings as closure_7 } from "StackNavigationAnimationSettings";
import ME from "ME";
import jsxProd from "ContextMenuCommandNavigator";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "get ActivityIndicator";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function getAuthComponent() {
  return require(14875) /* NavigatorWithCaptchaHook */.default;
}
function getTabsComponent() {
  return require(14933).default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return callback2(require(15590) /* componentDidMount */.default, {});
}
function getMemberVerificationComponent() {
  return require(15595) /* Loading */.default;
}
function getFriendsNavigatorComponent() {
  return require(15598) /* RequestsSettingsModalButton */.default;
}
function getYouComponent() {
  return require(15635).default;
}
function getChannelDetailsComponent() {
  return require(15659) /* ConnectedCreateThreadHeaderButton */.default;
}
function getConversationsComponent() {
  return require(9292) /* HeaderWithBorder */.default;
}
function getSearchComponent() {
  return require(15713).default;
}
function getContextMenuCommandNavigatorComponent() {
  return require(15716) /* ContextMenuCommandNavigator */.default;
}
function getModalComponent() {
  return require(15720) /* Modal */.default;
}
function getMessageRequestsComponent() {
  return require(15722) /* MessageRequestsNavigator */.default;
}
function getSettingsComponent() {
  return require(15751) /* Settings */.default;
}
function getAccountStanding() {
  return require(15756) /* SuspendedUserSafetyHubPage */.default;
}
let c4 = importAllResult;
({ AnalyticEvents: metroImportAll, DrawerSourceTypes: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
let closure_14 = createCacheKey.createStyles({ flex: { flex: 1 } });
set = set.isIOS();
if (set) {
  set = require("DCDDeviceManager").getSystemVersionMajor() <= 15;
  let obj4 = require("DCDDeviceManager");
}
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  obj = {
    name: "channel",
    listeners: obj,
    options(arg0) {
      let navigation;
      let route;
      const obj = { headerShown: true, header: animation(outer1_2[30]).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(animation(outer1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(outer1_7);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent
  };
  obj = {
    beforeRemove(data) {
      let obj = animation(4052);
      if (null != obj.getBestActiveInput()) {
        obj = { type: null };
        obj[0] = tmp(1579).KeyboardTypes.SYSTEM;
        tmp(1478).setKeyboardType(obj);
        const tmpResult = tmp(1478);
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
      callback(4388).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
    }
  };
  return callback2(Screen.Screen, obj);
}
let closure_16 = require("navigatorFactory")();
let closure_17 = require("navigatorFactory")();
let closure_30 = Object.freeze({ animation: "none" });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default importAllResult.memo(function StackNavigator() {
  const tmp = callback3();
  const require = tmp;
  const screenReaderEnabled = require(first[31]).useScreenReaderEnabled();
  let obj = require(first[31]);
  const appKeyCommands = require(first[31]).useAppKeyCommands();
  stateFromStores(first[32])();
  let obj2 = require(first[31]);
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require(first[33]).useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  const tmp6 = callback(homeIndicatorStore.useState(closure_7.animation), 2);
  first = tmp6[0];
  callback = tmp6[1];
  let obj3 = require(first[33]);
  homeIndicatorStore = require(first[34]).useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
  let obj4 = require(first[34]);
  accessibilityNativeStackOptions = require(first[36]).useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: null, children: null };
    obj[0] = outer1_10(first[37]).Profiles.MainNavigator;
    obj = { style: tmp.flex, nativeID: outer1_13, collapsableChildren: false, children: null };
    const tmp4 = stateFromStores(first[37]);
    const tmp7 = stateFromStores(first[38]);
    const tmp8 = stateFromStores(first[39]);
    let tmpResult = null;
    const tmp9 = stateFromStores(first[40]);
    if (stateFromStores) {
      tmpResult = tmp(outer1_21, {});
    }
    let items = [tmpResult, ];
    obj = { profile: null, children: null };
    const tmp10 = stateFromStores(first[41]);
    obj[0] = outer1_10(first[37]).Profiles.StackNavigator;
    let obj1 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator: closure_4 };
      },
      children: null
    };
    let items1 = [
      outer1_10(outer1_16.Screen, {
        name: "main",
        options: outer1_30,
        children() {
          let obj = {
            id: "tabs",
            screenOptions(navigation) {
              let str;
              if (closure_15) {
                str = "default";
              }
              const merged = Object.assign(animation(9127).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(closure_7);
              return { orientation: str, headerShown: false };
            },
            children: null
          };
          obj = { name: "tabs", getComponent: outer1_19, options: outer1_30 };
          const items = [outer1_10(outer1_17.Screen, obj), , ];
          obj = { name: "member-verification", getComponent: outer1_22, options: { presentation: "transparentModal", animation: "slide_from_bottom" } };
          items[1] = outer1_10(outer1_17.Screen, obj);
          let animation;
          if (animation != null) {
            animation = animation.animation;
          }
          if (animation == null) {
            animation = closure_2;
          }
          if (animation === undefined) {
            animation = outer1_7.animation;
          }
          const obj1 = { children: null };
          items[2] = outer1_10(outer1_17.Screen, {
            name: "channel",
            listeners: obj3,
            options(arg0) {
              let navigation;
              let route;
              const obj = { headerShown: true, header: animation(outer1_2[30]).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(animation(outer1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(outer1_7);
              obj.animation = animation;
              return obj;
            },
            getComponent: outer1_20
          });
          obj[2] = items;
          const items1 = [outer1_11(outer1_17.Navigator, obj), outer1_0(outer1_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj1[0] = items1;
          return outer1_11(outer1_12, obj1);
        }
      }),
      outer1_10(outer1_16.Screen, { name: "search", getComponent: outer1_27 }),
      outer1_10(outer1_16.Screen, {
        name: "conversations",
        getComponent: outer1_26,
        options() {
          return callback2(10197)();
        }
      }),
      outer1_10(outer1_16.Screen, { name: "auth", getComponent: outer1_18, options: outer1_30 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj6 = { name: "account-standing", getComponent: outer1_33, options: null };
    let merged = Object.assign(outer1_30);
    obj6[2] = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = outer1_10(outer1_16.Screen, obj6);
    items1[5] = outer1_10(outer1_16.Screen, {
      name: "you",
      options() {
        let obj = outer1_0(outer1_2[9]);
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        } else {
          let tmp3Result = tmp3(tmp[8]);
          if (tmp3Result.isAndroid()) {
            if (closure_5) {
              obj = { presentation: "transparentModal" };
            }
          }
        }
        obj = {};
        const merged = Object.assign(outer1_1(outer1_2[43])(obj));
        tmp3Result = tmp3(tmp[8]);
        let obj1;
        if (tmp3Result.isAndroid()) {
          if (closure_5) {
            obj1 = { backgroundColor: "transparent" };
          }
        }
        obj.contentStyle = obj1;
        obj.animation = "slide_from_bottom";
        return obj;
      },
      getComponent: outer1_24
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
        const merged = Object.assign(callback2(10197)({ presentation: str }));
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
    const obj2 = {
      name: "main",
      options: outer1_30,
      children() {
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            if (closure_15) {
              str = "default";
            }
            const merged = Object.assign(animation(9127).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(closure_7);
            return { orientation: str, headerShown: false };
          },
          children: null
        };
        obj = { name: "tabs", getComponent: outer1_19, options: outer1_30 };
        const items = [outer1_10(outer1_17.Screen, obj), , ];
        obj = { name: "member-verification", getComponent: outer1_22, options: { presentation: "transparentModal", animation: "slide_from_bottom" } };
        items[1] = outer1_10(outer1_17.Screen, obj);
        let animation;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = closure_2;
        }
        if (animation === undefined) {
          animation = outer1_7.animation;
        }
        const obj1 = { children: null };
        items[2] = outer1_10(outer1_17.Screen, {
          name: "channel",
          listeners: obj3,
          options(arg0) {
            let navigation;
            let route;
            const obj = { headerShown: true, header: animation(outer1_2[30]).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(animation(outer1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(outer1_7);
            obj.animation = animation;
            return obj;
          },
          getComponent: outer1_20
        });
        obj[2] = items;
        const items1 = [outer1_11(outer1_17.Navigator, obj), outer1_0(outer1_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj1[0] = items1;
        return outer1_11(outer1_12, obj1);
      }
    };
    const obj3 = { name: "search", getComponent: outer1_27 };
    const obj4 = {
      name: "conversations",
      getComponent: outer1_26,
      options() {
        return callback2(10197)();
      }
    };
    const obj5 = { name: "auth", getComponent: outer1_18, options: outer1_30 };
    const obj7 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj8 = {
      name: "you",
      options() {
        let obj = outer1_0(outer1_2[9]);
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        } else {
          let tmp3Result = tmp3(tmp[8]);
          if (tmp3Result.isAndroid()) {
            if (closure_5) {
              obj = { presentation: "transparentModal" };
            }
          }
        }
        obj = {};
        const merged = Object.assign(outer1_1(outer1_2[43])(obj));
        tmp3Result = tmp3(tmp[8]);
        let obj1;
        if (tmp3Result.isAndroid()) {
          if (closure_5) {
            obj1 = { backgroundColor: "transparent" };
          }
        }
        obj.contentStyle = obj1;
        obj.animation = "slide_from_bottom";
        return obj;
      },
      getComponent: outer1_24
    };
    const tmp2Result = stateFromStores(first[37]);
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        callback3("none");
        const timerId = setTimeout(() => callback(outer1_7.animation), outer1_7.duration);
      };
    }
    const obj10 = { children: null };
    const obj11 = { children: null };
    const obj12 = { children: null };
    obj9[2] = { beforeRemove: fn };
    obj9[3] = outer1_23;
    items1[6] = outer1_10(outer1_16.Screen, obj9);
    items1[7] = outer1_10(outer1_16.Screen, {
      name: "settings",
      options() {
        let obj = callback(4173);
        obj = undefined;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(callback2(10197)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: outer1_32
    });
    items1[8] = outer1_10(outer1_16.Screen, {
      name: "sidebar",
      getComponent: outer1_25,
      options() {
        return callback2(10197)({ lockOrientation: false });
      }
    });
    const obj13 = {
      name: "settings",
      options() {
        let obj = callback(4173);
        obj = undefined;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(callback2(10197)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: outer1_32
    };
    const obj14 = {
      name: "sidebar",
      getComponent: outer1_25,
      options() {
        return callback2(10197)({ lockOrientation: false });
      }
    };
    tmp5Result = outer1_10(first[8]);
    items1[9] = outer1_10(outer1_16.Screen, { name: "message-requests", options: stateFromStores(first[43])(), getComponent: outer1_31 });
    const obj15 = { name: "message-requests", options: stateFromStores(first[43])(), getComponent: outer1_31 };
    items1[10] = outer1_10(outer1_16.Screen, { name: "context-menu-commands", options: stateFromStores(first[43])(), getComponent: outer1_28 });
    items1[11] = outer1_10(outer1_16.Screen, {
      name: "modal",
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
        const merged = Object.assign(callback2(10197)({ presentation: str2 }));
        return obj;
      },
      getComponent: outer1_29
    });
    obj1[2] = items1;
    obj[1] = outer1_11(outer1_16.Navigator, obj1);
    items[1] = outer1_10(tmp2Result, obj);
    obj12[0] = items;
    obj11[0] = outer1_11(tmp10, obj12);
    obj10[0] = outer1_10(tmp9, obj11);
    const items2 = [outer1_10(tmp8, obj10), outer1_10(first[42]).APP_EXTRA_COMPONENTS, outer1_10(first[42]).APP_EXTRA_COMPONENTS_NEVER_FREEZE, outer1_10(first[42]).APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj[3] = items2;
    obj[1] = outer1_11(tmp7, obj);
    return outer1_10(tmp4, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };