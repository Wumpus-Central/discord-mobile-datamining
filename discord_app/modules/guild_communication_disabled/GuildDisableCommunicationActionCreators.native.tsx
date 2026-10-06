// discord_app/modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx",
);

export const openDisableCommunication = function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  const user = UserStore.getUser(userId.userId);
  if (null != user) {
    const obj2 = { guildId, user, cancelButtonCallback };
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(11465, dependencyMap.paths), obj2);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let guildId;
      let onCancel;
      let userId;
      const promise = asyncRequire(11468, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} userId={userId} onCancel={onCancel} />;
        };
      });
    },
    isDismissable: false,
  };
  obj.openLazy(obj2);
};
