// === Module 18350: conjureSettingsSaved ===

// Module 18350 (conjureSettingsSaved)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14576 */;
import ConjureChatStore from "ConjureChatStore" /* 7533 */;

require = fn;
const sendUserMessage = fn(7563).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4192["08bsJL"]));
}