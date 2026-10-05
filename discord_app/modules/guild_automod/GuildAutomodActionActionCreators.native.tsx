// discord_app/modules/guild_automod/GuildAutomodActionActionCreators.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return {
    [closure_1_3.BLOCK_MESSAGE]: null,
    [closure_1_3.FLAG_TO_CHANNEL]: null,
    [closure_1_3.USER_COMMUNICATION_DISABLED]: null,
  };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj3;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_4);
    },
    automodDecision: obj3,
  };
  obj3 = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(asyncRequire(11478, dependencyMap.paths), obj2, React3);
};
export function openRaidResolveModal() {}
export function openConfirmRemoveMentionRaid() {}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(11481, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} />;
        };
      });
    },
    isDismissable: false,
  };
  obj.openLazy(obj2);
};
