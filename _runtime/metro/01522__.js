// === Module 1522: ? ===

// Module 1522
import _mod1523 from "module_1523" /* 1523 */;
import ContextConsumer from "ContextConsumer" /* 1528 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["screen", "if"];
let closure_3 = ["screens", "groups"];
const jsx = fn(21).jsx;
const memoResult = noop.memo((component) => {
  let obj = _mod1523;
  obj = { route: obj.useRoute() };
  return <component.component route={obj.useRoute()} />;
});
memoResult.displayName = "Memo(Screen)";
function getItemsFromScreens(merged, screens) {
  closure_0 = merged;
  const entries = Object.entries(screens);
  return entries.map((item) => {
    [tmp, obj] = item;
    let _if;
    let element;
    closure_2 = {};
    if ("screen" in obj) {
      const screen = obj.screen;
      _if = obj.if;
      closure_2 = items(obj, Screen);
      let flag = false;
      let component = screen;
      if (!obj3.isValidElementType(screen)) {
        flag = false;
        if ("config" in screen) {
          component = screen.getComponent();
          flag = true;
        }
      }
      obj3 = ContextConsumer;
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
      obj2 = ContextConsumer;
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
        obj = { component };
        element = <closure_1_7 component={component} />;
      }
      return () => {
        if (null == _if) {
          const obj = { name };
          const merged = Object.assign(closure_2);
          obj.children = function children() {
            return element;
          };
          let tmp2 = <require key={name} name={name} />;
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
export const createComponentForStaticNavigation = function createComponentForStaticNavigation(config, componentForStaticNavigation) {
  ({ Navigator: require, Group: dependencyMap, Screen } = config);
  config = config.config;
  ({ screens, groups } = config);
  closure_3 = items(config, closure_3);
  if (null == screens) {
    if (null == groups) {
      const _Error2 = Error;
      let error = new Error("Couldn't find a 'screens' or 'groups' property. Make sure to define your screens under a 'screens' property in the configuration.");
      throw error;
    }
  }
  items = [];
  for (const key10019 in config) {
    let tmp = "screens" === key10019;
    if (tmp) {
      tmp = screens;
    }
    if (tmp) {
      let push = items.push;
      if (typeof getItemsFromScreens === "function") {
        closure_129_0 = Screen;
        let _Object = Object;
        let entries = Object.entries(screens);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(entries.map((item) => {
          [tmp, obj] = item;
          let _if;
          let element;
          closure_2 = {};
          if ("screen" in obj) {
            const screen = obj.screen;
            _if = obj.if;
            closure_2 = items(obj, Screen);
            let flag = false;
            let component = screen;
            if (!obj3.isValidElementType(screen)) {
              flag = false;
              if ("config" in screen) {
                component = screen.getComponent();
                flag = true;
              }
            }
            obj3 = ContextConsumer;
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
            obj2 = ContextConsumer;
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
              obj = { component };
              element = <closure_1_7 component={component} />;
            }
            return () => {
              if (null == _if) {
                const obj = { name };
                const merged = Object.assign(closure_2);
                obj.children = function children() {
                  return element;
                };
                let tmp2 = <require key={name} name={name} />;
              } else {
                tmp2 = null;
              }
              return tmp2;
            };
          }
        }), 0);
        let applyResult = HermesBuiltin.apply(items1, items);
      } else {
        let str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
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
      arraySpreadResult = HermesBuiltin.arraySpread(entries1.map((item) => {
        [closure_0, ] = item;
        closure_3 = getItemsFromScreens(merged, merged.screens);
        return () => {
          if (null == _if) {
            const obj = { navigationKey: nextResult };
            merged = Object.assign(merged);
            obj.children = tmp;
            let tmp3 = <dependencyMap key={nextResult} navigationKey={nextResult} />;
          } else {
            tmp3 = null;
          }
          return tmp3;
        };
      }), 0);
      let applyResult1 = HermesBuiltin.apply(items2, items);
      continue;
    }
    continue;
  }
  if (0 === items.length) {
    let _Error = Error;
    const error1 = new Error("Couldn't find any screens in the 'screens' or 'groups' property. Make sure to define at least one screen in the configuration.");
    throw error1;
  } else {
    class NavigatorComponent {
      constructor(arg0) {
        closure_0 = config;
        if (typeof config.screenOptions !== "function") {
          if (typeof closure_3.screenOptions !== "function") {
            obj = {};
            tmp11 = obj;
            merged = Object.assign(tmp10.screenOptions);
            tmp13 = obj;
            merged1 = Object.assign(config.screenOptions);
            fn = obj;
          }
          if (typeof config.screenListeners !== "function") {
            if (typeof closure_3.screenListeners !== "function") {
              obj1 = {};
              tmp16 = obj1;
              merged2 = Object.assign(tmp15.screenListeners);
              tmp18 = obj1;
              merged3 = Object.assign(config.screenListeners);
              fn2 = obj1;
            }
            tmp2 = closure_1_6;
            tmp3 = closure_0;
            obj = {};
            tmp4 = closure_3;
            tmp5 = obj;
            merged4 = Object.assign(closure_3);
            tmp7 = obj;
            tmp8 = config;
            merged5 = Object.assign(config);
            obj.screenOptions = fn;
            obj.screenListeners = fn2;
            obj.children = tmp;
            return closure_1_6(closure_0, obj);
          }
          fn2 = (arg0) => {
            let obj = closure_3;
            if (typeof closure_3.screenListeners === "function") {
              let screenListeners = obj.screenListeners(arg0);
            } else {
              screenListeners = obj.screenListeners;
            }
            obj = {};
            const merged = Object.assign(screenListeners);
            if (typeof screenOptions.screenListeners === "function") {
              let screenListeners2 = screenOptions.screenListeners(arg0);
            } else {
              screenListeners2 = screenOptions.screenListeners;
            }
            const merged1 = Object.assign(screenListeners2);
            return obj;
          };
        }
        fn = (arg0) => {
          let obj = closure_3;
          if (typeof closure_3.screenOptions === "function") {
            screenOptions = obj.screenOptions(arg0);
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
    NavigatorComponent.displayName = componentForStaticNavigation;
    return NavigatorComponent;
  }
};
export const createComponentForStaticNavigationDeprecated = function createComponentForStaticNavigationDeprecated(getComponent) {
  console.warn("`createComponentForStaticNavigation` is deprecated. Use `tree.getComponent()` instead.");
  return getComponent.getComponent();
};
export const createPathConfigForStaticNavigation = function createPathConfigForStaticNavigation(screen, initialRouteName, arg2) {
  let tmp = arg2;
  closure_0 = arg2;
  c2 = false;
  c3 = false;
  function createPathConfigForTree(screen, initialRouteName, arg2, arg3) {
    closure_2 = arg2;
    closure_3 = arg3;
    initialRouteName = undefined;
    if (initialRouteName != null) {
      initialRouteName = initialRouteName.initialRouteName;
    }
    if (initialRouteName == null) {
      initialRouteName = screen.config.initialRouteName;
    }
    if (null != initialRouteName) {
      let screens = screen.config.screens;
      if (screens == null) {
        screens = {};
      }
      const set = new Set(Object.keys(screens));
      let groups = screen.config.groups;
      if (groups == null) {
        groups = {};
      }
      const values = Object.values(groups);
      for (const item10023 of values) {
        let _Object = Object;
        let keys = Object.keys(item10023.screens);
        let item = keys.forEach((item) => set.add(item));
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
      closure_0 = initialRouteName1;
      const entries = Object.entries(screens);
      const sorted = entries.sort((arg0, arg1) => {
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
      const mapped = sorted.map((item) => {
        [str, tmp] = item;
        obj = {};
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
        }
        if (null != obj.alias) {
          const alias = obj.alias;
          obj.alias = alias.map((path) => {
            if (typeof path === "string") {
              let replaced = path.replace(/^\/+|\/+$/g, "");
            } else {
              replaced = {};
              const merged = Object.assign(path);
              replaced.path = path.path.replace(/^\/+|\/+$/g, "");
            }
            return replaced;
          });
        }
        if ("initialRouteName" in obj) {
          if (typeof obj.initialRouteName === "string") {
            obj = { initialRouteName: null };
            obj.initialRouteName = obj.initialRouteName;
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
        let tmp16 = closure_2;
        if (!closure_2) {
          let tmp17 = null != obj.path;
          if (tmp17) {
            tmp17 = "" !== obj.path;
          }
          tmp16 = tmp17;
        }
        let tmp18 = closure_3;
        let tmp19 = closure_3;
        if (closure_3) {
          tmp19 = null == closure_0 || str === closure_0;
          const tmp20 = null == closure_0 || str === closure_0;
        }
        if (!("screens" in obj && null != obj.screens)) {
          if (!tmp8) {
            if ("config" in tmp) {
              let tmp26 = createPathConfigForTree(tmp, tmp9, tmp16, tmp19);
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
                if (!closure_2) {
                  if ("" === obj.path) {
                    obj = undefined;
                    c3 = true;
                    if (tmp18) {
                      tmp18 = str === closure_0;
                    }
                    if (tmp18) {
                      c2 = true;
                    }
                  } else {
                    let tmp39 = tmp18;
                    if (tmp18) {
                      tmp39 = str === closure_0;
                    }
                    if (tmp39) {
                      tmp39 = null == obj;
                    }
                    if (tmp39) {
                      c2 = true;
                    }
                  }
                }
              } else {
                let tmp36 = closure_2;
                if (!closure_2) {
                  tmp36 = !tmp18;
                }
                if (!tmp36) {
                  tmp36 = null != closure_0 && str !== closure_0;
                  const tmp37 = null != closure_0 && str !== closure_0;
                }
                if (!tmp36) {
                  tmp36 = c3;
                }
                if (!tmp36) {
                  tmp36 = null != obj;
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
          tmp26 = createPathConfigForTree(tmp.screen, tmp9, tmp16, tmp19);
        }
        tmp2 = "linking" in tmp && undefined !== tmp.linking;
      });
      return Object.fromEntries(mapped.filter((item) => {
        [, tmp] = item;
        return Object.keys(tmp).length > 0;
      }));
    }
    obj = {};
    for (const key10053 in arg0.config) {
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
        let item1 = entries.forEach((item) => {
          [, tmp] = item;
          initialRouteName = undefined;
          if (initialRouteName != null) {
            initialRouteName = initialRouteName.initialRouteName;
          }
          if (initialRouteName == null) {
            initialRouteName = screen.config.initialRouteName;
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
  const pathConfigForTree = createPathConfigForTree(screen, initialRouteName, false, true);
  if (arg2) {
    tmp = obj;
  }
  if (tmp) {
    tmp = !c2;
  }
  if (tmp) {
    obj.path = "";
  }
  return pathConfigForTree;
};