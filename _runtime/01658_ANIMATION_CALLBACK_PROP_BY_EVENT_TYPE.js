// _runtime/01658_ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE.js
import CSS_EVENT_MASK from "01659_CSS_EVENT_MASK.js";

require = arg1;
const dependencyMap = arg6;
const obj = {
  animationStart: "onCSSAnimationStart",
  animationEnd: "onCSSAnimationEnd",
  animationIteration: "onCSSAnimationIteration",
  animationCancel: "onCSSAnimationCancel",
};
const obj2 = {
  transitionRun: "onCSSTransitionRun",
  transitionStart: "onCSSTransitionStart",
  transitionEnd: "onCSSTransitionEnd",
  transitionCancel: "onCSSTransitionCancel",
};
const entries = Object.entries(obj);
let closure_2 = Object.fromEntries(
  entries.map((item) => {
    [tmp, tmp2] = item;
    items = [tmp2, tmp];
    return items;
  }),
);
const entries1 = Object.entries(obj2);
let closure_3 = Object.fromEntries(
  entries1.map((item) => {
    [tmp, tmp2] = item;
    items = [tmp2, tmp];
    return items;
  }),
);

export const ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE = obj;
export const TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE = obj2;
export function getAnimationEventMaskFromProps(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    num = num | CSS_EVENT_MASK.CSS_EVENT_MASK[closure_2[tmp2]];
    continue;
  }
  return num;
}
export function getTransitionEventMaskFromProps(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    num = num | CSS_EVENT_MASK.CSS_EVENT_MASK[closure_3[tmp2]];
    continue;
  }
  return num;
}
