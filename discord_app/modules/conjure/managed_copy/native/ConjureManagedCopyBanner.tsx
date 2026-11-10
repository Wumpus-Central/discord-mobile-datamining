// discord_app/modules/conjure/managed_copy/native/ConjureManagedCopyBanner.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4028 from "../../intl/ConjureUntranslated.messages.js";
import useConjureManagedCopyDefault from "../useConjureManagedCopy.tsx";
import openConjureProjectAboutSheetDefault from "../../share/native/openConjureProjectAboutSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    obj.message = intl.string(_modDef4028.PTo2Qf);
    obj.action = tmp5;
    tmp6 = jsx(sourceApplicationId(8099).InlineNotice, { type: "info", role: "none", message: null, action: null });
  }
  return tmp6;
}
