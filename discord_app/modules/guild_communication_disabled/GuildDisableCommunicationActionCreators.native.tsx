// discord_app/modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4723 from "../../actions/ModalActionCreators.tsx";
import _modDef4858 from "../../actions/native/AlertActionCreators.tsx";
import closure_3 from "../../stores/UserStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx",
);

export const openDisableCommunication = function openDisableCommunication(userId) {
  ({ guildId, cancelButtonCallback } = userId);
  user = user.getUser(userId.userId);
  if (null != user) {
    let obj = _modDef4723;
    obj = { guildId: null, user: null, cancelButtonCallback: null };
    obj[0] = guildId;
    obj[1] = user;
    obj[2] = cancelButtonCallback;
    obj.pushLazy(asyncRequireImpl(11413, dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  let obj = _modDef4858;
  obj = {
    importer() {
      return closure_1_0(closure_1_2[5])(closure_1_2[7], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.userId = closure_1_1;
          obj.onCancel = closure_1_2;
          return closure_2_4(closure_0, obj);
        };
      });
    },
  };
  obj.openLazy(obj);
};
