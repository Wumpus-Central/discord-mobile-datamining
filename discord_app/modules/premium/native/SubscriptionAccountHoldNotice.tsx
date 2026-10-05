// === Module 13196: SubscriptionAccountHoldNotice ===

// Module 13196 (SubscriptionAccountHoldNotice)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let subscription;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ Linking: c3, View: closure_4 } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, textContainer: { flexDirection: "row" }, icon: { marginRight: 4 }, text: { marginBottom: 8, flex: 1 } };
obj2 = { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscription) => {
  let container;
  let items;
  let items1;
  let textContainer;
  let tmpResult;
  let obj = subscription(576);
  const cResult = obj.c(19);
  subscription = subscription.subscription;
  const tmp4 = closure_8();
  if (subscription.status !== SubscriptionStatusTypes.ACCOUNT_HOLD) {
    return null;
  } else {
    let tmp5;
    ({ container, textContainer } = tmp4);
    if (cResult[0] !== tmp4.icon) {
      const obj2 = { size: subscription(1188).IconSizes.MEDIUM, style: tmp4.icon, source: AssetRegistryDefault };
      const Icon = tmp(1188).Icon;
      const tmp8 = closure_6(Icon, obj2);
      cResult[0] = tmp4.icon;
      cResult[1] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === subscription.currentPeriodEnd) {
      let tmp10;
      if (cResult[3] === subscription.planId) {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp4.text) {
        let tmp13;
        if (cResult[6] === tmp10) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp4.textContainer) {
          if (cResult[9] === tmp5) {
            let tmp16;
            let tmp21;
            let tmp23;
            if (cResult[10] === tmp13) {
              tmp16 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(subscription(1126).t.VJmUNy);
              cResult[12] = stringResult;
              tmp21 = stringResult;
            } else {
              tmp21 = cResult[12];
            }
            if (cResult[13] !== subscription.paymentGateway) {
              const obj3 = {
                size: "sm",
                text: tmp21,
                onPress() {
                              const openURL = _false.openURL;
                              const obj = PremiumUtils;
                              return openURL(obj.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
                            }
              };
              const tmp25 = closure_6(subscription(5594).Button, obj3);
              cResult[13] = subscription.paymentGateway;
              cResult[14] = tmp25;
              tmp23 = tmp25;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] === tmp4.container) {
              if (cResult[16] === tmp16) {
                let tmp26;
                if (cResult[17] === tmp23) {
                  tmp26 = cResult[18];
                }
                return tmp26;
              }
            }
            const obj4 = { style: container, children: items };
            items = [tmp16, tmp23];
            const tmp29 = closure_7(closure_4, obj4);
            cResult[15] = tmp4.container;
            cResult[16] = tmp16;
            cResult[17] = tmp23;
            cResult[18] = tmp29;
            tmp26 = tmp29;
          }
        }
        const obj5 = { style: textContainer, children: items1 };
        items1 = [tmp5, tmp13];
        const tmp19 = closure_7(closure_4, obj5);
        cResult[8] = tmp4.textContainer;
        cResult[9] = tmp5;
        cResult[10] = tmp13;
        cResult[11] = tmp19;
        tmp16 = tmp19;
      }
      const obj6 = { style: tmp9, variant: "text-sm/medium", children: tmp10 };
      const tmp15 = closure_6(subscription(4886).Text, obj6);
      cResult[5] = tmp4.text;
      cResult[6] = tmp10;
      cResult[7] = tmp15;
      tmp13 = tmp15;
    }
    const intl = tmp(1126).intl;
    const format = intl.format;
    const obj7 = { endDate: subscription.currentPeriodEnd, planDescription: tmpResult.getDisplayName(subscription.planId) };
    const v7I21Iz = tmp(1126).t["7I21Iz"];
    tmpResult = subscription(4528);
    const formatResult = format(v7I21Iz, obj7);
    cResult[2] = subscription.currentPeriodEnd;
    cResult[3] = subscription.planId;
    cResult[4] = formatResult;
    tmp10 = formatResult;
  }
}) : ((subscription) => {
  let format;
  let intl2;
  let items;
  let items1;
  let obj5;
  let obj6;
  let v7I21Iz;
  subscription = subscription.subscription;
  const tmp = closure_8();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: tmp.container, children: items1 };
    const obj2 = { style: tmp.textContainer, children: items };
    const obj3 = { size: subscription(1188).IconSizes.MEDIUM, style: tmp.icon, source: AssetRegistryDefault };
    const Icon = subscription(1188).Icon;
    items = [closure_6(Icon, obj3), ];
    const obj4 = { style: tmp.text, variant: "text-sm/medium", children: format(v7I21Iz, obj5) };
    const Text = subscription(4886).Text;
    const intl = subscription(1126).intl;
    format = intl.format;
    obj5 = { endDate: subscription.currentPeriodEnd, planDescription: obj6.getDisplayName(subscription.planId) };
    v7I21Iz = subscription(1126).t["7I21Iz"];
    obj6 = subscription(4528);
    items[1] = closure_6(Text, obj4);
    items1 = [closure_7(closure_4, obj2), ];
    const obj7 = {
      size: "sm",
      text: intl2.string(subscription(1126).t.VJmUNy),
      onPress() {
          const openURL = _false.openURL;
          const obj = PremiumUtils;
          return openURL(obj.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        }
    };
    const Button = subscription(5594).Button;
    intl2 = subscription(1126).intl;
    items1[1] = closure_6(Button, obj7);
    tmp2 = closure_7(closure_4, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default tmp5;