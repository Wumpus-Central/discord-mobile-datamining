// === Module 1736: prepareCurvedTransition ===

// Module 1736 (prepareCurvedTransition)
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import WebEasings from "WebEasings" /* 1702 */;

let map;


export const prepareCurvedTransition = function prepareCurvedTransition(cloneNode, duration, easingY, dummyTransitionKeyframeName) {
  let length;
  let obj2;
  const dummyAnimationConfig = { animationName: dummyTransitionKeyframeName, animationType: LayoutAnimationType.LayoutAnimationType.LAYOUT, duration: duration.duration, delay: duration.delay, easing: obj2.getEasingByName(easingY.easingY), callback: null, reversed: false };
  obj2 = WebEasings;
  const dummy = cloneNode.cloneNode(true);
  dummy.isDummy = true;
  dummy.style.animationName = "";
  dummy.style.position = "absolute";
  dummy.style.top = "0px";
  dummy.style.left = "0px";
  dummy.style.margin = "0px";
  dummy.style.width = "100%";
  dummy.style.height = "100%";
  let closure_0 = cloneNode;
  let backgroundColor;
  let onFinalize;
  let animationCancelCallback;
  let animationEndCallback;
  const obj3 = WebEasings;
  duration.easing = obj3.getEasingByName(easingY.easingX);
  map = new Map();
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
  onFinalize = function onFinalize() {

  };
  animationCancelCallback = function animationCancelCallback() {
    let length;
    if (typeof onFinalize === "function") {
      if (closure_0.contains(dummy)) {
        closure_0.removeChild(dummy);
      }
      let num = 0;
      if (0 < closure_0.children.length) {
        do {
          let tmp3 = closure_0.children[num];
          tmp3.style.display = map.get(tmp3);
          num = num + 1;
          length = closure_0.children.length;
        } while (num < length);
      }
      closure_0.style.backgroundColor = backgroundColor;
      const removed = closure_0.removeEventListener("animationcancel", animationCancelCallback);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  animationEndCallback = function animationEndCallback() {
    let length;
    if (typeof onFinalize === "function") {
      if (closure_0.contains(dummy)) {
        closure_0.removeChild(dummy);
      }
      let num = 0;
      if (0 < closure_0.children.length) {
        do {
          let tmp3 = closure_0.children[num];
          tmp3.style.display = map.get(tmp3);
          num = num + 1;
          length = closure_0.children.length;
        } while (num < length);
      }
      closure_0.style.backgroundColor = backgroundColor;
      const removed = closure_0.removeEventListener("animationend", animationEndCallback);
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
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  const obj = { firstKeyframeObj: obj2, secondKeyframeObj: obj6 };
  obj2 = { name, style: obj3, duration: 300 };
  obj3 = { 0: null };
  const obj4 = { transform: items };
  items = [{ translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj3[0] = obj4;
  obj6 = { name: name2, style: obj7, duration: 300 };
  obj7 = { 0: null };
  const obj8 = { transform: items1 };
  ({ translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY });
  items1 = [{ translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj7[0] = obj8;
  ({ translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY });
  return obj;
};