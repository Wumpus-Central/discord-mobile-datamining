// _runtime/01729_prepareCurvedTransition.js
import _mod1661 from "metro/01661__.js";
import WebEasings from "01695_WebEasings.js";

require = arg1;
const dependencyMap = arg6;

export const prepareCurvedTransition = function prepareCurvedTransition(
  cloneNode,
  duration,
  easingY,
  dummyTransitionKeyframeName,
) {
  let length;
  const dummyAnimationConfig = {
    animationName: dummyTransitionKeyframeName,
    animationType: _mod1661.LayoutAnimationType.LAYOUT,
    duration: duration.duration,
    delay: duration.delay,
    easing: WebEasings.getEasingByName(easingY.easingY),
    callback: null,
    reversed: false,
  };
  const dummy = cloneNode.cloneNode(true);
  dummy.isDummy = true;
  dummy.style.animationName = "";
  dummy.style.position = "absolute";
  dummy.style.top = "0px";
  dummy.style.left = "0px";
  dummy.style.margin = "0px";
  dummy.style.width = "100%";
  dummy.style.height = "100%";
  let backgroundColor;
  let onFinalize;
  let animationCancelCallback;
  let animationEndCallback;
  duration.easing = WebEasings.getEasingByName(easingY.easingX);
  const map = new Map();
  let num = 0;
  if (0 < cloneNode.children.length) {
    do {
      let tmp2 = cloneNode.children[num];
      let result = map.set(tmp2, tmp2.style.display);
      tmp2.style.display = "none";
      num = num + 1;
      length = cloneNode.children.length;
    } while (num < length);
  }
  backgroundColor = cloneNode.style.backgroundColor;
  cloneNode.style.backgroundColor = "transparent";
  onFinalize = function onFinalize() {};
  animationCancelCallback = function animationCancelCallback() {
    let length;
    if (typeof onFinalize === "function") {
      if (cloneNode.contains(dummy)) {
        cloneNode.removeChild(dummy);
      }
      let num = 0;
      if (0 < cloneNode.children.length) {
        do {
          let tmp3 = cloneNode.children[num];
          tmp3.style.display = map.get(tmp3);
          num = num + 1;
          length = cloneNode.children.length;
        } while (num < length);
      }
      cloneNode.style.backgroundColor = backgroundColor;
      const removed = cloneNode.removeEventListener("animationcancel", animationCancelCallback);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  animationEndCallback = function animationEndCallback() {
    let length;
    if (typeof onFinalize === "function") {
      if (cloneNode.contains(dummy)) {
        cloneNode.removeChild(dummy);
      }
      let num = 0;
      if (0 < cloneNode.children.length) {
        do {
          let tmp3 = cloneNode.children[num];
          tmp3.style.display = map.get(tmp3);
          num = num + 1;
          length = cloneNode.children.length;
        } while (num < length);
      }
      cloneNode.style.backgroundColor = backgroundColor;
      const removed = cloneNode.removeEventListener("animationend", animationEndCallback);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const listener = cloneNode.addEventListener("animationend", animationEndCallback);
  const listener1 = cloneNode.addEventListener("animationcancel", animationCancelCallback);
  cloneNode.appendChild(dummy);
  return { dummy, dummyAnimationConfig };
};
export const CurvedTransition = function CurvedTransition(name, name2, translateX) {
  let obj = { firstKeyframeObj: null, secondKeyframeObj: null };
  obj = { name, style: null, duration: 300 };
  obj = { 0: null };
  const obj1 = { transform: null };
  const items = [
    { translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY },
  ];
  obj1.transform = items;
  obj[0] = obj1;
  obj.style = obj;
  obj.firstKeyframeObj = obj;
  const obj3 = { name: name2, style: null, duration: 300 };
  const obj4 = { 0: null };
  const obj5 = { transform: null };
  const obj2 = {
    translateX: "" + translateX.translateX + "px",
    scale: "" + translateX.scaleX + "," + translateX.scaleY,
  };
  const items1 = [
    { translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY },
  ];
  obj5.transform = items1;
  obj4[0] = obj5;
  obj3.style = obj4;
  obj.secondKeyframeObj = obj3;
  return obj;
};
