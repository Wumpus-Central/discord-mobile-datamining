// === Module 11389: openGuildRoleConnectionsModal ===

// Module 11389 (openGuildRoleConnectionsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef4723 from "module_4723" /* 4723 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = _modDef4723;
  obj = {
    guildId: guildId.guildId,
    onClose() {
      closure_1_1(closure_1_2[0]).popWithKey(closure_1_3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(2008)(11390, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(id, guildId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { role: id, guildId };
  obj.openLazy(asyncRequireImpl(11382, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + id.id, obj);
};