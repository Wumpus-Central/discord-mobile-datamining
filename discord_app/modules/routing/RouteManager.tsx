// === Module 13128: RouteManager ===

// Module 13128 (RouteManager)
import GatewayConnectionStore from "GatewayConnectionStore" /* 5580 */;
import KeybindRouterStore from "KeybindRouterStore" /* 13129 */;

let obj2 = fn;
const Routes = fn(1074).Routes;
class RouteManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    set = new Set();
    obj.rewrites = set;
    set1 = new Set();
    obj.listeners = set1;
    obj.routeChangeCount = 0;
    obj.timer = -1;
    obj.connected = false;
    obj.handleConnectionChange = function handleConnectionChange() {
      const isConnectedResult = GatewayConnectionStore.isConnected();
      let tmp2 = isConnectedResult;
      if (isConnectedResult) {
        tmp2 = !obj.connected;
      }
      obj.connected = isConnectedResult;
      if (tmp2) {
        obj.routeChangeCount = 0;
        obj2 = obj2(1101);
        obj.executeRouteRewrites(obj2.getHistory().location, "REPLACE");
      }
    };
    obj.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
      if ("POP" !== REPLACE) {
        if (!obj.executeRouteRewrites(pathname, REPLACE)) {
          obj = obj2(13130);
          if (!obj.convertRouteToNavigation(pathname)) {
            obj2(1101).replaceWith(Routes.ME);
            const tmp2Result = obj2(1101);
          }
        }
      }
      const state = KeybindRouterStore.getState();
      if (state.basePath !== pathname.pathname) {
        state.resetPath(pathname.pathname);
      }
      const iter = obj.listeners[Symbol.iterator]();
      if (iter === undefined) {
        obj.routeChangeCount = 0;
      } else {
        try {
          tmp8(pathname, REPLACE);
        } catch (err) {
        }
      }
      const nextResult = iter.next();
    };
    obj.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
      if (-1 !== obj.timer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.timer);
      }
      if (null != path.path) {
        const _setTimeout = setTimeout;
        obj.timer = setTimeout(obj.flushRoute, 200);
      }
    };
    obj.flushRoute = function flushRoute() {
      clearTimeout(obj.timer);
      const state = KeybindRouterStore.getState();
      if (null != state.path) {
        obj = obj2(1101);
        obj.transitionTo(state.path);
      }
    };
    return obj;
  }
}
const prototype = RouteManager.prototype;
prototype["initialize"] = function initialize() {
  this.cleanup();
  const history = obj2(1101).getHistory();
  this.unlistenHistory = history.listen(this.handleRouteChange);
  const obj = obj2(1101);
  const state = KeybindRouterStore.getState();
  state.resetPath(obj2(1101).getHistory().location.pathname);
  this.unlistenKeyboardChange = KeybindRouterStore.subscribe(this.handleKeybindRouteChange);
  GatewayConnectionStore.addChangeListener(this.handleConnectionChange);
};
prototype["executeRouteRewrites"] = function executeRouteRewrites(location, REPLACE) {
  this.routeChangeCount = this.routeChangeCount + 1;
  if (this.routeChangeCount < 10) {
    const rewrites = this.rewrites;
    const obj = rewrites[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = obj2;
      obj2 = obj2(1101);
      let tmp9Result = tmp9(location, REPLACE);
      if (null != tmp9Result) {
        let tmp11Result = tmp11(13131);
        let obj3 = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route", data: null };
        let obj4 = { replacePath: tmp9Result.path, previousPath: obj2.getHistory().location.pathname };
        obj3.data = obj4;
        let addBreadcrumbResult = tmp11Result.addBreadcrumb(obj3);
        let tmp11Result2 = tmp11(1101);
        let replaceWithResult = tmp11Result2.replaceWith(tmp9Result.path, tmp9Result.state);
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  } else {
    const _Error = Error;
    const error = new Error("RouteManager: Something has gone horribly wrong with rewrites");
    throw error;
  }
};
prototype["cleanup"] = function cleanup() {
  const self = this;
  const unlistenHistory = this.unlistenHistory;
  if (unlistenHistory != null) {
    unlistenHistory();
  }
  self.unlistenHistory = undefined;
  const unlistenKeyboardChange = self.unlistenKeyboardChange;
  if (unlistenKeyboardChange != null) {
    const result = unlistenKeyboardChange();
  }
  self.unlistenKeyboardChange = undefined;
  GatewayConnectionStore.removeChangeListener(self.handleConnectionChange);
};
prototype["addRouteChangeListener"] = function addRouteChangeListener(hideLaunchPad) {
  const self = this;
  closure_0 = hideLaunchPad;
  if (null != this.unlistenHistory) {
    hideLaunchPad(obj2(1101).getHistory().location, "REPLACE");
    const obj = obj2(1101);
  }
  const listeners = this.listeners;
  listeners.add(hideLaunchPad);
  return () => self.removeRouteChangeListener(closure_0);
};
prototype["addRouteRewriter"] = function addRouteRewriter(voiceRouteRewriter) {
  const self = this;
  closure_0 = voiceRouteRewriter;
  if (null != this.unlistenHistory) {
    obj2 = obj2(1101);
    const tmp3 = voiceRouteRewriter(obj2(1101).getHistory().location, obj2.getHistory().action);
    if (null != tmp3) {
      tmp(1101).replaceWith(tmp3.path, tmp3.state);
      const tmpResult = tmp(1101);
    }
    const obj = obj2(1101);
    tmp = obj2;
  }
  const rewrites = this.rewrites;
  rewrites.add(voiceRouteRewriter);
  return () => self.removeRouteRewriter(closure_0);
};
prototype["removeRouteChangeListener"] = function removeRouteChangeListener(logRouteChange) {
  const listeners = this.listeners;
  listeners.delete(logRouteChange);
};
prototype["removeRouteRewriter"] = function removeRouteRewriter(voiceRouteRewriter) {
  const rewrites = this.rewrites;
  rewrites.delete(voiceRouteRewriter);
};
prototype["getHistory"] = function getHistory() {
  return obj2(1101).getHistory();
};
obj2 = Object.create(RouteManager.prototype);
obj2.rewrites = new Set();
let set = new Set();
obj2.listeners = new Set();
obj2.routeChangeCount = 0;
obj2.timer = -1;
obj2.connected = false;
obj2.handleConnectionChange = function handleConnectionChange() {
  const isConnectedResult = GatewayConnectionStore.isConnected();
  let tmp2 = isConnectedResult;
  if (isConnectedResult) {
    tmp2 = !obj.connected;
  }
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    obj2 = obj2(1101);
    obj.executeRouteRewrites(obj2.getHistory().location, "REPLACE");
  }
};
obj2.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = obj2(13130);
      if (!obj.convertRouteToNavigation(pathname)) {
        obj2(1101).replaceWith(Routes.ME);
        const tmp2Result = obj2(1101);
      }
    }
  }
  const state = KeybindRouterStore.getState();
  if (state.basePath !== pathname.pathname) {
    state.resetPath(pathname.pathname);
  }
  const iter = obj.listeners[Symbol.iterator]();
  if (iter === undefined) {
    obj.routeChangeCount = 0;
  } else {
    try {
      tmp8(pathname, REPLACE);
    } catch (err) {
    }
  }
  const nextResult = iter.next();
};
obj2.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
  if (-1 !== obj.timer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(obj.timer);
  }
  if (null != path.path) {
    const _setTimeout = setTimeout;
    obj.timer = setTimeout(obj.flushRoute, 200);
  }
};
obj2.flushRoute = function flushRoute() {
  clearTimeout(obj.timer);
  const state = KeybindRouterStore.getState();
  if (null != state.path) {
    obj = obj2(1101);
    obj.transitionTo(state.path);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default obj2;