// discord_app/modules/main_tabs_v2/native/MainNavigator.tsx
import PlatformUtils2 from "../../../utils/PlatformUtils.tsx";
import GlobalStatusIndicatorDefault from "../../connectivity/native/components/GlobalStatusIndicator.tsx";
import getNavigationModalPresentationDefault from "utils/getNavigationModalPresentation.tsx";
import StartupProfiler from "../../app_startup/StartupProfiler.tsx";
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
let animation = fn(15941).StackNavigationAnimationSettings;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(4539).getSystemVersionMajor() <= 15;
  let obj4 = fn(4539);
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
        let obj = animation(4425);
        if (null != obj.getBestActiveInput()) {
          obj = { type: tmp(1609).KeyboardTypes.SYSTEM };
          tmp(1481).setKeyboardType(obj);
          const tmpResult = tmp(1481);
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
        closure_1_1(4740).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
      },
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(7863).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(7863).getDefaultChannelStackHeaderProps(navigation, route));
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
  const tmp = closure_14();
  _require = tmp;
  const screenReaderEnabled = require("MainShared").useScreenReaderEnabled();
  let obj = require("MainShared");
  const appKeyCommands = require("MainShared").useAppKeyCommands();
  stateFromStores(first[32])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => null != accessibilityNativeStackOptions.getSessionId(),
  );
  const tmp6 = _slicedToArray(homeIndicatorStore.useState(isMemberVerificationRouteDeprecated.animation), 2);
  first = tmp6[0];
  _slicedToArray = tmp6[1];
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore(
    (autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator,
  );
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
  let obj4 = require("HomeIndicator");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  let obj5 = require("Navigator");
  isMemberVerificationRouteDeprecated =
    require("MemberVerificationRouteExperiment").useIsMemberVerificationRouteDeprecated("MainNavigator");
  let items1 = [
    tmp,
    stateFromStores,
    homeIndicatorStore,
    accessibilityNativeStackOptions,
    first,
    isChatBesideChannelList,
    isMemberVerificationRouteDeprecated,
  ];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: null };
    obj = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: null };
    const tmp4 = StartupProfilerDefault;
    const tmp7 = VisualEffectViewTargetDefault;
    const tmp8 = LaunchPadContainerDefault;
    let tmpResult = null;
    const tmp9 = ParentalConsentWarningBannerDefault;
    if (stateFromStores) {
      tmpResult = tmp(WrappedAutoAnalytics, {});
    }
    let items = [tmpResult];
    obj = { profile: null, children: null };
    const tmp10 = GlobalStatusIndicatorDefault;
    obj.profile = StartupProfiler.Profiles.StackNavigator;
    let obj1 = {
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
              const merged = Object.assign(animation(7863).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(animation2);
              return { orientation: str, headerShown: false };
            },
            children: null,
          };
          obj = { name: "tabs", getComponent, options };
          const items = [closure_2_10(Screen.Screen, obj), ,];
          let tmp4Result = null;
          if (!animation2) {
            obj = {
              name: "member-verification",
              getId(params) {
                return params.params.guildId;
              },
              getComponent: getComponent3,
              options: { presentation: "transparentModal", animation: "slide_from_bottom" },
            };
            tmp4Result = tmp4(tmp3.Screen, obj);
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
          const obj1 = { children: null };
          items[2] = closure_2_10(Screen.Screen, {
            name: "channel",
            getId(params) {
              return params.params.screenKey;
            },
            listeners: {
              beforeRemove(data) {
                let obj = animation(4425);
                if (null != obj.getBestActiveInput()) {
                  obj = { type: tmp(1609).KeyboardTypes.SYSTEM };
                  tmp(1481).setKeyboardType(obj);
                  const tmpResult = tmp(1481);
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
                closure_1_1(4740).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              },
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(7863).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(7863).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2,
          });
          obj.children = items;
          const items1 = [
            closure_2_11(Screen.Navigator, obj),
            closure_0(first[43]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO,
          ];
          obj1.children = items1;
          return closure_2_11(closure_2_12, obj1);
        },
      }),
      closure_2_10(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      closure_2_10(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(10925)();
        },
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
    const obj6 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj6.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = closure_2_10(closure_16.Screen, obj6);
    items1[5] = closure_2_10(closure_16.Screen, {
      name: "you",
      options() {
        let obj = closure_0(first[9]);
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        } else {
          let tmp3Result = tmp3(tmp[8]);
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj = { presentation: "transparentModal" };
            }
          }
        }
        obj = {};
        const merged = Object.assign(stateFromStores(first[44])(obj));
        tmp3Result = tmp3(tmp[8]);
        let obj1;
        if (tmp3Result.isAndroid()) {
          if (isChatBesideChannelList) {
            obj1 = { backgroundColor: "transparent" };
          }
        }
        obj.contentStyle = obj1;
        obj.animation = "slide_from_bottom";
        return obj;
      },
      getComponent: getYouComponent,
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
        const merged = Object.assign(stateFromStores(10925)({ presentation: str }));
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
    const obj2 = {
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
            const merged = Object.assign(animation(7863).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(animation2);
            return { orientation: str, headerShown: false };
          },
          children: null,
        };
        obj = { name: "tabs", getComponent, options };
        const items = [closure_2_10(Screen.Screen, obj), ,];
        let tmp4Result = null;
        if (!animation2) {
          obj = {
            name: "member-verification",
            getId(params) {
              return params.params.guildId;
            },
            getComponent: getComponent3,
            options: { presentation: "transparentModal", animation: "slide_from_bottom" },
          };
          tmp4Result = tmp4(tmp3.Screen, obj);
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
        const obj1 = { children: null };
        items[2] = closure_2_10(Screen.Screen, {
          name: "channel",
          getId(params) {
            return params.params.screenKey;
          },
          listeners: {
            beforeRemove(data) {
              let obj = animation(4425);
              if (null != obj.getBestActiveInput()) {
                obj = { type: tmp(1609).KeyboardTypes.SYSTEM };
                tmp(1481).setKeyboardType(obj);
                const tmpResult = tmp(1481);
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
              closure_1_1(4740).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            },
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(7863).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(7863).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2,
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen.Navigator, obj), closure_0(first[43]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj1.children = items1;
        return closure_2_11(closure_2_12, obj1);
      },
    };
    const obj3 = { name: "search", getComponent: getSearchComponent };
    const obj4 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(10925)();
      },
    };
    const obj5 = { name: "auth", getComponent: getAuthComponent, options };
    const obj7 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj8 = {
      name: "you",
      options() {
        let obj = closure_0(first[9]);
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        } else {
          let tmp3Result = tmp3(tmp[8]);
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj = { presentation: "transparentModal" };
            }
          }
        }
        obj = {};
        const merged = Object.assign(stateFromStores(first[44])(obj));
        tmp3Result = tmp3(tmp[8]);
        let obj1;
        if (tmp3Result.isAndroid()) {
          if (isChatBesideChannelList) {
            obj1 = { backgroundColor: "transparent" };
          }
        }
        obj.contentStyle = obj1;
        obj.animation = "slide_from_bottom";
        return obj;
      },
      getComponent: getYouComponent,
    };
    const tmp2Result = StartupProfilerDefault;
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(
          () => closure_1_3(animation2.animation),
          isMemberVerificationRouteDeprecated.duration,
        );
      };
    }
    const obj10 = { children: null };
    const obj11 = { children: null };
    const obj12 = { children: null };
    obj9.listeners = { beforeRemove: fn };
    obj9.getComponent = getFriendsNavigatorComponent;
    items1[6] = closure_2_10(closure_16.Screen, obj9);
    items1[7] = closure_2_10(closure_16.Screen, {
      name: "settings",
      options() {
        styles(4539);
        let obj;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(stateFromStores(10925)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: getSettingsComponent,
    });
    items1[8] = closure_2_10(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10925)({ lockOrientation: false });
      },
    });
    const obj13 = {
      name: "settings",
      options() {
        styles(4539);
        let obj;
        if (obj.isIpadOS()) {
          obj = { presentation: "modal" };
        }
        obj = {};
        const merged = Object.assign(stateFromStores(10925)(obj));
        obj.animation = "slide_from_bottom";
        obj.fullScreenGestureEnabled = true;
        return obj;
      },
      getComponent: getSettingsComponent,
    };
    const obj14 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(10925)({ lockOrientation: false });
      },
    };
    tmp5Result = PlatformUtils2;
    items1[9] = closure_2_10(closure_16.Screen, {
      name: "message-requests",
      options: getNavigationModalPresentationDefault(),
      getComponent: getMessageRequestsComponent,
    });
    const obj15 = {
      name: "message-requests",
      options: getNavigationModalPresentationDefault(),
      getComponent: getMessageRequestsComponent,
    };
    items1[10] = closure_2_10(closure_16.Screen, {
      name: "context-menu-commands",
      options: getNavigationModalPresentationDefault(),
      getComponent: getContextMenuCommandNavigatorComponent,
    });
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
        const merged = Object.assign(stateFromStores(10925)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent,
    });
    obj1.children = items1;
    obj.children = closure_2_11(closure_16.Navigator, obj1);
    items[1] = closure_2_10(tmp2Result, obj);
    obj12.children = items;
    obj11.children = closure_2_11(tmp10, obj12);
    obj10.children = closure_2_10(tmp9, obj11);
    const items2 = [
      closure_2_10(tmp8, obj10),
      AppComponents.APP_EXTRA_COMPONENTS,
      AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE,
      AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP,
    ];
    obj.children = items2;
    obj.children = closure_2_11(tmp7, obj);
    return closure_2_10(tmp4, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
