// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import _modDef5043 from "../../../../../_runtime/metro/05043__.js";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

const PremiumGiftBackgroundAnimationDefault = tmp15(10186);
require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1392).SubscriptionIntervalTypes;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  disclaimer: { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 },
  title: null,
  description: null,
  input: null,
  inputLabel: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.input = { marginTop: nativeDefault.space.PX_24 };
let obj6 = { marginTop: nativeDefault.space.PX_24 };
obj2.inputLabel = { marginBottom: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
fn(558);
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGiftSuccessActions(giftCodeRecord) {
      const cResult = onClose(navigation[9]).c(22);
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      let obj = onClose(navigation[9]);
      const nativeGiftContext = onClose(navigation[10]).useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj2 = onClose(navigation[10]);
      navigation = onClose(navigation[11]).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: "PremiumGiftSuccessActions" };
        cResult[0] = obj4;
        let first = obj4;
      } else {
        first = cResult[0];
      }
      const GiftingBadgeExperiment = tmp(tmp2[12]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
      if (cResult[1] !== giftCodeRecord.code) {
        const giftCodeURL = tmp(tmp2[13]).getGiftCodeURL(giftCodeRecord.code);
        cResult[1] = giftCodeRecord.code;
        cResult[2] = giftCodeURL;
        let tmp7 = giftCodeURL;
        const tmpResult = tmp(tmp2[13]);
      } else {
        tmp7 = cResult[2];
      }
      const url = tmp7;
      if (cResult[3] === prePurchaseGiftingBadgeProgress) {
        if (cResult[4] === enabled) {
          if (cResult[5] === navigation) {
            if (cResult[6] === onClose) {
              let tmp9 = cResult[7];
            }
            if (cResult[8] === prePurchaseGiftingBadgeProgress) {
              if (cResult[9] === tmp7) {
                if (cResult[10] === enabled) {
                  if (cResult[11] === navigation) {
                    let tmp10 = cResult[12];
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[16]).intl;
                    const stringResult = intl.string(tmp(tmp2[16]).t.RDE0Sc);
                    cResult[13] = stringResult;
                    let tmp11 = stringResult;
                  } else {
                    tmp11 = cResult[13];
                  }
                  if (cResult[14] !== tmp10) {
                    const obj5 = { variant: "primary", text: tmp11, onPress: tmp10 };
                    const tmp15 = closure_8(tmp(tmp2[17]).Button, obj5);
                    cResult[14] = tmp10;
                    cResult[15] = tmp15;
                    let tmp13 = tmp15;
                  } else {
                    tmp13 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[16]).intl;
                    const stringResult1 = intl2.string(tmp(tmp2[16]).t.cpT0Cq);
                    cResult[16] = stringResult1;
                    let tmp16 = stringResult1;
                  } else {
                    tmp16 = cResult[16];
                  }
                  if (cResult[17] !== tmp9) {
                    const obj6 = { variant: "secondary", text: tmp16, onPress: tmp9 };
                    const tmp20 = closure_8(tmp(tmp2[17]).Button, obj6);
                    cResult[17] = tmp9;
                    cResult[18] = tmp20;
                    let tmp18 = tmp20;
                  } else {
                    tmp18 = cResult[18];
                  }
                  if (cResult[19] === tmp13) {
                    if (cResult[20] === tmp18) {
                      let tmp21 = cResult[21];
                    }
                    return tmp21;
                  }
                  const obj7 = { children: null };
                  const items = [tmp13, tmp18];
                  obj7.children = items;
                  const tmp24 = closure_10(closure_9, obj7);
                  cResult[19] = tmp13;
                  cResult[20] = tmp18;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
            const fn = function x() {
              showShareActionSheet.showShareActionSheet({ url }, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
              let tmp4 = enabled;
              if (enabled) {
                tmp4 = null != prePurchaseGiftingBadgeProgress;
              }
              if (tmp4) {
                const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
              }
              const obj2 = { url };
            };
            cResult[8] = prePurchaseGiftingBadgeProgress;
            cResult[9] = tmp7;
            cResult[10] = enabled;
            cResult[11] = navigation;
            cResult[12] = fn;
            tmp10 = fn;
          }
        }
      }
      class C {
        constructor() {
          if (enabled) {
            tmp2 = null;
            if (null != closure_1) {
              tmp4 = closure_2;
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = { currentProgress: null };
              obj.currentProgress = tmp;
              navigateResult = closure_2.navigate(closure_0(closure_2[14]).PremiumGiftScreens.GIFTING_BADGE, obj);
            }
            return;
          }
          tmp3 = onClose();
          return;
        }
      }
      cResult[3] = prePurchaseGiftingBadgeProgress;
      cResult[4] = enabled;
      cResult[5] = navigation;
      cResult[6] = onClose;
      cResult[7] = C;
      tmp9 = C;
      let obj3 = onClose(navigation[11]);
    }
  : function PremiumGiftSuccessActions(giftCodeRecord) {
      let onClose;
      let navigation;
      const nativeGiftContext = onClose(navigation[10]).useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj = onClose(navigation[10]);
      navigation = onClose(navigation[11]).useNavigation();
      const GiftingBadgeExperiment = onClose(navigation[12]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
      let obj2 = onClose(navigation[11]);
      const giftCodeURL = onClose(navigation[13]).getGiftCodeURL(giftCodeRecord.giftCodeRecord.code);
      const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
      const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
      const callback = enabled.useCallback(() => {
        if (enabled) {
          if (null != prePurchaseGiftingBadgeProgress) {
            const obj = { currentProgress: tmp };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        }
        onClose();
      }, items);
      const obj4 = { children: null };
      const callback1 = enabled.useCallback(() => {
        showShareActionSheet.showShareActionSheet({ url: giftCodeURL }, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
        let tmp4 = enabled;
        if (enabled) {
          tmp4 = null != prePurchaseGiftingBadgeProgress;
        }
        if (tmp4) {
          const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
        }
        const obj2 = { url: giftCodeURL };
      }, items1);
      const obj5 = { variant: "primary", text: null, onPress: null };
      const intl = onClose(navigation[16]).intl;
      obj5.text = intl.string(onClose(navigation[16]).t.RDE0Sc);
      obj5.onPress = callback1;
      const items2 = [closure_8(onClose(navigation[17]).Button, obj5)];
      const obj6 = { variant: "secondary", text: null, onPress: null };
      const intl2 = onClose(navigation[16]).intl;
      obj6.text = intl2.string(onClose(navigation[16]).t.cpT0Cq);
      obj6.onPress = callback;
      items2[1] = closure_8(onClose(navigation[17]).Button, obj6);
      obj4.children = items2;
      return closure_10(closure_9, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGiftSuccessBody(giftCodeRecord) {
      const cResult = giftCodeRecord(576).c(48);
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      const tmp4 = closure_11();
      let obj = giftCodeRecord(576);
      const nativeGiftContext = giftCodeRecord(10054).useNativeGiftContext();
      ({ premiumType, planInterval, giftStyle } = nativeGiftContext);
      if (cResult[0] !== giftCodeRecord.code) {
        const giftCodeURL = tmp(5633).getGiftCodeURL(giftCodeRecord.code);
        cResult[0] = giftCodeRecord.code;
        cResult[1] = giftCodeURL;
        let tmp6 = giftCodeURL;
        const tmpResult = tmp(5633);
      } else {
        tmp6 = cResult[1];
      }
      importDefault = tmp6;
      if (null != giftCodeRecord.giftStyle) {
        giftStyle = giftCodeRecord.giftStyle;
      }
      if (cResult[2] === giftCodeRecord) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === planInterval) {
            if (cResult[5] === premiumType) {
              if (cResult[6] === giftStyle) {
                if (cResult[7] === tmp4.description) {
                  if (cResult[8] === tmp4.title) {
                    if (cResult[24] === cResult[9]) {
                      if (cResult[25] === tmp10) {
                        if (cResult[26] === tmp11) {
                          if (cResult[27] === tmp12) {
                            let tmp38 = cResult[28];
                          }
                          const _Symbol2 = Symbol;
                          ({ input, inputLabel } = tmp4);
                          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = tmp(1126).intl;
                            const stringResult = intl3.string(tmp(1126).t["qS+yMo"]);
                            cResult[29] = stringResult;
                            let tmp42 = stringResult;
                          } else {
                            tmp42 = cResult[29];
                          }
                          if (cResult[30] !== tmp4.inputLabel) {
                            let obj3 = { style: inputLabel, variant: "heading-md/bold", children: tmp42 };
                            const tmp46 = closure_8(tmp(5088).Text, obj3);
                            cResult[30] = tmp4.inputLabel;
                            cResult[31] = tmp46;
                            let tmp44 = tmp46;
                          } else {
                            tmp44 = cResult[31];
                          }
                          if (cResult[32] === tmp6) {
                            if (cResult[33] === tmp9) {
                              let tmp47 = cResult[34];
                            }
                            if (cResult[35] === tmp4.input) {
                              if (cResult[36] === tmp44) {
                                if (cResult[37] === tmp47) {
                                  let tmp51 = cResult[38];
                                }
                                const _Symbol3 = Symbol;
                                if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl4 = tmp(1126).intl;
                                  const stringResult1 = intl4.string(tmp(1126).t.As9eLl);
                                  cResult[39] = stringResult1;
                                  let tmp55 = stringResult1;
                                } else {
                                  tmp55 = cResult[39];
                                }
                                if (cResult[40] !== tmp4.disclaimer) {
                                  const obj4 = { style: tmp4.disclaimer, variant: "text-xs/normal", children: tmp55 };
                                  const tmp59 = closure_8(tmp(5088).Text, obj4);
                                  cResult[40] = tmp4.disclaimer;
                                  cResult[41] = tmp59;
                                  let tmp57 = tmp59;
                                } else {
                                  tmp57 = cResult[41];
                                }
                                if (cResult[42] === tmp51) {
                                  if (cResult[43] === tmp57) {
                                    if (cResult[44] === tmp13) {
                                      if (cResult[45] === tmp14) {
                                        if (cResult[46] === tmp38) {
                                          let tmp60 = cResult[47];
                                        }
                                        return tmp60;
                                      }
                                    }
                                  }
                                }
                                const obj6 = { children: null };
                                const items = [tmp13, tmp14, tmp38, tmp51, tmp57];
                                obj6.children = items;
                                const tmp63 = closure_10(closure_9, obj6);
                                cResult[42] = tmp51;
                                cResult[43] = tmp57;
                                cResult[44] = tmp13;
                                cResult[45] = tmp14;
                                cResult[46] = tmp38;
                                class N {
                                  constructor() {
                                    tmp = giftCodeRecord;
                                    value = closure_5.get(giftCodeRecord.skuId);
                                    if (null != value) {
                                      tmp3 = closure_0;
                                      tmp4 = closure_2;
                                      obj = closure_0(closure_2[13]);
                                      trackGiftCodeCopyResult = obj.trackGiftCodeCopy(tmp, value);
                                    }
                                    obj2 = closure_0(closure_2[19]);
                                    copyResult = obj2.copy(closure_1);
                                    obj3 = closure_0(closure_2[20]);
                                    result = obj3.presentCopiedToClipboard();
                                    return;
                                  }
                                }
                                cResult[47] = tmp63;
                                tmp60 = tmp63;
                              }
                            }
                            const obj7 = { style: input, children: null };
                            const items1 = [tmp44, tmp47];
                            obj7.children = items1;
                            const tmp54 = closure_10(View, obj7);
                            cResult[35] = tmp4.input;
                            cResult[36] = tmp44;
                            cResult[37] = tmp47;
                            cResult[38] = tmp54;
                            tmp51 = tmp54;
                          }
                          const obj8 = { text: tmp6, icon: _modDef5043, iconPosition: "end", onPress: tmp9 };
                          const tmp50 = closure_8(tmp(8541).InputButton, obj8);
                          cResult[32] = tmp6;
                          cResult[33] = tmp9;
                          cResult[34] = tmp50;
                          tmp47 = tmp50;
                        }
                      }
                    }
                    const obj9 = { style: cResult[11], variant: cResult[12], children: cResult[13] };
                    const tmp40 = closure_8(cResult[9], obj9);
                    cResult[24] = cResult[9];
                    cResult[25] = cResult[11];
                    cResult[26] = cResult[12];
                    cResult[27] = cResult[13];
                    cResult[28] = tmp40;
                    tmp38 = tmp40;
                  }
                }
              }
            }
          }
        }
      }
      if (null != giftCodeRecord.subscriptionPlanId) {
        let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
      } else {
        subscriptionPlanId = tmp(4769).getPlanIdForPremiumType(premiumType, planInterval);
        const tmpResult2 = tmp(4769);
      }
      let obj2 = giftCodeRecord(10054);
      const tierDisplayNameByPlanId = PremiumUtilsDefault.getTierDisplayNameByPlanId(subscriptionPlanId);
      PremiumUtilsDefault;
      if (cResult[16] === giftCodeRecord) {
        if (cResult[17] === tmp6) {
          let tmp20 = cResult[18];
        }
        if (cResult[19] !== giftStyle) {
          const obj10 = { children: null };
          const obj11 = { giftStyle };
          obj10.children = closure_8(PremiumGiftBackgroundAnimationDefault, obj11);
          const tmp24 = closure_8(View, obj10);
          cResult[19] = giftStyle;
          cResult[20] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[20];
        }
        const _Symbol = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult2 = intl.string(tmp(1126).t["/s1xR7"]);
          cResult[21] = stringResult2;
          let tmp26 = stringResult2;
        } else {
          tmp26 = cResult[21];
        }
        if (cResult[22] !== tmp4.title) {
          const obj12 = { style: tmp4.title, variant: "heading-lg/bold", children: tmp26 };
          const tmp30 = closure_8(tmp(5088).Text, obj12);
          cResult[22] = tmp4.title;
          cResult[23] = tmp30;
          let tmp28 = tmp30;
        } else {
          tmp28 = cResult[23];
        }
        const Text = tmp(5088).Text;
        const description = tmp4.description;
        const intl2 = tmp(1126).intl;
        if (tmp18 === tmp19) {
          let bUdTqI = tmp(1126).t.rli5ey;
        } else {
          bUdTqI = tmp(1126).t.bUdTqI;
        }
        const obj13 = { intervalCount: 1, name: tierDisplayNameByPlanId };
        const formatResult = intl2.format(bUdTqI, obj13);
        cResult[2] = giftCodeRecord;
        cResult[3] = tmp6;
        cResult[4] = planInterval;
        cResult[5] = premiumType;
        cResult[6] = giftStyle;
        class N {
          constructor() {
            tmp = giftCodeRecord;
            value = closure_5.get(giftCodeRecord.skuId);
            if (null != value) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[13]);
              trackGiftCodeCopyResult = obj.trackGiftCodeCopy(tmp, value);
            }
            obj2 = closure_0(closure_2[19]);
            copyResult = obj2.copy(closure_1);
            obj3 = closure_0(closure_2[20]);
            result = obj3.presentCopiedToClipboard();
            return;
          }
        }
        cResult[8] = tmp4.title;
        cResult[9] = Text;
        cResult[10] = tmp20;
        cResult[11] = description;
        giftStyle = "text-md/medium";
        cResult[12] = "text-md/medium";
        cResult[13] = formatResult;
        cResult[14] = tmp21;
        cResult[15] = tmp28;
      }
      class N {
        constructor() {
          tmp = giftCodeRecord;
          value = closure_5.get(giftCodeRecord.skuId);
          if (null != value) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[13]);
            trackGiftCodeCopyResult = obj.trackGiftCodeCopy(tmp, value);
          }
          obj2 = closure_0(closure_2[19]);
          copyResult = obj2.copy(closure_1);
          obj3 = closure_0(closure_2[20]);
          result = obj3.presentCopiedToClipboard();
          return;
        }
      }
      cResult[16] = giftCodeRecord;
      cResult[17] = tmp6;
      cResult[18] = N;
      tmp20 = N;
    }
  : function PremiumGiftSuccessBody(giftCodeRecord) {
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      const tmp = closure_11();
      const nativeGiftContext = giftCodeRecord(10054).useNativeGiftContext();
      ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
      let obj = giftCodeRecord(10054);
      const giftCodeURL = giftCodeRecord(5633).getGiftCodeURL(giftCodeRecord.code);
      if (null != giftCodeRecord.giftStyle) {
        giftStyle = giftCodeRecord.giftStyle;
      }
      if (null != giftCodeRecord.subscriptionPlanId) {
        let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
      } else {
        subscriptionPlanId = tmp2(4769).getPlanIdForPremiumType(premiumType, planInterval);
        const tmp2Result = tmp2(4769);
      }
      let obj2 = giftCodeRecord(5633);
      const tmp6 = giftCodeURL;
      const tierDisplayNameByPlanId = giftCodeURL(4769).getTierDisplayNameByPlanId(subscriptionPlanId);
      const obj4 = giftCodeURL(4769);
      const items = [giftCodeRecord, giftCodeURL];
      let obj3 = { children: null };
      const callback = noop.useCallback(() => {
        value = SKUStore.get(giftCodeRecord.skuId);
        if (null != value) {
          GiftCodeUtils.trackGiftCodeCopy(giftCodeRecord, value);
        }
        ClipboardUtils.copy(giftCodeURL);
        const result = ToastUtils.presentCopiedToClipboard();
      }, items);
      obj3.children = closure_8(giftCodeURL(10186), { giftStyle });
      const items1 = [closure_8(View, obj3), , , ,];
      const obj6 = { style: tmp.title, variant: "heading-lg/bold", children: null };
      const intl = tmp2(1126).intl;
      obj6.children = intl.string(giftCodeRecord(1126).t["/s1xR7"]);
      items1[1] = closure_8(giftCodeRecord(5088).Text, obj6);
      const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
      const intl2 = tmp2(1126).intl;
      if (obj5.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
        let bUdTqI = tmp2(1126).t.rli5ey;
      } else {
        bUdTqI = tmp2(1126).t.bUdTqI;
      }
      const obj8 = { children: null };
      obj7.children = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
      items1[2] = closure_8(giftCodeRecord(5088).Text, obj7);
      const obj9 = { style: tmp.input, children: null };
      const obj10 = { style: tmp.inputLabel, variant: "heading-md/bold", children: null };
      const intl3 = tmp2(1126).intl;
      obj10.children = intl3.string(giftCodeRecord(1126).t["qS+yMo"]);
      const items2 = [closure_8(giftCodeRecord(5088).Text, obj10)];
      obj5 = giftCodeURL(4769);
      items2[1] = closure_8(giftCodeRecord(8541).InputButton, {
        text: giftCodeURL,
        icon: tmp6(5043),
        iconPosition: "end",
        onPress: callback,
      });
      obj9.children = items2;
      items1[3] = closure_10(View, obj9);
      const obj12 = { style: tmp.disclaimer, variant: "text-xs/normal", children: null };
      const intl4 = tmp2(1126).intl;
      obj12.children = intl4.string(giftCodeRecord(1126).t.As9eLl);
      items1[4] = closure_8(giftCodeRecord(5088).Text, obj12);
      obj8.children = items1;
      return closure_10(closure_9, obj8);
    };
export const PremiumGiftSuccessActions = tmp3;
