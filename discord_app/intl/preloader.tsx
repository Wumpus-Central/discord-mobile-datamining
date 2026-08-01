// === Module 1958: _preloadAllIntlMessageFiles ===

// Module 1958 (_preloadAllIntlMessageFiles)
import messagesProxy from "messagesProxy";

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
        return { value: "HermesInternal", done: null };
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
          const items = [v0(outer1_1[2])(outer1_1[1], outer1_1.paths), v0(outer1_1[2])(outer1_1[3], outer1_1.paths), v0(outer1_1[2])(outer1_1[4], outer1_1.paths), v0(outer1_1[2])(outer1_1[5], outer1_1.paths), v0(outer1_1[2])(outer1_1[6], outer1_1.paths), v0(outer1_1[2])(outer1_1[7], outer1_1.paths), v0(outer1_1[2])(outer1_1[8], outer1_1.paths), v0(outer1_1[2])(outer1_1[9], outer1_1.paths), v0(outer1_1[2])(outer1_1[10], outer1_1.paths), v0(outer1_1[2])(outer1_1[11], outer1_1.paths), v0(outer1_1[2])(outer1_1[12], outer1_1.paths), v0(outer1_1[2])(outer1_1[13], outer1_1.paths), v0(outer1_1[2])(outer1_1[14], outer1_1.paths), v0(outer1_1[2])(outer1_1[15], outer1_1.paths), v0(outer1_1[2])(outer1_1[16], outer1_1.paths), v0(outer1_1[2])(outer1_1[17], outer1_1.paths), v0(outer1_1[2])(outer1_1[18], outer1_1.paths), v0(outer1_1[2])(outer1_1[19], outer1_1.paths), v0(outer1_1[2])(outer1_1[20], outer1_1.paths), v0(outer1_1[2])(outer1_1[21], outer1_1.paths), v0(outer1_1[2])(outer1_1[22], outer1_1.paths), v0(outer1_1[2])(outer1_1[23], outer1_1.paths), v0(outer1_1[2])(outer1_1[24], outer1_1.paths), v0(outer1_1[2])(outer1_1[25], outer1_1.paths), v0(outer1_1[2])(outer1_1[26], outer1_1.paths), v0(outer1_1[2])(outer1_1[27], outer1_1.paths), v0(outer1_1[2])(outer1_1[28], outer1_1.paths), v0(outer1_1[2])(outer1_1[29], outer1_1.paths), v0(outer1_1[2])(outer1_1[30], outer1_1.paths), v0(outer1_1[2])(outer1_1[31], outer1_1.paths), v0(outer1_1[2])(outer1_1[32], outer1_1.paths), v0(outer1_1[2])(outer1_1[33], outer1_1.paths), v0(outer1_1[2])(outer1_1[34], outer1_1.paths), v0(outer1_1[2])(outer1_1[35], outer1_1.paths), v0(outer1_1[2])(outer1_1[36], outer1_1.paths), v0(outer1_1[2])(outer1_1[37], outer1_1.paths), v0(outer1_1[2])(outer1_1[38], outer1_1.paths), v0(outer1_1[2])(outer1_1[39], outer1_1.paths), v0(outer1_1[2])(outer1_1[40], outer1_1.paths), v0(outer1_1[2])(outer1_1[41], outer1_1.paths), v0(outer1_1[2])(outer1_1[42], outer1_1.paths), v0(outer1_1[2])(outer1_1[43], outer1_1.paths), v0(outer1_1[2])(outer1_1[44], outer1_1.paths), v0(outer1_1[2])(outer1_1[45], outer1_1.paths), v0(outer1_1[2])(outer1_1[46], outer1_1.paths), v0(outer1_1[2])(outer1_1[47], outer1_1.paths), v0(outer1_1[2])(outer1_1[48], outer1_1.paths), v0(outer1_1[2])(outer1_1[49], outer1_1.paths), v0(outer1_1[2])(outer1_1[50], outer1_1.paths), v0(outer1_1[2])(outer1_1[51], outer1_1.paths), v0(outer1_1[2])(outer1_1[52], outer1_1.paths), v0(outer1_1[2])(outer1_1[53], outer1_1.paths), v0(outer1_1[2])(outer1_1[54], outer1_1.paths), v0(outer1_1[2])(outer1_1[55], outer1_1.paths)];
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
  const _preloadAllIntlMessageFiles = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("asyncRequireImpl").fileFinishedImporting("intl/preloader.tsx");

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