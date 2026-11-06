// === Module 13498: GuildAutomodActionActionCreators ===

// Module 13498 (GuildAutomodActionActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6117 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(13499);
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export function getPromiseableActionHandlers() {
  return { [closure_1_3.BLOCK_MESSAGE]: null, [closure_1_3.FLAG_TO_CHANNEL]: null, [closure_1_3.USER_COMMUNICATION_DISABLED]: null };
}
export function openSubmitFeedback(messageId, content, decisionId, channel) {
  const obj2 = {
    onCloseModal: function handleClose() {
      ModalActionCreatorsDefault.popWithKey(closure_1_4);
    },
    automodDecision: { messageId, messageContent: content, decisionId, channel }
  };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13503, dependencyMap.paths), obj2, React4);
}
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid() {

}
export function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(13506, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
}