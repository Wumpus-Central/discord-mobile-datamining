// discord_app/modules/guild_moderation/native/BanConfirmModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = importDefault(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban", title: null, render: null };
  const intl = require(onGoBack[4]).intl;
  obj[1] = intl.string(require(onGoBack[4]).t.R3QeLQ);
  obj[2] = function render() {
    return jsx(importDefault(onGoBack[5]), { onBan: onGoBack, guildId: closure_0, userId: closure_1 });
  };
  return jsx(importDefault(onGoBack[3]), { screenKey: "ban", title: null, render: null });
};