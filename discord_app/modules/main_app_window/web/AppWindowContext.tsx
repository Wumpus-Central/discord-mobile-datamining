// === Module 6134: AppWindowContext ===

// Module 6134 (AppWindowContext)
import c from "c" /* 576 */;
import WindowIdUtils2 from "WindowIdUtils" /* 6071 */;
import WindowInteractingUtils from "WindowInteractingUtils" /* 6135 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let componentDispatcher = new fn(1121).ComponentDispatcher();
let obj = { appContext: fn(1085).AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher, windowId: null };
const WindowIdUtils = fn(6071);
obj.windowId = WindowIdUtils.getMainWindowId();
const context = noop.createContext(obj);
const map = new Map();
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWindowContextValue(appContext, renderWindow) {
  _require = renderWindow;
  const cResult = require("c").c(16);
  if (cResult[0] !== renderWindow) {
    windowId = tmp(tmp2[5]).getWindowId(renderWindow);
    cResult[0] = renderWindow;
    cResult[1] = windowId;
    let tmp4 = windowId;
    const tmpResult = tmp(tmp2[5]);
  } else {
    tmp4 = cResult[1];
  }
  [windowId, _slicedToArray] = noop.useState(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const componentDispatcher = new tmp(tmp2[4]).ComponentDispatcher();
    cResult[2] = componentDispatcher;
    let tmp8 = componentDispatcher;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === appContext) {
    if (cResult[4] === renderWindow) {
      if (cResult[5] === windowId) {
        let tmp13 = cResult[6];
      }
      noop = tmp13;
      if (cResult[7] === renderWindow) {
        if (cResult[8] === windowId) {
          let tmp14 = cResult[9];
          let tmp15 = cResult[10];
        }
        const effect = obj3.useEffect(tmp14, tmp15);
        if (cResult[11] === tmp13) {
          if (cResult[12] === renderWindow) {
            if (cResult[13] === windowId) {
              let tmp18 = cResult[14];
              let tmp19 = cResult[15];
            }
            const effect1 = obj3.useEffect(tmp18, tmp19);
            return tmp13;
          }
        }
        class E {
          constructor() {
            result = closure_1_6.set(closure_1, closure_3);
            handleUnload = function handleUnload() { ... };
            listener = handleUnload.addEventListener("unload", handleUnload);
            return () => { ... };
          }
        }
        const items = [tmp13, renderWindow, windowId];
        cResult[11] = tmp13;
        cResult[12] = renderWindow;
        cResult[13] = windowId;
        cResult[14] = E;
        cResult[15] = items;
        tmp19 = items;
        tmp18 = E;
      }
      const items1 = [renderWindow, windowId];
      cResult[7] = renderWindow;
      cResult[8] = windowId;
      cResult[9] = tmp16;
      cResult[10] = items1;
      tmp15 = items1;
      tmp14 = tmp16;
    }
  }
  const obj2 = { appContext, renderWindow, windowDispatch: tmp8, windowId };
  cResult[3] = appContext;
  cResult[4] = renderWindow;
  cResult[5] = windowId;
  cResult[6] = obj2;
  tmp13 = obj2;
}) : (function useWindowContextValue(appContext, defaultView) {
  _require = appContext;
  dependencyMap = defaultView;
  const tmp = windowId(noop.useState(require("WindowIdUtils").getWindowId(defaultView)), 2);
  windowId = tmp[0];
  noop = tmp[1];
  const memo = noop.useMemo(() => {
    const componentDispatcher = new appContext(renderWindow[4]).ComponentDispatcher();
    return componentDispatcher;
  }, []);
  const items = [appContext, defaultView, memo, windowId];
  const memo1 = noop.useMemo(() => ({ appContext, renderWindow, windowDispatch: memo, windowId }), items);
  const items1 = [defaultView, windowId];
  const effect = noop.useEffect(() => {
    if (null == first) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        windowId = WindowIdUtils2.getWindowId(closure_1);
        if (null != windowId) {
          closure_3(windowId);
          const _clearInterval = clearInterval;
          clearInterval(closure_0);
        }
      }, 10);
      return () => clearInterval(closure_0);
    }
  }, items1);
  const items2 = [memo1, defaultView, windowId];
  const effect1 = noop.useEffect(() => {
    function handleUnload() {
      map.delete(windowId);
    }
    const result = map.set(first, memo1);
    const listener = renderWindow.addEventListener("unload", handleUnload);
    return () => closure_1.removeEventListener("unload", handleUnload);
  }, items2);
  return memo1;
});
fn(558);
function getWindowDispatchForElement(ownerDocument) {
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
function getCurrentlyInteractingAppWindowContext() {
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
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result3 = size.fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export { getWindowDispatchForElement };
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
};
export { getCurrentlyInteractingAppWindowContext };
export const getAppWindowContextValue = function getAppWindowContextValue(arg0) {
  return map.get(arg0);
};
export const getCurrentlyInteractingAppContext = function getCurrentlyInteractingAppContext() {
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
};
export const AppWindowContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? (function AppWindowContextProvider(children) {
  const cResult = c.c(3);
  children = children.children;
  const tmp2 = closure_7(children.appContext, children.renderWindow);
  if (cResult[0] === children) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <context.Provider value={tmp2}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function AppWindowContextProvider(appContext) {
  return <context.Provider value={closure_7(appContext.appContext, appContext.renderWindow)}>{appContext.children}</context.Provider>;
});
export const useAppContext = function useAppContext() {
  return noop.useContext(context).appContext;
};
export const useWindowDispatch = function useWindowDispatch() {
  return noop.useContext(context).windowDispatch;
};
export const useRenderWindow = function useRenderWindow() {
  return noop.useContext(context).renderWindow;
};