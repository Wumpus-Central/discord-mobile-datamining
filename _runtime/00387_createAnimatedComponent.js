// === Module 387: createAnimatedComponent ===

// Module 387 (createAnimatedComponent)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import useMergeRefsDefault from "useMergeRefs" /* 334 */;
import createAnimatedPropsHookDefault from "createAnimatedPropsHook" /* 388 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let dependencyMap, first, importDefault, items, merged, merged1, obj, ref, style, style1, tmp3, tmp5;

const useMemo = react2.useMemo;
const jsx = Fragment.jsx;

export default function createAnimatedComponent(displayName) {
  let closure_1;
  importDefault = displayName;
  dependencyMap = createAnimatedPropsHookDefault(null);
  let tmp = displayName.displayName || "Anonymous";
  class AnimatedComponent {
    constructor(arg0) {
      ref = displayName.ref;
      style = undefined;
      style = undefined;
      tmp = closure_2(closure_1(Object.assign(displayName, Object.assign({ ref: 0 }))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style1 = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style1 = passthroughAnimatedPropExplicitValues.style;
      }
      style = style1;
      items = [, ];
      items[0] = style1;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => { /* body not rendered: F134182 */ }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return jsx(closure_0, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + tmp + ")";
  return AnimatedComponent;
};
export const unstable_createAnimatedComponentWithAllowlist = function unstable_createAnimatedComponentWithAllowlist(displayName, arg1) {
  let closure_1;
  importDefault = displayName;
  dependencyMap = createAnimatedPropsHookDefault(arg1);
  const tmp = displayName.displayName || "Anonymous";
  class AnimatedComponent {
    constructor(arg0) {
      ref = displayName.ref;
      style = undefined;
      style = undefined;
      tmp = closure_2(closure_1(Object.assign(displayName, Object.assign({ ref: 0 }))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style1 = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style1 = passthroughAnimatedPropExplicitValues.style;
      }
      style = style1;
      items = [, ];
      items[0] = style1;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => { /* body not rendered: F134182 */ }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return jsx(closure_0, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + tmp + ")";
  return AnimatedComponent;
};