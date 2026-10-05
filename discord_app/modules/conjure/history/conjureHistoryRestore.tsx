// === Module 16622: conjureHistoryRestore ===

// Module 16622 (conjureHistoryRestore)
import ConjureConnectionStore from "ConjureConnectionStore" /* 12904 */;
import conjureDatabaseLock from "conjureDatabaseLock" /* 16623 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5;

function runConjureDataRewind() {
  return obj(...arguments);
}
let obj = function _runConjureDataRewind() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj3;
    let value;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_0 = closure_1;
            c4 = 1;
            c5 = 1;
            const obj5 = {
              value: obj3.withConjureDatabaseLock(closure_0, () => {
                        const promise = closure_0();
                        return promise.catch(() => closure_1_5);
                      }),
              done: false
            };
            obj3 = conjureDatabaseLock;
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (value == null) {
            value = closure_131_5;
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c5 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const restoreDatabaseToPoint = ConjureConnectionStore.restoreDatabaseToPoint;
let closure_5 = { ok: false, code: "failed", message: "" };
const result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRestore.tsx");

export { runConjureDataRewind };
export const rewindDataAfterVersionRestore = function rewindDataAfterVersionRestore(arg0, c1) {
  let closure_0 = arg0;
  const promise = runConjureDataRewind(arg0, () => restoreDatabaseToPoint(closure_0, c1.id));
  return promise.then((ok) => {
    let stringResult = null;
    if (!ok.ok) {
      let Npmmnp;
      const intl = closure_0(dependencyMap[3]).intl;
      const string = intl.string;
      if ("unconfirmed" === ok.code) {
        Npmmnp = c1(dependencyMap[4]).iqN7YA;
      } else {
        Npmmnp = c1(dependencyMap[4]).Npmmnp;
      }
      stringResult = string(Npmmnp);
    }
    return stringResult;
  });
};