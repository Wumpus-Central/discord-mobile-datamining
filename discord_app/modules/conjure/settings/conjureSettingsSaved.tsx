// === Module 13221: conjureSettingsSaved ===

// Module 13221 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13218 */;
import ConjureChatStore from "ConjureChatStore" /* 7321 */;

require = fn;
const sendUserMessage = fn(7365).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4131["08bsJL"]));
}