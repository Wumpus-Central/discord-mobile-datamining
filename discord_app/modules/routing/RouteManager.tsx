// === Module 12557: RouteManager ===

// Module 12557 (RouteManager)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import convertRouteToNavigation from "convertRouteToNavigation" /* 12559 */;
import _mod12560 from "module_12560" /* 12560 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import KeybindRouterStore from "KeybindRouterStore" /* 12558 */;
import size from "module_2" /* 2 */;

function handleConnectionChange() {
  const isConnectedResult = GatewayConnectionStore.isConnected();
  const tmp2 = isConnectedResult && !obj.connected;
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    const executeRouteRewrites = tmp4.executeRouteRewrites;
    obj = router_utils;
    executeRouteRewrites(obj.getHistory().location, "REPLACE");
  }
}
function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = convertRouteToNavigation;
      if (!obj.convertRouteToNavigation(pathname)) {
        const tmp2Result = router_utils;
        tmp2Result.replaceWith(Routes.ME);
      }
    }
  }
  const state = KeybindRouterStore.getState();
  if (state.basePath !== pathname.pathname) {
    state.resetPath(pathname.pathname);
  }
  const iter = obj.listeners[Symbol.iterator]();
  iter.next();
  if (iter === undefined) {
    obj.routeChangeCount = 0;
  } else {
    try {
      tmp8(pathname, REPLACE);
    } catch (err) {
    }
  }
}
function flushRoute() {
  clearTimeout(obj.timer);
  const state = KeybindRouterStore.getState();
  if (null != state.path) {
    obj = router_utils;
    obj.transitionTo(state.path);
  }
}
const Routes = Constants.Routes;
class RouteManager {
  constructor() {
    let obj = Object.create(new.target.prototype);
    obj.rewrites = new Set();
    new Set();
    obj.listeners = new Set();
    obj.routeChangeCount = 0;
    obj.timer = -1;
    obj.connected = false;
    obj.handleConnectionChange = handleConnectionChange;
    obj.handleRouteChange = handleRouteChange;
    obj.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
      path = path.path;
      if (-1 !== obj.timer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.timer);
      }
      if (null != path) {
        const _setTimeout = setTimeout;
        obj.timer = setTimeout(obj.flushRoute, 200);
      }
    };
    obj.flushRoute = flushRoute;
    new Set();
    return obj;
  }
  initialize() {
    this.cleanup();
    const obj = router_utils;
    const history = obj.getHistory();
    this.unlistenHistory = history.listen(this.handleRouteChange);
    const obj3 = router_utils;
    const pathname = obj3.getHistory().location.pathname;
    const state = KeybindRouterStore.getState();
    state.resetPath(pathname);
    this.unlistenKeyboardChange = KeybindRouterStore.subscribe(this.handleKeybindRouteChange);
    GatewayConnectionStore.addChangeListener(this.handleConnectionChange);
  }
  executeRouteRewrites(location, REPLACE) {
    let obj4;
    this.routeChangeCount = this.routeChangeCount + 1;
    if (this.routeChangeCount < 10) {
      const rewrites = this.rewrites;
      const obj = rewrites[Symbol.iterator]();
      while (obj !== undefined) {
        let obj2 = router_utils;
        let pathname = obj2.getHistory().location.pathname;
        let tmp7Result = tmp7(location, REPLACE);
        if (null != tmp7Result) {
          let tmp9Result = _mod12560;
          let obj3 = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route", data: obj4 };
          obj4 = { replacePath: tmp7Result.path, previousPath: pathname };
          let addBreadcrumbResult = tmp9Result.addBreadcrumb(obj3);
          let tmp9Result2 = router_utils;
          let replaceWithResult = tmp9Result2.replaceWith(tmp7Result.path, tmp7Result.state);
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("RouteManager: Something has gone horribly wrong with rewrites");
      throw error;
    }
  }
  cleanup() {
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
  }
  addRouteChangeListener(hideLaunchPad) {
    const self = this;
    let closure_0 = hideLaunchPad;
    if (null != this.unlistenHistory) {
      const obj = router_utils;
      hideLaunchPad(obj.getHistory().location, "REPLACE");
    }
    const listeners = this.listeners;
    listeners.add(hideLaunchPad);
    return () => self.removeRouteChangeListener(closure_0);
  }
  addRouteRewriter(voiceRouteRewriter) {
    const self = this;
    let closure_0 = voiceRouteRewriter;
    if (null != this.unlistenHistory) {
      const obj = router_utils;
      const _location = obj.getHistory().location;
      const obj2 = router_utils;
      const tmp3 = voiceRouteRewriter(_location, obj2.getHistory().action);
      if (null != tmp3) {
        const tmpResult = router_utils;
        tmpResult.replaceWith(tmp3.path, tmp3.state);
      }
    }
    const rewrites = this.rewrites;
    rewrites.add(voiceRouteRewriter);
    return () => self.removeRouteRewriter(closure_0);
  }
  removeRouteChangeListener(logRouteChange) {
    const listeners = this.listeners;
    listeners.delete(logRouteChange);
  }
  removeRouteRewriter(voiceRouteRewriter) {
    const rewrites = this.rewrites;
    rewrites.delete(voiceRouteRewriter);
  }
  getHistory() {
    const obj = router_utils;
    return obj.getHistory();
  }
}
const prototype = RouteManager.prototype;
let obj = Object.create(RouteManager.prototype);
const set = new Set();
obj.rewrites = set;
const set1 = new Set();
obj.listeners = set1;
obj.routeChangeCount = 0;
obj.timer = -1;
obj.connected = false;
obj.handleConnectionChange = handleConnectionChange;
obj.handleRouteChange = handleRouteChange;
obj.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
  path = path.path;
  if (-1 !== obj.timer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(obj.timer);
  }
  if (null != path) {
    const _setTimeout = setTimeout;
    obj.timer = setTimeout(obj.flushRoute, 200);
  }
};
obj.flushRoute = flushRoute;
let result = size.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default obj;