// === Module 17420: GooglePlayPriceChangeActionSheet ===

// Module 17420 (GooglePlayPriceChangeActionSheet)
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 17421 */;

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 }, textContainer: null, header: null, body: null };
let obj3 = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
obj2.textContainer = { marginBottom: nativeDefault.space.PX_24 };
let obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj2.header = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
obj2.body = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(45);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GooglePlayPriceChangeStore];
    const fn = function p() {
      return priceChangeRecord.priceChangeRecord;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = markAsDismissed(576);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionStore];
    const fn2 = function v() {
      return premiumSubscription.getPremiumSubscription(true);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = markAsDismissed(504);
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(tmp9, tmp10);
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
                    if (cResult[13] === str) {
                      let tmp13 = cResult[14];
                      let tmp14 = cResult[15];
                      let tmp15 = cResult[16];
                      let tmp16 = cResult[17];
                      let tmp17 = cResult[18];
                      let str2 = cResult[19];
                      let tmp18 = cResult[20];
                      let tmp19 = cResult[21];
                      let tmp20 = cResult[22];
                      let tmp21 = cResult[23];
                    }
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === str2) {
                        if (cResult[26] === tmp18) {
                          if (cResult[27] === tmp19) {
                            let tmp29 = cResult[28];
                          }
                          if (cResult[29] === tmp14) {
                            if (cResult[30] === tmp29) {
                              if (cResult[31] === tmp20) {
                                if (cResult[32] === tmp21) {
                                  let tmp32 = cResult[33];
                                }
                                const _Symbol = Symbol;
                                if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl3 = tmp(1126).intl;
                                  const stringResult = intl3.string(tmp(1126).t.BddRzS);
                                  cResult[34] = stringResult;
                                  let tmp35 = stringResult;
                                } else {
                                  tmp35 = cResult[34];
                                }
                                if (cResult[35] !== markAsDismissed) {
                                  const obj2 = {
                                    variant: "primary",
                                    text: tmp35,
                                    onPress() {
                                                                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                                                                    }
                                  };
                                  const tmp39 = closure_8(tmp(5375).Button, obj2);
                                  cResult[35] = markAsDismissed;
                                  cResult[36] = tmp39;
                                  let tmp37 = tmp39;
                                } else {
                                  tmp37 = cResult[36];
                                }
                                if (cResult[37] === tmp15) {
                                  if (cResult[38] === tmp17) {
                                    if (cResult[39] === tmp32) {
                                      if (cResult[40] === tmp37) {
                                        let tmp40 = cResult[41];
                                      }
                                      if (cResult[42] === tmp16) {
                                        if (cResult[43] === tmp40) {
                                          let tmp43 = cResult[44];
                                        }
                                        return tmp43;
                                      }
                                      const obj3 = { children: tmp40 };
                                      const tmp45 = closure_8(tmp16, obj3);
                                      cResult[42] = tmp16;
                                      cResult[43] = tmp40;
                                      cResult[44] = tmp45;
                                      tmp43 = tmp45;
                                    }
                                  }
                                }
                                const obj4 = { style: tmp17, children: null };
                                const items2 = [tmp32, tmp37];
                                obj4.children = items2;
                                const tmp42 = closure_9(tmp15, obj4);
                                cResult[37] = tmp15;
                                cResult[38] = tmp17;
                                cResult[39] = tmp32;
                                cResult[40] = tmp37;
                                cResult[41] = tmp42;
                                tmp40 = tmp42;
                              }
                            }
                          }
                          const obj5 = { style: tmp20, children: null };
                          const items3 = [tmp21, tmp29];
                          obj5.children = items3;
                          const tmp34 = closure_9(tmp14, obj5);
                          cResult[29] = tmp14;
                          cResult[30] = tmp29;
                          cResult[31] = tmp20;
                          cResult[32] = tmp21;
                          cResult[33] = tmp34;
                          tmp32 = tmp34;
                        }
                      }
                    }
                    const obj6 = { variant: str2, style: tmp18, children: tmp19 };
                    const tmp31 = closure_8(tmp13, obj6);
                    cResult[24] = tmp13;
                    cResult[25] = str2;
                    cResult[26] = tmp18;
                    cResult[27] = tmp19;
                    cResult[28] = tmp31;
                    tmp29 = tmp31;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult7 = markAsDismissed(504);
  const tierDisplayNameByPlanId = markAsDismissed(4726).getTierDisplayNameByPlanId(str);
  const tmpResult8 = markAsDismissed(4726);
  const tmpResult9 = markAsDismissed(4726);
  const intervalStringAsNoun = markAsDismissed(4726).getIntervalStringAsNoun(tmpResult9.getInterval(str).intervalType);
  const tmpResult10 = markAsDismissed(4726);
  const tmpResult11 = markAsDismissed(6926);
  const formatPriceResult = markAsDismissed(6926).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmpResult12 = markAsDismissed(6926);
  BottomSheet = tmp(6829).BottomSheet;
  ({ container, textContainer } = tmp4);
  const obj7 = { variant: "heading-xl/bold", style: tmp4.header, children: null };
  const intl = tmp(1126).intl;
  obj7.children = intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const tmp26 = closure_8(markAsDismissed(5086).Text, obj7);
  const Text = tmp(5086).Text;
  const body = tmp4.body;
  const intl2 = tmp(1126).intl;
  const obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: null, interval: null, newPrice: null, oldPrice: null, hc_article_url: null };
  const formatPriceResult1 = markAsDismissed(6926).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj8.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj8.interval = intervalStringAsNoun;
  obj8.newPrice = formatPriceResult1;
  obj8.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj8.hc_article_url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  const formatResult = intl2.format(markAsDismissed(1126).t["n+Hrjb"], obj8);
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
  cResult[14] = Text;
  cResult[15] = View;
  cResult[16] = View;
  cResult[17] = BottomSheet;
  cResult[18] = container;
  cResult[19] = "text-md/medium";
  cResult[20] = body;
  cResult[21] = formatResult;
  cResult[22] = textContainer;
  cResult[23] = tmp26;
  tmp21 = tmp26;
  tmp20 = textContainer;
  tmp19 = formatResult;
  tmp18 = body;
  str2 = "text-md/medium";
  tmp17 = container;
  tmp16 = BottomSheet;
  tmp15 = View;
  tmp14 = View;
  tmp13 = Text;
}) : (function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const items = [GooglePlayPriceChangeStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  const obj = markAsDismissed(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = markAsDismissed(504);
  const tierDisplayNameByPlanId = markAsDismissed(4726).getTierDisplayNameByPlanId(str);
  const tmp2Result = markAsDismissed(4726);
  const tmp2Result5 = markAsDismissed(4726);
  const intervalStringAsNoun = markAsDismissed(4726).getIntervalStringAsNoun(tmp2Result5.getInterval(str).intervalType);
  const tmp2Result6 = markAsDismissed(4726);
  const tmp2Result7 = markAsDismissed(6926);
  const formatPriceResult = markAsDismissed(6926).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result8 = markAsDismissed(6926);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1126).intl;
  obj6.children = intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [closure_8(markAsDismissed(5086).Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = tmp2(1126).intl;
  const obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: null, interval: null, newPrice: null, oldPrice: null, hc_article_url: null };
  const formatPriceResult1 = markAsDismissed(6926).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj8.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj8.interval = intervalStringAsNoun;
  obj8.newPrice = formatPriceResult1;
  obj8.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj8.hc_article_url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj7.children = intl2.format(markAsDismissed(1126).t["n+Hrjb"], obj8);
  items2[1] = closure_8(markAsDismissed(5086).Text, obj7);
  obj5.children = items2;
  const items3 = [closure_9(View, obj5), ];
  const obj9 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1126).intl;
  obj9.text = intl3.string(markAsDismissed(1126).t.BddRzS);
  obj9.onPress = function onPress() {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  };
  items3[1] = closure_8(markAsDismissed(5375).Button, obj9);
  obj4.children = items3;
  obj3.children = closure_9(View, obj4);
  return closure_8(markAsDismissed(6829).BottomSheet, obj3);
});