// discord_app/modules/quests/native/BountiesNuxPromoSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { BountiesPosterSpotIllustration } from "../../../design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx";
import { PromoSheet } from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
createCacheKey = { illustrationContainer: null };
createCacheKey = { paddingTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    callback2(4312).hideActionSheet(callback(14373).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.DDpHZG);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["LY+igv"]);
  obj = { style: createCacheKey().illustrationContainer, children: jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj[3] = <View style={createCacheKey().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.cpT0Cq);
  obj[4] = callback;
  obj[4] = jsx(Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};