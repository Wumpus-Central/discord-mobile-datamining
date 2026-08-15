// _runtime/04249_PortalHost.js
import noop from "noop";
import "noop";
import jsxProd from "jsxProd";
import { usePortal } from "04246_usePortal.js";
import { usePortalState } from "04250_usePortalState.js";

let c3;
let c4;
const useEffect = noop.useEffect;
({ Fragment: c3, jsx: c4 } = jsxProd);
const memoResult = noop.memo((name) => {
  let c0;
  let c1;
  name = name.name;
  let _require;
  let dependencyMap;
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