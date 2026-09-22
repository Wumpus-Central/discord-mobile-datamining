// === Module 4635: PortalHost ===

// Module 4635 (PortalHost)
import _mod4632 from "module_4632" /* 4632 */;
import _mod4636 from "module_4636" /* 4636 */;
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
  const portalState = _mod4636.usePortalState(name);
  const portal = _mod4632.usePortal(name);
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