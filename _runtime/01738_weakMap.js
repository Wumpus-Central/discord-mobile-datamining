// === Module 1738: weakMap ===

// Module 1738 (weakMap)
const require = arg1;
const dependencyMap = arg6;
const weakMap = new WeakMap();
arg5.snapshots = weakMap;
arg5.makeElementVisible = function makeElementVisible(_componentDOMRef, arg1) {
  const _require = _componentDOMRef;
  if (0 === arg1) {
    _require(1662)._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
    const obj = _require(1662);
  } else {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      _componentDOMRef(closure_1_1[0])._updatePropsJS({ visibility: "initial" }, _componentDOMRef);
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