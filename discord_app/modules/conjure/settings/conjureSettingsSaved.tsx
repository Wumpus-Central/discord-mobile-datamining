// === Module 18311: conjureSettingsSaved ===

// Module 18311 (conjureSettingsSaved)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14746 */;
import ConjureChatStore from "ConjureChatStore" /* 6925 */;

require = fn;
const sendUserMessage = fn(6967).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4190["08bsJL"]));
}