// _runtime/01733_SequencedTransition.js

export const SequencedTransition = function SequencedTransition(name, translateX) {
  let combined;
  let items;
  let items1;
  let items2;
  let obj2;
  let reversed;
  let scaleX;
  let scaleY;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY, reversed } = translateX);
  const obj = { name, style: obj2, duration: 300 };
  obj2 = { 0: null, 50: null, 100: null };
  const obj3 = { transform: items };
  items = [
    { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY },
  ];
  obj2[0] = obj3;
  let str = "0px";
  let str2 = "0px";
  ({ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY });
  if (reversed) {
    const _HermesInternal = HermesInternal;
    str2 = "" + translateX + "px";
  }
  const obj5 = { translateX: str2, translateY: str, scale: combined };
  if (!reversed) {
    const _HermesInternal2 = HermesInternal;
    str = "" + translateY + "px";
  }
  if (reversed) {
    combined = concat(scaleX);
  } else {
    combined = concat(scaleY, ",1");
  }
  const obj6 = { transform: items1 };
  items1 = [obj5];
  obj2[50] = obj6;
  const obj7 = { transform: items2 };
  items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj2[100] = obj7;
  return obj;
};
