// === Module 17037: useOrbsArcadeEnrollmentPause ===

// Module 17037 (useOrbsArcadeEnrollmentPause)
import DurationsDefault from "Durations" /* 1089 */;
import DateUtils from "DateUtils" /* 4836 */;
import useIntervalDefault from "useInterval" /* 7625 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadeEnrollmentPause.tsx");

export default function useOrbsArcadeEnrollmentPause(endsAt, expiresAt) {
  ({ windowEndsAt, enrollmentClosesAt } = endsAt);
  [tmp2, require] = noop.useState(Date.now);
  let MINUTE = null;
  const tmp = _slicedToArray(noop.useState(Date.now), 2);
  if (null != windowEndsAt) {
    MINUTE = DurationsDefault.Millis.MINUTE;
  }
  useIntervalDefault(() => require(Date.now()), MINUTE);
  if (null == expiresAt) {
    let tmp8 = null;
    if (null != windowEndsAt) {
      tmp8 = null;
      if (null != enrollmentClosesAt) {
        const _Date2 = Date;
        tmp8 = null;
        if (tmp2 >= Date.parse(enrollmentClosesAt)) {
          const _Date3 = Date;
          tmp8 = null;
          if (tmp2 < Date.parse(windowEndsAt)) {
            if (null == endsAt.endsAt) {
              const _Date6 = Date;
              let diffAsUnitsResult = DateUtils.diffAsUnits(tmp2, Date.parse(windowEndsAt));
            } else {
              const _Date4 = Date;
              const _Date5 = Date;
              const parsed = Date.parse(windowEndsAt);
              diffAsUnitsResult = null;
            }
            const obj2 = { timeUntilNextRound: diffAsUnitsResult };
            tmp8 = obj2;
          }
        }
      }
    }
  } else {
    tmp8 = null;
    if (null != expiresAt.expiresAt) {
      const _Date = Date;
      tmp8 = null;
    }
  }
  return tmp8;
};