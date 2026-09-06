// _runtime/04437_PortalHost.js
import _mod4434 from "metro/04434__.js";
import _mod4438 from "metro/04438__.js";
import noop from "metro/00019__.js";
import jsxProd from "react/00021_jsxProd.js";

const useEffect = noop.useEffect;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  let obj = _mod4438;
  const portalState = obj.usePortalState(name);
  const portal = _mod4434.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  obj = { children: portalState.map((node) => node.node) };
  return React4(React3, obj);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;
