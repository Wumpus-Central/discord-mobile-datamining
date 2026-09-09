// === Module 11870: GuildDisableCommunicationActionCreators ===

// Module 11870 (GuildDisableCommunicationActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4919 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  ({ guildId, cancelButtonCallback } = userId);
  const user = UserStore.getUser(userId.userId);
  if (null != user) {
    const obj = { guildId, user, cancelButtonCallback };
    obj.pushLazy(asyncRequireImpl(11871, dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  let obj = {
    importer() {
      return asyncRequireImpl(11874, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.userId = userId;
          obj.onCancel = onCancel;
          return <closure_0 />;
        };
      });
    }
  };
  obj.openLazy(obj);
};