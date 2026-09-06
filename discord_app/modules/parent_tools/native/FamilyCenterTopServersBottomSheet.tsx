// === Module 14898: FamilyCenterTopServersBottomSheet ===

// Module 14898 (FamilyCenterTopServersBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  let obj = guildActivity(504);
  const items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(7593).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: null };
    obj = { guild: stateFromStores, style: tmp.guildIcon };
    obj.icon = closure_4(GuildIconDefault, obj);
    return closure_4(tmp2(5605).TableRow, obj);
  }
  tmp = closure_6();
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { header: { textAlign: "center" }, guildIcon: null };
createStyles = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.guildIcon = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef2396.Lq9Set);
  const items = [React4(Text_Text.Text, obj), ];
  obj = { hasIcons: true, children: topGuildActivities.map((guildActivity) => closure_1_4(GuildRow, { guildActivity }, guildActivity.guild_id)) };
  items[1] = React4(TableRowGroup.TableRowGroup, obj);
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};