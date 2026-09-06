// discord_app/modules/guild_moderation/native/KickConfirmModal.tsx
import KickConfirmDefault from "KickConfirm.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick", title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.R3QeLQ);
  obj.render = function render() {
    return jsx(KickConfirmDefault, { onKick: onGoBack, guildId, userId });
  };
  return jsx(require("ModalStackNavigator"), { screenKey: "kick", title: null, render: null });
}
