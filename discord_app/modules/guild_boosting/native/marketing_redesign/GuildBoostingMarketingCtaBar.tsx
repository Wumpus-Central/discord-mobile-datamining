// === Module 13379: GuildBoostingMarketingCtaBar ===

// Module 13379 (GuildBoostingMarketingCtaBar)
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import timing from "timing" /* 4891 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5612 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10392 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6908 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: c10 } = Constants);
const FractionalPremiumStates = fn(1379).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
const createStyles = fn(4890);
let obj2 = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 }, guildIcon: null, guildIconText: null, guildName: null, guildBoostCountWrapper: null, totalBoostCountWrapper: null, guildBoostCountIcon: null, guildBoostCount: null, guildBoostCurrentUserCountWrapper: null, guildBoostCurrentUserCount: null, cta: null, ctaPrimary: null, ctaSecondary: null, giftIcon: null, gradient: null, headerWave: null, headerStars: null, boostingUnavailablePill: null };
let size = { alignSelf: "center", borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
obj2.guildIcon = size;
obj2.guildIconText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildName = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
obj2.guildBoostCountWrapper = { position: "relative" };
obj2.totalBoostCountWrapper = { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" };
obj2.guildBoostCountIcon = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
obj2.guildBoostCount = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
obj2.guildBoostCurrentUserCountWrapper = { position: "absolute", top: 3, width: "100%" };
obj2.guildBoostCurrentUserCount = { alignSelf: "center" };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.cta = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
const native = fn(1188);
const merged = Object.assign(native.generateBoxShadowStyle(fn(1188).EIGHT_DP_ELEVATION_SHADOW_PARAMS));
obj2.ctaPrimary = {};
obj2.ctaSecondary = { marginTop: 10 };
obj2.giftIcon = { marginRight: 8 };
obj2.gradient = { overflow: "visible" };
obj2.headerWave = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
obj2.headerStars = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
obj2.boostingUnavailablePill = { marginTop: -13, marginBottom: 23 };
let closure_15 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
const __initData2 = { code: "function GuildBoostingMarketingCtaBarTsx2(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((isVisible) => {
  _require = isVisible;
  const fn = function o() {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, { duration: 250 }) };
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, isVisible };
  fn.__workletHash = 6895237370657;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((isVisible) => {
  _require = isVisible;
  const fn = function o() {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, { duration: 250 }) };
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, isVisible };
  fn.__workletHash = 11947887687010;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
let obj5 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(126);
  const tmp4 = closure_15();
  ({ fractionalPremiumInfo, guild } = guild);
  ({ previousGuildSubscriptionSlot, onLayout, premiumGroupRole, intent, onResult } = guild);
  const tmp5 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp5[0];
  dependencyMap = tmp5[1];
  let obj = guild(576);
  analyticsLocations = first(6657)(first(6681).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class T {
      constructor() {
        return closure_6.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmp8 = first(6657);
  const stateFromStores = guild(573).useStateFromStores(tmp9, T);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildBoostSlotStore];
    class H {
      constructor() {
        return closure_1_7.boostSlots;
      }
    }
    cResult[2] = items1;
    cResult[3] = H;
    let tmp14 = H;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = guild(573);
  stateFromStores1 = guild(573).useStateFromStores(tmp13, tmp14);
  if (cResult[4] !== stateFromStores1) {
    const _Object = Object;
    const keys = Object.keys(stateFromStores1);
    class H {
      constructor() {
        return closure_1_7.boostSlots;
      }
    }
    cResult[5] = keys;
    let arr3 = keys;
  } else {
    arr3 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === guild.id) {
      if (cResult[8] === arr3) {
        let arr4 = cResult[9];
      }
      class H {
        constructor() {
          return closure_1_7.boostSlots;
        }
      }
      const tmp19 = closure_18(first);
      const tmp20 = closure_18(!first);
      const tmp7ResultResult = tmp7(13265)(fractionalPremiumInfo.endsAt, guild(13265).CountDownMessageTypes.LONG_TIME_LEFT);
      const tmp7Result = tmp7(13265);
      const isInReverseTrial = guild(7736).useIsInReverseTrial();
      const total = tmp7(7671)(guild.guild.id).total;
      UserStore = obj2.useRef(-1);
      if (cResult[10] === first) {
        if (cResult[11] === length) {
          let tmp24 = cResult[12];
          let tmp25 = cResult[13];
        }
        const effect = obj2.useEffect(tmp24, tmp25);
        if (cResult[14] !== stateFromStores) {
          const isPremiumResult = tmp7(4528).isPremium(stateFromStores);
          class H {
            constructor() {
              return closure_1_7.boostSlots;
            }
          }
          cResult[15] = isPremiumResult;
          const tmp7Result3 = tmp7(4528);
        }
        class H {
          constructor() {
            return closure_1_7.boostSlots;
          }
        }
        if (cResult[18] !== analyticsLocations) {
          function ot() {
            const obj = { analyticsLocation: { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA }, analyticsLocations };
            openPremiumModalDefault(obj);
          }
          cResult[18] = analyticsLocations;
          class H {
            constructor() {
              return closure_1_7.boostSlots;
            }
          }
          cResult[19] = ot;
        }
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          function nt() {
            window.clearTimeout(ref.current);
            closure_2((arg0) => !arg0);
          }
          cResult[20] = nt;
          class H {
            constructor() {
              return closure_1_7.boostSlots;
            }
          }
        } else {
          const tmp30 = cResult[20];
        }
        if (premiumGroupRole === guild(1385).PremiumSubscriptionGroupRole.MEMBER) {
          if (cResult[21] !== tmp4.boostingUnavailablePill) {
            { style: null }.style = tmp4.boostingUnavailablePill;
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            cResult[21] = tmp4.boostingUnavailablePill;
            cResult[22] = tmp37;
            let obj3 = { style: null };
          }
        } else {
          let tmp34 = null;
          if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
            if (cResult[23] === tmp7ResultResult) {
              if (cResult[24] === isInReverseTrial) {
                if (cResult[25] === tmp4.boostingUnavailablePill) {
                  let tmp31 = cResult[26];
                }
                tmp34 = tmp31;
              }
            }
            const obj4 = { fpDurationText: null, isInReverseTrial: null, style: null };
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            obj4.isInReverseTrial = isInReverseTrial;
            obj4.style = tmp4.boostingUnavailablePill;
            const tmp33 = closure_12(tmp7(13320), obj4);
            cResult[23] = tmp7ResultResult;
            cResult[24] = isInReverseTrial;
            cResult[25] = tmp4.boostingUnavailablePill;
            cResult[26] = tmp33;
            tmp31 = tmp33;
          }
          class H {
            constructor() {
              return closure_1_7.boostSlots;
            }
          }
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const point = { x: 0.5, y: 0.5 };
            const items2 = [tmp7(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, , , , ];
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            items2[2] = tmp7(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3;
            items2[3] = tmp7(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4;
            items2[4] = tmp7(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5;
            const items3 = [0, 0.3221, 0.429, 0.7606, 1];
            cResult[27] = point;
            cResult[28] = items2;
            cResult[29] = items3;
          }
          const _Symbol2 = Symbol;
          const gradient = tmp4.gradient;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const point1 = { x: 0.5, y: 0.5 };
            const items4 = ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"];
            const items5 = [0.12, 0.5];
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            cResult[30] = point1;
            cResult[31] = items4;
            cResult[32] = items5;
            let tmp44 = items5;
            let tmp43 = items4;
            let tmp42 = point1;
          } else {
            tmp42 = cResult[30];
            tmp43 = cResult[31];
            tmp44 = cResult[32];
          }
          if (cResult[33] !== guild) {
            { guild: null }.guild = guild;
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            cResult[33] = guild;
            cResult[34] = tmp47;
            let tmp45 = tmp47;
            const obj5 = { guild: null };
          } else {
            tmp45 = cResult[34];
          }
          const _Symbol3 = Symbol;
          ({ headerContent, heading } = tmp4);
          if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = guild(1126).intl;
            const stringResult = intl.string(guild(1126).t["AF+Tyh"]);
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            cResult[35] = stringResult;
          }
          if (cResult[36] !== tmp4.heading) {
            const obj6 = { style: heading, color: "text-overlay-light", variant: "display-sm", children: null };
            class H {
              constructor() {
                return closure_1_7.boostSlots;
              }
            }
            const tmp52 = closure_12(guild(4886).Heading, obj6);
            cResult[36] = tmp4.heading;
            cResult[37] = tmp52;
            let tmp50 = tmp52;
          } else {
            tmp50 = cResult[37];
          }
          if (cResult[38] === guild) {
            if (cResult[39] === tmp4.guildIcon) {
              if (cResult[40] === tmp4.guildIconText) {
                let tmp53 = cResult[41];
              }
              if (cResult[42] === guild.name) {
                if (cResult[43] === tmp4.guildName) {
                  let tmp57 = cResult[44];
                }
                if (cResult[45] === tmp4.totalBoostCountWrapper) {
                  if (cResult[46] === tmp20) {
                    let tmp62 = cResult[47];
                  }
                  if (cResult[48] !== tmp4.guildBoostCountIcon) {
                    const obj7 = { style: tmp4.guildBoostCountIcon, source: null, color: null, size: null };
                    class H {
                      constructor() {
                        return closure_1_7.boostSlots;
                      }
                    }
                    obj7.source = tmp7(13305);
                    obj7.color = tmp7(587).unsafe_rawColors.GUILD_BOOSTING_PINK;
                    obj7.size = guild(1188).Icon.Sizes.SMALL;
                    const tmp66 = closure_12(tmp65, obj7);
                    cResult[48] = tmp4.guildBoostCountIcon;
                    cResult[49] = tmp66;
                    let tmp63 = tmp66;
                  } else {
                    tmp63 = cResult[49];
                  }
                  class H {
                    constructor() {
                      return closure_1_7.boostSlots;
                    }
                  }
                  if (cResult[52] === tmp4.guildBoostCount) {
                    if (cResult[53] === tmp67) {
                      let tmp68 = cResult[54];
                    }
                    if (cResult[55] === tmp62) {
                      if (cResult[56] === tmp63) {
                        if (cResult[57] === tmp68) {
                          let tmp71 = cResult[58];
                        }
                        if (cResult[59] === tmp19) {
                          if (cResult[60] === tmp4.guildBoostCurrentUserCountWrapper) {
                            let tmp75 = cResult[61];
                          }
                          if (cResult[62] === tmp4.guildBoostCount) {
                            if (cResult[63] === tmp4.guildBoostCurrentUserCount) {
                              let tmp76 = cResult[64];
                            }
                            if (cResult[65] !== length) {
                              const intl2 = guild(1126).intl;
                              class H {
                                constructor() {
                                  return closure_1_7.boostSlots;
                                }
                              }
                              const formatResult = intl2.format(guild(1126).t.xXb78j, { numSubscriptions: null });
                              cResult[65] = length;
                              cResult[66] = formatResult;
                              let tmp77 = formatResult;
                              const obj8 = { numSubscriptions: null };
                            } else {
                              tmp77 = cResult[66];
                            }
                            if (cResult[67] === tmp76) {
                              if (cResult[68] === tmp77) {
                                let tmp79 = cResult[69];
                              }
                              if (cResult[70] === tmp75) {
                                if (cResult[71] === tmp79) {
                                  let tmp81 = cResult[72];
                                }
                                if (cResult[73] === tmp4.guildBoostCountWrapper) {
                                  if (cResult[74] === tmp71) {
                                    if (cResult[75] === tmp81) {
                                      let tmp85 = cResult[76];
                                    }
                                    if (cResult[77] === tmp57) {
                                      if (cResult[78] === tmp85) {
                                        let tmp88 = cResult[79];
                                      }
                                      if (cResult[80] === tmp4.cta) {
                                        if (cResult[81] === tmp4.ctaPrimary) {
                                          let tmp92 = cResult[82];
                                        }
                                        if (cResult[83] === fractionalPremiumInfo.fractionalState) {
                                          if (cResult[84] === guild) {
                                            if (cResult[85] === intent) {
                                              if (cResult[86] === onResult) {
                                                if (cResult[87] === premiumGroupRole) {
                                                  if (cResult[88] === previousGuildSubscriptionSlot) {
                                                    if (cResult[89] === tmp92) {
                                                      let tmp93 = cResult[90];
                                                    }
                                                    if (cResult[91] === tmp34) {
                                                      if (cResult[92] === tmp4.headerContent) {
                                                        if (cResult[93] === tmp50) {
                                                          if (cResult[94] === tmp53) {
                                                            if (cResult[95] === tmp88) {
                                                              if (cResult[96] === tmp93) {
                                                                let tmp98 = cResult[97];
                                                              }
                                                              if (cResult[98] !== tmp4.headerStars) {
                                                                { style: null }.style = tmp4.headerStars;
                                                                class H {
                                                                  constructor() {
                                                                    return closure_1_7.boostSlots;
                                                                  }
                                                                }
                                                                cResult[98] = tmp4.headerStars;
                                                                cResult[99] = tmp103;
                                                                let tmp101 = tmp103;
                                                                const obj9 = { style: null };
                                                              } else {
                                                                tmp101 = cResult[99];
                                                              }
                                                              if (cResult[100] !== tmp4.headerWave) {
                                                                { style: null }.style = tmp4.headerWave;
                                                                class H {
                                                                  constructor() {
                                                                    return closure_1_7.boostSlots;
                                                                  }
                                                                }
                                                                cResult[100] = tmp4.headerWave;
                                                                cResult[101] = tmp106;
                                                                let tmp104 = tmp106;
                                                                const obj10 = { style: null };
                                                              } else {
                                                                tmp104 = cResult[101];
                                                              }
                                                              class H {
                                                                constructor() {
                                                                  return closure_1_7.boostSlots;
                                                                }
                                                              }
                                                              const obj11 = { angle: 0, angleCenter: tmp42, colors: tmp43, locations: tmp44, useAngle: true, style: tmp4.gradient, children: null };
                                                              const items6 = [tmp45, tmp98, tmp101, tmp104];
                                                              obj11.children = items6;
                                                              const tmp109 = closure_13(tmp7(5605), obj11);
                                                              cResult[102] = tmp4.gradient;
                                                              cResult[103] = tmp45;
                                                              cResult[104] = tmp98;
                                                              cResult[105] = tmp101;
                                                              cResult[106] = tmp104;
                                                              cResult[107] = tmp109;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class H {
                                                      constructor() {
                                                        return closure_1_7.boostSlots;
                                                      }
                                                    }
                                                    const obj12 = { style: headerContent, children: null };
                                                    const items7 = [tmp50, tmp53, tmp88, tmp34, tmp93];
                                                    obj12.children = items7;
                                                    const tmp100 = closure_13(length, obj12);
                                                    cResult[91] = tmp34;
                                                    cResult[92] = tmp4.headerContent;
                                                    cResult[93] = tmp50;
                                                    cResult[94] = tmp53;
                                                    cResult[95] = tmp88;
                                                    cResult[96] = tmp93;
                                                    cResult[97] = tmp100;
                                                    tmp98 = tmp100;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        class H {
                                          constructor() {
                                            return closure_1_7.boostSlots;
                                          }
                                        }
                                        tmp95[0] = tmp92;
                                        tmp95[1] = guild;
                                        tmp95[2] = previousGuildSubscriptionSlot;
                                        tmp95[3] = constants3.HEADER;
                                        tmp95[4] = fractionalPremiumInfo.fractionalState;
                                        tmp95[5] = premiumGroupRole;
                                        tmp95[6] = intent;
                                        tmp95[7] = onResult;
                                        const tmp97 = closure_12(tmp7(6907), tmp95);
                                        cResult[83] = fractionalPremiumInfo.fractionalState;
                                        cResult[84] = guild;
                                        cResult[85] = intent;
                                        cResult[86] = onResult;
                                        cResult[87] = premiumGroupRole;
                                        cResult[88] = previousGuildSubscriptionSlot;
                                        cResult[89] = tmp92;
                                        cResult[90] = tmp97;
                                        tmp93 = tmp97;
                                      }
                                      const items8 = [, ];
                                      class H {
                                        constructor() {
                                          return closure_1_7.boostSlots;
                                        }
                                      }
                                      items8[1] = tmp4.ctaPrimary;
                                      cResult[80] = tmp4.cta;
                                      cResult[81] = tmp4.ctaPrimary;
                                      cResult[82] = items8;
                                      tmp92 = items8;
                                    }
                                    class H {
                                      constructor() {
                                        return closure_1_7.boostSlots;
                                      }
                                    }
                                    tmp90[0] = tmp30;
                                    const items9 = [tmp57, tmp85];
                                    tmp90[1] = items9;
                                    const tmp91 = closure_13(guild(5909).PressableOpacity, tmp90);
                                    cResult[77] = tmp57;
                                    cResult[78] = tmp85;
                                    cResult[79] = tmp91;
                                    tmp88 = tmp91;
                                  }
                                }
                                class H {
                                  constructor() {
                                    return closure_1_7.boostSlots;
                                  }
                                }
                                const obj14 = { style: tmp61, children: null };
                                const items10 = [tmp71, tmp81];
                                obj14.children = items10;
                                const tmp87 = closure_13(length, obj14);
                                cResult[73] = tmp4.guildBoostCountWrapper;
                                cResult[74] = tmp71;
                                cResult[75] = tmp81;
                                cResult[76] = tmp87;
                                tmp85 = tmp87;
                              }
                              class H {
                                constructor() {
                                  return closure_1_7.boostSlots;
                                }
                              }
                              tmp83[0] = tmp75;
                              tmp83[1] = tmp79;
                              const tmp84 = closure_12(tmp7(4612).View, tmp83);
                              cResult[70] = tmp75;
                              cResult[71] = tmp79;
                              cResult[72] = tmp84;
                              tmp81 = tmp84;
                            }
                            class H {
                              constructor() {
                                return closure_1_7.boostSlots;
                              }
                            }
                            const obj15 = { style: tmp76, variant: "text-sm/bold", color: "text-overlay-light", children: tmp77 };
                            const tmp80 = closure_12(guild(4886).Text, obj15);
                            cResult[67] = tmp76;
                            cResult[68] = tmp77;
                            cResult[69] = tmp80;
                            tmp79 = tmp80;
                          }
                          const items11 = [, ];
                          class H {
                            constructor() {
                              return closure_1_7.boostSlots;
                            }
                          }
                          items11[1] = tmp4.guildBoostCurrentUserCount;
                          cResult[62] = tmp4.guildBoostCount;
                          cResult[63] = tmp4.guildBoostCurrentUserCount;
                          cResult[64] = items11;
                          tmp76 = items11;
                        }
                        const items12 = [, ];
                        class H {
                          constructor() {
                            return closure_1_7.boostSlots;
                          }
                        }
                        items12[1] = tmp4.guildBoostCurrentUserCountWrapper;
                        cResult[59] = tmp19;
                        cResult[60] = tmp4.guildBoostCurrentUserCountWrapper;
                        cResult[61] = items12;
                        tmp75 = items12;
                      }
                    }
                    class H {
                      constructor() {
                        return closure_1_7.boostSlots;
                      }
                    }
                    tmp73[0] = tmp62;
                    const items13 = [tmp63, tmp68];
                    tmp73[1] = items13;
                    const tmp74 = closure_13(tmp7(4612).View, tmp73);
                    cResult[55] = tmp62;
                    cResult[56] = tmp63;
                    cResult[57] = tmp68;
                    cResult[58] = tmp74;
                    tmp71 = tmp74;
                  }
                  const obj16 = { style: tmp4.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: tmp67 };
                  const tmp70 = closure_12(guild(4886).Text, obj16);
                  cResult[52] = tmp4.guildBoostCount;
                  cResult[53] = tmp67;
                  cResult[54] = tmp70;
                  tmp68 = tmp70;
                }
                const items14 = [, ];
                class H {
                  constructor() {
                    return closure_1_7.boostSlots;
                  }
                }
                items14[1] = tmp4.totalBoostCountWrapper;
                cResult[45] = tmp4.totalBoostCountWrapper;
                cResult[46] = tmp20;
                cResult[47] = items14;
                tmp62 = items14;
              }
              class H {
                constructor() {
                  return closure_1_7.boostSlots;
                }
              }
              tmp59[0] = tmp4.guildName;
              tmp59[3] = guild.name;
              const tmp60 = closure_12(guild(4886).Text, tmp59);
              cResult[42] = guild.name;
              cResult[43] = tmp4.guildName;
              cResult[44] = tmp60;
              tmp57 = tmp60;
            }
          }
          const obj17 = { style: null, textStyle: null, guild: null, size: null };
          ({ guildIcon: obj13.style, guildIconText: obj13.textStyle } = tmp4);
          obj17.guild = guild;
          obj17.size = guild(5971).GuildIconSizes.LARGE;
          const tmp56 = closure_12(tmp7(5971), obj17);
          cResult[38] = guild;
          cResult[39] = tmp4.guildIcon;
          cResult[40] = tmp4.guildIconText;
          cResult[41] = tmp56;
          tmp53 = tmp56;
          const tmp7Result4 = tmp7(5971);
        }
      }
      const fn = function k() {
        if (tmp) {
          const _window = window;
          ref.current = window.setTimeout(() => {
            closure_1_2((arg0) => !arg0);
          }, closure_14);
        }
        return () => {
          window.clearTimeout(ref.current);
        };
      };
      const items15 = [first, arr4.length];
      cResult[10] = first;
      cResult[11] = arr4.length;
      cResult[12] = fn;
      cResult[13] = items15;
      tmp25 = items15;
      tmp24 = fn;
      const tmpResult4 = guild(7736);
    }
  }
  const found = arr3.filter((item) => {
    let tmp2 = null != tmp.premiumGuildSubscription;
    if (tmp2) {
      tmp2 = tmp.premiumGuildSubscription.guildId === guild.id;
    }
    return tmp2;
  });
  cResult[6] = stateFromStores1;
  cResult[7] = guild.id;
  cResult[8] = arr3;
  cResult[9] = found;
  arr4 = found;
  const tmpResult3 = guild(573);
}) : ((premiumGroupRole) => {
  const tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  analyticsLocations = first(6657)(first(6681).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  const tmp6 = first(6657);
  const items = [ref];
  const stateFromStores = guild(573).useStateFromStores(items, () => ref.getCurrentUser());
  let obj = guild(573);
  const items1 = [GuildBoostSlotStore];
  stateFromStores1 = guild(573).useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((item) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === id.id;
      }
      return tmp2;
    }).length;
  }, items2);
  const obj2 = guild(573);
  const tmp11 = closure_18(first);
  const tmp12 = closure_18(!first);
  const tmp13 = first(13265);
  const tmp13Result = first(13265)(fractionalPremiumInfo.endsAt, guild(13265).CountDownMessageTypes.LONG_TIME_LEFT);
  const isInReverseTrial = guild(7736).useIsInReverseTrial();
  let obj3 = guild(7736);
  const items3 = [first, memo];
  const effect = stateFromStores1.useEffect(() => {
    if (tmp) {
      const _window = window;
      ref.current = window.setTimeout(() => {
        closure_1_2((arg0) => !arg0);
      }, closure_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  ref = stateFromStores1.useRef(-1);
  const obj4 = first(4528);
  if (premiumGroupRole === guild(1385).PremiumSubscriptionGroupRole.MEMBER) {
    const obj5 = { style: tmp.boostingUnavailablePill };
    let tmp19 = closure_12(tmp4(13318), obj5);
  } else {
    tmp19 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj6 = { fpDurationText: tmp13Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp19 = closure_12(tmp4(13320), obj6);
    }
  }
  const obj7 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, useAngle: true, style: null, children: null };
  const isPremiumResult = first(4528).isPremium(stateFromStores);
  const items4 = [first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, first(587).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj7.colors = items4;
  obj7.locations = [0, 0.3221, 0.429, 0.7606, 1];
  obj7.style = tmp.gradient;
  const obj8 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: null };
  const tmp4Result = first(5605);
  const items5 = [closure_12(first(13380), { guild }), , , ];
  const obj9 = { style: tmp.headerContent, children: null };
  const obj10 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: null };
  const intl = guild(1126).intl;
  obj10.children = intl.string(guild(1126).t["AF+Tyh"]);
  const items6 = [closure_12(guild(4886).Heading, obj10), , , , ];
  const obj11 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
  const tmp4Result3 = first(5605);
  obj11.size = guild(5971).GuildIconSizes.LARGE;
  items6[1] = closure_12(first(5971), obj11);
  const obj12 = {
    onPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: null
  };
  const items7 = [closure_12(guild(4886).Text, { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name }), ];
  const obj14 = { style: tmp.guildBoostCountWrapper, children: null };
  const obj15 = { style: null, children: null };
  const items8 = [tmp12, tmp.totalBoostCountWrapper];
  obj15.style = items8;
  const obj13 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  const tmp4Result4 = first(5971);
  const items9 = [closure_12(guild(1188).Icon, { style: tmp.guildBoostCountIcon, source: first(13305), color: first(587).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1188).Icon.Sizes.SMALL }), ];
  const obj17 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const intl2 = guild(1126).intl;
  obj17.children = intl2.format(guild(1126).t["pob/cL"], { subscriptions: first(7671)(premiumGroupRole.guild.id).total });
  items9[1] = closure_12(guild(4886).Text, obj17);
  obj15.children = items9;
  const items10 = [closure_13(first(4612).View, obj15), ];
  const obj18 = { style: null, children: null };
  const items11 = [tmp11, tmp.guildBoostCurrentUserCountWrapper];
  obj18.style = items11;
  const obj19 = { style: null, variant: "text-sm/bold", color: "text-overlay-light", children: null };
  const items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  obj19.style = items12;
  const intl3 = guild(1126).intl;
  obj19.children = intl3.format(guild(1126).t.xXb78j, { numSubscriptions: memo });
  obj18.children = closure_12(guild(4886).Text, obj19);
  items10[1] = closure_12(first(4612).View, obj18);
  obj14.children = items10;
  items7[1] = closure_13(memo, obj14);
  obj12.children = items7;
  items6[2] = closure_13(guild(5909).PressableOpacity, obj12);
  items6[3] = tmp19;
  const obj20 = { styles: null, guild, previousGuildSubscriptionSlot, analyticsSection: constants3.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult };
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  obj20.styles = items13;
  items6[4] = closure_12(first(6907), obj20);
  obj9.children = items6;
  items5[1] = closure_13(memo, obj9);
  items5[2] = closure_12(first(13383), { style: tmp.headerStars });
  items5[3] = closure_12(first(13384), { style: tmp.headerWave });
  obj8.children = items5;
  obj7.children = closure_13(tmp4Result3, obj8);
  const items14 = [closure_12(tmp4Result, obj7), ];
  const obj23 = { style: null, children: null };
  const items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  obj23.style = items15;
  if (isPremiumResult) {
    const obj24 = { variant: "secondary", text: null, onPress: null, icon: null, grow: true };
    const intl5 = guild(1126).intl;
    obj24.text = intl5.string(guild(1126).t["8MYSQw"]);
    obj24.onPress = function onPress() {
      BoostingActionCreators.closeApplyBoostModal();
      const obj3 = { analyticsLocation: { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA }, analyticsLocations };
      utils_openGiftModal.openGiftModal(obj3);
    };
    const obj25 = { size: guild(1188).Icon.Sizes.SMALL, source: tmp4(13385), style: tmp.giftIcon };
    obj24.icon = closure_12(guild(1188).Icon, obj25);
    let obj26 = obj24;
  } else {
    obj26 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl4 = guild(1126).intl;
    obj26.text = intl4.string(guild(1126).t.pj0XBN);
    obj26.onPress = function onPress() {
      const obj = { analyticsLocation: { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA }, analyticsLocations };
      openPremiumModalDefault(obj);
    };
  }
  const obj27 = { children: null };
  obj23.children = closure_12(guild(5594).Button, obj26);
  items14[1] = closure_12(memo, obj23);
  obj27.children = items14;
  return closure_13(memo, obj27);
});