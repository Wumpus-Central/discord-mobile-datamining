// === Module 5943: ContextMenuActionCreators ===

// Module 5943 (ContextMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

function openContextMenu(stopPropagation, render, enableSpellCheck, renderLazy) {
  let bottom;
  let closure_1;
  let currentTarget2;
  let dOMRect;
  let left;
  let obj2;
  let pageX;
  let pageY;
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
            size = undefined;
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
    let contextMenu = { render, renderLazy, target: currentTarget2, rect: dOMRect, config: obj2 };
    currentTarget2 = stopPropagation.target;
    if (currentTarget2 == null) {
      currentTarget2 = stopPropagation.currentTarget;
    }
    const _DOMRect = DOMRect;
    const self = this;
    const self2 = this;
    dOMRect = new DOMRect(tmp3, sum1, 0, 0);
    const obj3 = contextMenu(5944);
    let APP = obj3.getCurrentlyInteractingAppContext();
    if (APP == null) {
      APP = AppContext.APP;
    }
    obj2 = { context: APP };
    const merged = Object.assign(enableSpellCheck);
    let nativeEvent = stopPropagation;
    if ("nativeEvent" in stopPropagation) {
      nativeEvent = stopPropagation.nativeEvent;
    }
    enableSpellCheck = undefined;
    if (enableSpellCheck != null) {
      enableSpellCheck = enableSpellCheck.enableSpellCheck;
    }
    if (enableSpellCheck) {
      const tmp14Result = contextMenu(1369);
      if (tmp14Result.isDesktop()) {
        if (nativeEvent.isTrusted) {
          const tmp14Result2 = contextMenu(5947);
          importDefault = tmp14Result2.addResultListener(() => {
            closure_1();
            contextMenu = DispatcherDefault;
            const obj2 = { type: "CONTEXT_MENU_OPEN", contextMenu };
            contextMenu.dispatch(obj2);
          });
        }
      }
    }
    stopPropagation.preventDefault();
    const obj4 = { type: "CONTEXT_MENU_OPEN", contextMenu };
    const obj6 = DispatcherDefault;
    obj6.dispatch(obj4);
  } else {
    const currentTarget = stopPropagation.currentTarget;
  }
}
const AppContext = Constants.AppContext;
let size = size_mod;
const result = size.fileFinishedImporting("actions/ContextMenuActionCreators.tsx");

export function closeContextMenu() {

}
export { openContextMenu };
export const openContextMenuLazy = function openContextMenuLazy(stopPropagation, renderLazy, enableSpellCheck) {
  openContextMenu(stopPropagation, undefined, enableSpellCheck, renderLazy);
};