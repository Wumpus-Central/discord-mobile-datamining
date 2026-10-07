// discord_app/modules/main_tabs_v2/native/friends/FriendsNavigator.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../client_themes/native/useColorThemeBackground.tsx";
import HeaderShared from "../shared_components/HeaderShared.tsx";
import PressableNavigatorButtonWrapperDefault from "../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";
import _modDef12276 from "../../../../../_runtime/metro/12276__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const NativeStackNavigator = fn(7568);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4896);
let obj3 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.header = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  shadowColor: "transparent",
};
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      const cResult = c.c(3);
      onPress = onPress.onPress;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["3D5yo/"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onPress) {
        const obj2 = { isModal: true, children: null };
        const obj3 = { source: _modDef12276, onPress, accessibilityLabel: first };
        obj2.children = React5(HeaderShared.HeaderIconButton, obj3);
        const tmp10 = React5(PressableNavigatorButtonWrapperDefault, obj2);
        cResult[1] = onPress;
        cResult[2] = tmp10;
        let tmp6 = tmp10;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (onPress) => {
      const obj = { isModal: true, children: null };
      const obj2 = { source: _modDef12276, onPress: onPress.onPress, accessibilityLabel: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t["3D5yo/"]);
      obj.children = React5(HeaderShared.HeaderIconButton, obj2);
      return React5(PressableNavigatorButtonWrapperDefault, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(18);
      const tmp4 = closure_10();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          return closure_0(6997).trackAppUIViewed();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
      let obj = require("c");
      const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
      if (cResult[2] === accessibilityNativeStackOptions) {
        if (cResult[3] === tmp4.header) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = {
            name: "root",
            options(navigation) {
              navigation = navigation.navigation;
              let obj = { title: null, headerRight: null };
              let intl = navigation(1126).intl;
              obj.title = intl.string(navigation(1126).t.TdEu5X);
              obj.headerRight = function headerRight(arg0) {
                const obj = {};
                const merged = Object.assign(arg0);
                const intl = navigation(1126).intl;
                obj.label = intl.string(navigation(1126).t.zIJnA6);
                obj.onPress = function onPress() {
                  return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
                };
                return closure_2_7(navigation(7509).HeaderTextButton, obj);
              };
              return obj;
            },
            getComponent() {
              return closure_0(16951).default;
            },
          };
          const tmp13 = closure_7(closure_9.Screen, obj2);
          cResult[5] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { name: "new-message", options: null, getComponent: null };
          const obj4 = { title: null };
          let intl = tmp(1126).intl;
          obj4.title = intl.string(tmp(1126).t.jD1qzM);
          obj3.options = obj4;
          obj3.getComponent = function getComponent() {
            return closure_0(16957).default;
          };
          const tmp17 = closure_7(closure_9.Screen, obj3);
          cResult[6] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { name: "gdm", options: null, getComponent: null };
          const obj6 = { title: null };
          const intl2 = tmp(1126).intl;
          obj6.title = intl2.string(tmp(1126).t["3hF1W4"]);
          obj5.options = obj6;
          obj5.getComponent = function getComponent() {
            return closure_0(16960).default;
          };
          const tmp21 = closure_7(closure_9.Screen, obj5);
          cResult[7] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[7];
        }
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { name: "add-friend", options: null, getComponent: null };
          const obj8 = { title: null };
          const intl3 = tmp(1126).intl;
          obj8.title = intl3.string(tmp(1126).t.w5uwoI);
          obj7.options = obj8;
          obj7.getComponent = function getComponent() {
            return closure_0(16961).default;
          };
          const tmp25 = closure_7(closure_9.Screen, obj7);
          cResult[8] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[8];
        }
        const _Symbol5 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = { name: "add-friends", options: null, getComponent: null };
          const obj10 = { title: null };
          const intl4 = tmp(1126).intl;
          obj10.title = intl4.string(tmp(1126).t.zIJnA6);
          obj9.options = obj10;
          obj9.getComponent = function getComponent() {
            return closure_0(16962).default;
          };
          const tmp29 = closure_7(closure_9.Screen, obj9);
          cResult[9] = tmp29;
          let tmp26 = tmp29;
        } else {
          tmp26 = cResult[9];
        }
        const _Symbol6 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj11 = { name: "username-search", options: null, getComponent: null };
          const obj12 = { title: null };
          const intl5 = tmp(1126).intl;
          obj12.title = intl5.string(tmp(1126).t.QzVsOs);
          obj11.options = obj12;
          obj11.getComponent = function getComponent() {
            return closure_0(16969).default;
          };
          const tmp33 = closure_7(closure_9.Screen, obj11);
          cResult[10] = tmp33;
          let tmp30 = tmp33;
        } else {
          tmp30 = cResult[10];
        }
        const _Symbol7 = Symbol;
        class C {
          constructor(arg0) {
            ({ navigation, route } = arg0);
            params = route.params;
            if (params != null) {
              presentation = params.presentation;
            }
            obj = {
              headerStyle: closure_0.header,
              headerShadowVisible: false,
              headerTitle(children) {
                const merged = Object.assign(closure_1_4(children, closure_1_3));
                return closure_1_7(closure_1_0(dependencyMap[11]).GenericHeaderTitle, { title: children.children });
              },
              headerTitleAlign: "center",
              headerLeft: null,
              fullScreenGestureEnabled: null,
            };
            if (navigation.getState().routes[0].key === route.key) {
              params2 = route.params;
              presentation1 = undefined;
              if (params2 != null) {
                presentation1 = params2.presentation;
              }
              str = "card";
              if ("card" !== presentation1) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj3 = closure_0(closure_2[11]);
                renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
              }
              obj.headerLeft = renderModalCloseImage;
              params3 = route.params;
              presentation2 = undefined;
              if (params3 != null) {
                presentation2 = params3.presentation;
              }
              str2 = "card";
              obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
              tmp6 = closure_1;
              tmp7 = obj;
              merged = Object.assign(closure_1);
              return obj;
            }
            obj2 = closure_0(closure_2[11]);
            renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
            return;
          }
        }
        if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = { name: "suggested-friends", options: null, getComponent: null };
          const obj14 = { title: null };
          const intl6 = tmp(1126).intl;
          obj14.title = intl6.string(tmp(1126).t["1uAmCw"]);
          obj13.options = obj14;
          obj13.getComponent = function getComponent() {
            return closure_0(16970).default;
          };
          const tmp38 = closure_7(closure_9.Screen, obj13);
          cResult[11] = tmp38;
          let tmp35 = tmp38;
        } else {
          tmp35 = cResult[11];
        }
        const _Symbol8 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj15 = { name: "requests-settings", options: null, getComponent: null };
          const obj16 = { title: null };
          const intl7 = tmp(1126).intl;
          obj16.title = intl7.string(tmp(1126).t.XT4hVl);
          obj15.options = obj16;
          obj15.getComponent = function getComponent() {
            return closure_0(16971).default;
          };
          const tmp42 = closure_7(closure_9.Screen, obj15);
          cResult[12] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[12];
        }
        const _Symbol9 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj17 = {
            name: "requests",
            options(navigation) {
              navigation = navigation.navigation;
              const obj = { title: null, headerRight: null };
              const intl = navigation(1126).intl;
              obj.title = intl.string(navigation(1126).t.fyA115);
              obj.headerRight = function headerRight() {
                return closure_2_7(closure_2_11, {
                  onPress() {
                    return navigation.navigate("requests-settings");
                  },
                });
              };
              return obj;
            },
            getComponent() {
              return closure_0(16973).default;
            },
          };
          const tmp46 = closure_7(closure_9.Screen, obj17);
          cResult[13] = tmp46;
          let tmp43 = tmp46;
        } else {
          tmp43 = cResult[13];
        }
        const _Symbol10 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj18 = { name: "spam-requests", options: null, getComponent: null };
          const obj19 = { title: null };
          const intl8 = tmp(1126).intl;
          obj19.title = intl8.string(tmp(1126).t.oHVeHc);
          obj18.options = obj19;
          obj18.getComponent = function getComponent() {
            return closure_0(16976).default;
          };
          const tmp50 = closure_7(closure_9.Screen, obj18);
          cResult[14] = tmp50;
          let tmp47 = tmp50;
        } else {
          tmp47 = cResult[14];
        }
        const _Symbol11 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj20 = { name: "ignored-user-requests", options: null, getComponent: null };
          const obj21 = { title: null };
          const intl9 = tmp(1126).intl;
          obj21.title = intl9.string(tmp(1126).t.tFY5Zb);
          obj20.options = obj21;
          obj20.getComponent = function getComponent() {
            return closure_0(16977).default;
          };
          const tmp54 = closure_7(closure_9.Screen, obj20);
          cResult[15] = tmp54;
          let tmp51 = tmp54;
        } else {
          tmp51 = cResult[15];
        }
        if (cResult[16] !== tmp9) {
          const obj22 = { screenOptions: tmp9, children: null };
          const items1 = [tmp10, tmp14, tmp18, tmp22, tmp26, tmp30, tmp35, tmp39, tmp43, tmp47, tmp51];
          obj22.children = items1;
          const tmp58 = closure_8(closure_9.Navigator, obj22);
          cResult[16] = tmp9;
          class C {
            constructor(arg0) {
              ({ navigation, route } = arg0);
              params = route.params;
              if (params != null) {
                presentation = params.presentation;
              }
              obj = {
                headerStyle: closure_0.header,
                headerShadowVisible: false,
                headerTitle(children) {
                  const merged = Object.assign(closure_1_4(children, closure_1_3));
                  return closure_1_7(closure_1_0(dependencyMap[11]).GenericHeaderTitle, { title: children.children });
                },
                headerTitleAlign: "center",
                headerLeft: null,
                fullScreenGestureEnabled: null,
              };
              if (navigation.getState().routes[0].key === route.key) {
                params2 = route.params;
                presentation1 = undefined;
                if (params2 != null) {
                  presentation1 = params2.presentation;
                }
                str = "card";
                if ("card" !== presentation1) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj3 = closure_0(closure_2[11]);
                  renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
                }
                obj.headerLeft = renderModalCloseImage;
                params3 = route.params;
                presentation2 = undefined;
                if (params3 != null) {
                  presentation2 = params3.presentation;
                }
                str2 = "card";
                obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
                tmp6 = closure_1;
                tmp7 = obj;
                merged = Object.assign(closure_1);
                return obj;
              }
              obj2 = closure_0(closure_2[11]);
              renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
              return;
            }
          }
          cResult[17] = tmp58;
          let tmp55 = tmp58;
        } else {
          tmp55 = cResult[17];
        }
        return tmp55;
      }
      class C {
        constructor(arg0) {
          ({ navigation, route } = arg0);
          params = route.params;
          if (params != null) {
            presentation = params.presentation;
          }
          obj = {
            headerStyle: closure_0.header,
            headerShadowVisible: false,
            headerTitle(children) {
              const merged = Object.assign(closure_1_4(children, closure_1_3));
              return closure_1_7(closure_1_0(dependencyMap[11]).GenericHeaderTitle, { title: children.children });
            },
            headerTitleAlign: "center",
            headerLeft: null,
            fullScreenGestureEnabled: null,
          };
          if (navigation.getState().routes[0].key === route.key) {
            params2 = route.params;
            presentation1 = undefined;
            if (params2 != null) {
              presentation1 = params2.presentation;
            }
            str = "card";
            if ("card" !== presentation1) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj3 = closure_0(closure_2[11]);
              renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
            }
            obj.headerLeft = renderModalCloseImage;
            params3 = route.params;
            presentation2 = undefined;
            if (params3 != null) {
              presentation2 = params3.presentation;
            }
            str2 = "card";
            obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
            tmp6 = closure_1;
            tmp7 = obj;
            merged = Object.assign(closure_1);
            return obj;
          }
          obj2 = closure_0(closure_2[11]);
          renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
          return;
        }
      }
      cResult[2] = accessibilityNativeStackOptions;
      cResult[3] = tmp4.header;
      cResult[4] = C;
      tmp9 = C;
      const tmpResult = require("Navigator");
    }
  : () => {
      _require = closure_10();
      const layoutEffect = noop.useLayoutEffect(() => closure_0(6997).trackAppUIViewed(), []);
      closure_1 = require("Navigator").useAccessibilityNativeStackOptions();
      let obj2 = {
        screenOptions(arg0) {
          ({ navigation, route } = arg0);
          const params = route.params;
          if (params != null) {
            const presentation = params.presentation;
          }
          const obj = {
            headerStyle: closure_0.header,
            headerShadowVisible: false,
            headerTitle(children) {
              const merged = Object.assign(children, Object.assign({ children: 0 }));
              const merged1 = Object.assign(merged);
              return closure_1_7(closure_1_0(dependencyMap[11]).GenericHeaderTitle, { title: children.children });
            },
            headerTitleAlign: "center",
            headerLeft: null,
            fullScreenGestureEnabled: null,
          };
          if (navigation.getState().routes[0].key === route.key) {
            const params2 = route.params;
            let presentation1;
            if (params2 != null) {
              presentation1 = params2.presentation;
            }
            if ("card" !== presentation1) {
              let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
            }
            obj.headerLeft = renderModalCloseImage;
            const params3 = route.params;
            let presentation2;
            if (params3 != null) {
              presentation2 = params3.presentation;
            }
            obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
            let merged = Object.assign(closure_1);
            return obj;
          }
          renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
        },
        children: null,
      };
      const items = [
        closure_7(closure_9.Screen, {
          name: "root",
          options(navigation) {
            navigation = navigation.navigation;
            let obj = { title: null, headerRight: null };
            let intl = navigation(1126).intl;
            obj.title = intl.string(navigation(1126).t.TdEu5X);
            obj.headerRight = function headerRight(arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              const intl = navigation(1126).intl;
              obj.label = intl.string(navigation(1126).t.zIJnA6);
              obj.onPress = function onPress() {
                return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
              };
              return closure_2_7(navigation(7509).HeaderTextButton, obj);
            };
            return obj;
          },
          getComponent() {
            return closure_0(16951).default;
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
      ];
      const obj4 = { name: "new-message", options: null, getComponent: null };
      const obj5 = { title: null };
      let intl = require("util").intl;
      obj5.title = intl.string(require("util").t.jD1qzM);
      obj4.options = obj5;
      obj4.getComponent = function getComponent() {
        return closure_0(16957).default;
      };
      items[1] = closure_7(closure_9.Screen, obj4);
      const obj6 = { name: "gdm", options: null, getComponent: null };
      const obj7 = { title: null };
      const intl2 = require("util").intl;
      obj7.title = intl2.string(require("util").t["3hF1W4"]);
      obj6.options = obj7;
      obj6.getComponent = function getComponent() {
        return closure_0(16960).default;
      };
      items[2] = closure_7(closure_9.Screen, obj6);
      const obj8 = { name: "add-friend", options: null, getComponent: null };
      const obj9 = { title: null };
      const intl3 = require("util").intl;
      obj9.title = intl3.string(require("util").t.w5uwoI);
      obj8.options = obj9;
      obj8.getComponent = function getComponent() {
        return closure_0(16961).default;
      };
      items[3] = closure_7(closure_9.Screen, obj8);
      const obj10 = { name: "add-friends", options: null, getComponent: null };
      const obj11 = { title: null };
      const intl4 = require("util").intl;
      obj11.title = intl4.string(require("util").t.zIJnA6);
      obj10.options = obj11;
      obj10.getComponent = function getComponent() {
        return closure_0(16962).default;
      };
      items[4] = closure_7(closure_9.Screen, obj10);
      const obj12 = { name: "username-search", options: null, getComponent: null };
      const obj13 = { title: null };
      const intl5 = require("util").intl;
      obj13.title = intl5.string(require("util").t.QzVsOs);
      obj12.options = obj13;
      obj12.getComponent = function getComponent() {
        return closure_0(16969).default;
      };
      items[5] = closure_7(closure_9.Screen, obj12);
      const obj14 = { name: "suggested-friends", options: null, getComponent: null };
      const obj15 = { title: null };
      const intl6 = require("util").intl;
      obj15.title = intl6.string(require("util").t["1uAmCw"]);
      obj14.options = obj15;
      obj14.getComponent = function getComponent() {
        return closure_0(16970).default;
      };
      items[6] = closure_7(closure_9.Screen, obj14);
      const obj16 = { name: "requests-settings", options: null, getComponent: null };
      const obj17 = { title: null };
      const intl7 = require("util").intl;
      obj17.title = intl7.string(require("util").t.XT4hVl);
      obj16.options = obj17;
      obj16.getComponent = function getComponent() {
        return closure_0(16971).default;
      };
      items[7] = closure_7(closure_9.Screen, obj16);
      items[8] = closure_7(closure_9.Screen, {
        name: "requests",
        options(navigation) {
          navigation = navigation.navigation;
          const obj = { title: null, headerRight: null };
          const intl = navigation(1126).intl;
          obj.title = intl.string(navigation(1126).t.fyA115);
          obj.headerRight = function headerRight() {
            return closure_2_7(closure_2_11, {
              onPress() {
                return navigation.navigate("requests-settings");
              },
            });
          };
          return obj;
        },
        getComponent() {
          return closure_0(16973).default;
        },
      });
      const obj19 = { name: "spam-requests", options: null, getComponent: null };
      const obj20 = { title: null };
      const intl8 = require("util").intl;
      obj20.title = intl8.string(require("util").t.oHVeHc);
      obj19.options = obj20;
      obj19.getComponent = function getComponent() {
        return closure_0(16976).default;
      };
      items[9] = closure_7(closure_9.Screen, obj19);
      const obj21 = { name: "ignored-user-requests", options: null, getComponent: null };
      const obj22 = { title: null };
      const intl9 = require("util").intl;
      obj22.title = intl9.string(require("util").t.tFY5Zb);
      obj21.options = obj22;
      obj21.getComponent = function getComponent() {
        return closure_0(16977).default;
      };
      items[10] = closure_7(closure_9.Screen, obj21);
      obj2.children = items;
      return closure_8(closure_9.Navigator, obj2);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  shadowColor: "transparent",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(12);
      const tmp4 = useColorThemeBackgroundDefault();
      ({ left, right } = useSafeAreaInsetsDefault());
      const tmp6 = closure_10();
      if (cResult[0] === left) {
        if (cResult[1] === right) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp6.container) {
          if (cResult[4] === tmp7) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = React5(closure_12, {});
            cResult[6] = tmp13;
            let tmp10 = tmp13;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] !== tmp8) {
            const obj2 = { style: tmp8, children: tmp10 };
            const tmp17 = React5(View, obj2);
            cResult[7] = tmp8;
            cResult[8] = tmp17;
            let tmp14 = tmp17;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp14) {
              let tmp18 = cResult[11];
            }
            return tmp18;
          }
          const obj3 = { gradient: tmp4, children: tmp14 };
          const tmp20 = React5(native.ThemeContextProvider, obj3);
          cResult[9] = tmp4;
          cResult[10] = tmp14;
          cResult[11] = tmp20;
          tmp18 = tmp20;
        }
        const items = [tmp6.container, tmp7];
        cResult[3] = tmp6.container;
        cResult[4] = tmp7;
        cResult[5] = items;
        tmp8 = items;
      }
      const obj4 = { paddingLeft: left, paddingRight: right };
      cResult[0] = left;
      cResult[1] = right;
      cResult[2] = obj4;
      tmp7 = obj4;
      const tmp5 = useSafeAreaInsetsDefault();
    }
  : () => {
      const tmp = useColorThemeBackgroundDefault();
      ({ left, right } = useSafeAreaInsetsDefault());
      const tmp2 = useSafeAreaInsetsDefault();
      const obj = { gradient: tmp, children: null };
      const obj2 = { style: null, children: React5(closure_12, {}) };
      const items = [closure_10().container, { paddingLeft: left, paddingRight: right }];
      obj2.style = items;
      obj.children = React5(View, obj2);
      return React5(native.ThemeContextProvider, obj);
    };
