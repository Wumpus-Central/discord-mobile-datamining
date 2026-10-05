// _runtime/metro/12682__.js

export function makeFifoCache(arg0) {
  let closure_0 = arg0;
  let closure_1 = [];
  let closure_2 = {};
  return {
    add(arg0, arg1) {
      if (closure_1.length >= closure_0) {
        do {
          let arr = closure_1.shift();
          if (undefined !== arr) {
            delete closure_2[tmp2];
          }
        } while (closure_1.length >= closure_0);
      }
      if (closure_2[arg0]) {
        const self = this;
        this.delete(arg0);
      }
      closure_1.push(arg0);
      closure_2[arg0] = arg1;
    },
    clear() {
      closure_2 = {};
      closure_1 = [];
    },
    get(arg0) {
      return closure_2[arg0];
    },
    size() {
      return closure_1.length;
    },
    delete: (arg0) => {
      if (closure_2[arg0]) {
        delete closure_2[tmp];
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
