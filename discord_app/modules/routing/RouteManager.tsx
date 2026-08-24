// === Module 12694: initialize ===

// Module 12694 (initialize)
import closure_2 from "_handleConnectionOpen" /* 4499 */;
import closure_3 from "getMatchData" /* 12695 */;
import { Routes } from "ME" /* 676 */;
import set from "set" /* 2 */;

let set = arg1;
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
      const isConnectedResult = closure_1_2.isConnected();
      let tmp2 = isConnectedResult;
      if (isConnectedResult) {
        tmp2 = !obj.connected;
      }
      obj.connected = isConnectedResult;
      if (tmp2) {
        obj.routeChangeCount = 0;
        obj.executeRouteRewrites(obj(closure_1_1[3]).getHistory().location, "REPLACE");
        const obj2 = obj(closure_1_1[3]);
      }
    };
    obj.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
      if ("POP" !== REPLACE) {
        if (!obj.executeRouteRewrites(pathname, REPLACE)) {
          obj = obj(closure_1_1[4]);
          if (!obj.convertRouteToNavigation(pathname)) {
            tmp2(tmp3[3]).replaceWith(closure_1_4.ME);
          }
          tmp2 = obj;
          tmp3 = closure_1_1;
        }
      }
      const state = closure_1_3.getState();
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
      const state = closure_1_3.getState();
      if (null != state.path) {
        obj = obj(closure_1_1[3]);
        obj.transitionTo(state.path);
      }
    };
    return obj;
  }
}
const prototype = RouteManager.prototype;
prototype["initialize"] = function initialize() {
  this.cleanup();
  const history = set(1222).getHistory();
  this.unlistenHistory = history.listen(this.handleRouteChange);
  const obj = set(1222);
  const state = closure_3.getState();
  state.resetPath(set(1222).getHistory().location.pathname);
  this.unlistenKeyboardChange = closure_3.subscribe(this.handleKeybindRouteChange);
  closure_2.addChangeListener(this.handleConnectionChange);
};
prototype["executeRouteRewrites"] = function executeRouteRewrites(location, REPLACE) {
  this.routeChangeCount = this.routeChangeCount + 1;
  if (this.routeChangeCount < 10) {
    const rewrites = this.rewrites;
    let obj = rewrites[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = set;
      let tmp12 = dependencyMap;
      let obj2 = set(1222);
      let tmp9Result = tmp9(location, REPLACE);
      let tmp14 = tmp9Result;
      if (null != tmp9Result) {
        let tmp11Result = tmp11(7771);
        obj = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route", data: null };
        obj = { replacePath: null, previousPath: null };
        obj[0] = tmp9Result.path;
        obj[1] = obj2.getHistory().location.pathname;
        obj[1] = obj;
        let addBreadcrumbResult = tmp11Result.addBreadcrumb(obj);
        tmp11Result = tmp11(1222);
        let replaceWithResult = tmp11Result.replaceWith(tmp9Result.path, tmp9Result.state);
        let tmp17 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  } else {
    const _Error = Error;
    error = new Error("RouteManager: Something has gone horribly wrong with rewrites");
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
  closure_2.removeChangeListener(self.handleConnectionChange);
};
prototype["addRouteChangeListener"] = function addRouteChangeListener(hideLaunchPad) {
  const self = this;
  if (null != this.unlistenHistory) {
    hideLaunchPad(set(self[3]).getHistory().location, "REPLACE");
    const obj = set(self[3]);
  }
  const listeners = this.listeners;
  listeners.add(hideLaunchPad);
  return () => self.removeRouteChangeListener(closure_0);
};
prototype["addRouteRewriter"] = function addRouteRewriter(voiceRouteRewriter) {
  const self = this;
  if (null != this.unlistenHistory) {
    const obj = set(self[3]);
    const tmp = set;
    const tmp2 = self;
    const tmp3 = voiceRouteRewriter(obj.getHistory().location, set(self[3]).getHistory().action);
    if (null != tmp3) {
      tmp(tmp2[3]).replaceWith(tmp3.path, tmp3.state);
      const tmpResult = tmp(tmp2[3]);
    }
    const obj2 = set(self[3]);
  }
  const rewrites = this.rewrites;
  rewrites.add(voiceRouteRewriter);
  return () => self.removeRouteRewriter(closure_0);
};
prototype["removeRouteChangeListener"] = function removeRouteChangeListener(closure_0) {
  const listeners = this.listeners;
  listeners.delete(closure_0);
};
prototype["removeRouteRewriter"] = function removeRouteRewriter(closure_0) {
  const rewrites = this.rewrites;
  rewrites.delete(closure_0);
};
prototype["getHistory"] = function getHistory() {
  return set(1222).getHistory();
};
set = Object.create(RouteManager.prototype);
set = new Set();
set.rewrites = set;
set.listeners = new Set();
set.routeChangeCount = 0;
set.timer = -1;
set.connected = false;
set.handleConnectionChange = function handleConnectionChange() {
  const isConnectedResult = closure_1_2.isConnected();
  let tmp2 = isConnectedResult;
  if (isConnectedResult) {
    tmp2 = !obj.connected;
  }
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    obj.executeRouteRewrites(obj(closure_1_1[3]).getHistory().location, "REPLACE");
    const obj2 = obj(closure_1_1[3]);
  }
};
set.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = obj(closure_1_1[4]);
      if (!obj.convertRouteToNavigation(pathname)) {
        tmp2(tmp3[3]).replaceWith(closure_1_4.ME);
      }
      tmp2 = obj;
      tmp3 = closure_1_1;
    }
  }
  const state = closure_1_3.getState();
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
};
set.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
  if (-1 !== obj.timer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp.timer);
  }
  if (null != path.path) {
    const _setTimeout = setTimeout;
    tmp.timer = setTimeout(tmp.flushRoute, 200);
  }
};
set.flushRoute = function flushRoute() {
  clearTimeout(obj.timer);
  const state = closure_1_3.getState();
  if (null != state.path) {
    obj = obj(closure_1_1[3]);
    obj.transitionTo(state.path);
  }
};
let result = set.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default set;