// === Module 12191: conjureSettingsSaved ===

// Module 12191 (conjureSettingsSaved)
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10812 */;
import ConjureChatStore from "ConjureChatStore" /* 10702 */;

require = fn;
const sendUserMessage = fn(10701).sendUserMessage;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSaved.tsx");

export const settleProjectSettingsSave = function settleProjectSettingsSave(arg0, notifyAgent) {
  if (!notifyAgent.notifyAgent) {
    if (!ConjureChatStore.hasPendingSettingsRequest(arg0)) {
      if (tmp) {
        const projectRebuild = conjureSettingsConnection.requestProjectRebuild(arg0);
      }
    }
  }
  const intl = util.intl;
  sendUserMessage(arg0, intl.string(_modDef3831["08bsJL"]));
};