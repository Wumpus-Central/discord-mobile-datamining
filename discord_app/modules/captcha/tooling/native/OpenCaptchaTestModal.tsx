import asyncRequireImpl from "asyncRequireImpl";
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/captcha/tooling/native/OpenCaptchaTestModal.tsx");

export const showCaptchaTestModal = function showCaptchaTestModal() {
  importDefault(4399).pushLazy(callback(function*() {
    if (paths === 2) {
      paths = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        paths = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            paths = 3;
            throw arg1;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            closure_0 = undefined;
            c1 = 1;
            paths = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[5])(paths[4], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          paths = 3;
          throw arg1;
        } else if (arg0 === 2) {
          paths = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1.default;
          paths = 3;
          obj = { value: null, done: true };
          obj[0] = () => outer1_4(closure_0, {});
          return obj;
        }
      } catch (tmp9) {
        paths = tmp;
        throw tmp9;
      }
    }
  }));
};