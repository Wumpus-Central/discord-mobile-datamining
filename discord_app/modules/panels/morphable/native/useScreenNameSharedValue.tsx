// === Module 17626: useScreenNameSharedValue ===

// Module 17626 (useScreenNameSharedValue)
import noop from "module_19" /* 19 */;

const require = fn;
const unknown = "unknown";
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useScreenNameSharedValue() {
  const cResult = sharedValue(576).c(3);
  let obj = sharedValue(576);
  let rootNavigationRef = sharedValue(4938).getRootNavigationRef();
  const obj2 = sharedValue(4938);
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
    let tmp3 = name;
  } else {
    tmp3 = unknown;
  }
  sharedValue = sharedValue(4811).useSharedValue(tmp3);
  if (cResult[0] !== sharedValue) {
    const fn = function u() {
      const rootNavigationRef = sharedValue(dependencyMap[3]).getRootNavigationRef();
      if (null != rootNavigationRef) {
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
        rootNavigationRef.addListener("state", handleStateChange);
        return () => {
          rootNavigationRef.removeListener("state", handleStateChange);
        };
      }
      const obj = sharedValue(dependencyMap[3]);
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  return sharedValue;
}) : (function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4938).getRootNavigationRef();
  let obj = sharedValue(4938);
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
  sharedValue = sharedValue(4811).useSharedValue(tmp2);
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
    const rootNavigationRef = sharedValue(dependencyMap[3]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(dependencyMap[3]);
  }, items);
  return sharedValue;
});