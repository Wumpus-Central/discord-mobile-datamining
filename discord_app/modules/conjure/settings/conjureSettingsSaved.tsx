// === Module 14454: conjureSettingsSaved ===

// Module 14454 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14451 */;
import ConjureChatStore from "ConjureChatStore" /* 7331 */;

require = fn;
const sendUserMessage = fn(7375).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4133["08bsJL"]));
}