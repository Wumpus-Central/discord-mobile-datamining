// === Module 1726: SequencedTransition ===

// Module 1726 (SequencedTransition)

export const SequencedTransition = function SequencedTransition(name, translateX) {
  ({ translateX, translateY, scaleX, scaleY, reversed } = translateX);
  const obj = { name, style: null, duration: 300 };
  const obj2 = { 0: null, 50: null, 100: null };
  const obj3 = { transform: null };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj3.transform = items;
  obj2[0] = obj3;
  let str = "0px";
  let str2 = "0px";
  if (reversed) {
    const _HermesInternal = HermesInternal;
    str2 = "" + translateX + "px";
  }
  const obj5 = { translateX: str2, translateY: null, scale: null };
  if (!reversed) {
    const _HermesInternal2 = HermesInternal;
    str = "" + translateY + "px";
  }
  obj5.translateY = str;
  if (reversed) {
    let combined = concat(scaleX);
  } else {
    combined = concat(scaleY, ",1");
  }
  const obj6 = { transform: null };
  obj5.scale = combined;
  const items1 = [obj5];
  obj6.transform = items1;
  obj2[50] = obj6;
  const obj7 = { transform: null };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj7.transform = items2;
  obj2[100] = obj7;
  obj.style = obj2;
  return obj;
};