// _runtime/01873_maybeBuild.js
import _mod1668 from "metro/01668__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  targetOriginX: 0,
  targetOriginY: 0,
  targetWidth: 0,
  targetHeight: 0,
  targetGlobalOriginX: 0,
  targetGlobalOriginY: 0,
  targetBorderRadius: 0,
  windowWidth: 0,
  windowHeight: 0,
  currentOriginX: 0,
  currentOriginY: 0,
  currentWidth: 0,
  currentHeight: 0,
  currentGlobalOriginX: 0,
  currentGlobalOriginY: 0,
  currentBorderRadius: 0,
};

export function checkStyleOverwriting(build, arr, arg2, fn) {
  if (tmp) {
    closure_0 = undefined;
    const _Array = Array;
    if (Array.isArray(arr)) {
      let flatResult = arr.flat();
    } else {
      flatResult = [arr];
    }
    const _Boolean = Boolean;
    const found = flatResult.filter(Boolean);
    const mapped = found.map((initial) => {
      value = initial;
      if ("initial" in initial) {
        value = initial.initial.value;
      }
      return value;
    });
    closure_0 = mapped.flatMap((item) => Object.keys(item));
    const _Object = Object;
    const keys = Object.keys(build.build()(closure_2).animations);
    const found1 = keys.filter((item) => closure_0.includes(item));
    if (found1.length > 0) {
      const logger = _mod1668.logger;
      let str = "Properties";
      if (1 === found1.length) {
        str = "Property";
      }
      const _HermesInternal = HermesInternal;
      logger.warn(
        "" +
          str +
          ' "' +
          found1.join(", ") +
          '" of ' +
          arg2 +
          " may be overwritten by a layout animation. Please wrap your component with an animated view and apply the layout animation on the wrapper.",
      );
      fn();
    }
  }
  tmp = "build" in build && typeof build.build === "function";
}
export function maybeBuild(sharedTransitionTag) {
  let buildResult = sharedTransitionTag;
  if (tmp) {
    buildResult = sharedTransitionTag.build();
  }
  return buildResult;
}
