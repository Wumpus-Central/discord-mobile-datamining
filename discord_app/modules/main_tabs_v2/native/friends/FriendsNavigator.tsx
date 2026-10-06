// === Module 16950: FriendsNavigator ===

// Module 16950 (FriendsNavigator)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import native from "native" /* 4595 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4738 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7515 */;
import AssetRegistryDefault from "AssetRegistry" /* 12276 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7568 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onPress;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let closure_3 = ["children"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let HeaderIconButton;
  let first;
  let obj3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl10.intl;
    const stringResult = intl.string(intl10.t["3D5yo/"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onPress) {
    const obj2 = { isModal: true, children: metroImportDefault(HeaderIconButton, obj3) };
    obj3 = { source: AssetRegistryDefault, onPress, accessibilityLabel: first };
    const tmp9 = PressableNavigatorButtonWrapperDefault;
    HeaderIconButton = HeaderShared.HeaderIconButton;
    const tmp10 = metroImportDefault(tmp9, obj2);
    cResult[1] = onPress;
    cResult[2] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((onPress) => {
  let HeaderIconButton;
  let intl;
  let obj2;
  onPress = onPress.onPress;
  const obj = { isModal: true, children: metroImportDefault(HeaderIconButton, obj2) };
  obj2 = { source: AssetRegistryDefault, onPress, accessibilityLabel: intl.string(intl10.t["3D5yo/"]) };
  const tmp = PressableNavigatorButtonWrapperDefault;
  HeaderIconButton = HeaderShared.HeaderIconButton;
  intl = intl10.intl;
  return metroImportDefault(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj19;
  let obj21;
  let obj4;
  let obj6;
  let obj8;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(18);
  const tmp4 = closure_10();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = closure_0(dependencyMap[13]);
      return obj.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
  const tmpResult = tmp(6503);
  const accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  if (cResult[2] === accessibilityNativeStackOptions) {
    let tmp9;
    let tmp10;
    let tmp14;
    let tmp18;
    let tmp22;
    let tmp26;
    let tmp30;
    let tmp35;
    let tmp39;
    let tmp43;
    let tmp47;
    let tmp51;
    let tmp55;
    if (cResult[3] === tmp4.header) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = {
        name: "root",
        options(navigation) {
              let intl;
              navigation = navigation.navigation;
              let obj = {
                title: intl.string(navigation(closure_2[9]).t.TdEu5X),
                headerRight(arg0) {
                  let intl;
                  const obj = {
                    label: intl.string(navigation(dependencyMap[9]).t.zIJnA6),
                    onPress() {
                      return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
                    }
                  };
                  const HeaderTextButton = navigation(dependencyMap[11]).HeaderTextButton;
                  const merged = Object.assign(arg0);
                  intl = navigation(dependencyMap[9]).intl;
                  return closure_2_7(HeaderTextButton, obj);
                }
              };
              intl = navigation(closure_2[9]).intl;
              return obj;
            },
        getComponent() {
              return closure_0(dependencyMap[15]).default;
            }
      };
      const tmp13 = closure_7(closure_9.Screen, obj2);
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = {
        name: "new-message",
        options: obj4,
        getComponent() {
              return closure_0(dependencyMap[16]).default;
            }
      };
      const Screen = closure_9.Screen;
      obj4 = { title: intl.string(tmp(1126).t.jD1qzM) };
      intl = tmp(1126).intl;
      const tmp17 = closure_7(Screen, obj3);
      cResult[6] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = {
        name: "gdm",
        options: obj6,
        getComponent() {
              return closure_0(dependencyMap[17]).default;
            }
      };
      const Screen2 = closure_9.Screen;
      obj6 = { title: intl2.string(tmp(1126).t["3hF1W4"]) };
      intl2 = tmp(1126).intl;
      const tmp21 = closure_7(Screen2, obj5);
      cResult[7] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[7];
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = {
        name: "add-friend",
        options: obj8,
        getComponent() {
              return closure_0(dependencyMap[18]).default;
            }
      };
      const Screen3 = closure_9.Screen;
      obj8 = { title: intl3.string(tmp(1126).t.w5uwoI) };
      intl3 = tmp(1126).intl;
      const tmp25 = closure_7(Screen3, obj7);
      cResult[8] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[8];
    }
    const _Symbol5 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = {
        name: "add-friends",
        options: obj10,
        getComponent() {
              return closure_0(dependencyMap[19]).default;
            }
      };
      const Screen4 = closure_9.Screen;
      obj10 = { title: intl4.string(tmp(1126).t.zIJnA6) };
      intl4 = tmp(1126).intl;
      const tmp29 = closure_7(Screen4, obj9);
      cResult[9] = tmp29;
      tmp26 = tmp29;
    } else {
      tmp26 = cResult[9];
    }
    const _Symbol6 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = {
        name: "username-search",
        options: obj12,
        getComponent() {
              return closure_0(dependencyMap[20]).default;
            }
      };
      const Screen5 = closure_9.Screen;
      obj12 = { title: intl5.string(tmp(1126).t.QzVsOs) };
      intl5 = tmp(1126).intl;
      const tmp33 = closure_7(Screen5, obj11);
      cResult[10] = tmp33;
      tmp30 = tmp33;
    } else {
      tmp30 = cResult[10];
    }
    const _Symbol7 = Symbol;
    class C {
      constructor(arg0) {
        let presentation;
        let route;
        ({ navigation, route } = arg0);
        const params = route.params;
        if (params != null) {
          presentation = params.presentation;
        }
        let obj = {
          headerStyle: closure_0.header,
          headerShadowVisible: false,
          headerTitle(children) {
            children = children.children;
            const obj = { title: children };
            const tmp = closure_1_4(children, closure_1_3);
            const GenericHeaderTitle = closure_1_0(closure_1_2[11]).GenericHeaderTitle;
            const merged = Object.assign(tmp);
            return closure_1_7(GenericHeaderTitle, obj);
          },
          headerTitleAlign: "center",
          headerLeft: null,
          fullScreenGestureEnabled: null
        };
        if (navigation.getState().routes[0].key === route.key) {
          let renderModalCloseImage;
          const params2 = route.params;
          let presentation1;
          if (params2 != null) {
            presentation1 = params2.presentation;
          }
          if ("card" !== presentation1) {
            const obj3 = HeaderShared;
            renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
          }
          obj.headerLeft = renderModalCloseImage;
          const params3 = route.params;
          let presentation2;
          if (params3 != null) {
            presentation2 = params3.presentation;
          }
          obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
          let merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }
        const obj2 = HeaderShared;
        renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
      }
    }
    if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
      const obj13 = {
        name: "suggested-friends",
        options: obj14,
        getComponent() {
              return closure_0(dependencyMap[21]).default;
            }
      };
      const Screen6 = closure_9.Screen;
      obj14 = { title: intl6.string(tmp(1126).t["1uAmCw"]) };
      intl6 = tmp(1126).intl;
      const tmp38 = closure_7(Screen6, obj13);
      cResult[11] = tmp38;
      tmp35 = tmp38;
    } else {
      tmp35 = cResult[11];
    }
    const _Symbol8 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj15 = {
        name: "requests-settings",
        options: obj16,
        getComponent() {
              return closure_0(dependencyMap[22]).default;
            }
      };
      const Screen7 = closure_9.Screen;
      obj16 = { title: intl7.string(tmp(1126).t.XT4hVl) };
      intl7 = tmp(1126).intl;
      const tmp42 = closure_7(Screen7, obj15);
      cResult[12] = tmp42;
      tmp39 = tmp42;
    } else {
      tmp39 = cResult[12];
    }
    const _Symbol9 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj17 = {
        name: "requests",
        options(navigation) {
              let intl;
              navigation = navigation.navigation;
              let obj = {
                title: intl.string(navigation(closure_2[9]).t.fyA115),
                headerRight() {
                  const obj = {
                    onPress() {
                      return navigation.navigate("requests-settings");
                    }
                  };
                  return closure_2_7(closure_2_11, obj);
                }
              };
              intl = navigation(closure_2[9]).intl;
              return obj;
            },
        getComponent() {
              return closure_0(dependencyMap[23]).default;
            }
      };
      const tmp46 = closure_7(closure_9.Screen, obj17);
      cResult[13] = tmp46;
      tmp43 = tmp46;
    } else {
      tmp43 = cResult[13];
    }
    const _Symbol10 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const obj18 = {
        name: "spam-requests",
        options: obj19,
        getComponent() {
              return closure_0(dependencyMap[24]).default;
            }
      };
      const Screen8 = closure_9.Screen;
      obj19 = { title: intl8.string(tmp(1126).t.oHVeHc) };
      intl8 = tmp(1126).intl;
      const tmp50 = closure_7(Screen8, obj18);
      cResult[14] = tmp50;
      tmp47 = tmp50;
    } else {
      tmp47 = cResult[14];
    }
    const _Symbol11 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj20 = {
        name: "ignored-user-requests",
        options: obj21,
        getComponent() {
              return closure_0(dependencyMap[25]).default;
            }
      };
      const Screen9 = closure_9.Screen;
      obj21 = { title: intl9.string(tmp(1126).t.tFY5Zb) };
      intl9 = tmp(1126).intl;
      const tmp54 = closure_7(Screen9, obj20);
      cResult[15] = tmp54;
      tmp51 = tmp54;
    } else {
      tmp51 = cResult[15];
    }
    if (cResult[16] !== tmp9) {
      const obj22 = { screenOptions: tmp9, children: items1 };
      items1 = [tmp10, tmp14, tmp18, tmp22, tmp26, tmp30, tmp35, tmp39, tmp43, tmp47, tmp51];
      const tmp58 = closure_8(closure_9.Navigator, obj22);
      cResult[16] = tmp9;
      class C {
        constructor(arg0) {
          let presentation;
          let route;
          ({ navigation, route } = arg0);
          const params = route.params;
          if (params != null) {
            presentation = params.presentation;
          }
          let obj = {
            headerStyle: closure_0.header,
            headerShadowVisible: false,
            headerTitle(children) {
              children = children.children;
              const obj = { title: children };
              const tmp = closure_1_4(children, closure_1_3);
              const GenericHeaderTitle = closure_1_0(closure_1_2[11]).GenericHeaderTitle;
              const merged = Object.assign(tmp);
              return closure_1_7(GenericHeaderTitle, obj);
            },
            headerTitleAlign: "center",
            headerLeft: null,
            fullScreenGestureEnabled: null
          };
          if (navigation.getState().routes[0].key === route.key) {
            let renderModalCloseImage;
            const params2 = route.params;
            let presentation1;
            if (params2 != null) {
              presentation1 = params2.presentation;
            }
            if ("card" !== presentation1) {
              const obj3 = HeaderShared;
              renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
            }
            obj.headerLeft = renderModalCloseImage;
            const params3 = route.params;
            let presentation2;
            if (params3 != null) {
              presentation2 = params3.presentation;
            }
            obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
            let merged = Object.assign(accessibilityNativeStackOptions);
            return obj;
          }
          const obj2 = HeaderShared;
          renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
        }
      }
      cResult[17] = tmp58;
      tmp55 = tmp58;
    } else {
      tmp55 = cResult[17];
    }
    return tmp55;
  }
  class C {
    constructor(arg0) {
      let presentation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        presentation = params.presentation;
      }
      let obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const obj = { title: children };
          const tmp = closure_1_4(children, closure_1_3);
          const GenericHeaderTitle = closure_1_0(closure_1_2[11]).GenericHeaderTitle;
          const merged = Object.assign(tmp);
          return closure_1_7(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: null,
        fullScreenGestureEnabled: null
      };
      if (navigation.getState().routes[0].key === route.key) {
        let renderModalCloseImage;
        const params2 = route.params;
        let presentation1;
        if (params2 != null) {
          presentation1 = params2.presentation;
        }
        if ("card" !== presentation1) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        const params3 = route.params;
        let presentation2;
        if (params3 != null) {
          presentation2 = params3.presentation;
        }
        obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
        let merged = Object.assign(accessibilityNativeStackOptions);
        return obj;
      }
      const obj2 = HeaderShared;
      renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
    }
  }
  cResult[2] = accessibilityNativeStackOptions;
  cResult[3] = tmp4.header;
  cResult[4] = C;
  tmp9 = C;
}) : (() => {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj22;
  let obj5;
  let obj7;
  let obj9;
  _require = closure_10();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[13]);
    return obj.trackAppUIViewed();
  }, []);
  let obj = require("Navigator");
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions(arg0) {
      let presentation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        presentation = params.presentation;
      }
      let obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[11]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_7(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: null,
        fullScreenGestureEnabled: null
      };
      if (navigation.getState().routes[0].key === route.key) {
        let renderModalCloseImage;
        const params2 = route.params;
        let presentation1;
        if (params2 != null) {
          presentation1 = params2.presentation;
        }
        if ("card" !== presentation1) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
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
      const obj2 = HeaderShared;
      renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
    },
    children: items
  };
  let obj3 = {
    name: "root",
    options(navigation) {
      let intl;
      navigation = navigation.navigation;
      let obj = {
        title: intl.string(navigation(closure_2[9]).t.TdEu5X),
        headerRight(arg0) {
          let intl;
          const obj = {
            label: intl.string(navigation(dependencyMap[9]).t.zIJnA6),
            onPress() {
              return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
            }
          };
          const HeaderTextButton = navigation(dependencyMap[11]).HeaderTextButton;
          const merged = Object.assign(arg0);
          intl = navigation(dependencyMap[9]).intl;
          return closure_2_7(HeaderTextButton, obj);
        }
      };
      intl = navigation(closure_2[9]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[15]).default;
    }
  };
  const Navigator = closure_9.Navigator;
  items = [closure_7(closure_9.Screen, obj3), , , , , , , , , , ];
  const obj4 = {
    name: "new-message",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[16]).default;
    }
  };
  const Screen = closure_9.Screen;
  obj5 = { title: intl.string(require("intl").t.jD1qzM) };
  intl = require("intl").intl;
  items[1] = closure_7(Screen, obj4);
  const obj6 = {
    name: "gdm",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[17]).default;
    }
  };
  const Screen2 = closure_9.Screen;
  obj7 = { title: intl2.string(require("intl").t["3hF1W4"]) };
  intl2 = require("intl").intl;
  items[2] = closure_7(Screen2, obj6);
  const obj8 = {
    name: "add-friend",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[18]).default;
    }
  };
  const Screen3 = closure_9.Screen;
  obj9 = { title: intl3.string(require("intl").t.w5uwoI) };
  intl3 = require("intl").intl;
  items[3] = closure_7(Screen3, obj8);
  const obj10 = {
    name: "add-friends",
    options: obj11,
    getComponent() {
      return closure_0(dependencyMap[19]).default;
    }
  };
  const Screen4 = closure_9.Screen;
  obj11 = { title: intl4.string(require("intl").t.zIJnA6) };
  intl4 = require("intl").intl;
  items[4] = closure_7(Screen4, obj10);
  const obj12 = {
    name: "username-search",
    options: obj13,
    getComponent() {
      return closure_0(dependencyMap[20]).default;
    }
  };
  const Screen5 = closure_9.Screen;
  obj13 = { title: intl5.string(require("intl").t.QzVsOs) };
  intl5 = require("intl").intl;
  items[5] = closure_7(Screen5, obj12);
  const obj14 = {
    name: "suggested-friends",
    options: obj15,
    getComponent() {
      return closure_0(dependencyMap[21]).default;
    }
  };
  const Screen6 = closure_9.Screen;
  obj15 = { title: intl6.string(require("intl").t["1uAmCw"]) };
  intl6 = require("intl").intl;
  items[6] = closure_7(Screen6, obj14);
  const obj16 = {
    name: "requests-settings",
    options: obj17,
    getComponent() {
      return closure_0(dependencyMap[22]).default;
    }
  };
  const Screen7 = closure_9.Screen;
  obj17 = { title: intl7.string(require("intl").t.XT4hVl) };
  intl7 = require("intl").intl;
  items[7] = closure_7(Screen7, obj16);
  const obj18 = {
    name: "requests",
    options(navigation) {
      let intl;
      navigation = navigation.navigation;
      let obj = {
        title: intl.string(navigation(closure_2[9]).t.fyA115),
        headerRight() {
          const obj = {
            onPress() {
              return navigation.navigate("requests-settings");
            }
          };
          return closure_2_7(closure_2_11, obj);
        }
      };
      intl = navigation(closure_2[9]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[23]).default;
    }
  };
  items[8] = closure_7(closure_9.Screen, obj18);
  const obj19 = {
    name: "spam-requests",
    options: obj20,
    getComponent() {
      return closure_0(dependencyMap[24]).default;
    }
  };
  const Screen8 = closure_9.Screen;
  obj20 = { title: intl8.string(require("intl").t.oHVeHc) };
  intl8 = require("intl").intl;
  items[9] = closure_7(Screen8, obj19);
  const obj21 = {
    name: "ignored-user-requests",
    options: obj22,
    getComponent() {
      return closure_0(dependencyMap[25]).default;
    }
  };
  const Screen9 = closure_9.Screen;
  obj22 = { title: intl9.string(require("intl").t.tFY5Zb) };
  intl9 = require("intl").intl;
  items[10] = closure_7(Screen9, obj21);
  return closure_8(Navigator, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let left;
  let right;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = useColorThemeBackgroundDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const tmp6 = closure_10();
  if (cResult[0] === left) {
    let tmp7;
    if (cResult[1] === right) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp6.container) {
      let tmp8;
      let tmp10;
      let tmp14;
      if (cResult[4] === tmp7) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = metroImportDefault(closure_12, {});
        cResult[6] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj2 = { style: tmp8, children: tmp10 };
        const tmp17 = metroImportDefault(View, obj2);
        cResult[7] = tmp8;
        cResult[8] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        let tmp18;
        if (cResult[10] === tmp14) {
          tmp18 = cResult[11];
        }
        return tmp18;
      }
      const obj3 = { gradient: tmp4, children: tmp14 };
      const tmp20 = metroImportDefault(native.ThemeContextProvider, obj3);
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
}) : (() => {
  let items;
  let left;
  let obj2;
  let right;
  const tmp = useColorThemeBackgroundDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const obj = { gradient: tmp, children: metroImportDefault(View, obj2) };
  obj2 = { style: items, children: metroImportDefault(closure_12, {}) };
  items = [closure_10().container, { paddingLeft: left, paddingRight: right }];
  closure_10();
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroImportDefault(ThemeContextProvider, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default tmp4;