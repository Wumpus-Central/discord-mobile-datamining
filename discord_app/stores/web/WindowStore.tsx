// discord_app/stores/web/WindowStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import WindowIdUtils from "../../utils/web/WindowIdUtils.tsx";

require = fn;
let c3 = null;
const map = new Map();
const set = new Set();
const Store = initializeDefault.Store;
class WindowStore extends Store {}
const prototype = WindowStore.prototype;
prototype["isFocused"] = function isFocused() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = WindowIdUtils;
    mainWindowId = obj.getMainWindowId();
  }
  value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
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
    let obj = WindowIdUtils;
    mainWindowId = obj.getMainWindowId();
  }
  value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    value = obj;
  }
  return value.visible;
};
prototype["getFocusedWindowId"] = function getFocusedWindowId() {
  closure_0 = null;
  const item = map.forEach((focused, index) => {
    if (focused.focused) {
      closure_0 = index;
    }
  });
  return closure_0;
};
prototype["getLastFocusedWindowId"] = function getLastFocusedWindowId() {
  return c3;
};
prototype["isElementFullScreen"] = function isElementFullScreen() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = WindowIdUtils;
    mainWindowId = obj.getMainWindowId();
  }
  value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    value = obj;
  }
  return value.isElementFullscreen;
};
prototype["windowSize"] = function windowSize() {
  let mainWindowId = arg0;
  if (arg0 === undefined) {
    let obj = WindowIdUtils;
    mainWindowId = obj.getMainWindowId();
  }
  value = map.get(mainWindowId);
  if (null == value) {
    const hasItem = set.has(mainWindowId);
    obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    value = obj;
  }
  return value.windowSize;
};
WindowStore.displayName = "WindowStore";
const windowStore = new WindowStore(DispatcherDefault, {
  WINDOW_INIT: function handleWindowInit(width) {
    _modDef38(!map.has(width.windowId), "Window initialized multiple times");
    const focused = width.focused;
    const result = map.set(width.windowId, {
      windowSize: { width: width.width, height: width.height },
      isElementFullscreen: width.isElementFullscreen,
      focused,
      visible: width.visible,
    });
    if (focused) {
      const windowId = width.windowId;
    }
    return true;
  },
  WINDOW_FULLSCREEN_CHANGE: function handleWindowFullscreenChange(windowId) {
    windowId = windowId.windowId;
    let obj = map;
    value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
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
    value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      value = obj;
    }
    let flag = value.focused !== windowId.focused;
    if (flag) {
      if (windowId.focused) {
        const windowId2 = windowId.windowId;
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
    value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      value = obj;
    }
    let flag = value.windowSize.width !== windowId.width || value.windowSize.height !== windowId.height;
    if (flag) {
      obj = {};
      const merged = Object.assign(value);
      const size = { width: null, height: null };
      ({ width: obj4.width, height: obj4.height } = windowId);
      obj.windowSize = size;
      const result = obj.set(windowId.windowId, obj);
      flag = true;
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
    value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
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
  },
});
fn(1896)(1242, dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator(() => {});
});
let size = fn(2);
let result = size.fileFinishedImporting("stores/web/WindowStore.tsx");

export default windowStore;
