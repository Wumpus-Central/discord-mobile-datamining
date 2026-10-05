// === Module 1731: TransitionGenerator ===

// Module 1731 (TransitionGenerator)
import TransitionType from "TransitionType" /* 1699 */;
import _slicedToArray2 from "_slicedToArray" /* 1701 */;
import configureWebLayoutAnimations from "configureWebLayoutAnimations" /* 1730 */;
import LinearTransition from "LinearTransition" /* 1732 */;
import SequencedTransition from "SequencedTransition" /* 1733 */;
import FadingTransition from "FadingTransition" /* 1734 */;
import JumpingTransition from "JumpingTransition" /* 1735 */;
import prepareCurvedTransition from "prepareCurvedTransition" /* 1736 */;
import _slicedToArray3 from "_slicedToArray" /* 1737 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function addPxToTransform(transform) {
  return transform.map((item) => {
    let first;
    let tmp6;
    const obj = {};
    const entries = Object.entries(item);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      [first, tmp6] = tmp3;
      let obj3 = first;
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
  let num;
  const values = Object.values(definitions);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult.transform) {
      tmp3.transform = addPxToTransform(tmp3.transform);
    }
    continue;
  }
  const obj = { name: generateNextCustomKeyframeName(), style: definitions, duration: -1 };
  const keys = Object.keys(definitions);
  for (let num = 1; num < keys.length; num = num + 1) {
    let tmp7 = definitions[keys[num]];
    if (tmp7.easing) {
      definitions[keys[num - 1]].easing = tmp7.easing;
      delete tmp7[tmp6];
    }
  }
  const obj2 = _slicedToArray2;
  const result = obj2.convertAnimationObjectToKeyframes(obj);
  const obj3 = configureWebLayoutAnimations;
  obj3.insertWebAnimation(obj.name, result);
  return obj.name;
};
export const createAnimationWithInitialValues = function createAnimationWithInitialValues(presetName, initialValues) {
  const structuredCloneResult = structuredClone(TransitionType.AnimationsData[presetName].style);
  const first = structuredCloneResult[0];
  const transform = initialValues.transform;
  const tmp3 = _objectWithoutProperties(initialValues, closure_2);
  if (transform) {
    const tmp5 = addPxToTransform(transform);
    if (first.transform) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const transform2 = first.transform;
      const tmp8 = transform2[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let _Object = Object;
        let entries = Object.entries(tmp10);
        for (const item10040 of entries) {
          let tmp16 = _slicedToArray(item10040, 2);
          let result = map.set(tmp16[0], tmp16[1]);
          continue;
        }
        continue;
      }
      for (const item10053 of tmp5) {
        let _Object2 = Object;
        let entries1 = Object.entries(item10053);
        for (const item10061 of entries1) {
          let tmp24 = _slicedToArray(item10061, 2);
          let result1 = map.set(tmp24[0], tmp24[1]);
          continue;
        }
        continue;
      }
      const _Array = Array;
      first.transform = Array.from(map, (arg0) => {
        let tmp;
        [r10007, tmp] = arg0;
        return { [r10007]: tmp };
      });
    } else {
      first.transform = tmp5;
    }
  }
  const obj = {};
  const merged = Object.assign(structuredCloneResult[0]);
  const merged1 = Object.assign(tmp3);
  structuredCloneResult[0] = obj;
  const tmp28 = generateNextCustomKeyframeName();
  const obj2 = { name: tmp28, style: structuredCloneResult, duration: TransitionType.AnimationsData[presetName].duration };
  const obj4 = _slicedToArray2;
  const result2 = obj4.convertAnimationObjectToKeyframes(obj2);
  const obj5 = configureWebLayoutAnimations;
  obj5.insertWebAnimation(tmp28, result2);
  return tmp28;
};
export const TransitionGenerator = function TransitionGenerator(ENTRY_EXIT, easingY) {
  let dummyTransitionKeyframeName;
  let firstKeyframeObj;
  let secondKeyframeObj;
  closure_6 = tmp + 1;
  const transitionKeyframeName = `REA${tmp}`;
  if (TransitionType.TransitionType.LINEAR === ENTRY_EXIT) {
    const tmp3Result = LinearTransition;
    firstKeyframeObj = tmp3Result.LinearTransition(`REA${tmp}`, easingY);
  } else if (TransitionType.TransitionType.SEQUENCED === ENTRY_EXIT) {
    const tmp3Result10 = SequencedTransition;
    firstKeyframeObj = tmp3Result10.SequencedTransition(`REA${tmp}`, easingY);
  } else if (TransitionType.TransitionType.FADING === ENTRY_EXIT) {
    const tmp3Result11 = FadingTransition;
    firstKeyframeObj = tmp3Result11.FadingTransition(`REA${tmp}`, easingY);
  } else if (TransitionType.TransitionType.JUMPING === ENTRY_EXIT) {
    const tmp3Result12 = JumpingTransition;
    firstKeyframeObj = tmp3Result12.JumpingTransition(`REA${tmp}`, easingY);
  } else if (TransitionType.TransitionType.CURVED === ENTRY_EXIT) {
    closure_6 = tmp7 + 1;
    const text1 = `REA${tmp7}`;
    const tmp3Result13 = prepareCurvedTransition;
    ({ firstKeyframeObj, secondKeyframeObj } = tmp3Result13.CurvedTransition(`REA${+closure_6}`, `REA${+closure_6}`, easingY));
    tmp3Result13.CurvedTransition(`REA${+closure_6}`, `REA${+closure_6}`, easingY);
    const tmp3Result14 = _slicedToArray2;
    const result = tmp3Result14.convertAnimationObjectToKeyframes(secondKeyframeObj);
    const tmp3Result15 = configureWebLayoutAnimations;
    tmp3Result15.insertWebAnimation(`REA${+closure_6}`, result);
    dummyTransitionKeyframeName = text1;
  } else if (TransitionType.TransitionType.ENTRY_EXIT === ENTRY_EXIT) {
    const tmp3Result16 = _slicedToArray3;
    firstKeyframeObj = tmp3Result16.EntryExitTransition(`REA${tmp}`, easingY);
  }
  const tmp3Result17 = _slicedToArray2;
  const result1 = tmp3Result17.convertAnimationObjectToKeyframes(firstKeyframeObj);
  const tmp3Result18 = configureWebLayoutAnimations;
  tmp3Result18.insertWebAnimation(transitionKeyframeName, result1);
  return { transitionKeyframeName, dummyTransitionKeyframeName };
};