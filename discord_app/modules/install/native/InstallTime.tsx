import fetchFingerprint from "fetchFingerprint";

const require = arg1;
function getFirstInstallTimeMillis(arg0) {
  const firstInstallTimeMillis = importDefault(12869).getFirstInstallTimeMillis();
  let str = "InstallTimeLaunch";
  if ("authed" === arg0.from) {
    str = "InstallTimeAuthed";
  }
  const Storage = require(595) /* Storage */.Storage;
  const value = Storage.get(str);
  if (null != value) {
    if (value > 0) {
      let bound = value;
      if (firstInstallTimeMillis > 0) {
        const _Math = Math;
        bound = Math.max(value, firstInstallTimeMillis);
      }
      let num2 = bound;
    }
    return num2;
  }
  if ("authed" === arg0.from) {
    num2 = 0;
    if (authenticated.isAuthenticated()) {
      const _Date2 = Date;
      const timestamp = Date.now();
      const Storage3 = tmp4(595).Storage;
      const result = Storage3.set(str, timestamp);
      num2 = timestamp;
    }
  } else {
    num2 = firstInstallTimeMillis;
    if (firstInstallTimeMillis <= 0) {
      const _Date = Date;
      num2 = Date.now();
    }
    const Storage2 = tmp4(595).Storage;
    const result1 = Storage2.set(str, num2);
  }
}
let result = require("enforcing").fileFinishedImporting("modules/install/native/InstallTime.tsx");

export { getFirstInstallTimeMillis };
export const getFirstInstallTimeElapsed = function getFirstInstallTimeElapsed(unit) {
  unit = unit.unit;
  const tmp = getFirstInstallTimeMillis(Object.assign(unit, Object.create(null)));
  if (0 === tmp) {
    return 0;
  } else {
    const _Date = Date;
    const diff = Date.now() - tmp;
    let result = diff;
    if (null != unit) {
      result = require(4360) /* sleep */.convertMinutesToGivenTimeUnit(diff / require(4360) /* sleep */.MS_PER_MINUTE, unit);
      const obj = require(4360) /* sleep */;
    }
    return result;
  }
};