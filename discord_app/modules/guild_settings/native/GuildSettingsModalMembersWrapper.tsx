// === Module 20028: GuildSettingsModalMembersWrapper ===

// Module 20028 (GuildSettingsModalMembersWrapper)
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7590 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo(function GuildSettingsModalMembersWrapper(guildId) {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 18368 : 18370), { guildId });
});