// discord_app/stores/web/WindowStore.tsx
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getWindowId from "getWindowId" /* 6913 */;
import set from "set" /* 2 */;

require = arg1;
let c3 = null;
const map = new Map();
let set = new Set();
const Store = initializeDefault.Store;
class WindowStore extends Store {
}
const prototype = WindowStore.prototype;
prototype["isFocused"] = function isFocused() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = getWindowId;
    mainWindowId = obj.getMainWindowId();
  }
  let value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
    obj[2] = { width: 0, height: 0 };
    value = obj;
  }
  return value.focused;
};
prototype["isAppFocused"] = function isAppFocused() {
  return null != this.getFocusedWindowId();
};
prototype["isVisible"] = function isVisible() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = getWindowId;
    mainWindowId = obj.getMainWindowId();
  }
  let value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
    obj[2] = { width: 0, height: 0 };
    value = obj;
  }
  return value.visible;
};
prototype["getFocusedWindowId"] = function getFocusedWindowId() {
  c0 = null;
  const item = map.forEach((focused) => {
    if (focused.focused) {
      closure_0 = arg1;
    }
  });
  return c0;
};
prototype["getLastFocusedWindowId"] = function getLastFocusedWindowId() {
  return c3;
};
prototype["isElementFullScreen"] = function isElementFullScreen() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = getWindowId;
    mainWindowId = obj.getMainWindowId();
  }
  let value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
    obj[2] = { width: 0, height: 0 };
    value = obj;
  }
  return value.isElementFullscreen;
};
prototype["windowSize"] = function windowSize() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = getWindowId;
    mainWindowId = obj.getMainWindowId();
  }
  let value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
    obj[2] = { width: 0, height: 0 };
    value = obj;
  }
  return value.windowSize;
};
WindowStore.displayName = "WindowStore";
const windowStore = new WindowStore(dispatcherDefault, {
  WINDOW_INIT: function handleWindowInit(isElementFullscreen) {
    _modDef38(!map.has(isElementFullscreen.windowId), "Window initialized multiple times");
    const focused = isElementFullscreen.focused;
    obj = { windowSize: obj, isElementFullscreen: isElementFullscreen.isElementFullscreen, focused, visible: isElementFullscreen.visible };
    obj = { width: isElementFullscreen.width, height: isElementFullscreen.height };
    const result = map.set(isElementFullscreen.windowId, obj);
    if (focused) {
      const windowId = isElementFullscreen.windowId;
    }
    return true;
  },
  WINDOW_FULLSCREEN_CHANGE: function handleWindowFullscreenChange(windowId) {
    windowId = windowId.windowId;
    let obj = map;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
      obj[2] = { width: 0, height: 0 };
      value = obj;
    }
    let flag = value.isElementFullscreen !== windowId.isElementFullscreen;
    if (flag) {
      obj = {};
      const merged = Object.assign(value);
      obj.isElementFullscreen = windowId.isElementFullscreen;
      const result = obj.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleWindowFocus(windowId) {
    windowId = windowId.windowId;
    let obj = map;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
      obj[2] = { width: 0, height: 0 };
      value = obj;
    }
    let flag = value.focused !== windowId.focused;
    if (flag) {
      if (windowId.focused) {
        windowId = windowId.windowId;
      }
      obj = {};
      const merged = Object.assign(value);
      obj.focused = windowId.focused;
      const result = obj.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_RESIZED: function handleWindowResize(windowId) {
    windowId = windowId.windowId;
    let obj = map;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
      obj[2] = { width: 0, height: 0 };
      value = obj;
    }
    let flag = value.windowSize.width !== windowId.width || value.windowSize.height !== windowId.height;
    if (flag) {
      obj = {};
      const merged = Object.assign(value);
      ({ width: obj4[0], height: obj4[1] } = windowId);
      obj.windowSize = { width: null, height: null };
      const result = obj.set(windowId.windowId, obj);
      flag = true;
      obj1 = { width: null, height: null };
    }
    return flag;
  },
  WINDOW_UNLOAD: function handleWindowUnload(windowId) {
    set.add(windowId.windowId);
    map.delete(windowId.windowId);
    if (c3 === windowId.windowId) {
      c3 = null;
    }
    return true;
  },
  WINDOW_VISIBILITY_CHANGE: function handleWindowVisibilityChange(windowId) {
    windowId = windowId.windowId;
    let obj = map;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: null, visible: false };
      obj[2] = { width: 0, height: 0 };
      value = obj;
    }
    let flag = value.visible !== windowId.visible;
    if (flag) {
      obj = {};
      const merged = Object.assign(value);
      obj.visible = windowId.visible;
      const result = obj.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  }
});
require("expandEventProperties").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator(() => {

  });
});
let result = set.fileFinishedImporting("stores/web/WindowStore.tsx");

export default windowStore;