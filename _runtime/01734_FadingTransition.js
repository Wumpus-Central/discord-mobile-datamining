// _runtime/01734_FadingTransition.js

export const FadingTransition = function FadingTransition(name, translateX) {
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let scaleX;
  let scaleY;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY } = translateX);
  const obj = { name, style: obj2, duration: 300 };
  obj2 = { 0: null, 20: null, 60: null, 100: null };
  const obj3 = { opacity: 1, transform: items };
  items = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj2[0] = obj3;
  const obj5 = { opacity: 0, transform: items1 };
  ({ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY });
  items1 = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj2[20] = obj5;
  const obj7 = { opacity: 0, transform: items2 };
  items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj2[60] = obj7;
  const obj8 = { opacity: 1, transform: items3 };
  items3 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj2[100] = obj8;
  ({ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY });
  return obj;
};
