// === Module 1724: addPxToTransform ===

// Module 1724 (addPxToTransform)
import TransitionType from "TransitionType" /* 1692 */;
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes" /* 1694 */;
import findDescendantWithExitingAnimation from "findDescendantWithExitingAnimation" /* 1723 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import closure_4 from "_slicedToArray" /* 32 */;

require = arg1;
function addPxToTransform(transform) {
  return transform.map((arg0) => {
    const obj = {};
    const entries = Object.entries(arg0);
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let first = tmp5[0];
      let obj3 = first;
      let tmp6 = tmp5[1];
      if (first.includes("translate")) {
        let tmp8 = tmp6;
        if (typeof tmp6 === "number") {
          let tmp11 = first;
          let tmp12 = tmp6;
          let _HermesInternal = HermesInternal;
          obj[obj3] = "" + tmp6 + "px";
          continue;
        }
      } else {
        let tmp7 = first;
      }
      let tmp9 = first;
      let tmp10 = tmp6;
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
let c6 = 0;

export const createCustomKeyFrameAnimation = function createCustomKeyFrameAnimation(definitions) {
  const values = Object.values(definitions);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (nextResult.transform) {
      let tmp6 = nextResult;
      let tmp7 = addPxToTransform;
      tmp5.transform = addPxToTransform(tmp5.transform);
    }
    continue;
  }
  const obj = { name: generateNextCustomKeyframeName(), style: definitions, duration: -1 };
  const keys = Object.keys(definitions);
  for (let num = 1; num < keys.length; num = num + 1) {
    let tmp8 = definitions[keys[num]];
    let tmp9 = num;
    if (tmp8.easing) {
      definitions[keys[num - 1]].easing = tmp8.easing;
      delete tmp2[tmp];
    }
  }
  const result = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj);
  const obj2 = convertAnimationObjectToKeyframes;
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
        let tmp15 = entries;
        let tmp16 = entries;
        for (const item10040 of entries) {
          let tmp17 = callback2;
          let tmp18 = callback2(item10040, 2);
          let result = map.set(tmp18[0], tmp18[1]);
          continue;
        }
        continue;
      }
      for (const item10053 of tmp5) {
        let _Object2 = Object;
        let entries1 = Object.entries(item10053);
        let tmp23 = entries1;
        let tmp24 = entries1;
        for (const item10061 of entries1) {
          let tmp25 = callback2;
          let tmp26 = callback2(item10061, 2);
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
  const merged1 = Object.assign(callback(initialValues, closure_2));
  structuredCloneResult[0] = obj;
  const tmp30 = generateNextCustomKeyframeName();
  obj = { name: tmp30, style: structuredCloneResult, duration: TransitionType.AnimationsData[presetName].duration };
  const tmp3 = callback(initialValues, closure_2);
  const result2 = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj);
  const obj4 = convertAnimationObjectToKeyframes;
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