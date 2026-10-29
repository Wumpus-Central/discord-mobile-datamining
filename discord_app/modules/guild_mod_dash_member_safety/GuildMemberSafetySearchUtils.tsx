// === Module 7687: GuildMemberSafetySearchUtils ===

// Module 7687 (GuildMemberSafetySearchUtils)
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7688 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export function splitQuery(query) {
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
}