// _runtime/01746_prepareCurvedTransition.js
const require = arg1;
const dependencyMap = arg6;
arg5.prepareCurvedTransition = function prepareCurvedTransition(cloneNode, duration, easingY, dummyTransitionKeyframeName) {
  let length;
  const dummyAnimationConfig = { animationName: dummyTransitionKeyframeName, animationType: _require(dummy[1]).LayoutAnimationType.LAYOUT, duration: duration.duration, delay: duration.delay, easing: null, callback: null, reversed: false };
  dummyAnimationConfig[4] = _require(dummy[0]).getEasingByName(easingY.easingY);
  dummy = cloneNode.cloneNode(true);
  dummy.isDummy = true;
  dummy.style.animationName = "";
  dummy.style.position = "absolute";
  dummy.style.top = "0px";
  dummy.style.left = "0px";
  dummy.style.margin = "0px";
  dummy.style.width = "100%";
  dummy.style.height = "100%";
  _require = cloneNode;
  let map;
  let backgroundColor;
  let onFinalize;
  let animationCancelCallback;
  let animationEndCallback;
  const obj2 = _require(dummy[0]);
  duration.easing = _require(dummy[0]).getEasingByName(easingY.easingX);
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
    if (typeof onFinalize !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (cloneNode.contains(dummy)) {
      obj.removeChild(dummy);
    }
    let num = 0;
    if (0 < cloneNode.children.length) {
      do {
        let tmp3 = obj.children[num];
        tmp3.style.display = obj2.get(tmp3);
        num = num + 1;
        length = obj.children.length;
      } while (num < length);
    }
    cloneNode.style.backgroundColor = backgroundColor;
    const removed = cloneNode.removeEventListener("animationcancel", animationCancelCallback);
  };
  animationEndCallback = function animationEndCallback() {
    let length;
    if (typeof onFinalize !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (cloneNode.contains(dummy)) {
      obj.removeChild(dummy);
    }
    let num = 0;
    if (0 < cloneNode.children.length) {
      do {
        let tmp3 = obj.children[num];
        tmp3.style.display = obj2.get(tmp3);
        num = num + 1;
        length = obj.children.length;
      } while (num < length);
    }
    cloneNode.style.backgroundColor = backgroundColor;
    const removed = cloneNode.removeEventListener("animationend", animationEndCallback);
  };
  const listener = cloneNode.addEventListener("animationend", animationEndCallback);
  const listener1 = cloneNode.addEventListener("animationcancel", animationCancelCallback);
  cloneNode.appendChild(dummy);
  return { dummy, dummyAnimationConfig };
};
arg5.CurvedTransition = function CurvedTransition(name, name2, translateX) {
  let obj = { firstKeyframeObj: null, secondKeyframeObj: null };
  obj = { name, style: null, duration: 300 };
  obj = { 0: null };
  const obj1 = { transform: null };
  const items = [{ translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj1[0] = items;
  obj[0] = obj1;
  obj[1] = obj;
  obj[0] = obj;
  const obj3 = { name: name2, style: null, duration: 300 };
  const obj4 = { 0: null };
  const obj5 = { transform: null };
  const obj2 = { translateX: "" + translateX.translateX + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY };
  const items1 = [{ translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj5[0] = items1;
  obj4[0] = obj5;
  obj3[1] = obj4;
  obj[1] = obj3;
  return obj;
};