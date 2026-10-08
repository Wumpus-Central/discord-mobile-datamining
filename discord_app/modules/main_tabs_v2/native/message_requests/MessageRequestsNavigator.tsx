// discord_app/modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HeaderShared from "../shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../utils/getNavigationModalPresentation.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const NativeStackNavigator = fn(9279);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5090);
let obj3 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.header = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  shadowColor: "transparent",
};
let closure_10 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj5 = {
  borderBottomWidth: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  shadowColor: "transparent",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageRequestsNavigator() {
      const cResult = require("c").c(19);
      const tmp4 = closure_10();
      _require = tmp4;
      let obj = require("c");
      const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          return closure_0(7185).trackAppUIViewed();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp6 = fn;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
      const obj2 = require("Navigator");
      ({ left, right } = accessibilityNativeStackOptions(1630)());
      if (cResult[2] === left) {
        if (cResult[3] === right) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === tmp4.container) {
          if (cResult[6] === tmp11) {
            let tmp12 = cResult[7];
          }
          if (cResult[8] === accessibilityNativeStackOptions) {
            if (cResult[9] === tmp4.header) {
              let tmp14 = cResult[10];
            }
            const _Symbol = Symbol;
            class C {
              constructor(arg0) {
                obj = {
                  headerStyle: closure_0.header,
                  headerShadowVisible: false,
                  headerTitle(children) {
                    const merged = Object.assign(closure_1_4(children, closure_1_3));
                    return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, { title: children.children });
                  },
                  headerTitleAlign: "center",
                  headerLeft: null,
                };
                obj2 = closure_0(closure_2[12]);
                obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
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
                      const merged = Object.assign(closure_1_4(children, closure_1_3));
                      return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, {
                        title: children.children,
                      });
                    },
                    headerTitleAlign: "center",
                    headerLeft: null,
                  };
                  obj2 = closure_0(closure_2[12]);
                  obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
                  merged = Object.assign(closure_1);
                  return obj;
                }
              }
              const obj3 = { title: null };
              const intl = tmp(1126).intl;
              obj3.title = intl.string(tmp(1126).t.e7GWjQ);
              let merged = Object.assign(tmp9(9588)());
              tmp19[1] = obj3;
              tmp19[2] = function getComponent() {
                return closure_0(17361).default;
              };
              const tmp22 = closure_7(closure_9.Screen, tmp19);
              cResult[11] = tmp22;
              let tmp16 = tmp22;
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
                      const merged = Object.assign(closure_1_4(children, closure_1_3));
                      return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, {
                        title: children.children,
                      });
                    },
                    headerTitleAlign: "center",
                    headerLeft: null,
                  };
                  obj2 = closure_0(closure_2[12]);
                  obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
                  merged = Object.assign(closure_1);
                  return obj;
                }
              }
              const obj4 = { title: null };
              const intl2 = tmp(1126).intl;
              obj4.title = intl2.string(tmp(1126).t.ulKXHp);
              const merged1 = Object.assign(tmp9(9588)());
              tmp26[1] = obj4;
              tmp26[2] = function getComponent() {
                return closure_0(17380).default;
              };
              const tmp29 = closure_7(closure_9.Screen, tmp26);
              cResult[12] = tmp29;
              let tmp23 = tmp29;
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
                      const merged = Object.assign(closure_1_4(children, closure_1_3));
                      return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, {
                        title: children.children,
                      });
                    },
                    headerTitleAlign: "center",
                    headerLeft: null,
                  };
                  obj2 = closure_0(closure_2[12]);
                  obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
                  merged = Object.assign(closure_1);
                  return obj;
                }
              }
              const obj5 = { title: null };
              const intl3 = tmp(1126).intl;
              obj5.title = intl3.string(tmp(1126).t.iilwGH);
              const merged2 = Object.assign(tmp9(9588)());
              tmp33[1] = obj5;
              tmp33[2] = function getComponent() {
                return closure_0(17381).default;
              };
              const tmp36 = closure_7(closure_9.Screen, tmp33);
              cResult[13] = tmp36;
              let tmp30 = tmp36;
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
                      const merged = Object.assign(closure_1_4(children, closure_1_3));
                      return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, {
                        title: children.children,
                      });
                    },
                    headerTitleAlign: "center",
                    headerLeft: null,
                  };
                  obj2 = closure_0(closure_2[12]);
                  obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
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
              let tmp37 = tmp41;
            } else {
              tmp37 = cResult[15];
            }
            if (cResult[16] === tmp12) {
              if (cResult[17] === tmp37) {
                let tmp42 = cResult[18];
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
                  const merged = Object.assign(closure_1_4(children, closure_1_3));
                  return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, { title: children.children });
                },
                headerTitleAlign: "center",
                headerLeft: null,
              };
              obj2 = closure_0(closure_2[12]);
              obj.headerLeft = obj2.getRenderModalCloseImage(arg0.navigation);
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
      const tmp10 = accessibilityNativeStackOptions(1630)();
    }
  : function MessageRequestsNavigator() {
      const tmp = closure_10();
      _require = tmp;
      importDefault = require("Navigator").useAccessibilityNativeStackOptions();
      const layoutEffect = noop.useLayoutEffect(() => closure_0(7185).trackAppUIViewed(), []);
      const rect = useSafeAreaInsetsDefault();
      const obj2 = { style: null, children: null };
      const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
      obj2.style = items;
      const obj3 = {
        screenOptions(navigation) {
          const obj = {
            headerStyle: closure_0.header,
            headerShadowVisible: false,
            headerTitle(children) {
              const merged = Object.assign(children, Object.assign({ children: 0 }));
              const merged1 = Object.assign(merged);
              return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, { title: children.children });
            },
            headerTitleAlign: "center",
            headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
          };
          let merged = Object.assign(closure_1);
          return obj;
        },
        children: null,
      };
      const obj4 = { name: "root", options: null, getComponent: null };
      const obj5 = { title: null };
      ({ Navigator, Screen } = closure_9);
      const intl = require("util").intl;
      obj5.title = intl.string(require("util").t.e7GWjQ);
      let merged = Object.assign(getNavigationModalPresentationDefault());
      obj4.options = obj5;
      obj4.getComponent = function getComponent() {
        return closure_0(17361).default;
      };
      const items1 = [closure_7(Screen, obj4), ,];
      const obj6 = { name: "spam", options: null, getComponent: null };
      const obj7 = { title: null };
      const intl2 = require("util").intl;
      obj7.title = intl2.string(require("util").t.ulKXHp);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      obj6.options = obj7;
      obj6.getComponent = function getComponent() {
        return closure_0(17380).default;
      };
      items1[1] = closure_7(closure_9.Screen, obj6);
      const obj8 = { name: "preview", options: null, getComponent: null };
      const obj9 = { title: null };
      const intl3 = require("util").intl;
      obj9.title = intl3.string(require("util").t.iilwGH);
      const merged2 = Object.assign(getNavigationModalPresentationDefault());
      obj8.options = obj9;
      obj8.getComponent = function getComponent() {
        return closure_0(17381).default;
      };
      items1[2] = closure_7(closure_9.Screen, obj8);
      obj3.children = items1;
      obj2.children = closure_8(Navigator, obj3);
      return closure_7(View, obj2);
    };
