// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((item, index) => item.trim());
  const items = [];
  const items1 = [];
  const item = mapped.forEach((item, index) => {
    if (obj.isSnowflake(item)) {
      items.push(item);
    } else {
      items1.push(item);
    }
    obj = items(items1[0]);
  });
  const items2 = [items1, items];
  return items2;
};