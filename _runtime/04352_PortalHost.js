// === Module 4352: PortalHost ===

// Module 4352 (PortalHost)
import noopDefault from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const useEffect = noop.useEffect;
noopDefault;
({ Fragment: c3, jsx: c4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  let _require;
  dependencyMap = undefined;
  let obj = _require(4353);
  const portalState = obj.usePortalState(name);
  const portal = _require(4349).usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      callback();
    };
  }, []);
  obj = { children: portalState.map((node) => node.node) };
  return callback(closure_3, obj);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;