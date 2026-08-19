// === Module 8882: toServerGuildProfile ===

// Module 8882 (toServerGuildProfile)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};