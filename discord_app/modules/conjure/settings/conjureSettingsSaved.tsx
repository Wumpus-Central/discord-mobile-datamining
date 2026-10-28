// === Module 12229: conjureSettingsSaved ===

// Module 12229 (conjureSettingsSaved)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10846 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;

require = fn;
const sendUserMessage = fn(10733).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3863["08bsJL"]));
};