// === Module 5244: splitQuery ===

// Module 5244 (splitQuery)
import obj132 from "obj132" /* 2 */;

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