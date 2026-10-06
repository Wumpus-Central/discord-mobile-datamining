// === Module 15900: MainNavigator ===

// Module 15900 (MainNavigator)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 9624 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10675 */;
import StartupProfiler from "StartupProfiler" /* 11584 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 14288 */;
import NavigationConstants from "NavigationConstants" /* 15901 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 15902 */;
import AutoAnalytics from "AutoAnalytics" /* 16943 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 16995 */;
import AppComponents from "AppComponents" /* 17174 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 17410 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 17441 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require, importDefault;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
function getId(params) {
  return params.params.screenKey;
}
function beforeRemove(data) {
  let SWIPE;
  const obj = closure_1_0(closure_1_2[27]);
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: closure_1_0(closure_1_2[29]).KeyboardTypes.SYSTEM };
    const setKeyboardType = closure_1_0(closure_1_2[28]).setKeyboardType;
    closure_1_0(closure_1_2[28]);
    setKeyboardType(obj2);
  }
  data = data.data;
  let type;
  if (data != null) {
    const action = data.action;
    if (action != null) {
      type = action.type;
    }
  }
  const trackWithMetadata = closure_1_1(closure_1_2[30]).trackWithMetadata;
  const CHANNEL_BACK_NAVIGATED = constants.CHANNEL_BACK_NAVIGATED;
  closure_1_1(closure_1_2[30]);
  if ("GO_BACK" === type) {
    SWIPE = constants2.BACK_BUTTON;
  } else {
    SWIPE = constants2.SWIPE;
  }
  trackWithMetadata(CHANNEL_BACK_NAVIGATED, { source: SWIPE });
}
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
const View = react_native.View;
let closure_7 = NavigationConstants.StackNavigationAnimationSettings;
({ AnalyticEvents: metroImportAll, DrawerSourceTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const mainNavigator = "mainNavigator";
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  const _module4 = DeviceUtils;
  PlatformUtils = _module4.getSystemVersionMajor() <= 15;
}
let closure_16 = createAccessibleNativeStackNavigatorDefault();
let Screen = createChatPanelNativeStackNavigatorDefault();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AutoAnalytics;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  const _default = first.default;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = authStore(_default, {});
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => authStore(AutoAnalytics.default, {}));
const options = Object.freeze({ animation: "none" });
ReactCompilerGating = ReactCompilerGating_mod;
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  const obj = {
    name: "channel",
    getId,
    listeners: { beforeRemove },
    options(arg0) {
      let route;
      ({ navigation, route } = arg0);
      const obj = { headerShown: true, header: closure_2_0(closure_2_2[31]).renderHeader, animation };
      const obj2 = closure_2_0(closure_2_2[31]);
      const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      return obj;
    },
    getComponent: getChannelComponent
  };
  return closure_10(Screen.Screen, obj);
}
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityNativeStackOptions;
  let closure_1;
  let first;
  let homeIndicatorStore;
  let isChatBesideChannelList;
  let items1;
  let obj11;
  let obj18;
  let obj8;
  let sessionId;
  let tmp10;
  let tmp15;
  let tmp9;
  let tmp = first;
  let tmp2 = homeIndicatorStore;
  let obj = first(homeIndicatorStore[15]);
  const cResult = obj.c(32);
  closure_14();
  let obj2 = first(homeIndicatorStore[32]);
  const screenReaderEnabled = obj2.useScreenReaderEnabled();
  let obj3 = first(homeIndicatorStore[32]);
  const appKeyCommands = obj3.useAppKeyCommands();
  require("useNativeThemeUpdater")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function l() {
      return null != sessionId.getSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[34]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  const tmp13 = isChatBesideChannelList(accessibilityNativeStackOptions.useState(closure_7.animation), 2);
  first = tmp13[0];
  importDefault = tmp13[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(autoHideHomeIndicator) {
      return autoHideHomeIndicator.autoHideHomeIndicator;
    };
    cResult[2] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[2];
  }
  const tmpResult4 = tmp(tmp2[35]);
  homeIndicatorStore = tmpResult4.useHomeIndicatorStore(tmp15);
  isChatBesideChannelList = tmp7(tmp2[36])().isChatBesideChannelList;
  const tmpResult5 = tmp(tmp2[37]);
  accessibilityNativeStackOptions = tmpResult5.useAccessibilityNativeStackOptions();
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
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
    cResult[5] = homeIndicatorStore;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  const tmp23 = cResult[7];
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  if (tmp23 === undefined) {
    let tmp26;
    let tmp31;
    let tmp30;
    let tmp38;
    let tmp49;
    let tmp54;
    let tmp58;
    let tmp62;
    let tmp66;
    let tmp70;
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      let obj4 = { name: "search", getComponent: getSearchComponent };
      const tmp29 = closure_10(closure_16.Screen, obj4);
      cResult[10] = tmp29;
      tmp26 = tmp29;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj5 = {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
              return closure_1(homeIndicatorStore[39])();
            }
      };
      const tmp34 = closure_10(closure_16.Screen, obj5);
      const obj6 = { name: "auth", getComponent: getAuthComponent, options };
      const tmp37 = closure_10(closure_16.Screen, obj6);
      cResult[11] = tmp34;
      cResult[12] = tmp37;
      tmp31 = tmp37;
      tmp30 = tmp34;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      tmp31 = cResult[12];
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj7 = { name: "account-standing", getComponent: getAccountStanding, options: obj8 };
      Screen = closure_16.Screen;
      obj8 = { presentation: "fullScreenModal", gestureEnabled: false };
      let merged = Object.assign(options);
      const tmp44 = closure_10(Screen, obj7);
      cResult[13] = tmp44;
      tmp38 = tmp44;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    if (cResult[14] !== isChatBesideChannelList) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj9 = {
        name: "you",
        options() {
              let obj2;
              let obj4;
              const tmp2 = getNavigationModalPresentationDefault;
              const obj = DeviceUtils;
              if (obj.isIpadOS()) {
                obj2 = { presentation: "modal" };
              } else {
                const tmp3Result = PlatformUtils;
                if (tmp3Result.isAndroid()) {
                  if (isChatBesideChannelList) {
                    obj2 = { presentation: "transparentModal" };
                  }
                }
              }
              const obj3 = { contentStyle: obj4, animation: "slide_from_bottom" };
              const merged = Object.assign(tmp2(obj2));
              obj4 = undefined;
              const tmp3Result2 = PlatformUtils;
              if (tmp3Result2.isAndroid()) {
                if (isChatBesideChannelList) {
                  obj4 = { backgroundColor: "transparent" };
                }
              }
              return obj3;
            },
        getComponent: getYouComponent
      };
      cResult[14] = isChatBesideChannelList;
      cResult[15] = closure_10(closure_16.Screen, obj9);
      const tmp48 = closure_10(closure_16.Screen, obj9);
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen2 = closure_16.Screen;
      const obj10 = {
        name: "friends",
        options(route) {
              let presentation;
              route = route.route;
              const params = route.params;
              let str;
              const tmp = closure_1(homeIndicatorStore[39]);
              if (params != null) {
                const params2 = params.params;
                if (params2 != null) {
                  str = params2.presentation;
                }
              }
              if (str == null) {
                str = "modal";
              }
              const obj = { fullScreenGestureEnabled: "card" === presentation };
              const merged = Object.assign(tmp({ presentation: str }));
              const params3 = route.params;
              presentation = undefined;
              if (params3 != null) {
                const params4 = params3.params;
                if (params4 != null) {
                  presentation = params4.presentation;
                }
              }
              return obj;
            },
        listeners: obj11,
        getComponent: getFriendsNavigatorComponent
      };
      const tmpResult6 = tmp(tmp2[8]);
      if (!tmpResult6.isAndroid()) {
        class R {
          constructor() {
            return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
          }
        }
      }
      obj11 = { beforeRemove: undefined };
      const tmp50Result = closure_10(Screen2, obj10);
      cResult[16] = tmp50Result;
      tmp49 = tmp50Result;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj12 = {
        name: "settings",
        options() {
              let obj2;
              const tmp = closure_1(homeIndicatorStore[39]);
              const obj = first(homeIndicatorStore[9]);
              if (obj.isIpadOS()) {
                obj2 = { presentation: "modal" };
              }
              const obj3 = { animation: "slide_from_bottom", fullScreenGestureEnabled: true };
              const merged = Object.assign(tmp(obj2));
              return obj3;
            },
        getComponent: getSettingsComponent
      };
      const tmp57 = closure_10(closure_16.Screen, obj12);
      cResult[17] = tmp57;
      tmp54 = tmp57;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj13 = {
        name: "sidebar",
        getComponent: getChannelDetailsComponent,
        options() {
              return closure_1(homeIndicatorStore[39])({ lockOrientation: false });
            }
      };
      const tmp61 = closure_10(closure_16.Screen, obj13);
      cResult[18] = tmp61;
      tmp58 = tmp61;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen3 = closure_16.Screen;
      const obj14 = { name: "message-requests", options: require("getNavigationModalPresentation")(), getComponent: getMessageRequestsComponent };
      const tmp65 = closure_10(Screen3, obj14);
      cResult[19] = tmp65;
      tmp62 = tmp65;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen4 = closure_16.Screen;
      const obj15 = { name: "context-menu-commands", options: require("getNavigationModalPresentation")(), getComponent: getContextMenuCommandNavigatorComponent };
      const tmp69 = closure_10(Screen4, obj15);
      cResult[20] = tmp69;
      tmp66 = tmp69;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj16 = {
        name: "modal",
        getId(params) {
              return params.params.modal.key;
            },
        options(route) {
              let str;
              route = route.route;
              const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: str };
              str = route.params.animation;
              if (str == null) {
                str = "slide_from_bottom";
              }
              let str2 = "transparentModal";
              const tmp = closure_1(homeIndicatorStore[39]);
              if ("card" !== route.params.presentation) {
                let str3 = route.params.presentation;
                if (str3 == null) {
                  str3 = "transparentModal";
                }
                str2 = str3;
              }
              const merged = Object.assign(tmp({ presentation: str2 }));
              return obj;
            },
        getComponent: getModalComponent
      };
      const tmp73 = closure_10(closure_16.Screen, obj16);
      cResult[21] = tmp73;
      tmp70 = tmp73;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    if (cResult[22] === tmp45) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const obj17 = { profile: tmp(tmp2[40]).Profiles.StackNavigator, children: closure_11(closure_16.Navigator, obj18) };
    obj18 = { id: "root", screenOptions: R, children: items1 };
    items1 = [tmp24, tmp26, tmp30, tmp31, tmp38, tmp45, tmp49, tmp54, tmp58, tmp62, tmp66, tmp70];
    const tmp7Result = require("StartupProfiler");
    cResult[22] = tmp45;
    cResult[23] = R;
    cResult[24] = tmp24;
    cResult[25] = closure_10(tmp7Result, obj17);
    const tmp79 = closure_10(tmp7Result, obj17);
  }
  const obj19 = {
    name: "main",
    options,
    children() {
      let items;
      let items1;
      let obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          navigation = navigation.navigation;
          if (closure_1_15) {
            str = "default";
          }
          const obj = { orientation: str, headerShown: false };
          const obj2 = first(homeIndicatorStore[31]);
          const merged = Object.assign(obj2.getDefaultStackHeaderProps(navigation));
          const merged1 = Object.assign(closure_1_7);
          return obj;
        },
        children: items
      };
      let obj2 = { name: "tabs", getComponent: getTabsComponent, options };
      const Navigator = Screen.Navigator;
      items = [authStore(Screen.Screen, obj2), ];
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
      const obj3 = { children: items1 };
      const obj4 = {
        name: "channel",
        getId,
        listeners: { beforeRemove },
        options(arg0) {
          let route;
          ({ navigation, route } = arg0);
          const obj = { headerShown: true, header: closure_2_0(closure_2_2[31]).renderHeader, animation };
          const obj2 = closure_2_0(closure_2_2[31]);
          const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          return obj;
        },
        getComponent: getChannelComponent
      };
      items[1] = authStore(Screen.Screen, obj4);
      items1 = [unpackModuleId(Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      return unpackModuleId(closure_12, obj3);
    }
  };
  const tmp25 = closure_10(closure_16.Screen, obj19);
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = first;
  cResult[9] = tmp25;
}) : (() => {
  let accessibilityNativeStackOptions;
  let closure_3;
  let first;
  let getComponent;
  let getComponent2;
  let homeIndicatorStore;
  let stateFromStores;
  let styles;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("MainShared");
  const screenReaderEnabled = obj.useScreenReaderEnabled();
  let obj2 = require("MainShared");
  const appKeyCommands = obj2.useAppKeyCommands();
  let tmp4 = stateFromStores(first[33])();
  let obj3 = require("useStateFromStores");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = obj3.useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(closure_7.animation);
  let obj4 = require("HomeIndicator");
  homeIndicatorStore = obj4.useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[36])().isChatBesideChannelList;
  let obj5 = require("Navigator");
  accessibilityNativeStackOptions = obj5.useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let Navigator;
    let animation2;
    let autoHideHomeIndicator;
    let fn;
    let items1;
    let items2;
    let obj10;
    let obj14;
    let obj15;
    let obj2;
    let obj4;
    let tmp7;
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: unpackModuleId(tmp7, obj2) };
    obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: items2 };
    const tmp4 = StartupProfilerDefault;
    tmp7 = VisualEffectViewTargetDefault;
    let tmpResult = null;
    const tmp8 = LaunchPadContainerDefault;
    const tmp9 = ParentalConsentWarningBannerDefault;
    const tmp10 = GlobalStatusIndicatorDefault;
    if (stateFromStores) {
      tmpResult = authStore(closure_21, {});
    }
    let items = [tmpResult, ];
    let obj3 = { profile: StartupProfiler.Profiles.StackNavigator, children: unpackModuleId(Navigator, obj4) };
    obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator };
      },
      children: items1
    };
    Navigator = closure_16.Navigator;
    items1 = [, , , , , , , , , , , ];
    const obj5 = {
      name: "main",
      options,
      children() {
        let constants2;
        let items;
        let items1;
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            navigation = navigation.navigation;
            if (closure_1_15) {
              str = "default";
            }
            const obj = { orientation: str, headerShown: false };
            const obj2 = closure_1_0(closure_1_2[31]);
            const merged = Object.assign(obj2.getDefaultStackHeaderProps(navigation));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          children: items
        };
        let obj2 = { name: "tabs", getComponent, options };
        const Navigator = Screen.Navigator;
        items = [closure_2_10(Screen.Screen, obj2), ];
        animation = undefined;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = closure_1_2;
        }
        if (animation === undefined) {
          animation = closure_2_7.animation;
        }
        const obj3 = { children: items1 };
        const obj4 = {
          name: "channel",
          getId,
          listeners: { beforeRemove },
          options(arg0) {
            let route;
            ({ navigation, route } = arg0);
            const obj = { headerShown: true, header: closure_2_0(closure_2_2[31]).renderHeader, animation };
            const obj2 = closure_2_0(closure_2_2[31]);
            const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          getComponent: getComponent2
        };
        items[1] = closure_2_10(Screen.Screen, obj4);
        items1 = [closure_2_11(Navigator, obj), styles(first[38]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        return closure_2_11(closure_2_12, obj3);
      }
    };
    const tmp2Result = StartupProfilerDefault;
    items1[0] = authStore(closure_16.Screen, obj5);
    const obj6 = { name: "search", getComponent: getSearchComponent };
    items1[1] = authStore(closure_16.Screen, obj6);
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(first[39])();
      }
    };
    items1[2] = authStore(closure_16.Screen, obj7);
    const obj8 = { name: "auth", getComponent: getAuthComponent, options };
    items1[3] = authStore(closure_16.Screen, obj8);
    Screen = closure_16.Screen;
    const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: obj10 };
    obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
    let merged = Object.assign(options);
    items1[4] = authStore(Screen, obj9);
    const obj11 = {
      name: "you",
      options() {
        let obj2;
        let obj4;
        const tmp2 = stateFromStores(first[39]);
        const obj = styles(first[9]);
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        } else {
          const tmp3Result = styles(first[8]);
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
        }
        const obj3 = { contentStyle: obj4, animation: "slide_from_bottom" };
        const merged = Object.assign(tmp2(obj2));
        obj4 = undefined;
        const tmp3Result2 = styles(first[8]);
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        return obj3;
      },
      getComponent: getYouComponent
    };
    items1[5] = authStore(closure_16.Screen, obj11);
    const Screen2 = closure_16.Screen;
    const obj12 = {
      name: "friends",
      options(route) {
        let presentation;
        route = route.route;
        const params = route.params;
        let str;
        const tmp = stateFromStores(first[39]);
        if (params != null) {
          const params2 = params.params;
          if (params2 != null) {
            str = params2.presentation;
          }
        }
        if (str == null) {
          str = "modal";
        }
        const obj = { fullScreenGestureEnabled: "card" === presentation };
        const merged = Object.assign(tmp({ presentation: str }));
        const params3 = route.params;
        presentation = undefined;
        if (params3 != null) {
          const params4 = params3.params;
          if (params4 != null) {
            presentation = params4.presentation;
          }
        }
        return obj;
      },
      listeners: { beforeRemove: fn },
      getComponent: getFriendsNavigatorComponent
    };
    fn = undefined;
    const tmp5Result = PlatformUtils;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), closure_2_7.duration);
      };
    }
    const obj13 = { children: authStore(tmp9, obj14) };
    obj14 = { children: unpackModuleId(tmp10, obj15) };
    obj15 = { children: items };
    items1[6] = authStore(Screen2, obj12);
    const obj16 = {
      name: "settings",
      options() {
        let obj2;
        const tmp = stateFromStores(first[39]);
        const obj = styles(first[9]);
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = { animation: "slide_from_bottom", fullScreenGestureEnabled: true };
        const merged = Object.assign(tmp(obj2));
        return obj3;
      },
      getComponent: getSettingsComponent
    };
    items1[7] = authStore(closure_16.Screen, obj16);
    const obj17 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(first[39])({ lockOrientation: false });
      }
    };
    items1[8] = authStore(closure_16.Screen, obj17);
    const obj18 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[9] = authStore(closure_16.Screen, obj18);
    const obj19 = { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent };
    items1[10] = authStore(closure_16.Screen, obj19);
    const obj20 = {
      name: "modal",
      getId(params) {
        return params.params.modal.key;
      },
      options(route) {
        let str;
        route = route.route;
        const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: str };
        str = route.params.animation;
        if (str == null) {
          str = "slide_from_bottom";
        }
        let str2 = "transparentModal";
        const tmp = stateFromStores(first[39]);
        if ("card" !== route.params.presentation) {
          let str3 = route.params.presentation;
          if (str3 == null) {
            str3 = "transparentModal";
          }
          str2 = str3;
        }
        const merged = Object.assign(tmp({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    };
    items1[11] = authStore(closure_16.Screen, obj20);
    items[1] = authStore(tmp2Result, obj3);
    items2 = [authStore(tmp8, obj13), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    return authStore(tmp4, obj);
  }, items1);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };