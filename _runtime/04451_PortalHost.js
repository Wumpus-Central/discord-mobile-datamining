// _runtime/04451_PortalHost.js
import _mod4448 from "metro/04448__.js";
import _mod4452 from "metro/04452__.js";
import noop from "metro/00019__.js";
import jsxProd from "react/00021_jsxProd.js";

const useEffect = noop.useEffect;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  let obj = _mod4452;
  const portalState = obj.usePortalState(name);
  const portal = _mod4448.usePortal(name);
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
