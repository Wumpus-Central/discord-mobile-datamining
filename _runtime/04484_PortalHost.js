// === Module 4484: PortalHost ===

// Module 4484 (PortalHost)
import _mod4481 from "module_4481" /* 4481 */;
import _mod4485 from "module_4485" /* 4485 */;
import noop from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const useEffect = noop.useEffect;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  let obj = _mod4485;
  const portalState = obj.usePortalState(name);
  const portal = _mod4481.usePortal(name);
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