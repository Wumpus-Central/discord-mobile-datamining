// === Module 11367: getPromiseableActionHandlers ===

// Module 11367 (getPromiseableActionHandlers)
import noopAll from "noop" /* 19 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import _modDef4823 from "module_4823" /* 4823 */;
import AutomodEventType from "AutomodEventType" /* 11368 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: c4 } = AutomodEventType);
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = _modDef4689;
  obj = {
    onCloseModal() {
      callback(table[3]).popWithKey(closure_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(asyncRequireImpl(11372, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  let obj = _modDef4823;
  obj = {
    importer() {
      return guildId(closure_1_2[5])(closure_1_2[7], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
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