// === Module 14419: BountiesNuxPromoSheet ===

// Module 14419 (BountiesNuxPromoSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 5554 */;
import PromoSheet from "PromoSheet" /* 8017 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
const createCacheKey = { paddingTop: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    callback2(4342).hideActionSheet(callback(14418).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.DDpHZG);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["LY+igv"]);
  obj = { style: callback().illustrationContainer, children: jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj[3] = <View style={callback().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.cpT0Cq);
  obj[4] = callback;
  obj[4] = jsx(Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};