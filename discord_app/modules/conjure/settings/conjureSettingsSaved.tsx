// === Module 11820: conjureSettingsSaved ===

// Module 11820 (conjureSettingsSaved)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10809 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;

require = fn;
const sendUserMessage = fn(10698).sendUserMessage;
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
  sendUserMessage(arg0, intl.string(_modDef3830["08bsJL"]));
};