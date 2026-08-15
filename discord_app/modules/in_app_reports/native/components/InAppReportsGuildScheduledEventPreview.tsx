// discord_app/modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { GuildIconSizes } from "../../../guild/native/GuildIcon.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, itemContainer: null, guildInfo: null, guildName: null, eventName: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { lineHeight: 18, marginStart: 8 };
createCacheKey[6] = { lineHeight: 20, marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 8 };
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default function GuildScheduledEventPreview(event) {
  event = event.event;
  const tmp = createCacheKey();
  let obj = event(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const tmp2Result = tmp2(4223);
    obj = { style: null, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    obj[0] = tmp.title;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.SDTOL7);
    const items1 = [callback(tmp2(4734).Text, obj), ];
    const obj1 = { style: null, children: null };
    const items2 = [tmp.itemContainer, ];
    const obj2 = { borderColor: null };
    obj2[0] = tmp2(4223).hexWithOpacity(tmp.borderColor.color, 0.08);
    items2[1] = obj2;
    obj1[0] = items2;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.guildInfo;
    const obj4 = { guild: null, size: null, selected: false };
    obj4[0] = stateFromStores;
    const hexWithOpacityResult = tmp2(4223).hexWithOpacity(tmp.borderColor.color, 0.08);
    obj4[1] = tmp2(7188).GuildIconSizes.XXSMALL;
    const items3 = [callback(GuildIconSizes, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj5[0] = tmp.guildName;
    obj5[3] = stateFromStores.name;
    items3[1] = callback(tmp2(4734).Text, obj5);
    obj3[1] = items3;
    const items4 = [callback2(View, obj3), ];
    const obj6 = { style: null, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    obj6[0] = tmp.eventName;
    obj6[3] = event.name;
    items4[1] = callback(tmp2(4734).Text, obj6);
    obj1[1] = items4;
    items1[1] = callback2(View, obj1);
    obj[1] = items1;
    return callback2(View, obj);
  }
};