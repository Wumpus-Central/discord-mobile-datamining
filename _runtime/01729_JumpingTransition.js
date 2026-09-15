// === Module 1729: JumpingTransition ===

// Module 1729 (JumpingTransition)
import linear from "linear" /* 1689 */;

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
  const obj = { name, style: null, duration: 300 };
  const obj2 = { 0: null, 50: null, 100: null };
  const obj3 = { transform: null, easing: null };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj3.transform = items;
  obj3.easing = linear.Easing.exp;
  obj2[0] = obj3;
  const obj5 = { transform: null };
  const obj4 = { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [{ translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY }];
  obj5.transform = items1;
  obj2[50] = obj5;
  const obj7 = { transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj7.transform = items2;
  obj2[100] = obj7;
  obj.style = obj2;
  return obj;
};