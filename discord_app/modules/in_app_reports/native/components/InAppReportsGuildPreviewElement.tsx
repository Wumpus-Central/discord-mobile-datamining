// discord_app/modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIconSizes from "../../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, guildContainer: null, guildInfo: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 12 };
createCacheKey[4] = { marginLeft: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 12 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = hexToRgba;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = getSystemLocale.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj[3] = intl.string(getSystemLocale.t["0ox7Hq"]).toUpperCase();
  const items = [callback(Text.Text, obj), ];
  obj1 = { style: items1, children: null };
  items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = { size: null, guild: null };
  const str = intl.string(getSystemLocale.t["0ox7Hq"]);
  obj2[0] = GuildIconSizes.GuildIconSizes.LARGE;
  obj2[1] = guild;
  const items2 = [callback(GuildIconSizesDefault, obj2), callback(Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj1[1] = items2;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};