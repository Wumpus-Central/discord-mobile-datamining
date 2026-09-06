// === Module 16303: isGuildsBarGuildLabelEqual ===

// Module 16303 (isGuildsBarGuildLabelEqual)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx");

export default function isGuildsBarGuildLabelEqual(count, count2) {
  let tmp = count.count === count2.count;
  if (tmp) {
    let tmp2 = count.names.length === count2.names.length;
    if (tmp2) {
      const names = count.names;
      const names2 = count2.names;
      const joined = names.join("|");
      tmp2 = joined === names2.join("|");
    }
    tmp = tmp2;
  }
  return tmp;
};