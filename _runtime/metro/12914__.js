// _runtime/metro/12914__.js

export function makeFifoCache(arg0) {
  closure_0 = arg0;
  closure_1 = [];
  dependencyMap = {};
  return {
    add(arg0, arg1) {
      if (closure_1.length >= closure_0) {
        do {
          if (undefined !== closure_1.shift()) {
            delete tmp[tmp2];
          }
        } while (closure_1.length >= closure_0);
      }
      if (dependencyMap[arg0]) {
        const self = this;
        this.delete(arg0);
      }
      closure_1.push(arg0);
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
      return closure_1.length;
    },
    delete(arg0) {
      if (dependencyMap[arg0]) {
        delete tmp[tmp2];
        let num = 0;
        if (0 < closure_1.length) {
          while (closure_1[num] !== arg0) {
            num = num + 1;
          }
          closure_1.splice(num, 1);
        }
        return true;
      } else {
        return false;
      }
    },
  };
}
