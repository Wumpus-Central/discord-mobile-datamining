// discord_app/modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2484 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  const tmp = closure_6();
  const items = [FamilyCenterStore];
  const stateFromStores = guildActivity(504).useStateFromStores(items, () =>
    FamilyCenterStore.getGuild(guildActivity.guild_id),
  );
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(7920).getTopUserOrGuildDescription(
      guildActivity.messages_sent,
      guildActivity.call_count,
    );
    const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: null };
    const obj3 = { guild: stateFromStores, style: tmp.guildIcon };
    obj2.icon = closure_4(GuildIconDefault, obj3);
    return closure_4(tmp2(5908).TableRow, obj2);
  }
  const obj = guildActivity(504);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  header: { textAlign: "center" },
  guildIcon: {
    borderRadius: nativeDefault.radii.md,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  const obj = { children: null };
  const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2484.Lq9Set);
  const items = [React4(Text_Text.Text, obj2)];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: topGuildActivities.map((guildActivity) =>
      closure_1_4(GuildRow, { guildActivity }, guildActivity.guild_id),
    ),
  });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
