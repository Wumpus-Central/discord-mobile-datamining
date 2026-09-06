// _runtime/01727_FadingTransition.js

export const FadingTransition = function FadingTransition(name, arg1) {
  ({ translateX, translateY, scaleX, scaleY } = arg1);
  let obj = { name, style: null, duration: 300 };
  obj = { 0: null, 20: null, 60: null, 100: null };
  obj = { opacity: 1, transform: null };
  const items = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj.transform = items;
  obj.opacity = obj;
  const obj2 = { opacity: 0, transform: null };
  const obj1 = {
    translateX: "" + translateX + "px",
    translateY: "" + translateY + "px",
    scale: "" + scaleX + "," + scaleY,
  };
  const items1 = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj2.transform = items1;
  obj[20] = obj2;
  const obj4 = { opacity: 0, transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj4.transform = items2;
  obj[60] = obj4;
  const obj5 = { opacity: 1, transform: null };
  const items3 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj5.transform = items3;
  obj[100] = obj5;
  obj.style = obj;
  return obj;
};
