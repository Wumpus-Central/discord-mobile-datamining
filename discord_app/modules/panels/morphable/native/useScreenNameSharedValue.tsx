// discord_app/modules/panels/morphable/native/useScreenNameSharedValue.tsx
import noop from "noop";

const require = arg1;
const unknown = "unknown";
let result = require("module_4083").fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4200).getRootNavigationRef();
  let obj = sharedValue(4200);
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
  sharedValue = sharedValue(4083).useSharedValue(tmp2);
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
    const rootNavigationRef = sharedValue(outer1_1[1]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(outer1_1[1]);
  }, items);
  return sharedValue;
};