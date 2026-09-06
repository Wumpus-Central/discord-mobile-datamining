// _runtime/01728_JumpingTransition.js
import linear from "01688_linear.js";

require = arg1;
const dependencyMap = arg6;

export const JumpingTransition = function JumpingTransition(name, translateX) {
  ({ translateX, translateY, scaleX, scaleY } = translateX);
  const absolute = Math.abs(translateX);
  const result = Math.max(absolute, Math.abs(translateY)) / 2;
  if (translateY <= 0) {
    let diff = translateY - result;
  } else {
    diff = -translateY + result;
  }
  let obj = { name, style: null, duration: 300 };
  obj = { 0: null, 50: null, 100: null };
  obj = { transform: null, easing: null };
  const items = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj.transform = items;
  obj.easing = linear.Easing.exp;
  obj.transform = obj;
  const obj2 = { transform: null };
  const obj1 = {
    translateX: "" + translateX + "px",
    translateY: "" + translateY + "px",
    scale: "" + scaleX + "," + scaleY,
  };
  const items1 = [
    { translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj2.transform = items1;
  obj[50] = obj2;
  const obj4 = { transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj4.transform = items2;
  obj[100] = obj4;
  obj.style = obj;
  return obj;
};
