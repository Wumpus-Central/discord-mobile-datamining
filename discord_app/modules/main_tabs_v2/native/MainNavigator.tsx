// discord_app/modules/main_tabs_v2/native/MainNavigator.tsx
import AccessibleNativeStackNavigatorDefault from "../../../design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx";
import ChatPanelNativeStackNavigatorDefault from "panels/createChatPanelNativeStackNavigator.tsx";
import componentDidMount from "../../../components_native/AutoAnalytics.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/AuthenticationStore.tsx";
import { StackNavigationAnimationSettings as closure_7 } from "NavigationConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";
import { ContextMenuCommandNavigator } from "../../application_commands/native/ContextMenuCommandNavigator.tsx";
import { NavigatorWithCaptchaHook } from "../../auth/native/components/Auth.tsx";
import { HeaderWithBorder } from "../../conversations/components/native/ConversationNavigator.tsx";
import { Loading } from "../../guild_member_verification/native/components/MemberVerificationScreen.tsx";
import { SuspendedUserSafetyHubPage } from "../../safety_hub/native/SuspendedUserPage.tsx";
import { RequestsSettingsModalButton } from "friends/FriendsNavigator.tsx";
import { MessageRequestsNavigator } from "message_requests/MessageRequestsNavigator.tsx";
import { Modal } from "modal/ModalScreen.tsx";
import { ConnectedCreateThreadHeaderButton } from "sidebar/details/ChannelDetailsNavigator.tsx";
import { Settings } from "tabs/settings/Settings.tsx";

require = arg1;
function getAuthComponent() {
  return NavigatorWithCaptchaHook /* NavigatorWithCaptchaHook */.default;
}
function getTabsComponent() {
  return require("MainTabs.tsx").default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return callback2(componentDidMount.default, {});
}
function getMemberVerificationComponent() {
  return Loading /* Loading */.default;
}
function getFriendsNavigatorComponent() {
  return RequestsSettingsModalButton /* RequestsSettingsModalButton */.default;
}
function getYouComponent() {
  return require("tabs/you/YouScreenContainer.tsx").default;
}
function getChannelDetailsComponent() {
  return ConnectedCreateThreadHeaderButton /* ConnectedCreateThreadHeaderButton */.default;
}
function getConversationsComponent() {
  return HeaderWithBorder /* HeaderWithBorder */.default;
}
function getSearchComponent() {
  return require("../../search/native/components/navigator/SearchNavigator.tsx").default;
}
function getContextMenuCommandNavigatorComponent() {
  return ContextMenuCommandNavigator /* ContextMenuCommandNavigator */.default;
}
function getModalComponent() {
  return Modal /* Modal */.default;
}
function getMessageRequestsComponent() {
  return MessageRequestsNavigator /* MessageRequestsNavigator */.default;
}
function getSettingsComponent() {
  return Settings /* Settings */.default;
}
function getAccountStanding() {
  return SuspendedUserSafetyHubPage /* SuspendedUserSafetyHubPage */.default;
}
let c4 = importAllResult;
({ AnalyticEvents: closure_8, DrawerSourceTypes: c9 } = ME);
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
    getId(params) {
      return params.params.screenKey;
    },
    listeners: obj,
    options(arg0) {
      const obj = { headerShown: true, header: animation(closure_1_2[30]).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(animation(closure_1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(closure_1_7);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent
  };
  obj = {
    beforeRemove(data) {
      let obj = animation(4308);
      if (null != obj.getBestActiveInput()) {
        obj = { type: null };
        obj[0] = tmp(1627).KeyboardTypes.SYSTEM;
        tmp(1498).setKeyboardType(obj);
        const tmpResult = tmp(1498);
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
      callback(4666).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
    }
  };
  return callback2(Screen.Screen, obj);
}
let closure_16 = AccessibleNativeStackNavigatorDefault();
let closure_17 = ChatPanelNativeStackNavigatorDefault();
let closure_30 = Object.freeze({ animation: "none" });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

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
    let obj = { profile: lib(first[37]).Profiles.MainNavigator, children: null };
    obj = { style: lib.flex, nativeID: closure_1_13, collapsableChildren: false, children: null };
    const tmp4 = stateFromStores(first[37]);
    const tmp7 = stateFromStores(first[38]);
    const tmp8 = stateFromStores(first[39]);
    let tmpResult = null;
    const tmp9 = stateFromStores(first[40]);
    if (stateFromStores) {
      tmpResult = tmp(closure_1_21, {});
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
          let obj = {
            id: "tabs",
            screenOptions(navigation) {
              let str;
              if (closure_15) {
                str = "default";
              }
              const merged = Object.assign(animation(7554).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(closure_7);
              return { orientation: str, headerShown: false };
            },
            children: null
          };
          obj = { name: "tabs", getComponent: closure_1_19, options: closure_1_30 };
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
          const items1 = [closure_1_11(closure_1_17.Navigator, obj), closure_1_0(closure_1_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj1[0] = items1;
          return closure_1_11(closure_1_12, obj1);
        }
      }),
      closure_1_10(closure_1_16.Screen, { name: "search", getComponent: closure_1_27 }),
      closure_1_10(closure_1_16.Screen, {
        name: "conversations",
        getComponent: closure_1_26,
        options() {
          return callback2(10600)();
        }
      }),
      closure_1_10(closure_1_16.Screen, { name: "auth", getComponent: closure_1_18, options: closure_1_30 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj6 = { name: "account-standing", getComponent: closure_1_33, options: null };
    let merged = Object.assign(closure_1_30);
    obj6[2] = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = closure_1_10(closure_1_16.Screen, obj6);
    items1[5] = closure_1_10(closure_1_16.Screen, {
      name: "you",
      options() {
        let obj = closure_1_0(closure_1_2[9]);
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
        const merged = Object.assign(closure_1_1(closure_1_2[43])(obj));
        tmp3Result = tmp3(tmp[8]);
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
      getComponent: closure_1_24
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
        const merged = Object.assign(callback2(10600)({ presentation: str }));
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
      options: closure_1_30,
      children() {
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            if (closure_15) {
              str = "default";
            }
            const merged = Object.assign(animation(7554).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(closure_7);
            return { orientation: str, headerShown: false };
          },
          children: null
        };
        obj = { name: "tabs", getComponent: closure_1_19, options: closure_1_30 };
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
        const items1 = [closure_1_11(closure_1_17.Navigator, obj), closure_1_0(closure_1_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj1[0] = items1;
        return closure_1_11(closure_1_12, obj1);
      }
    };
    const obj3 = { name: "search", getComponent: closure_1_27 };
    const obj4 = {
      name: "conversations",
      getComponent: closure_1_26,
      options() {
        return callback2(10600)();
      }
    };
    const obj5 = { name: "auth", getComponent: closure_1_18, options: closure_1_30 };
    const obj7 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj8 = {
      name: "you",
      options() {
        let obj = closure_1_0(closure_1_2[9]);
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
        const merged = Object.assign(closure_1_1(closure_1_2[43])(obj));
        tmp3Result = tmp3(tmp[8]);
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
      getComponent: closure_1_24
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
    obj9[3] = closure_1_23;
    items1[6] = closure_1_10(closure_1_16.Screen, obj9);
    items1[7] = closure_1_10(closure_1_16.Screen, {
      name: "settings",
      options() {
        let obj = callback(4425);
        obj = undefined;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(callback2(10600)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: closure_1_32
    });
    items1[8] = closure_1_10(closure_1_16.Screen, {
      name: "sidebar",
      getComponent: closure_1_25,
      options() {
        return callback2(10600)({ lockOrientation: false });
      }
    });
    const obj13 = {
      name: "settings",
      options() {
        let obj = callback(4425);
        obj = undefined;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(callback2(10600)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: closure_1_32
    };
    const obj14 = {
      name: "sidebar",
      getComponent: closure_1_25,
      options() {
        return callback2(10600)({ lockOrientation: false });
      }
    };
    tmp5Result = lib(first[8]);
    items1[9] = closure_1_10(closure_1_16.Screen, { name: "message-requests", options: stateFromStores(first[43])(), getComponent: closure_1_31 });
    const obj15 = { name: "message-requests", options: stateFromStores(first[43])(), getComponent: closure_1_31 };
    items1[10] = closure_1_10(closure_1_16.Screen, { name: "context-menu-commands", options: stateFromStores(first[43])(), getComponent: closure_1_28 });
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
        const merged = Object.assign(callback2(10600)({ presentation: str2 }));
        return obj;
      },
      getComponent: closure_1_29
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