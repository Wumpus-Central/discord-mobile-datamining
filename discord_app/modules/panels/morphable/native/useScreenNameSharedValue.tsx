// === Module 17011: useScreenNameSharedValue ===

// Module 17011 (useScreenNameSharedValue)
import noop from "module_19" /* 19 */;

const require = fn;
const unknown = "unknown";
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4418).getRootNavigationRef();
  let obj = sharedValue(4418);
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
  sharedValue = sharedValue(4296).useSharedValue(tmp2);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let str;
          if (currentRoute != null) {
            str = currentRoute.name;
          }
          if (str == null) {
            str = "unknown";
          }
          const result = sharedValue.set(str);
        }
      }
    }
    const rootNavigationRef = sharedValue(dependencyMap[1]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(dependencyMap[1]);
  }, items);
  return sharedValue;
};