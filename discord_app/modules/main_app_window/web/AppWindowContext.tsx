// === Module 5533: context ===

// Module 5533 (context)
import getWindowId2 from "getWindowId" /* 5534 */;
import INTERACTION_EVENTS from "INTERACTION_EVENTS" /* 5535 */;
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import getWindowId from "getWindowId" /* 5534 */;

require = arg1;
let c3 = importAllResult;
let componentDispatcher = new require("ComponentDispatcher").ComponentDispatcher();
const obj = { appContext: require("ME").AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher, windowId: null };
obj[3] = getWindowId.getMainWindowId();
const context = importAllResult.createContext(obj);
const map = new Map();
let result = require("set").fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export const getWindowDispatchForElement = function getWindowDispatchForElement(ownerDocument) {
  const defaultView = ownerDocument.ownerDocument.defaultView;
  if (null != defaultView) {
    const value = map.get(getWindowId2.getWindowId(defaultView));
    let windowDispatch;
    if (value != null) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
};
export const getWindowDispatchForEvent = function getWindowDispatchForEvent(target) {
  target = undefined;
  if (target != null) {
    target = target.target;
  }
  let tmp4 = null;
  if (obj.isElement(target)) {
    const defaultView = target.target.ownerDocument.defaultView;
    let tmp5;
    if (null != defaultView) {
      const value = map.get(getWindowId2.getWindowId(defaultView));
      let windowDispatch;
      if (value != null) {
        windowDispatch = value.windowDispatch;
      }
      tmp5 = windowDispatch;
      const tmpResult = getWindowId2;
    }
    if (tmp5 == null) {
      tmp5 = null;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export const getCurrentlyInteractingAppWindowContext = function getCurrentlyInteractingAppWindowContext() {
  const currentlyInteractingWindowId = INTERACTION_EVENTS.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    let value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
};
export const getAppWindowContextValue = function getAppWindowContextValue(arg0) {
  return map.get(arg0);
};
export const getCurrentlyInteractingAppContext = function getCurrentlyInteractingAppContext() {
  const currentlyInteractingWindowId = INTERACTION_EVENTS.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    let value = map.get(currentlyInteractingWindowId);
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
};
export const AppWindowContextProvider = function AppWindowContextProvider(children) {
  ({ appContext, renderWindow } = children);
  let first;
  importAllResult = undefined;
  let memo;
  let redux;
  const tmp = first(importAllResult.useState(appContext(renderWindow[5]).getWindowId(renderWindow)), 2);
  first = tmp[0];
  importAllResult = tmp[1];
  memo = importAllResult.useMemo(() => {
    const componentDispatcher = new appContext(renderWindow[4]).ComponentDispatcher();
    return componentDispatcher;
  }, []);
  const items = [appContext, renderWindow, memo, first];
  const value = importAllResult.useMemo(() => ({ appContext, renderWindow, windowDispatch: memo, windowId: first }), items);
  redux = value;
  const items1 = [renderWindow, first];
  const effect = importAllResult.useEffect(() => {
    if (null == first) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        const windowId = appContext(renderWindow[5]).getWindowId(closure_1_1);
        if (null != windowId) {
          closure_1_3(windowId);
          const _clearInterval = clearInterval;
          clearInterval(closure_0);
        }
      }, 10);
      return () => clearInterval(closure_0);
    }
  }, items1);
  const items2 = [value, renderWindow, first];
  const effect1 = importAllResult.useEffect(() => {
    function handleUnload() {
      closure_1_6.delete(closure_2);
    }
    const result = closure_1_6.set(first, c5);
    const listener = renderWindow.addEventListener("unload", handleUnload);
    return () => closure_1_1.removeEventListener("unload", handleUnload);
  }, items2);
  return memo(redux.Provider, { value, children: children.children });
};
export const useAppContext = function useAppContext() {
  return importAllResult.useContext(context).appContext;
};
export const useWindowDispatch = function useWindowDispatch() {
  return importAllResult.useContext(context).windowDispatch;
};
export const useRenderWindow = function useRenderWindow() {
  return importAllResult.useContext(context).renderWindow;
};