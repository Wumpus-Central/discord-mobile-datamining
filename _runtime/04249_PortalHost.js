// _runtime/04249_PortalHost.js
import noopDefault from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import { usePortal } from "04246_usePortal.js";
import { usePortalState } from "04250_usePortalState.js";

const useEffect = noop.useEffect;
noopDefault;
({ Fragment: c3, jsx: c4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  let _require;
  dependencyMap = undefined;
  let obj = _usePortalState;
  const portalState = obj.usePortalState(name);
  const portal = _usePortal.usePortal(name);
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