// === Module 17049: conjureHistoryRestore ===

// Module 17049 (conjureHistoryRestore)
import conjureDatabaseLock from "conjureDatabaseLock" /* 17050 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function runConjureDataRewind() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _runConjureDataRewind() {
  closure_3 = tmp2;
  closure_0 = closure_1;
  await conjureDatabaseLock.withConjureDatabaseLock(closure_0, () => closure_0().catch(() => closure_1_5));
  if (value == null) {
    value = closure_131_5;
  }
  return value;
};
const restoreDatabaseToPoint = fn(13164).restoreDatabaseToPoint;
let closure_5 = { ok: false, code: "failed", message: "" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRestore.tsx");

export { runConjureDataRewind };
export const rewindDataAfterVersionRestore = function rewindDataAfterVersionRestore(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return runConjureDataRewind(arg0, () => restoreDatabaseToPoint(closure_0, closure_1.id)).then((ok) => {
    if (ok.ok) {
      return null;
    } else {
      let tmp2 = dependencyMap;
      const intl = closure_0(dependencyMap[3]).intl;
      if ("unconfirmed" === ok.code) {
        tmp2 = closure_1(tmp2[4]);
        let Npmmnp = tmp2.iqN7YA;
      } else {
        Npmmnp = closure_1(tmp2[4]).Npmmnp;
      }
      intl.string(Npmmnp);
    }
  });
};