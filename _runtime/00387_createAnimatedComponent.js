// _runtime/00387_createAnimatedComponent.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import useMergeRefsDefault from "00334_useMergeRefs.js";
import createAnimatedPropsHookDefault from "00388_createAnimatedPropsHook.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

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
      items = [,];
      items[0] = style1;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => {
        /* body not rendered: F134182 */
      }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return jsx(closure_0, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + tmp + ")";
  return AnimatedComponent;
}
export const unstable_createAnimatedComponentWithAllowlist = function unstable_createAnimatedComponentWithAllowlist(
  displayName,
  arg1,
) {
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
      items = [,];
      items[0] = style1;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => {
        /* body not rendered: F134182 */
      }, items);
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
