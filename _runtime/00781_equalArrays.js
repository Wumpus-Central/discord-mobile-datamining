
export default function equalArrays(arg0, arg1, arg2, arg3, arg4, get) {
  const _require = arg2;
  const dependencyMap = arg3;
  let closure_2 = arg4;
  let closure_3 = get;
  if (arg0.length != arg1.length) {
    return false;
  }
  let value = get.get(arg0);
  value = get.get(arg1);
  if (value) {
    if (value) {
      return value == arg1 && value == arg0;
    }
  }
  let tmp4;
  if (2 & arg2) {
    tmp4 = new _require(782)();
  }
  let closure_4 = tmp4;
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let num = 0;
  let flag2 = true;
  if (0 < arg0.length) {
    let closure_5 = tmp12;
    while (!arg3) {
      if (undefined !== tmp11) {
        flag2 = false;
      } else if (tmp4) {
        let tmp35 = _require;
        let tmp36 = dependencyMap;
        flag2 = false;
      } else if (tmp12 !== tmp13) {
        let tmp30 = tmp12;
        let tmp31 = tmp13;
        let tmp32 = arg2;
        let tmp33 = arg3;
        let tmp34 = get;
        flag2 = false;
      }
      let sum = num + 1;
      num = sum;
      flag2 = true;
    }
    if (tmp) {
      let tmp22 = arg3(tmp13, tmp12, tmp15, arg1, arg0, get);
    } else {
      tmp22 = arg3(tmp12, tmp13, tmp15, arg0, arg1, get);
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag2;
};