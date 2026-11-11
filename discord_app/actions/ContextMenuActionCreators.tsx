// === Module 7626: ContextMenuActionCreators ===

// Module 7626 (ContextMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import SpellcheckUtils from "SpellcheckUtils" /* 7627 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function openContextMenu(stopPropagation, render, enableSpellCheck, renderLazy) {
  stopPropagation.stopPropagation();
  if (null == stopPropagation.currentTarget.contains) {
    pageY = 0;
    pageX = 0;
    if ("pageX" in stopPropagation) {
      ({ pageX, pageY } = stopPropagation);
    }
    let sum1 = pageY;
    let tmp3 = pageX;
    if (0 === pageX) {
      sum1 = pageY;
      tmp3 = pageX;
      if (0 === pageY) {
        const target = stopPropagation.target;
        let selection;
        if (target != null) {
          const defaultView = target.ownerDocument.defaultView;
          if (defaultView != null) {
            selection = defaultView.getSelection();
          }
        }
        bottom = pageY;
        left = pageX;
        if (null != selection) {
          bottom = pageY;
          left = pageX;
          if (selection.rangeCount > 0) {
            bottom = pageY;
            left = pageX;
            if (null != target) {
              const rangeAt = selection.getRangeAt(0);
              bottom = pageY;
              left = pageX;
              if (target.contains(rangeAt.commonAncestorContainer)) {
                const boundingClientRect = rangeAt.getBoundingClientRect();
                bottom = pageY;
                left = pageX;
                if (0 !== boundingClientRect.height) {
                  ({ left, bottom } = boundingClientRect);
                }
              }
            }
          }
        }
        sum1 = bottom;
        tmp3 = left;
        if (0 === left) {
          sum1 = bottom;
          tmp3 = left;
          if (0 === bottom) {
            let size;
            if (target != null) {
              size = target.getBoundingClientRect();
            }
            if (size == null) {
              size = {};
            }
            const left2 = size.left;
            let num2 = 0;
            if (undefined !== left2) {
              num2 = left2;
            }
            const top = size.top;
            let num3 = 0;
            if (undefined !== top) {
              num3 = top;
            }
            const width = size.width;
            let num4 = 0;
            if (undefined !== width) {
              num4 = width;
            }
            const height = size.height;
            let num6 = 0;
            const sum = num2 + num4 / 2;
            if (undefined !== height) {
              num6 = height;
            }
            sum1 = num3 + num6 / 2;
            tmp3 = sum;
          }
        }
      }
    }
    let contextMenu = { render, renderLazy, target: null, rect: null, config: null };
    let currentTarget2 = stopPropagation.target;
    if (currentTarget2 == null) {
      currentTarget2 = stopPropagation.currentTarget;
    }
    contextMenu.target = currentTarget2;
    const _DOMRect = DOMRect;
    const dOMRect = new DOMRect(tmp3, sum1, 0, 0);
    contextMenu.rect = dOMRect;
    let APP = contextMenu(settle[3]).getCurrentlyInteractingAppContext();
    if (APP == null) {
      APP = AppContext.APP;
    }
    let obj2 = { context: APP };
    const merged = Object.assign(enableSpellCheck);
    contextMenu.config = obj2;
    let nativeEvent = stopPropagation;
    if ("nativeEvent" in stopPropagation) {
      nativeEvent = stopPropagation.nativeEvent;
    }
    enableSpellCheck = undefined;
    if (enableSpellCheck != null) {
      enableSpellCheck = enableSpellCheck.enableSpellCheck;
    }
    if (enableSpellCheck) {
      if (tmp16Result.isDesktop()) {
        if (nativeEvent.isTrusted) {
          settle = function settle() {
            let flag = !c1;
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              settle();
              flag = true;
              if (c4 === settle) {
                c4 = null;
                flag = true;
              }
            }
            return flag;
          };
          if (settle != null) {
            if (typeof settle === "function") {
              if (!closure_130_1) {
                closure_130_1 = true;
                const _clearTimeout2 = clearTimeout;
                clearTimeout(closure_130_3);
                closure_130_4();
                if (c4 === closure_130_2) {
                  c4 = null;
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          importDefault = false;
          const _setTimeout = setTimeout;
          AppContext = setTimeout(() => {
            let flag = !c1;
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              settle();
              flag = true;
              if (c4 === settle) {
                c4 = null;
                flag = true;
              }
            }
            if (flag) {
              contextMenu = SpellcheckUtils;
              const result = contextMenu.clearCachedMisspelling();
              const obj3 = { type: "CONTEXT_MENU_OPEN", contextMenu };
              DispatcherDefault.dispatch(obj3);
            }
          }, 500);
          settle = tmp16(tmp17[2]).addResultListener(() => {
            let flag = !c1;
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_3);
              settle();
              flag = true;
              if (c4 === settle) {
                c4 = null;
                flag = true;
              }
            }
            if (flag) {
              contextMenu = DispatcherDefault;
              const obj2 = { type: "CONTEXT_MENU_OPEN", contextMenu };
              contextMenu.dispatch(obj2);
            }
          });
          const tmp16Result2 = tmp16(tmp17[2]);
        }
      }
      tmp16Result = tmp16(tmp17[4]);
    }
    if (settle != null) {
      if (typeof settle === "function") {
        if (!importDefault) {
          importDefault = true;
          let _clearTimeout = clearTimeout;
          clearTimeout(AppContext);
          settle();
          if (c4 === settle) {
            c4 = null;
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    stopPropagation.preventDefault();
    let obj3 = contextMenu(settle[3]);
    const obj4 = { type: "CONTEXT_MENU_OPEN", contextMenu };
    require("Dispatcher").dispatch(obj4);
    const obj6 = require("Dispatcher");
  } else {
    const currentTarget = stopPropagation.currentTarget;
  }
}
let AppContext = Constants.AppContext;
let c4 = null;
let result = size.fileFinishedImporting("actions/ContextMenuActionCreators.tsx");

export function closeContextMenu() {
  if (_null != null) {
    if (typeof _null === "function") {
      if (!c1) {
        c1 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(AppContext);
        _null();
        if (_null === dependencyMap) {
          _null = null;
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
export { openContextMenu };
export function openContextMenuLazy(stopPropagation, renderLazy, enableSpellCheck) {
  openContextMenu(stopPropagation, undefined, enableSpellCheck, renderLazy);
}