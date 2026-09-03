// === Module 13965: getNewestBadgeableVersion ===

// Module 13965 (getNewestBadgeableVersion)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_launcher/utils/AppLauncherBadgeUtils.tsx");

export const getNewestBadgeableVersion = function getNewestBadgeableVersion(arg0) {
  ({ storeState, surface } = arg0);
  const timestamp = Date.now();
  const dateRangesForSurfaces = storeState.dateRangesForSurfaces;
  let tmp2;
  if (dateRangesForSurfaces != null) {
    tmp2 = dateRangesForSurfaces[surface];
  }
  let num = 0;
  if (null != tmp2) {
    const _Date = Date;
    const date = new Date(tmp2.fromDate);
    num = 0;
    if (date.getTime() < timestamp) {
      const _Date2 = Date;
      const date1 = new Date(tmp2.untilDate);
      num = 0;
      if (date1.getTime() > timestamp) {
        const _Math = Math;
        const _Date3 = Date;
        const date2 = new Date(tmp2.fromDate);
        num = Math.floor(date2.getTime() / 1000);
      }
    }
  }
  return num;
};