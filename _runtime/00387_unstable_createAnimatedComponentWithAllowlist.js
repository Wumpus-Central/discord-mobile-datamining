// _runtime/00387_unstable_createAnimatedComponentWithAllowlist.js
import _modDef334 from "metro/00334__.js";
import _modDef388 from "metro/00388__.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function createAnimatedComponent(displayName) {
  importDefault = displayName;
  dependencyMap = _modDef388(null);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = closure_2(closure_1(Object.assign(displayName, Object.assign({ ref: 0 }))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return jsx(closure_0, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};
export const unstable_createAnimatedComponentWithAllowlist = function unstable_createAnimatedComponentWithAllowlist(displayName, arg1) {
  importDefault = displayName;
  dependencyMap = _modDef388(arg1);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = closure_2(closure_1(Object.assign(displayName, Object.assign({ ref: 0 }))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = useMemo(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return jsx(closure_0, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};