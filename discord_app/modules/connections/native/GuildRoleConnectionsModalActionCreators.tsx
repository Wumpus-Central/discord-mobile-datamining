// discord_app/modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey(outer1_3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1959)(10957, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(id, guildId) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { role: id, guildId };
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10949, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + id.id, obj);
};