// discord_app/modules/guild_automod/GuildAutomodActionActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01980_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(12205);
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return {
    [closure_1_3.BLOCK_MESSAGE]: null,
    [closure_1_3.FLAG_TO_CHANNEL]: null,
    [closure_1_3.USER_COMMUNICATION_DISABLED]: null,
  };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  const obj2 = {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_4);
    },
    automodDecision: { messageId, messageContent: content, decisionId, channel },
  };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12209, dependencyMap.paths), obj2, React4);
};
export function openRaidResolveModal() {}
export function openConfirmRemoveMentionRaid() {}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(12212, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false,
  });
};
