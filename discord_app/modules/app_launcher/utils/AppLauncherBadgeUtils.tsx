// === Module 13804: AppLauncherBadgeUtils ===

// Module 13804 (AppLauncherBadgeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/utils/AppLauncherBadgeUtils.tsx");

export const getNewestBadgeableVersion = function getNewestBadgeableVersion(arg0) {
  let storeState;
  let surface;
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
    const self = this;
    const self2 = this;
    num = 0;
    const date = new Date(tmp2.fromDate);
    if (date.getTime() < timestamp) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      num = 0;
      const date1 = new Date(tmp2.untilDate);
      if (date1.getTime() > timestamp) {
        const _Math = Math;
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        const date2 = new Date(tmp2.fromDate);
        num = floor(date2.getTime() / 1000);
      }
    }
  }
  return num;
};