// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((str) => str.trim());
  const items = [];
  const items1 = [];
  const item = mapped.forEach((text) => {
    if (obj.isSnowflake(text)) {
      items.push(text);
    } else {
      items1.push(text);
    }
  });
  const items2 = [items1, items];
  return items2;
};