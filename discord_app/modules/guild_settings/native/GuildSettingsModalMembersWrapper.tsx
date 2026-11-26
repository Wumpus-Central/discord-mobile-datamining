// === Module 20092: GuildSettingsModalMembersWrapper ===

// Module 20092 (GuildSettingsModalMembersWrapper)
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7621 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 18427 : 18429), { guildId });
});