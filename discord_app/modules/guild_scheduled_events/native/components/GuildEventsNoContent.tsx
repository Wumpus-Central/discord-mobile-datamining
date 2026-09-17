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
const createStyles = fn(4640);
let obj2 = {
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
let obj3 = {};
const merged = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }),
);
obj3.textAlign = "center";
obj2.title = obj3;
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
  let stateFromStores = guild(504).useStateFromStores(
    items,
    () => PermissionStore.can(constants.MANAGE_ROLES, guild),
    items1,
  );
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { icon: null, IconComponent: null };
  const obj = guild(504);
  obj3.icon = onClose(9934);
  obj3.IconComponent = guild(9936).CalendarIcon;
  const items2 = [closure_7(onClose(8556), obj3), , ,];
  const obj4 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = guild(1115).intl;
  obj4.children = intl.string(guild(1115).t["WgZ+3D"]);
  items2[1] = closure_7(guild(4636).Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1115).intl;
  obj5.children = intl2.string(guild(1115).t["v/S/PG"]);
  items2[2] = closure_7(guild(4636).Text, obj5);
  if (stateFromStores) {
    const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp2(1115).intl;
    const obj7 = {
      onClick() {
        onClose();
        GuildSettingsActionCreatorsDefault.open(guild.id, GuildSettingsSections.ROLES);
      },
    };
    obj6.children = intl3.format(tmp2(1115).t["K+DH2o"], obj7);
    stateFromStores = closure_7(tmp2(4636).Text, obj6);
  }
  items2[3] = stateFromStores;
  obj2.children = items2;
  return closure_8(View, obj2);
}
