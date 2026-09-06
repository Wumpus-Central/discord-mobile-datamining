// discord_app/modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx
import RootNavigationRef from "../RootNavigationRef.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
}
