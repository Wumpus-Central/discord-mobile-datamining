// _runtime/05171_PortalHost.js
import _mod5168 from "metro/05168__.js";
import _mod5172 from "metro/05172__.js";
import noop_mod from "metro/00019__.js";
import jsxProd from "react/00021_jsxProd.js";

let noop = noop_mod;
const useEffect = noop.useEffect;
let noop = noop_mod;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const portalState = _mod5172.usePortalState(name);
  const portal = _mod5168.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  return React4(React3, { children: portalState.map((node) => node.node) });
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;
