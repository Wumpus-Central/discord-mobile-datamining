// === Module 13387: GuildBoostingMarketingProgressBarMarker ===

// Module 13387 (GuildBoostingMarketingProgressBarMarker)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import _modDef13388 from "module_13388" /* 13388 */;
import _modDef13389 from "module_13389" /* 13389 */;
import _modDef13390 from "module_13390" /* 13390 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1085).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: _modDef13388, [TIER_2]: _modDef13389, [TIER_3]: _modDef13390 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = fn(4890);
let obj4 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: null };
let size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
obj4.progressBarMarkerInnerCircleIconUnlocked = size;
let closure_11 = createStyles.createStyles(obj4);
let closure_12 = { stiffness: 50, damping: 5 };
const __initData = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
const __initData2 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((isDisabled) => {
  let BoostGemSlashIcon = useReducedMotion;
  const cResult = useReducedMotion(isTierUnlocked[10]).c(18);
  ({ tier, isTierUnlocked, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  ({ isTierAnimated, isCurrentTier } = isDisabled);
  const tmp3 = closure_11();
  let obj = useReducedMotion(isTierUnlocked[10]);
  obj2 = useReducedMotion(isTierUnlocked[12]);
  const sharedValue = obj2.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    let PREMIUM_PERK_PINK = tmp4(tmp[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const BoostGemSlashIconResult = BoostGemSlashIcon(tmp[13]);
    let num = 1;
    if (BoostGemSlashIconResult1.isThemeDark(tmp5)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = BoostGemSlashIconResult.hexWithOpacity(tmp4(tmp[8]).unsafe_rawColors.WHITE, num);
    BoostGemSlashIconResult1 = BoostGemSlashIcon(tmp[14]);
  }
  if (cResult[0] === sharedValue) {
    if (cResult[1] === isTierUnlocked) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = PREMIUM_PERK_PINK.useEffect(tmp7, tmp8);
    class A {
      constructor() {
        obj = { backgroundColor: closure_3, transform: null };
        num = 1;
        if (!useReducedMotion) {
          tmp = isTierAnimated;
          num = 1;
          if (isTierAnimated) {
            tmp2 = closure_1;
            num = closure_1.get();
          }
        }
        items = [];
        items[0] = { scale: num };
        obj.transform = items;
        return obj;
      }
    }
    const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
    A.__closure = obj3;
    A.__workletHash = 15398057099178;
    A.__initData = __initData;
    const animatedStyle = BoostGemSlashIcon(tmp[12]).useAnimatedStyle(A);
    if (cResult[4] === isDisabled) {
      if (cResult[5] === tmp3) {
        if (cResult[6] === isTierUnlocked) {
          if (cResult[7] === tier) {
            let tmp13 = cResult[8];
          }
          if (isCurrentTier) {
            if (isTierUnlocked) {
              return tmp13;
            }
          }
          if (cResult[9] !== tmp3.progressBarMarkerInnerCircle) {
            let items = [tmp3.progressBarMarkerInnerCircle];
            cResult[9] = tmp3.progressBarMarkerInnerCircle;
            class A {
              constructor() {
                obj = { backgroundColor: closure_3, transform: null };
                num = 1;
                if (!useReducedMotion) {
                  tmp = isTierAnimated;
                  num = 1;
                  if (isTierAnimated) {
                    tmp2 = closure_1;
                    num = closure_1.get();
                  }
                }
                items = [];
                items[0] = { scale: num };
                obj.transform = items;
                return obj;
              }
            }
            cResult[10] = items;
            let tmp21 = items;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            if (cResult[12] === tmp3.progressBarMarkerInnerCircleBackground) {
              let tmp22 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp21) {
              }
            }
            class A {
              constructor() {
                obj = { backgroundColor: closure_3, transform: null };
                num = 1;
                if (!useReducedMotion) {
                  tmp = isTierAnimated;
                  num = 1;
                  if (isTierAnimated) {
                    tmp2 = closure_1;
                    num = closure_1.get();
                  }
                }
                items = [];
                items[0] = { scale: num };
                obj.transform = items;
                return obj;
              }
            }
            tmp27[0] = tmp21;
            const items1 = [tmp22, tmp13];
            tmp27[1] = items1;
            const tmp28 = closure_8(closure_4, tmp27);
            cResult[14] = tmp13;
            cResult[15] = tmp21;
            cResult[16] = tmp22;
            cResult[17] = tmp28;
          }
          class A {
            constructor() {
              obj = { backgroundColor: closure_3, transform: null };
              num = 1;
              if (!useReducedMotion) {
                tmp = isTierAnimated;
                num = 1;
                if (isTierAnimated) {
                  tmp2 = closure_1;
                  num = closure_1.get();
                }
              }
              items = [];
              items[0] = { scale: num };
              obj.transform = items;
              return obj;
            }
          }
          const obj4 = { style: null };
          const items2 = [tmp3.progressBarMarkerInnerCircleBackground, animatedStyle];
          obj4.style = items2;
          const tmp23 = closure_7(tmp4(tmp[12]).View, obj4);
          cResult[11] = animatedStyle;
          cResult[12] = tmp3.progressBarMarkerInnerCircleBackground;
          cResult[13] = tmp23;
          tmp22 = tmp23;
        }
      }
    }
    if (tier === BoostedGuildTiers.NONE) {
      cResult[4] = isDisabled;
      cResult[5] = tmp3;
      class A {
        constructor() {
          obj = { backgroundColor: closure_3, transform: null };
          num = 1;
          if (!useReducedMotion) {
            tmp = isTierAnimated;
            num = 1;
            if (isTierAnimated) {
              tmp2 = closure_1;
              num = closure_1.get();
            }
          }
          items = [];
          items[0] = { scale: num };
          obj.transform = items;
          return obj;
        }
      }
      cResult[6] = isTierUnlocked;
      cResult[7] = tier;
      cResult[8] = null;
      tmp13 = null;
    } else if (isDisabled) {
      BoostGemSlashIcon = BoostGemSlashIcon(tmp[16]).BoostGemSlashIcon;
      let tmp30Result = closure_7(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
    } else {
      const obj5 = { source: obj2[tier], style: null };
      const items3 = [, ];
      class A {
        constructor() {
          obj = { backgroundColor: closure_3, transform: null };
          num = 1;
          if (!useReducedMotion) {
            tmp = isTierAnimated;
            num = 1;
            if (isTierAnimated) {
              tmp2 = closure_1;
              num = closure_1.get();
            }
          }
          items = [];
          items[0] = { scale: num };
          obj.transform = items;
          return obj;
        }
      }
      const unsafe_rawColors = tmp4(tmp[8]).unsafe_rawColors;
      const obj6 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
      items3[1] = obj6;
      obj5.style = items3;
      tmp30Result = closure_7(closure_5, obj5);
    }
    const BoostGemSlashIconResult2 = BoostGemSlashIcon(tmp[12]);
  }
  const fn = function c() {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(spring.withSpring(1, closure_12));
    }
  };
  const items4 = [isTierUnlocked, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = isTierUnlocked;
  cResult[2] = fn;
  cResult[3] = items4;
  tmp8 = items4;
  tmp7 = fn;
  tmp5 = sharedValue(isTierUnlocked[11])();
}) : ((arg0) => {
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  const tmp = closure_11();
  let BoostGemSlashIcon = useReducedMotion;
  const tmp4 = sharedValue(isTierUnlocked[11])();
  let num = 1;
  sharedValue = useReducedMotion(isTierUnlocked[12]).useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(tmp3[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const BoostGemSlashIconResult = BoostGemSlashIcon(tmp3[13]);
    if (BoostGemSlashIconResult1.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = BoostGemSlashIconResult.hexWithOpacity(tmp2(tmp3[8]).unsafe_rawColors.WHITE, num);
    BoostGemSlashIconResult1 = BoostGemSlashIcon(tmp3[14]);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = PREMIUM_PERK_PINK.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(spring.withSpring(1, closure_12));
    }
  }, items);
  BoostGemSlashIcon(isTierUnlocked[12]);
  const fn = function y() {
    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
    let num = 1;
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    const items = [{ scale: num }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15193519633545;
  fn.__initData = __initData2;
  if (tier === BoostedGuildTiers.NONE) {
    if (!isCurrentTier) {
      obj2 = { style: null, children: null };
      const items1 = [tmp.progressBarMarkerInnerCircle];
      obj2.style = items1;
      const obj3 = { style: null };
      const items2 = [tmp.progressBarMarkerInnerCircleBackground, tmp8];
      obj3.style = items2;
      const items3 = [closure_7(tmp2(tmp3[12]).View, obj3), null];
      obj2.children = items3;
      let tmp13 = closure_8(closure_4, obj2);
    } else {
      tmp13 = null;
    }
    return tmp13;
  } else if (isDisabled) {
    BoostGemSlashIcon = BoostGemSlashIcon(tmp3[16]).BoostGemSlashIcon;
    let tmp17Result = closure_7(BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    const obj4 = { source: obj2[tier], style: null };
    const items4 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
    const obj5 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
    items4[1] = obj5;
    obj4.style = items4;
    tmp17Result = closure_7(closure_5, obj4);
  }
  let obj = useReducedMotion(isTierUnlocked[12]);
});
createStyles = fn(4890);
let obj5 = { progressBarMarker: null, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" }, progressBarMarkerLabelWithIcon: null, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: null };
const size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: null, zIndex: 1 };
let items = [{ translateX: -14 }];
size1.transform = items;
obj5.progressBarMarker = size1;
let obj9 = { transform: null };
let items1 = [{ translateX: -7 }];
obj9.transform = items1;
obj5.progressBarMarkerLabelWithIcon = obj9;
const size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj5.progressBarMarkerUnlockedIcon = size2;
let closure_16 = createStyles.createStyles(obj5);
const __initData3 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx3(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
const __initData4 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx4(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
ReactCompilerGating = fn(558);
let obj8 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isDisabled) => {
  let obj = useReducedMotion(576);
  const cResult = obj.c(41);
  ({ guild, tier, useReducedMotion } = isDisabled);
  isDisabled = isDisabled.isDisabled;
  const tmp4 = closure_16();
  const tmp6 = sharedValue(4791)();
  sharedValue = useReducedMotion(4612).useSharedValue(1);
  dependencyMap = tmp8;
  let tmp11 = tmp10;
  if (guild.premiumTier >= tier) {
    tmp11 = tmp9;
  }
  backgroundColor = tmp11;
  if (tier === guild.premiumTier) {
    if (tmp11) {
      let PREMIUM_PERK_PINK = tmp5(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    if (cResult[0] === tmp8) {
      if (cResult[1] === sharedValue) {
        if (cResult[2] === tmp11) {
          let tmp14 = cResult[3];
          let tmp15 = cResult[4];
        }
        const effect = backgroundColor.useEffect(tmp14, tmp15);
        class L {
          constructor() {
            obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
            num = 1;
            if (!useReducedMotion) {
              tmp = closure_1;
              num = closure_1.get();
            }
            items = [];
            items[0] = { scale: num };
            obj.transform = items;
            return obj;
          }
        }
        const obj3 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
        L.__closure = obj3;
        L.__workletHash = 6048829722949;
        L.__initData = __initData3;
        const animatedStyle = useReducedMotion(4612).useAnimatedStyle(L);
        const text = `${100 * obj[tier]}%`;
        if (cResult[5] !== `${100 * obj[tier]}%`) {
          const obj4 = { left: text };
          cResult[5] = text;
          class L {
            constructor() {
              obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
              num = 1;
              if (!useReducedMotion) {
                tmp = closure_1;
                num = closure_1.get();
              }
              items = [];
              items[0] = { scale: num };
              obj.transform = items;
              return obj;
            }
          }
          cResult[6] = obj4;
          let tmp23 = obj4;
        } else {
          tmp23 = cResult[6];
        }
        if (cResult[7] === tmp4.progressBarMarker) {
          if (cResult[8] === tmp23) {
            let tmp24 = cResult[9];
          }
          if (cResult[10] === tmp4.progressBarMarkerBackground) {
            if (cResult[11] === animatedStyle) {
              let tmp25 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              if (cResult[14] === isDisabled) {
                if (cResult[15] === tmp9) {
                  if (cResult[16] === tmp10) {
                    if (cResult[17] === tier) {
                      if (cResult[18] === useReducedMotion) {
                        let tmp29 = cResult[19];
                      }
                      let progressBarMarkerLabelLocked = !tmp11;
                      if (!tmp11) {
                        progressBarMarkerLabelLocked = tmp4.progressBarMarkerLabelLocked;
                      }
                      let progressBarMarkerLabelWithIcon = tmp11;
                      class L {
                        constructor() {
                          obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                          num = 1;
                          if (!useReducedMotion) {
                            tmp = closure_1;
                            num = closure_1.get();
                          }
                          items = [];
                          items[0] = { scale: num };
                          obj.transform = items;
                          return obj;
                        }
                      }
                      if (progressBarMarkerLabelWithIcon) {
                        progressBarMarkerLabelWithIcon = tmp4.progressBarMarkerLabelWithIcon;
                      }
                      if (cResult[20] === tmp4.progressBarMarkerLabel) {
                        if (cResult[21] === progressBarMarkerLabelLocked) {
                          if (cResult[22] === progressBarMarkerLabelWithIcon) {
                            let tmp34 = cResult[23];
                          }
                          if (cResult[24] === tmp4.progressBarMarkerUnlockedIcon) {
                            if (cResult[25] === tmp11) {
                              if (cResult[26] === tier) {
                                let tmp35 = cResult[27];
                              }
                              if (cResult[28] !== tier) {
                                const tierName = useReducedMotion(7666).getTierName(tier, { useLevels: false });
                                cResult[28] = tier;
                                class L {
                                  constructor() {
                                    obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                                    num = 1;
                                    if (!useReducedMotion) {
                                      tmp = closure_1;
                                      num = closure_1.get();
                                    }
                                    items = [];
                                    items[0] = { scale: num };
                                    obj.transform = items;
                                    return obj;
                                  }
                                }
                                cResult[29] = tierName;
                                let tmp38 = tierName;
                                const tmpResult4 = useReducedMotion(7666);
                              } else {
                                tmp38 = cResult[29];
                              }
                              if (cResult[30] !== tmp38) {
                                const obj5 = { variant: "text-xs/medium", children: tmp38 };
                                const tmp42 = closure_7(useReducedMotion(4886).Text, obj5);
                                class L {
                                  constructor() {
                                    obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                                    num = 1;
                                    if (!useReducedMotion) {
                                      tmp = closure_1;
                                      num = closure_1.get();
                                    }
                                    items = [];
                                    items[0] = { scale: num };
                                    obj.transform = items;
                                    return obj;
                                  }
                                }
                                cResult[30] = tmp38;
                                cResult[31] = tmp42;
                                let tmp40 = tmp42;
                              } else {
                                tmp40 = cResult[31];
                              }
                              if (cResult[32] === tmp34) {
                                if (cResult[33] === tmp35) {
                                  if (cResult[34] === tmp40) {
                                    let tmp43 = cResult[35];
                                  }
                                  if (cResult[36] === tmp43) {
                                    if (cResult[37] === tmp24) {
                                      if (cResult[38] === tmp25) {
                                        if (cResult[39] === tmp29) {
                                          let tmp46 = cResult[40];
                                        }
                                        return tmp46;
                                      }
                                    }
                                  }
                                  class L {
                                    constructor() {
                                      obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                                      num = 1;
                                      if (!useReducedMotion) {
                                        tmp = closure_1;
                                        num = closure_1.get();
                                      }
                                      items = [];
                                      items[0] = { scale: num };
                                      obj.transform = items;
                                      return obj;
                                    }
                                  }
                                  tmp49[0] = tmp24;
                                  let items = [tmp25, tmp29, tmp43];
                                  tmp49[1] = items;
                                  const tmp50 = closure_8(PREMIUM_PERK_PINK, tmp49);
                                  cResult[36] = tmp43;
                                  cResult[37] = tmp24;
                                  cResult[38] = tmp25;
                                  cResult[39] = tmp29;
                                  cResult[40] = tmp50;
                                  tmp46 = tmp50;
                                }
                              }
                              class L {
                                constructor() {
                                  obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                                  num = 1;
                                  if (!useReducedMotion) {
                                    tmp = closure_1;
                                    num = closure_1.get();
                                  }
                                  items = [];
                                  items[0] = { scale: num };
                                  obj.transform = items;
                                  return obj;
                                }
                              }
                              const obj6 = { style: tmp34, children: null };
                              const items1 = [tmp35, tmp40];
                              obj6.children = items1;
                              const tmp45 = closure_8(PREMIUM_PERK_PINK, obj6);
                              cResult[32] = tmp34;
                              cResult[33] = tmp35;
                              cResult[34] = tmp40;
                              cResult[35] = tmp45;
                              tmp43 = tmp45;
                            }
                          }
                          let tmp36 = tmp11;
                          if (tmp11) {
                            tmp36 = tier !== BoostedGuildTiers.NONE;
                          }
                          class L {
                            constructor() {
                              obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                              num = 1;
                              if (!useReducedMotion) {
                                tmp = closure_1;
                                num = closure_1.get();
                              }
                              items = [];
                              items[0] = { scale: num };
                              obj.transform = items;
                              return obj;
                            }
                          }
                          cResult[24] = tmp4.progressBarMarkerUnlockedIcon;
                          cResult[25] = tmp11;
                          cResult[26] = tier;
                          cResult[27] = tmp36;
                          tmp35 = tmp36;
                        }
                      }
                      const items2 = [tmp4.progressBarMarkerLabel, progressBarMarkerLabelLocked, progressBarMarkerLabelWithIcon];
                      cResult[20] = tmp4.progressBarMarkerLabel;
                      cResult[21] = progressBarMarkerLabelLocked;
                      cResult[22] = progressBarMarkerLabelWithIcon;
                      cResult[23] = items2;
                      tmp34 = items2;
                    }
                  }
                }
              }
            }
            class L {
              constructor() {
                obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
                num = 1;
                if (!useReducedMotion) {
                  tmp = closure_1;
                  num = closure_1.get();
                }
                items = [];
                items[0] = { scale: num };
                obj.transform = items;
                return obj;
              }
            }
            tmp32[0] = tier;
            tmp32[1] = isDisabled;
            tmp32[2] = tmp10;
            tmp32[3] = tmp9;
            tmp32[4] = tmp8;
            tmp32[5] = useReducedMotion;
            const tmp33 = closure_7(closure_15, tmp32);
            cResult[13] = tmp8;
            cResult[14] = isDisabled;
            cResult[15] = tmp9;
            cResult[16] = tmp10;
            cResult[17] = tier;
            cResult[18] = useReducedMotion;
            cResult[19] = tmp33;
            tmp29 = tmp33;
          }
          const obj7 = { style: null };
          class L {
            constructor() {
              obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
              num = 1;
              if (!useReducedMotion) {
                tmp = closure_1;
                num = closure_1.get();
              }
              items = [];
              items[0] = { scale: num };
              obj.transform = items;
              return obj;
            }
          }
          tmp27[0] = tmp4.progressBarMarkerBackground;
          tmp27[1] = animatedStyle;
          obj7.style = tmp27;
          const tmp28 = closure_7(tmp5(4612).View, obj7);
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
        const tmpResult = useReducedMotion(4612);
      }
    }
    const fn = function c() {
      let tmp = closure_3;
      if (closure_3) {
        tmp = closure_2;
      }
      if (tmp) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(spring.withSpring(1, closure_12));
      }
    };
    tmp16[0] = tmp11;
    tmp16[1] = sharedValue;
    tmp16[2] = tmp8;
    cResult[0] = tmp8;
    cResult[1] = sharedValue;
    cResult[2] = tmp11;
    cResult[3] = fn;
    cResult[4] = tmp16;
    tmp15 = tmp16;
    tmp14 = fn;
  }
  obj2 = useReducedMotion(4612);
  const tmpResult5 = useReducedMotion(4729);
  const isThemeDarkResult = useReducedMotion(4729).isThemeDark(tmp6);
  const hexWithOpacity = useReducedMotion(4727).hexWithOpacity;
  const unsafe_rawColors = tmp5(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
  const tmpResult6 = useReducedMotion(4727);
}) : ((arg0) => {
  ({ guild, tier, useReducedMotion } = arg0);
  backgroundColor = undefined;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_16();
  let obj = useReducedMotion(4612);
  const sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9;
  if (guild.premiumTier >= tier) {
    tmp20Result = tmp8;
  }
  backgroundColor = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(587).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tmp7];
    const effect = backgroundColor.useEffect(() => {
      let tmp = closure_3;
      if (closure_3) {
        tmp = closure_2;
      }
      if (tmp) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(spring.withSpring(1, closure_12));
      }
    }, items);
    class N {
      constructor() {
        obj = { backgroundColor: PREMIUM_PERK_PINK, transform: null };
        num = 1;
        if (!useReducedMotion) {
          tmp = closure_1;
          num = closure_1.get();
        }
        items = [];
        items[0] = { scale: num };
        obj.transform = items;
        return obj;
      }
    }
    obj2 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    N.__closure = obj2;
    N.__workletHash = 25784602338;
    N.__initData = __initData4;
    const obj3 = { style: null, children: null };
    const items1 = [tmp.progressBarMarker, ];
    const obj4 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj4;
    obj3.style = items1;
    const animatedStyle = useReducedMotion(4612).useAnimatedStyle(N);
    const obj5 = { style: null };
    const items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    obj5.style = items2;
    const items3 = [closure_7(tmp2(4612).View, obj5), , ];
    const obj6 = { tier, isDisabled, isTierUnlocked: tmp9, isTierAnimated: tmp8, isCurrentTier: tmp7, useReducedMotion };
    items3[1] = closure_7(closure_15, obj6);
    const items4 = [tmp.progressBarMarkerLabel, , ];
    let progressBarMarkerLabelLocked = !tmp20Result;
    if (!tmp20Result) {
      progressBarMarkerLabelLocked = tmp.progressBarMarkerLabelLocked;
    }
    items4[1] = progressBarMarkerLabelLocked;
    let progressBarMarkerLabelWithIcon = tmp20Result;
    if (tmp20Result) {
      progressBarMarkerLabelWithIcon = tier !== BoostedGuildTiers.NONE;
    }
    if (progressBarMarkerLabelWithIcon) {
      progressBarMarkerLabelWithIcon = tmp.progressBarMarkerLabelWithIcon;
    }
    const obj7 = { style: null, children: null };
    items4[2] = progressBarMarkerLabelWithIcon;
    obj7.style = items4;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj8 = { source: tmp2(11181), style: tmp.progressBarMarkerUnlockedIcon };
      tmp20Result = closure_7(closure_5, obj8);
    }
    const items5 = [tmp20Result, ];
    const obj9 = { variant: "text-xs/medium", children: null };
    const tmp5Result = useReducedMotion(4612);
    obj9.children = useReducedMotion(7666).getTierName(tier, { useLevels: false });
    items5[1] = closure_7(useReducedMotion(4886).Text, obj9);
    obj7.children = items5;
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj7);
    obj3.children = items3;
    return closure_8(PREMIUM_PERK_PINK, obj3);
  }
  const tmp4 = sharedValue(4791)();
  const tmp5Result5 = useReducedMotion(4729);
  const isThemeDarkResult = useReducedMotion(4729).isThemeDark(tmp4);
  const hexWithOpacity = useReducedMotion(4727).hexWithOpacity;
  const unsafe_rawColors = tmp2(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
  const tmp5Result6 = useReducedMotion(4727);
});
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };