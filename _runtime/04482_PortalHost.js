// === Module 4482: PortalHost ===

// Module 4482 (PortalHost)
import _mod4479 from "module_4479" /* 4479 */;
import _mod4483 from "module_4483" /* 4483 */;
import noop from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const useEffect = noop.useEffect;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  let obj = _mod4483;
  const portalState = obj.usePortalState(name);
  const portal = _mod4479.usePortal(name);
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