// === Module 18462: conjureSettingsSaved ===

// Module 18462 (conjureSettingsSaved)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 14698 */;
import ConjureChatStore from "ConjureChatStore" /* 7628 */;

require = fn;
const sendUserMessage = fn(7662).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef4244["08bsJL"]));
}