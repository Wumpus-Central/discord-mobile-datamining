// _runtime/04713_PortalHost.js
import _mod4710 from "metro/04710__.js";
import _mod4714 from "metro/04714__.js";
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
  const portalState = _mod4714.usePortalState(name);
  const portal = _mod4710.usePortal(name);
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
