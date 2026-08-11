// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/16794_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16795_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16796_registerAsset.js";
import { preload } from "../../../../../components_native/common/FastImage.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
function HowItWorksCard(iconSource) {
  let cardNumber;
  let description;
  ({ cardNumber, description } = iconSource);
  const tmp = createCacheKey();
  let obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: null };
  obj = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const items = [callback(Text.Text, obj), , ];
  obj = { style: tmp.container, children: callback(preload, obj1) };
  items[1] = callback(View, obj);
  items[2] = callback(Text.Text, { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description });
  obj[3] = items;
  return callback2(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: null, cardNumber: null, howItWorksCardDescription: null, howItWorksCardIcon: null };
createCacheKey = { flex: 1, marginVertical: 6, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
let obj1 = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
createCacheKey[4] = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
createCacheKey[5] = { marginVertical: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.horizontalContainer, children: null };
  obj = { cardNumber: 1, description: null, iconSource: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.lT0ZNS);
  obj[2] = registerAsset;
  const items = [callback(HowItWorksCard, obj), callback(Button.Spacer, { size: 12 }), ];
  const obj1 = { cardNumber: 2, description: null, iconSource: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.ihN2Wb);
  obj1[2] = registerAsset;
  items[2] = callback(HowItWorksCard, obj1);
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { cardNumber: 3, description: null, iconSource: null };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.c8krDQ);
  obj2[2] = registerAsset;
  items1[1] = callback(HowItWorksCard, obj2);
  obj[1] = items1;
  return callback2(View, obj);
};