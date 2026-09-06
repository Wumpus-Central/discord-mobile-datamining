// discord_app/modules/guild_templates/createResolvedGuildTemplate.tsx
import GuildTemplatesConstants from "GuildTemplatesConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const result = size.fileFinishedImporting("modules/guild_templates/createResolvedGuildTemplate.tsx");

export default function createResolvedGuildTemplate(code) {
  const obj = {
    code: code.code,
    state: GuildTemplateStates.RESOLVED,
    name: code.name,
    description: null,
    creatorId: null,
    creator: null,
    createdAt: null,
    updatedAt: null,
    sourceGuildId: null,
    serializedSourceGuild: null,
    usageCount: null,
    isDirty: null,
  };
  let str = code.description;
  if (str == null) {
    str = "";
  }
  obj.description = str;
  ({
    creator_id: obj.creatorId,
    creator: obj.creator,
    created_at: obj.createdAt,
    updated_at: obj.updatedAt,
    source_guild_id: obj.sourceGuildId,
    serialized_source_guild: obj.serializedSourceGuild,
    usage_count: obj.usageCount,
    is_dirty: obj.isDirty,
  } = code);
  return obj;
}
