// === Module 14956: GuildProfileCreateTagUpsell ===

// Module 14956 (GuildProfileCreateTagUpsell)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7490 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14960 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_5 = createStyles.createStyles({ upsell: { minHeight: 44, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCreateTagUpsell.tsx");

export default function GuildProfileCreateTagUpsell(guildId) {
  guildId = guildId.guildId;
  let creatableGuilds;
  const tmp = closure_5();
  const guildTagCreationUpsell = guildId(14957).useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14959));
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
    const obj3 = { variant: "body-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1113).intl;
    obj3.children = intl.string(tmp2(1113).t.J0YWRq);
    obj2.children = jsx(tmp2(5763).Text, { variant: "body-md/medium", color: "text-muted", children: null });
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      openGuildTagCreateFlowDefault(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
};