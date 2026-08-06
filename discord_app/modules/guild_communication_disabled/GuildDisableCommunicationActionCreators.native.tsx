// discord_app/modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { AlertActionCreators } from "../../actions/native/AlertActionCreators.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx");

export const openDisableCommunication = function openDisableCommunication(userId) {
  let cancelButtonCallback;
  let guildId;
  ({ guildId, cancelButtonCallback } = userId);
  user = user.getUser(userId.userId);
  if (null != user) {
    let obj = ModalActionCreators;
    obj = { guildId: null, user: null, cancelButtonCallback: null };
    obj[0] = guildId;
    obj[1] = user;
    obj[2] = cancelButtonCallback;
    obj.pushLazy(asyncRequireImpl(11158, dependencyMap.paths), obj);
  }
};
export const openEnableCommunication = function openEnableCommunication(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, userId: importDefault, cancelButtonCallback: dependencyMap } = arg0);
  let obj = AlertActionCreators;
  obj = {
    importer() {
      return outer1_0(outer1_2[5])(outer1_2[7], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.userId = outer1_1;
          obj.onCancel = outer1_2;
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};