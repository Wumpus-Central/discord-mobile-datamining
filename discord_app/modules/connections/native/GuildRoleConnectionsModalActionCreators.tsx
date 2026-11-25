// === Module 12002: GuildRoleConnectionsModalActionCreators ===

// Module 12002 (GuildRoleConnectionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  ModalActionCreatorsDefault.pushLazy(onClose(2119)(12003, dependencyMap.paths), {
    guildId: guildId.guildId,
    onClose: function handleClose() {
      ModalActionCreatorsDefault.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
      if (onClose != null) {
        onClose();
      }
    }
  }, ROLE_CONNECTIONS_MODAL_KEY);
}
export function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
export function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11994, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, { role: verificationRole, guildId });
}