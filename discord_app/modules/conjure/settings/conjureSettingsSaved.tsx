// === Module 12308: conjureSettingsSaved ===

// Module 12308 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11092 */;
import ConjureChatStore from "ConjureChatStore" /* 10970 */;

require = fn;
const sendUserMessage = fn(10969).sendUserMessage;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export function settleProjectSettingsSave(arg0, notifyAgent) {
  if (!notifyAgent.notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (tmp) {
        const projectRebuild = conjureSettingsConnection.requestProjectRebuild(arg0);
      }
    }
  }
  const intl = util.intl;
  sendUserMessage(arg0, intl.string(_modDef4026["08bsJL"]));
}