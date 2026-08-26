// _runtime/04318_PortalHost.js
import noopDefault from "00019_noop.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import { usePortalState } from "04319_usePortalState.js";

const useEffect = noop.useEffect;
noopDefault;
({ Fragment: c3, jsx: c4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  let _require;
  dependencyMap = undefined;
  let obj = usePortalState;
  const portalState = obj.usePortalState(name);
  const portal = require("04315_usePortal.js").usePortal(name);
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