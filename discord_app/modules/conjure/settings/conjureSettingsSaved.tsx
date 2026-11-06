// === Module 12310: conjureSettingsSaved ===

// Module 12310 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11106 */;
import ConjureChatStore from "ConjureChatStore" /* 10987 */;

require = fn;
const sendUserMessage = fn(10986).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4024["08bsJL"]));
}