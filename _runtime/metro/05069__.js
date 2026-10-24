// _runtime/metro/05069__.js

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
};
