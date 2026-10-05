// discord_app/modules/main_app_window/web/AppWindowContext.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import DOMUtils from "../../../../discord_common/js/shared/utils/DOMUtils.tsx";
import WindowInteractingUtils from "../../../utils/web/WindowInteractingUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import WindowIdUtils_mod from "../../../utils/web/WindowIdUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, children, dependencyMap;

let WindowIdUtils;
let react = react_mod;
const AppContext = Constants.AppContext;
const jsx = Fragment.jsx;
let componentDispatcher = new ComponentDispatchUtils.ComponentDispatcher();
let obj = {
  appContext: AppContext.APP,
  renderWindow: window,
  windowDispatch: componentDispatcher,
  windowId: WindowIdUtils.getMainWindowId(),
};
const createContext = react.createContext;
WindowIdUtils = WindowIdUtils_mod;
const context = createContext(obj);
const map = new Map();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (appContext, renderWindow) {
      let closure_2;
      let closure_3;
      let tmp4;
      let tmp8;
      let windowId;
      _require = renderWindow;
      let obj = require("react");
      const cResult = obj.c(16);
      if (cResult[0] !== renderWindow) {
        const tmpResult = require("WindowIdUtils");
        windowId = tmpResult.getWindowId(renderWindow);
        cResult[0] = renderWindow;
        cResult[1] = windowId;
        tmp4 = windowId;
      } else {
        tmp4 = cResult[1];
      }
      [windowId, _slicedToArray] = react.useState(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const self = this;
        const self2 = this;
        const componentDispatcher = new tmp(tmp2[4]).ComponentDispatcher();
        cResult[2] = componentDispatcher;
        tmp8 = componentDispatcher;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === appContext) {
        if (cResult[4] === renderWindow) {
          let tmp11;
          if (cResult[5] === windowId) {
            tmp11 = cResult[6];
          }
          react = tmp11;
          if (cResult[7] === renderWindow) {
            let tmp12;
            let tmp13;
            if (cResult[8] === windowId) {
              tmp12 = cResult[9];
              tmp13 = cResult[10];
            }
            const effect = obj3.useEffect(tmp12, tmp13);
            if (cResult[11] === tmp11) {
              if (cResult[12] === renderWindow) {
                let tmp16;
                let tmp17;
                if (cResult[13] === windowId) {
                  tmp16 = cResult[14];
                  tmp17 = cResult[15];
                }
                const effect1 = obj3.useEffect(tmp16, tmp17);
                return tmp11;
              }
            }
            class E {
              constructor() {
                result = closure_1_6.set(closure_1, closure_3);
                handleUnload = function handleUnload() {
                  /* body not rendered: F136973 */
                };
                listener = handleUnload.addEventListener("unload", handleUnload);
                return () => {
                  /* body not rendered: F136974 */
                };
              }
            }
            const items = [tmp11, renderWindow, windowId];
            cResult[11] = tmp11;
            cResult[12] = renderWindow;
            cResult[13] = windowId;
            cResult[14] = E;
            cResult[15] = items;
            tmp17 = items;
            tmp16 = E;
          }
          const items1 = [renderWindow, windowId];
          cResult[7] = renderWindow;
          cResult[8] = windowId;
          cResult[9] = tmp14;
          cResult[10] = items1;
          tmp13 = items1;
          tmp12 = tmp14;
        }
      }
      const obj2 = { appContext, renderWindow, windowDispatch: tmp8, windowId };
      cResult[3] = appContext;
      cResult[4] = renderWindow;
      cResult[5] = windowId;
      cResult[6] = obj2;
      tmp11 = obj2;
    }
  : (appContext, defaultView) => {
      let closure_3;
      let renderWindow;
      let windowId;
      _require = appContext;
      dependencyMap = defaultView;
      const useState = react.useState;
      let obj = require("WindowIdUtils");
      const tmp = windowId(useState(obj.getWindowId(defaultView)), 2);
      windowId = tmp[0];
      react = tmp[1];
      const memo = react.useMemo(() => {
        const componentDispatcher = new appContext(renderWindow[4]).ComponentDispatcher();
        return componentDispatcher;
      }, []);
      const items = [appContext, defaultView, memo, windowId];
      const memo1 = react.useMemo(() => ({ appContext, renderWindow, windowDispatch: memo, windowId }), items);
      const items1 = [defaultView, windowId];
      const effect = react.useEffect(() => {
        let closure_0;
        if (null == first) {
          const _setInterval = setInterval;
          const interval = setInterval(() => {
            const obj = WindowIdUtils;
            windowId = obj.getWindowId(renderWindow);
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
      const effect1 = react.useEffect(() => {
        function handleUnload() {
          map.delete(windowId);
        }
        const result = map.set(first, memo1);
        const listener = renderWindow.addEventListener("unload", handleUnload);
        return () => renderWindow.removeEventListener("unload", handleUnload);
      }, items2);
      return memo1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp2 = closure_7(children.appContext, children.renderWindow);
      if (cResult[0] === children) {
        let tmp3;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <context.Provider value={tmp2}>{children}</context.Provider>;
      cResult[0] = children;
      cResult[1] = tmp2;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (appContext) => (
      <context.Provider value={closure_7(appContext.appContext, appContext.renderWindow)}>
        {appContext.children}
      </context.Provider>
    );
function getWindowDispatchForElement(ownerDocument) {
  const defaultView = ownerDocument.ownerDocument.defaultView;
  if (null != defaultView) {
    const obj = WindowIdUtils;
    const value = map.get(obj.getWindowId(defaultView));
    let windowDispatch;
    if (value != null) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
}
function getCurrentlyInteractingAppWindowContext() {
  const obj = WindowInteractingUtils;
  const currentlyInteractingWindowId = obj.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    let value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result3 = size.fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export { getWindowDispatchForElement };
export const getWindowDispatchForEvent = function getWindowDispatchForEvent(target) {
  target = undefined;
  const isElement = DOMUtils.isElement;
  DOMUtils;
  if (target != null) {
    target = target.target;
  }
  let tmp5 = null;
  if (isElement(target)) {
    const defaultView = target.target.ownerDocument.defaultView;
    let tmp6;
    if (null != defaultView) {
      const tmpResult = WindowIdUtils;
      const value = map.get(tmpResult.getWindowId(defaultView));
      let windowDispatch;
      if (value != null) {
        windowDispatch = value.windowDispatch;
      }
      tmp6 = windowDispatch;
    }
    if (tmp6 == null) {
      tmp6 = null;
    }
    tmp5 = tmp6;
  }
  return tmp5;
};
export { getCurrentlyInteractingAppWindowContext };
export const getAppWindowContextValue = function getAppWindowContextValue(arg0) {
  return map.get(arg0);
};
export const getCurrentlyInteractingAppContext = function getCurrentlyInteractingAppContext() {
  const obj = WindowInteractingUtils;
  const currentlyInteractingWindowId = obj.getCurrentlyInteractingWindowId();
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
export const AppWindowContextProvider = tmp6;
export const useAppContext = () => react.useContext(context).appContext;
export const useWindowDispatch = () => react.useContext(context).windowDispatch;
export const useRenderWindow = () => react.useContext(context).renderWindow;
