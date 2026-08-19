// === Module 15477: useSubmittedGuildJoinRequestTotal ===

// Module 15477 (useSubmittedGuildJoinRequestTotal)
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal" /* 7428 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return guildId(589).useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = closure_1_2.getSubmittedGuildJoinRequestTotal(tmp);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
};