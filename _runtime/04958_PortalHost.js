// _runtime/04958_PortalHost.js
import _mod4955 from "metro/04955__.js";
import _mod4959 from "metro/04959__.js";
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
  const portalState = _mod4959.usePortalState(name);
  const portal = _mod4955.usePortal(name);
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
