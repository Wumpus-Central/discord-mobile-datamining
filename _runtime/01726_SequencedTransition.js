// _runtime/01726_SequencedTransition.js

export const SequencedTransition = function SequencedTransition(name, arg1) {
  ({ translateX, translateY, scaleX, scaleY, reversed } = arg1);
  let obj = { name, style: null, duration: 300 };
  obj = { 0: null, 50: null, 100: null };
  obj = { transform: null };
  const items = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj.transform = items;
  obj.transform = obj;
  let str = "0px";
  let str2 = "0px";
  if (reversed) {
    const _HermesInternal = HermesInternal;
    str2 = "" + translateX + "px";
  }
  const obj2 = { translateX: str2, translateY: null, scale: null };
  if (!reversed) {
    const _HermesInternal2 = HermesInternal;
    str = "" + translateY + "px";
  }
  obj2.translateY = str;
  if (reversed) {
    let combined = concat(scaleX);
  } else {
    combined = concat(scaleY, ",1");
  }
  const obj3 = { transform: null };
  obj2.scale = combined;
  const items1 = [obj2];
  obj3.transform = items1;
  obj[50] = obj3;
  const obj4 = { transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj4.transform = items2;
  obj[100] = obj4;
  obj.style = obj;
  return obj;
};
