// _runtime/01538_getItemsFromScreens.js
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { useRoute } from "01539_useRoute.js";

const require = arg1;
let closure_2 = ["screen", "if"];
let closure_3 = ["screens", "groups"];
let c5 = importAllResult;
const memoResult = importAllResult.memo((component) => {
  let obj = useRoute;
  obj = { route: obj.useRoute() };
  return importAllResult.createElement(component.component, { route: obj.useRoute() });
});
let error = memoResult;
memoResult.displayName = "Memo(Screen)";
function getItemsFromScreens(arg0, arg1) {
  let closure_0 = arg0;
  const entries = Object.entries(arg1);
  return entries.map((arg0) => {
    let obj;
    let tmp;
    [tmp, obj] = arg0;
    let _if;
    let element;
    let closure_2 = {};
    if ("screen" in obj) {
      const screen = obj.screen;
      _if = obj.if;
      closure_2 = outer1_4(obj, outer1_2);
      let flag = false;
      let component = screen;
      if (!obj3.isValidElementType(screen)) {
        flag = false;
        if ("config" in screen) {
          component = screen.getComponent();
          flag = true;
        }
      }
      obj3 = callback(outer1_1[4]);
    } else {
      flag = false;
      component = obj;
      if (!obj2.isValidElementType(obj)) {
        flag = false;
        if ("config" in obj) {
          component = obj.getComponent();
          flag = true;
        }
      }
      obj2 = callback(outer1_1[4]);
    }
    if (null == component) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Couldn't find a 'screen' property for the screen '" + tmp + "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.");
      throw error;
    } else {
      if (flag) {
        element = <component />;
      } else {
        obj = { component: null };
        obj[0] = component;
        element = outer1_6(outer1_7, obj);
      }
      return () => {
        if (null == _if) {
          const obj = { name: null };
          obj[0] = closure_0;
          const merged = Object.assign(closure_2);
          obj.children = function children() {
            return closure_3;
          };
          let tmp2 = outer2_6(outer1_0, obj, closure_0);
        } else {
          tmp2 = null;
        }
        return tmp2;
      };
    }
  });
}

export function createScreenFactory() {
  return (arg0) => arg0;
}
export const createComponentForStaticNavigation = function createComponentForStaticNavigation(config, closure_1) {
  let Screen;
  let dependencyMap;
  let groups;
  let require;
  let screens;
  ({ Navigator: require, Group: dependencyMap, Screen } = config);
  config = config.config;
  ({ screens, groups } = config);
  closure_3 = items(config, closure_3);
  if (null == screens) {
    if (null == groups) {
      const _Error2 = Error;
      const error = new Error("Couldn't find a 'screens' or 'groups' property. Make sure to define your screens under a 'screens' property in the configuration.");
      throw error;
    }
  }
  items = [];
  for (const key10019 in config) {
    let tmp26 = key10019;
    let tmp = "screens" === key10019;
    if (tmp) {
      tmp = screens;
    }
    if (tmp) {
      let push = items.push;
      let tmp2 = getItemsFromScreens;
      if (typeof getItemsFromScreens !== "function") {
        let str3 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      require = Screen;
      let _Object = Object;
      let entries = Object.entries(screens);
      let items1 = [];
      let tmp3 = items1;
      let num = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(entries.map((arg0) => {
        let obj;
        let tmp;
        [tmp, obj] = arg0;
        let _if;
        let element;
        let closure_2 = {};
        if ("screen" in obj) {
          const screen = obj.screen;
          _if = obj.if;
          closure_2 = outer1_4(obj, outer1_2);
          let flag = false;
          let component = screen;
          if (!obj3.isValidElementType(screen)) {
            flag = false;
            if ("config" in screen) {
              component = screen.getComponent();
              flag = true;
            }
          }
          obj3 = callback(outer1_1[4]);
        } else {
          flag = false;
          component = obj;
          if (!obj2.isValidElementType(obj)) {
            flag = false;
            if ("config" in obj) {
              component = obj.getComponent();
              flag = true;
            }
          }
          obj2 = callback(outer1_1[4]);
        }
        if (null == component) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Couldn't find a 'screen' property for the screen '" + tmp + "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.");
          throw error;
        } else {
          if (flag) {
            element = <component />;
          } else {
            obj = { component: null };
            obj[0] = component;
            element = outer1_6(outer1_7, obj);
          }
          return () => {
            if (null == _if) {
              const obj = { name: null };
              obj[0] = closure_0;
              const merged = Object.assign(closure_2);
              obj.children = function children() {
                return closure_3;
              };
              let tmp2 = outer2_6(outer1_0, obj, closure_0);
            } else {
              tmp2 = null;
            }
            return tmp2;
          };
        }
      }), 0);
      let tmp5 = push;
      let tmp6 = items1;
      let tmp7 = items;
      let applyResult = HermesBuiltin.apply(items1, items);
    }
    let tmp9 = "groups" === key10019;
    if (tmp9) {
      tmp9 = groups;
    }
    if (!tmp9) {
      continue;
    } else {
      let push2 = items.push;
      let _Object2 = Object;
      let entries1 = Object.entries(groups);
      let items2 = [];
      let tmp10 = items2;
      let num2 = 0;
      arraySpreadResult = HermesBuiltin.arraySpread(entries1.map((arg0) => {
        let closure_0;
        [closure_0, ] = arg0;
        let closure_3;
        closure_3 = outer1_8(merged, merged.screens);
        return () => {
          if (null == _if) {
            const obj = { navigationKey: null };
            obj[0] = closure_0;
            merged = Object.assign(merged);
            obj.children = tmp;
            let tmp3 = outer2_6(_if, obj, closure_0);
          } else {
            tmp3 = null;
          }
          return tmp3;
        };
      }), 0);
      let tmp12 = push2;
      let tmp13 = items2;
      let tmp14 = items;
      let applyResult1 = HermesBuiltin.apply(items2, items);
      continue;
    }
    continue;
  }
  if (0 === items.length) {
    const _Error = Error;
    const error1 = new Error("Couldn't find any screens in the 'screens' or 'groups' property. Make sure to define at least one screen in the configuration.");
    throw error1;
  } else {
    class NavigatorComponent {
      constructor(arg0) {
        closure_0 = config;
        if (typeof config.screenOptions !== "function") {
          if (typeof Group.screenOptions !== "function") {
            obj = {};
            tmp11 = obj;
            merged = Object.assign(tmp10.screenOptions);
            tmp13 = obj;
            merged1 = Object.assign(config.screenOptions);
            fn = obj;
          }
          if (typeof config.screenListeners !== "function") {
            if (typeof Group.screenListeners !== "function") {
              obj1 = {};
              tmp16 = obj1;
              merged2 = Object.assign(tmp15.screenListeners);
              tmp18 = obj1;
              merged3 = Object.assign(config.screenListeners);
              fn2 = obj1;
            }
            tmp2 = outer1_6;
            tmp3 = closure_0;
            obj = {};
            tmp4 = Group;
            tmp5 = obj;
            merged4 = Object.assign(Group);
            tmp7 = obj;
            tmp8 = config;
            merged5 = Object.assign(config);
            obj.screenOptions = fn;
            obj.screenListeners = fn2;
            obj.children = tmp;
            return outer1_6(closure_0, obj);
          }
          fn2 = (arg0) => {
            let obj = outer1_3;
            if (typeof outer1_3.screenListeners === "function") {
              let screenListeners = obj.screenListeners(arg0);
            } else {
              screenListeners = obj.screenListeners;
            }
            obj = {};
            const merged = Object.assign(screenListeners);
            if (typeof screenOptions.screenListeners === "function") {
              let screenListeners2 = obj3.screenListeners(arg0);
            } else {
              screenListeners2 = obj3.screenListeners;
            }
            const merged1 = Object.assign(screenListeners2);
            return obj;
          };
        }
        fn = (arg0) => {
          let obj = outer1_3;
          if (typeof outer1_3.screenOptions === "function") {
            let screenOptions = obj.screenOptions(arg0);
          } else {
            screenOptions = obj.screenOptions;
          }
          obj = {};
          const merged = Object.assign(screenOptions);
          if (typeof screenOptions.screenOptions === "function") {
            let screenOptions2 = obj3.screenOptions(arg0);
          } else {
            screenOptions2 = obj3.screenOptions;
          }
          const merged1 = Object.assign(screenOptions2);
          return obj;
        };
        return;
      }
    }
    NavigatorComponent.displayName = closure_1;
    return NavigatorComponent;
  }
};
export const createComponentForStaticNavigationDeprecated = function createComponentForStaticNavigationDeprecated(getComponent) {
  console.warn("`createComponentForStaticNavigation` is deprecated. Use `tree.getComponent()` instead.");
  return getComponent.getComponent();
};
export const createPathConfigForStaticNavigation = function createPathConfigForStaticNavigation(config, initialRouteName, arg2) {
  let tmp = arg2;
  let closure_0 = arg2;
  let c2 = false;
  let c3 = false;
  function createPathConfigForTree(config, initialRouteName, arg2, arg3) {
    let closure_0 = config;
    let closure_1 = initialRouteName;
    let closure_2 = arg2;
    let closure_3 = arg3;
    initialRouteName = undefined;
    if (initialRouteName != null) {
      initialRouteName = initialRouteName.initialRouteName;
    }
    if (initialRouteName == null) {
      initialRouteName = config.config.initialRouteName;
    }
    if (null != initialRouteName) {
      let screens = config.config.screens;
      if (screens == null) {
        screens = {};
      }
      const set = new Set(Object.keys(screens));
      let groups = config.config.groups;
      if (groups == null) {
        groups = {};
      }
      const values = Object.values(groups);
      for (const item10023 of values) {
        let _Object = Object;
        let keys = Object.keys(item10023.screens);
        let item = keys.forEach((arg0) => set.add(arg0));
        continue;
      }
      if (!set.has(initialRouteName)) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let error = new Error("Couldn't find a screen named '" + initialRouteName + "' to use as 'initialRouteName'.");
        throw error;
      }
    }
    function createPathConfigForScreens(screens, initialRouteName1) {
      let closure_0 = initialRouteName1;
      const entries = Object.entries(screens);
      const sorted = entries.sort((arg0, arg1) => {
        let tmp;
        let tmp2;
        [tmp] = arg0;
        [tmp2] = arg1;
        let num = -1;
        if (tmp !== closure_0) {
          let num2 = 0;
          if (tmp2 === tmp3) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
      const mapped = sorted.map((arg0) => {
        let str;
        let tmp;
        [str, tmp] = arg0;
        let obj = {};
        if (tmp2) {
          if (typeof tmp.linking === "string") {
            obj.path = tmp.linking;
          } else {
            if (tmp3) {
              const _Object = Object;
              let merged = Object.assign(obj, tmp.linking);
            }
            tmp3 = null != tmp.linking && typeof tmp.linking === "object";
          }
        }
        if (obj.exact) {
          if (null == obj.path) {
            const _Error2 = Error;
            const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
            throw error;
          }
        }
        if (typeof obj.path === "string") {
          obj.path = obj.path.replace(/^\/+|\/+$/g, "");
          const str15 = obj.path;
        }
        if (null != obj.alias) {
          const alias = obj.alias;
          obj.alias = alias.map((str) => {
            if (typeof str === "string") {
              let replaced = str.replace(/^\/+|\/+$/g, "");
            } else {
              replaced = {};
              const merged = Object.assign(str);
              replaced.path = str.path.replace(/^\/+|\/+$/g, "");
              const str2 = str.path;
            }
            return replaced;
          });
        }
        if ("initialRouteName" in obj) {
          if (typeof obj.initialRouteName === "string") {
            obj = { initialRouteName: null };
            obj[0] = obj.initialRouteName;
          }
        }
        if ("screens" in obj && null != obj.screens) {
          if (null != tmp9) {
            let screens = obj.screens;
            if (screens == null) {
              screens = {};
            }
            const keys = Object.keys(screens);
            if (!keys.includes(tmp9.initialRouteName)) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error1 = new Error("Couldn't find a screen named '" + tmp9.initialRouteName + "' to use as 'initialRouteName'.");
              throw error1;
            }
          }
        }
        let tmp16 = outer1_2;
        if (!outer1_2) {
          let tmp17 = null != obj.path;
          if (tmp17) {
            tmp17 = "" !== obj.path;
          }
          tmp16 = tmp17;
        }
        let tmp18 = outer1_3;
        let tmp19 = outer1_3;
        if (outer1_3) {
          tmp19 = null == closure_0 || str === closure_0;
          const tmp20 = null == closure_0 || str === closure_0;
        }
        if (!("screens" in obj && null != obj.screens)) {
          if (!tmp8) {
            if ("config" in tmp) {
              let tmp26 = set(tmp, tmp9, tmp16, tmp19);
            }
            if (tmp26) {
              obj.screens = tmp26;
            }
            let tmp34 = !closure_0;
            if (closure_0) {
              tmp34 = "screens" in obj && obj.screens;
              const tmp35 = "screens" in obj && obj.screens;
            }
            if (!tmp34) {
              tmp34 = tmp8;
            }
            if (!tmp34) {
              if (null != obj.path) {
                if (!tmp15) {
                  if ("" === obj.path) {
                    let closure_1;
                    let closure_3 = true;
                    if (tmp18) {
                      tmp18 = str === closure_0;
                    }
                    if (tmp18) {
                      let closure_2 = true;
                    }
                  } else {
                    let tmp39 = tmp18;
                    if (tmp18) {
                      tmp39 = str === closure_0;
                    }
                    if (tmp39) {
                      tmp39 = null == closure_1;
                    }
                    if (tmp39) {
                      closure_2 = true;
                    }
                  }
                }
              } else {
                let tmp36 = tmp15;
                if (!tmp15) {
                  tmp36 = !tmp18;
                }
                if (!tmp36) {
                  tmp36 = null != closure_0 && str !== closure_0;
                  const tmp37 = null != closure_0 && str !== closure_0;
                }
                if (!tmp36) {
                  tmp36 = closure_3;
                }
                if (!tmp36) {
                  tmp36 = null != closure_1;
                }
                if (!tmp36) {
                  closure_1 = obj;
                }
                const str9 = str.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
                const str10 = str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
                obj.path = str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/^\/+|\/+$/g, "");
                const str11 = str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").toLowerCase();
              }
            }
            const items = [str, obj];
            return items;
          }
        }
        let tmp27 = !tmp7;
        if (!("screens" in obj && null != obj.screens)) {
          tmp27 = !tmp8;
        }
        if (tmp27) {
          tmp27 = "screen" in tmp;
        }
        if (tmp27) {
          tmp27 = "config" in tmp.screen;
        }
        if (tmp27) {
          tmp27 = tmp.screen.config.screens || tmp.screen.config.groups;
          const tmp28 = tmp.screen.config.screens || tmp.screen.config.groups;
        }
        if (tmp27) {
          tmp26 = set(tmp.screen, tmp9, tmp16, tmp19);
        }
      });
      return Object.fromEntries(mapped.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return Object.keys(tmp).length > 0;
      }));
    }
    let obj = {};
    for (const key10053 in arg0.config) {
      let tmp17 = key10053;
      screens = "screens" === key10053;
      if (screens) {
        screens = arg0.config.screens;
      }
      if (screens) {
        let initialRouteName1;
        if (arg1 != null) {
          initialRouteName1 = arg1.initialRouteName;
        }
        if (initialRouteName1 == null) {
          initialRouteName1 = arg0.config.initialRouteName;
        }
        let merged = Object.assign(obj, createPathConfigForScreens(arg0.config.screens, initialRouteName1));
      }
      groups = "groups" === key10053;
      if (groups) {
        groups = arg0.config.groups;
      }
      if (!groups) {
        continue;
      } else {
        let _Object2 = Object;
        let entries = Object.entries(arg0.config.groups);
        let item1 = entries.forEach((arg0) => {
          let tmp;
          [, tmp] = arg0;
          let initialRouteName;
          if (initialRouteName != null) {
            initialRouteName = initialRouteName.initialRouteName;
          }
          if (initialRouteName == null) {
            initialRouteName = config.config.initialRouteName;
          }
          const merged = Object.assign(obj, createPathConfigForScreens(tmp.screens, initialRouteName));
        });
        continue;
      }
      continue;
    }
    if (0 !== Object.keys(obj).length) {
      return obj;
    }
  }
  const pathConfigForTree = createPathConfigForTree(config, initialRouteName, false, true);
  if (arg2) {
    tmp = dependencyMap;
  }
  if (tmp) {
    tmp = !c2;
  }
  if (tmp) {
    dependencyMap.path = "";
  }
  return pathConfigForTree;
};