// === Module 2006: _preloadAllIntlMessageFiles ===

// Module 2006 (_preloadAllIntlMessageFiles)
import closure_2 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function _preloadAllIntlMessageFiles() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const items = [v0(closure_1_1[2])(closure_1_1[1], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[3], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[4], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[5], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[6], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[7], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[8], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[9], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[10], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[11], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[12], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[13], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[14], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[15], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[16], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[17], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[18], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[19], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[20], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[21], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[22], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[23], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[24], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[25], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[26], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[27], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[28], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[29], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[30], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[31], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[32], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[33], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[34], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[35], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[36], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[37], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[38], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[39], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[40], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[41], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[42], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[43], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[44], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[45], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[46], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[47], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[48], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[49], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[50], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[51], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[52], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[53], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[54], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[55], closure_1_1.paths), v0(closure_1_1[2])(closure_1_1[56], closure_1_1.paths)];
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = Promise.all(items);
          return obj;
        }
      } catch (tmp4) {
        v0 = tmp;
        throw tmp4;
      }
    }
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("intl/preloader.tsx");

export const preloadAllIntlMessageFiles = function preloadAllIntlMessageFiles() {
  const self = this;
  const apply = _preloadAllIntlMessageFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};