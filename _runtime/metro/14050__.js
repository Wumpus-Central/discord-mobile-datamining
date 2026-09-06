// _runtime/metro/14050__.js
import _mod14016 from "14016__.js";

export default (arr, arg1, arg2) => {
  _require = arg2;
  dependencyMap = null;
  closure_2 = null;
  let regex = null;
  try {
    let tmp9 = new require("14045__.js")(arg1, arg2);
    regex = tmp9;
    const item = arr.forEach((item) => {
      if (regex.test(item)) {
        let tmp = closure_1;
        if (closure_1) {
          tmp = 1 !== closure_2.compare(item);
        }
        if (!tmp) {
          closure_1 = item;
          const tmp9 = new _mod14016(closure_1, closure_0);
          closure_2 = tmp9;
        }
      }
    });
    return dependencyMap;
  } catch (err) {
    return tmp;
  }
};
