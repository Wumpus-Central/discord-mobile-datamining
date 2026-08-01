// === Module 12418: GuildPreview ===

// Module 12418 (GuildPreview)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, guildContainer: null, guildInfo: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 12 };
createCacheKey[4] = { marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 12 };
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = createCacheKey();
  let obj = require(4037) /* hexToRgba */;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["0ox7Hq"]).toUpperCase();
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  const obj1 = { style: items1, children: null };
  items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = { size: null, guild: null };
  const str = intl.string(require(1236) /* getSystemLocale */.t["0ox7Hq"]);
  obj2[0] = require(5570) /* GuildIconSizes */.GuildIconSizes.LARGE;
  obj2[1] = guild;
  const items2 = [callback(importDefault(5570), obj2), callback(require(4189) /* Text */.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj1[1] = items2;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};