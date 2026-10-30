// discord_app/modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  ModalActionCreatorsDefault.pushLazy(
    onClose(1995)(11562, dependencyMap.paths),
    {
      guildId: guildId.guildId,
      onClose: function handleClose() {
        ModalActionCreatorsDefault.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
        if (onClose != null) {
          onClose();
        }
      },
    },
    ROLE_CONNECTIONS_MODAL_KEY,
  );
}
export function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
export function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(
    asyncRequireImpl(11553, dependencyMap.paths),
    "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id,
    { role: verificationRole, guildId },
  );
}
