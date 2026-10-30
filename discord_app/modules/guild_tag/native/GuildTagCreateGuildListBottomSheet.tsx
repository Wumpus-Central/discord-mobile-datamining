// === Module 14693: GuildTagCreateGuildListBottomSheet ===

// Module 14693 (GuildTagCreateGuildListBottomSheet)
import util from "util" /* 1114 */;
import Powerups from "Powerups" /* 5228 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7315 */;
import ActionSheet from "ActionSheet" /* 7360 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14005 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;

require = fn;
function GuildRow(guild) {
  guild = guild.guild;
  const analyticsLocation = guild.analyticsLocation;
  const items = [GuildMemberCountStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild.id));
  let obj2 = { label: guild.name, subLabel: null, icon: null, arrow: true, onPress: null };
  let formatToPlainStringResult = null;
  if (null != stateFromStores) {
    const intl = tmp(1114).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.zRl6XR, obj3);
  }
  obj2.subLabel = formatToPlainStringResult;
  const obj4 = { guild, size: null };
  let obj = guild(504);
  obj4.size = guild(6951).GuildIconSizes.SMALL_32;
  obj2.icon = closure_4(analyticsLocation(6951), obj4);
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = { guildId: guild.id, autoOpenPerkId: null, analyticsLocation: null };
    obj2.autoOpenPerkId = Powerups.GUILD_POWERUP_TAG_SKU_ID;
    obj2.analyticsLocation = analyticsLocation;
    openGuildPowerupsModalDefault(obj2);
  };
  return closure_4(guild(6969).TableRow, obj2);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default function GuildTagCreateGuildListBottomSheet(arg0) {
  ({ guilds, analyticsLocation: require } = arg0);
  const obj = { children: null };
  const obj2 = { title: null, subtitle: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.xO5QzM);
  const intl2 = util.intl;
  obj2.subtitle = intl2.string(util.t["h+7Yx3"]);
  const items = [closure_4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), closure_4(TableRowGroup.TableRowGroup, { hasIcons: true, children: guilds.map((guild) => React4(GuildRow, { guild, analyticsLocation }, guild.id)) })];
  obj.children = items;
  return closure_5(ActionSheet.ActionSheet, obj);
};