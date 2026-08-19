// discord_app/modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import _modDef4656 from "../../actions/native/AlertActionCreators.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  ({ guildId, cancelButtonCallback } = userId);
  user = user.getUser(userId.userId);
  if (null != user) {
    const obj = { guildId: null, user: null, cancelButtonCallback: null };
    obj[0] = guildId;
    obj[1] = user;
    obj[2] = cancelButtonCallback;
    obj.pushLazy(asyncRequireImpl(11020, dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  let obj = {
    importer() {
      return asyncRequireImpl(dependencyMap[7], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.userId = closure_1_1;
          obj.onCancel = closure_1_2;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};