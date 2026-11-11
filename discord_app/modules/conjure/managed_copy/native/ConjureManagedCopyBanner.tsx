// === Module 13676: ConjureManagedCopyBanner ===

// Module 13676 (ConjureManagedCopyBanner)
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import useConjureManagedCopyDefault from "useConjureManagedCopy" /* 13099 */;
import openConjureProjectAboutSheetDefault from "openConjureProjectAboutSheet" /* 13677 */;
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
    obj.message = intl.string(_modDef4079.PTo2Qf);
    obj.action = tmp5;
    tmp6 = jsx(sourceApplicationId(8094).InlineNotice, { type: "info", role: "none", message: null, action: null });
  }
  return tmp6;
};