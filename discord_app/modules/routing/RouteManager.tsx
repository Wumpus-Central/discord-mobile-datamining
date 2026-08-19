// === Module 12640: initialize ===

// Module 12640 (initialize)
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import getMatchData from "getMatchData" /* 12641 */;
import { Routes } from "ME" /* 676 */;
import obj132 from "obj132" /* 2 */;

let obj132 = fn;
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
        obj.executeRouteRewrites(obj(dependencyMap[3]).getHistory().location, "REPLACE");
        const obj2 = obj(dependencyMap[3]);
      }
    };
    obj.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
      if ("POP" !== REPLACE) {
        if (!obj.executeRouteRewrites(pathname, REPLACE)) {
          obj = obj(dependencyMap[4]);
          if (!obj.convertRouteToNavigation(pathname)) {
            tmp2(dependencyMap[3]).replaceWith(Routes.ME);
            const tmp2Result = tmp2(dependencyMap[3]);
          }
          tmp2 = obj;
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
      const state = closure_1_3.getState();
      if (null != state.path) {
        obj = obj(dependencyMap[3]);
        obj.transitionTo(state.path);
      }
    };
    return obj;
  }
}
const prototype = RouteManager.prototype;
prototype["initialize"] = function initialize() {
  this.cleanup();
  const history = obj132(1222).getHistory();
  this.unlistenHistory = history.listen(this.handleRouteChange);
  const obj = obj132(1222);
  const state = closure_3.getState();
  state.resetPath(obj132(1222).getHistory().location.pathname);
  this.unlistenKeyboardChange = closure_3.subscribe(this.handleKeybindRouteChange);
  closure_2.addChangeListener(this.handleConnectionChange);
};
prototype["executeRouteRewrites"] = function executeRouteRewrites(location, REPLACE) {
  this.routeChangeCount = this.routeChangeCount + 1;
  if (this.routeChangeCount < 10) {
    const rewrites = this.rewrites;
    let obj = rewrites[Symbol.iterator]();
    while (obj !== undefined) {
      let obj2 = obj132(1222);
      let tmp9Result = tmp9(location, REPLACE);
      if (null != tmp9Result) {
        let tmp11Result = obj132(7733);
        obj = { replacePath: null, previousPath: null };
        obj[0] = tmp9Result.path;
        obj[1] = obj2.getHistory().location.pathname;
        obj[1] = obj;
        let addBreadcrumbResult = tmp11Result.addBreadcrumb(obj);
        tmp11Result = obj132(1222);
        let replaceWithResult = tmp11Result.replaceWith(tmp9Result.path, tmp9Result.state);
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
    hideLaunchPad(obj132(self[3]).getHistory().location, "REPLACE");
    const obj = obj132(self[3]);
  }
  const listeners = this.listeners;
  listeners.add(hideLaunchPad);
  return () => self.removeRouteChangeListener(closure_0);
};
prototype["addRouteRewriter"] = function addRouteRewriter(voiceRouteRewriter) {
  const self = this;
  if (null != this.unlistenHistory) {
    const obj = obj132(self[3]);
    const tmp = obj132;
    const tmp2 = self;
    const tmp3 = voiceRouteRewriter(obj.getHistory().location, obj132(self[3]).getHistory().action);
    if (null != tmp3) {
      tmp(tmp2[3]).replaceWith(tmp3.path, tmp3.state);
      const tmpResult = tmp(tmp2[3]);
    }
    const obj2 = obj132(self[3]);
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
  return obj132(1222).getHistory();
};
obj132 = Object.create(RouteManager.prototype);
obj132.rewrites = new Set();
let set = new Set();
obj132.listeners = new Set();
obj132.routeChangeCount = 0;
obj132.timer = -1;
obj132.connected = false;
obj132.handleConnectionChange = function handleConnectionChange() {
  const isConnectedResult = closure_1_2.isConnected();
  let tmp2 = isConnectedResult;
  if (isConnectedResult) {
    tmp2 = !obj.connected;
  }
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    obj.executeRouteRewrites(obj(dependencyMap[3]).getHistory().location, "REPLACE");
    const obj2 = obj(dependencyMap[3]);
  }
};
obj132.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = obj(dependencyMap[4]);
      if (!obj.convertRouteToNavigation(pathname)) {
        tmp2(dependencyMap[3]).replaceWith(Routes.ME);
        const tmp2Result = tmp2(dependencyMap[3]);
      }
      tmp2 = obj;
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
  const nextResult = iter.next();
};
obj132.handleKeybindRouteChange = function handleKeybindRouteChange(path) {
  if (-1 !== obj.timer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(obj.timer);
  }
  if (null != path.path) {
    const _setTimeout = setTimeout;
    obj.timer = setTimeout(obj.flushRoute, 200);
  }
};
obj132.flushRoute = function flushRoute() {
  clearTimeout(obj.timer);
  const state = closure_1_3.getState();
  if (null != state.path) {
    obj = obj(dependencyMap[3]);
    obj.transitionTo(state.path);
  }
};
let result = obj132.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default obj132;