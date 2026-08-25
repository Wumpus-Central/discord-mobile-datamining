// === Module 11129: openGuildRoleConnectionsModal ===

// Module 11129 (openGuildRoleConnectionsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import _modDef4611 from "module_4611" /* 4611 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = _modDef4611;
  obj = {
    guildId: guildId.guildId,
    onClose() {
      closure_1_1(closure_1_2[0]).popWithKey(closure_1_3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(2009)(11130, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(id, guildId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { role: id, guildId };
  obj.openLazy(asyncRequireImpl(11122, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + id.id, obj);
};