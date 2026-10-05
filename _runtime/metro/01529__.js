// _runtime/metro/01529__.js
import Fragment from "../react/00021_Fragment.js";
import react2 from "../01530_react.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react from "../00019_react.js";

let closure_2 = ["screen", "if"];
let closure_3 = ["screens", "groups"];
const jsx = Fragment.jsx;
const memoResult = react.memo((component) => {
  component = component.component;
  const obj = react2;
  return <component route={obj.useRoute()} />;
});
const metroImportDefault = memoResult;
memoResult.displayName = "Memo(Screen)";
function getItemsFromScreens(merged, screens) {
  let closure_0 = merged;
  const entries = Object.entries(screens);
  return entries.map(function (item) {
    let component;
    let flag;
    let name;
    let obj;
    let tmp;
    [tmp, obj] = item;
    let _if;
    let element;
    closure_2 = {};
    if ("screen" in obj) {
      const screen = obj.screen;
      _if = obj.if;
      closure_2 = items(obj, closure_1_2);
      flag = false;
      component = screen;
      const obj3 = Screen(closure_1_1[4]);
      if (!obj3.isValidElementType(screen)) {
        flag = false;
        if ("config" in screen) {
          component = screen.getComponent();
          flag = true;
        }
      }
    } else {
      flag = false;
      component = obj;
      const obj2 = Screen(closure_1_1[4]);
      if (!obj2.isValidElementType(obj)) {
        flag = false;
        if ("config" in obj) {
          component = obj.getComponent();
          flag = true;
        }
      }
    }
    if (null == component) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Couldn't find a 'screen' property for the screen '" +
          tmp +
          "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.",
      );
      throw error;
    } else {
      if (flag) {
        element = <component />;
      } else {
        const obj4 = { component };
        element = closure_1_6(closure_1_7, obj4);
      }
      return () => {
        let tmp2;
        if (null == _if) {
          const merged = Object.assign(closure_2);
          tmp2 = (
            <Screen key={name} name={name}>
              {function children() {
                return element;
              }}
            </Screen>
          );
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
export const createComponentForStaticNavigation = function createComponentForStaticNavigation(
  config,
  componentForStaticNavigation,
) {
  let Screen;
  let groups;
  let items;
  let screens;
  ({ Navigator: require, Group: dependencyMap, Screen } = config);
  config = config.config;
  ({ screens, groups } = config);
  closure_3 = items(config, closure_3);
  if (null == screens) {
    if (null == groups) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      let error = new Error(
        "Couldn't find a 'screens' or 'groups' property. Make sure to define your screens under a 'screens' property in the configuration.",
      );
      throw error;
    }
  }
  items = [];
  for (const key10019 in config) {
    let tmp2 = "screens" === key10019 && screens;
    if (tmp2) {
      let push = items.push;
      if (typeof getItemsFromScreens === "function") {
        let _Object = Object;
        let entries = Object.entries(screens);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(
          items1,
          entries.map(function (item) {
            let component;
            let flag;
            let name;
            let obj;
            let tmp;
            [tmp, obj] = item;
            let _if;
            let element;
            closure_2 = {};
            if ("screen" in obj) {
              const screen = obj.screen;
              _if = obj.if;
              closure_2 = items(obj, closure_1_2);
              flag = false;
              component = screen;
              const obj3 = Screen(closure_1_1[4]);
              if (!obj3.isValidElementType(screen)) {
                flag = false;
                if ("config" in screen) {
                  component = screen.getComponent();
                  flag = true;
                }
              }
            } else {
              flag = false;
              component = obj;
              const obj2 = Screen(closure_1_1[4]);
              if (!obj2.isValidElementType(obj)) {
                flag = false;
                if ("config" in obj) {
                  component = obj.getComponent();
                  flag = true;
                }
              }
            }
            if (null == component) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error(
                "Couldn't find a 'screen' property for the screen '" +
                  tmp +
                  "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.",
              );
              throw error;
            } else {
              if (flag) {
                element = <component />;
              } else {
                const obj4 = { component };
                element = closure_1_6(closure_1_7, obj4);
              }
              return () => {
                let tmp2;
                if (null == _if) {
                  const merged = Object.assign(closure_2);
                  tmp2 = (
                    <Screen key={name} name={name}>
                      {function children() {
                        return element;
                      }}
                    </Screen>
                  );
                } else {
                  tmp2 = null;
                }
                return tmp2;
              };
            }
          }),
          0,
        );
        let applyResult = HermesBuiltin.apply(push, items1, items);
      } else {
        let str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    let tmp10 = "groups" === key10019 && groups;
    if (!tmp10) {
      continue;
    } else {
      let push2 = items.push;
      let _Object2 = Object;
      let entries1 = Object.entries(groups);
      let items2 = [];
      let arraySpreadResult2 = HermesBuiltin.arraySpread(
        items2,
        entries1.map((item) => {
          let _if;
          let merged;
          let navigationKey;
          [navigationKey] = item;
          closure_3 = getItemsFromScreens(merged, merged.screens);
          return () => {
            let tmp3;
            if (null == _if) {
              merged = Object.assign(merged);
              tmp3 = (
                <dependencyMap key={navigationKey} navigationKey={navigationKey}>
                  {tmp}
                </dependencyMap>
              );
            } else {
              tmp3 = null;
            }
            return tmp3;
          };
        }),
        0,
      );
      let tmp15 = items;
      let applyResult1 = HermesBuiltin.apply(push2, items2, items);
      continue;
    }
    continue;
  }
  if (0 === items.length) {
    let _Error = Error;
    let self = this;
    let self2 = this;
    const error1 = new Error(
      "Couldn't find any screens in the 'screens' or 'groups' property. Make sure to define at least one screen in the configuration.",
    );
    throw error1;
  } else {
    class NavigatorComponent {
      constructor(screenOptions) {
        if (typeof screenOptions.screenOptions !== "function") {
          let fn;
          if (typeof closure_3.screenOptions !== "function") {
            let obj2 = {};
            let merged = Object.assign(tmp10.screenOptions);
            let merged1 = Object.assign(screenOptions.screenOptions);
            fn = obj2;
          }
          if (typeof screenOptions.screenListeners !== "function") {
            let fn2;
            if (typeof closure_3.screenListeners !== "function") {
              const obj3 = {};
              const merged2 = Object.assign(tmp15.screenListeners);
              const merged3 = Object.assign(screenOptions.screenListeners);
              fn2 = obj3;
            }
            const merged4 = Object.assign(closure_3);
            const merged5 = Object.assign(screenOptions);
            return (
              <screenOptions screenOptions={fn} screenListeners={fn2}>
                {tmp}
              </screenOptions>
            );
          }
          fn2 = (arg0) => {
            let screenListeners;
            let screenListeners2;
            if (typeof closure_3.screenListeners === "function") {
              screenListeners = closure_3.screenListeners(arg0);
            } else {
              screenListeners = closure_3.screenListeners;
            }
            const obj2 = {};
            const merged = Object.assign(screenListeners);
            if (typeof screenOptions.screenListeners === "function") {
              screenListeners2 = screenOptions.screenListeners(arg0);
            } else {
              screenListeners2 = screenOptions.screenListeners;
            }
            const merged1 = Object.assign(screenListeners2);
            return obj2;
          };
        }
        fn = (arg0) => {
          let screenOptions2;
          if (typeof closure_3.screenOptions === "function") {
            screenOptions = closure_3.screenOptions(arg0);
          } else {
            screenOptions = closure_3.screenOptions;
          }
          const obj2 = {};
          const merged = Object.assign(screenOptions);
          if (typeof screenOptions.screenOptions === "function") {
            screenOptions2 = obj3.screenOptions(arg0);
          } else {
            screenOptions2 = obj3.screenOptions;
          }
          const merged1 = Object.assign(screenOptions2);
          return obj2;
        };
      }
    }
    NavigatorComponent.displayName = componentForStaticNavigation;
    return NavigatorComponent;
  }
};
export const createComponentForStaticNavigationDeprecated = function createComponentForStaticNavigationDeprecated(
  getComponent,
) {
  console.warn("`createComponentForStaticNavigation` is deprecated. Use `tree.getComponent()` instead.");
  return getComponent.getComponent();
};
export const createPathConfigForStaticNavigation = function createPathConfigForStaticNavigation(
  screen,
  initialRouteName,
  arg2,
) {
  let obj;
  let tmp = arg2;
  let closure_0 = arg2;
  let c2 = false;
  let c3 = false;
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
      let screens1 = screen.config.screens;
      const _Set = Set;
      const _Object5 = Object;
      if (screens1 == null) {
        screens1 = {};
      }
      let self = this;
      let self2 = this;
      const _Set1 = new _Set(keys(screens1));
      let tmp2 = _Set1;
      let groups1 = screen.config.groups;
      let _Object = Object;
      if (groups1 == null) {
        groups1 = {};
      }
      const values2 = values(groups1);
      for (const item10023 of values2) {
        let _Object2 = Object;
        let keys1 = Object.keys(item10023.screens);
        let item = keys1.forEach((item) => _Set1.add(item));
        continue;
      }
      if (!_Set1.has(initialRouteName)) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        const str = "' to use as 'initialRouteName'.";
        let str2 = "Couldn't find a screen named '";
        let self3 = this;
        let self4 = this;
        let error = new Error("Couldn't find a screen named '" + initialRouteName + "' to use as 'initialRouteName'.");
        const tmp8 = error;
        throw error;
      }
    }
    function createPathConfigForScreens(screens2, initialRouteName1) {
      closure_0 = initialRouteName1;
      const entries = Object.entries(screens2);
      const sorted = entries.sort((arg0, arg1) => {
        let tmp;
        let tmp2;
        [tmp] = arg0;
        [tmp2] = arg1;
        let num = -1;
        if (tmp !== initialRouteName1) {
          let num2 = 0;
          if (tmp2 === tmp3) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
      const mapped = sorted.map(function (item) {
        let str;
        let tmp;
        let tmp24;
        [str, tmp] = item;
        obj = {};
        const tmp2 = "linking" in tmp && undefined !== tmp.linking;
        if (tmp2) {
          if (typeof tmp.linking === "string") {
            obj.path = tmp.linking;
          } else {
            const tmp3 = null != tmp.linking && typeof tmp.linking === "object";
            if (tmp3) {
              const _Object = Object;
              let merged = Object.assign(obj, tmp.linking);
            }
          }
        }
        if (obj.exact) {
          if (null == obj.path) {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(
              "A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.",
            );
            throw error;
          }
        }
        if (typeof obj.path === "string") {
          const str15 = obj.path;
          obj.path = str15.replace(/^\/+|\/+$/g, "");
        }
        if (null != obj.alias) {
          const alias = obj.alias;
          obj.alias = alias.map((path) => {
            let replaced;
            let str2;
            if (typeof path === "string") {
              replaced = path.replace(/^\/+|\/+$/g, "");
            } else {
              replaced = { path: str2.replace(/^\/+|\/+$/g, "") };
              const merged = Object.assign(path);
              str2 = path.path;
            }
            return replaced;
          });
        }
        if ("screens" in obj && null != obj.screens) {
          if (null != tmp9) {
            let screens = obj.screens;
            const _Object2 = Object;
            if (screens == null) {
              screens = {};
            }
            const keys1 = keys(screens);
            if (!keys1.includes(tmp9.initialRouteName)) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              let str2 = "' to use as 'initialRouteName'.";
              const self = this;
              const self2 = this;
              const error1 = new Error(
                "Couldn't find a screen named '" + tmp9.initialRouteName + "' to use as 'initialRouteName'.",
              );
              throw error1;
            }
          }
        }
        let tmp14 = closure_2;
        if (!tmp14) {
          tmp14 = null != obj.path && "" !== obj.path;
          const tmp15 = null != obj.path && "" !== obj.path;
        }
        let tmp16 = closure_3;
        let tmp17 = closure_3;
        if (tmp17) {
          tmp17 = null == initialRouteName1 || str === initialRouteName1;
        }
        if (!("screens" in obj && null != obj.screens)) {
          if (!("linking" in tmp && null === tmp.linking)) {
            if ("config" in tmp) {
              tmp24 = createPathConfigForTree(tmp, tmp9, tmp14, tmp17);
            }
            if (tmp24) {
              obj.screens = tmp24;
            }
            let tmp32 = !initialRouteName1;
            if (initialRouteName1) {
              tmp32 = "screens" in obj && obj.screens;
            }
            if (!tmp32) {
              tmp32 = tmp8;
            }
            if (!tmp32) {
              if (null != obj.path) {
                if (!closure_2) {
                  if ("" === obj.path) {
                    obj = undefined;
                    c3 = true;
                    if (tmp16) {
                      tmp16 = str === initialRouteName1;
                    }
                    if (tmp16) {
                      c2 = true;
                    }
                  } else {
                    const tmp37 = tmp16 && str === initialRouteName1 && null == obj;
                    if (tmp37) {
                      c2 = true;
                    }
                  }
                }
              } else {
                let tmp34 = closure_2 || !tmp16;
                if (!tmp34) {
                  tmp34 = null != initialRouteName1 && str !== initialRouteName1;
                }
                if (!tmp34) {
                  tmp34 = c3;
                }
                if (!tmp34) {
                  tmp34 = null != obj;
                }
                const str9 = str.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
                const str10 = str9.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
                const str11 = str10.toLowerCase();
                obj.path = str11.replace(/^\/+|\/+$/g, "");
              }
            }
            const items = [str, obj];
            return items;
          }
        }
        let tmp25 = !tmp7 && !tmp8 && "screen" in tmp && "config" in tmp.screen;
        if (tmp25) {
          tmp25 = tmp.screen.config.screens || tmp.screen.config.groups;
        }
        if (tmp25) {
          tmp24 = createPathConfigForTree(tmp.screen, tmp9, tmp14, tmp17);
        }
      });
      return fromEntries(
        mapped.filter((item) => {
          let tmp;
          [, tmp] = item;
          return Object.keys(tmp).length > 0;
        }),
      );
    }
    obj = {};
    for (const key10053 in screen.config) {
      let screens = "screens" === key10053 && screen.config.screens;
      if (screens) {
        let initialRouteName1;
        let _Object3 = Object;
        let screens2 = screen.config.screens;
        if (initialRouteName != null) {
          initialRouteName1 = initialRouteName.initialRouteName;
        }
        if (initialRouteName1 == null) {
          initialRouteName1 = screen.config.initialRouteName;
        }
        let obj2 = assign(obj, createPathConfigForScreens(screens2, initialRouteName1));
      }
      let groups = "groups" === key10053 && screen.config.groups;
      if (!groups) {
        continue;
      } else {
        let _Object4 = Object;
        let entries = Object.entries(screen.config.groups);
        let item1 = entries.forEach((item) => {
          let tmp;
          [, tmp] = item;
          initialRouteName = undefined;
          const _Object = Object;
          const screens = tmp.screens;
          const tmp2 = obj;
          if (initialRouteName != null) {
            initialRouteName = initialRouteName.initialRouteName;
          }
          if (initialRouteName == null) {
            initialRouteName = screen.config.initialRouteName;
          }
          obj = assign(tmp2, createPathConfigForScreens(screens, initialRouteName));
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
    let tmp3 = c2;
    tmp = !c2;
  }
  if (tmp) {
    let str = "";
    obj.path = "";
  }
  return pathConfigForTree;
};
