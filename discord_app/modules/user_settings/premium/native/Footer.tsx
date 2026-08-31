// discord_app/modules/user_settings/premium/native/Footer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment.tsx";
import registerAssetDefault from "../../../../../_runtime/13119_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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