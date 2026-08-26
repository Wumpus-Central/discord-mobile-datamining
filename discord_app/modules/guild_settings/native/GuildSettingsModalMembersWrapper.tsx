// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
import canReviewGuildMemberApplications from "../../guild_member_verification/canReviewGuildMemberApplications.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16005 : 16007), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;