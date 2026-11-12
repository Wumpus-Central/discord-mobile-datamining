// === Module 13115: conjureSettingsSaved ===

// Module 13115 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13112 */;
import ConjureChatStore from "ConjureChatStore" /* 7257 */;

require = fn;
const sendUserMessage = fn(7301).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4079["08bsJL"]));
}