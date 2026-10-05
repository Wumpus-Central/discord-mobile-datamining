// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04844_AssetRegistry.js";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let copyResult, giftCodeRecord, importDefault, navigation, tmp3, trackGiftCodeCopyResult;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp14;
const PremiumGiftBackgroundAnimationDefault = tmp14(10562);
const View = react_native.View;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { disclaimer: obj2, title: obj3, description: obj4, input: obj5, inputLabel: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftCodeRecord) => {
      let first;
      let items;
      let onClose;
      let tmp7;
      const tmp2 = navigation;
      let obj = onClose(navigation[9]);
      const cResult = obj.c(22);
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      let obj2 = onClose(navigation[10]);
      const nativeGiftContext = obj2.useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj3 = onClose(navigation[11]);
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: "PremiumGiftSuccessActions" };
        cResult[0] = obj4;
        first = obj4;
      } else {
        first = cResult[0];
      }
      const GiftingBadgeExperiment = tmp(tmp2[12]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
      if (cResult[1] !== giftCodeRecord.code) {
        const tmpResult = onClose(tmp2[13]);
        const giftCodeURL = tmpResult.getGiftCodeURL(giftCodeRecord.code);
        cResult[1] = giftCodeRecord.code;
        cResult[2] = giftCodeURL;
        tmp7 = giftCodeURL;
      } else {
        tmp7 = cResult[2];
      }
      const url = tmp7;
      if (cResult[3] === prePurchaseGiftingBadgeProgress) {
        if (cResult[4] === enabled) {
          if (cResult[5] === navigation) {
            let tmp9;
            if (cResult[6] === onClose) {
              tmp9 = cResult[7];
            }
            if (cResult[8] === prePurchaseGiftingBadgeProgress) {
              if (cResult[9] === tmp7) {
                if (cResult[10] === enabled) {
                  let tmp10;
                  let tmp11;
                  let tmp13;
                  let tmp16;
                  let tmp18;
                  if (cResult[11] === navigation) {
                    tmp10 = cResult[12];
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[16]).intl;
                    const stringResult = intl.string(onClose(tmp2[16]).t.RDE0Sc);
                    cResult[13] = stringResult;
                    tmp11 = stringResult;
                  } else {
                    tmp11 = cResult[13];
                  }
                  if (cResult[14] !== tmp10) {
                    const obj5 = { variant: "primary", text: tmp11, onPress: tmp10 };
                    const tmp15 = closure_8(onClose(tmp2[17]).Button, obj5);
                    cResult[14] = tmp10;
                    cResult[15] = tmp15;
                    tmp13 = tmp15;
                  } else {
                    tmp13 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[16]).intl;
                    const stringResult1 = intl2.string(onClose(tmp2[16]).t.cpT0Cq);
                    cResult[16] = stringResult1;
                    tmp16 = stringResult1;
                  } else {
                    tmp16 = cResult[16];
                  }
                  if (cResult[17] !== tmp9) {
                    const obj6 = { variant: "secondary", text: tmp16, onPress: tmp9 };
                    const tmp20 = closure_8(onClose(tmp2[17]).Button, obj6);
                    cResult[17] = tmp9;
                    cResult[18] = tmp20;
                    tmp18 = tmp20;
                  } else {
                    tmp18 = cResult[18];
                  }
                  if (cResult[19] === tmp13) {
                    let tmp21;
                    if (cResult[20] === tmp18) {
                      tmp21 = cResult[21];
                    }
                    return tmp21;
                  }
                  const obj7 = { children: items };
                  items = [tmp13, tmp18];
                  const tmp24 = closure_10(closure_9, obj7);
                  cResult[19] = tmp13;
                  cResult[20] = tmp18;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
            const fn2 = function x() {
              const obj = showShareActionSheet;
              const obj2 = { url };
              obj.showShareActionSheet(obj2, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
              const tmp4 = enabled && null != prePurchaseGiftingBadgeProgress;
              if (tmp4) {
                const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
              }
            };
            cResult[8] = prePurchaseGiftingBadgeProgress;
            cResult[9] = tmp7;
            cResult[10] = enabled;
            cResult[11] = navigation;
            cResult[12] = fn2;
            tmp10 = fn2;
          }
        }
      }
      const fn = function h() {
        if (enabled) {
          if (null != prePurchaseGiftingBadgeProgress) {
            const obj = { currentProgress: tmp2 };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        }
        onClose();
      };
      cResult[3] = prePurchaseGiftingBadgeProgress;
      cResult[4] = enabled;
      cResult[5] = navigation;
      cResult[6] = onClose;
      cResult[7] = fn;
      tmp9 = fn;
    }
  : (giftCodeRecord) => {
      let intl;
      let intl2;
      let items2;
      let onClose;
      navigation = undefined;
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      let obj = onClose(navigation[10]);
      const nativeGiftContext = obj.useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj2 = onClose(navigation[11]);
      navigation = obj2.useNavigation();
      const GiftingBadgeExperiment = onClose(navigation[12]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
      let obj3 = onClose(navigation[13]);
      const giftCodeURL = obj3.getGiftCodeURL(giftCodeRecord.code);
      const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
      const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
      const callback = enabled.useCallback(() => {
        if (enabled) {
          if (null != prePurchaseGiftingBadgeProgress) {
            const obj = { currentProgress: tmp2 };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        }
        onClose();
      }, items);
      const obj4 = { children: items2 };
      const callback1 = enabled.useCallback(() => {
        const obj = showShareActionSheet;
        const obj2 = { url: giftCodeURL };
        obj.showShareActionSheet(obj2, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
        const tmp4 = enabled && null != prePurchaseGiftingBadgeProgress;
        if (tmp4) {
          const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
        }
      }, items1);
      const obj5 = { variant: "primary", text: intl.string(onClose(navigation[16]).t.RDE0Sc), onPress: callback1 };
      const Button = onClose(navigation[17]).Button;
      intl = onClose(navigation[16]).intl;
      items2 = [closure_8(Button, obj5)];
      const obj6 = { variant: "secondary", text: intl2.string(onClose(navigation[16]).t.cpT0Cq), onPress: callback };
      const Button2 = onClose(navigation[17]).Button;
      intl2 = onClose(navigation[16]).intl;
      items2[1] = closure_8(Button2, obj6);
      return closure_10(closure_9, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftCodeRecord) => {
      let closure_1;
      let giftStyle;
      let input;
      let inputLabel;
      let items;
      let items1;
      let obj11;
      let planInterval;
      let premiumType;
      let str;
      let subscriptionPlanId;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = giftCodeRecord(576);
      const cResult = obj.c(48);
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      const tmp4 = closure_11();
      let obj2 = giftCodeRecord(10430);
      const nativeGiftContext = obj2.useNativeGiftContext();
      ({ premiumType, planInterval, giftStyle } = nativeGiftContext);
      if (cResult[0] !== giftCodeRecord.code) {
        const tmpResult = giftCodeRecord(5310);
        const giftCodeURL = tmpResult.getGiftCodeURL(giftCodeRecord.code);
        cResult[0] = giftCodeRecord.code;
        cResult[1] = giftCodeURL;
        tmp6 = giftCodeURL;
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
                    tmp8 = cResult[9];
                    tmp9 = cResult[10];
                    tmp10 = cResult[11];
                    str = cResult[12];
                    tmp11 = cResult[13];
                    tmp12 = cResult[14];
                    tmp13 = cResult[15];
                  }
                  if (cResult[24] === tmp8) {
                    if (cResult[25] === tmp10) {
                      if (cResult[26] === str) {
                        let tmp31;
                        let tmp35;
                        let tmp37;
                        if (cResult[27] === tmp11) {
                          tmp31 = cResult[28];
                        }
                        const _Symbol2 = Symbol;
                        ({ input, inputLabel } = tmp4);
                        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = tmp(1126).intl;
                          const stringResult = intl3.string(giftCodeRecord(1126).t["qS+yMo"]);
                          cResult[29] = stringResult;
                          tmp35 = stringResult;
                        } else {
                          tmp35 = cResult[29];
                        }
                        if (cResult[30] !== tmp4.inputLabel) {
                          let obj3 = { style: inputLabel, variant: "heading-md/bold", children: tmp35 };
                          const tmp39 = closure_8(giftCodeRecord(4886).Text, obj3);
                          cResult[30] = tmp4.inputLabel;
                          cResult[31] = tmp39;
                          tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[31];
                        }
                        if (cResult[32] === tmp6) {
                          let tmp40;
                          if (cResult[33] === tmp9) {
                            tmp40 = cResult[34];
                          }
                          if (cResult[35] === tmp4.input) {
                            if (cResult[36] === tmp37) {
                              let tmp44;
                              let tmp48;
                              let tmp50;
                              if (cResult[37] === tmp40) {
                                tmp44 = cResult[38];
                              }
                              const _Symbol3 = Symbol;
                              const disclaimer = tmp4.disclaimer;
                              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl4 = tmp(1126).intl;
                                const stringResult1 = intl4.string(giftCodeRecord(1126).t.As9eLl);
                                cResult[39] = stringResult1;
                                tmp48 = stringResult1;
                              } else {
                                tmp48 = cResult[39];
                              }
                              if (cResult[40] !== tmp4.disclaimer) {
                                const obj4 = { style: disclaimer, variant: "text-xs/normal", children: tmp48 };
                                const tmp52 = closure_8(giftCodeRecord(4886).Text, obj4);
                                cResult[40] = tmp4.disclaimer;
                                cResult[41] = tmp52;
                                tmp50 = tmp52;
                              } else {
                                tmp50 = cResult[41];
                              }
                              if (cResult[42] === tmp44) {
                                if (cResult[43] === tmp50) {
                                  if (cResult[44] === tmp12) {
                                    if (cResult[45] === tmp13) {
                                      let tmp53;
                                      if (cResult[46] === tmp31) {
                                        tmp53 = cResult[47];
                                      }
                                      return tmp53;
                                    }
                                  }
                                }
                              }
                              const obj6 = { children: items };
                              items = [tmp12, tmp13, tmp31, tmp44, tmp50];
                              const tmp56 = closure_10(closure_9, obj6);
                              cResult[42] = tmp44;
                              cResult[43] = tmp50;
                              cResult[44] = tmp12;
                              cResult[45] = tmp13;
                              cResult[46] = tmp31;
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
                              cResult[47] = tmp56;
                              tmp53 = tmp56;
                            }
                          }
                          const obj7 = { style: input, children: items1 };
                          items1 = [tmp37, tmp40];
                          const tmp47 = closure_10(View, obj7);
                          cResult[35] = tmp4.input;
                          cResult[36] = tmp37;
                          cResult[37] = tmp40;
                          cResult[38] = tmp47;
                          tmp44 = tmp47;
                        }
                        const obj8 = { text: tmp6, icon: AssetRegistryDefault, iconPosition: "end", onPress: tmp9 };
                        const InputButton = tmp(8567).InputButton;
                        const tmp43 = closure_8(InputButton, obj8);
                        cResult[32] = tmp6;
                        cResult[33] = tmp9;
                        cResult[34] = tmp43;
                        tmp40 = tmp43;
                      }
                    }
                  }
                  const obj9 = { style: tmp10, variant: str, children: tmp11 };
                  const tmp33 = closure_8(tmp8, obj9);
                  cResult[24] = tmp8;
                  cResult[25] = tmp10;
                  cResult[26] = str;
                  cResult[27] = tmp11;
                  cResult[28] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
          }
        }
      }
      if (null != giftCodeRecord.subscriptionPlanId) {
        subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
      } else {
        const tmpResult2 = giftCodeRecord(4528);
        subscriptionPlanId = tmpResult2.getPlanIdForPremiumType(premiumType, planInterval);
      }
      const obj5 = PremiumUtilsDefault;
      const tierDisplayNameByPlanId = obj5.getTierDisplayNameByPlanId(subscriptionPlanId);
      PremiumUtilsDefault;
      if (cResult[16] === giftCodeRecord) {
        let tmp19;
        let tmp20;
        let tmp25;
        let tmp27;
        let bUdTqI;
        if (cResult[17] === tmp6) {
          tmp19 = cResult[18];
        }
        if (cResult[19] !== giftStyle) {
          const obj10 = { children: closure_8(PremiumGiftBackgroundAnimationDefault, obj11) };
          obj11 = { giftStyle };
          const tmp23 = closure_8(View, obj10);
          cResult[19] = giftStyle;
          cResult[20] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[20];
        }
        const _Symbol = Symbol;
        const title = tmp4.title;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult2 = intl.string(giftCodeRecord(1126).t["/s1xR7"]);
          cResult[21] = stringResult2;
          tmp25 = stringResult2;
        } else {
          tmp25 = cResult[21];
        }
        if (cResult[22] !== tmp4.title) {
          const obj12 = { style: title, variant: "heading-lg/bold", children: tmp25 };
          const tmp29 = closure_8(giftCodeRecord(4886).Text, obj12);
          cResult[22] = tmp4.title;
          cResult[23] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[23];
        }
        const Text = tmp(4886).Text;
        const description = tmp4.description;
        const intl2 = tmp(1126).intl;
        const format = intl2.format;
        if (tmp17 === tmp18) {
          bUdTqI = tmp(1126).t.rli5ey;
        } else {
          bUdTqI = tmp(1126).t.bUdTqI;
        }
        const obj13 = { intervalCount: 1, name: tierDisplayNameByPlanId };
        const formatResult = format(bUdTqI, obj13);
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
        cResult[10] = tmp19;
        cResult[11] = description;
        cResult[12] = "text-md/medium";
        cResult[13] = formatResult;
        cResult[14] = tmp20;
        cResult[15] = tmp27;
        tmp13 = tmp27;
        tmp12 = tmp20;
        tmp11 = formatResult;
        str = "text-md/medium";
        tmp10 = description;
        tmp9 = tmp19;
        tmp8 = Text;
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
      tmp19 = N;
    }
  : (giftCodeRecord) => {
      let bUdTqI;
      let format;
      let giftStyle;
      let intl;
      let intl3;
      let intl4;
      let items2;
      let planInterval;
      let premiumType;
      let subscriptionPlanId;
      giftCodeRecord = giftCodeRecord.giftCodeRecord;
      const tmp = closure_11();
      let obj = giftCodeRecord(10430);
      const nativeGiftContext = obj.useNativeGiftContext();
      ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
      let obj2 = giftCodeRecord(5310);
      const giftCodeURL = obj2.getGiftCodeURL(giftCodeRecord.code);
      if (null != giftCodeRecord.giftStyle) {
        giftStyle = giftCodeRecord.giftStyle;
      }
      if (null != giftCodeRecord.subscriptionPlanId) {
        subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
      } else {
        const tmp2Result = giftCodeRecord(4528);
        subscriptionPlanId = tmp2Result.getPlanIdForPremiumType(premiumType, planInterval);
      }
      const obj4 = giftCodeURL(4528);
      const tierDisplayNameByPlanId = obj4.getTierDisplayNameByPlanId(subscriptionPlanId);
      const items = [giftCodeRecord, giftCodeURL];
      const obj5 = giftCodeURL(4528);
      const intervalType = obj5.getInterval(subscriptionPlanId).intervalType;
      const YEAR = SubscriptionIntervalTypes.YEAR;
      let obj3 = { children: closure_8(giftCodeURL(10562), { giftStyle }) };
      const callback = react.useCallback(() => {
        const value = SKUStore.get(giftCodeRecord.skuId);
        if (null != value) {
          const obj = GiftCodeUtils;
          obj.trackGiftCodeCopy(giftCodeRecord, value);
        }
        const obj2 = ClipboardUtils;
        obj2.copy(giftCodeURL);
        const obj3 = ToastUtils;
        const result = obj3.presentCopiedToClipboard();
      }, items);
      const items1 = [closure_8(View, obj3), , , ,];
      const obj6 = {
        style: tmp.title,
        variant: "heading-lg/bold",
        children: intl.string(giftCodeRecord(1126).t["/s1xR7"]),
      };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      items1[1] = closure_8(Text, obj6);
      const obj7 = {
        style: tmp.description,
        variant: "text-md/medium",
        children: format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId }),
      };
      const Text2 = tmp2(4886).Text;
      const intl2 = tmp2(1126).intl;
      format = intl2.format;
      const tmp6 = giftCodeURL;
      if (intervalType === YEAR) {
        bUdTqI = tmp2(1126).t.rli5ey;
      } else {
        bUdTqI = tmp2(1126).t.bUdTqI;
      }
      const obj8 = { children: items1 };
      items1[2] = closure_8(Text2, obj7);
      const obj9 = { style: tmp.input, children: items2 };
      const obj10 = {
        style: tmp.inputLabel,
        variant: "heading-md/bold",
        children: intl3.string(giftCodeRecord(1126).t["qS+yMo"]),
      };
      const Text3 = tmp2(4886).Text;
      intl3 = tmp2(1126).intl;
      items2 = [closure_8(Text3, obj10)];
      const obj11 = { text: giftCodeURL, icon: tmp6(4844), iconPosition: "end", onPress: callback };
      const InputButton = tmp2(8567).InputButton;
      items2[1] = closure_8(InputButton, obj11);
      items1[3] = closure_10(View, obj9);
      const obj12 = {
        style: tmp.disclaimer,
        variant: "text-xs/normal",
        children: intl4.string(giftCodeRecord(1126).t.As9eLl),
      };
      const Text4 = tmp2(4886).Text;
      intl4 = tmp2(1126).intl;
      items1[4] = closure_8(Text4, obj12);
      return closure_10(closure_9, obj8);
    };
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default tmp5;
export const PremiumGiftSuccessActions = tmp4;
