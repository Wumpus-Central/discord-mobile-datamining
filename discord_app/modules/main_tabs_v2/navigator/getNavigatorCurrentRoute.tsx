// === Module 9066: getNavigatorCurrentRoute ===

// Module 9066 (getNavigatorCurrentRoute)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
    const obj2 = getRootNavigationRef;
  }
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let currentRoute;
    if (rootNavigationRef != null) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    tmp4 = currentRoute;
  }
  return tmp4;
};