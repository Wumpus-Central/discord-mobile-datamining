// === Module 1727: FadingTransition ===

// Module 1727 (FadingTransition)

export const FadingTransition = function FadingTransition(name, translateX) {
  ({ translateX, translateY, scaleX, scaleY } = translateX);
  const obj = { name, style: null, duration: 300 };
  const obj2 = { 0: null, 20: null, 60: null, 100: null };
  const obj3 = { opacity: 1, transform: null };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj3.transform = items;
  obj2[0] = obj3;
  const obj5 = { opacity: 0, transform: null };
  const obj4 = { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj5.transform = items1;
  obj2[20] = obj5;
  const obj7 = { opacity: 0, transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj7.transform = items2;
  obj2[60] = obj7;
  const obj8 = { opacity: 1, transform: null };
  const items3 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj8.transform = items3;
  obj2[100] = obj8;
  obj.style = obj2;
  return obj;
};