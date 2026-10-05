// _runtime/00993_PROFILE_QUEUE.js
let closure_0 = [];
let closure_1 = {};

export const PROFILE_QUEUE = {
  add(arg0, arg1) {
    if (closure_0.length >= 20) {
      do {
        let arr = closure_0.shift();
        if (undefined !== arr) {
          delete closure_1[tmp2];
        }
      } while (closure_0.length >= 20);
    }
    if (closure_1[arg0]) {
      const self = this;
      this.delete(arg0);
    }
    closure_0.push(arg0);
    closure_1[arg0] = arg1;
  },
  clear() {
    closure_1 = {};
    closure_0 = [];
  },
  get(arg0) {
    return closure_1[arg0];
  },
  size() {
    return closure_0.length;
  },
  delete: (arg0) => {
    if (closure_1[arg0]) {
      delete closure_1[tmp];
      let num = 0;
      if (0 < closure_0.length) {
        while (closure_0[num] !== arg0) {
          num = num + 1;
        }
        closure_0.splice(num, 1);
      }
      return true;
    } else {
      return false;
    }
  },
};
