// discord_app/modules/panels/morphable/native/useScreenNameSharedValue.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const unknown = "unknown";
let result = require("set").fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4235).getRootNavigationRef();
  let obj = sharedValue(4235);
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  if (true === isReadyResult) {
    let currentRoute = rootNavigationRef.getCurrentRoute();
    let name;
    if (currentRoute != null) {
      name = currentRoute.name;
    }
    if (name == null) {
      name = unknown;
    }
    let tmp2 = name;
  } else {
    tmp2 = unknown;
  }
  sharedValue = sharedValue(4120).useSharedValue(tmp2);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        if (obj.isReady()) {
          const currentRoute = obj.getCurrentRoute();
          let str;
          if (currentRoute != null) {
            str = currentRoute.name;
          }
          if (str == null) {
            str = "unknown";
          }
          const result = rootNavigationRef.set(str);
        }
      }
    }
    const rootNavigationRef = sharedValue(closure_1_1[1]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(closure_1_1[1]);
  }, items);
  return sharedValue;
};