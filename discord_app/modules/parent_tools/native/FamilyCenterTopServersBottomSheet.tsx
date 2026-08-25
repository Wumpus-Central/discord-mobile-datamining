// === Module 14353: GuildRow ===

// Module 14353 (GuildRow)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2337 */;
import Text from "Text" /* 4376 */;
import ActionSheet from "ActionSheet" /* 5870 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5873 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5885 */;
import closure_3 from "freshTeenActivityWithMap" /* 7143 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  let obj = guildActivity(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(7199).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = stateFromStores.name;
    obj[1] = topUserOrGuildDescription;
    obj = { guild: null, style: null };
    obj[0] = stateFromStores;
    obj[1] = tmp.guildIcon;
    obj[2] = callback(GuildIconSizesDefault, obj);
    return callback(tmp2(5480).TableRow, obj);
  }
  tmp = callback3();
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: { textAlign: "center" }, guildIcon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.md, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.Lq9Set);
  const items = [callback(Text.Text, obj), ];
  obj = { hasIcons: true, children: topGuildActivities.map((guildActivity) => callback(closure_7, { guildActivity }, guildActivity.guild_id)) };
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};