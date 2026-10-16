// === Module 16995: MainNavigator ===

// Module 16995 (MainNavigator)
import c from "c" /* 576 */;
import PlatformUtils2 from "PlatformUtils" /* 1384 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9870 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 11343 */;
import StartupProfiler from "StartupProfiler" /* 12740 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 14986 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 16997 */;
import AutoAnalytics from "AutoAnalytics" /* 17825 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 17872 */;
import AppComponents from "AppComponents" /* 18060 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 18305 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 18336 */;
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
function getAccountStanding() {
  return require("SuspendedUserPage").default;
}
const View = fn(17).View;
let closure_7 = fn(16996).StackNavigationAnimationSettings;
const Constants = fn(1087);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(5154);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1384);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(5130).getSystemVersionMajor() <= 15;
  let obj4 = fn(5130);
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
    const tmp8 = collapsed(first.default, {});
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function WrappedAutoAnalytics() {
  return collapsed(AutoAnalytics.default, {});
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
          const obj2 = { type: animation(1631).KeyboardTypes.SYSTEM };
          animation(1503).setKeyboardType(obj2);
          const tmpResult = animation(1503);
        }
        data = data.data;
        let type;
        if (data != null) {
          const action = data.action;
          if (action != null) {
            type = action.type;
          }
        }
        obj = animation(5044);
        if ("GO_BACK" === type) {
          let SWIPE = constants2.BACK_BUTTON;
        } else {
          SWIPE = constants2.SWIPE;
        }
        closure_1_1(5169).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
        const obj4 = closure_1_1(5169);
      }
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(9535).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(9535).getDefaultChannelStackHeaderProps(navigation, route));
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
  const cResult = first(homeIndicatorStore[15]).c(33);
  closure_14();
  let obj = first(homeIndicatorStore[15]);
  const screenReaderEnabled = first(homeIndicatorStore[33]).useScreenReaderEnabled();
  let obj2 = first(homeIndicatorStore[33]);
  const appKeyCommands = first(homeIndicatorStore[33]).useAppKeyCommands();
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
  let obj3 = first(homeIndicatorStore[33]);
  const stateFromStores = first(homeIndicatorStore[35]).useStateFromStores(tmp9, tmp10);
  const tmp13 = isChatBesideChannelList(accessibilityNativeStackOptions.useState(closure_7.animation), 2);
  first = tmp13[0];
  importDefault = tmp13[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(autoHideHomeIndicator) {
      return autoHideHomeIndicator.autoHideHomeIndicator;
    };
    cResult[2] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[2];
  }
  const tmpResult = first(homeIndicatorStore[35]);
  homeIndicatorStore = first(homeIndicatorStore[36]).useHomeIndicatorStore(tmp15);
  isChatBesideChannelList = tmp7(tmp2[37])().isChatBesideChannelList;
  const tmpResult4 = first(homeIndicatorStore[36]);
  accessibilityNativeStackOptions = first(homeIndicatorStore[38]).useAccessibilityNativeStackOptions();
  if (cResult[3] !== stateFromStores) {
    let tmp19 = null;
    if (stateFromStores) {
      tmp19 = closure_10(closure_21, {});
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp19;
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
      const tmp28 = closure_10(closure_16.Screen, obj4);
      cResult[10] = tmp28;
      const tmp25 = tmp28;
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
              return closure_1(homeIndicatorStore[40])();
            }
      };
      const tmp32 = closure_10(closure_16.Screen, obj5);
      cResult[11] = tmp32;
      const tmp29 = tmp32;
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
              return closure_1(homeIndicatorStore[40])();
            }
      };
      const tmp37 = closure_10(closure_16.Screen, obj6);
      const obj7 = { name: "auth", getComponent: getAuthComponent, options };
      const tmp40 = closure_10(closure_16.Screen, obj7);
      cResult[12] = tmp37;
      cResult[13] = tmp40;
      let tmp34 = tmp40;
      const tmp33 = tmp37;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      tmp34 = cResult[13];
    }
    const _Symbol4 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj8 = { name: "account-standing", getComponent: getAccountStanding, options: null };
      const obj9 = { presentation: "fullScreenModal", gestureEnabled: false };
      let merged = Object.assign(options);
      obj8.options = obj9;
      const tmp47 = closure_10(closure_16.Screen, obj8);
      cResult[14] = tmp47;
      const tmp41 = tmp47;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    if (cResult[15] !== isChatBesideChannelList) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj10 = {
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
      const tmp51 = closure_10(closure_16.Screen, obj10);
      cResult[15] = isChatBesideChannelList;
      cResult[16] = tmp51;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
      const obj11 = {
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
              const merged = Object.assign(closure_1(homeIndicatorStore[40])({ presentation: str }));
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
      const obj12 = { beforeRemove: undefined };
      obj11.listeners = obj12;
      obj11.getComponent = getFriendsNavigatorComponent;
      const tmp53Result = closure_10(closure_16.Screen, obj11);
      cResult[17] = tmp53Result;
      const tmp52 = tmp53Result;
      tmpResult6 = tmp(tmp2[8]);
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
        name: "settings",
        options() {
              const tmp = closure_1(homeIndicatorStore[40]);
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
      const tmp60 = closure_10(closure_16.Screen, obj13);
      cResult[18] = tmp60;
      const tmp57 = tmp60;
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
      const obj14 = {
        name: "sidebar",
        getComponent: getChannelDetailsComponent,
        options() {
              return closure_1(homeIndicatorStore[40])({ lockOrientation: false });
            }
      };
      const tmp64 = closure_10(closure_16.Screen, obj14);
      cResult[19] = tmp64;
      const tmp61 = tmp64;
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
      const obj15 = { name: "message-requests", options: tmp7(tmp2[40])(), getComponent: getMessageRequestsComponent };
      const tmp68 = closure_10(closure_16.Screen, obj15);
      cResult[20] = tmp68;
      const tmp65 = tmp68;
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
      const obj16 = { name: "context-menu-commands", options: tmp7(tmp2[40])(), getComponent: getContextMenuCommandNavigatorComponent };
      const tmp72 = closure_10(closure_16.Screen, obj16);
      cResult[21] = tmp72;
      const tmp69 = tmp72;
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
      const obj17 = {
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
              const merged = Object.assign(closure_1(homeIndicatorStore[40])({ presentation: str2 }));
              return obj;
            },
        getComponent: getModalComponent
      };
      const tmp76 = closure_10(closure_16.Screen, obj17);
      cResult[22] = tmp76;
      const tmp73 = tmp76;
    } else {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    if (cResult[23] === tmp48) {
      class R {
        constructor() {
          obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
          return obj;
        }
      }
    }
    const obj18 = { profile: tmp(tmp2[41]).Profiles.StackNavigator, children: null };
    const obj19 = { id: "root", screenOptions: R, children: null };
    let items1 = [tmp23, tmp25, tmp29, tmp33, tmp34, tmp41, tmp48, tmp52, tmp57, tmp61, tmp65, tmp69, tmp73];
    obj19.children = items1;
    obj18.children = closure_11(closure_16.Navigator, obj19);
    const tmp82 = closure_10(tmp7(tmp2[41]), obj18);
    cResult[23] = tmp48;
    cResult[24] = R;
    cResult[25] = tmp23;
    cResult[26] = tmp82;
    const tmp7Result = tmp7(tmp2[41]);
  }
  const tmp24 = closure_10(closure_16.Screen, {
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
          const merged = Object.assign(animation(homeIndicatorStore[32]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [collapsed(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), ];
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
      items[1] = collapsed(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: animation(1631).KeyboardTypes.SYSTEM };
              animation(1503).setKeyboardType(obj2);
              const tmpResult = animation(1503);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(5044);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(5169).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            const obj4 = closure_1_1(5169);
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(9535).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(9535).getDefaultChannelStackHeaderProps(navigation, route));
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
  cResult[9] = tmp24;
  const obj20 = {
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
          const merged = Object.assign(animation(homeIndicatorStore[32]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [collapsed(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), ];
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
      items[1] = collapsed(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: animation(1631).KeyboardTypes.SYSTEM };
              animation(1503).setKeyboardType(obj2);
              const tmpResult = animation(1503);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(5044);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(5169).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            const obj4 = closure_1_1(5169);
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(9535).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(9535).getDefaultChannelStackHeaderProps(navigation, route));
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
  const tmpResult5 = first(homeIndicatorStore[38]);
}) : (function StackNavigator() {
  let tmp = closure_14();
  _require = tmp;
  const screenReaderEnabled = require("MainShared").useScreenReaderEnabled();
  let obj = require("MainShared");
  const appKeyCommands = require("MainShared").useAppKeyCommands();
  stateFromStores(first[34])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(closure_7.animation);
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[37])().isChatBesideChannelList;
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
      tmpResult = collapsed(closure_21, {});
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
      collapsed(closure_16.Screen, {
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
              const merged = Object.assign(animation(9535).getDefaultStackHeaderProps(navigation.navigation));
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
                  const obj2 = { type: animation(1631).KeyboardTypes.SYSTEM };
                  animation(1503).setKeyboardType(obj2);
                  const tmpResult = animation(1503);
                }
                data = data.data;
                let type;
                if (data != null) {
                  const action = data.action;
                  if (action != null) {
                    type = action.type;
                  }
                }
                obj = animation(5044);
                if ("GO_BACK" === type) {
                  let SWIPE = constants2.BACK_BUTTON;
                } else {
                  SWIPE = constants2.SWIPE;
                }
                closure_1_1(5169).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
                const obj4 = closure_1_1(5169);
              }
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(9535).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(9535).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2
          });
          obj.children = items;
          const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[39]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj3.children = items1;
          return closure_2_11(closure_2_12, obj3);
        }
      }),
      collapsed(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      collapsed(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(9870)();
        }
      }),
      collapsed(closure_16.Screen, {
        name: "channel-secondary-view-chat",
        getComponent: getChannelSecondaryViewChatComponent,
        options() {
          return stateFromStores(9870)();
        }
      }),
      collapsed(closure_16.Screen, { name: "auth", getComponent: getAuthComponent, options }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj10 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj10.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[5] = collapsed(closure_16.Screen, obj10);
    items1[6] = collapsed(closure_16.Screen, {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[40]);
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
        const merged = Object.assign(stateFromStores(9870)({ presentation: str }));
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
    const obj11 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj12 = {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[40]);
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
            const merged = Object.assign(animation(9535).getDefaultStackHeaderProps(navigation.navigation));
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
                const obj2 = { type: animation(1631).KeyboardTypes.SYSTEM };
                animation(1503).setKeyboardType(obj2);
                const tmpResult = animation(1503);
              }
              data = data.data;
              let type;
              if (data != null) {
                const action = data.action;
                if (action != null) {
                  type = action.type;
                }
              }
              obj = animation(5044);
              if ("GO_BACK" === type) {
                let SWIPE = constants2.BACK_BUTTON;
              } else {
                SWIPE = constants2.SWIPE;
              }
              closure_1_1(5169).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              const obj4 = closure_1_1(5169);
            }
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(9535).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(9535).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[39]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj3.children = items1;
        return closure_2_11(closure_2_12, obj3);
      }
    };
    const obj6 = { name: "search", getComponent: getSearchComponent };
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(9870)();
      }
    };
    const obj8 = {
      name: "channel-secondary-view-chat",
      getComponent: getChannelSecondaryViewChatComponent,
      options() {
        return stateFromStores(9870)();
      }
    };
    const obj9 = { name: "auth", getComponent: getAuthComponent, options };
    const tmp2Result = StartupProfilerDefault;
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), closure_2_7.duration);
      };
    }
    const obj14 = { children: null };
    const obj15 = { children: null };
    const obj16 = { children: null };
    obj13.listeners = { beforeRemove: fn };
    obj13.getComponent = getFriendsNavigatorComponent;
    items1[7] = collapsed(closure_16.Screen, obj13);
    items1[8] = collapsed(closure_16.Screen, {
      name: "settings",
      options() {
        const tmp = stateFromStores(9870);
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
    items1[9] = collapsed(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(9870)({ lockOrientation: false });
      }
    });
    const obj17 = {
      name: "settings",
      options() {
        const tmp = stateFromStores(9870);
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
    const obj18 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(9870)({ lockOrientation: false });
      }
    };
    tmp5Result = PlatformUtils2;
    items1[10] = collapsed(closure_16.Screen, { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent });
    const obj19 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[11] = collapsed(closure_16.Screen, { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent });
    items1[12] = collapsed(closure_16.Screen, {
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
        const merged = Object.assign(stateFromStores(9870)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    });
    obj4.children = items1;
    obj3.children = closure_2_11(closure_16.Navigator, obj4);
    items[1] = collapsed(tmp2Result, obj3);
    obj16.children = items;
    obj15.children = closure_2_11(tmp10, obj16);
    obj14.children = collapsed(tmp9, obj15);
    const items2 = [collapsed(tmp8, obj14), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj2.children = items2;
    obj.children = closure_2_11(tmp7, obj2);
    return collapsed(tmp4, obj);
  }, items1);
}));
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };