// === Module 12316: conjureSettingsSaved ===

// Module 12316 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11101 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;

require = fn;
const sendUserMessage = fn(10978).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4028["08bsJL"]));
}