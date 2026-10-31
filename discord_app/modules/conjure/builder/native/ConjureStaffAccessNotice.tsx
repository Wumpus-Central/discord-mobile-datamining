// === Module 12996: ConjureStaffAccessNotice ===

// Module 12996 (ConjureStaffAccessNotice)
import router_utils from "router_utils" /* 1099 */;
import _modDef3868 from "module_3868" /* 3868 */;
import LinkingDefault from "Linking" /* 5709 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1072).Routes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(12997).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "none", message: null };
    const intl = tmp(1113).intl;
    const obj3 = { channel: tmp(12997).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef3868["6anmu1"], obj3);
    tmp5 = jsx(tmp(8025).InlineNotice, { type: "info", role: "none", message: null });
  }
  return tmp5;
};