// === Module 12446: conjureSettingsSaved ===

// Module 12446 (conjureSettingsSaved)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10945 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;

require = fn;
const sendUserMessage = fn(10830).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3865["08bsJL"]));
}