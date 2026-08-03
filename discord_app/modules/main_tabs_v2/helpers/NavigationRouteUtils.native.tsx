// === Module 4044: navigationToRootTabHelper ===

// Module 4044 (navigationToRootTabHelper)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ME } from "ME";
import set from "ME";

let c4;
let c5;
const require = arg1;
function navigationToRootTabHelper(arg0, resetRoot) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (resetRoot) {
        const rootState = rootNavigationRef.getRootState();
        const routes = rootState.routes;
        const found = routes.filter((name) => "modal" === name.name);
        let tmpResult = tmp(4046);
        obj = { name: "tabs", key: null, params: null };
        tmpResult = tmp(514);
        const _HermesInternal = HermesInternal;
        obj[1] = "tabs-" + tmpResult.v4();
        obj[2] = arg0;
        const items = [obj];
        const items1 = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmpResult.wrapRouteForRootNavigator(items), 0));
        const CommonActions = tmp(1481).CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj.routes = items1;
        obj.index = items1.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
      } else {
        rootNavigationRef.navigate("tabs", arg0);
      }
    }
  }
  return false;
}
function coerceMainRoute(name) {
  if (null != name) {
    if ("main" === name.name) {
      return name;
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
function coerceTabsRoute(name) {
  if (null != name) {
    if ("tabs" === name.name) {
      return name;
    }
  }
}
function coerceGuildsRoute(currentRoute) {
  if (null != currentRoute) {
    return currentRoute;
  }
}
function isModalOpen(voiceChannelKey) {
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        if (null == voiceChannelKey) {
          let tmp5 = null != tmp2;
        } else if (typeof voiceChannelKey === "y") {
          let key;
          if (tmp2 != null) {
            key = tmp2.key;
          }
          tmp5 = key === voiceChannelKey;
        } else {
          let modal;
          if (tmp2 != null) {
            const params = tmp2.params;
            if (params != null) {
              modal = params.modal;
              if (modal != null) {
                modal = modal.modal;
              }
            }
          }
          tmp5 = modal === voiceChannelKey;
        }
        return tmp5;
      }
    }
  }
  return false;
}
({ useLayoutEffect: c4, useState: c5 } = noop);
let set = new Set(["friends", "sidebar", "message-requests", "modal"]);
const result = set.fileFinishedImporting("modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx");
function popModal(c3, onExited) {
  let index;
  let routes;
  const _require = c3;
  let closure_1 = onExited;
  let obj = _require(4045);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      ({ routes, index } = rootState);
      let tmp2 = routes;
      if (index > -1) {
        while (true) {
          let tmp3 = routes[index];
          let tmp4 = index;
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
              key = tmp5.key;
            }
            if (key === c3) {
              break;
            }
          }
          let tmp7 = routes;
          if (null != onExited) {
            let items = [];
            let num6 = 0;
            let tmp25 = items;
            let tmp26 = routes;
            let arraySpreadResult = HermesBuiltin.arraySpread(routes, 0);
            obj = {};
            let tmp28 = obj;
            let tmp29 = tmp5;
            let merged = Object.assign(tmp5);
            obj = {};
            let tmp31 = obj;
            let merged1 = Object.assign(tmp5.params);
            let obj1 = {};
            let tmp33 = obj1;
            let merged2 = Object.assign(tmp5.params.modal);
            let obj2 = {};
            let tmp35 = obj2;
            let merged3 = Object.assign(tmp5.params.modal.callbacks);
            obj2.onExited = onExited;
            obj1.callbacks = obj2;
            obj.modal = obj1;
            obj.params = obj;
            items[index] = obj;
            let tmp37 = _require;
            let tmp38 = dependencyMap;
            let CommonActions2 = _require(1481).CommonActions;
            let obj3 = {};
            let tmp39 = obj3;
            let tmp40 = rootState;
            let merged4 = Object.assign(rootState);
            obj3.routes = items;
            obj3.index = rootState.index;
            let dispatchResult = rootNavigationRef.dispatch(CommonActions2.reset(obj3));
            tmp7 = items;
          }
          let items1 = [];
          let num2 = 0;
          let tmp8 = items1;
          let tmp9 = tmp7;
          arraySpreadResult = HermesBuiltin.arraySpread(tmp7, 0);
          let num3 = 1;
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
        const CommonActions = _require(1481).CommonActions;
        const obj4 = {};
        const merged5 = Object.assign(rootState);
        obj4.routes = tmp2;
        const _Math = Math;
        obj4.index = Math.max(rootState.index - 1, 0);
        rootNavigationRef.dispatch(CommonActions.reset(obj4));
        flag = true;
      } else {
        const resolved1 = Promise.resolve();
        resolved1.then(() => outer1_14(closure_0));
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

export const navigateToChannel = function navigateToChannel(channelId) {
  let guildId;
  let messageId;
  let replaceChannelAndFixRoot;
  ({ channelId, guildId, messageId, replaceChannelAndFixRoot } = channelId);
  if (replaceChannelAndFixRoot === undefined) {
    replaceChannelAndFixRoot = false;
  }
  let flag = channelId.openChannel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (false !== replaceChannelAndFixRoot) {
        if (!flag) {
          return true;
        }
      }
      if (replaceChannelAndFixRoot) {
        const tmp9 = coerceMainRoute(tmp3.routes[0]);
        if (null != tmp9) {
          if (null != tmp9.state) {
            let tmp18 = coerceChannelRoute(tmp9.state.routes[tmp9.state.index]);
            if (null != tmp18) {
              obj = {};
              const merged = Object.assign(tmp18);
              obj = { channelId: null, guildId: null, messageId: null };
              obj[0] = channelId;
              obj[1] = guildId;
              obj[2] = messageId;
              obj.params = obj;
            } else {
              let combined = channelId;
              if (channelId == null) {
                let tmpResult = tmp(514);
                const _HermesInternal2 = HermesInternal;
                combined = "channel-" + tmpResult.v4();
              }
              const obj1 = { name: "channel", key: null, params: null };
              obj1[1] = combined;
              const obj2 = { channelId: null, guildId: null, messageId: null };
              obj2[0] = channelId;
              obj2[1] = guildId;
              obj2[2] = messageId;
              obj1[2] = obj2;
            }
            messageId = tmp9.state.routes;
            tmp18 = messageId[Symbol.iterator]();
          }
        }
        return false;
      } else {
        const tmp5 = coerceChannelRoute(rootNavigationRef.getCurrentRoute());
        if (null != tmp5) {
          if (tmp5.params.channelId === channelId) {
            let key = tmp5.key;
          }
          const CommonActions = tmp(1481).CommonActions;
          const obj3 = { name: "channel", key: null, params: null };
          obj3[1] = key;
          const obj4 = { channelId: null, guildId: null, messageId: null };
          obj4[0] = channelId;
          obj4[1] = guildId;
          obj4[2] = messageId;
          obj3[2] = obj4;
          rootNavigationRef.dispatch(CommonActions.navigate(obj3));
          return true;
        }
        tmpResult = tmp(514);
        const _HermesInternal = HermesInternal;
        key = "channel-" + tmpResult.v4();
      }
    }
  }
  return false;
};
export const navigateToMemberVerification = function navigateToMemberVerification(guildId, inviteCode) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp3 = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp3;
  if (!tmp3) {
    obj = { name: "member-verification", key: null, params: null };
    const _HermesInternal = HermesInternal;
    obj[1] = "member-verification-" + require(514) /* v1 */.v4();
    obj = { guildId: null, inviteCode: null };
    obj[0] = guildId;
    obj[1] = inviteCode;
    obj[2] = obj;
    rootNavigationRef.navigate(obj);
    flag = true;
    const tmpResult = require(514) /* v1 */;
  }
  return flag;
};
export const navigateToRootTab = function navigateToRootTab(drawerOpen) {
  let channelId;
  let forceNavigate;
  let guildId;
  let resetRoot;
  let screen;
  let obj = icymiScreen(4045);
  const rootNavigationRef = obj.getRootNavigationRef();
  ({ screen, resetRoot, forceNavigate } = drawerOpen);
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
            obj = { screen: null, params: null };
            obj[0] = screen;
            obj = { guildId: null, channelId: null, drawerOpen: null };
            obj[0] = guildId;
            obj[1] = channelId;
            obj[2] = drawerOpen.drawerOpen;
            obj[1] = obj;
            navigationToRootTabHelper(obj, resetRoot);
          } else {
            const obj1 = { guildId: null, channelId: null, drawerOpen: null };
            obj1[0] = guildId;
            obj1[1] = channelId;
            obj1[2] = drawerOpen.drawerOpen;
            rootNavigationRef.setParams(obj1);
          }
        } else if ("messages" === screen) {
          if (forceNavigate) {
            const obj2 = { screen: "guilds", params: null };
            const obj3 = { guildId: null };
            obj3[0] = ME;
            obj2[1] = obj3;
            navigationToRootTabHelper(obj2, resetRoot);
          }
        } else if ("notifications" === screen) {
          if (forceNavigate) {
            rootNavigationRef.navigate("tabs", { screen: "notifications" });
          }
        } else if ("icymi" === screen) {
          if (forceNavigate) {
            rootNavigationRef.navigate("tabs", { screen: "icymi" });
            icymiScreen = drawerOpen.icymiScreen;
            let tmp4 = null != icymiScreen;
            if (tmp4) {
              tmp4 = "icymi-screen" !== icymiScreen;
            }
            if (tmp4) {
              rootNavigationRef.dispatch(() => {
                const CommonActions = icymiScreen(outer1_2[5]).CommonActions;
                const params = { screen: icymiScreen };
                return CommonActions.navigate("tabs", { screen: "icymi", params });
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
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let flag = !tmp;
  if (!tmp) {
    rootNavigationRef.dispatch(() => {
      const CommonActions = callback(1481).CommonActions;
      return CommonActions.reset(callback(4046).getInitialAuthState());
    });
    flag = true;
  }
  return flag;
};
export const pushModal = function pushModal(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp5 = null == rootNavigationRef;
  const obj3 = importDefault(4051);
  if (!tmp5) {
    tmp5 = !rootNavigationRef.isReady();
  }
  if (!tmp5) {
    tmp5 = runningTTIAutomationResult;
  }
  let flag = !tmp5;
  if (!tmp5) {
    tmp2(4052).dismissKeyboard();
    if (key == null) {
      const _HermesInternal = HermesInternal;
      key = "modal-" + tmp2(514).v4;
    }
    obj = { name: "modal", key: null, params: null };
    obj[1] = key;
    obj[2] = merged;
    rootNavigationRef.navigate(obj);
    flag = true;
    const tmp2Result = tmp2(4052);
  }
  return flag;
};
export { popModal };
export const popModalsAboveKey = function popModalsAboveKey(voiceChannelKey) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootNavigationRef1 = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
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
              key = tmp6.key;
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
            let tmp10 = num2;
            let tmp11;
            if (null != tmp9) {
              if ("modal" === tmp9.name) {
                tmp11 = tmp9;
              }
            }
            let key1;
            if (tmp11 != null) {
              key1 = tmp11.key;
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
            const CommonActions = require(1481) /* Link */.CommonActions;
            obj = {};
            const merged = Object.assign(rootState1);
            obj.routes = substr;
            obj.index = num;
            rootNavigationRef.dispatch(CommonActions.reset(obj));
            return true;
          }
        }
        return false;
      }
      const tmpResult = require(4045) /* getRootNavigationRef */;
    }
  }
  return false;
};
export const popAllModals = function popAllModals() {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const items = [];
      for (const item10016 of routes) {
        let tmp5 = set;
        let tmp4 = item10016;
        if (!set.has(item10016.name)) {
          let tmp6 = item10016;
          let arr = items.push(tmp4);
        }
        continue;
      }
      let flag = routes.length !== items.length;
      if (flag) {
        const CommonActions = require(1481) /* Link */.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj.routes = items;
        obj.index = items.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
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
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
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
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
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
  const obj = require(4045) /* getRootNavigationRef */;
};
export const navigateToNewGroupDM = function navigateToNewGroupDM(id, CHANNEL_CALL) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    obj = { screen: "gdm", params: null };
    obj = { channelId: null, locationPage: null };
    obj[0] = id;
    obj[1] = CHANNEL_CALL;
    obj[1] = obj;
    rootNavigationRef.navigate("friends", obj);
    flag = true;
  }
  return flag;
};
export const navigateToCreateThread = function navigateToCreateThread(guild_id, id) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    flag = true;
    if (rootNavigationRef != null) {
      obj = { name: "channel", key: "new-thread", params: null };
      obj = { guildId: null, channelId: null, showCreateThread: true };
      obj[0] = guild_id;
      obj[1] = id;
      obj[2] = obj;
      rootNavigationRef.navigate(obj);
      flag = true;
    }
  }
  return flag;
};
export const navigateToContextMenuCommands = function navigateToContextMenuCommands(arg0) {
  let obj = require(4045) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    obj = { screen: "root", params: null };
    obj[1] = arg0;
    rootNavigationRef.navigate("context-menu-commands", obj);
    flag = true;
  }
  return flag;
};
export const popScreens = function popScreens(arg0) {
  const _require = arg0;
  const rootNavigationRef = _require(4045).getRootNavigationRef();
  let flag = null != rootNavigationRef;
  if (flag) {
    rootNavigationRef.dispatch(() => {
      let callback;
      let diff;
      const rootState = rootNavigationRef.getRootState();
      const items = [...rootState.routes];
      if (callback > 0) {
        do {
          let arr = items.pop();
          let tmp3 = callback;
          diff = callback - 1;
          callback = diff;
        } while (diff > 0);
      }
      const CommonActions = callback(outer1_2[5]).CommonActions;
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
export const useIsModalOpen = function useIsModalOpen(voiceChannelKey) {
  let closure_0 = voiceChannelKey;
  const tmp = callback(callback3(() => outer1_13(closure_0)), 2);
  let closure_1 = tmp[1];
  const items = [voiceChannelKey];
  callback2(() => {
    const rootNavigationRef = voiceChannelKey(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        callback(outer1_13(closure_0));
      });
    }
    const obj = voiceChannelKey(outer1_2[3]);
  }, items);
  return tmp[0];
};
export const getOpenModalKey = function getOpenModalKey() {
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
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
          key = tmp3.key;
        }
        return key;
      }
    }
  }
};
export const useOpenModalKey = function useOpenModalKey() {
  let tmp = callback(callback3(() => {
    const rootNavigationRef = callback(table[3]).getRootNavigationRef();
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
            key = tmp4.key;
          }
          tmp = key;
        }
      }
    }
    return tmp;
  }), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    let rootNavigationRef = callback(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        const rootNavigationRef = outer1_0(outer1_2[3]).getRootNavigationRef();
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
                key = tmp5.key;
              }
              tmp2 = key;
            }
          }
        }
        closure_0(tmp2);
      });
    }
    const obj = callback(outer1_2[3]);
  }, []);
  return tmp[0];
};
export const getCurrentNavigationRouteName = function getCurrentNavigationRouteName() {
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
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
  let tmp = callback(callback3(() => {
    const rootNavigationRef = callback(table[3]).getRootNavigationRef();
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
  }), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    let rootNavigationRef = callback(outer1_2[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      return rootNavigationRef.addListener("state", () => {
        const rootNavigationRef = outer1_0(outer1_2[3]).getRootNavigationRef();
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
        closure_0(tmp2);
      });
    }
    const obj = callback(outer1_2[3]);
  }, []);
  return tmp[0];
};
export const getCurrentRouteParents = function getCurrentRouteParents() {
  let index;
  let index2;
  let index3;
  let routes;
  let routes2;
  let routes3;
  let state1;
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let state;
      if (rootState != null) {
        ({ index, routes } = rootState);
        if (index == null) {
          index = 0;
        }
        state = routes[index].state;
      }
      const items = [];
      let tmp3 = rootState;
      let tmp4 = rootState;
      if (null != state) {
        do {
          let arr = items.push(tmp3);
          ({ index: index2, routes: routes2 } = tmp3);
          if (index2 == null) {
            index2 = 0;
          }
          state = routes2[index2].state;
          state1 = undefined;
          if (state != null) {
            ({ index: index3, routes: routes3 } = state);
            if (index3 == null) {
              index3 = 0;
            }
            state1 = routes3[index3].state;
          }
          tmp3 = state;
          tmp4 = state;
        } while (null != state1);
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
export const setHomeDrawerState = function setHomeDrawerState(arg0) {
  let obj = require(4045) /* getRootNavigationRef */;
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
      obj = { drawerOpen: null };
      obj[0] = arg0;
      rootNavigationRef.setParams(obj);
    }
  }
};