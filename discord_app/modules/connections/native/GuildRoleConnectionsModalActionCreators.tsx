// === Module 11640: GuildRoleConnectionsModalActionCreators ===

// Module 11640 (GuildRoleConnectionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  const obj = {
    guildId: guildId.guildId,
    onClose() {
      ModalActionCreatorsDefault.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1896)(11641, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const obj = { role: verificationRole, guildId };
  obj.openLazy(asyncRequireImpl(11633, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, obj);
};