// discord_app/modules/orbs_arcade/hooks/useOrbsArcadeEnrollmentPause.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import useIntervalDefault from "../../../hooks/useInterval.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
