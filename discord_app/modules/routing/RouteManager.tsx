// discord_app/modules/routing/RouteManager.tsx
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import KeybindRouterStore from "KeybindRouterStore.tsx";

let size = fn;
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
        obj.executeRouteRewrites(size(1100).getHistory().location, "REPLACE");
        const obj2 = size(1100);
      }
    };
    obj.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
      if ("POP" !== REPLACE) {
        if (!obj.executeRouteRewrites(pathname, REPLACE)) {
          obj = size(12791);
          if (!obj.convertRouteToNavigation(pathname)) {
            tmp2(1100).replaceWith(Routes.ME);
          }
          tmp2 = size;
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
        } catch (err) {}
      }
    };
    obj.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
      if (-1 !== obj.timer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.timer);
      }
      if (null != path.path) {
        const _setTimeout = setTimeout;
        tmp.timer = setTimeout(tmp.flushRoute, 200);
      }
    };
    obj.flushRoute = function flushRoute() {
      clearTimeout(obj.timer);
      const state = KeybindRouterStore.getState();
      if (null != state.path) {
        obj = size(1100);
        obj.transitionTo(state.path);
      }
    };
    return obj;
  }
}
const prototype = RouteManager.prototype;
prototype["initialize"] = function initialize() {
  this.cleanup();
  const history = size(1100).getHistory();
  this.unlistenHistory = history.listen(this.handleRouteChange);
  const obj = size(1100);
  const state = KeybindRouterStore.getState();
  state.resetPath(size(1100).getHistory().location.pathname);
  this.unlistenKeyboardChange = KeybindRouterStore.subscribe(this.handleKeybindRouteChange);
  GatewayConnectionStore.addChangeListener(this.handleConnectionChange);
};
prototype["executeRouteRewrites"] = function executeRouteRewrites(location, REPLACE) {
  this.routeChangeCount = this.routeChangeCount + 1;
  if (this.routeChangeCount < 10) {
    const rewrites = this.rewrites;
    let obj = rewrites[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = size;
      let obj2 = size(1100);
      let tmp9Result = tmp9(location, REPLACE);
      if (null != tmp9Result) {
        let tmp11Result = tmp11(12792);
        obj = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route", data: null };
        obj = { replacePath: tmp9Result.path, previousPath: obj2.getHistory().location.pathname };
        obj.data = obj;
        let addBreadcrumbResult = tmp11Result.addBreadcrumb(obj);
        tmp11Result = tmp11(1100);
        let replaceWithResult = tmp11Result.replaceWith(tmp9Result.path, tmp9Result.state);
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
    hideLaunchPad(size(1100).getHistory().location, "REPLACE");
    const obj = size(1100);
  }
  const listeners = this.listeners;
  listeners.add(hideLaunchPad);
  return () => self.removeRouteChangeListener(closure_0);
};
prototype["addRouteRewriter"] = function addRouteRewriter(voiceRouteRewriter) {
  const self = this;
  closure_0 = voiceRouteRewriter;
  if (null != this.unlistenHistory) {
    const obj = size(1100);
    const tmp = size;
    const tmp3 = voiceRouteRewriter(obj.getHistory().location, size(1100).getHistory().action);
    if (null != tmp3) {
      tmp(1100).replaceWith(tmp3.path, tmp3.state);
      const tmpResult = tmp(1100);
    }
    const obj2 = size(1100);
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
  return size(1100).getHistory();
};
size = Object.create(RouteManager.prototype);
size.rewrites = new Set();
let set = new Set();
size.listeners = new Set();
size.routeChangeCount = 0;
size.timer = -1;
size.connected = false;
size.handleConnectionChange = function handleConnectionChange() {
  const isConnectedResult = GatewayConnectionStore.isConnected();
  let tmp2 = isConnectedResult;
  if (isConnectedResult) {
    tmp2 = !obj.connected;
  }
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    obj.executeRouteRewrites(size(1100).getHistory().location, "REPLACE");
    const obj2 = size(1100);
  }
};
size.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = size(12791);
      if (!obj.convertRouteToNavigation(pathname)) {
        tmp2(1100).replaceWith(Routes.ME);
      }
      tmp2 = size;
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
    } catch (err) {}
  }
};
size.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
  if (-1 !== obj.timer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp.timer);
  }
  if (null != path.path) {
    const _setTimeout = setTimeout;
    tmp.timer = setTimeout(tmp.flushRoute, 200);
  }
};
size.flushRoute = function flushRoute() {
  clearTimeout(obj.timer);
  const state = KeybindRouterStore.getState();
  if (null != state.path) {
    obj = size(1100);
    obj.transitionTo(state.path);
  }
};
size = fn(2);
let result = size.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default size;
