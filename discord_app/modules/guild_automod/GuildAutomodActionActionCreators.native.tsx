// discord_app/modules/guild_automod/GuildAutomodActionActionCreators.native.tsx
import "noop";
import AutomodEventType from "AutomodEventType";
import { jsx } from "jsxProd";
import { asyncRequireImpl } from "../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { AlertActionCreators } from "../../actions/native/AlertActionCreators.tsx";

let c3;
let c4;
const require = arg1;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: c4 } = AutomodEventType);
const result = require("jsxProd").fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = ModalActionCreators;
  obj = {
    onCloseModal() {
      callback(table[3]).popWithKey(closure_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(11178, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  let obj = AlertActionCreators;
  obj = {
    importer() {
      return guildId(outer1_2[5])(outer1_2[7], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return outer2_5(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};