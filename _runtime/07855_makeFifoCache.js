// === Module 7855: makeFifoCache ===

// Module 7855 (makeFifoCache)
arg5.makeFifoCache = function makeFifoCache(arg0) {
  closure_0 = arg0;
  closure_1 = [];
  closure_2 = {};
  return {
    add(arg0, arg1) {
      if (arr.length >= closure_0) {
        do {
          if (undefined !== arr.shift()) {
            delete tmp[tmp2];
          }
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
          }
          arr.splice(num, 1);
        }
        return true;
      } else {
        return false;
      }
    }
  };
};