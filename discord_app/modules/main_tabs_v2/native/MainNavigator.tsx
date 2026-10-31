// discord_app/modules/main_tabs_v2/native/MainNavigator.tsx
import PlatformUtils2 from "../../../utils/PlatformUtils.tsx";
import KeyboardUIStore from "../../keyboard/native/KeyboardUIStore.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import getNavigationModalPresentationDefault from "utils/getNavigationModalPresentation.tsx";
import StartupProfiler from "../../app_startup/StartupProfiler.tsx";
import GlobalStatusIndicatorDefault from "../../connectivity/native/components/GlobalStatusIndicator.tsx";
import createAccessibleNativeStackNavigatorDefault from "../../../design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx";
import createChatPanelNativeStackNavigatorDefault from "panels/createChatPanelNativeStackNavigator.tsx";
import AutoAnalytics from "../../../components_native/AutoAnalytics.tsx";
import VisualEffectViewTargetDefault from "../../visual_effect_view/native/VisualEffectViewTarget.tsx";
import LaunchPadContainerDefault from "../../launchpad/native/LaunchPadContainer.tsx";
import ParentalConsentWarningBannerDefault from "../../parent_tools/native/ParentalConsentWarningBanner.tsx";
import AppComponents from "AppComponents.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;

require = fn;
function getAuthComponent() {
  return require("Auth").default;
}
function getTabsComponent() {
  return require("MainTabs").default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return closure_1_10(AutoAnalytics.default, {});
}
function getFriendsNavigatorComponent() {
  return require("FriendsNavigator").default;
}
function getYouComponent() {
  return require("YouScreenContainer").default;
}
function getChannelDetailsComponent() {
  return require("ChannelDetailsNavigator").default;
}
function getConversationsComponent() {
  return require("ConversationNavigator").default;
}
function getChannelSecondaryViewChatComponent() {
  return require("ChannelSecondaryViewChatNavigator").default;
}
function getSearchComponent() {
  return require("SearchNavigator").default;
}
function getContextMenuCommandNavigatorComponent() {
  return require("ContextMenuCommandNavigator").default;
}
function getModalComponent() {
  return require("modal/ModalScreen").default;
}
function getMessageRequestsComponent() {
  return require("MessageRequestsNavigator").default;
}
function getSettingsComponent() {
  return require("Settings").default;
}
function getConjureHomeComponent() {
  return require("ConjureHomeScreen").default;
}
function getAccountStanding() {
  return require("SuspendedUserPage").default;
}
function resetChatKeyboard() {
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    KeyboardUIStore.setKeyboardType(obj2);
    const tmpResult = KeyboardUIStore;
  }
  obj = ChatInputUtils;
}
function getOrbsArcadeGameComponent() {
  return require("OrbsArcadeGameScreen").default;
}
const View = fn(17).View;
let closure_7 = fn(17971).StackNavigationAnimationSettings;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(5014);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1375);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(4971).getSystemVersionMajor() <= 15;
  let obj4 = fn(4971);
}
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  return closure_10(Screen.Screen, {
    name: "channel",
    getId(params) {
      return params.params.screenKey;
    },
    listeners: {
      beforeRemove(data) {
        if (null != obj.getBestActiveInput()) {
          const obj2 = { type: animation(1623).KeyboardTypes.SYSTEM };
          animation(1495).setKeyboardType(obj2);
          const tmpResult = animation(1495);
        }
        data = data.data;
        let type;
        if (data != null) {
          const action = data.action;
          if (action != null) {
            type = action.type;
          }
        }
        obj = animation(5207);
        if ("GO_BACK" === type) {
          let SWIPE = constants2.BACK_BUTTON;
        } else {
          SWIPE = constants2.SWIPE;
        }
        closure_1_1(5760).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
        const obj4 = closure_1_1(5760);
      },
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(9812).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(9812).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent,
  });
}
let closure_16 = createAccessibleNativeStackNavigatorDefault();
const Screen = createChatPanelNativeStackNavigatorDefault();
let closure_30 = Object.freeze({ animation: "none" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default noop.memo(function StackNavigator() {
  let tmp = closure_14();
  _require = tmp;
  const screenReaderEnabled = require("MainShared").useScreenReaderEnabled();
  let obj = require("MainShared");
  const appKeyCommands = require("MainShared").useAppKeyCommands();
  stateFromStores(first[34])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => null != accessibilityNativeStackOptions.getSessionId(),
  );
  [first, _slicedToArray] = homeIndicatorStore.useState(closure_7.animation);
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore(
    (autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator,
  );
  const isChatBesideChannelList = stateFromStores(first[37])().isChatBesideChannelList;
  let obj4 = require("HomeIndicator");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  let items1 = [
    tmp,
    stateFromStores,
    homeIndicatorStore,
    accessibilityNativeStackOptions,
    first,
    isChatBesideChannelList,
  ];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: null };
    let obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: null };
    const tmp4 = StartupProfilerDefault;
    const tmp7 = VisualEffectViewTargetDefault;
    const tmp8 = LaunchPadContainerDefault;
    let tmpResult = null;
    const tmp9 = ParentalConsentWarningBannerDefault;
    if (stateFromStores) {
      tmpResult = closure_2_10(WrappedAutoAnalytics, {});
    }
    let items = [tmpResult];
    let obj3 = { profile: null, children: null };
    const tmp10 = GlobalStatusIndicatorDefault;
    obj3.profile = StartupProfiler.Profiles.StackNavigator;
    let obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator };
      },
      children: null,
    };
    let items1 = [
      closure_2_10(closure_16.Screen, {
        name: "main",
        options,
        children() {
          let obj = {
            id: "tabs",
            screenOptions(navigation) {
              let str;
              if (closure_1_15) {
                str = "default";
              }
              const merged = Object.assign(animation(9812).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(animation2);
              return { orientation: str, headerShown: false };
            },
            children: null,
          };
          const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options })];
          animation = undefined;
          if (animation != null) {
            animation = animation.animation;
          }
          if (animation == null) {
            animation = dependencyMap;
          }
          if (animation === undefined) {
            animation = closure_2_7.animation;
          }
          const obj3 = { children: null };
          items[1] = closure_2_10(Screen.Screen, {
            name: "channel",
            getId(params) {
              return params.params.screenKey;
            },
            listeners: {
              beforeRemove(data) {
                if (null != obj.getBestActiveInput()) {
                  const obj2 = { type: animation(1623).KeyboardTypes.SYSTEM };
                  animation(1495).setKeyboardType(obj2);
                  const tmpResult = animation(1495);
                }
                data = data.data;
                let type;
                if (data != null) {
                  const action = data.action;
                  if (action != null) {
                    type = action.type;
                  }
                }
                obj = animation(5207);
                if ("GO_BACK" === type) {
                  let SWIPE = constants2.BACK_BUTTON;
                } else {
                  SWIPE = constants2.SWIPE;
                }
                closure_1_1(5760).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
                const obj4 = closure_1_1(5760);
              },
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(9812).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(9812).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2,
          });
          obj.children = items;
          const items1 = [
            closure_2_11(Screen.Navigator, obj),
            closure_0(first[44]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO,
          ];
          obj3.children = items1;
          return closure_2_11(closure_2_12, obj3);
        },
      }),
      closure_2_10(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      closure_2_10(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(10144)();
        },
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
      ,
      ,
    ];
    const obj8 = {
      name: "channel-secondary-view-chat",
      getComponent: getChannelSecondaryViewChatComponent,
      options() {
        return stateFromStores(10144)();
      },
      listeners: { beforeRemove: resetChatKeyboard },
    };
    items1[3] = closure_2_10(closure_16.Screen, obj8);
    items1[4] = closure_2_10(closure_16.Screen, { name: "auth", getComponent: getAuthComponent, options });
    const obj11 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj11.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[5] = closure_2_10(closure_16.Screen, obj11);
    items1[6] = closure_2_10(closure_16.Screen, {
      name: "orbs-arcade-game",
      getComponent: getOrbsArcadeGameComponent,
      options: {
        presentation: "fullScreenModal",
        animation: "slide_from_bottom",
        gestureEnabled: false,
        orientation: "portrait",
      },
    });
    items1[7] = closure_2_10(closure_16.Screen, {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[45]);
        if (obj.isIpadOS()) {
          let obj2 = { presentation: "modal" };
        } else {
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
          tmp3Result = closure_0(first[8]);
        }
        const obj3 = {};
        const merged = Object.assign(tmp2(obj2));
        obj = closure_0(first[9]);
        let obj4;
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        obj3.contentStyle = obj4;
        obj3.animation = "slide_from_bottom";
        return obj3;
      },
      getComponent: getYouComponent,
    });
    const obj15 = {
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
        const merged = Object.assign(stateFromStores(10144)({ presentation: str }));
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
      getComponent: null,
    };
    const obj10 = { name: "auth", getComponent: getAuthComponent, options };
    const obj12 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj13 = {
      name: "orbs-arcade-game",
      getComponent: getOrbsArcadeGameComponent,
      options: {
        presentation: "fullScreenModal",
        animation: "slide_from_bottom",
        gestureEnabled: false,
        orientation: "portrait",
      },
    };
    const obj14 = {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[45]);
        if (obj.isIpadOS()) {
          let obj2 = { presentation: "modal" };
        } else {
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
          tmp3Result = closure_0(first[8]);
        }
        const obj3 = {};
        const merged = Object.assign(tmp2(obj2));
        obj = closure_0(first[9]);
        let obj4;
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        obj3.contentStyle = obj4;
        obj3.animation = "slide_from_bottom";
        return obj3;
      },
      getComponent: getYouComponent,
    };
    const obj5 = {
      name: "main",
      options,
      children() {
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            if (closure_1_15) {
              str = "default";
            }
            const merged = Object.assign(animation(9812).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(animation2);
            return { orientation: str, headerShown: false };
          },
          children: null,
        };
        const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options })];
        animation = undefined;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = dependencyMap;
        }
        if (animation === undefined) {
          animation = closure_2_7.animation;
        }
        const obj3 = { children: null };
        items[1] = closure_2_10(Screen.Screen, {
          name: "channel",
          getId(params) {
            return params.params.screenKey;
          },
          listeners: {
            beforeRemove(data) {
              if (null != obj.getBestActiveInput()) {
                const obj2 = { type: animation(1623).KeyboardTypes.SYSTEM };
                animation(1495).setKeyboardType(obj2);
                const tmpResult = animation(1495);
              }
              data = data.data;
              let type;
              if (data != null) {
                const action = data.action;
                if (action != null) {
                  type = action.type;
                }
              }
              obj = animation(5207);
              if ("GO_BACK" === type) {
                let SWIPE = constants2.BACK_BUTTON;
              } else {
                SWIPE = constants2.SWIPE;
              }
              closure_1_1(5760).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              const obj4 = closure_1_1(5760);
            },
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(9812).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(9812).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2,
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[44]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj3.children = items1;
        return closure_2_11(closure_2_12, obj3);
      },
    };
    const obj6 = { name: "search", getComponent: getSearchComponent };
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(10144)();
      },
    };
    const obj9 = { beforeRemove: resetChatKeyboard };
    const tmp2Result = StartupProfilerDefault;
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), closure_2_7.duration);
      };
    }
    const obj16 = { children: null };
    const obj17 = { children: null };
    const obj18 = { children: null };
    obj15.listeners = { beforeRemove: fn };
    obj15.getComponent = getFriendsNavigatorComponent;
    items1[8] = closure_2_10(closure_16.Screen, obj15);
    items1[9] = closure_2_10(closure_16.Screen, {
      name: "settings",
      options() {
        const tmp = stateFromStores(10144);
        let obj2;
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = {};
        const merged = Object.assign(tmp(obj2));
        obj3.animation = "slide_from_bottom";
        obj3.fullScreenGestureEnabled = true;
        return obj3;
      },
      getComponent: getSettingsComponent,
    });
    items1[10] = closure_2_10(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10144)({ lockOrientation: false });
      },
    });
    const obj19 = {
      name: "settings",
      options() {
        const tmp = stateFromStores(10144);
        let obj2;
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = {};
        const merged = Object.assign(tmp(obj2));
        obj3.animation = "slide_from_bottom";
        obj3.fullScreenGestureEnabled = true;
        return obj3;
      },
      getComponent: getSettingsComponent,
    };
    const obj20 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10144)({ lockOrientation: false });
      },
    };
    tmp5Result = PlatformUtils2;
    items1[11] = closure_2_10(closure_16.Screen, {
      name: "message-requests",
      options: getNavigationModalPresentationDefault(),
      getComponent: getMessageRequestsComponent,
    });
    const obj21 = {
      name: "message-requests",
      options: getNavigationModalPresentationDefault(),
      getComponent: getMessageRequestsComponent,
    };
    items1[12] = closure_2_10(closure_16.Screen, {
      name: "context-menu-commands",
      options: getNavigationModalPresentationDefault(),
      getComponent: getContextMenuCommandNavigatorComponent,
    });
    const obj23 = { name: "conjure", options: null, getComponent: null };
    const obj24 = {};
    let merged1 = Object.assign(animation2);
    obj24.gestureEnabled = true;
    obj23.options = obj24;
    obj23.getComponent = getConjureHomeComponent;
    items1[13] = closure_2_10(closure_16.Screen, obj23);
    items1[14] = closure_2_10(closure_16.Screen, {
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
        obj.animation = str;
        let str2 = "transparentModal";
        if ("card" !== route.params.presentation) {
          let str3 = route.params.presentation;
          if (str3 == null) {
            str3 = "transparentModal";
          }
          str2 = str3;
        }
        const merged = Object.assign(stateFromStores(10144)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent,
    });
    obj4.children = items1;
    obj3.children = closure_2_11(closure_16.Navigator, obj4);
    items[1] = closure_2_10(tmp2Result, obj3);
    obj18.children = items;
    obj17.children = closure_2_11(tmp10, obj18);
    obj16.children = closure_2_10(tmp9, obj17);
    const items2 = [
      closure_2_10(tmp8, obj16),
      AppComponents.APP_EXTRA_COMPONENTS,
      AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE,
      AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP,
    ];
    obj2.children = items2;
    obj.children = closure_2_11(tmp7, obj2);
    return closure_2_10(tmp4, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
