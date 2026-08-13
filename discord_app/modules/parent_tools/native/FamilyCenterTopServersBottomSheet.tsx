// discord_app/modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { TableRowGroupTitle } from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { GuildIconSizes } from "../../guild/native/GuildIcon.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";

let c4;
let c5;
const require = arg1;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  let obj = guildActivity(589);
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(7100).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = stateFromStores.name;
    obj[1] = topUserOrGuildDescription;
    obj = { guild: null, style: null };
    obj[0] = stateFromStores;
    obj[1] = tmp.guildIcon;
    obj[2] = callback(GuildIconSizes, obj);
    return callback(tmp2(5414).TableRow, obj);
  }
  tmp = createCacheKey();
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: { textAlign: "center" }, guildIcon: null };
createCacheKey = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: createCacheKey().header, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxy.Lq9Set);
  const items = [callback(Text.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topGuildActivities.map((guildActivity) => callback(closure_7, { guildActivity }, guildActivity.guild_id));
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};