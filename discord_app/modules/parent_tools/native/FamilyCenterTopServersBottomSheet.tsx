// === Module 14410: FamilyCenterTopServersBottomSheet ===

// Module 14410 (FamilyCenterTopServersBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2486 from "module_2486" /* 2486 */;
import Text_Text from "Text/Text" /* 4825 */;
import GuildIconDefault from "GuildIcon" /* 5891 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import ActionSheet from "ActionSheet" /* 6613 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6952 */;

require = fn;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  const tmp = closure_6();
  const items = [FamilyCenterStore];
  const stateFromStores = guildActivity(504).useStateFromStores(items, () => FamilyCenterStore.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(7007).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: null };
    const obj3 = { guild: stateFromStores, style: tmp.guildIcon };
    obj2.icon = closure_4(GuildIconDefault, obj3);
    return closure_4(tmp2(5912).TableRow, obj2);
  }
  const obj = guildActivity(504);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { header: { textAlign: "center" }, guildIcon: { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  const obj = { children: null };
  const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2486.Lq9Set);
  const items = [React4(Text_Text.Text, obj2), ];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, { hasIcons: true, children: topGuildActivities.map((guildActivity) => closure_1_4(GuildRow, { guildActivity }, guildActivity.guild_id)) });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};