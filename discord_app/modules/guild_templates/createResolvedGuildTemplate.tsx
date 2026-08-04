// discord_app/modules/guild_templates/createResolvedGuildTemplate.tsx
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";

const result = require("set").fileFinishedImporting("modules/guild_templates/createResolvedGuildTemplate.tsx");

export default function createResolvedGuildTemplate(code) {
  const obj = { code: code.code, state: GuildTemplateStates.RESOLVED, name: code.name, description: null, creatorId: null, creator: null, createdAt: null, updatedAt: null, sourceGuildId: null, serializedSourceGuild: null, usageCount: null, isDirty: null };
  let str = code.description;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  ({ creator_id: obj[4], creator: obj[5], created_at: obj[6], updated_at: obj[7], source_guild_id: obj[8], serialized_source_guild: obj[9], usage_count: obj[10], is_dirty: obj[11] } = code);
  return obj;
};