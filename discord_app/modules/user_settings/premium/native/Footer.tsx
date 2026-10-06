// discord_app/modules/user_settings/premium/native/Footer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13319_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" },
  footerText: { marginBottom: 24 },
  button: { marginBottom: 40 },
  easterEggSpacing: { position: "absolute", top: 40 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let buttonText;
      let intl;
      let items;
      let items1;
      let obj7;
      let openPayment;
      let showSubscribeButton;
      let style;
      const obj = react2;
      const cResult = obj.c(15);
      ({ style, showSubscribeButton } = arg0);
      const tmp4 = closure_7();
      const tmp6 = useOpenPremiumMarketingPaymentDefault;
      ({ openPayment, buttonText } = tmp6(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER));
      tmp6(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER);
      if (cResult[0] === style) {
        let tmp8;
        if (cResult[1] === tmp4.container) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === buttonText) {
          if (cResult[4] === openPayment) {
            if (cResult[5] === showSubscribeButton) {
              if (cResult[6] === tmp4.button) {
                let tmp9;
                let tmp16;
                if (cResult[7] === tmp4.footerText) {
                  tmp9 = cResult[8];
                }
                let easterEggSpacing = null;
                if (!showSubscribeButton) {
                  easterEggSpacing = tmp4.easterEggSpacing;
                }
                if (cResult[9] !== easterEggSpacing) {
                  const obj2 = { style: easterEggSpacing, source: AssetRegistryDefault };
                  const tmp5Result = FastImageDefault;
                  const tmp19 = React3(tmp5Result, obj2);
                  cResult[9] = easterEggSpacing;
                  cResult[10] = tmp19;
                  tmp16 = tmp19;
                } else {
                  tmp16 = cResult[10];
                }
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp9) {
                    let tmp20;
                    if (cResult[13] === tmp16) {
                      tmp20 = cResult[14];
                    }
                    return tmp20;
                  }
                }
                const obj3 = { style: tmp8, children: items };
                items = [tmp9, tmp16];
                const tmp23 = metroRequire(View, obj3);
                cResult[11] = tmp8;
                cResult[12] = tmp9;
                cResult[13] = tmp16;
                cResult[14] = tmp23;
                tmp20 = tmp23;
              }
            }
          }
        }
        let tmp10 = showSubscribeButton;
        if (tmp10) {
          const obj4 = { children: items1 };
          const obj5 = {
            style: tmp4.footerText,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: intl.string(intl2.t["2bSPbq"]),
          };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          items1 = [React3(Text, obj5)];
          const obj6 = { style: tmp4.button, children: React3(components_Button_Button.Button, obj7) };
          obj7 = { text: buttonText, variant: "primary", size: "lg", onPress: openPayment, grow: true };
          items1[1] = React3(View, obj6);
          tmp10 = metroRequire(hasOwnProperty, obj4);
        }
        cResult[3] = buttonText;
        cResult[4] = openPayment;
        cResult[5] = showSubscribeButton;
        cResult[6] = tmp4.button;
        cResult[7] = tmp4.footerText;
        cResult[8] = tmp10;
        tmp9 = tmp10;
      }
      const items2 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items2;
      tmp8 = items2;
    }
  : (showSubscribeButton) => {
      let intl;
      let items;
      let items1;
      let items2;
      let obj5;
      showSubscribeButton = showSubscribeButton.showSubscribeButton;
      const style = showSubscribeButton.style;
      const tmp = closure_7();
      const tmp4 = useOpenPremiumMarketingPaymentDefault;
      tmp4(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER);
      const obj = { style: items, children: items2 };
      items = [tmp.container, style];
      let tmp8Result = showSubscribeButton;
      if (tmp8Result) {
        const obj2 = { children: items1 };
        const obj3 = {
          style: tmp.footerText,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl.string(intl2.t["2bSPbq"]),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1 = [React3(Text, obj3)];
        const obj4 = { style: tmp.button, children: React3(components_Button_Button.Button, obj5) };
        obj5 = { text: tmp7, variant: "primary", size: "lg", onPress: tmp6, grow: true };
        items1[1] = React3(View, obj4);
        tmp8Result = metroRequire(hasOwnProperty, obj2);
      }
      items2 = [tmp8Result];
      let easterEggSpacing = null;
      const tmp2Result = FastImageDefault;
      if (!showSubscribeButton) {
        easterEggSpacing = tmp.easterEggSpacing;
      }
      const obj6 = { style: easterEggSpacing, source: AssetRegistryDefault };
      items2[1] = React3(tmp2Result, obj6);
      return metroRequire(View, obj);
    };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default tmp4;
