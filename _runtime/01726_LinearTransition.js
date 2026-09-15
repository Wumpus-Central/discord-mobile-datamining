// === Module 1726: LinearTransition ===

// Module 1726 (LinearTransition)

export const LinearTransition = function LinearTransition(name, translateX) {
  const obj = { name, style: null, duration: 300 };
  const obj2 = { 0: null };
  const obj3 = { transform: null };
  const items = [{ translateX: "" + translateX.translateX + "px", translateY: "" + translateX.translateY + "px", scale: "" + translateX.scaleX + "," + translateX.scaleY }];
  obj3.transform = items;
  obj2[0] = obj3;
  obj.style = obj2;
  return obj;
};