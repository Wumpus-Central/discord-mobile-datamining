// _runtime/05349_trim.js
import RequireObjectCoercible from "05338_RequireObjectCoercible.js";
import getPolyfill from "05350_getPolyfill.js";
import trim2 from "05351_trim.js";
import shimStringTrim from "05357_shimStringTrim.js";
import callBind from "01461_callBind.js";
import defineProperties from "05353_defineProperties.js";

let closure_2 = callBind(getPolyfill());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill, implementation: trim2, shim: shimStringTrim };
defineProperties(trim, obj);

export default trim;
