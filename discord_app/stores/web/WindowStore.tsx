// === Module 13662: WindowStore ===

// Module 13662 (WindowStore)
import _modDef38 from "module_38" /* 38 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import WindowIdUtils from "WindowIdUtils" /* 5952 */;
import size_mod from "module_2" /* 2 */;

let c3 = null;
const map = new Map();
const set = new Set();
const Store = get_initializedDefault.Store;
class WindowStore extends Store {
  isFocused() {
    let mainWindowId = arg0;
    if (arg0 === undefined) {
      const obj = WindowIdUtils;
      mainWindowId = obj.getMainWindowId();
    }
    let value = map.get(mainWindowId);
    if (null == value) {
      const hasItem = set.has(mainWindowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj2 = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    return value.focused;
  }
  isAppFocused() {
    return null != this.getFocusedWindowId();
  }
  isVisible() {
    let mainWindowId = arg0;
    if (arg0 === undefined) {
      const obj = WindowIdUtils;
      mainWindowId = obj.getMainWindowId();
    }
    let value = map.get(mainWindowId);
    if (null == value) {
      const hasItem = set.has(mainWindowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj2 = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    return value.visible;
  }
  getFocusedWindowId() {
    let c0 = null;
    const item = map.forEach((focused, index) => {
      if (focused.focused) {
        c0 = index;
      }
    });
    return c0;
  }
  getLastFocusedWindowId() {
    return c3;
  }
  isElementFullScreen() {
    let mainWindowId = arg0;
    if (arg0 === undefined) {
      const obj = WindowIdUtils;
      mainWindowId = obj.getMainWindowId();
    }
    let value = map.get(mainWindowId);
    if (null == value) {
      const hasItem = set.has(mainWindowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj2 = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    return value.isElementFullscreen;
  }
  windowSize() {
    let mainWindowId = arg0;
    if (arg0 === undefined) {
      const obj = WindowIdUtils;
      mainWindowId = obj.getMainWindowId();
    }
    let value = map.get(mainWindowId);
    if (null == value) {
      const hasItem = set.has(mainWindowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj2 = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    return value.windowSize;
  }
}
const prototype = WindowStore.prototype;
WindowStore.displayName = "WindowStore";
let obj = {
  WINDOW_INIT: function handleWindowInit(width) {
    const tmp = _modDef38;
    tmp(!map.has(width.windowId), "Window initialized multiple times");
    const focused = width.focused;
    const obj = { windowSize: { width: width.width, height: width.height }, isElementFullscreen: width.isElementFullscreen, focused, visible: width.visible };
    const result = map.set(width.windowId, obj);
    if (focused) {
      const windowId = width.windowId;
    }
    return true;
  },
  WINDOW_FULLSCREEN_CHANGE: function handleWindowFullscreenChange(windowId) {
    windowId = windowId.windowId;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    let flag = value.isElementFullscreen !== windowId.isElementFullscreen;
    if (flag) {
      const windowId2 = windowId.windowId;
      const obj2 = { isElementFullscreen: windowId.isElementFullscreen };
      const merged = Object.assign(value);
      const result = set(windowId2, obj2);
      flag = true;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleWindowFocus(windowId) {
    windowId = windowId.windowId;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    let flag = value.focused !== windowId.focused;
    if (flag) {
      if (windowId.focused) {
        const windowId3 = windowId.windowId;
      }
      const windowId2 = windowId.windowId;
      const obj2 = { focused: windowId.focused };
      const merged = Object.assign(value);
      const result = set(windowId2, obj2);
      flag = true;
    }
    return flag;
  },
  WINDOW_RESIZED: function handleWindowResize(windowId) {
    windowId = windowId.windowId;
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    let flag = value.windowSize.width !== windowId.width || value.windowSize.height !== windowId.height;
    if (flag) {
      const windowId2 = windowId.windowId;
      const obj2 = { windowSize: size };
      const merged = Object.assign(value);
      size = { width: null, height: null };
      ({ width: obj3.width, height: obj3.height } = windowId);
      const result = set(windowId2, obj2);
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
    let value = map.get(windowId);
    if (null == value) {
      const hasItem = set.has(windowId);
      value = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
      const obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    }
    let flag = value.visible !== windowId.visible;
    if (flag) {
      const windowId2 = windowId.windowId;
      const obj2 = { visible: windowId.visible };
      const merged = Object.assign(value);
      const result = set(windowId2, obj2);
      flag = true;
    }
    return flag;
  }
};
const windowStore = new WindowStore(DispatcherDefault, obj);
const promise = asyncRequire(1252, dependencyMap.paths);
promise.then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator(() => {

  });
});
let size = size_mod;
let result = size.fileFinishedImporting("stores/web/WindowStore.tsx");

export default windowStore;