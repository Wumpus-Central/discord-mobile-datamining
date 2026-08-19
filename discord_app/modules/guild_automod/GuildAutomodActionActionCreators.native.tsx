// === Module 11041: getPromiseableActionHandlers ===

// Module 11041 (getPromiseableActionHandlers)
import noopAll from "noop" /* 19 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef4656 from "module_4656" /* 4656 */;
import _modDef5260 from "module_5260" /* 5260 */;
import AutomodEventType from "AutomodEventType" /* 11042 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: c4 } = AutomodEventType);
const result = require("obj132").fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = _modDef5260;
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(asyncRequireImpl(11046, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  let obj = {
    importer() {
      return guildId(dependencyMap[5])(dependencyMap[7], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return closure_2_5(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};