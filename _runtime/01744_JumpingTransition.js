// === Module 1744: JumpingTransition ===

// Module 1744 (JumpingTransition)
import linear from "linear" /* 1704 */;

require = arg1;
const dependencyMap = arg6;
arg5.JumpingTransition = function JumpingTransition(name) {
  ({ translateX, translateY, scaleX, scaleY } = arg1);
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
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj[0] = items;
  obj[1] = linear.Easing.exp;
  obj[0] = obj;
  const obj2 = { transform: null };
  obj1 = { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [{ translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY }];
  obj2[0] = items1;
  obj[50] = obj2;
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj[100] = { transform: items2 };
  obj[1] = obj;
  return obj;
};