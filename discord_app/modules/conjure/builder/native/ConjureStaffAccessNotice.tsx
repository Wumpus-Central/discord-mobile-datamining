// === Module 18893: ConjureStaffAccessNotice ===

// Module 18893 (ConjureStaffAccessNotice)
import router_utils from "router_utils" /* 1098 */;
import _modDef4245 from "module_4245" /* 4245 */;
import LinkingDefault from "Linking" /* 5722 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1071).Routes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(18894).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "none", message: null };
    const intl = tmp(1112).intl;
    const obj3 = { channel: tmp(18894).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef4245["6anmu1"], obj3);
    tmp5 = jsx(tmp(7941).InlineNotice, { type: "info", role: "none", message: null });
  }
  return tmp5;
};