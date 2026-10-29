// === Module 12283: conjureSettingsSaved ===

// Module 12283 (conjureSettingsSaved)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10922 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;

require = fn;
const sendUserMessage = fn(10807).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3864["08bsJL"]));
}