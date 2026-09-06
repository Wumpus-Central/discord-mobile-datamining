// === Module 5644: ? ===

// Module 5644
import hsl from "hsl" /* 5642 */;


export default (arg0) => {
  let obj = {};
  const keys = Object.keys(hsl);
  for (let num = 0; num < length; num = num + 1) {
    obj[keys[num]] = { distance: -1, parent: null };
  }
  const items = [arg0];
  obj[arg0].distance = 0;
  while (items.length) {
    let arr = items.pop();
    let _Object = Object;
    let keys1 = Object.keys(hsl[arr]);
    let length2 = keys1.length;
    for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
      let tmp4 = keys1[num2];
      let tmp5 = obj[tmp4];
      if (-1 === tmp5.distance) {
        tmp5.distance = obj[arr].distance + 1;
        tmp5.parent = arr;
        arr = items.unshift(tmp4);
      }
    }
  }
  obj = {};
  const keys2 = Object.keys(obj);
  for (let num3 = 0; num3 < length3; num3 = num3 + 1) {
    let tmp8 = keys2[num3];
    if (null !== obj[tmp8].parent) {
      let items1 = [obj[tmp8].parent, tmp8];
      let fn = hsl[obj[tmp8].parent][tmp8];
      let parent3 = obj[tmp8].parent;
      let tmp13 = fn;
      if (obj[parent3].parent) {
        do {
          let arr1 = items1.unshift(obj[parent3].parent);
          closure_0 = hsl[obj[parent3].parent][parent3];
          fn = (arg0) => fn(closure_0(arg0));
          let parent = obj[parent3].parent;
          parent3 = parent;
          tmp13 = fn;
          parent2 = obj[parent].parent;
        } while (parent2);
      }
      tmp13.conversion = items1;
      obj[tmp8] = tmp13;
    }
  }
  return obj;
};