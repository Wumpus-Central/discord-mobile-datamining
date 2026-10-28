// === Module 17630: MainNavigator ===

// Module 17630 (MainNavigator)
import c from "c" /* 576 */;
import PlatformUtils2 from "PlatformUtils" /* 1381 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1500 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import DeviceUtils from "DeviceUtils" /* 4961 */;
import ChatInputUtils from "ChatInputUtils" /* 5195 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10065 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 11614 */;
import StartupProfiler from "StartupProfiler" /* 13290 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 15553 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 17632 */;
import AutoAnalytics from "AutoAnalytics" /* 18478 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 18525 */;
import AppComponents from "AppComponents" /* 18714 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 18967 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 18998 */;
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
let closure_7 = fn(17631).StackNavigationAnimationSettings;
const Constants = fn(1084);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(5004);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1381);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(4961).getSystemVersionMajor() <= 15;
  let obj4 = fn(4961);
}
let closure_16 = createAccessibleNativeStackNavigatorDefault();
const Screen = createChatPanelNativeStackNavigatorDefault();
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function WrappedAutoAnalytics() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AutoAnalytics;
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = v65535(first.default, {});
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function WrappedAutoAnalytics() {
  return v65535(AutoAnalytics.default, {});
});
const options = Object.freeze({ animation: "none" });
ReactCompilerGating = fn(558);
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
          const obj2 = { type: animation(1628).KeyboardTypes.SYSTEM };
          animation(1500).setKeyboardType(obj2);
          const tmpResult = animation(1500);
        }
        data = data.data;
        let type;
        if (data != null) {
          const action = data.action;
          if (action != null) {
            type = action.type;
          }
        }
        obj = animation(5195);
        if ("GO_BACK" === type) {
          let SWIPE = constants2.BACK_BUTTON;
        } else {
          SWIPE = constants2.SWIPE;
        }
        closure_1_1(5747).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
        const obj4 = closure_1_1(5747);
      }
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(9733).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(9733).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StackNavigator() {
  const cResult = first(homeIndicatorStore[15]).c(35);
  closure_14();
  let obj = first(homeIndicatorStore[15]);
  const screenReaderEnabled = first(homeIndicatorStore[35]).useScreenReaderEnabled();
  let obj2 = first(homeIndicatorStore[35]);
  const appKeyCommands = first(homeIndicatorStore[35]).useAppKeyCommands();
  require("useNativeThemeUpdater")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function c() {
      return null != sessionId.getSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let obj3 = first(homeIndicatorStore[35]);
  const stateFromStores = first(homeIndicatorStore[37]).useStateFromStores(tmp9, tmp10);
  const tmp14 = isChatBesideChannelList(accessibilityNativeStackOptions.useState(closure_7.animation), 2);
  first = tmp14[0];
  importDefault = tmp14[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(autoHideHomeIndicator) {
      return autoHideHomeIndicator.autoHideHomeIndicator;
    };
    cResult[2] = fn2;
    let tmp16 = fn2;
  } else {
    tmp16 = cResult[2];
  }
  const tmpResult = first(homeIndicatorStore[37]);
  homeIndicatorStore = first(homeIndicatorStore[38]).useHomeIndicatorStore(tmp16);
  isChatBesideChannelList = tmp7(tmp2[39])().isChatBesideChannelList;
  const tmpResult4 = first(homeIndicatorStore[38]);
  accessibilityNativeStackOptions = first(homeIndicatorStore[40]).useAccessibilityNativeStackOptions();
  if (cResult[3] !== stateFromStores) {
    let tmp20 = null;
    if (stateFromStores) {
      tmp20 = closure_10(closure_21, {});
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp20;
  }
  if (cResult[5] !== homeIndicatorStore) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
    cResult[5] = homeIndicatorStore;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  if (cResult[7] === undefined) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      let obj4 = { name: "search", getComponent: getSearchComponent };
      const tmp29 = closure_10(closure_16.Screen, obj4);
      cResult[10] = tmp29;
      const tmp26 = tmp29;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj5 = {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
              return closure_1(homeIndicatorStore[42])();
            }
      };
      const tmp33 = closure_10(closure_16.Screen, obj5);
      cResult[11] = tmp33;
      const tmp30 = tmp33;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj6 = {
        name: "channel-secondary-view-chat",
        getComponent: getChannelSecondaryViewChatComponent,
        options() {
              return closure_1(homeIndicatorStore[42])();
            },
        listeners: null
      };
      const obj7 = { beforeRemove: resetChatKeyboard };
      obj6.listeners = obj7;
      const tmp39 = closure_10(closure_16.Screen, obj6);
      const obj8 = { name: "auth", getComponent: getAuthComponent, options };
      const tmp42 = closure_10(closure_16.Screen, obj8);
      cResult[12] = tmp39;
      cResult[13] = tmp42;
      let tmp35 = tmp42;
      const tmp34 = tmp39;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      tmp35 = cResult[13];
    }
    const _Symbol4 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: null };
      const obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
      let merged = Object.assign(options);
      obj9.options = obj10;
      const tmp49 = closure_10(closure_16.Screen, obj9);
      cResult[14] = tmp49;
      const tmp43 = tmp49;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj11 = { name: "orbs-arcade-game", getComponent: getOrbsArcadeGameComponent, options: { presentation: "fullScreenModal", animation: "slide_from_bottom", gestureEnabled: false, orientation: "portrait" } };
      const tmp53 = closure_10(closure_16.Screen, obj11);
      cResult[15] = tmp53;
      const tmp50 = tmp53;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    if (cResult[16] !== isChatBesideChannelList) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj12 = {
        name: "you",
        options() {
              const tmp2 = getNavigationModalPresentationDefault;
              if (obj.isIpadOS()) {
                let obj2 = { presentation: "modal" };
              } else {
                if (tmp3Result.isAndroid()) {
                  if (isChatBesideChannelList) {
                    obj2 = { presentation: "transparentModal" };
                  }
                }
                tmp3Result = PlatformUtils2;
              }
              const obj3 = {};
              const merged = Object.assign(tmp2(obj2));
              obj = DeviceUtils;
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
      const tmp57 = closure_10(closure_16.Screen, obj12);
      cResult[16] = isChatBesideChannelList;
      cResult[17] = tmp57;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj13 = {
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
              const merged = Object.assign(closure_1(homeIndicatorStore[42])({ presentation: str }));
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
      if (!tmpResult6.isAndroid()) {
        class R {
          constructor() {
            obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
            return obj;
          }
        }
      }
      const obj14 = { beforeRemove: undefined };
      obj13.listeners = obj14;
      obj13.getComponent = getFriendsNavigatorComponent;
      const tmp59Result = closure_10(closure_16.Screen, obj13);
      cResult[18] = tmp59Result;
      const tmp58 = tmp59Result;
      tmpResult6 = tmp(tmp2[8]);
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj15 = {
        name: "settings",
        options() {
              const tmp = closure_1(homeIndicatorStore[42]);
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
      const tmp66 = closure_10(closure_16.Screen, obj15);
      cResult[19] = tmp66;
      const tmp63 = tmp66;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj16 = {
        name: "sidebar",
        getComponent: getChannelDetailsComponent,
        options() {
              return closure_1(homeIndicatorStore[42])({ lockOrientation: false });
            }
      };
      const tmp70 = closure_10(closure_16.Screen, obj16);
      cResult[20] = tmp70;
      const tmp67 = tmp70;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj17 = { name: "message-requests", options: tmp7(tmp2[42])(), getComponent: getMessageRequestsComponent };
      const tmp74 = closure_10(closure_16.Screen, obj17);
      cResult[21] = tmp74;
      const tmp71 = tmp74;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj18 = { name: "context-menu-commands", options: tmp7(tmp2[42])(), getComponent: getContextMenuCommandNavigatorComponent };
      const tmp78 = closure_10(closure_16.Screen, obj18);
      cResult[22] = tmp78;
      const tmp75 = tmp78;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol11 = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj19 = { name: "conjure", options: null, getComponent: null };
      const obj20 = {};
      let merged1 = Object.assign(closure_7);
      obj20.gestureEnabled = true;
      obj19.options = obj20;
      obj19.getComponent = getConjureHomeComponent;
      const tmp85 = closure_10(closure_16.Screen, obj19);
      cResult[23] = tmp85;
      const tmp79 = tmp85;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol12 = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj21 = {
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
              const merged = Object.assign(closure_1(homeIndicatorStore[42])({ presentation: str2 }));
              return obj;
            },
        getComponent: getModalComponent
      };
      const tmp89 = closure_10(closure_16.Screen, obj21);
      cResult[24] = tmp89;
      const tmp86 = tmp89;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    if (cResult[25] === tmp54) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const obj22 = { profile: tmp(tmp2[43]).Profiles.StackNavigator, children: null };
    const obj23 = { id: "root", screenOptions: R, children: null };
    let items1 = [tmp24, tmp26, tmp30, tmp34, tmp35, tmp43, tmp50, tmp54, tmp58, tmp63, tmp67, tmp71, tmp75, tmp79, tmp86];
    obj23.children = items1;
    obj22.children = closure_11(closure_16.Navigator, obj23);
    const tmp95 = closure_10(tmp7(tmp2[43]), obj22);
    cResult[25] = tmp54;
    cResult[26] = R;
    cResult[27] = tmp24;
    cResult[28] = tmp95;
    const tmp7Result = tmp7(tmp2[43]);
  }
  const tmp25 = closure_10(closure_16.Screen, {
    name: "main",
    options,
    children() {
      const obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          if (closure_1_15) {
            str = "default";
          }
          const merged = Object.assign(animation(homeIndicatorStore[34]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [v65535(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), ];
      let animation;
      if (accessibilityNativeStackOptions != null) {
        animation = accessibilityNativeStackOptions.animation;
      }
      if (animation == null) {
        animation = first;
      }
      if (animation === undefined) {
        animation = closure_7.animation;
      }
      const obj3 = { children: null };
      items[1] = v65535(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: animation(1628).KeyboardTypes.SYSTEM };
              animation(1500).setKeyboardType(obj2);
              const tmpResult = animation(1500);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(5195);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(5747).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            const obj4 = closure_1_1(5747);
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(9733).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(9733).getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          obj.animation = animation;
          return obj;
        },
        getComponent: getChannelComponent
      });
      obj.children = items;
      const items1 = [closure_2_11(closure_17.Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      obj3.children = items1;
      return closure_2_11(__initData, obj3);
    }
  });
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = first;
  cResult[9] = tmp25;
  const obj24 = {
    name: "main",
    options,
    children() {
      const obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          if (closure_1_15) {
            str = "default";
          }
          const merged = Object.assign(animation(homeIndicatorStore[34]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [v65535(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), ];
      let animation;
      if (accessibilityNativeStackOptions != null) {
        animation = accessibilityNativeStackOptions.animation;
      }
      if (animation == null) {
        animation = first;
      }
      if (animation === undefined) {
        animation = closure_7.animation;
      }
      const obj3 = { children: null };
      items[1] = v65535(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: animation(1628).KeyboardTypes.SYSTEM };
              animation(1500).setKeyboardType(obj2);
              const tmpResult = animation(1500);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(5195);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(5747).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            const obj4 = closure_1_1(5747);
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(9733).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(9733).getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          obj.animation = animation;
          return obj;
        },
        getComponent: getChannelComponent
      });
      obj.children = items;
      const items1 = [closure_2_11(closure_17.Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      obj3.children = items1;
      return closure_2_11(__initData, obj3);
    }
  };
  const tmpResult5 = first(homeIndicatorStore[40]);
}) : (function StackNavigator() {
  let tmp = closure_14();
  _require = tmp;
  const screenReaderEnabled = require("MainShared").useScreenReaderEnabled();
  let obj = require("MainShared");
  const appKeyCommands = require("MainShared").useAppKeyCommands();
  stateFromStores(first[36])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(closure_7.animation);
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[39])().isChatBesideChannelList;
  let obj4 = require("HomeIndicator");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: null };
    let obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: null };
    const tmp4 = StartupProfilerDefault;
    const tmp7 = VisualEffectViewTargetDefault;
    const tmp8 = LaunchPadContainerDefault;
    let tmpResult = null;
    const tmp9 = ParentalConsentWarningBannerDefault;
    if (stateFromStores) {
      tmpResult = v65535(closure_21, {});
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
      v65535(closure_16.Screen, {
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
              const merged = Object.assign(animation(9733).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(animation2);
              return { orientation: str, headerShown: false };
            },
            children: null
          };
          const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options }), ];
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
                  const obj2 = { type: animation(1628).KeyboardTypes.SYSTEM };
                  animation(1500).setKeyboardType(obj2);
                  const tmpResult = animation(1500);
                }
                data = data.data;
                let type;
                if (data != null) {
                  const action = data.action;
                  if (action != null) {
                    type = action.type;
                  }
                }
                obj = animation(5195);
                if ("GO_BACK" === type) {
                  let SWIPE = constants2.BACK_BUTTON;
                } else {
                  SWIPE = constants2.SWIPE;
                }
                closure_1_1(5747).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
                const obj4 = closure_1_1(5747);
              }
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(9733).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(9733).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2
          });
          obj.children = items;
          const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[41]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj3.children = items1;
          return closure_2_11(closure_2_12, obj3);
        }
      }),
      v65535(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      v65535(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(10065)();
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
    ,
    ,

    ];
    const obj8 = {
      name: "channel-secondary-view-chat",
      getComponent: getChannelSecondaryViewChatComponent,
      options() {
        return stateFromStores(10065)();
      },
      listeners: { beforeRemove: resetChatKeyboard }
    };
    items1[3] = v65535(closure_16.Screen, obj8);
    items1[4] = v65535(closure_16.Screen, { name: "auth", getComponent: getAuthComponent, options });
    const obj11 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj11.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[5] = v65535(closure_16.Screen, obj11);
    items1[6] = v65535(closure_16.Screen, { name: "orbs-arcade-game", getComponent: getOrbsArcadeGameComponent, options: { presentation: "fullScreenModal", animation: "slide_from_bottom", gestureEnabled: false, orientation: "portrait" } });
    items1[7] = v65535(closure_16.Screen, {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[42]);
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
        const merged = Object.assign(stateFromStores(10065)({ presentation: str }));
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
    const obj10 = { name: "auth", getComponent: getAuthComponent, options };
    const obj12 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj13 = { name: "orbs-arcade-game", getComponent: getOrbsArcadeGameComponent, options: { presentation: "fullScreenModal", animation: "slide_from_bottom", gestureEnabled: false, orientation: "portrait" } };
    const obj14 = {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[42]);
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
            const merged = Object.assign(animation(9733).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(animation2);
            return { orientation: str, headerShown: false };
          },
          children: null
        };
        const items = [closure_2_10(Screen.Screen, { name: "tabs", getComponent, options }), ];
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
                const obj2 = { type: animation(1628).KeyboardTypes.SYSTEM };
                animation(1500).setKeyboardType(obj2);
                const tmpResult = animation(1500);
              }
              data = data.data;
              let type;
              if (data != null) {
                const action = data.action;
                if (action != null) {
                  type = action.type;
                }
              }
              obj = animation(5195);
              if ("GO_BACK" === type) {
                let SWIPE = constants2.BACK_BUTTON;
              } else {
                SWIPE = constants2.SWIPE;
              }
              closure_1_1(5747).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              const obj4 = closure_1_1(5747);
            }
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(9733).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(9733).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[41]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj3.children = items1;
        return closure_2_11(closure_2_12, obj3);
      }
    };
    const obj6 = { name: "search", getComponent: getSearchComponent };
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(10065)();
      }
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
    items1[8] = v65535(closure_16.Screen, obj15);
    items1[9] = v65535(closure_16.Screen, {
      name: "settings",
      options() {
        const tmp = stateFromStores(10065);
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
    items1[10] = v65535(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10065)({ lockOrientation: false });
      }
    });
    const obj19 = {
      name: "settings",
      options() {
        const tmp = stateFromStores(10065);
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
    const obj20 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10065)({ lockOrientation: false });
      }
    };
    tmp5Result = PlatformUtils2;
    items1[11] = v65535(closure_16.Screen, { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent });
    const obj21 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[12] = v65535(closure_16.Screen, { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent });
    const obj23 = { name: "conjure", options: null, getComponent: null };
    const obj24 = {};
    let merged1 = Object.assign(animation2);
    obj24.gestureEnabled = true;
    obj23.options = obj24;
    obj23.getComponent = getConjureHomeComponent;
    items1[13] = v65535(closure_16.Screen, obj23);
    items1[14] = v65535(closure_16.Screen, {
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
        const merged = Object.assign(stateFromStores(10065)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    });
    obj4.children = items1;
    obj3.children = closure_2_11(closure_16.Navigator, obj4);
    items[1] = v65535(tmp2Result, obj3);
    obj18.children = items;
    obj17.children = closure_2_11(tmp10, obj18);
    obj16.children = v65535(tmp9, obj17);
    const items2 = [v65535(tmp8, obj16), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj2.children = items2;
    obj.children = closure_2_11(tmp7, obj2);
    return v65535(tmp4, obj);
  }, items1);
}));
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };