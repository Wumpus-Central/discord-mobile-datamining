// discord_app/modules/conjure/builder/native/ConjureStaffAccessNotice.tsx
import router_utils from "../../../routing/router_utils.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1071).Routes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  conjureStaffAccessTarget = conjureStaffAccessTarget(18878).useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { type: "info", role: "none", message: null };
    const intl = tmp(1112).intl;
    const obj3 = { channel: tmp(18878).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    obj2.message = intl.format(_modDef4245["6anmu1"], obj3);
    tmp5 = jsx(tmp(7941).InlineNotice, { type: "info", role: "none", message: null });
  }
  return tmp5;
}
