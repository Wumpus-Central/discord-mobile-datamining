// === Module 18348: conjureSettingsSaved ===

// Module 18348 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14664 */;
import ConjureChatStore from "ConjureChatStore" /* 6806 */;

require = fn;
const sendUserMessage = fn(6848).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4089["08bsJL"]));
}