// _runtime/metro/01117__.js
let closure_0 = [];
let closure_1 = {};
arg5.PROFILE_QUEUE = {
  add(arg0, arg1) {
    if (arr.length >= 20) {
      do {
        let tmp3 = arr;
        if (undefined !== arr.shift()) {
          let tmp4 = dependencyMap;
          delete tmp[tmp2];
        }
        let tmp5 = arr;
      } while (arr.length >= 20);
    }
    if (dependencyMap[arg0]) {
      const self = this;
      this.delete(arg0);
    }
    arr = arr.push(arg0);
    dependencyMap[arg0] = arg1;
  },
  clear() {
    closure_1 = {};
    closure_0 = [];
  },
  get(arg0) {
    return dependencyMap[arg0];
  },
  size() {
    return arr.length;
  },
  delete(arg0) {
    if (dependencyMap[arg0]) {
      delete tmp[tmp2];
      let num = 0;
      if (0 < arr.length) {
        while (arr[num] !== arg0) {
          num = num + 1;
          let tmp7 = arr;
        }
        arr.splice(num, 1);
      }
      return true;
    } else {
      return false;
    }
  },
};
