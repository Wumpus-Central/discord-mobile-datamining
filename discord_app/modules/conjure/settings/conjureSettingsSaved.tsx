// === Module 18532: conjureSettingsSaved ===

// Module 18532 (conjureSettingsSaved)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14758 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;

require = fn;
const sendUserMessage = fn(7693).sendUserMessage;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export function settleProjectSettingsSave(arg0, incomplete) {
  let flag = incomplete.incomplete;
  ({ rebuildRequired, notifyAgent } = incomplete);
  if (flag === undefined) {
    flag = false;
  }
  if (!notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (rebuildRequired) {
        const projectRebuild = conjureSettingsConnection.requestProjectRebuild(arg0);
      }
    }
  }
  if (!flag) {
    const intl = util.intl;
    sendUserMessage(arg0, intl.string(_modDef4245["08bsJL"]));
  }
}