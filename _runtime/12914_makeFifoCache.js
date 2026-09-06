// _runtime/12914_makeFifoCache.js
arg5.makeFifoCache = function makeFifoCache(arg0) {
  closure_0 = arg0;
  closure_1 = [];
  closure_2 = {};
  return {
    add(arg0, arg1) {
      if (arr.length >= closure_0) {
        do {
          let tmp3 = arr;
          if (undefined !== arr.shift()) {
            let tmp4 = dependencyMap;
            delete tmp[tmp2];
          }
          let tmp5 = arr;
          let tmp6 = closure_0;
        } while (arr.length >= closure_0);
      }
      if (dependencyMap[arg0]) {
        const self = this;
        this.delete(arg0);
      }
      arr = arr.push(arg0);
      dependencyMap[arg0] = arg1;
    },
    clear() {
      closure_2 = {};
      closure_1 = [];
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
};
