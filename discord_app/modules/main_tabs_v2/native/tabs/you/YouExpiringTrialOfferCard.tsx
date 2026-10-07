// === Module 17004: YouExpiringTrialOfferCard ===

// Module 17004 (YouExpiringTrialOfferCard)
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef4467 from "module_4467" /* 4467 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import useCountdownDefault from "useCountdown" /* 6961 */;
import NoticeActionCreatorsDefault from "NoticeActionCreators" /* 17005 */;
import noop from "module_19" /* 19 */;
import NoticeStore from "NoticeStore" /* 13549 */;

require = fn;
function getNoticeCopy(days, trialPeriod, termsUrl) {
  if (days.days > 0) {
    const intl3 = util.intl;
    const obj2 = { days: days.days, trialPeriod, termsUrl };
    let formatResult = intl3.format(util.t.GPqVWT, obj2);
  } else if (days.hours > 0) {
    const intl2 = util.intl;
    const obj3 = { hours: days.hours, trialPeriod, termsUrl };
    formatResult = intl2.format(util.t.WFMtg1, obj3);
  } else {
    const intl = util.intl;
    const obj = { minutes: null, trialPeriod: null, termsUrl: null };
    const _Math = Math;
    obj.minutes = Math.max(days.minutes, 1);
    obj.trialPeriod = trialPeriod;
    obj.termsUrl = termsUrl;
    formatResult = intl.format(util.t.SxXB42, obj);
  }
  return formatResult;
}
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, HelpdeskArticles: closure_7, HorizontalGradient: closure_8, NoticeTypes: closure_9 } = Constants);
const Gradients = fn(6951).Gradients;
let closure_11 = fn(1379).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4896);
let obj2 = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 }, closeIcon: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, primaryCTA: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.primaryCTA = { borderRadius: nativeDefault.radii.round, gap: 4 };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.round, gap: 4 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToPremium) => {
  const cResult = navigateToPremium(576).c(61);
  navigateToPremium = navigateToPremium.navigateToPremium;
  const style = navigateToPremium.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const addResult = untilAtLeast(4467)().add(5, "days");
    cResult[0] = addResult;
    untilAtLeast = addResult;
    let obj2 = untilAtLeast(4467)();
  } else {
    untilAtLeast = cResult[0];
  }
  const tmp7 = closure_16();
  dependencyMap = tmp7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [shouldShowExpiringTrialOfferCard];
    class A {
      constructor() {
        return closure_5.getNoticeType();
      }
    }
    cResult[1] = items;
    cResult[2] = A;
    let tmp9 = A;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  let obj = navigateToPremium(576);
  const stateFromStores = navigateToPremium(573).useStateFromStores(tmp8, tmp9);
  const tmpResult = navigateToPremium(573);
  const premiumTrialOffer = navigateToPremium(6969).usePremiumTrialOffer();
  if (cResult[3] !== premiumTrialOffer) {
    let num5 = 0;
    if (null != premiumTrialOffer) {
      num5 = 0;
      if (null != premiumTrialOffer.expiresAt) {
        const expiresAt = premiumTrialOffer.expiresAt;
        num5 = expiresAt.getTime();
      }
    }
    class A {
      constructor() {
        return closure_5.getNoticeType();
      }
    }
    cResult[3] = premiumTrialOffer;
    cResult[4] = num5;
    let tmp13 = num5;
  } else {
    tmp13 = cResult[4];
  }
  const tmp16 = untilAtLeast(6961)(tmp13, closure_15);
  const tmpResult4 = navigateToPremium(6969);
  shouldShowExpiringTrialOfferCard = navigateToPremium(17003).useShouldShowExpiringTrialOfferCard();
  if (cResult[5] === stateFromStores) {
    if (cResult[6] === shouldShowExpiringTrialOfferCard) {
      if (cResult[7] === premiumTrialOffer) {
        let tmp18 = cResult[8];
        let tmp19 = cResult[9];
      }
      const effect = stateFromStores.useEffect(tmp18, tmp19);
      class A {
        constructor() {
          return closure_5.getNoticeType();
        }
      }
      if (shouldShowExpiringTrialOfferCard) {
        if (null != premiumTrialOffer) {
          if (null != stateFromStores) {
            if (cResult[10] === tmp16) {
              if (cResult[11] === tmp7.header) {
                const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
                class A {
                  constructor() {
                    return closure_5.getNoticeType();
                  }
                }
                if (cResult[12] === undefined) {
                  const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
                  class A {
                    constructor() {
                      return closure_5.getNoticeType();
                    }
                  }
                  if (cResult[13] === undefined) {
                    if (cResult[14] === premiumTrialOffer.trialId) {
                      let tmp24 = cResult[15];
                      let tmp25 = cResult[16];
                      let tmp26 = cResult[17];
                      class A {
                        constructor() {
                          return closure_5.getNoticeType();
                        }
                      }
                      let str3 = cResult[19];
                      let tmp27 = cResult[20];
                    }
                    if (cResult[21] === tmp24) {
                      if (cResult[22] === str2) {
                        if (cResult[23] === str3) {
                          if (cResult[24] === tmp27) {
                            let tmp41 = cResult[25];
                          }
                          if (cResult[26] === tmp25) {
                            if (cResult[27] === tmp26) {
                              if (cResult[28] === tmp41) {
                                let tmp45 = cResult[29];
                              }
                              const _Symbol = Symbol;
                              const closeButton = tmp7.closeButton;
                              class A {
                                constructor() {
                                  return closure_5.getNoticeType();
                                }
                              }
                              if (tmp49 === Symbol.for("react.memo_cache_sentinel")) {
                                const intl = tmp(1126).intl;
                                const stringResult = intl.string(tmp(1126).t.cpT0Cq);
                                class A {
                                  constructor() {
                                    return closure_5.getNoticeType();
                                  }
                                }
                                cResult[30] = stringResult;
                                cResult[31] = tmp53;
                                let tmp51 = tmp53;
                                let tmp50 = stringResult;
                              } else {
                                tmp50 = cResult[30];
                                tmp51 = cResult[31];
                              }
                              if (cResult[32] === stateFromStores) {
                                if (cResult[33] === premiumTrialOffer.trialId) {
                                  let tmp54 = cResult[34];
                                }
                                if (cResult[35] !== tmp7.closeIcon.color) {
                                  const size = { width: 16, height: 16, color: tmp7.closeIcon.color };
                                  class A {
                                    constructor() {
                                      return closure_5.getNoticeType();
                                    }
                                  }
                                  cResult[35] = tmp7.closeIcon.color;
                                  cResult[36] = tmp57;
                                  let tmp55 = tmp57;
                                } else {
                                  tmp55 = cResult[36];
                                }
                                if (cResult[37] === tmp7.closeButton) {
                                  if (cResult[38] === tmp54) {
                                    if (cResult[39] === tmp55) {
                                      let tmp58 = cResult[40];
                                    }
                                    const _Symbol2 = Symbol;
                                    class A {
                                      constructor() {
                                        return closure_5.getNoticeType();
                                      }
                                    }
                                    if (tmp60 === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl2 = tmp(1126).intl;
                                      const stringResult1 = intl2.string(tmp(1126).t.J61px0);
                                      class A {
                                        constructor() {
                                          return closure_5.getNoticeType();
                                        }
                                      }
                                      cResult[41] = stringResult1;
                                    }
                                    if (cResult[42] === navigateToPremium) {
                                      if (cResult[43] === stateFromStores) {
                                        if (cResult[44] === premiumTrialOffer.trialId) {
                                          let tmp63 = cResult[45];
                                        }
                                        const _Symbol3 = Symbol;
                                        class A {
                                          constructor() {
                                            return closure_5.getNoticeType();
                                          }
                                        }
                                        if (cResult[47] === stateFromStores) {
                                          if (cResult[48] === tmp7.linearGradient) {
                                            let tmp66 = cResult[49];
                                          }
                                          if (cResult[50] === tmp7.primaryCTA) {
                                            if (cResult[51] === tmp63) {
                                              if (cResult[52] === tmp66) {
                                                let tmp67 = cResult[53];
                                              }
                                              if (cResult[54] === tmp45) {
                                                if (cResult[55] === tmp58) {
                                                  if (cResult[56] === tmp67) {
                                                    let tmp71 = cResult[57];
                                                  }
                                                  if (cResult[58] === tmp71) {
                                                    if (cResult[59] === style) {
                                                      let tmp75 = cResult[60];
                                                    }
                                                    return tmp75;
                                                  }
                                                  class A {
                                                    constructor() {
                                                      return closure_5.getNoticeType();
                                                    }
                                                  }
                                                  tmp77[0] = style;
                                                  class Q {
                                                    constructor() {
                                                      tmp = jsx;
                                                      obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: null };
                                                      items = [];
                                                      items[0] = closure_2.linearGradient;
                                                      obj.style = items;
                                                      tmp3 = closure_3;
                                                      tmp2 = closure_1(closure_2[26]);
                                                      if (NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING === closure_3) {
                                                        tmp11 = Gradients;
                                                        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                                      } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
                                                        tmp10 = Gradients;
                                                        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                                      } else {
                                                        tmp5 = globalThis;
                                                        _Error = Error;
                                                        _HermesInternal = HermesInternal;
                                                        str = "Unsupported notice type: ";
                                                        tmp6 = new.target;
                                                        tmp7 = new.target;
                                                        error = new Error("Unsupported notice type: " + tmp3);
                                                        tmp9 = error;
                                                        throw error;
                                                      }
                                                      obj.colors = PREMIUM_TIER_2_TRI_COLOR;
                                                      return tmp(tmp2, obj);
                                                    }
                                                  }
                                                  const tmp78 = closure_12(tmp15(6713), tmp77);
                                                  cResult[58] = tmp71;
                                                  cResult[59] = style;
                                                  cResult[60] = tmp78;
                                                  tmp75 = tmp78;
                                                }
                                              }
                                              class A {
                                                constructor() {
                                                  return closure_5.getNoticeType();
                                                }
                                              }
                                              let obj3 = { children: null };
                                              class Q {
                                                constructor() {
                                                  tmp = jsx;
                                                  obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: null };
                                                  items = [];
                                                  items[0] = closure_2.linearGradient;
                                                  obj.style = items;
                                                  tmp3 = closure_3;
                                                  tmp2 = closure_1(closure_2[26]);
                                                  if (NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING === closure_3) {
                                                    tmp11 = Gradients;
                                                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                                  } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
                                                    tmp10 = Gradients;
                                                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                                  } else {
                                                    tmp5 = globalThis;
                                                    _Error = Error;
                                                    _HermesInternal = HermesInternal;
                                                    str = "Unsupported notice type: ";
                                                    tmp6 = new.target;
                                                    tmp7 = new.target;
                                                    error = new Error("Unsupported notice type: " + tmp3);
                                                    tmp9 = error;
                                                    throw error;
                                                  }
                                                  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
                                                  return tmp(tmp2, obj);
                                                }
                                              }
                                              tmp73[0] = tmp45;
                                              tmp73[1] = tmp58;
                                              tmp73[2] = tmp67;
                                              obj3.children = tmp73;
                                              const tmp74 = closure_14(closure_13, obj3);
                                              cResult[54] = tmp45;
                                              cResult[55] = tmp58;
                                              cResult[56] = tmp67;
                                              cResult[57] = tmp74;
                                              tmp71 = tmp74;
                                            }
                                          }
                                          class A {
                                            constructor() {
                                              return closure_5.getNoticeType();
                                            }
                                          }
                                          tmp69[0] = tmp7.primaryCTA;
                                          class Q {
                                            constructor() {
                                              tmp = jsx;
                                              obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: null };
                                              items = [];
                                              items[0] = closure_2.linearGradient;
                                              obj.style = items;
                                              tmp3 = closure_3;
                                              tmp2 = closure_1(closure_2[26]);
                                              if (NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING === closure_3) {
                                                tmp11 = Gradients;
                                                PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                              } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
                                                tmp10 = Gradients;
                                                PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                              } else {
                                                tmp5 = globalThis;
                                                _Error = Error;
                                                _HermesInternal = HermesInternal;
                                                str = "Unsupported notice type: ";
                                                tmp6 = new.target;
                                                tmp7 = new.target;
                                                error = new Error("Unsupported notice type: " + tmp3);
                                                tmp9 = error;
                                                throw error;
                                              }
                                              obj.colors = PREMIUM_TIER_2_TRI_COLOR;
                                              return tmp(tmp2, obj);
                                            }
                                          }
                                          tmp69[2] = tmp63;
                                          tmp69[3] = tmp65;
                                          tmp69[4] = tmp66;
                                          const tmp70 = closure_12(tmp(1188).ShinyButton, tmp69);
                                          cResult[50] = tmp7.primaryCTA;
                                          cResult[51] = tmp63;
                                          cResult[52] = tmp66;
                                          cResult[53] = tmp70;
                                          tmp67 = tmp70;
                                        }
                                        class Q {
                                          constructor() {
                                            tmp = jsx;
                                            obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: null };
                                            items = [];
                                            items[0] = closure_2.linearGradient;
                                            obj.style = items;
                                            tmp3 = closure_3;
                                            tmp2 = closure_1(closure_2[26]);
                                            if (NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING === closure_3) {
                                              tmp11 = Gradients;
                                              PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                                            } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === tmp3) {
                                              tmp10 = Gradients;
                                              PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                                            } else {
                                              tmp5 = globalThis;
                                              _Error = Error;
                                              _HermesInternal = HermesInternal;
                                              str = "Unsupported notice type: ";
                                              tmp6 = new.target;
                                              tmp7 = new.target;
                                              error = new Error("Unsupported notice type: " + tmp3);
                                              tmp9 = error;
                                              throw error;
                                            }
                                            obj.colors = PREMIUM_TIER_2_TRI_COLOR;
                                            return tmp(tmp2, obj);
                                          }
                                        }
                                        cResult[47] = stateFromStores;
                                        cResult[48] = tmp7.linearGradient;
                                        cResult[49] = Q;
                                        tmp66 = Q;
                                      }
                                    }
                                    const fn3 = function $() {
                                      if (null != stateFromStores) {
                                        const obj2 = { notice_type: tmp, trial_id: tmp2 };
                                        AnalyticsUtilsDefault.track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
                                      }
                                      navigateToPremium();
                                    };
                                    cResult[42] = navigateToPremium;
                                    cResult[43] = stateFromStores;
                                    cResult[44] = premiumTrialOffer.trialId;
                                    cResult[45] = fn3;
                                    tmp63 = fn3;
                                  }
                                }
                                class A {
                                  constructor() {
                                    return closure_5.getNoticeType();
                                  }
                                }
                                let obj4 = { style: null, accessibilityRole: "button", accessibilityLabel: tmp50, hitSlop: tmp51, onPress: tmp54, children: tmp55 };
                                const tmp59 = closure_12(tmp(5916).PressableOpacity, obj4);
                                cResult[37] = tmp7.closeButton;
                                cResult[38] = tmp54;
                                cResult[39] = tmp55;
                                cResult[40] = tmp59;
                                tmp58 = tmp59;
                              }
                              const fn2 = function z() {
                                if (null != stateFromStores) {
                                  const obj2 = { notice_type: tmp, trial_id: tmp2 };
                                  AnalyticsUtilsDefault.track(constants.APP_NOTICE_CLOSED, obj2);
                                }
                                NoticeActionCreatorsDefault.dismiss({ untilAtLeast });
                                const obj4 = { untilAtLeast };
                              };
                              cResult[32] = stateFromStores;
                              cResult[33] = premiumTrialOffer.trialId;
                              cResult[34] = fn2;
                              tmp54 = fn2;
                            }
                          }
                          class A {
                            constructor() {
                              return closure_5.getNoticeType();
                            }
                          }
                          tmp47[0] = tmp26;
                          const tmp48 = closure_12(tmp25, tmp47);
                          cResult[26] = tmp25;
                          cResult[27] = tmp26;
                          cResult[28] = tmp41;
                          cResult[29] = tmp48;
                          tmp45 = tmp48;
                        }
                      }
                    }
                    class A {
                      constructor() {
                        return closure_5.getNoticeType();
                      }
                    }
                    tmp43[0] = str2;
                    tmp43[2] = tmp27;
                    const tmp44 = closure_12(tmp24, tmp43);
                    cResult[21] = tmp24;
                    cResult[22] = str2;
                    cResult[23] = str3;
                    cResult[24] = tmp27;
                    cResult[25] = tmp44;
                    tmp41 = tmp44;
                  }
                }
              }
            }
            tmp15(2115);
            class A {
              constructor() {
                return closure_5.getNoticeType();
              }
            }
            if (premiumTrialOffer.trialId === closure_11) {
              let PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
            } else {
              PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
            }
            const header = tmp7.header;
            const Text = tmp(4892).Text;
            const tmp29Result = tmp29(PREMIUM_TRIAL);
            const subscriptionTrial3 = premiumTrialOffer.subscriptionTrial;
            let interval;
            if (subscriptionTrial3 != null) {
              interval = subscriptionTrial3.interval;
            }
            const obj5 = { intervalType: interval, intervalCount: null };
            const subscriptionTrial4 = premiumTrialOffer.subscriptionTrial;
            let intervalCount;
            if (subscriptionTrial4 != null) {
              intervalCount = subscriptionTrial4.intervalCount;
            }
            obj5.intervalCount = intervalCount;
            const tmp35Result = getNoticeCopy(tmp16, tmp(4534).formatIntervalDuration(obj5), tmp29Result);
            cResult[10] = tmp16;
            cResult[11] = tmp7.header;
            const subscriptionTrial5 = premiumTrialOffer.subscriptionTrial;
            let interval1;
            if (subscriptionTrial5 != null) {
              interval1 = subscriptionTrial5.interval;
            }
            cResult[12] = interval1;
            const subscriptionTrial6 = premiumTrialOffer.subscriptionTrial;
            let intervalCount1;
            if (subscriptionTrial6 != null) {
              intervalCount1 = subscriptionTrial6.intervalCount;
            }
            cResult[13] = intervalCount1;
            cResult[14] = premiumTrialOffer.trialId;
            cResult[15] = Text;
            cResult[16] = tmp34;
            cResult[17] = header;
            cResult[18] = "heading-sm/medium";
            cResult[19] = "text-default";
            cResult[20] = tmp35Result;
            tmp27 = tmp35Result;
            str3 = "text-default";
            tmp26 = header;
            tmp25 = tmp34;
            tmp24 = Text;
            const tmpResult6 = tmp(4534);
          }
        }
        return null;
      } else {
        return null;
      }
    }
  }
  const fn = function x() {
    let tmp = shouldShowExpiringTrialOfferCard;
    if (shouldShowExpiringTrialOfferCard) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != premiumTrialOffer;
    }
    if (tmp) {
      const obj2 = { notice_type: stateFromStores, trial_id: premiumTrialOffer.trialId };
      AnalyticsUtilsDefault.track(constants.APP_NOTICE_VIEWED, obj2);
    }
  };
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  cResult[5] = stateFromStores;
  cResult[6] = shouldShowExpiringTrialOfferCard;
  cResult[7] = premiumTrialOffer;
  cResult[8] = fn;
  cResult[9] = items1;
  tmp19 = items1;
  tmp18 = fn;
  const tmpResult5 = navigateToPremium(17003);
}) : ((navigateToPremium) => {
  navigateToPremium = navigateToPremium.navigateToPremium;
  let shouldShowExpiringTrialOfferCard;
  importDefault = _modDef4467().add(5, "days");
  const tmp3 = closure_16();
  dependencyMap = tmp3;
  let obj = _modDef4467();
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = navigateToPremium(573).useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj2 = navigateToPremium(573);
  const premiumTrialOffer = navigateToPremium(6969).usePremiumTrialOffer();
  let num = 0;
  let obj3 = navigateToPremium(6969);
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const tmp7Result = useCountdownDefault(num, closure_15);
  shouldShowExpiringTrialOfferCard = navigateToPremium(17003).useShouldShowExpiringTrialOfferCard();
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = stateFromStores.useEffect(() => {
    let tmp = shouldShowExpiringTrialOfferCard;
    if (shouldShowExpiringTrialOfferCard) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != premiumTrialOffer;
    }
    if (tmp) {
      const obj2 = { notice_type: stateFromStores, trial_id: premiumTrialOffer.trialId };
      AnalyticsUtilsDefault.track(constants.APP_NOTICE_VIEWED, obj2);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        if (premiumTrialOffer.trialId === closure_11) {
          let PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
        }
        let obj4 = { style: tmp3.header, children: null };
        const articleURL = tmp(2115).getArticleURL(PREMIUM_TRIAL);
        const tmp17 = premiumTrialOffer;
        const tmpResult = tmp(2115);
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        const obj5 = { intervalType: interval, intervalCount: null };
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        let intervalCount;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        const obj6 = { children: null };
        const obj7 = { variant: "heading-sm/medium", color: "text-default", children: null };
        obj5.intervalCount = intervalCount;
        obj7.children = getNoticeCopy(tmp7Result, tmp4(4534).formatIntervalDuration(obj5), articleURL);
        obj4.children = closure_12(tmp4(4892).Text, obj7);
        const items2 = [closure_12(tmp17, obj4), , ];
        const obj8 = { style: tmp3.closeButton, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
        const intl = tmp4(1126).intl;
        obj8.accessibilityLabel = intl.string(tmp4(1126).t.cpT0Cq);
        obj8.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        obj8.onPress = function onPress() {
          if (null != stateFromStores) {
            const obj2 = { notice_type: tmp, trial_id: tmp2 };
            AnalyticsUtilsDefault.track(constants.APP_NOTICE_CLOSED, obj2);
          }
          NoticeActionCreatorsDefault.dismiss({ untilAtLeast });
          const obj4 = { untilAtLeast };
        };
        const size = { width: 16, height: 16, color: tmp3.closeIcon.color };
        obj8.children = closure_12(tmp4(1188).CloseIcon, size);
        items2[1] = closure_12(tmp4(5916).PressableOpacity, obj8);
        const obj9 = { style: tmp3.primaryCTA, text: null, onPress: null, renderIcon: null, renderLinearGradient: null };
        const intl2 = tmp4(1126).intl;
        obj9.text = intl2.string(tmp4(1126).t.J61px0);
        obj9.onPress = function onPress() {
          if (null != stateFromStores) {
            const obj2 = { notice_type: tmp, trial_id: tmp2 };
            AnalyticsUtilsDefault.track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
          }
          navigateToPremium();
        };
        obj9.renderIcon = function renderIcon() {
          return closure_1_12(navigateToPremium(linearGradient[25]).NitroWheelIcon, { color: "white", size: "sm" });
        };
        obj9.renderLinearGradient = function renderLinearGradient() {
          const obj = { style: null, start: constants3.START, end: constants3.END, colors: null };
          const items = [linearGradient.linearGradient];
          obj.style = items;
          if (options.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
            let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
            PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unsupported notice type: " + stateFromStores);
            throw error;
          }
          obj.colors = PREMIUM_TIER_2_TRI_COLOR;
          return __initData(LinearGradientDefault, obj);
        };
        items2[2] = closure_12(tmp4(1188).ShinyButton, obj9);
        obj6.children = items2;
        const tmp4Result2 = tmp4(4534);
        const obj10 = { style: navigateToPremium.style, children: closure_14(closure_13, obj6) };
        return closure_12(tmp(6713), obj10);
      }
    }
    return null;
  } else {
    return null;
  }
  const tmp4Result = navigateToPremium(17003);
});