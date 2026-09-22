// discord_app/modules/user_settings/premium/native/Footer.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment.tsx";
import _modDef13767 from "../../../../../_runtime/metro/13767__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({
  container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" },
  footerText: { marginBottom: 24 },
  button: { marginBottom: 40 },
  easterEggSpacing: { position: "absolute", top: 40 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = closure_7();
  useOpenPremiumMarketingPaymentDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER);
  const obj = { style: null, children: null };
  const items = [tmp.container, showSubscribeButton.style];
  obj.style = items;
  let tmp8Result = showSubscribeButton;
  if (showSubscribeButton) {
    const obj2 = { children: null };
    const obj3 = {
      style: tmp.footerText,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = util.intl;
    obj3.children = intl.string(util.t["2bSPbq"]);
    const items1 = [React4(Text_Text.Text, obj3)];
    const obj4 = { style: tmp.button, children: null };
    const obj5 = { text: tmp7, variant: "primary", size: "lg", onPress: tmp6, grow: true };
    obj4.children = React4(components_Button_Button.Button, obj5);
    items1[1] = React4(View, obj4);
    obj2.children = items1;
    tmp8Result = timestampProducer(hasOwnProperty, obj2);
  }
  const items2 = [tmp8Result];
  let easterEggSpacing = null;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  const tmp2Result = FastImageDefault;
  items2[1] = React4(tmp2Result, { style: easterEggSpacing, source: _modDef13767 });
  obj.children = items2;
  return timestampProducer(View, obj);
}
