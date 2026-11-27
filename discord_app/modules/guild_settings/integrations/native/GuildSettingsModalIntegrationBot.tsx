// === Module 20090: GuildSettingsModalIntegrationBot ===

// Module 20090 (GuildSettingsModalIntegrationBot)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import Card from "Card" /* 6145 */;
import RobotIcon from "RobotIcon" /* 12278 */;
import GuildSettingsModalIntegrationEmptyCardDefault from "GuildSettingsModalIntegrationEmptyCard" /* 20005 */;
import IntegrationAppUtils from "IntegrationAppUtils" /* 20007 */;
import GuildSettingsModalIntegrationSectionTitleDefault from "GuildSettingsModalIntegrationSectionTitle" /* 20073 */;
import useIntegrationBotDefault from "useIntegrationBot" /* 20091 */;
import noop from "module_19" /* 19 */;

require = fn;
function BotDetails(arg0) {
  ({ guild, application } = arg0);
  const tmp = closure_6();
  importDefault = application(1501).useNavigation();
  const tmp5 = useIntegrationBotDefault(guild, application);
  if (null == tmp5) {
    return null;
  } else {
    ({ bot, roleIds } = tmp5);
    ({ member, grantedPermissions } = tmp5);
    const obj2 = { spacing: tmp4(575).space.PX_16, children: null };
    const obj3 = { direction: "horizontal", align: "center", spacing: tmp4(575).space.PX_8, children: null };
    const obj4 = { source: null, style: null };
    const tmp4Result = tmp4(5730);
    const obj5 = { id: application.id, guildMember: member, bot: null, icon: null, size: 24 };
    ({ bot: obj12.bot, icon: obj12.icon } = application);
    obj4.source = tmp4(1413).getApplicationIconSource(obj5);
    obj4.style = tmp.avatar;
    items = [closure_4(tmp4Result, obj4), , ];
    const obj6 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp.botName, children: null };
    const intl4 = application(1112).intl;
    const obj7 = { user: bot.toString() };
    obj6.children = intl4.formatToPlainString(application(1112).t.GyhzGw, obj7);
    items[1] = closure_4(application(5634).Text, obj6);
    const obj8 = { verified: null };
    const tmp4Result3 = tmp4(1413);
    obj8.verified = bot.isVerifiedBot();
    items[2] = closure_4(tmp4(8633), obj8);
    obj3.children = items;
    const items1 = [closure_5(application(6115).Stack, obj3), , ];
    let tmp7Result = null;
    if (roleIds.length > 0) {
      const obj9 = { spacing: tmp4(575).space.PX_8, children: null };
      const obj10 = { variant: "heading-xs/semibold", color: "text-strong", children: null };
      const intl = application(1112).intl;
      const obj11 = { numRoles: roleIds.length };
      obj10.children = intl.formatToPlainString(application(1112).t.PCs0oo, obj11);
      const items2 = [closure_4(application(5634).Text, obj10), ];
      const obj13 = { guildId: guild.id, guildMemberRoleIds: roleIds };
      items2[1] = closure_4(application(7535).RolesList, obj13);
      obj9.children = items2;
      tmp7Result = closure_5(application(6115).Stack, obj9);
    }
    items1[1] = tmp7Result;
    const obj14 = { label: null, subLabel: null, arrow: true, start: true, end: true, onPress: null };
    const intl2 = application(1112).intl;
    obj14.label = intl2.string(application(1112).t.xrmhRX);
    const intl3 = application(1112).intl;
    const obj15 = { count: grantedPermissions.length };
    obj14.subLabel = intl3.formatToPlainString(application(1112).t.WABWEC, obj15);
    obj14.onPress = function onPress() {
      return closure_1.push(GuildSettingsSections.INTEGRATION_BOT_PERMISSIONS, { applicationId: application.id });
    };
    items1[2] = closure_4(application(6144).TableRow, obj14);
    obj2.children = items1;
    return closure_5(application(6115).Stack, obj2);
  }
  const obj = application(1501);
}
const GuildSettingsSections = fn(1071).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = { avatar: null, botName: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.round };
obj2.avatar = size;
obj2.botName = { flexShrink: 1 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationBot.tsx");

export default function GuildSettingsModalIntegrationBot(application) {
  application = application.application;
  if (null == application.bot) {
    return null;
  } else {
    const obj2 = { spacing: nativeDefault.space.PX_8, children: null };
    const obj3 = { icon: null, title: null };
    const integrationHasBotResult = IntegrationAppUtils.integrationHasBot(application, tmp2);
    obj3.icon = RobotIcon.RobotIcon;
    const intl2 = util.intl;
    obj3.title = intl2.string(util.t.AOdOYr);
    items = [React4(GuildSettingsModalIntegrationSectionTitleDefault, obj3), ];
    if (integrationHasBotResult) {
      const obj5 = { children: null };
      const obj6 = { guild: tmp, application };
      obj5.children = React4(BotDetails, obj6);
      let tmp11Result = React4(Card.Card, obj5);
    } else {
      const obj = { text: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.pfLnza);
      tmp11Result = React4(GuildSettingsModalIntegrationEmptyCardDefault, obj);
      const tmp10Result = GuildSettingsModalIntegrationEmptyCardDefault;
    }
    items[1] = tmp11Result;
    obj2.children = items;
    return hasOwnProperty(Stack_Stack.Stack, obj2);
  }
};