// discord_app/modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx
import v1 from "../../../../_runtime/01255_v1.js";
import Link from "../../../../_runtime/01485_Link.js";
import RootNavigationRef from "../RootNavigationRef.native.tsx";
import NativeTTIManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import Types from "../Types.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

require = fn;
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
function coerceTabsRoute(routes4) {
  if (null != routes4) {
    if ("tabs" === routes4.name) {
      return routes4;
    }
  }
}
function coerceGuildsRoute(currentRoute) {
  if (null != currentRoute) {
    return currentRoute;
  }
}
function isModalOpen(dependencyMap) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        if (null == dependencyMap) {
          let tmp5 = null != tmp2;
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
          let modal1;
          if (tmp2 != null) {
            const params = tmp2.params;
            if (params != null) {
              const modal = params.modal;
              if (modal != null) {
                modal1 = modal.modal;
              }
            }
          }
          tmp5 = modal1 === dependencyMap;
        }
        return tmp5;
      }
    }
  }
  return false;
}
const noop = fn(19);
({ useLayoutEffect: closure_4, useState: hasOwnProperty } = noop);
const set = new Set(["friends", "sidebar", "message-requests", "modal"]);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx");
function popModal(c3, onExited) {
  _require = c3;
  const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      ({ routes, index } = rootState);
      let tmp2 = routes;
      if (index > -1) {
        while (true) {
          let tmp3 = routes[index];
          if (null != tmp3) {
            if ("modal" === tmp3.name) {
              let tmp5 = tmp3;
            }
          }
          if (null == c3) {
            if (null != c3) {
              index = index - 1;
              tmp2 = routes;
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
            if (key === c3) {
              break;
            }
          }
          let tmp7 = routes;
          if (null != onExited) {
            let items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(routes, 0);
            let obj2 = {};
            let merged = Object.assign(tmp5);
            let obj3 = {};
            let merged1 = Object.assign(tmp5.params);
            let obj4 = {};
            let merged2 = Object.assign(tmp5.params.modal);
            let obj5 = {};
            let merged3 = Object.assign(tmp5.params.modal.callbacks);
            obj5.onExited = onExited;
            obj4.callbacks = obj5;
            obj3.modal = obj4;
            obj2.params = obj3;
            items[index] = obj2;
            let CommonActions2 = require("Link").CommonActions;
            let obj6 = {};
            let merged4 = Object.assign(rootState);
            obj6.routes = items;
            obj6.index = rootState.index;
            let dispatchResult = rootNavigationRef.dispatch(CommonActions2.reset(obj6));
            tmp7 = items;
          }
          let items1 = [];
          let arraySpreadResult2 = HermesBuiltin.arraySpread(tmp7, 0);
          let spliceResult = items1.splice(index, 1);
          tmp2 = items1;
        }
      }
      if (tmp2 === rootState.routes) {
        let flag = false;
        if (null != onExited) {
          const resolved = Promise.resolve();
          resolved.then(() => onExited());
          flag = false;
        }
      } else if (null == onExited) {
        const CommonActions = require("Link").CommonActions;
        const obj7 = {};
        const merged5 = Object.assign(rootState);
        obj7.routes = tmp2;
        const _Math = Math;
        obj7.index = Math.max(rootState.index - 1, 0);
        rootNavigationRef.dispatch(CommonActions.reset(obj7));
        flag = true;
      } else {
        const resolved1 = Promise.resolve();
        resolved1.then(() => popModal(closure_0));
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
  ({ channelId, guildId, messageId, replaceChannelAndFixRoot } = openChannel);
  if (replaceChannelAndFixRoot === undefined) {
    replaceChannelAndFixRoot = false;
  }
  let flag = openChannel.openChannel;
  if (flag === undefined) {
    flag = false;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (false !== replaceChannelAndFixRoot) {
        if (!flag) {
          return true;
        }
      }
      if (replaceChannelAndFixRoot) {
        const tmp12 = coerceMainRoute(tmp3.routes[0]);
        if (null != tmp12) {
          if (null != tmp12.state) {
            let tmp21 = coerceChannelRoute(tmp12.state.routes[tmp12.state.index]);
            if (null != tmp21) {
              const obj2 = {};
              const merged = Object.assign(tmp21);
              const obj3 = { channelId, guildId, messageId };
              obj2.params = obj3;
            } else {
              let combined = channelId;
              if (channelId == null) {
                const _HermesInternal2 = HermesInternal;
                combined = "channel-" + v1.v4();
                const tmpResult = v1;
              }
              const obj4 = { name: "channel", key: combined, params: null };
              const obj5 = { channelId, guildId, messageId };
              obj4.params = obj5;
            }
            messageId = tmp12.state.routes;
            tmp21 = messageId[Symbol.iterator]();
          }
        }
        return false;
      } else {
        const tmp5 = coerceChannelRoute(rootNavigationRef.getCurrentRoute());
        if (null != tmp5) {
          if (tmp5.params.channelId === channelId) {
            const obj6 = {};
            const CommonActions = Link.CommonActions;
            const obj7 = { channelId, guildId, messageId };
            const merged1 = Object.assign(CommonActions.setParams(obj7));
            obj6.source = tmp5.key;
            rootNavigationRef.dispatch(obj6);
          }
          return true;
        }
        const obj8 = { channelId, guildId, messageId, screenKey: null };
        const _HermesInternal = HermesInternal;
        obj8.screenKey = "channel-" + v1.v4();
        rootNavigationRef.navigate("channel", obj8);
        const tmpResult2 = v1;
      }
    }
  }
  return false;
};
export const navigateToMemberVerification = function navigateToMemberVerification(guildId, inviteCode) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp;
  if (!tmp) {
    const obj2 = { guildId, inviteCode };
    rootNavigationRef.navigate("member-verification", obj2);
    flag = true;
  }
  return flag;
};
export const navigateToRootTab = function navigateToRootTab(drawerOpen) {
  const rootNavigationRef = icymiScreen(4580).getRootNavigationRef();
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
            const obj2 = { screen, params: null };
            const obj3 = { guildId, channelId, drawerOpen: drawerOpen.drawerOpen };
            obj2.params = obj3;
            const rootNavigationRef1 = tmp(4580).getRootNavigationRef();
            if (null != rootNavigationRef1) {
              if (rootNavigationRef1.isReady()) {
                if (tmp3) {
                  const rootState = rootNavigationRef1.getRootState();
                  const routes = rootState.routes;
                  const found = routes.filter((name) => "modal" === name.name);
                  const obj4 = { name: "tabs", key: null, params: null };
                  const tmpResult3 = tmp(4581);
                  const _HermesInternal = HermesInternal;
                  obj4.key = "tabs-" + tmp(1255).v4();
                  obj4.params = obj2;
                  const items = [obj4];
                  const items1 = [];
                  HermesBuiltin.arraySpread(
                    found,
                    HermesBuiltin.arraySpread(tmpResult3.wrapRouteForRootNavigator(items), 0),
                  );
                  let CommonActions = tmp(1485).CommonActions;
                  const obj5 = {};
                  const merged = Object.assign(rootState);
                  obj5.routes = items1;
                  obj5.index = items1.length - 1;
                  rootNavigationRef1.dispatch(CommonActions.reset(obj5));
                  const tmpResult4 = tmp(1255);
                } else {
                  rootNavigationRef1.navigate("tabs", obj2, { pop: true });
                }
              }
            }
            const tmpResult = tmp(4580);
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
            let tmp7 = null != icymiScreen;
            if (tmp7) {
              tmp7 = "icymi-screen" !== icymiScreen;
            }
            if (tmp7) {
              rootNavigationRef.dispatch(() => {
                const CommonActions = Link.CommonActions;
                const obj = { screen: "icymi", params: { screen: icymiScreen } };
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
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp;
  if (!tmp) {
    rootNavigationRef.dispatch(() => {
      const CommonActions = require("Link").CommonActions;
      return CommonActions.reset(require("getInitialNavigationState").getInitialAuthState());
    });
    flag = true;
  }
  return flag;
};
export const pushModal = function pushModal(trigger) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let runningTTIAutomationResult = NativeTTIManagerModuleDefault.runningTTIAutomation();
  let tmp4 = null == rootNavigationRef || !rootNavigationRef.isReady();
  if (!tmp4) {
    if (runningTTIAutomationResult) {
      runningTTIAutomationResult = trigger.trigger !== Types.ModalOpenTrigger.USER_INTERACTION;
    }
    tmp4 = runningTTIAutomationResult;
  }
  let flag = !tmp4;
  if (!tmp4) {
    ChatInputUtils.dismissKeyboard();
    rootNavigationRef.navigate("modal", trigger);
    flag = true;
    const tmpResult = ChatInputUtils;
  }
  return flag;
};
export { popModal };
export const popModalsAboveKey = function popModalsAboveKey(voiceChannelKey) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
      let tmp3;
      if (null != rootNavigationRef1) {
        if (rootNavigationRef1.isReady()) {
          const rootState = rootNavigationRef1.getRootState();
          if (null != rootState) {
            let tmp6;
            if (null != rootState.routes[rootState.index]) {
              if ("modal" === tmp5.name) {
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
            const CommonActions = Link.CommonActions;
            const obj2 = {};
            const merged = Object.assign(rootState1);
            obj2.routes = substr;
            obj2.index = num;
            rootNavigationRef.dispatch(CommonActions.reset(obj2));
            return true;
          }
        }
        return false;
      }
      const tmpResult = RootNavigationRef;
    }
  }
  return false;
};
export const popAllModals = function popAllModals() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const items = [];
      for (const item10016 of routes) {
        if (!set.has(item10016.name)) {
          let arr = items.push(item10016);
        }
        continue;
      }
      let flag = routes.length !== items.length;
      if (flag) {
        const CommonActions = Link.CommonActions;
        const obj2 = {};
        const merged = Object.assign(rootState);
        obj2.routes = items;
        obj2.index = items.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj2));
        flag = true;
      }
      return flag;
    }
  }
  return false;
};
export const getSelectedGuildFromRoute = function getSelectedGuildFromRoute() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let rootState;
  if (rootNavigationRef != null) {
    rootState = rootNavigationRef.getRootState();
  }
  if (null != rootState) {
    let tmp2;
    if (null != rootState.routes[rootState.index]) {
      if ("main" === tmp9.name) {
        tmp2 = tmp9;
      }
    }
    if (null != tmp2) {
      const state = tmp2.state;
      if (null != state) {
        let tmp4;
        if (null != state.routes[state.index]) {
          if ("channel" === tmp3.name) {
            tmp4 = tmp3;
          }
        }
        if (null != tmp4) {
          return tmp4.params.guildId;
        } else {
          let tmp5;
          if (null != state.routes[state.index]) {
            if ("tabs" === tmp10.name) {
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
                if ("guilds" === tmp6.name) {
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
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    const obj2 = { screen: "gdm", params: null };
    const obj3 = { channelId, locationPage };
    obj2.params = obj3;
    rootNavigationRef.navigate("friends", obj2);
    flag = true;
  }
  return flag;
};
export const navigateToCreateThread = function navigateToCreateThread(guild_id, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    flag = true;
    if (rootNavigationRef != null) {
      const obj2 = {
        guildId: guild_id,
        channelId: id,
        showCreateThread: true,
        screenKey: Types.CREATE_THREAD_SCREEN_KEY,
      };
      rootNavigationRef.navigate("channel", obj2);
      flag = true;
    }
  }
  return flag;
};
export const navigateToContextMenuCommands = function navigateToContextMenuCommands(params) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
  const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
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
      const obj = {};
      const merged = Object.assign(rootState);
      obj.routes = items;
      return CommonActions.reset(obj);
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
export const coerceICYMIRoute = function coerceICYMIRoute(name) {
  if (null != name) {
    if ("icymi" === name.name) {
      return name;
    }
  }
};
export const coerceModalRoute = function coerceModalRoute(name) {
  if (null != name) {
    if ("modal" === name.name) {
      return name;
    }
  }
};
export { isModalOpen };
export const useIsModalOpen = function useIsModalOpen(SHARE_PREPARING_MODAL_KEY) {
  closure_0 = SHARE_PREPARING_MODAL_KEY;
  const tmp = _slicedToArray(
    closure_5(() => isModalOpen(closure_0)),
    2,
  );
  closure_1 = tmp[1];
  const items = [SHARE_PREPARING_MODAL_KEY];
  closure_4(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        closure_1_1(isModalOpen(SHARE_PREPARING_MODAL_KEY));
      });
    }
  }, items);
  return tmp[0];
};
export const getOpenModalKey = function getOpenModalKey() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null != rootState) {
        let tmp3;
        if (null != rootState.routes[rootState.index]) {
          if ("modal" === tmp2.name) {
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
};
export const useOpenModalKey = function useOpenModalKey() {
  let tmp = _slicedToArray(
    closure_5(() => {
      const rootNavigationRef = closure_0(4580).getRootNavigationRef();
      let tmp;
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const rootState = rootNavigationRef.getRootState();
          if (null != rootState) {
            let tmp4;
            if (null != rootState.routes[rootState.index]) {
              if ("modal" === tmp3.name) {
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
    }),
    2,
  );
  closure_0 = tmp[1];
  closure_4(() => {
    let rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        const rootNavigationRef = closure_0(4580).getRootNavigationRef();
        let tmp2;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const rootState = rootNavigationRef.getRootState();
            if (null != rootState) {
              let tmp5;
              if (null != rootState.routes[rootState.index]) {
                if ("modal" === tmp4.name) {
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
        const obj = closure_0(4580);
      });
    }
  }, []);
  return tmp[0];
};
export const getCurrentNavigationRouteName = function getCurrentNavigationRouteName() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
};
export const useCurrentNavigationRouteName = function useCurrentNavigationRouteName() {
  let tmp = _slicedToArray(
    closure_5(() => {
      const rootNavigationRef = closure_0(4580).getRootNavigationRef();
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
    }),
    2,
  );
  closure_0 = tmp[1];
  closure_4(() => {
    let rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        const rootNavigationRef = closure_0(4580).getRootNavigationRef();
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
        const obj = closure_0(4580);
      });
    }
  }, []);
  return tmp[0];
};
export const getCurrentRouteParents = function getCurrentRouteParents() {
  let state2;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
    if ("main" === tmp.name) {
      tmp2 = tmp;
    }
  }
  let state;
  if (tmp2 != null) {
    state = tmp2.state;
  }
  if (null != state) {
    let num = tmp2.state.index;
    if (num == null) {
      num = 0;
    }
    let tmp5;
    if (null != tmp2.state.routes[num]) {
      if ("tabs" === tmp4.name) {
        tmp5 = tmp4;
      }
    }
    return tmp5;
  }
};
export const getICYMIRouteIfActive = function getICYMIRouteIfActive(index) {
  let tmp;
  if (index != null) {
    index = undefined;
    if (index != null) {
      index = index.index;
    }
    tmp = index.routes[index];
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
        if ("icymi" === tmp8.name) {
          tmp9 = tmp8;
        }
      }
      return tmp9;
    }
  }
};
export const setHomeDrawerState = function setHomeDrawerState(drawerOpen) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
