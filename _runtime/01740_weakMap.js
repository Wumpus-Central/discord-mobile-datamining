// _runtime/01740_weakMap.js
import { _makeShareableClone } from "01664__makeShareableClone.js";
const require = arg1;
const dependencyMap = arg6;
const weakMap = new WeakMap();
arg5.snapshots = weakMap;
arg5.makeElementVisible = function makeElementVisible(_componentDOMRef, arg1) {
  const _require = _componentDOMRef;
  if (0 === arg1) {
    __makeShareableClone._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
    const obj = __makeShareableClone;
  } else {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      _componentDOMRef(outer1_1[0])._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
    }, 1000 * arg1);
  }
};
arg5.setElementPosition = function setElementPosition(cloneNodeResult, rect) {
  cloneNodeResult.style.transform = "";
  cloneNodeResult.style.position = "absolute";
  cloneNodeResult.style.top = "" + rect.top + "px";
  cloneNodeResult.style.left = "" + rect.left + "px";
  cloneNodeResult.style.width = "" + rect.width + "px";
  cloneNodeResult.style.height = "" + rect.height + "px";
  cloneNodeResult.style.margin = "0px";
  if (cloneNodeResult.parentElement) {
    const parentElement = cloneNodeResult.parentElement;
    rect = parentElement.getBoundingClientRect();
    const _parseInt = parseInt;
    const _parseInt2 = parseInt;
    const parsed = parseInt(globalThis.getComputedStyle(parentElement).borderTopWidth);
    const parsed1 = parseInt(globalThis.getComputedStyle(parentElement).borderLeftWidth);
    const rect2 = cloneNodeResult.getBoundingClientRect();
    if (rect2.top !== rect.top) {
      cloneNodeResult.style.top = `${rect.top - rect.top - tmp}px`;
    }
    if (rect2.left !== rect.left) {
      cloneNodeResult.style.left = `${rect.left - rect.left - tmp2}px`;
    }
  }
};