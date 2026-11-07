// === Module 12996: ConjureManagedCopyBanner ===

// Module 12996 (ConjureManagedCopyBanner)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import useConjureManagedCopyDefault from "useConjureManagedCopy" /* 12290 */;
import openConjureProjectAboutSheetDefault from "openConjureProjectAboutSheet" /* 12997 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_5 = { guildId: null, channelId: null };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureManagedCopyBanner.tsx");

export default function ConjureManagedCopyBanner(projectId) {
  const tmp3 = useConjureManagedCopyDefault(projectId.projectId);
  let sourceApplicationId;
  if (tmp3 != null) {
    sourceApplicationId = tmp3.sourceApplicationId;
  }
  if (sourceApplicationId == null) {
    sourceApplicationId = null;
  }
  [][0] = sourceApplicationId;
  let tmp6 = null;
  if (null != tmp3) {
    let obj = { type: "info", role: "none", message: null, action: null };
    let intl = sourceApplicationId(1113).intl;
    obj.message = intl.string(_modDef4026.PTo2Qf);
    obj.action = tmp5;
    tmp6 = jsx(sourceApplicationId(8095).InlineNotice, { type: "info", role: "none", message: null, action: null });
  }
  return tmp6;
};