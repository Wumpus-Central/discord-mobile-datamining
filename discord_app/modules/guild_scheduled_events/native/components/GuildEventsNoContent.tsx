// discord_app/modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/PermissionStore.tsx";
import { GuildSettingsSections } from "../../../../Constants.tsx";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

const require = arg1;
noopAll;
({ Permissions: closure_6, Fonts } = sum);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
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
createCacheKey = {};
const merged = Object.assign(
  importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, {
    marginBottom: 8,
  }),
);
createCacheKey.textAlign = "center";
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: 2, textAlign: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx",
);

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = callback2();
  let obj = guild(586);
  const items = [closure_4];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => closure_1_4.can(closure_1_6.MANAGE_ROLES, guild), items1);
  obj = { style: tmp.container, children: null };
  obj = { icon: onClose(9779), IconComponent: guild(9781).CalendarIcon };
  const items2 = [callback(onClose(8697), obj), , ,];
  obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = guild(1233).intl;
  obj1[4] = intl.string(guild(1233).t["WgZ+3D"]);
  items2[1] = callback(guild(4474).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1233).intl;
  obj2[3] = intl2.string(guild(1233).t["v/S/PG"]);
  items2[2] = callback(guild(4474).Text, obj2);
  if (stateFromStores) {
    const obj3 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj3[0] = tmp.subtitle;
    const intl3 = tmp2(1233).intl;
    const obj4 = { onClick: null };
    obj4[0] = function onClick() {
      onClose();
      onClose(closure_1_2[15]).open(guild.id, closure_1_5.ROLES);
    };
    obj3[3] = intl3.format(tmp2(1233).t["K+DH2o"], obj4);
    stateFromStores = callback(tmp2(4474).Text, obj3);
  }
  items2[3] = stateFromStores;
  obj[1] = items2;
  return closure_8(View, obj);
}
