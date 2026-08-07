// discord_app/modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx
import "noop";
import { View } from "get ActivityIndicator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { GuildSettingsSections } from "ME";
import sum from "sum";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let Fonts;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Permissions: closure_6, Fonts } = sum);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 88, padding: 16 }, title: null, subtitle: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
createCacheKey.textAlign = "center";
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: 2, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = createCacheKey();
  let obj = guild(589);
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_6.MANAGE_ROLES, guild), items1);
  obj = { style: tmp.container, children: null };
  obj = { icon: null, IconComponent: null };
  obj[0] = onClose(8983);
  obj[1] = guild(8984).CalendarIcon;
  const items2 = [callback(onClose(7727), obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guild(1236).intl;
  obj1[4] = intl.string(guild(1236).t["WgZ+3D"]);
  items2[1] = callback(guild(4298).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = guild(1236).intl;
  obj2[3] = intl2.string(guild(1236).t["v/S/PG"]);
  items2[2] = callback(guild(4298).Text, obj2);
  if (stateFromStores) {
    const obj3 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj3[0] = tmp.subtitle;
    const intl3 = tmp2(1236).intl;
    const obj4 = { onClick: null };
    obj4[0] = function onClick() {
      onClose();
      onClose(outer1_2[15]).open(guild.id, outer1_5.ROLES);
    };
    obj3[3] = intl3.format(tmp2(1236).t["K+DH2o"], obj4);
    stateFromStores = callback(tmp2(4298).Text, obj3);
  }
  items2[3] = stateFromStores;
  obj[1] = items2;
  return closure_8(View, obj);
};