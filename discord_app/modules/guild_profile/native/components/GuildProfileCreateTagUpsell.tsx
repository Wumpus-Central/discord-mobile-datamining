// === Module 14688: GuildProfileCreateTagUpsell ===

// Module 14688 (GuildProfileCreateTagUpsell)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14692 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_5 = createStyles.createStyles({ upsell: { minHeight: 44, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCreateTagUpsell.tsx");

export default function GuildProfileCreateTagUpsell(guildId) {
  guildId = guildId.guildId;
  let creatableGuilds;
  const tmp = closure_5();
  const guildTagCreationUpsell = guildId(14689).useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14691));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  let tmp5 = null;
  if (guildTagCreationUpsell.isUpsellVisible) {
    const obj2 = {
      style: tmp.upsell,
      role: "button",
      onPress: function handlePress() {
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
          openGuildTagCreateFlowDefault(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
        },
      children: null
    };
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1114).intl;
    obj3.children = intl.string(tmp2(1114).t.J0YWRq);
    obj2.children = jsx(tmp2(5619).Text, { variant: "text-md/medium", color: "text-muted", children: null });
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      openGuildTagCreateFlowDefault(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
};