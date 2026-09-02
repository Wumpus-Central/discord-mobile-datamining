// === Module 12994: GuildDiscoveryPreviewElement ===

// Module 12994 (GuildDiscoveryPreviewElement)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1425 */;
import hexToRgba from "hexToRgba" /* 4326 */;
import Text from "Text" /* 4474 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6012 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, itemContainer: null, guildInfo: null, guildName: null, guildIcon: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { lineHeight: 18, marginStart: 8 };
let obj1 = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
createCacheKey[6] = { borderRadius: ThemesDefault.radii.xs, width: 18, height: 18 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: ThemesDefault.radii.xs, width: 18, height: 18 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = hexToRgba;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.nTe4HC);
  const items1 = [callback(Text.Text, obj), ];
  obj1 = { style: items2, children: null };
  items2 = [tmp.itemContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  const obj2 = { style: tmp.guildInfo, children: null };
  const obj3 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp4 = GuildIconSizesDefault;
  obj3[1] = fromGuildPropertiesWithAdditionalFields.fromClientDiscoverableGuild(guild);
  obj3[2] = !stateFromStores;
  const items3 = [callback(tmp4, obj3), callback(Text.Text, { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name })];
  obj2[1] = items3;
  obj1[1] = callback2(View, obj2);
  items1[1] = callback(View, obj1);
  obj[1] = items1;
  return callback2(View, obj);
};