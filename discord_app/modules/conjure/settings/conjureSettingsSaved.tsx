// === Module 12276: conjureSettingsSaved ===

// Module 12276 (conjureSettingsSaved)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 11097 */;
import ConjureChatStore from "ConjureChatStore" /* 10981 */;

require = fn;
const sendUserMessage = fn(10980).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3995["08bsJL"]));
}