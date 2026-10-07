// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx
import ApplicationCommandUtils from "../application_commands/ApplicationCommandUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((item) => item.trim());
  const items = [];
  const items1 = [];
  const item = mapped.forEach((item) => {
    if (obj.isSnowflake(item)) {
      items.push(item);
    } else {
      items1.push(item);
    }
    obj = ApplicationCommandUtils;
  });
  const items2 = [items1, items];
  return items2;
};
