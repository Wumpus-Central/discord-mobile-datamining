// discord_app/modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx
import v1 from "../../../../_runtime/01266_v1.js";
import Link from "../../../../_runtime/01491_Link.js";
import RootNavigationRef from "../RootNavigationRef.native.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import Types from "../Types.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
function modalRoutesAboveMain(routes) {
  const items = [];
  const substr = routes.slice(1);
  const iter = substr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("modal" !== nextResult.name) {
      iter.return();
      break;
    } else {
      let arr = items.push(tmp3);
      continue;
    }
    return items;
  }
}
function coerceMainRoute(routes) {
  if (null != routes) {
    if ("main" === routes.name) {
      return routes;
    }
  }
}
function coerceChannelRoute(currentRoute) {
  if (null != currentRoute) {
    if ("channel" === currentRoute.name) {
      return currentRoute;
    }
  }
}
function coerceTabsRoute(item10077) {
  if (null != item10077) {
    if ("tabs" === item10077.name) {
      return item10077;
    }
  }
}
function coerceGuildsRoute(currentRoute) {
  if (null != currentRoute) {
    return currentRoute;
  }
}
function isModalOpen(dependencyMap) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        let tmp5;
        if (null == dependencyMap) {
          tmp5 = null != tmp2;
        } else if (typeof dependencyMap === "string") {
          let key;
          if (tmp2 != null) {
            const params2 = tmp2.params;
            if (params2 != null) {
              const modal2 = params2.modal;
              if (modal2 != null) {
                key = modal2.key;
              }
            }
          }
          tmp5 = key === dependencyMap;
        } else {
          let tmp4;
          if (tmp2 != null) {
            const params = tmp2.params;
            if (params != null) {
              const modal = params.modal;
              if (modal != null) {
                tmp4 = modal.modal;
              }
            }
          }
          tmp5 = tmp4 === dependencyMap;
        }
        return tmp5;
      }
    }
  }
  return false;
}
({ useLayoutEffect: closure_4, useState: hasOwnProperty } = react);
const set = new Set(["friends", "sidebar", "message-requests", "modal", "search"]);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp4;
      let tmp5;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] !== arg0) {
        const fn = function u() {
          return isModalOpen(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      [tmp4, importDefault] = closure_5(tmp2);
      _slicedToArray(closure_5(tmp2), 2);
      if (cResult[2] !== arg0) {
        const fn2 = function s() {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            return rootNavigationRef.addListener("state", () => {
              closure_1_1(isModalOpen(closure_1_0));
            });
          }
        };
        const items = [arg0];
        cResult[2] = arg0;
        cResult[3] = fn2;
        cResult[4] = items;
        tmp6 = items;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      closure_4(tmp5, tmp6);
      return tmp4;
    }
  : (arg0) => {
      let closure_1;
      let first;
      let closure_0 = arg0;
      [first, closure_1] = closure_5(() => isModalOpen(closure_0));
      const items = [arg0];
      closure_4(() => {
        const obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          return rootNavigationRef.addListener("state", () => {
            closure_1_1(isModalOpen(closure_1_0));
          });
        }
      }, items);
      return first;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let first1;
      let tmp5;
      let tmp6;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = closure_0(dependencyMap[2]);
          const rootNavigationRef = obj.getRootNavigationRef();
          let tmp;
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const rootState = rootNavigationRef.getRootState();
              if (null != rootState) {
                let tmp4;
                if (null != rootState.routes[rootState.index]) {
                  if ("modal" === rootState.routes[rootState.index].name) {
                    tmp4 = tmp3;
                  }
                }
                let key;
                if (tmp4 != null) {
                  const params = tmp4.params;
                  if (params != null) {
                    const modal = params.modal;
                    if (modal != null) {
                      key = modal.key;
                    }
                  }
                }
                tmp = key;
              }
            }
          }
          return tmp;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, _require] = closure_5(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          let obj = RootNavigationRef;
          let rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            return rootNavigationRef.addListener("state", () => {
              const obj = closure_0(dependencyMap[2]);
              const rootNavigationRef = obj.getRootNavigationRef();
              let tmp2;
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const rootState = rootNavigationRef.getRootState();
                  if (null != rootState) {
                    let tmp5;
                    if (null != rootState.routes[rootState.index]) {
                      if ("modal" === rootState.routes[rootState.index].name) {
                        tmp5 = tmp4;
                      }
                    }
                    let key;
                    if (tmp5 != null) {
                      const params = tmp5.params;
                      if (params != null) {
                        const modal = params.modal;
                        if (modal != null) {
                          key = modal.key;
                        }
                      }
                    }
                    tmp2 = key;
                  }
                }
              }
              closure_1_0(tmp2);
            });
          }
        };
        const items = [];
        cResult[1] = fn2;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      closure_4(tmp5, tmp6);
      return first1;
    }
  : () => {
      let closure_0;
      let first;
      [first, closure_0] = closure_5(() => {
        const obj = closure_0(dependencyMap[2]);
        const rootNavigationRef = obj.getRootNavigationRef();
        let tmp;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const rootState = rootNavigationRef.getRootState();
            if (null != rootState) {
              let tmp4;
              if (null != rootState.routes[rootState.index]) {
                if ("modal" === rootState.routes[rootState.index].name) {
                  tmp4 = tmp3;
                }
              }
              let key;
              if (tmp4 != null) {
                const params = tmp4.params;
                if (params != null) {
                  const modal = params.modal;
                  if (modal != null) {
                    key = modal.key;
                  }
                }
              }
              tmp = key;
            }
          }
        }
        return tmp;
      });
      const tmp3 = closure_4(() => {
        let obj = RootNavigationRef;
        let rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          return rootNavigationRef.addListener("state", () => {
            const obj = closure_0(dependencyMap[2]);
            const rootNavigationRef = obj.getRootNavigationRef();
            let tmp2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const rootState = rootNavigationRef.getRootState();
                if (null != rootState) {
                  let tmp5;
                  if (null != rootState.routes[rootState.index]) {
                    if ("modal" === rootState.routes[rootState.index].name) {
                      tmp5 = tmp4;
                    }
                  }
                  let key;
                  if (tmp5 != null) {
                    const params = tmp5.params;
                    if (params != null) {
                      const modal = params.modal;
                      if (modal != null) {
                        key = modal.key;
                      }
                    }
                  }
                  tmp2 = key;
                }
              }
            }
            closure_1_0(tmp2);
          });
        }
      }, []);
      return first;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let first1;
      let tmp5;
      let tmp6;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = closure_0(dependencyMap[2]);
          const rootNavigationRef = obj.getRootNavigationRef();
          let tmp;
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const currentRoute = rootNavigationRef.getCurrentRoute();
              let name;
              if (currentRoute != null) {
                name = currentRoute.name;
              }
              tmp = name;
            }
          }
          return tmp;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, _require] = closure_5(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          let obj = RootNavigationRef;
          let rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            return rootNavigationRef.addListener("state", () => {
              const obj = closure_0(dependencyMap[2]);
              const rootNavigationRef = obj.getRootNavigationRef();
              let tmp2;
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const currentRoute = rootNavigationRef.getCurrentRoute();
                  let name;
                  if (currentRoute != null) {
                    name = currentRoute.name;
                  }
                  tmp2 = name;
                }
              }
              closure_1_0(tmp2);
            });
          }
        };
        const items = [];
        cResult[1] = fn2;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      closure_4(tmp5, tmp6);
      return first1;
    }
  : () => {
      let closure_0;
      let first;
      [first, closure_0] = closure_5(() => {
        const obj = closure_0(dependencyMap[2]);
        const rootNavigationRef = obj.getRootNavigationRef();
        let tmp;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            let name;
            if (currentRoute != null) {
              name = currentRoute.name;
            }
            tmp = name;
          }
        }
        return tmp;
      });
      closure_4(() => {
        let obj = RootNavigationRef;
        let rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          return rootNavigationRef.addListener("state", () => {
            const obj = closure_0(dependencyMap[2]);
            const rootNavigationRef = obj.getRootNavigationRef();
            let tmp2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const currentRoute = rootNavigationRef.getCurrentRoute();
                let name;
                if (currentRoute != null) {
                  name = currentRoute.name;
                }
                tmp2 = name;
              }
            }
            closure_1_0(tmp2);
          });
        }
      }, []);
      return first;
    };
function routesBelowFirstRemoved(routes, items) {
  const findIndexResult = routes.findIndex(items);
  if (-1 !== findIndexResult) {
    return routes.slice(0, findIndexResult);
  }
}
function coerceICYMIRoute(name) {
  if (null != name) {
    if ("icymi" === name.name) {
      return name;
    }
  }
}
function coerceModalRoute(name) {
  if (null != name) {
    if ("modal" === name.name) {
      return name;
    }
  }
}
function getOpenModalKey() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null != rootState) {
        let tmp3;
        if (null != rootState.routes[rootState.index]) {
          if ("modal" === rootState.routes[rootState.index].name) {
            tmp3 = tmp2;
          }
        }
        let key;
        if (tmp3 != null) {
          const params = tmp3.params;
          if (params != null) {
            const modal = params.modal;
            if (modal != null) {
              key = modal.key;
            }
          }
        }
        return key;
      }
    }
  }
}
function getCurrentNavigationRouteName() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      let name;
      if (currentRoute != null) {
        name = currentRoute.name;
      }
      return name;
    }
  }
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx");
function popModal(PREMIUM_KEY, onExited) {
  let index;
  let obj3;
  let obj4;
  let obj5;
  let routes;
  _require = PREMIUM_KEY;
  const obj = require("RootNavigationRef");
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      let flag;
      const rootState = rootNavigationRef.getRootState();
      ({ routes, index } = rootState);
      let substr = routes;
      if (index > -1) {
        while (true) {
          let tmp5;
          let tmp3 = routes[index];
          if (null != tmp3) {
            if ("modal" === tmp3.name) {
              tmp5 = tmp3;
            }
          }
          if (null == PREMIUM_KEY) {
            if (null != PREMIUM_KEY) {
              index = index - 1;
              substr = routes;
            } else if (null != tmp5) {
              break;
            }
            break;
          } else {
            let key;
            if (tmp5 != null) {
              let params = tmp5.params;
              if (params != null) {
                let modal = params.modal;
                if (modal != null) {
                  key = modal.key;
                }
              }
            }
            if (key === PREMIUM_KEY) {
              break;
            }
          }
          let arr2 = routes;
          if (null != onExited) {
            let items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items, routes, 0);
            let obj2 = { params: obj3 };
            let merged = Object.assign(tmp5);
            obj3 = { modal: obj4 };
            let merged1 = Object.assign(tmp5.params);
            obj4 = { callbacks: obj5 };
            let merged2 = Object.assign(tmp5.params.modal);
            obj5 = { onExited };
            let merged3 = Object.assign(tmp5.params.modal.callbacks);
            items[index] = obj2;
            let dispatch2 = rootNavigationRef.dispatch;
            let CommonActions2 = require("Link").CommonActions;
            let obj6 = { routes: items, index: rootState.index };
            let reset2 = CommonActions2.reset;
            let merged4 = Object.assign(rootState);
            let dispatch2Result = dispatch2(reset2(obj6));
            arr2 = items;
          }
          substr = arr2.slice(0, index);
        }
      }
      if (substr === rootState.routes) {
        flag = false;
        if (null != onExited) {
          const resolved = Promise.resolve();
          resolved.then(() => onExited());
          flag = false;
        }
      } else if (null == onExited) {
        const dispatch = rootNavigationRef.dispatch;
        const CommonActions = require("Link").CommonActions;
        const reset = CommonActions.reset;
        const obj7 = { routes: substr, index: substr.length - 1 };
        const merged5 = Object.assign(rootState);
        dispatch(reset(obj7));
        flag = true;
      } else {
        const resolved1 = Promise.resolve();
        resolved1.then(() => popModal(PREMIUM_KEY));
        flag = true;
      }
      return flag;
    }
  }
  if (null != onExited) {
    const resolved2 = Promise.resolve();
    resolved2.then(() => onExited());
  }
  return false;
}

export const navigateToChannel = function navigateToChannel(openChannel) {
  let channelId;
  let guildId;
  let messageId;
  let obj3;
  let obj5;
  let replaceChannelAndFixRoot;
  let tmp2Result2;
  ({ channelId, guildId, messageId, replaceChannelAndFixRoot } = openChannel);
  if (replaceChannelAndFixRoot === undefined) {
    replaceChannelAndFixRoot = false;
  }
  let flag = openChannel.openChannel;
  if (flag === undefined) {
    flag = false;
  }
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (false !== replaceChannelAndFixRoot) {
        if (!flag) {
          return true;
        }
      }
      const rootState = rootNavigationRef.getRootState();
      if (replaceChannelAndFixRoot) {
        const tmp13 = coerceMainRoute(rootState.routes[0]);
        if (null != tmp13) {
          if (null != tmp13.state) {
            let obj4;
            const tmp49 = coerceChannelRoute(tmp13.state.routes[tmp13.state.index]);
            if (null != tmp49) {
              const obj2 = { params: obj3 };
              const merged = Object.assign(tmp49);
              obj4 = obj2;
              obj3 = { channelId, guildId, messageId };
            } else {
              let combined = channelId;
              if (channelId == null) {
                const _HermesInternal2 = HermesInternal;
                const tmp2Result = v1;
                combined = "channel-" + tmp2Result.v4();
              }
              obj4 = { name: "channel", key: combined, params: obj5 };
              obj5 = { channelId, guildId, messageId };
            }
            let tmp19 = null;
            const routes = tmp13.state.routes;
            for (const item10077 of routes) {
              let state;
              let tmp23 = coerceTabsRoute(item10077);
              tmp19 = tmp23;
              if (null != tmp23) {
                obj12.return();
                break;
              }
              if (tmp19 != null) {
                state = tmp19.state;
              }
              if (null != tmp19) {
                if (null != state) {
                  let obj6 = { routes: items };
                  let merged1 = Object.assign(state);
                  let items = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(items, state.routes, 0);
                  let obj7 = { state: obj6 };
                  let merged2 = Object.assign(tmp19);
                  let tmp58 = obj7;
                  if (0 !== obj6.index) {
                    obj6.index = 0;
                  }
                  let tmp28 = coerceGuildsRoute(obj6.routes[0]);
                  let tmp29 = null == tmp28;
                  if (!tmp29) {
                    let params = tmp28.params;
                    let guildId1;
                    if (params != null) {
                      guildId1 = params.guildId;
                    }
                    let tmp31 = guildId1 === guildId;
                    if (tmp31) {
                      let params2 = tmp28.params;
                      let channelId1;
                      if (params2 != null) {
                        channelId1 = params2.channelId;
                      }
                      tmp31 = channelId1 === channelId;
                    }
                    tmp29 = tmp31;
                  }
                  if (!tmp29) {
                    let obj8 = { params: obj9 };
                    let routes2 = obj6.routes;
                    let merged3 = Object.assign(tmp28);
                    let obj9 = { guildId, channelId, drawerOpen: false };
                    routes2[0] = obj8;
                  }
                  let obj10 = { state: obj11 };
                  let merged4 = Object.assign(tmp13);
                  let obj11 = { routes: items1, index: 1 };
                  let merged5 = Object.assign(tmp13.state);
                  let items1 = [tmp58, obj4];
                  let dispatch2 = rootNavigationRef.dispatch;
                  let CommonActions2 = Link.CommonActions;
                  let obj13 = { routes: items2, index: 0 };
                  let reset = CommonActions2.reset;
                  let merged6 = Object.assign(rootState);
                  let items2 = [obj10];
                  let dispatch2Result = dispatch2(reset(obj13));
                  let flag5 = true;
                  return true;
                }
              }
              return false;
            }
          }
        }
        return false;
      } else {
        const tmp6 = coerceChannelRoute(rootNavigationRef.getCurrentRoute());
        if (null != tmp6) {
          if (tmp6.params.channelId === channelId) {
            const dispatch = rootNavigationRef.dispatch;
            const obj14 = { source: tmp6.key };
            const CommonActions = Link.CommonActions;
            const obj15 = { channelId, guildId, messageId };
            const merged7 = Object.assign(CommonActions.setParams(obj15));
            dispatch(obj14);
          }
          return true;
        }
        const navigate = rootNavigationRef.navigate;
        const _HermesInternal = HermesInternal;
        const obj16 = { channelId, guildId, messageId, screenKey: "channel-" + tmp2Result2.v4() };
        tmp2Result2 = v1;
        navigate("channel", obj16);
      }
    }
  }
  return false;
};
export const navigateToRootTab = function navigateToRootTab(drawerOpen) {
  let channelId;
  let forceNavigate;
  let guildId;
  let icymiScreen;
  let obj3;
  let screen;
  let tmp2Result4;
  let obj = icymiScreen(4743);
  const rootNavigationRef = obj.getRootNavigationRef();
  ({ screen, forceNavigate } = drawerOpen);
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (null != screen) {
        if (!forceNavigate) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let name;
          if (currentRoute != null) {
            name = currentRoute.name;
          }
          forceNavigate = name !== screen;
        }
        if ("guilds" === screen) {
          ({ guildId, channelId } = drawerOpen);
          if (forceNavigate) {
            let obj2 = { screen, params: obj3 };
            obj3 = { guildId, channelId, drawerOpen: drawerOpen.drawerOpen };
            const tmp2Result = icymiScreen(4743);
            const rootNavigationRef1 = tmp2Result.getRootNavigationRef();
            if (null != rootNavigationRef1) {
              if (rootNavigationRef1.isReady()) {
                if (tmp4) {
                  const rootState = rootNavigationRef1.getRootState();
                  const obj4 = { name: "tabs", key: "tabs-" + tmp2Result4.v4(), params: obj2 };
                  const wrapRouteForRootNavigator = icymiScreen(4744).wrapRouteForRootNavigator;
                  icymiScreen(4744);
                  const _HermesInternal = HermesInternal;
                  const items = [obj4];
                  const items1 = [];
                  tmp2Result4 = icymiScreen(1266);
                  const arraySpreadResult = HermesBuiltin.arraySpread(items1, wrapRouteForRootNavigator(items), 0);
                  HermesBuiltin.arraySpread(items1, modalRoutesAboveMain(rootState.routes), arraySpreadResult);
                  const dispatch = rootNavigationRef1.dispatch;
                  let CommonActions = tmp2(1491).CommonActions;
                  const reset = CommonActions.reset;
                  const obj5 = { routes: items1, index: items1.length - 1 };
                  const merged = Object.assign(rootState);
                  dispatch(reset(obj5));
                } else {
                  rootNavigationRef1.navigate("tabs", obj2, { pop: true });
                }
              }
            }
          } else {
            const obj6 = { guildId, channelId, drawerOpen: drawerOpen.drawerOpen };
            rootNavigationRef.setParams(obj6);
          }
        } else if ("notifications" === screen) {
          if (forceNavigate) {
            rootNavigationRef.navigate("tabs", { screen: "notifications" }, { pop: true });
          }
        } else if ("icymi" === screen) {
          if (forceNavigate) {
            rootNavigationRef.navigate("tabs", { screen: "icymi" }, { pop: true });
            icymiScreen = drawerOpen.icymiScreen;
            const tmp8 = null != icymiScreen && "icymi-screen" !== icymiScreen;
            if (tmp8) {
              rootNavigationRef.dispatch(() => {
                let obj2;
                const CommonActions = Link.CommonActions;
                const obj = { screen: "icymi", params: obj2 };
                obj2 = { screen: icymiScreen };
                return CommonActions.navigate("tabs", obj);
              });
            }
          }
        }
        return true;
      }
    }
  }
  return false;
};
export const resetToAuthRoute = function resetToAuthRoute() {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  null == rootNavigationRef || !rootNavigationRef.isReady();
  if (flag) {
    rootNavigationRef.dispatch(() => {
      const CommonActions = require("Link").CommonActions;
      const reset = CommonActions.reset;
      const obj = require("getInitialNavigationState");
      return reset(obj.getInitialAuthState());
    });
    flag = true;
  }
  return flag;
};
export const pushModal = function pushModal(trigger) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const obj3 = react_nativeDefault;
  let runningTTIAutomationResult = obj3.runningTTIAutomation();
  let tmp4 = null == rootNavigationRef || !rootNavigationRef.isReady();
  if (!tmp4) {
    if (runningTTIAutomationResult) {
      runningTTIAutomationResult = trigger.trigger !== Types.ModalOpenTrigger.USER_INTERACTION;
    }
    tmp4 = runningTTIAutomationResult;
  }
  let flag = !tmp4;
  if (flag) {
    const tmpResult = ChatInputUtils;
    tmpResult.dismissKeyboard();
    rootNavigationRef.navigate("modal", trigger);
    flag = true;
  }
  return flag;
};
export { modalRoutesAboveMain };
export { routesBelowFirstRemoved };
export { popModal };
export const popModalsAboveKey = function popModalsAboveKey(voiceChannelKey) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const tmpResult = RootNavigationRef;
      const rootNavigationRef1 = tmpResult.getRootNavigationRef();
      let tmp3;
      if (null != rootNavigationRef1) {
        if (rootNavigationRef1.isReady()) {
          const rootState = rootNavigationRef1.getRootState();
          if (null != rootState) {
            let tmp6;
            if (null != rootState.routes[rootState.index]) {
              if ("modal" === rootState.routes[rootState.index].name) {
                tmp6 = tmp5;
              }
            }
            let key;
            if (tmp6 != null) {
              const params = tmp6.params;
              if (params != null) {
                const modal = params.modal;
                if (modal != null) {
                  key = modal.key;
                }
              }
            }
            tmp3 = key;
          }
        }
      }
      if (tmp3 === voiceChannelKey) {
        return false;
      } else {
        const rootState1 = rootNavigationRef.getRootState();
        const routes = rootState1.routes;
        let num2 = 0;
        let num = -1;
        if (0 < routes.length) {
          while (true) {
            let tmp9 = routes[num2];
            let tmp11;
            if (null != tmp9) {
              if ("modal" === tmp9.name) {
                tmp11 = tmp9;
              }
            }
            let key1;
            if (tmp11 != null) {
              let params2 = tmp11.params;
              if (params2 != null) {
                let modal2 = params2.modal;
                if (modal2 != null) {
                  key1 = modal2.key;
                }
              }
            }
            num = num2;
            if (key1 === voiceChannelKey) {
              break;
            } else {
              let sum = num2 + 1;
              num2 = sum;
              num = -1;
              if (sum >= routes.length) {
                break;
              }
            }
          }
        }
        if (-1 !== num) {
          if (num !== routes.length - 1) {
            const substr = routes.slice(0, num + 1);
            const dispatch = rootNavigationRef.dispatch;
            const CommonActions = Link.CommonActions;
            const reset = CommonActions.reset;
            const obj2 = { routes: substr, index: num };
            const merged = Object.assign(rootState1);
            dispatch(reset(obj2));
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
};
export const popAllModals = function popAllModals() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const findIndexResult = routes.findIndex((name) => set.has(name.name));
      let substr;
      if (-1 !== findIndexResult) {
        substr = routes.slice(0, findIndexResult);
      }
      let flag = null != substr;
      if (flag) {
        const dispatch = rootNavigationRef.dispatch;
        const CommonActions = Link.CommonActions;
        const reset = CommonActions.reset;
        const obj2 = { routes: substr, index: substr.length - 1 };
        const merged = Object.assign(rootState);
        dispatch(reset(obj2));
        flag = true;
      }
      return flag;
    }
  }
  return false;
};
export const getSelectedGuildFromRoute = function getSelectedGuildFromRoute() {
  let index;
  let routes;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let rootState;
  if (rootNavigationRef != null) {
    rootState = rootNavigationRef.getRootState();
  }
  if (null != rootState) {
    let tmp2;
    if (null != rootState.routes[rootState.index]) {
      if ("main" === rootState.routes[rootState.index].name) {
        tmp2 = tmp9;
      }
    }
    if (null != tmp2) {
      const state = tmp2.state;
      if (null != state) {
        let tmp4;
        if (null != state.routes[state.index]) {
          if ("channel" === state.routes[state.index].name) {
            tmp4 = tmp3;
          }
        }
        if (null != tmp4) {
          return tmp4.params.guildId;
        } else {
          let tmp5;
          if (null != state.routes[state.index]) {
            if ("tabs" === state.routes[state.index].name) {
              tmp5 = tmp10;
            }
          }
          if (null != tmp5) {
            const state2 = tmp5.state;
            if (null != state2) {
              ({ index, routes } = state2);
              if (index == null) {
                index = -1;
              }
              let tmp7;
              if (null != routes[index]) {
                if ("guilds" === routes[index].name) {
                  tmp7 = tmp6;
                }
              }
              let guildId;
              if (tmp7 != null) {
                const params = tmp7.params;
                if (params != null) {
                  guildId = params.guildId;
                }
              }
              return guildId;
            }
          }
        }
      }
    }
  }
};
export const getSelectedChannelFromRoute = function getSelectedChannelFromRoute() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    let currentRoute;
    if (rootNavigationRef != null) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    let tmp2;
    if (null != currentRoute) {
      if ("channel" === currentRoute.name) {
        tmp2 = currentRoute;
      }
    }
    if (null != tmp2) {
      return tmp2.params.channelId;
    } else {
      let tmp3;
      if (null != currentRoute) {
        if ("guilds" === currentRoute.name) {
          tmp3 = currentRoute;
        }
      }
      let tmp4;
      if (null != tmp3) {
        const params = tmp3.params;
        let channelId;
        if (params != null) {
          channelId = params.channelId;
        }
        tmp4 = channelId;
      }
      return tmp4;
    }
  }
};
export const navigateToNewGroupDM = function navigateToNewGroupDM(channelId, locationPage) {
  let obj3;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    const obj2 = { screen: "gdm", params: obj3 };
    obj3 = { channelId, locationPage };
    rootNavigationRef.navigate("friends", obj2);
    flag = true;
  }
  return flag;
};
export const navigateToCreateThread = function navigateToCreateThread(guild_id, id) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    flag = true;
    if (rootNavigationRef != null) {
      const navigate = rootNavigationRef.navigate;
      const obj2 = {
        guildId: guild_id,
        channelId: id,
        showCreateThread: true,
        screenKey: Types.CREATE_THREAD_SCREEN_KEY,
      };
      navigate("channel", obj2);
      flag = true;
    }
  }
  return flag;
};
export const navigateToContextMenuCommands = function navigateToContextMenuCommands(params) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    const obj2 = { screen: "root", params };
    rootNavigationRef.navigate("context-menu-commands", obj2);
    flag = true;
  }
  return flag;
};
export const popScreens = function popScreens(arg0) {
  _require = arg0;
  let obj = require("RootNavigationRef");
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    rootNavigationRef.dispatch(() => {
      let diff;
      const rootState = rootNavigationRef.getRootState();
      const items = [...rootState.routes];
      if (closure_0 > 0) {
        do {
          let arr = items.pop();
          diff = closure_0 - 1;
          closure_0 = diff;
        } while (diff > 0);
      }
      const CommonActions = Link.CommonActions;
      const reset = CommonActions.reset;
      const obj = { routes: items };
      const merged = Object.assign(rootState);
      return reset(obj);
    });
    flag = true;
  }
  return flag;
};
export { coerceMainRoute };
export { coerceChannelRoute };
export const coerceSidebarRoute = function coerceSidebarRoute(name) {
  if (null != name) {
    if ("sidebar" === name.name) {
      return name;
    }
  }
};
export { coerceTabsRoute };
export { coerceGuildsRoute };
export { coerceICYMIRoute };
export { coerceModalRoute };
export { isModalOpen };
export const useIsModalOpen = tmp4;
export { getOpenModalKey };
export const useOpenModalKey = tmp5;
export { getCurrentNavigationRouteName };
export const useCurrentNavigationRouteName = tmp6;
export const getCurrentRouteParents = function getCurrentRouteParents() {
  let index;
  let index2;
  let index3;
  let routes;
  let routes2;
  let routes3;
  let state2;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let state1;
      if (rootState != null) {
        ({ index, routes } = rootState);
        if (index == null) {
          index = 0;
        }
        state1 = routes[index].state;
      }
      const items = [];
      let tmp3 = rootState;
      let tmp4 = rootState;
      if (null != state1) {
        do {
          let arr = items.push(tmp3);
          ({ index: index2, routes: routes2 } = tmp3);
          if (index2 == null) {
            index2 = 0;
          }
          let state = routes2[index2].state;
          state2 = undefined;
          if (state != null) {
            ({ index: index3, routes: routes3 } = state);
            if (index3 == null) {
              index3 = 0;
            }
            state2 = routes3[index3].state;
          }
          tmp3 = state;
          tmp4 = state;
        } while (null != state2);
      }
      if (null != tmp4) {
        items.push(tmp4);
      }
      return items;
    }
  }
  return [];
};
export const getTabsRouteIfActive = function getTabsRouteIfActive(arg0) {
  let tmp2;
  if (null != arg0.routes[arg0.index]) {
    if ("main" === arg0.routes[arg0.index].name) {
      tmp2 = tmp;
    }
  }
  let state;
  if (tmp2 != null) {
    state = tmp2.state;
  }
  if (null != state) {
    let num = tmp2.state.index;
    const routes = tmp2.state.routes;
    if (num == null) {
      num = 0;
    }
    let tmp5;
    if (null != routes[num]) {
      if ("tabs" === routes[num].name) {
        tmp5 = tmp4;
      }
    }
    return tmp5;
  }
};
export const getICYMIRouteIfActive = function getICYMIRouteIfActive(routes) {
  let tmp;
  if (routes != null) {
    let index;
    routes = routes.routes;
    if (routes != null) {
      index = routes.index;
    }
    tmp = routes[index];
  }
  let tmp3;
  if (null != tmp) {
    if ("main" === tmp.name) {
      tmp3 = tmp;
    }
  }
  let state;
  if (tmp3 != null) {
    state = tmp3.state;
  }
  if (null != state) {
    const first = tmp3.state.routes[0];
    let tmp6;
    if (null != first) {
      if ("tabs" === first.name) {
        tmp6 = first;
      }
    }
    let state1;
    if (tmp6 != null) {
      state1 = tmp6.state;
    }
    if (null != state1) {
      let tmp9;
      if (null != tmp6.state.routes[tmp6.state.index]) {
        if ("icymi" === tmp6.state.routes[tmp6.state.index].name) {
          tmp9 = tmp8;
        }
      }
      return tmp9;
    }
  }
};
export const setHomeDrawerState = function setHomeDrawerState(drawerOpen) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    let currentRoute;
    if (rootNavigationRef != null) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    let tmp2 = null != currentRoute;
    if (tmp2) {
      let tmp3;
      if (null != currentRoute) {
        if ("guilds" === currentRoute.name) {
          tmp3 = currentRoute;
        }
      }
      tmp2 = null != tmp3;
    }
    if (tmp2) {
      const obj2 = { drawerOpen };
      rootNavigationRef.setParams(obj2);
    }
  }
};
