// === Module 13947: GuildProfileCreateTagUpsell ===

// Module 13947 (GuildProfileCreateTagUpsell)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7155 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 13951 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5191);
let closure_5 = createStyles.createStyles({ upsell: { minHeight: 44, alignItems: "center", justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCreateTagUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileCreateTagUpsell(guildId) {
  const cResult = guildId(576).c(7);
  guildId = guildId.guildId;
  const tmp4 = closure_5();
  let obj = guildId(576);
  const guildTagCreationUpsell = guildId(13948).useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(13950));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  if (guildTagCreationUpsell.isUpsellVisible) {
    if (cResult[0] === creatableGuilds) {
      if (cResult[1] === guildId) {
        let tmp7 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl = tmp(1128).intl;
        obj3.children = intl.string(tmp(1128).t.J0YWRq);
        const tmp11 = jsx(tmp(5187).Text, { variant: "text-md/medium", color: "text-muted", children: null });
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp4.upsell) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj4 = { style: tmp4.upsell, role: "button", onPress: tmp7, children: tmp9 };
      const tmp15 = <Pressable style={tmp4.upsell} role="button" onPress={tmp7}>{tmp9}</Pressable>;
      cResult[4] = tmp7;
      cResult[5] = tmp4.upsell;
      cResult[6] = tmp15;
      tmp12 = tmp15;
    }
    function handlePress() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      openGuildTagCreateFlowDefault(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }
    cResult[0] = creatableGuilds;
    cResult[1] = guildId;
    cResult[2] = handlePress;
    tmp7 = handlePress;
  } else {
    return null;
  }
  const obj2 = guildId(13948);
}) : (function GuildProfileCreateTagUpsell(guildId) {
  guildId = guildId.guildId;
  let creatableGuilds;
  const tmp = closure_5();
  const guildTagCreationUpsell = guildId(13948).useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(13950));
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
    const intl = tmp2(1128).intl;
    obj3.children = intl.string(tmp2(1128).t.J0YWRq);
    obj2.children = jsx(tmp2(5187).Text, { variant: "text-md/medium", color: "text-muted", children: null });
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      openGuildTagCreateFlowDefault(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
});