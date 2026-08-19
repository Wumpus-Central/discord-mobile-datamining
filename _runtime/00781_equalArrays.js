// === Module 781: equalArrays ===

// Module 781 (equalArrays)

export default function equalArrays(key, closure_0, height, fn, fn2, get) {
  const _require = height;
  dependencyMap = fn;
  closure_2 = fn2;
  closure_3 = get;
  if (key.length != length2) {
    return false;
  }
  get.get(key);
  const value = get.get(_require);
  if (value) {
    if (value) {
      return value == _require && value == key;
    }
  }
  let tmp4;
  if (2 & height) {
    tmp4 = new _require(782)();
  }
  closure_4 = tmp4;
  const result = get.set(key, _require);
  const result1 = get.set(_require, key);
  let num = 0;
  let flag2 = true;
  if (0 < key.length) {
    closure_5 = tmp12;
    while (!fn) {
      if (undefined !== tmp11) {
        flag2 = false;
      } else if (tmp4) {
        flag2 = false;
      } else if (tmp12 !== tmp13) {
        flag2 = false;
      }
      let sum = num + 1;
      num = sum;
      flag2 = true;
    }
    if (tmp) {
      let tmp22 = fn(tmp13, tmp12, tmp15, _require, key, get);
    } else {
      tmp22 = fn(tmp12, tmp13, tmp15, key, _require, get);
    }
  }
  get.delete(key);
  get.delete(_require);
  return flag2;
};