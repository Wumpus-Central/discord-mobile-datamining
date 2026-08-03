// === Module 11956: ? ===

// Module 11956
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
const result = require("HubEmailConnectionModal").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default {
  open(closure_0) {
    closure_0 = arg1;
    importDefault(4461).pushLazy(callback(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let closure_0 = tmp2;
              closure_0 = undefined;
              paths = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(paths[3])(paths[2], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1.default;
            if (null != closure_0) {
              obj = { animation: null };
              obj[0] = closure_0;
              closure_0.modalConfig = obj;
            }
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = closure_0;
            return obj3;
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    }), closure_0, HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
  close() {
    importDefault(4461).popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};