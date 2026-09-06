// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
import canReviewGuildMemberApplications from "../../guild_member_verification/canReviewGuildMemberApplications.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(
    importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16569 : 16571),
    { guildId },
  );
});
