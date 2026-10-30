// discord_app/modules/conjure/archive/conjureArchiveInstallScope.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _readConjureArchiveInstallScope(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let unzipSync;
          let strFromU8;
          closure_129_4 = undefined;
          let install_scope;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj4 = {
            value: (function readBytes(arg0) {
              closure_0 = arg0;
              return new Promise((response, arg1) => {
                closure_0 = response;
                closure_1 = arg1;
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  const uint8Array = new Uint8Array(fileReader.result);
                  return closure_0(uint8Array);
                };
                fileReader.onerror = () => closure_1(fileReader.error);
                const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
              });
            })(closure_0),
            done: false,
          };
          return obj4;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_0 = value;
          if (80 === closure_129_0[0]) {
            if (75 === closure_129_0[1]) {
              c4 = 3;
              c5 = 1;
              const obj6 = {
                value: closure_130_0(closure_130_1[2])(closure_130_1[1], closure_130_1.paths),
                done: false,
              };
              return obj6;
            }
          }
          c3 = 0;
          c5 = 3;
          return { value: null, done: true };
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_1 = value;
        unzipSync = closure_129_1.unzipSync;
        strFromU8 = closure_129_1.strFromU8;
        const _Object = Object;
        const obj8 = {
          filter(name) {
            return regex.test(name.name);
          },
        };
        closure_129_4 = Object.values(unzipSync(closure_129_0, obj8));
        if (1 !== closure_129_4.length) {
          c3 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else {
          const _JSON = JSON;
          install_scope = JSON.parse(strFromU8(closure_129_4[0])).install_scope;
          if ("user" === install_scope) {
            let tmp14 = install_scope;
          } else {
            tmp14 = null;
          }
          c3 = 0;
          c5 = 3;
          const obj = { value: tmp14, done: true };
          return obj;
        }
      }
    } catch (tmp22) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp22;
      } else {
        c4 = tmp;
      }
    }
  }
};
const re3 = /^(?:[^/]+\/)?\.discord\/manifest\.json$/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/archive/conjureArchiveInstallScope.tsx");

export function readConjureArchiveInstallScope() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function importedConjureInstallScope(arg0, arg1) {
  if ("guild" !== arg0) {
    let tmp2 = arg0;
  } else {
    tmp2 = null;
  }
  return tmp2;
}
