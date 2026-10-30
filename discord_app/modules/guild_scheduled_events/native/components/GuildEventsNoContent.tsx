// === Module 9075: GuildEventsNoContent ===

// Module 9075 (GuildEventsNoContent)
import nativeDefault from "native" /* 575 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import TextStyles from "TextStyles" /* 6717 */;

const require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1072).GuildSettingsSections;
const Constants = fn(1083);
({ Permissions: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_80 }, title: null, subtitle: null };
let obj4 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
obj4.textAlign = "center";
obj2.title = obj4;
obj2.subtitle = { paddingBottom: 2, textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = guild(504).useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_ROLES, guild), items1);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guild(1114).intl;
  obj3.children = intl.string(guild(1114).t["WgZ+3D"]);
  const items2 = [closure_7(guild(5619).Text, obj3), , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1114).intl;
  obj4.children = intl2.string(guild(1114).t["v/S/PG"]);
  items2[1] = closure_7(guild(5619).Text, obj4);
  if (stateFromStores) {
    const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    const obj6 = {
      onClick() {
          onClose();
          GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    obj5.children = intl3.format(tmp2(1114).t["K+DH2o"], obj6);
    stateFromStores = closure_7(tmp2(5619).Text, obj5);
  }
  items2[2] = stateFromStores;
  obj2.children = items2;
  return closure_8(View, obj2);
};