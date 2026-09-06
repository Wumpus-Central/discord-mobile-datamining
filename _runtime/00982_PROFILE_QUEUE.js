// === Module 982: PROFILE_QUEUE ===

// Module 982 (PROFILE_QUEUE)
let closure_0 = [];
const dependencyMap = {};

export const PROFILE_QUEUE = {
  add(arg0, arg1) {
    if (closure_0.length >= 20) {
      do {
        if (undefined !== closure_0.shift()) {
          delete tmp[tmp2];
        }
      } while (closure_0.length >= 20);
    }
    if (dependencyMap[arg0]) {
      const self = this;
      this.delete(arg0);
    }
    closure_0.push(arg0);
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
    return closure_0.length;
  },
  delete(arg0) {
    if (dependencyMap[arg0]) {
      delete tmp[tmp2];
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
  }
};