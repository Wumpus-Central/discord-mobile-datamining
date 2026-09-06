// === Module 17694: HowItWorksCard ===

// Module 17694 (HowItWorksCard)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import Text from "Text" /* 4556 */;
import preloadDefault from "preload" /* 5587 */;
import registerAssetDefault from "registerAsset" /* 17695 */;
import registerAssetDefault2 from "registerAsset" /* 17696 */;
import registerAssetDefault3 from "registerAsset" /* 17697 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function HowItWorksCard(iconSource) {
  ({ cardNumber, description } = iconSource);
  const tmp = callback3();
  let obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: null };
  obj = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const items = [callback(Text.Text, obj), , ];
  obj = { style: tmp.container, children: callback(preloadDefault, obj1) };
  items[1] = callback(View, obj);
  items[2] = callback(Text.Text, { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description });
  obj[3] = items;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: null, cardNumber: null, howItWorksCardDescription: null, howItWorksCardIcon: null };
createCacheKey = { flex: 1, marginVertical: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
let obj1 = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
createCacheKey[4] = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
createCacheKey[5] = { marginVertical: 24 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.horizontalContainer, children: null };
  obj = { cardNumber: 1, description: null, iconSource: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.lT0ZNS);
  obj[2] = registerAssetDefault;
  const items = [callback(HowItWorksCard, obj), callback(Button.Spacer, { size: 12 }), ];
  obj1 = { cardNumber: 2, description: null, iconSource: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.ihN2Wb);
  obj1[2] = registerAssetDefault2;
  items[2] = callback(HowItWorksCard, obj1);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { cardNumber: 3, description: null, iconSource: null };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.c8krDQ);
  obj2[2] = registerAssetDefault3;
  items1[1] = callback(HowItWorksCard, obj2);
  obj[1] = items1;
  return callback2(View, obj);
};