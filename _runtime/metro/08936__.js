// _runtime/metro/08936__.js

export default (obj) => {
  if (obj instanceof Object) {
    const _Array = Array;
    if (!Array.isArray(obj)) {
      obj = {};
      for (const key10010 in arg0) {
        let tmp3 = key10010;
        if (!arg0.hasOwnProperty(key10010)) {
          continue;
        } else {
          obj[key10010] = key10010;
          continue;
        }
        continue;
      }
      return obj;
    }
  }
  const error = new Error("keyMirror(...): Argument must be an object.");
  throw error;
};