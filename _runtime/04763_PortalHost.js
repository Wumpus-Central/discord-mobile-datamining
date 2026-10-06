// _runtime/04763_PortalHost.js
import _mod4760 from "metro/04760__.js";
import react2 from "04764_react.js";
import react_mod from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

let name;

let c3;
let closure_4;
let react = react_mod;
const useEffect = react.useEffect;
const memo = react.memo;
react = react_mod;
({ Fragment: c3, jsx: closure_4 } = Fragment);
const memoResult = memo((name) => {
  let c0;
  let c1;
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const obj = react2;
  const portalState = obj.usePortalState(name);
  const obj2 = _mod4760;
  const portal = obj2.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  const obj3 = { children: portalState.map((node) => node.node) };
  return React3(_false, obj3);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;
