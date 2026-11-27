// === Module 20095: GuildSettingsModalIntegrationBotPermissions ===

// Module 20095 (GuildSettingsModalIntegrationBotPermissions)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import GuildSettingsModalIntegrationPermissionListDefault from "GuildSettingsModalIntegrationPermissionList" /* 20087 */;
import useIntegrationBotDefault from "useIntegrationBot" /* 20091 */;
import noop from "module_19" /* 19 */;

require = fn;
function BotPermissions(guild) {
  guild = guild.guild;
  const tmp3 = useIntegrationBotDefault(guild, guild.application);
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { children: null };
    const obj2 = { title: null, guild: null, permissions: null, granted: true };
    const intl = util.intl;
    obj2.title = intl.string(util.t["hA4+su"]);
    obj2.guild = guild;
    obj2.permissions = tmp3.grantedPermissions;
    items = [React4(GuildSettingsModalIntegrationPermissionListDefault, obj2), ];
    const obj3 = { title: null, guild: null, permissions: null, granted: false };
    const tmpResult = GuildSettingsModalIntegrationPermissionListDefault;
    const intl2 = util.intl;
    obj3.title = intl2.string(util.t["/rEZ2i"]);
    obj3.guild = guild;
    obj3.permissions = tmp3.deniedPermissions;
    items[1] = React4(GuildSettingsModalIntegrationPermissionListDefault, obj3);
    obj.children = items;
    tmp4 = timestampProducer(hasOwnProperty, obj);
    const tmpResult2 = GuildSettingsModalIntegrationPermissionListDefault;
  }
  return tmp4;
}
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { form: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, formContent: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.formContent = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationBotPermissions.tsx");

export default function GuildSettingsModalIntegrationBotPermissions(arg0) {
  let navigation;
  let name;
  ({ contentContainerStyle, applicationId } = arg0);
  const tmp = closure_7();
  navigation = navigation(1501).useNavigation();
  let obj = navigation(1501);
  const tmp5 = name;
  ({ guild, integration } = name(20065)(applicationId));
  let application;
  if (integration != null) {
    application = integration.application;
  }
  name = undefined;
  if (application != null) {
    name = application.name;
  }
  items = [name, navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = navigation(1112).intl;
        obj.title = intl.string(navigation(1112).t.xrmhRX);
        obj.subtitle = subtitle;
        return closure_2_4(navigation(7191).NavigatorHeader, obj);
      }
    });
  }, items);
  let tmp10 = null;
  if (null != guild) {
    tmp10 = null;
    if (null != application) {
      const obj2 = { children: null };
      const obj3 = { style: tmp.form, contentContainerStyle: null, children: null };
      const items1 = [tmp.formContent, contentContainerStyle];
      obj3.contentContainerStyle = items1;
      const obj4 = { spacing: tmp5(575).space.PX_24, children: null };
      const obj5 = { guild, application };
      obj4.children = closure_4(BotPermissions, obj5);
      obj3.children = closure_4(tmp2(6115).Stack, obj4);
      const items2 = [closure_4(tmp2(8088).Form, obj3), closure_4(tmp2(5617).NavScrim, {})];
      obj2.children = items2;
      tmp10 = closure_6(closure_5, obj2);
    }
  }
  return tmp10;
};