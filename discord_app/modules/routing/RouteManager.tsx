// discord_app/modules/routing/RouteManager.tsx
import _handleConnectionOpen from "_handleConnectionOpen";
import getMatchData from "getMatchData";
import { Routes } from "ME";
import set from "ME";

class RouteManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    RouteManager = obj;
    set = new Set();
    obj.rewrites = set;
    set1 = new Set();
    obj.listeners = set1;
    obj.routeChangeCount = 0;
    obj.timer = -1;
    obj.connected = false;
    obj.handleConnectionChange = function handleConnectionChange() {
      const isConnectedResult = outer1_2.isConnected();
      let tmp2 = isConnectedResult;
      if (isConnectedResult) {
        tmp2 = !obj.connected;
      }
      obj.connected = isConnectedResult;
      if (tmp2) {
        obj.routeChangeCount = 0;
        obj.executeRouteRewrites(obj(outer1_1[3]).getHistory().location, "REPLACE");
        const obj2 = obj(outer1_1[3]);
      }
    };
    obj.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
      if ("POP" !== REPLACE) {
        if (!obj.executeRouteRewrites(pathname, REPLACE)) {
          obj = obj(outer1_1[4]);
          if (!obj.convertRouteToNavigation(pathname)) {
            tmp2(tmp3[3]).replaceWith(outer1_4.ME);
          }
          tmp2 = obj;
          tmp3 = outer1_1;
        }
      }
      const state = outer1_3.getState();
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
      const state = outer1_3.getState();
      if (null != state.path) {
        obj = obj(outer1_1[3]);
        obj.transitionTo(state.path);
      }
    };
    return obj;
  }
}
const prototype = RouteManager.prototype;
prototype["initialize"] = function initialize() {
  this.cleanup();
  obj = obj(1222);
  const history = obj.getHistory();
  this.unlistenHistory = history.listen(this.handleRouteChange);
  const state = getMatchData.getState();
  state.resetPath(obj(1222).getHistory().location.pathname);
  this.unlistenKeyboardChange = getMatchData.subscribe(this.handleKeybindRouteChange);
  _handleConnectionOpen.addChangeListener(this.handleConnectionChange);
};
prototype["executeRouteRewrites"] = function executeRouteRewrites(location, REPLACE) {
  this.routeChangeCount = this.routeChangeCount + 1;
  if (this.routeChangeCount < 10) {
    const rewrites = this.rewrites;
    let obj = rewrites[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = obj;
      let tmp12 = dependencyMap;
      let obj2 = obj(1222);
      let tmp9Result = tmp9(location, REPLACE);
      let tmp14 = tmp9Result;
      if (null != tmp9Result) {
        let tmp11Result = tmp11(7370);
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
  _handleConnectionOpen.removeChangeListener(self.handleConnectionChange);
};
prototype["addRouteChangeListener"] = function addRouteChangeListener(hideLaunchPad) {
  const self = this;
  let obj = hideLaunchPad;
  if (null != this.unlistenHistory) {
    obj = obj(self[3]);
    hideLaunchPad(obj.getHistory().location, "REPLACE");
  }
  const listeners = this.listeners;
  listeners.add(hideLaunchPad);
  return () => self.removeRouteChangeListener(closure_0);
};
prototype["addRouteRewriter"] = function addRouteRewriter(voiceRouteRewriter) {
  const self = this;
  let obj = voiceRouteRewriter;
  if (null != this.unlistenHistory) {
    obj = obj(self[3]);
    const tmp3 = voiceRouteRewriter(obj.getHistory().location, obj(self[3]).getHistory().action);
    if (null != tmp3) {
      tmp(tmp2[3]).replaceWith(tmp3.path, tmp3.state);
      const tmpResult = tmp(tmp2[3]);
    }
    const obj2 = obj(self[3]);
    tmp = obj;
    tmp2 = self;
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
  obj = obj(1222);
  return obj.getHistory();
};
let set = Object.create(RouteManager.prototype);
set = new Set();
set.rewrites = set;
set.listeners = new Set();
set.routeChangeCount = 0;
set.timer = -1;
set.connected = false;
set.handleConnectionChange = function handleConnectionChange() {
  const isConnectedResult = outer1_2.isConnected();
  let tmp2 = isConnectedResult;
  if (isConnectedResult) {
    tmp2 = !obj.connected;
  }
  obj.connected = isConnectedResult;
  if (tmp2) {
    obj.routeChangeCount = 0;
    obj.executeRouteRewrites(obj(outer1_1[3]).getHistory().location, "REPLACE");
    const obj2 = obj(outer1_1[3]);
  }
};
set.handleRouteChange = function handleRouteChange(pathname, REPLACE) {
  if ("POP" !== REPLACE) {
    if (!obj.executeRouteRewrites(pathname, REPLACE)) {
      obj = obj(outer1_1[4]);
      if (!obj.convertRouteToNavigation(pathname)) {
        tmp2(tmp3[3]).replaceWith(outer1_4.ME);
      }
      tmp2 = obj;
      tmp3 = outer1_1;
    }
  }
  const state = outer1_3.getState();
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
  const state = outer1_3.getState();
  if (null != state.path) {
    obj = obj(outer1_1[3]);
    obj.transitionTo(state.path);
  }
};
let result = set.fileFinishedImporting("modules/routing/RouteManager.tsx");

export default set;