// discord_app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, header: obj4, body: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let container;
      let intl;
      let items2;
      let obj11;
      let premiumSubscription;
      let priceChangeRecord;
      let textContainer;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = markAsDismissed(576);
      const cResult = obj.c(45);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GooglePlayPriceChangeStore];
        class P {
          constructor() {
            return closure_1_5.priceChangeRecord;
          }
        }
        cResult[0] = items;
        cResult[1] = P;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = markAsDismissed(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, P);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        class P {
          constructor() {
            return closure_1_5.priceChangeRecord;
          }
        }
        cResult[2] = items1;
        cResult[3] = tmp12;
        tmp10 = tmp12;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult7 = markAsDismissed(504);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp10);
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.premiumPlanIdFromItems;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[4] === stateFromStores.expectedChargeTime) {
        if (cResult[5] === stateFromStores.newCurrency) {
          if (cResult[6] === stateFromStores.newPrice) {
            if (cResult[7] === stateFromStores.oldCurrency) {
              if (cResult[8] === stateFromStores.oldPrice) {
                if (cResult[9] === tmp4.body) {
                  if (cResult[10] === tmp4.container) {
                    if (cResult[11] === tmp4.header) {
                      if (cResult[12] === tmp4.textContainer) {
                        let tmp14;
                        let tmp15;
                        let tmp16;
                        let tmp18;
                        let str2;
                        let tmp19;
                        let tmp20;
                        let tmp21;
                        let tmp22;
                        if (cResult[13] === str) {
                          tmp14 = cResult[14];
                          tmp15 = cResult[15];
                          tmp16 = cResult[16];
                          class P {
                            constructor() {
                              return closure_1_5.priceChangeRecord;
                            }
                          }
                          tmp18 = cResult[18];
                          str2 = cResult[19];
                          tmp19 = cResult[20];
                          tmp20 = cResult[21];
                          tmp21 = cResult[22];
                          tmp22 = cResult[23];
                        }
                        if (cResult[24] === tmp14) {
                          if (cResult[25] === str2) {
                            if (cResult[26] === tmp19) {
                              let tmp31;
                              if (cResult[27] === tmp20) {
                                tmp31 = cResult[28];
                              }
                              if (cResult[29] === tmp15) {
                                if (cResult[30] === tmp31) {
                                  if (cResult[31] === tmp21) {
                                    let tmp35;
                                    let tmp41;
                                    if (cResult[32] === tmp22) {
                                      tmp35 = cResult[33];
                                    }
                                    const _Symbol = Symbol;
                                    class P {
                                      constructor() {
                                        return closure_1_5.priceChangeRecord;
                                      }
                                    }
                                    if (cResult[35] !== markAsDismissed) {
                                      const obj2 = { variant: "primary", text: tmp40, onPress: null };
                                      class P {
                                        constructor() {
                                          return closure_1_5.priceChangeRecord;
                                        }
                                      }
                                      const tmp43 = closure_8(markAsDismissed(5594).Button, obj2);
                                      cResult[35] = markAsDismissed;
                                      cResult[36] = tmp43;
                                      tmp41 = tmp43;
                                    } else {
                                      tmp41 = cResult[36];
                                    }
                                    if (cResult[37] === tmp16) {
                                      if (cResult[38] === tmp18) {
                                        if (cResult[39] === tmp35) {
                                          let tmp44;
                                          if (cResult[40] === tmp41) {
                                            tmp44 = cResult[41];
                                          }
                                          if (cResult[42] === tmp17) {
                                            let tmp47;
                                            if (cResult[43] === tmp44) {
                                              tmp47 = cResult[44];
                                            }
                                            return tmp47;
                                          }
                                          class P {
                                            constructor() {
                                              return closure_1_5.priceChangeRecord;
                                            }
                                          }
                                          tmp49[0] = tmp44;
                                          const tmp50 = closure_8(tmp17, tmp49);
                                          cResult[42] = tmp17;
                                          cResult[43] = tmp44;
                                          cResult[44] = tmp50;
                                          tmp47 = tmp50;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp18, children: items2 };
                                    items2 = [tmp35, tmp41];
                                    const tmp46 = closure_9(tmp16, obj3);
                                    cResult[37] = tmp16;
                                    cResult[38] = tmp18;
                                    cResult[39] = tmp35;
                                    cResult[40] = tmp41;
                                    cResult[41] = tmp46;
                                    tmp44 = tmp46;
                                  }
                                }
                              }
                              class P {
                                constructor() {
                                  return closure_1_5.priceChangeRecord;
                                }
                              }
                              tmp37[0] = tmp21;
                              const items3 = [tmp22, tmp31];
                              tmp37[1] = items3;
                              const tmp38 = closure_9(tmp15, tmp37);
                              cResult[29] = tmp15;
                              cResult[30] = tmp31;
                              cResult[31] = tmp21;
                              cResult[32] = tmp22;
                              cResult[33] = tmp38;
                              tmp35 = tmp38;
                            }
                          }
                        }
                        class P {
                          constructor() {
                            return closure_1_5.priceChangeRecord;
                          }
                        }
                        tmp33[0] = str2;
                        tmp33[1] = tmp19;
                        tmp33[2] = tmp20;
                        const tmp34 = closure_8(tmp14, tmp33);
                        cResult[24] = tmp14;
                        cResult[25] = str2;
                        cResult[26] = tmp19;
                        cResult[27] = tmp20;
                        cResult[28] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult8 = markAsDismissed(4528);
      const tierDisplayNameByPlanId = tmpResult8.getTierDisplayNameByPlanId(str);
      const tmpResult9 = markAsDismissed(4528);
      const intervalType = tmpResult9.getInterval(str).intervalType;
      const tmpResult10 = markAsDismissed(4528);
      const intervalStringAsNoun = tmpResult10.getIntervalStringAsNoun(intervalType);
      const tmpResult11 = markAsDismissed(6736);
      const formatPriceResult = tmpResult11.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
      const tmpResult12 = markAsDismissed(6736);
      const formatPriceResult1 = tmpResult12.formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
      BottomSheet = tmp(6645).BottomSheet;
      ({ container, textContainer } = tmp4);
      const obj4 = {
        variant: "heading-xl/bold",
        style: tmp4.header,
        children: intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId }),
      };
      const Text = tmp(4886).Text;
      intl = tmp(1126).intl;
      const tmp27 = closure_8(Text, obj4);
      const Text2 = tmp(4886).Text;
      const body = tmp4.body;
      const intl2 = tmp(1126).intl;
      const format = intl2.format;
      const obj5 = {
        subscriptionName: tierDisplayNameByPlanId,
        changeDate: new Date(stateFromStores.expectedChargeTime),
        interval: intervalStringAsNoun,
        newPrice: formatPriceResult1,
        oldPrice: formatPriceResult,
        hc_article_url: obj11.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL),
      };
      const prop = tmp(1126).t["n+Hrjb"];
      new Date(stateFromStores.expectedChargeTime);
      obj11 = HelpdeskUtilsDefault;
      const formatResult = format(prop, obj5);
      cResult[4] = stateFromStores.expectedChargeTime;
      cResult[5] = stateFromStores.newCurrency;
      cResult[6] = stateFromStores.newPrice;
      cResult[7] = stateFromStores.oldCurrency;
      cResult[8] = stateFromStores.oldPrice;
      cResult[9] = tmp4.body;
      cResult[10] = tmp4.container;
      cResult[11] = tmp4.header;
      cResult[12] = tmp4.textContainer;
      cResult[13] = str;
      cResult[14] = Text2;
      cResult[15] = View;
      cResult[16] = View;
      cResult[17] = BottomSheet;
      cResult[18] = container;
      cResult[19] = "text-md/medium";
      cResult[20] = body;
      cResult[21] = formatResult;
      cResult[22] = textContainer;
      cResult[23] = tmp27;
      tmp22 = tmp27;
      tmp21 = textContainer;
      tmp20 = formatResult;
      tmp19 = body;
      str2 = "text-md/medium";
      tmp18 = container;
      tmp16 = View;
      tmp15 = View;
      tmp14 = Text2;
    }
  : (markAsDismissed) => {
      let format;
      let intl;
      let intl3;
      let items2;
      let items3;
      let obj14;
      let obj4;
      let obj8;
      let premiumSubscription;
      let priceChangeRecord;
      let prop;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_10();
      const items = [GooglePlayPriceChangeStore];
      const obj = markAsDismissed(504);
      const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
      const items1 = [SubscriptionStore];
      const obj2 = markAsDismissed(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.premiumPlanIdFromItems;
      }
      if (str == null) {
        str = "";
      }
      const tmp2Result = markAsDismissed(4528);
      const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
      const tmp2Result5 = markAsDismissed(4528);
      const intervalType = tmp2Result5.getInterval(str).intervalType;
      const tmp2Result6 = markAsDismissed(4528);
      const intervalStringAsNoun = tmp2Result6.getIntervalStringAsNoun(intervalType);
      const tmp2Result7 = markAsDismissed(6736);
      const formatPriceResult = tmp2Result7.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
      const tmp2Result8 = markAsDismissed(6736);
      const obj3 = { children: closure_9(View, obj4) };
      obj4 = { style: tmp.container, children: items3 };
      const obj5 = { style: tmp.textContainer, children: items2 };
      const formatPriceResult1 = tmp2Result8.formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
      BottomSheet = tmp2(6645).BottomSheet;
      const obj6 = {
        variant: "heading-xl/bold",
        style: tmp.header,
        children: intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId }),
      };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      items2 = [closure_8(Text, obj6)];
      const obj7 = { variant: "text-md/medium", style: tmp.body, children: format(prop, obj8) };
      const Text2 = tmp2(4886).Text;
      const intl2 = tmp2(1126).intl;
      format = intl2.format;
      obj8 = {
        subscriptionName: tierDisplayNameByPlanId,
        changeDate: new Date(stateFromStores.expectedChargeTime),
        interval: intervalStringAsNoun,
        newPrice: formatPriceResult1,
        oldPrice: formatPriceResult,
        hc_article_url: obj14.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL),
      };
      prop = tmp2(1126).t["n+Hrjb"];
      new Date(stateFromStores.expectedChargeTime);
      obj14 = HelpdeskUtilsDefault;
      items2[1] = closure_8(Text2, obj7);
      items3 = [closure_9(View, obj5)];
      const obj9 = {
        variant: "primary",
        text: intl3.string(markAsDismissed(1126).t.BddRzS),
        onPress() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      };
      const Button = tmp2(5594).Button;
      intl3 = tmp2(1126).intl;
      items3[1] = closure_8(Button, obj9);
      return closure_8(BottomSheet, obj3);
    };
const result = size.fileFinishedImporting(
  "modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx",
);

export default tmp5;
