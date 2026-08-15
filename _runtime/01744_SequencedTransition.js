// _runtime/01744_SequencedTransition.js
arg5.SequencedTransition = function SequencedTransition(name) {
  let reversed;
  let scaleX;
  let scaleY;
  let translateX;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY, reversed } = arg1);
  let obj = { name, style: null, duration: 300 };
  obj = { 0: null, 50: null, 100: null };
  obj = { transform: null };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj[0] = items;
  obj[0] = obj;
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
  obj2[1] = str;
  if (reversed) {
    let combined = concat(scaleX);
  } else {
    combined = concat(scaleY, ",1");
  }
  obj2[2] = combined;
  const items1 = [obj2];
  obj[50] = { transform: items1 };
  const items2 = [{ translateX: "0px", translateY: "0px", scale: "1,1" }];
  obj[100] = { transform: items2 };
  obj[1] = obj;
  return obj;
};