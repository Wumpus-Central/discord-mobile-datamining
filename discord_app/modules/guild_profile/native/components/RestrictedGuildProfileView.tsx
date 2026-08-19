// === Module 9512: RestrictedGuildProfileView ===

// Module 9512 (RestrictedGuildProfileView)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4097 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import GuildIconSizes from "GuildIconSizes" /* 7188 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import GuildProfileBackground from "GuildProfileBackground" /* 9513 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default function RestrictedGuildProfileView() {
  let obj = GuildProfileBackground;
  const styles = obj.useStyles();
  obj1 = map;
  obj = { style: styles.container, children: null };
  const token = obj1.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner, start: null, end: null, colors: null };
  const tmp2 = useThemeDefault();
  obj[1] = GuildProfileBackground.DiagonalGradient.START;
  obj[2] = GuildProfileBackground.DiagonalGradient.END;
  let obj4 = GuildProfileBackground;
  obj[3] = obj4.getBackgroundForProfile(tmp2, token);
  const items = [callback(LinearGradientDefault, obj), , ];
  obj1 = { style: styles.header, children: null };
  const obj2 = { style: styles.avatarBackground, children: null };
  const obj3 = { size: null, value: "?", selected: false, textStyle: null };
  const tmp4 = LinearGradientDefault;
  obj3[0] = GuildIconSizes.GuildIconSizes.XXLARGE;
  obj3[3] = styles.restrictedAcronym;
  obj2[1] = callback(GuildIconSizesDefault, obj3);
  obj1[1] = callback(View, obj2);
  items[1] = callback(View, obj1);
  obj4 = { style: styles.body, children: null };
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj5[2] = intl.string(getSystemLocale.t.wZmueu);
  const items1 = [callback(Text.Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = getSystemLocale.intl;
  obj6[2] = intl2.string(getSystemLocale.t["8mfCqY"]);
  items1[1] = callback(Text.Text, obj6);
  obj4[1] = items1;
  items[2] = callback2(View, obj4);
  obj[1] = items;
  return callback2(View, obj);
};