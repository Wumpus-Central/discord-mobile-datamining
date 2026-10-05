// discord_app/modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(onClose) {
  onClose = onClose.onClose;
  const guildId = onClose.guildId;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    guildId,
    onClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
      if (onClose != null) {
        onClose();
      }
    },
  };
  obj.pushLazy(onClose(1987)(11187, dependencyMap.paths), obj2, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey =
  function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
    return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
  };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(
  verificationRole,
  guildId,
) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { role: verificationRole, guildId };
  const tmp2 = asyncRequire(11179, dependencyMap.paths);
  openLazy(tmp2, "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, obj);
};
