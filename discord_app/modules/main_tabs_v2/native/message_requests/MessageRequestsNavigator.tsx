// === Module 17053: MessageRequestsNavigator ===

// Module 17053 (MessageRequestsNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10662 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7556 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

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
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let left;
  let right;
  let tmp6;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(19);
  const tmp4 = closure_10();
  _require = tmp4;
  let obj2 = require("Navigator");
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = closure_0(dependencyMap[10]);
      return obj.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
  ({ left, right } = accessibilityNativeStackOptions(1618)());
  accessibilityNativeStackOptions(1618)();
  if (cResult[2] === left) {
    let tmp11;
    if (cResult[3] === right) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp12;
      if (cResult[6] === tmp11) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === accessibilityNativeStackOptions) {
        let tmp14;
        let tmp16;
        let tmp23;
        let tmp30;
        let tmp37;
        if (cResult[9] === tmp4.header) {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        class C {
          constructor(arg0) {
            obj = {
              headerStyle: closure_0.header,
              headerShadowVisible: false,
              headerTitle(children) {
                          children = children.children;
                          const obj = { title: children };
                          const tmp = closure_1_4(children, closure_1_3);
                          const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                          const merged = Object.assign(tmp);
                          return closure_1_7(GenericHeaderTitle, obj);
                        },
              headerTitleAlign: "center",
              headerLeft: null
            };
            navigation = arg0.navigation;
            obj2 = closure_0(closure_2[12]);
            obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
            merged = Object.assign(closure_1);
            return obj;
          }
        }
        if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              obj = {
                headerStyle: closure_0.header,
                headerShadowVisible: false,
                headerTitle(children) {
                              children = children.children;
                              const obj = { title: children };
                              const tmp = closure_1_4(children, closure_1_3);
                              const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                              const merged = Object.assign(tmp);
                              return closure_1_7(GenericHeaderTitle, obj);
                            },
                headerTitleAlign: "center",
                headerLeft: null
              };
              navigation = arg0.navigation;
              obj2 = closure_0(closure_2[12]);
              obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
              merged = Object.assign(closure_1);
              return obj;
            }
          }
          const Screen = closure_9.Screen;
          const obj3 = { title: intl.string(tmp(1126).t.e7GWjQ) };
          intl = tmp(1126).intl;
          let merged = Object.assign(tmp9(10662)());
          tmp19[1] = obj3;
          tmp19[2] = function getComponent() {
            return closure_0(dependencyMap[15]).default;
          };
          const tmp22 = closure_7(Screen, tmp19);
          cResult[11] = tmp22;
          tmp16 = tmp22;
        } else {
          tmp16 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              obj = {
                headerStyle: closure_0.header,
                headerShadowVisible: false,
                headerTitle(children) {
                              children = children.children;
                              const obj = { title: children };
                              const tmp = closure_1_4(children, closure_1_3);
                              const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                              const merged = Object.assign(tmp);
                              return closure_1_7(GenericHeaderTitle, obj);
                            },
                headerTitleAlign: "center",
                headerLeft: null
              };
              navigation = arg0.navigation;
              obj2 = closure_0(closure_2[12]);
              obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
              merged = Object.assign(closure_1);
              return obj;
            }
          }
          const Screen2 = closure_9.Screen;
          const obj4 = { title: intl2.string(tmp(1126).t.ulKXHp) };
          intl2 = tmp(1126).intl;
          const merged1 = Object.assign(tmp9(10662)());
          tmp26[1] = obj4;
          tmp26[2] = function getComponent() {
            return closure_0(dependencyMap[16]).default;
          };
          const tmp29 = closure_7(Screen2, tmp26);
          cResult[12] = tmp29;
          tmp23 = tmp29;
        } else {
          tmp23 = cResult[12];
        }
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              obj = {
                headerStyle: closure_0.header,
                headerShadowVisible: false,
                headerTitle(children) {
                              children = children.children;
                              const obj = { title: children };
                              const tmp = closure_1_4(children, closure_1_3);
                              const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                              const merged = Object.assign(tmp);
                              return closure_1_7(GenericHeaderTitle, obj);
                            },
                headerTitleAlign: "center",
                headerLeft: null
              };
              navigation = arg0.navigation;
              obj2 = closure_0(closure_2[12]);
              obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
              merged = Object.assign(closure_1);
              return obj;
            }
          }
          const Screen3 = closure_9.Screen;
          const obj5 = { title: intl3.string(tmp(1126).t.iilwGH) };
          intl3 = tmp(1126).intl;
          const merged2 = Object.assign(tmp9(10662)());
          tmp33[1] = obj5;
          tmp33[2] = function getComponent() {
            return closure_0(dependencyMap[17]).default;
          };
          const tmp36 = closure_7(Screen3, tmp33);
          cResult[13] = tmp36;
          tmp30 = tmp36;
        } else {
          tmp30 = cResult[13];
        }
        if (cResult[14] !== tmp14) {
          class C {
            constructor(arg0) {
              obj = {
                headerStyle: closure_0.header,
                headerShadowVisible: false,
                headerTitle(children) {
                              children = children.children;
                              const obj = { title: children };
                              const tmp = closure_1_4(children, closure_1_3);
                              const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                              const merged = Object.assign(tmp);
                              return closure_1_7(GenericHeaderTitle, obj);
                            },
                headerTitleAlign: "center",
                headerLeft: null
              };
              navigation = arg0.navigation;
              obj2 = closure_0(closure_2[12]);
              obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
              merged = Object.assign(closure_1);
              return obj;
            }
          }
          tmp40[0] = tmp14;
          const items1 = [tmp16, tmp23, tmp30];
          tmp40[1] = items1;
          const tmp41 = closure_8(closure_9.Navigator, tmp40);
          cResult[14] = tmp14;
          cResult[15] = tmp41;
          tmp37 = tmp41;
        } else {
          tmp37 = cResult[15];
        }
        if (cResult[16] === tmp12) {
          let tmp42;
          if (cResult[17] === tmp37) {
            tmp42 = cResult[18];
          }
          return tmp42;
        }
        const obj6 = { style: tmp12, children: tmp37 };
        const tmp45 = closure_7(View, obj6);
        cResult[16] = tmp12;
        cResult[17] = tmp37;
        cResult[18] = tmp45;
        tmp42 = tmp45;
      }
      class C {
        constructor(arg0) {
          obj = {
            headerStyle: closure_0.header,
            headerShadowVisible: false,
            headerTitle(children) {
                      children = children.children;
                      const obj = { title: children };
                      const tmp = closure_1_4(children, closure_1_3);
                      const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
                      const merged = Object.assign(tmp);
                      return closure_1_7(GenericHeaderTitle, obj);
                    },
            headerTitleAlign: "center",
            headerLeft: null
          };
          navigation = arg0.navigation;
          obj2 = closure_0(closure_2[12]);
          obj.headerLeft = obj2.getRenderModalCloseImage(navigation);
          merged = Object.assign(closure_1);
          return obj;
        }
      }
      cResult[8] = accessibilityNativeStackOptions;
      cResult[9] = tmp4.header;
      cResult[10] = C;
      tmp14 = C;
    }
    tmp13[0] = tmp4.container;
    tmp13[1] = tmp11;
    cResult[5] = tmp4.container;
    cResult[6] = tmp11;
    cResult[7] = tmp13;
    tmp12 = tmp13;
  }
  const obj7 = { paddingLeft: left, paddingRight: right };
  cResult[2] = left;
  cResult[3] = right;
  cResult[4] = obj7;
  tmp11 = obj7;
}) : (() => {
  let Navigator;
  let Screen;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  const tmp = closure_10();
  _require = tmp;
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[10]);
    return obj.trackAppUIViewed();
  }, []);
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items, children: closure_8(Navigator, obj3) };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj3 = {
    screenOptions(navigation) {
      let obj2;
      let obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_7(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: obj2.getRenderModalCloseImage(navigation)
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: items1
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[15]).default;
    }
  };
  ({ Navigator, Screen } = closure_9);
  obj5 = { title: intl.string(require("intl").t.e7GWjQ) };
  intl = require("intl").intl;
  let merged = Object.assign(getNavigationModalPresentationDefault());
  items1 = [closure_7(Screen, obj4), , ];
  const obj6 = {
    name: "spam",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[16]).default;
    }
  };
  const Screen2 = closure_9.Screen;
  obj7 = { title: intl2.string(require("intl").t.ulKXHp) };
  intl2 = require("intl").intl;
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  items1[1] = closure_7(Screen2, obj6);
  const obj8 = {
    name: "preview",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[17]).default;
    }
  };
  const Screen3 = closure_9.Screen;
  obj9 = { title: intl3.string(require("intl").t.iilwGH) };
  intl3 = require("intl").intl;
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  items1[2] = closure_7(Screen3, obj8);
  return closure_7(View, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default tmp4;