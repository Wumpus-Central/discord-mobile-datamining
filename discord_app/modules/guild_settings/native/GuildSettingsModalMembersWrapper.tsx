// === Module 16870: ? ===

// Module 16870
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7230 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 15825 : 15827), { guildId });
});
const result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;