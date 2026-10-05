// === Module 13199: PremiumAccountCredit ===

// Module 13199 (PremiumAccountCredit)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3205 from "module_3205" /* 3205 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import BoostGemIcon from "BoostGemIcon" /* 4826 */;
import Text_Text from "Text/Text" /* 4886 */;
import GameIcon from "GameIcon" /* 6667 */;
import noop from "module_19" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 6899 */;

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;

require = fn;
let View = fn(17).View;
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { title: { marginBottom: 12 }, creditList: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, creditItem: { flexDirection: "row", alignItems: "center", padding: 16 }, boostIcon: null, textContainer: null, headerText: null, subText: null, timeText: null, divider: null, creditDescription: null };
let size = { width: fn(6667).GameIconImageSize[fn(undefined, 6667).GameIconSizes.SMALL], height: fn(6667).GameIconImageSize[fn(undefined, 6667).GameIconSizes.SMALL], alignItems: "center", justifyContent: "center" };
obj2.boostIcon = size;
obj2.textContainer = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
obj2.headerText = { lineHeight: 20 };
obj2.subText = { lineHeight: 16 };
obj2.timeText = { lineHeight: 20, alignSelf: "flex-start" };
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.creditDescription = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(67);
  ({ planId, months, currentSubscription, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== planId) {
    const tmpResult = PremiumUtils;
    const result = tmpResult.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId));
    cResult[0] = planId;
    cResult[1] = result;
    let str = result;
  } else {
    str = cResult[1];
  }
  if (cResult[2] !== planId) {
    const result1 = PremiumUtils.isPremiumGuildSubscriptionPlan(planId);
    cResult[2] = planId;
    cResult[3] = result1;
    let tmp7 = result1;
    const tmpResult3 = PremiumUtils;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === currentSubscription) {
    if (cResult[5] === hasPremiumGroup) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === planId) {
          if (cResult[8] === shouldAddDivider) {
            if (cResult[9] === str) {
              if (cResult[10] === tmp4.boostIcon) {
                if (cResult[11] === tmp4.creditItem) {
                  if (cResult[12] === tmp4.divider) {
                    if (cResult[13] === tmp4.headerText) {
                      if (cResult[14] === tmp4.textContainer) {
                        if (cResult[15] === unconsumedFractionalPremiumUnits) {
                          if (cResult[41] === cResult[16]) {
                            if (cResult[42] === tmp14) {
                              if (cResult[43] === tmp15) {
                                if (cResult[44] === tmp16) {
                                  if (cResult[45] === tmp17) {
                                    let tmp61 = cResult[46];
                                  }
                                  if (cResult[47] === tmp12) {
                                    if (cResult[48] === tmp13) {
                                      if (cResult[49] === tmp4.subText) {
                                        let tmp64 = cResult[50];
                                      }
                                      if (cResult[51] === tmp10) {
                                        if (cResult[52] === tmp61) {
                                          if (cResult[53] === tmp64) {
                                            if (cResult[54] === tmp18) {
                                              let tmp67 = cResult[55];
                                            }
                                            if (cResult[56] !== months) {
                                              const intl5 = util.intl;
                                              const obj2 = { count: months };
                                              const formatResult = intl5.format(util.t["ess/xl"], obj2);
                                              cResult[56] = months;
                                              cResult[57] = formatResult;
                                              let tmp70 = formatResult;
                                            } else {
                                              tmp70 = cResult[57];
                                            }
                                            if (cResult[58] === tmp4.timeText) {
                                              if (cResult[59] === tmp70) {
                                                let tmp72 = cResult[60];
                                              }
                                              if (cResult[61] === tmp11) {
                                                if (cResult[62] === tmp67) {
                                                  if (cResult[63] === tmp72) {
                                                    if (cResult[64] === tmp19) {
                                                      if (cResult[65] === tmp20) {
                                                        let tmp75 = cResult[66];
                                                      }
                                                      return tmp75;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj4 = { style: tmp19, children: null };
                                              const items = [tmp20, tmp67, tmp72];
                                              obj4.children = items;
                                              const tmp77 = React5(tmp11, obj4);
                                              cResult[61] = tmp11;
                                              cResult[62] = tmp67;
                                              cResult[63] = tmp72;
                                              cResult[64] = tmp19;
                                              cResult[65] = tmp20;
                                              cResult[66] = tmp77;
                                              tmp75 = tmp77;
                                            }
                                            const obj6 = { style: tmp4.timeText, variant: "text-md/medium", color: "text-default", children: tmp70 };
                                            const tmp74 = timestampProducer(Text_Text.Text, obj6);
                                            cResult[58] = tmp4.timeText;
                                            cResult[59] = tmp70;
                                            cResult[60] = tmp74;
                                            tmp72 = tmp74;
                                          }
                                        }
                                      }
                                      const obj7 = { style: tmp18, children: null };
                                      const items1 = [tmp61, tmp64];
                                      obj7.children = items1;
                                      const tmp69 = React5(tmp10, obj7);
                                      cResult[51] = tmp10;
                                      cResult[52] = tmp61;
                                      cResult[53] = tmp64;
                                      cResult[54] = tmp18;
                                      cResult[55] = tmp69;
                                      tmp67 = tmp69;
                                    }
                                  }
                                  let tmp65 = !tmp13;
                                  if (!tmp13) {
                                    const obj8 = { style: tmp4.subText, variant: "text-xs/medium", color: "text-default", children: tmp12 };
                                    tmp65 = timestampProducer(Text_Text.Text, obj8);
                                  }
                                  cResult[47] = tmp12;
                                  cResult[48] = tmp13;
                                  cResult[49] = tmp4.subText;
                                  cResult[50] = tmp65;
                                  tmp64 = tmp65;
                                }
                              }
                            }
                          }
                          const obj9 = { style: cResult[21], variant: cResult[22], color: cResult[23], children: cResult[24] };
                          const tmp63 = timestampProducer(cResult[16], obj9);
                          cResult[41] = cResult[16];
                          cResult[42] = cResult[21];
                          cResult[43] = cResult[22];
                          cResult[44] = cResult[23];
                          cResult[45] = cResult[24];
                          cResult[46] = tmp63;
                          tmp61 = tmp63;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj5 = PremiumUtilsDefault;
  if (tmp7) {
    let displayName = obj5.getDisplayName(planId);
    let intl = importDefault;
  } else {
    displayName = obj5.getTierDisplayNameByPlanId(planId);
    intl = importDefault;
  }
  if (hasPremiumGroup) {
    const _Symbol = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      const stringResult = intl4.string(intl(3205)["5asczk"]);
      cResult[28] = stringResult;
    }
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (cResult[29] === currentSubscription.currentPeriodEnd) {
          if (cResult[30] === currentSubscription.pauseEndsAt) {
            if (cResult[31] === currentSubscription.status) {
              if (cResult[32] === unconsumedFractionalPremiumUnits) {
                let tmp25 = cResult[33];
              }
              let formatToPlainStringResult1 = tmp25;
            }
          }
        }
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num5 = PremiumUtils.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl3 = util.intl;
          if (num5 == null) {
            num5 = 0;
          }
          const obj10 = { date: num5 };
          const formatToPlainStringResult = intl3.formatToPlainString(util.t["5CNRRA"], obj10);
          cResult[29] = currentSubscription.currentPeriodEnd;
          cResult[30] = currentSubscription.pauseEndsAt;
          cResult[31] = currentSubscription.status;
          cResult[32] = unconsumedFractionalPremiumUnits;
          cResult[33] = formatToPlainStringResult;
          tmp25 = formatToPlainStringResult;
          const tmpResult4 = PremiumUtils;
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
      let tmp39 = tmp7;
      if (!tmp7) {
        tmp39 = null != currentSubscription && currentSubscription.isPurchasedExternally;
        const tmp41 = null != currentSubscription && currentSubscription.isPurchasedExternally;
      }
      let divider = null;
      if (shouldAddDivider) {
        divider = tmp4.divider;
      }
      if (cResult[34] === tmp4.creditItem) {
        if (cResult[35] === divider) {
          let tmp44 = cResult[36];
        }
        if (cResult[37] === tmp7) {
          if (cResult[38] === str) {
            if (cResult[39] === tmp4.boostIcon) {
              const textContainer = tmp4.textContainer;
              const Text = Text_Text.Text;
              const headerText = tmp4.headerText;
              intl = util.intl;
              const obj11 = { planName: displayName };
              const formatResult1 = intl.format(util.t.LzobT9, obj11);
              cResult[4] = currentSubscription;
              cResult[5] = hasPremiumGroup;
              cResult[6] = tmp7;
              cResult[7] = planId;
              cResult[8] = shouldAddDivider;
              cResult[9] = str;
              cResult[10] = tmp4.boostIcon;
              cResult[11] = tmp4.creditItem;
              cResult[12] = tmp4.divider;
              cResult[13] = tmp4.headerText;
              cResult[14] = tmp4.textContainer;
              cResult[15] = unconsumedFractionalPremiumUnits;
              cResult[16] = Text;
              cResult[17] = View;
              cResult[18] = View;
              cResult[19] = formatToPlainStringResult1;
              cResult[20] = tmp39;
              cResult[21] = headerText;
              cResult[22] = "text-md/semibold";
              str = "mobile-text-heading-primary";
              cResult[23] = "mobile-text-heading-primary";
              cResult[24] = formatResult1;
              cResult[25] = textContainer;
              cResult[26] = tmp44;
              cResult[27] = cResult[40];
            }
          }
        }
        if (tmp7) {
          const obj12 = { style: tmp4.boostIcon, children: null };
          const obj13 = { size: "md", color: intl(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
          obj12.children = timestampProducer(BoostGemIcon.BoostGemIcon, obj13);
          let tmp46Result = timestampProducer(View, obj12);
        } else {
          const obj14 = { size: GameIcon.GameIconSizes.SMALL, skuId: str };
          tmp46Result = timestampProducer(intl(6667), obj14);
          const intlResult = intl(6667);
        }
        cResult[37] = tmp7;
        cResult[38] = str;
        cResult[39] = tmp4.boostIcon;
        cResult[40] = tmp46Result;
      }
      const items2 = [tmp4.creditItem, divider];
      cResult[34] = tmp4.creditItem;
      cResult[35] = divider;
      cResult[36] = items2;
      tmp44 = items2;
    }
    const intl2 = util.intl;
    const obj15 = { planName: displayName };
    formatToPlainStringResult1 = intl2.formatToPlainString(util.t.eNXZ5O, obj15);
  }
}) : ((arg0) => {
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = closure_8();
  const obj = PremiumUtils;
  const result = obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId));
  const result1 = PremiumUtils.isPremiumGuildSubscriptionPlan(planId);
  const obj4 = PremiumUtilsDefault;
  if (result1) {
    let displayName = obj4.getDisplayName(planId);
  } else {
    displayName = obj4.getTierDisplayNameByPlanId(planId);
  }
  if (hasPremiumGroup) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3205["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = PremiumUtils.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = util.intl;
          if (num == null) {
            num = 0;
          }
          const obj5 = { date: num };
          stringResult = intl2.formatToPlainString(util.t["5CNRRA"], obj5);
          const tmp2Result = PremiumUtils;
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = util.intl;
    const obj6 = { planName: displayName };
    stringResult = intl.formatToPlainString(util.t.eNXZ5O, obj6);
  }
  let tmp18 = result1;
  if (!result1) {
    tmp18 = null != currentSubscription && currentSubscription.isPurchasedExternally;
    const tmp20 = null != currentSubscription && currentSubscription.isPurchasedExternally;
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  const obj7 = { style: items, children: null };
  items[1] = divider;
  if (result1) {
    const obj8 = { style: tmp.boostIcon, children: null };
    const obj9 = { size: "md", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    obj8.children = timestampProducer(BoostGemIcon.BoostGemIcon, obj9);
    let tmp24Result = timestampProducer(View, obj8);
    let tmp27 = timestampProducer;
  } else {
    const obj10 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
    tmp24Result = timestampProducer(GameIconDefault, obj10);
    tmp27 = timestampProducer;
    const tmp4Result = GameIconDefault;
  }
  const items1 = [tmp24Result, , ];
  const obj11 = { style: tmp.textContainer, children: null };
  const obj12 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = util.intl;
  obj12.children = intl4.format(util.t.LzobT9, { planName: displayName });
  const items2 = [tmp27(Text_Text.Text, obj12), ];
  let tmp27Result = !tmp18;
  if (!tmp18) {
    const obj13 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp27Result = tmp27(Text_Text.Text, obj13);
  }
  items2[1] = tmp27Result;
  obj11.children = items2;
  items1[1] = React5(View, obj11);
  const obj14 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = util.intl;
  obj14.children = intl5.format(util.t["ess/xl"], { count: months });
  items1[2] = tmp27(Text_Text.Text, obj14);
  obj7.children = items1;
  return React5(View, obj7);
});
ReactCompilerGating = fn(558);
let obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentSubscription) => {
  const cResult = currentSubscription(stateFromStoresArray[9]).c(35);
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, style, creditListContainerStyle, hasPremiumGroup } = currentSubscription);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EntitlementStore];
    const fn = function x() {
      return unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = currentSubscription(stateFromStoresArray[9]);
  stateFromStoresArray = currentSubscription(stateFromStoresArray[15]).useStateFromStoresArray(tmp5, tmp6);
  if (null != entitlements) {
    let iter = hasPremiumGroup;
    if (obj6.hasAccountCredit(entitlements)) {
      if (cResult[2] !== entitlements) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              tmp = null != currentSubscription.subscriptionPlanId;
              if (tmp) {
                tmp = null != currentSubscription.parentId;
              }
              if (tmp) {
                tmp = !currentSubscription.consumed;
              }
              return tmp;
            }
          }
          cResult[4] = T;
        } else {
          class T {
            constructor(arg0) {
              tmp = null != currentSubscription.subscriptionPlanId;
              if (tmp) {
                tmp = null != currentSubscription.parentId;
              }
              if (tmp) {
                tmp = !currentSubscription.consumed;
              }
              return tmp;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
          cResult[5] = D;
        } else {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
        }
        const _Array = Array;
        const iterResult = iter(tmp2[16]);
        const found = iter(tmp2[16])(Array.from(entitlements)).filter(T);
        iter = found.groupBy(D);
        const valueResult = iter.value();
        cResult[2] = entitlements;
        cResult[3] = valueResult;
        const iterResultResult = iter(tmp2[16])(Array.from(entitlements));
      } else {
        class D {
          constructor(arg0) {
            return currentSubscription.subscriptionPlanId;
          }
        }
        View = tmp9;
        const _Symbol3 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
          const stringResult = obj4.string(tmp(tmp2[11]).t.YugZY0);
          cResult[6] = stringResult;
          const tmp15 = stringResult;
        } else {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
        }
        if (cResult[7] !== tmp4.title) {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
          const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp15 };
          const tmp18 = closure_6(tmp(tmp2[14]).Text, obj2);
          cResult[7] = tmp4.title;
          cResult[8] = tmp18;
        } else {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
        }
        if (cResult[9] === creditListContainerStyle) {
          class D {
            constructor(arg0) {
              return currentSubscription.subscriptionPlanId;
            }
          }
          if (cResult[12] !== tmp9) {
            class D {
              constructor(arg0) {
                return currentSubscription.subscriptionPlanId;
              }
            }
            let keys = Object.keys(tmp9);
            cResult[12] = tmp9;
            cResult[13] = keys;
          } else {
            class D {
              constructor(arg0) {
                return currentSubscription.subscriptionPlanId;
              }
            }
          }
          if (cResult[14] === currentSubscription) {
            class D {
              constructor(arg0) {
                return currentSubscription.subscriptionPlanId;
              }
            }
          }
          const mapped = arr4.map((planId) => {
            const keys = Object.keys(tmp9);
            return timestampProducer(closure_9, { planId, months: tmp9[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, tmp9).length - 1], unconsumedFractionalPremiumUnits: stateFromStoresArray, hasPremiumGroup }, planId);
          });
          cResult[14] = currentSubscription;
          cResult[15] = tmp9;
          cResult[16] = hasPremiumGroup;
          cResult[17] = arr4;
          cResult[18] = stateFromStoresArray;
          cResult[19] = mapped;
        }
        const items1 = [tmp4.creditList, creditListContainerStyle];
        cResult[9] = creditListContainerStyle;
        cResult[10] = tmp4.creditList;
        cResult[11] = items1;
      }
    }
    obj6 = hasPremiumGroup(tmp2[10]);
  }
  return null;
}) : ((currentSubscription) => {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  const items = [EntitlementStore];
  dependencyMap = currentSubscription(504).useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = _modDef12;
      const found = _modDef12(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp11ResultResult = _modDef12(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      const obj2 = { style, children: null };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      const intl = tmp2(1126).intl;
      obj3.children = intl.string(tmp2(1126).t.YugZY0);
      const items1 = [closure_6(tmp2(4886).Text, obj3), , , ];
      const obj4 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj4.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj4.children = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return timestampProducer(closure_9, { planId, months: _undefined[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits, hasPremiumGroup }, planId);
      });
      items1[1] = closure_6(c3, obj4);
      const obj5 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
      const intl2 = tmp2(1126).intl;
      obj5.children = intl2.string(tmp2(1126).t.Z5b2Gf);
      items1[2] = closure_6(tmp2(4886).Text, obj5);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj6 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
          const intl3 = tmp2(1126).intl;
          obj6.children = intl3.string(tmp2(1126).t.azRP0E);
          tmp9Result = closure_6(tmp2(4886).Text, obj6);
        }
      }
      items1[3] = tmp9Result;
      obj2.children = items1;
      return closure_7(c3, obj2);
    }
    obj8 = PremiumUtilsDefault;
  }
  return null;
});