// discord_app/modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const Constants = fn(1085);
({ Permissions: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 88,
    padding: 16,
  },
  title: null,
  subtitle: null,
};
createStyles = {};
const merged = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }),
);
createStyles.textAlign = "center";
createStyles.title = createStyles;
createStyles.subtitle = { paddingBottom: 2, textAlign: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  let obj = guild(504);
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_ROLES, guild), items1);
  obj = { style: tmp.container, children: null };
  obj = { icon: onClose(9783), IconComponent: guild(9785).CalendarIcon };
  const items2 = [closure_7(onClose(8407), obj), , ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = guild(1114).intl;
  obj1.children = intl.string(guild(1114).t["WgZ+3D"]);
  items2[1] = closure_7(guild(4556).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1114).intl;
  obj2.children = intl2.string(guild(1114).t["v/S/PG"]);
  items2[2] = closure_7(guild(4556).Text, obj2);
  if (stateFromStores) {
    const obj3 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    const obj4 = {
      onClick() {
        onClose();
        GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
      },
    };
    obj3.children = intl3.format(tmp2(1114).t["K+DH2o"], obj4);
    stateFromStores = closure_7(tmp2(4556).Text, obj3);
  }
  items2[3] = stateFromStores;
  obj.children = items2;
  return closure_8(View, obj);
}
