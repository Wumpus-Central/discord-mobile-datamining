// _runtime/01745_FadingTransition.js
arg5.FadingTransition = function FadingTransition(name) {
  let scaleX;
  let scaleY;
  let translateX;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY } = arg1);
  let obj = { name, style: null, duration: 300 };
  obj = { 0: null, 20: null, 60: null, 100: null };
  obj = { opacity: 1, transform: null };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj[1] = items;
  obj[0] = obj;
  const obj2 = { opacity: 0, transform: null };
  const obj1 = { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj2[1] = items1;
  obj[20] = obj2;
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj[60] = { opacity: 0, transform: items2 };
  const items3 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj[100] = { opacity: 1, transform: items3 };
  obj[1] = obj;
  return obj;
};