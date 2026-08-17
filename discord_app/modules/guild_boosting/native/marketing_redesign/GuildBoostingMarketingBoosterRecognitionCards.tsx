// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import BoostGemIcon from "BoostGemIcon" /* 7979 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8859 */;
import HeartIcon from "HeartIcon" /* 9183 */;
import BoostTier3Icon from "BoostTier3Icon" /* 12956 */;
import registerAssetDefault from "registerAsset" /* 13029 */;
import registerAssetDefault2 from "registerAsset" /* 13030 */;
import registerAssetDefault3 from "registerAsset" /* 13031 */;
import registerAssetDefault4 from "registerAsset" /* 13032 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function Card(arg0) {
  const tmp = callback3();
  let obj = { style: tmp.card, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "lg", color: ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  ({ IconComponent, children } = arg0);
  obj[1] = callback(IconComponent, obj);
  const items = [callback(View, obj), callback(Text.Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj[1] = items;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { card: null, description: null, iconContainer: null };
createCacheKey = { minHeight: 124, width: 172, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { height: 30, marginBottom: 10 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_8 = createCacheKey.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = callback4();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.IzKs3o);
  const items = [callback(Text.Heading, obj), ];
  obj = { style: tmp.recognitionCardsContainer, children: null };
  obj1 = { icon: registerAssetDefault, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.string(getSystemLocale.t.TZigSO);
  const items1 = [callback(Card, obj1), , , ];
  const obj2 = { icon: registerAssetDefault2, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
  const intl3 = getSystemLocale.intl;
  obj2[2] = intl3.string(getSystemLocale.t.hjQuV2);
  items1[1] = callback(Card, obj2);
  const obj3 = { icon: registerAssetDefault3, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
  const intl4 = getSystemLocale.intl;
  obj3[2] = intl4.string(getSystemLocale.t["2RUcaM"]);
  items1[2] = callback(Card, obj3);
  const obj4 = { icon: registerAssetDefault4, IconComponent: HeartIcon.HeartIcon, children: null };
  const intl5 = getSystemLocale.intl;
  obj4[2] = intl5.string(getSystemLocale.t.bJoZKV);
  items1[3] = callback(Card, obj4);
  obj[1] = items1;
  items[1] = callback2(View, obj);
  obj[1] = items;
  return callback2(View, obj);
};