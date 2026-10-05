// === Module 1735: JumpingTransition ===

// Module 1735 (JumpingTransition)
import EasingNameSymbol from "EasingNameSymbol" /* 1695 */;


export const JumpingTransition = function JumpingTransition(name, translateX) {
  let diff;
  let items;
  let items1;
  let items2;
  let obj2;
  let scaleX;
  let scaleY;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY } = translateX);
  const absolute = Math.abs(translateX);
  const result = max(absolute, Math.abs(translateY)) / 2;
  if (translateY <= 0) {
    diff = translateY - result;
  } else {
    diff = -translateY + result;
  }
  const obj = { name, style: obj2, duration: 300 };
  obj2 = { 0: null, 50: null, 100: null };
  const obj3 = { transform: items, easing: EasingNameSymbol.Easing.exp };
  items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  ({ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY });
  obj2[0] = obj3;
  const obj5 = { transform: items1 };
  items1 = [{ translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY }];
  obj2[50] = obj5;
  const obj7 = { transform: items2 };
  items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj2[100] = obj7;
  ({ translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY });
  return obj;
};