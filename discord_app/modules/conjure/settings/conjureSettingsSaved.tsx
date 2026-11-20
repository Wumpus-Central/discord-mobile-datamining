// === Module 18182: conjureSettingsSaved ===

// Module 18182 (conjureSettingsSaved)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14623 */;
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
  sendUserMessage(arg0, intl.string(_modDef4091["08bsJL"]));
}