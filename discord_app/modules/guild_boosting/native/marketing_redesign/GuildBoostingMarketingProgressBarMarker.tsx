// === Module 13389: GuildBoostingMarketingProgressBarMarker ===

// Module 13389 (GuildBoostingMarketingProgressBarMarker)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5597 */;
import AssetRegistryDefault from "AssetRegistry" /* 13390 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13391 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13392 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let TIER_1;
let TIER_2;
let TIER_3;
let closure_4;
let hasOwnProperty;
let items;
let items1;
let metroImportAll;
let metroImportDefault;
let obj5;
let obj6;
let size;
let size1;
let size2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: AssetRegistryDefault, [TIER_2]: AssetRegistryDefault2, [TIER_3]: AssetRegistryDefault3 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = createStyles_mod;
let obj3 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: size };
size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles.createStyles(obj3);
let closure_12 = { stiffness: 50, damping: 5 };
const __initData = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
const __initData2 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((isDisabled) => {
  let PREMIUM_PERK_PINK;
  let isCurrentTier;
  let isTierAnimated;
  let isTierUnlocked;
  let items2;
  let sharedValue;
  let tier;
  let useReducedMotion;
  let obj = useReducedMotion(isTierUnlocked[10]);
  const cResult = obj.c(18);
  ({ tier, isTierUnlocked, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  ({ isTierAnimated, isCurrentTier } = isDisabled);
  const tmp4 = closure_11();
  const tmp6 = sharedValue(isTierUnlocked[11])();
  obj2 = useReducedMotion(isTierUnlocked[12]);
  sharedValue = obj2.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp5(tmp2[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = useReducedMotion(isTierUnlocked[13]).hexWithOpacity;
    useReducedMotion(isTierUnlocked[13]);
    const WHITE = tmp5(tmp2[8]).unsafe_rawColors.WHITE;
    let num = 1;
    const tmpResult3 = useReducedMotion(isTierUnlocked[14]);
    if (tmpResult3.isThemeDark(tmp6)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  if (cResult[0] === sharedValue) {
    let tmp9;
    let tmp10;
    if (cResult[1] === isTierUnlocked) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = PREMIUM_PERK_PINK.useEffect(tmp9, tmp10);
    const tmpResult4 = useReducedMotion(isTierUnlocked[12]);
    class A {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
        if (!useReducedMotion) {
          num = 1;
          if (isTierUnlocked) {
            num = sharedValue.get();
          }
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
    A.__closure = obj3;
    A.__workletHash = 15398057099178;
    A.__initData = __initData;
    const animatedStyle = tmpResult4.useAnimatedStyle(A);
    if (cResult[4] === isDisabled) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === isTierUnlocked) {
          let tmp15;
          let tmp21;
          if (cResult[7] === tier) {
            tmp15 = cResult[8];
          }
          if (!isCurrentTier) {
            let tmp22;
            if (cResult[9] !== tmp4.progressBarMarkerInnerCircle) {
              let items = [tmp4.progressBarMarkerInnerCircle];
              cResult[9] = tmp4.progressBarMarkerInnerCircle;
              class A {
                constructor() {
                  let items;
                  let num = 1;
                  const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                  if (!useReducedMotion) {
                    num = 1;
                    if (isTierUnlocked) {
                      num = sharedValue.get();
                    }
                  }
                  items = [{ scale: num }];
                  return obj;
                }
              }
              cResult[10] = items;
              tmp22 = items;
            } else {
              tmp22 = cResult[10];
            }
            if (cResult[11] === animatedStyle) {
              let tmp23;
              if (cResult[12] === tmp4.progressBarMarkerInnerCircleBackground) {
                tmp23 = cResult[13];
              }
              if (cResult[14] === tmp15) {
                if (cResult[15] === tmp22) {
                  let tmp27;
                  if (cResult[16] === tmp23) {
                    tmp27 = cResult[17];
                  }
                  tmp21 = tmp27;
                }
              }
              class A {
                constructor() {
                  let items;
                  let num = 1;
                  const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                  if (!useReducedMotion) {
                    num = 1;
                    if (isTierUnlocked) {
                      num = sharedValue.get();
                    }
                  }
                  items = [{ scale: num }];
                  return obj;
                }
              }
              tmp30[0] = tmp22;
              const items1 = [tmp23, tmp15];
              tmp30[1] = items1;
              const tmp31 = closure_8(closure_4, tmp30);
              cResult[14] = tmp15;
              cResult[15] = tmp22;
              cResult[16] = tmp23;
              cResult[17] = tmp31;
              tmp27 = tmp31;
            }
            const obj4 = { style: tmp25 };
            class A {
              constructor() {
                let items;
                let num = 1;
                const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                if (!useReducedMotion) {
                  num = 1;
                  if (isTierUnlocked) {
                    num = sharedValue.get();
                  }
                }
                items = [{ scale: num }];
                return obj;
              }
            }
            tmp25[0] = tmp4.progressBarMarkerInnerCircleBackground;
            tmp25[1] = animatedStyle;
            const tmp26 = closure_7(sharedValue(isTierUnlocked[12]).View, obj4);
            cResult[11] = animatedStyle;
            cResult[12] = tmp4.progressBarMarkerInnerCircleBackground;
            cResult[13] = tmp26;
            tmp23 = tmp26;
          } else {
            tmp21 = tmp15;
          }
          return tmp21;
        }
      }
    }
    let tmp17 = null;
    if (tier !== BoostedGuildTiers.NONE) {
      let tmp32Result;
      if (isDisabled) {
        tmp32Result = closure_7(useReducedMotion(tmp2[16]).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
      } else {
        const obj5 = { source: obj2[tier], style: items2 };
        items2 = [, ];
        class A {
          constructor() {
            let items;
            let num = 1;
            const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
            if (!useReducedMotion) {
              num = 1;
              if (isTierUnlocked) {
                num = sharedValue.get();
              }
            }
            items = [{ scale: num }];
            return obj;
          }
        }
        const unsafe_rawColors = tmp5(tmp2[8]).unsafe_rawColors;
        const obj6 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
        items2[1] = obj6;
        tmp32Result = closure_7(closure_5, obj5);
      }
      tmp17 = tmp32Result;
    }
    cResult[4] = isDisabled;
    cResult[5] = tmp4;
    cResult[6] = isTierUnlocked;
    cResult[7] = tier;
    cResult[8] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function c() {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring;
      const result1 = set(obj.withSpring(1, closure_12));
    }
  };
  const items3 = [isTierUnlocked, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = isTierUnlocked;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp10 = items3;
  tmp9 = fn;
}) : ((arg0) => {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let items1;
  let items2;
  let items3;
  let items4;
  let tier;
  let tmp14;
  let useReducedMotion;
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = closure_11();
  const tmp4 = sharedValue(isTierUnlocked[11])();
  let obj = useReducedMotion(isTierUnlocked[12]);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(tmp3[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = useReducedMotion(isTierUnlocked[13]).hexWithOpacity;
    useReducedMotion(isTierUnlocked[13]);
    const WHITE = tmp2(tmp3[8]).unsafe_rawColors.WHITE;
    const tmp5Result3 = useReducedMotion(isTierUnlocked[14]);
    if (tmp5Result3.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = PREMIUM_PERK_PINK.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring;
      const result1 = set(obj.withSpring(1, closure_12));
    }
  }, items);
  const fn = function y() {
    let items;
    let num = 1;
    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    items = [{ scale: num }];
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15193519633545;
  fn.__initData = __initData2;
  let tmp10 = null;
  const tmp5Result4 = useReducedMotion(isTierUnlocked[12]);
  const animatedStyle = tmp5Result4.useAnimatedStyle(fn);
  if (tier !== BoostedGuildTiers.NONE) {
    let tmp18Result;
    if (isDisabled) {
      tmp18Result = closure_7(useReducedMotion(tmp3[16]).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
    } else {
      obj2 = { source: obj2[tier], style: items1 };
      items1 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
      const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
      const obj3 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
      items1[1] = obj3;
      tmp18Result = closure_7(closure_5, obj2);
    }
    tmp10 = tmp18Result;
  }
  if (!isCurrentTier) {
    const obj4 = { style: items2, children: items4 };
    items2 = [tmp.progressBarMarkerInnerCircle];
    const obj5 = { style: items3 };
    items3 = [tmp.progressBarMarkerInnerCircleBackground, animatedStyle];
    items4 = [closure_7(sharedValue(isTierUnlocked[12]).View, obj5), tmp10];
    tmp14 = closure_8(closure_4, obj4);
  } else {
    tmp14 = tmp10;
  }
  return tmp14;
});
createStyles = createStyles_mod;
let obj4 = { progressBarMarker: size1, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: obj5, progressBarMarkerLabelWithIcon: obj6, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: size2 };
size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 };
items = [{ translateX: -14 }];
obj5 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createStyles = createStyles.createStyles;
obj6 = { transform: items1 };
items1 = [{ translateX: -7 }];
size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_16 = createStyles(obj4);
const __initData3 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx3(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
const __initData4 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx4(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isDisabled) => {
  let PREMIUM_PERK_PINK;
  let closure_2;
  let closure_3;
  let guild;
  let items1;
  let sharedValue;
  let tier;
  let useReducedMotion;
  let obj = useReducedMotion(576);
  const cResult = obj.c(41);
  ({ guild, tier, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  const revealedTier = isDisabled.revealedTier;
  const tmp4 = closure_16();
  const tmp6 = sharedValue(4791)();
  obj2 = useReducedMotion(4612);
  sharedValue = obj2.useSharedValue(1);
  dependencyMap = tmp8;
  backgroundColor = tmp11;
  if (tier === guild.premiumTier) {
    if (guild.premiumTier >= tier && revealedTier >= tier) {
      PREMIUM_PERK_PINK = tmp5(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    if (cResult[0] === tier === guild.premiumTier) {
      if (cResult[1] === sharedValue) {
        let tmp14;
        let tmp15;
        let tmp23;
        if (cResult[2] === (guild.premiumTier >= tier && revealedTier >= tier)) {
          tmp14 = cResult[3];
          tmp15 = cResult[4];
        }
        const effect = backgroundColor.useEffect(tmp14, tmp15);
        const tmpResult = useReducedMotion(4612);
        class L {
          constructor() {
            let items;
            let num = 1;
            const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
            if (!useReducedMotion) {
              num = sharedValue.get();
            }
            items = [{ scale: num }];
            return obj;
          }
        }
        const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
        L.__closure = obj3;
        L.__workletHash = 6048829722949;
        L.__initData = __initData3;
        const animatedStyle = tmpResult.useAnimatedStyle(L);
        const text = `${100 * obj[tier]}%`;
        if (cResult[5] !== `${100 * obj[tier]}%`) {
          const obj4 = { left: text };
          cResult[5] = text;
          class L {
            constructor() {
              let items;
              let num = 1;
              const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
              if (!useReducedMotion) {
                num = sharedValue.get();
              }
              items = [{ scale: num }];
              return obj;
            }
          }
          cResult[6] = obj4;
          tmp23 = obj4;
        } else {
          tmp23 = cResult[6];
        }
        if (cResult[7] === tmp4.progressBarMarker) {
          let tmp24;
          if (cResult[8] === tmp23) {
            tmp24 = cResult[9];
          }
          if (cResult[10] === tmp4.progressBarMarkerBackground) {
            let tmp25;
            if (cResult[11] === animatedStyle) {
              tmp25 = cResult[12];
            }
            if (cResult[13] === tier === guild.premiumTier) {
              if (cResult[14] === isDisabled) {
                if (cResult[15] === revealedTier >= tier) {
                  if (cResult[16] === guild.premiumTier >= tier) {
                    if (cResult[17] === tier) {
                      let tmp29;
                      if (cResult[18] === useReducedMotion) {
                        tmp29 = cResult[19];
                      }
                      const tmp34 = !(guild.premiumTier >= tier && revealedTier >= tier) && tmp4.progressBarMarkerLabelLocked;
                      class L {
                        constructor() {
                          let items;
                          let num = 1;
                          const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                          if (!useReducedMotion) {
                            num = sharedValue.get();
                          }
                          items = [{ scale: num }];
                          return obj;
                        }
                      }
                      if (cResult[20] === tmp4.progressBarMarkerLabel) {
                        if (cResult[21] === tmp34) {
                          let tmp37;
                          if (cResult[22] === (tmp11 && tier !== BoostedGuildTiers.NONE)) {
                            tmp37 = cResult[23];
                          }
                          if (cResult[24] === tmp4.progressBarMarkerUnlockedIcon) {
                            if (cResult[25] === (guild.premiumTier >= tier && revealedTier >= tier)) {
                              let tmp38;
                              let tmp41;
                              let tmp43;
                              if (cResult[26] === tier) {
                                tmp38 = cResult[27];
                              }
                              if (cResult[28] !== tier) {
                                const tmpResult4 = useReducedMotion(7666);
                                const tierName = tmpResult4.getTierName(tier, { useLevels: false });
                                cResult[28] = tier;
                                class L {
                                  constructor() {
                                    let items;
                                    let num = 1;
                                    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                                    if (!useReducedMotion) {
                                      num = sharedValue.get();
                                    }
                                    items = [{ scale: num }];
                                    return obj;
                                  }
                                }
                                cResult[29] = tierName;
                                tmp41 = tierName;
                              } else {
                                tmp41 = cResult[29];
                              }
                              if (cResult[30] !== tmp41) {
                                const obj5 = { variant: "text-xs/medium", children: tmp41 };
                                const tmp45 = closure_7(useReducedMotion(4886).Text, obj5);
                                class L {
                                  constructor() {
                                    let items;
                                    let num = 1;
                                    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                                    if (!useReducedMotion) {
                                      num = sharedValue.get();
                                    }
                                    items = [{ scale: num }];
                                    return obj;
                                  }
                                }
                                cResult[30] = tmp41;
                                cResult[31] = tmp45;
                                tmp43 = tmp45;
                              } else {
                                tmp43 = cResult[31];
                              }
                              if (cResult[32] === tmp37) {
                                if (cResult[33] === tmp38) {
                                  let tmp46;
                                  if (cResult[34] === tmp43) {
                                    tmp46 = cResult[35];
                                  }
                                  if (cResult[36] === tmp46) {
                                    if (cResult[37] === tmp24) {
                                      if (cResult[38] === tmp25) {
                                        let tmp49;
                                        if (cResult[39] === tmp29) {
                                          tmp49 = cResult[40];
                                        }
                                        return tmp49;
                                      }
                                    }
                                  }
                                  class L {
                                    constructor() {
                                      let items;
                                      let num = 1;
                                      const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                                      if (!useReducedMotion) {
                                        num = sharedValue.get();
                                      }
                                      items = [{ scale: num }];
                                      return obj;
                                    }
                                  }
                                  tmp52[0] = tmp24;
                                  let items = [tmp25, tmp29, tmp46];
                                  tmp52[1] = items;
                                  const tmp53 = closure_8(PREMIUM_PERK_PINK, tmp52);
                                  cResult[36] = tmp46;
                                  cResult[37] = tmp24;
                                  cResult[38] = tmp25;
                                  cResult[39] = tmp29;
                                  cResult[40] = tmp53;
                                  tmp49 = tmp53;
                                }
                              }
                              class L {
                                constructor() {
                                  let items;
                                  let num = 1;
                                  const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                                  if (!useReducedMotion) {
                                    num = sharedValue.get();
                                  }
                                  items = [{ scale: num }];
                                  return obj;
                                }
                              }
                              const obj6 = { style: tmp37, children: items1 };
                              items1 = [tmp38, tmp43];
                              const tmp48 = closure_8(PREMIUM_PERK_PINK, obj6);
                              cResult[32] = tmp37;
                              cResult[33] = tmp38;
                              cResult[34] = tmp43;
                              cResult[35] = tmp48;
                              tmp46 = tmp48;
                            }
                          }
                          class L {
                            constructor() {
                              let items;
                              let num = 1;
                              const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                              if (!useReducedMotion) {
                                num = sharedValue.get();
                              }
                              items = [{ scale: num }];
                              return obj;
                            }
                          }
                          cResult[24] = tmp4.progressBarMarkerUnlockedIcon;
                          cResult[25] = guild.premiumTier >= tier && revealedTier >= tier;
                          cResult[26] = tier;
                          cResult[27] = tmp11 && tier !== BoostedGuildTiers.NONE;
                          tmp38 = tmp39;
                        }
                      }
                      const items2 = [tmp4.progressBarMarkerLabel, tmp34, tmp35];
                      cResult[20] = tmp4.progressBarMarkerLabel;
                      cResult[21] = tmp34;
                      cResult[22] = tmp11 && tier !== BoostedGuildTiers.NONE;
                      cResult[23] = items2;
                      tmp37 = items2;
                    }
                  }
                }
              }
            }
            class L {
              constructor() {
                let items;
                let num = 1;
                const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
                if (!useReducedMotion) {
                  num = sharedValue.get();
                }
                items = [{ scale: num }];
                return obj;
              }
            }
            tmp32[0] = tier;
            tmp32[1] = isDisabled;
            tmp32[2] = guild.premiumTier >= tier;
            tmp32[3] = revealedTier >= tier;
            tmp32[4] = tier === guild.premiumTier;
            tmp32[5] = useReducedMotion;
            const tmp33 = closure_7(closure_15, tmp32);
            cResult[13] = tier === guild.premiumTier;
            cResult[14] = isDisabled;
            cResult[15] = revealedTier >= tier;
            cResult[16] = guild.premiumTier >= tier;
            cResult[17] = tier;
            cResult[18] = useReducedMotion;
            cResult[19] = tmp33;
            tmp29 = tmp33;
          }
          const obj7 = { style: tmp27 };
          class L {
            constructor() {
              let items;
              let num = 1;
              const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
              if (!useReducedMotion) {
                num = sharedValue.get();
              }
              items = [{ scale: num }];
              return obj;
            }
          }
          tmp27[0] = tmp4.progressBarMarkerBackground;
          tmp27[1] = animatedStyle;
          const tmp28 = closure_7(sharedValue(4612).View, obj7);
          cResult[10] = tmp4.progressBarMarkerBackground;
          cResult[11] = animatedStyle;
          cResult[12] = tmp28;
          tmp25 = tmp28;
        }
        const items3 = [tmp4.progressBarMarker, tmp23];
        cResult[7] = tmp4.progressBarMarker;
        cResult[8] = tmp23;
        cResult[9] = items3;
        tmp24 = items3;
      }
    }
    const fn = function c() {
      const tmp = closure_3 && closure_2;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, closure_12));
      }
    };
    tmp16[0] = guild.premiumTier >= tier && revealedTier >= tier;
    tmp16[1] = sharedValue;
    tmp16[2] = tier === guild.premiumTier;
    cResult[0] = tier === guild.premiumTier;
    cResult[1] = sharedValue;
    cResult[2] = guild.premiumTier >= tier && revealedTier >= tier;
    cResult[3] = fn;
    cResult[4] = tmp16;
    tmp15 = tmp16;
    tmp14 = fn;
  }
  const tmpResult5 = useReducedMotion(4729);
  const isThemeDarkResult = tmpResult5.isThemeDark(tmp6);
  const hexWithOpacity = useReducedMotion(4727).hexWithOpacity;
  useReducedMotion(4727);
  const unsafe_rawColors = tmp5(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
}) : ((arg0) => {
  let closure_2;
  let closure_3;
  let guild;
  let isDisabled;
  let items1;
  let items2;
  let items3;
  let items5;
  let revealedTier;
  let tier;
  let tmp5Result4;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_16();
  const tmp4 = sharedValue(4791)();
  let obj = useReducedMotion(4612);
  sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9 && tmp8;
  backgroundColor = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tier === guild.premiumTier];
    const effect = backgroundColor.useEffect(() => {
      const tmp = closure_3 && closure_2;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, closure_12));
      }
    }, items);
    const tmp5Result = useReducedMotion(4612);
    class N {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
        if (!useReducedMotion) {
          num = sharedValue.get();
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    obj2 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    N.__closure = obj2;
    N.__workletHash = 25784602338;
    N.__initData = __initData4;
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp.progressBarMarker, ];
    const obj4 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj4;
    const animatedStyle = tmp5Result.useAnimatedStyle(N);
    const obj5 = { style: items2 };
    items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    items3 = [closure_7(sharedValue(4612).View, obj5), , ];
    const obj6 = { tier, isDisabled, isTierUnlocked: guild.premiumTier >= tier, isTierAnimated: revealedTier >= tier, isCurrentTier: tier === guild.premiumTier, useReducedMotion };
    items3[1] = closure_7(closure_15, obj6);
    const items4 = [tmp.progressBarMarkerLabel, !tmp20Result && tmp.progressBarMarkerLabelLocked, ];
    const progressBarMarkerLabelWithIcon = tmp20Result && tier !== BoostedGuildTiers.NONE && tmp.progressBarMarkerLabelWithIcon;
    const obj7 = { style: items4, children: items5 };
    items4[2] = progressBarMarkerLabelWithIcon;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj8 = { source: sharedValue(11181), style: tmp.progressBarMarkerUnlockedIcon };
      tmp20Result = closure_7(closure_5, obj8);
    }
    items5 = [tmp20Result, ];
    const obj9 = { variant: "text-xs/medium", children: tmp5Result4.getTierName(tier, { useLevels: false }) };
    const Text = useReducedMotion(4886).Text;
    tmp5Result4 = useReducedMotion(7666);
    items5[1] = closure_7(Text, obj9);
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj7);
    return closure_8(PREMIUM_PERK_PINK, obj3);
  }
  const tmp5Result5 = useReducedMotion(4729);
  const isThemeDarkResult = tmp5Result5.isThemeDark(tmp4);
  const hexWithOpacity = useReducedMotion(4727).hexWithOpacity;
  useReducedMotion(4727);
  const unsafe_rawColors = tmp2(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default tmp5;
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };