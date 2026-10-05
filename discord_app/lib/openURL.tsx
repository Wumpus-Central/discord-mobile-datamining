// === Module 4559: openURL ===

// Module 4559 (openURL)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_2;

let obj = function _openURL() {
  let paths;
  obj = _asyncToGenerator(async (arg0, skipExtensionCheck) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              require("handleURL").default(closure_0);
              c3 = 1;
              c4 = 1;
              const obj4 = { value: require("asyncRequire")(paths[2], paths.paths), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            obj = { skipExtensionCheck, analyticsLocations: [] };
            value.default(closure_0, obj);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("lib/openURL.tsx");

export default function openURL() {
  return obj(...arguments);
};