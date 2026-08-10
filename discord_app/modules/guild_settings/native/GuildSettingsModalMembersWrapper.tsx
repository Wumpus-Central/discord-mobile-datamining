// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { canReviewGuildMemberApplications } from "../../guild_member_verification/canReviewGuildMemberApplications.tsx";

const require = arg1;
const memoResult = require("noop").memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 15684 : 15686), { guildId });
});
const result = require("canReviewGuildMemberApplications").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;