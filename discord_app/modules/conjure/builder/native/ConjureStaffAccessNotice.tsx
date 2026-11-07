// === Module 13218: ConjureStaffAccessNotice ===

// Module 13218 (ConjureStaffAccessNotice)
import router_utils from "router_utils" /* 1099 */;
import _modDef4026 from "module_4026" /* 4026 */;
import LinkingDefault from "Linking" /* 5834 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1072).Routes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(13219).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "none", message: null };
    const intl = tmp(1113).intl;
    const obj3 = { channel: tmp(13219).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef4026["6anmu1"], obj3);
    tmp5 = jsx(tmp(8095).InlineNotice, { type: "info", role: "none", message: null });
  }
  return tmp5;
};