// _runtime/01724_TransitionGenerator.js
import TransitionType from "01692_TransitionType.js";
import convertAnimationObjectToKeyframes from "01694_convertAnimationObjectToKeyframes.js";
import findDescendantWithExitingAnimation from "01723_findDescendantWithExitingAnimation.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";

require = arg1;
function addPxToTransform(transform) {
  return transform.map((item) => {
    const obj = {};
    const entries = Object.entries(item);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      let obj3 = first;
      let tmp6 = tmp5[1];
      if (first.includes("translate")) {
        if (typeof tmp6 === "number") {
          let _HermesInternal = HermesInternal;
          obj[obj3] = "" + tmp6 + "px";
          continue;
        }
      }
      obj[obj3] = tmp6;
    }
    return obj;
  });
}
function generateNextCustomKeyframeName() {
  closure_6 = tmp + 1;
  return "REA" + +closure_6;
}
let closure_2 = ["transform"];
let closure_6 = 0;

export const createCustomKeyFrameAnimation = function createCustomKeyFrameAnimation(definitions) {
  const values = Object.values(definitions);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (nextResult.transform) {
      tmp5.transform = addPxToTransform(tmp5.transform);
    }
    continue;
  }
  const obj = { name: generateNextCustomKeyframeName(), style: definitions, duration: -1 };
  const keys = Object.keys(definitions);
  for (let num = 1; num < keys.length; num = num + 1) {
    let tmp8 = definitions[keys[num]];
    if (tmp8.easing) {
      definitions[keys[num - 1]].easing = tmp8.easing;
      delete tmp2[tmp];
    }
  }
  const result = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj);
  findDescendantWithExitingAnimation.insertWebAnimation(obj.name, result);
  return obj.name;
};
export const createAnimationWithInitialValues = function createAnimationWithInitialValues(presetName, initialValues) {
  const structuredCloneResult = structuredClone(TransitionType.AnimationsData[presetName].style);
  const first = structuredCloneResult[0];
  const transform = initialValues.transform;
  if (transform) {
    const tmp5 = addPxToTransform(transform);
    if (first.transform) {
      const _Map = Map;
      const map = new Map();
      const transform2 = first.transform;
      const tmp10 = transform2[Symbol.iterator]();
      while (tmp10 !== undefined) {
        let _Object = Object;
        let entries = Object.entries(tmp12);
        for (const item10040 of entries) {
          let tmp18 = _slicedToArray(item10040, 2);
          let result = map.set(tmp18[0], tmp18[1]);
          continue;
        }
        continue;
      }
      for (const item10053 of tmp5) {
        let _Object2 = Object;
        let entries1 = Object.entries(item10053);
        for (const item10061 of entries1) {
          let tmp26 = _slicedToArray(item10061, 2);
          let result1 = map.set(tmp26[0], tmp26[1]);
          continue;
        }
        continue;
      }
      const _Array = Array;
      first.transform = Array.from(map, (arg0) => {
        [r10007, tmp] = arg0;
        return { [r10007]: tmp };
      });
    } else {
      first.transform = tmp5;
    }
  }
  let obj = {};
  const merged = Object.assign(structuredCloneResult[0]);
  const merged1 = Object.assign(_objectWithoutProperties(initialValues, closure_2));
  structuredCloneResult[0] = obj;
  const tmp30 = generateNextCustomKeyframeName();
  obj = { name: tmp30, style: structuredCloneResult, duration: TransitionType.AnimationsData[presetName].duration };
  const tmp3 = _objectWithoutProperties(initialValues, closure_2);
  const result2 = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj);
  findDescendantWithExitingAnimation.insertWebAnimation(tmp30, result2);
  return tmp30;
};
export const TransitionGenerator = function TransitionGenerator(ENTRY_EXIT, easingY) {
  closure_6 = tmp + 1;
  const transitionKeyframeName = `REA${tmp}`;
  if (TransitionType.TransitionType.LINEAR === ENTRY_EXIT) {
    let tmp3Result = tmp3(1725);
    firstKeyframeObj = tmp3Result.LinearTransition(`REA${tmp}`, easingY);
  } else if (tmp3(1692).TransitionType.SEQUENCED === ENTRY_EXIT) {
    tmp3Result = tmp3(1726);
    firstKeyframeObj = tmp3Result.SequencedTransition(`REA${tmp}`, easingY);
  } else if (tmp3(1692).TransitionType.FADING === ENTRY_EXIT) {
    firstKeyframeObj = tmp3(1727).FadingTransition(`REA${tmp}`, easingY);
    const tmp3Result1 = tmp3(1727);
  } else if (tmp3(1692).TransitionType.JUMPING === ENTRY_EXIT) {
    firstKeyframeObj = tmp3(1728).JumpingTransition(`REA${tmp}`, easingY);
    const tmp3Result2 = tmp3(1728);
  } else if (tmp3(1692).TransitionType.CURVED === ENTRY_EXIT) {
    closure_6 = tmp7 + 1;
    const text1 = `REA${tmp7}`;
    const tmp3Result3 = tmp3(1729);
    ({ firstKeyframeObj, secondKeyframeObj } = tmp3(1729).CurvedTransition(`REA${tmp}`, `REA${+closure_6}`, easingY));
    const CurvedTransitionResult = tmp3(1729).CurvedTransition(`REA${tmp}`, `REA${+closure_6}`, easingY);
    const result = tmp3(1694).convertAnimationObjectToKeyframes(secondKeyframeObj);
    const tmp3Result4 = tmp3(1694);
    tmp3(1723).insertWebAnimation(`REA${+closure_6}`, result);
    const dummyTransitionKeyframeName = text1;
    const tmp3Result5 = tmp3(1723);
  } else if (tmp3(1692).TransitionType.ENTRY_EXIT === ENTRY_EXIT) {
    firstKeyframeObj = tmp3(1730).EntryExitTransition(`REA${tmp}`, easingY);
    const tmp3Result6 = tmp3(1730);
  }
  const result1 = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(firstKeyframeObj);
  const tmp3Result7 = convertAnimationObjectToKeyframes;
  findDescendantWithExitingAnimation.insertWebAnimation(transitionKeyframeName, result1);
  return { transitionKeyframeName, dummyTransitionKeyframeName };
};
