// discord_app/modules/install/native/InstallTime.tsx
import Storage4 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getFirstInstallTimeMillis(arg0) {
  let num2;
  const from = arg0.from;
  const obj = react_nativeDefault;
  const firstInstallTimeMillis = obj.getFirstInstallTimeMillis();
  let str = "InstallTimeLaunch";
  if ("authed" === from) {
    str = "InstallTimeAuthed";
  }
  const Storage = Storage4.Storage;
  const value = Storage.get(str);
  if (null != value) {
    if (value > 0) {
      let bound = value;
      if (firstInstallTimeMillis > 0) {
        const _Math = Math;
        bound = Math.max(value, firstInstallTimeMillis);
      }
      num2 = bound;
    }
    return num2;
  }
  if ("authed" === from) {
    num2 = 0;
    if (AuthenticationStore.isAuthenticated()) {
      const _Date2 = Date;
      const timestamp = Date.now();
      const Storage3 = Storage4.Storage;
      const result = Storage3.set(str, timestamp);
      num2 = timestamp;
    }
  } else {
    num2 = firstInstallTimeMillis;
    if (firstInstallTimeMillis <= 0) {
      const _Date = Date;
      num2 = Date.now();
    }
    const Storage2 = Storage4.Storage;
    const result1 = Storage2.set(str, num2);
  }
}
let result = size.fileFinishedImporting("modules/install/native/InstallTime.tsx");

export { getFirstInstallTimeMillis };
export const getFirstInstallTimeElapsed = function getFirstInstallTimeElapsed(unit) {
  unit = unit.unit;
  const tmp = getFirstInstallTimeMillis(Object.assign(unit, Object.assign({ unit: 0 })));
  if (0 === tmp) {
    return 0;
  } else {
    const _Date = Date;
    const diff = Date.now() - tmp;
    let result = diff;
    if (null != unit) {
      const obj = TimeUtils;
      result = obj.convertMinutesToGivenTimeUnit(diff / TimeUtils.MS_PER_MINUTE, unit);
    }
    return result;
  }
};
