// === Module 5343: PortalHost ===

// Module 5343 (PortalHost)
import _mod5340 from "module_5340" /* 5340 */;
import _mod5344 from "module_5344" /* 5344 */;
import noop_mod from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

let noop = noop_mod;
const useEffect = noop.useEffect;
let noop = noop_mod;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const portalState = _mod5344.usePortalState(name);
  const portal = _mod5340.usePortal(name);
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