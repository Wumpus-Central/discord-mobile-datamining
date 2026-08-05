// discord_app/modules/quests/native/BountiesNuxPromoSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { illustrationContainer: null };
createCacheKey = { paddingTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    callback2(4253).hideActionSheet(callback(14211).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.DDpHZG);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["LY+igv"]);
  obj = { style: createCacheKey().illustrationContainer, children: jsx(require("../../../design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx") /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj[3] = <View style={createCacheKey().illustrationContainer}>{jsx(require("../../../design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx") /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.cpT0Cq);
  obj[4] = callback;
  obj[4] = jsx(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(require("../../../design/components/Sheet/native/PromoSheet.native.tsx") /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};