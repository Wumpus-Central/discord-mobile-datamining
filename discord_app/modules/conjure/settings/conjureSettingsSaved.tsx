// === Module 12481: conjureSettingsSaved ===

// Module 12481 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10964 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;

require = fn;
const sendUserMessage = fn(10850).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3868["08bsJL"]));
}