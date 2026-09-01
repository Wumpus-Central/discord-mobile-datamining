// discord_app/modules/guild_tag/GuildTagTypes.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
