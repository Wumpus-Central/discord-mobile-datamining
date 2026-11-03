// === Module 1772: ? ===

// Module 1772
import _mod1665 from "module_1665" /* 1665 */;

require = arg1;
const dependencyMap = arg6;

export function createSingleCSSAnimationProperties(arg0) {
  const result = _mod1665.convertPropertiesToArrays(arg0);
  ({ animationName, animationDuration: require, animationTimingFunction: dependencyMap, animationDelay: closure_2, animationIterationCount: closure_3, animationDirection: closure_4, animationFillMode: closure_5, animationPlayState: closure_6 } = result);
  return animationName.map((animationName, index) => {
    const obj = { animationName, animationDuration: null, animationTimingFunction: null, animationDelay: null, animationIterationCount: null, animationDirection: null, animationFillMode: null, animationPlayState: null };
    let tmp;
    if (require != null) {
      tmp = require[index % require.length];
    }
    obj.animationDuration = tmp;
    let tmp2;
    if (dependencyMap != null) {
      tmp2 = dependencyMap[index % dependencyMap.length];
    }
    obj.animationTimingFunction = tmp2;
    let tmp3;
    if (length != null) {
      tmp3 = length[index % length.length];
    }
    obj.animationDelay = tmp3;
    let tmp4;
    if (length2 != null) {
      tmp4 = length2[index % length2.length];
    }
    obj.animationIterationCount = tmp4;
    let tmp5;
    if (length3 != null) {
      tmp5 = length3[index % length3.length];
    }
    obj.animationDirection = tmp5;
    let tmp6;
    if (length4 != null) {
      tmp6 = length4[index % length4.length];
    }
    obj.animationFillMode = tmp6;
    let tmp7;
    if (length5 != null) {
      tmp7 = length5[index % length5.length];
    }
    obj.animationPlayState = tmp7;
    return obj;
  });
}