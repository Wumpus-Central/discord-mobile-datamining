// discord_app/actions/ContextMenuActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

function openContextMenu(stopPropagation, arg1, enableSpellCheck, arg3) {
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
    let obj = { render: null, renderLazy: null, target: null, rect: null, config: null };
    obj[0] = arg1;
    obj[1] = arg3;
    let currentTarget2 = stopPropagation.target;
    if (currentTarget2 == null) {
      currentTarget2 = stopPropagation.currentTarget;
    }
    obj[2] = currentTarget2;
    const _DOMRect = DOMRect;
    const dOMRect = new DOMRect(tmp3, sum1, 0, 0);
    obj[3] = dOMRect;
    let APP = obj(6912).getCurrentlyInteractingAppContext();
    if (APP == null) {
      APP = AppContext.APP;
    }
    obj = { context: null };
    obj[0] = APP;
    const merged = Object.assign(enableSpellCheck);
    obj[4] = obj;
    let nativeEvent = stopPropagation;
    if ("nativeEvent" in stopPropagation) {
      nativeEvent = stopPropagation.nativeEvent;
    }
    enableSpellCheck = undefined;
    if (enableSpellCheck != null) {
      enableSpellCheck = enableSpellCheck.enableSpellCheck;
    }
    if (enableSpellCheck) {
      let tmp16Result = tmp16(500);
      if (tmp16Result.isDesktop()) {
        if (nativeEvent.isTrusted) {
          tmp16Result = tmp16(6915);
          importDefault = tmp16Result.addResultListener(() => {
            callback();
            obj = callback(dependencyMap[1]);
            obj = { type: "CONTEXT_MENU_OPEN", contextMenu: obj };
            obj.dispatch(obj);
          });
        }
      }
    }
    stopPropagation.preventDefault();
    const obj3 = obj(6912);
    obj1 = { type: "CONTEXT_MENU_OPEN", contextMenu: null };
    obj1[1] = obj;
    dispatcherDefault.dispatch(obj1);
  } else {
    const currentTarget = stopPropagation.currentTarget;
  }
}
const AppContext = ME.AppContext;
const result = obj132.fileFinishedImporting("actions/ContextMenuActionCreators.tsx");

export function closeContextMenu() {

}
export { openContextMenu };
export const openContextMenuLazy = function openContextMenuLazy(stopPropagation, arg1, enableSpellCheck) {
  openContextMenu(stopPropagation, undefined, enableSpellCheck, arg1);
};