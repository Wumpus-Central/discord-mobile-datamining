// === Module 12967: Footer ===

// Module 12967 (Footer)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4376 */;
import Button from "Button" /* 4815 */;
import preloadDefault from "preload" /* 5374 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5854 */;
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment" /* 12968 */;
import registerAssetDefault from "registerAsset" /* 12969 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: { position: "absolute", top: 40 } });
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = callback2();
  useOpenPremiumMarketingPaymentDefault(QUICK_SWITCHERDefault.PREMIUM_MARKETING_FOOTER);
  let obj = { style: items, children: null };
  items = [tmp.container, showSubscribeButton.style];
  let tmp8Result = showSubscribeButton;
  if (showSubscribeButton) {
    obj = { children: null };
    obj = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.footerText;
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t["2bSPbq"]);
    const items1 = [callback(Text.Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.button;
    const obj2 = { text: null, variant: "primary", size: "lg", onPress: null, grow: true };
    obj2[0] = tmp7;
    obj2[3] = tmp6;
    obj1[1] = callback(Button.Button, obj2);
    items1[1] = callback(tmp9, obj1);
    obj[0] = items1;
    tmp8Result = tmp8(closure_5, obj);
  }
  const items2 = [tmp8Result, ];
  let easterEggSpacing = null;
  const tmp14 = callback;
  const tmp4 = useOpenPremiumMarketingPaymentDefault;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  const tmp2Result = preloadDefault;
  items2[1] = tmp14(tmp2Result, { style: easterEggSpacing, source: registerAssetDefault });
  obj[1] = items2;
  return closure_6(View, obj);
};