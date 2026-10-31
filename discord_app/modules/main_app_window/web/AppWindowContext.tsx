// === Module 6929: AppWindowContext ===

// Module 6929 (AppWindowContext)
import WindowIdUtils2 from "WindowIdUtils" /* 6868 */;
import WindowInteractingUtils from "WindowInteractingUtils" /* 6930 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WindowStore from "WindowStore" /* 6867 */;

require = fn;
let jsx = fn(21).jsx;
let componentDispatcher = new fn(1108).ComponentDispatcher();
let obj = { appContext: fn(1072).AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher, windowId: null };
const WindowIdUtils = fn(6868);
obj.windowId = WindowIdUtils.getMainWindowId();
const context = noop.createContext(obj);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export function getWindowDispatchForElement(ownerDocument) {
  const defaultView = ownerDocument.ownerDocument.defaultView;
  if (null != defaultView) {
    value = map.get(WindowIdUtils2.getWindowId(defaultView));
    let windowDispatch;
    if (value != null) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
}
export function getWindowDispatchForEvent(target) {
  target = undefined;
  if (target != null) {
    target = target.target;
  }
  let tmp4 = null;
  if (obj.isElement(target)) {
    const defaultView = target.target.ownerDocument.defaultView;
    let tmp5;
    if (null != defaultView) {
      value = map.get(WindowIdUtils2.getWindowId(defaultView));
      let windowDispatch;
      if (value != null) {
        windowDispatch = value.windowDispatch;
      }
      tmp5 = windowDispatch;
      const tmpResult = WindowIdUtils2;
    }
    if (tmp5 == null) {
      tmp5 = null;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}
export function getCurrentlyInteractingAppWindowContext() {
  const currentlyInteractingWindowId = WindowInteractingUtils.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
}
export function getAppWindowContextValue(arg0) {
  return map.get(arg0);
}
export function getCurrentlyInteractingAppContext() {
  const currentlyInteractingWindowId = WindowInteractingUtils.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  let appContext = null;
  if (null != tmp2) {
    appContext = tmp2.appContext;
  }
  return appContext;
}
export function getFocusedOrLastFocusedAppWindowContext() {
  let focusedWindowId = WindowStore.getFocusedWindowId();
  if (focusedWindowId == null) {
    focusedWindowId = WindowStore.getLastFocusedWindowId();
  }
  let tmp2 = null;
  if (null != focusedWindowId) {
    value = map.get(focusedWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
}
export function AppWindowContextProvider(children) {
  ({ appContext, renderWindow } = children);
  let windowId;
  noop = undefined;
  const tmp = windowId(noop.useState(appContext(renderWindow[6]).getWindowId(renderWindow)), 2);
  windowId = tmp[0];
  noop = tmp[1];
  const memo = noop.useMemo(() => {
    const componentDispatcher = new appContext(renderWindow[5]).ComponentDispatcher();
    return componentDispatcher;
  }, []);
  const items = [appContext, renderWindow, memo, windowId];
  value = noop.useMemo(() => ({ appContext, renderWindow, windowDispatch: memo, windowId }), items);
  jsx = value;
  const items1 = [renderWindow, windowId];
  const effect = noop.useEffect(() => {
    if (null == first) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        windowId = WindowIdUtils2.getWindowId(renderWindow);
        if (null != windowId) {
          closure_3(windowId);
          const _clearInterval = clearInterval;
          clearInterval(closure_0);
        }
      }, 10);
      return () => clearInterval(closure_0);
    }
  }, items1);
  const items2 = [value, renderWindow, windowId];
  const effect1 = noop.useEffect(() => {
    function handleUnload() {
      map.delete(windowId);
    }
    const result = map.set(first, c5);
    const listener = renderWindow.addEventListener("unload", handleUnload);
    return () => renderWindow.removeEventListener("unload", handleUnload);
  }, items2);
  return <context.Provider value={value}>{children.children}</context.Provider>;
}
export function useAppContext() {
  return noop.useContext(context).appContext;
}
export function useWindowDispatch() {
  return noop.useContext(context).windowDispatch;
}
export function useRenderWindow() {
  return noop.useContext(context).renderWindow;
}