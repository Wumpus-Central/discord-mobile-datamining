// === Module 16050: MainNavigator ===

// Module 16050 (MainNavigator)
import PlatformUtils2 from "PlatformUtils" /* 1364 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 9815 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11061 */;
import StartupProfiler from "StartupProfiler" /* 11667 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 14271 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 16052 */;
import AutoAnalytics from "AutoAnalytics" /* 16888 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 16950 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 17115 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 17146 */;
import AppComponents from "AppComponents" /* 17148 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

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
function getMemberVerificationComponent() {
  return require("MemberVerificationScreen").default;
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
function getAccountStanding() {
  return require("SuspendedUserPage").default;
}
const View = fn(17).View;
let animation = fn(16051).StackNavigationAnimationSettings;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(4639);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1364);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(4618).getSystemVersionMajor() <= 15;
  let obj4 = fn(4618);
}
function getChannelScreen() {
  animation = arg0;
  if (arg0 === undefined) {
    animation = animation.animation;
  }
  return closure_10(Screen.Screen, {
    name: "channel",
    getId(params) {
      return params.params.screenKey;
    },
    listeners: {
      beforeRemove(data) {
        if (null != obj.getBestActiveInput()) {
          const obj2 = { type: animation(1610).KeyboardTypes.SYSTEM };
          animation(1482).setKeyboardType(obj2);
          const tmpResult = animation(1482);
        }
        data = data.data;
        let type;
        if (data != null) {
          const action = data.action;
          if (action != null) {
            type = action.type;
          }
        }
        obj = animation(4505);
        if ("GO_BACK" === type) {
          let SWIPE = constants2.BACK_BUTTON;
        } else {
          SWIPE = constants2.SWIPE;
        }
        closure_1_1(4819).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
        const obj4 = closure_1_1(4819);
      }
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(7969).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(7969).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent
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
  stateFromStores(first[32])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(isMemberVerificationRouteDeprecated.animation);
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
  let obj4 = require("HomeIndicator");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  let obj5 = require("Navigator");
  isMemberVerificationRouteDeprecated = require("MemberVerificationRouteExperiment").useIsMemberVerificationRouteDeprecated("MainNavigator");
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList, isMemberVerificationRouteDeprecated];
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
    let items = [tmpResult, ];
    let obj3 = { profile: null, children: null };
    const tmp10 = GlobalStatusIndicatorDefault;
    obj3.profile = StartupProfiler.Profiles.StackNavigator;
    let obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator };
      },
      children: null
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
              const merged = Object.assign(animation(7969).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(animation2);
              return { orientation: str, headerShown: false };
            },
            children: null
          };
          const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options }), , ];
          let tmp4Result = null;
          if (!animation2) {
            const obj3 = {
              name: "member-verification",
              getId(params) {
                  return params.params.guildId;
                },
              getComponent: getComponent3,
              options: { presentation: "transparentModal", animation: "slide_from_bottom" }
            };
            tmp4Result = closure_2_10(Screen.Screen, obj3);
          }
          items[1] = tmp4Result;
          animation = undefined;
          if (animation != null) {
            animation = animation.animation;
          }
          if (animation == null) {
            animation = dependencyMap;
          }
          if (animation === undefined) {
            animation = isMemberVerificationRouteDeprecated.animation;
          }
          let obj4 = { children: null };
          items[2] = closure_2_10(Screen.Screen, {
            name: "channel",
            getId(params) {
              return params.params.screenKey;
            },
            listeners: {
              beforeRemove(data) {
                if (null != obj.getBestActiveInput()) {
                  const obj2 = { type: animation(1610).KeyboardTypes.SYSTEM };
                  animation(1482).setKeyboardType(obj2);
                  const tmpResult = animation(1482);
                }
                data = data.data;
                let type;
                if (data != null) {
                  const action = data.action;
                  if (action != null) {
                    type = action.type;
                  }
                }
                obj = animation(4505);
                if ("GO_BACK" === type) {
                  let SWIPE = constants2.BACK_BUTTON;
                } else {
                  SWIPE = constants2.SWIPE;
                }
                closure_1_1(4819).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
                const obj4 = closure_1_1(4819);
              }
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(7969).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(7969).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2
          });
          obj.children = items;
          const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[43]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj4.children = items1;
          return closure_2_11(closure_2_12, obj4);
        }
      }),
      closure_2_10(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      closure_2_10(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(11061)();
        }
      }),
      closure_2_10(closure_16.Screen, { name: "auth", getComponent: getAuthComponent, options }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj9.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = closure_2_10(closure_16.Screen, obj9);
    items1[5] = closure_2_10(closure_16.Screen, {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[44]);
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
      getComponent: getYouComponent
    });
    const obj12 = {
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
        const merged = Object.assign(stateFromStores(11061)({ presentation: str }));
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
    const obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj11 = {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[44]);
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
      getComponent: getYouComponent
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
            const merged = Object.assign(animation(7969).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(animation2);
            return { orientation: str, headerShown: false };
          },
          children: null
        };
        const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options }), , ];
        let tmp4Result = null;
        if (!animation2) {
          const obj3 = {
            name: "member-verification",
            getId(params) {
                return params.params.guildId;
              },
            getComponent: getComponent3,
            options: { presentation: "transparentModal", animation: "slide_from_bottom" }
          };
          tmp4Result = closure_2_10(Screen.Screen, obj3);
        }
        items[1] = tmp4Result;
        animation = undefined;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = dependencyMap;
        }
        if (animation === undefined) {
          animation = isMemberVerificationRouteDeprecated.animation;
        }
        let obj4 = { children: null };
        items[2] = closure_2_10(Screen.Screen, {
          name: "channel",
          getId(params) {
            return params.params.screenKey;
          },
          listeners: {
            beforeRemove(data) {
              if (null != obj.getBestActiveInput()) {
                const obj2 = { type: animation(1610).KeyboardTypes.SYSTEM };
                animation(1482).setKeyboardType(obj2);
                const tmpResult = animation(1482);
              }
              data = data.data;
              let type;
              if (data != null) {
                const action = data.action;
                if (action != null) {
                  type = action.type;
                }
              }
              obj = animation(4505);
              if ("GO_BACK" === type) {
                let SWIPE = constants2.BACK_BUTTON;
              } else {
                SWIPE = constants2.SWIPE;
              }
              closure_1_1(4819).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              const obj4 = closure_1_1(4819);
            }
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(7969).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(7969).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[43]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj4.children = items1;
        return closure_2_11(closure_2_12, obj4);
      }
    };
    const obj6 = { name: "search", getComponent: getSearchComponent };
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(11061)();
      }
    };
    const obj8 = { name: "auth", getComponent: getAuthComponent, options };
    const tmp2Result = StartupProfilerDefault;
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), isMemberVerificationRouteDeprecated.duration);
      };
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    const obj15 = { children: null };
    obj12.listeners = { beforeRemove: fn };
    obj12.getComponent = getFriendsNavigatorComponent;
    items1[6] = closure_2_10(closure_16.Screen, obj12);
    items1[7] = closure_2_10(closure_16.Screen, {
      name: "settings",
      options() {
        const tmp = stateFromStores(11061);
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
      getComponent: getSettingsComponent
    });
    items1[8] = closure_2_10(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(11061)({ lockOrientation: false });
      }
    });
    const obj16 = {
      name: "settings",
      options() {
        const tmp = stateFromStores(11061);
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
      getComponent: getSettingsComponent
    };
    const obj17 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(11061)({ lockOrientation: false });
      }
    };
    tmp5Result = PlatformUtils2;
    items1[9] = closure_2_10(closure_16.Screen, { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent });
    const obj18 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[10] = closure_2_10(closure_16.Screen, { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent });
    items1[11] = closure_2_10(closure_16.Screen, {
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
        const merged = Object.assign(stateFromStores(11061)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    });
    obj4.children = items1;
    obj3.children = closure_2_11(closure_16.Navigator, obj4);
    items[1] = closure_2_10(tmp2Result, obj3);
    obj15.children = items;
    obj14.children = closure_2_11(tmp10, obj15);
    obj13.children = closure_2_10(tmp9, obj14);
    const items2 = [closure_2_10(tmp8, obj13), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj2.children = items2;
    obj.children = closure_2_11(tmp7, obj2);
    return closure_2_10(tmp4, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };