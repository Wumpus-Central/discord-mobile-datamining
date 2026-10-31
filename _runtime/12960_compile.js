// === Module 12960: compile ===

// Module 12960 (compile)
import _mod12946 from "module_12946" /* 12946 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let module_12946 = fn(_mod12946);

export function compile(arg0) {
  const first = arg0[0];
  const diff = arg0[1] - 1;
  module_12946 = diff;
  if (diff < 0) {
    if (first <= 0) {
      return module_12946.default.falseFunc;
    }
  }
  if (-1 === first) {
    return (arg0) => arg0 <= diff;
  } else if (0 === first) {
    return (arg0) => arg0 === diff;
  } else if (1 === first) {
    if (diff < 0) {
      let fn = module_12946.default.trueFunc;
    } else {
      fn = (arg0) => arg0 >= diff;
    }
    return fn;
  } else {
    const _Math = Math;
    const absolute = Math.abs(first);
    closure_2 = (diff % absolute + absolute) % absolute;
    return first > 1 ? ((arg0) => {
      let tmp = arg0 >= diff;
      if (tmp) {
        tmp = arg0 % absolute === closure_2;
      }
      return tmp;
    }) : ((arg0) => {
      let tmp = arg0 <= diff;
      if (tmp) {
        tmp = arg0 % absolute === closure_2;
      }
      return tmp;
    });
  }
}
export function generate(arg0) {
  const first = arg0[0];
  const diff = arg0[1] - 1;
  closure_1 = diff;
  closure_2 = 0;
  if (first < 0) {
    closure_3 = tmp5;
    closure_4 = (diff % tmp5 + tmp5) % tmp5;
    return () => {
      closure_2 = tmp + 1;
      const sum = closure_4 + closure_3 * tmp;
      let tmp3 = null;
      if (sum <= closure_1) {
        tmp3 = sum;
      }
      return tmp3;
    };
  } else if (0 === first) {
    if (diff < 0) {
      let fn = () => null;
    } else {
      fn = () => {
        closure_2 = tmp + 1;
        let tmp2 = null;
        if (0 == +closure_2) {
          tmp2 = closure_1;
        }
        return tmp2;
      };
    }
  } else {
    if (diff < 0) {
      const _Math = Math;
      closure_1 = diff + first * Math.ceil(-diff / first);
    }
    return () => {
      closure_2 = tmp + 1;
      return first * +closure_2 + closure_1;
    };
  }
}