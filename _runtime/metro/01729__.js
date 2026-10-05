// === Module 1729: ? ===

// Module 1729
import _updatePropsJS from "_updatePropsJS" /* 1653 */;

const require = globalThis.__r;
let _require;

const weakMap = new WeakMap();

export const snapshots = weakMap;
export const makeElementVisible = function makeElementVisible(_componentDOMRef, arg1) {
  _require = _componentDOMRef;
  if (0 === arg1) {
    let obj = require("_updatePropsJS");
    obj._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
  } else {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const obj = _updatePropsJS;
      obj._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
    }, 1000 * arg1);
  }
};
export const setElementPosition = function setElementPosition(cloneNodeResult, rect) {
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
    const getComputedStyle2 = globalThis.getComputedStyle;
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