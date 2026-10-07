// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;

require = fn;
const View = fn(17).View;
const BoostedGuildTiers = fn(1085).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  progressBarContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    paddingHorizontal: fn(13408).MARKER_DIMENSIONS / 2 + 34,
  },
  progressBar: { height: 54, maxWidth: 660, width: "100%" },
  progressBarScrubber: null,
  progressBarTrack: null,
  progressBarFill: null,
  progressBarGradientFill: null,
};
let obj3 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: 40,
  paddingHorizontal: fn(13408).MARKER_DIMENSIONS / 2 + 34,
};
obj2.progressBarScrubber = {
  height: 8,
  top: fn(13408).MARKER_DIMENSIONS / 2 - 4,
  marginHorizontal: fn(13408).MARKER_DIMENSIONS / 2 + 2,
};
let size = {
  borderRadius: 8,
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: 0,
  backgroundColor: nativeDefault.colors.SPINE_DEFAULT,
};
obj2.progressBarTrack = size;
obj2.progressBarFill = { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 };
obj2.progressBarGradientFill = { height: "100%", width: "100%", borderRadius: 8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [, , ,];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
const __initData = {
  code: 'function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+"%"};}',
};
const __initData2 = {
  code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}",
};
const __initData3 = {
  code: "function GuildBoostingMarketingProgressBarTsx3(width_0){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width_0>=33.33-TIER_REACHED_OFFSET){tier=BoostedGuildTiers.TIER_1;}if(width_0>=66.67-TIER_REACHED_OFFSET){tier=BoostedGuildTiers.TIER_2;}if(width_0>=100-TIER_REACHED_OFFSET){tier=BoostedGuildTiers.TIER_3;}if(tier!==revealedTier){runOnJS(setRevealedTier)(tier);}}",
};
const __initData4 = {
  code: 'function GuildBoostingMarketingProgressBarTsx4(){const{width}=this.__closure;return{width:width.get()+"%"};}',
};
const __initData5 = {
  code: "function GuildBoostingMarketingProgressBarTsx5(){const{width}=this.__closure;return width.get();}",
};
const __initData6 = {
  code: "function GuildBoostingMarketingProgressBarTsx6(width_0){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width_0>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width_0>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width_0>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}",
};
const ReactCompilerGating = fn(558);
let obj4 = {
  height: 8,
  top: fn(13408).MARKER_DIMENSIONS / 2 - 4,
  marginHorizontal: fn(13408).MARKER_DIMENSIONS / 2 + 2,
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(sharedValue[10]).c(39);
      guild = guild.guild;
      let tmp4 = closure_10();
      let obj = guild(sharedValue[10]);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [AccessibilityStore];
        const fn = function w() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmp6 = stateFromStores(sharedValue[11])();
      stateFromStores = guild(sharedValue[12]).useStateFromStores(tmp7, tmp8);
      const tmpResult = guild(sharedValue[12]);
      sharedValue = guild(sharedValue[13]).useSharedValue(0);
      const tmp12 = revealedTier(noop.useState(BoostedGuildTiers.NONE), 2);
      revealedTier = tmp12[0];
      noop = tmp14;
      const obj4 = noop;
      const tmpResult6 = guild(sharedValue[13]);
      class G {
        constructor() {
          obj = { width: "" + closure_2.get() + "%" };
          return obj;
        }
      }
      G.__closure = { width: sharedValue };
      G.__workletHash = 8013193810386;
      G.__initData = __initData;
      const animatedStyle = guild(sharedValue[13]).useAnimatedStyle(G);
      const tmpResult7 = guild(sharedValue[13]);
      class A {
        constructor() {
          return closure_2.get();
        }
      }
      A.__closure = { width: sharedValue };
      A.__workletHash = 5482324713221;
      A.__initData = __initData2;
      const fn2 = function v(arg0) {
        let TIER_3 = BoostedGuildTiers.NONE;
        if (arg0 >= 28.33) {
          TIER_3 = BoostedGuildTiers.TIER_1;
        }
        if (arg0 >= 61.67) {
          TIER_3 = BoostedGuildTiers.TIER_2;
        }
        if (arg0 >= 95) {
          TIER_3 = BoostedGuildTiers.TIER_3;
        }
        if (TIER_3 !== first) {
          ReanimatedRexport.runOnJS(closure_4)(TIER_3);
        }
      };
      const tmpResult8 = guild(sharedValue[13]);
      fn2.__closure = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp12[1],
      };
      fn2.__workletHash = 6497629671124;
      fn2.__initData = __initData3;
      const animatedReaction = tmpResult8.useAnimatedReaction(A, fn2);
      if (cResult[2] !== guild) {
        const guildBoostingProgressBarFillFactor = tmp(tmp2[14]).getGuildBoostingProgressBarFillFactor(guild);
        cResult[2] = guild;
        cResult[3] = guildBoostingProgressBarFillFactor;
        let tmp17 = guildBoostingProgressBarFillFactor;
        const tmpResult9 = tmp(tmp2[14]);
      } else {
        tmp17 = cResult[3];
      }
      const fillFactor = tmp17.fillFactor;
      if (cResult[4] === fillFactor) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === sharedValue) {
            let tmp19 = cResult[7];
            let tmp20 = cResult[8];
          }
          const effect = obj4.useEffect(tmp19, tmp20);
          if (cResult[9] === animatedStyle) {
            if (cResult[10] === tmp4.progressBarFill) {
              let tmp24 = cResult[11];
            }
            let str = "#515359";
            if (!tmpResult10.isThemeDark(tmp6)) {
              str = tmp5(tmp2[8]).unsafe_rawColors.PRIMARY_160;
            }
            if (cResult[12] !== str) {
              const items1 = [str, "#AB77F2"];
              cResult[12] = str;
              cResult[13] = items1;
              let tmp25 = items1;
            } else {
              tmp25 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [0.1577, 0.9905];
              cResult[14] = items2;
              let tmp26 = items2;
            } else {
              tmp26 = cResult[14];
            }
            if (cResult[15] === tmp4.progressBarGradientFill) {
              if (cResult[16] === tmp25) {
                let tmp27 = cResult[17];
              }
              if (cResult[18] === tmp27) {
                if (cResult[19] === tmp24) {
                  let tmp30 = cResult[20];
                }
                if (cResult[21] !== tmp4.progressBarTrack) {
                  const obj3 = { style: tmp4.progressBarTrack };
                  const tmp36 = closure_8(fillFactor, obj3);
                  cResult[21] = tmp4.progressBarTrack;
                  cResult[22] = tmp36;
                  let tmp33 = tmp36;
                } else {
                  tmp33 = cResult[22];
                }
                if (cResult[23] === tmp4.progressBarScrubber) {
                  if (cResult[24] === tmp30) {
                    if (cResult[25] === tmp33) {
                      let tmp37 = cResult[26];
                    }
                    if (cResult[27] === fillFactor) {
                      if (cResult[28] === guild) {
                        if (cResult[29] === revealedTier) {
                          if (cResult[30] === stateFromStores) {
                            let tmp41 = cResult[31];
                          }
                          if (cResult[32] === tmp4.progressBar) {
                            if (cResult[33] === tmp37) {
                              if (cResult[34] === tmp41) {
                                let tmp44 = cResult[35];
                              }
                              if (cResult[36] === tmp4.progressBarContainer) {
                                if (cResult[37] === tmp44) {
                                  let tmp48 = cResult[38];
                                }
                                return tmp48;
                              }
                              const obj5 = { style: tmp22, children: tmp44 };
                              const tmp51 = closure_8(fillFactor, obj5);
                              cResult[36] = tmp4.progressBarContainer;
                              cResult[37] = tmp44;
                              cResult[38] = tmp51;
                              tmp48 = tmp51;
                            }
                          }
                          const obj6 = { style: tmp23, children: null };
                          const items3 = [tmp37, tmp41];
                          obj6.children = items3;
                          const tmp47 = closure_9(fillFactor, obj6);
                          cResult[32] = tmp4.progressBar;
                          cResult[33] = tmp37;
                          cResult[34] = tmp41;
                          cResult[35] = tmp47;
                          tmp44 = tmp47;
                        }
                      }
                    }
                    const mapped = items.map((tier) => {
                      const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: null };
                      let tmp4 = guild.premiumTier <= tier;
                      if (tmp4) {
                        tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
                      }
                      obj.isDisabled = tmp4;
                      return closure_2_8(GuildBoostingMarketingProgressBarMarkerDefault, obj, tier);
                    });
                    cResult[27] = fillFactor;
                    cResult[28] = guild;
                    cResult[29] = revealedTier;
                    cResult[30] = stateFromStores;
                    cResult[31] = mapped;
                    tmp41 = mapped;
                  }
                }
                const obj7 = { style: tmp4.progressBarScrubber, children: null };
                const items4 = [tmp30, tmp33];
                obj7.children = items4;
                const tmp40 = closure_9(fillFactor, obj7);
                cResult[23] = tmp4.progressBarScrubber;
                cResult[24] = tmp30;
                cResult[25] = tmp33;
                cResult[26] = tmp40;
                tmp37 = tmp40;
              }
              const obj8 = { style: tmp24, children: tmp27 };
              const tmp32 = closure_8(tmp5(tmp2[13]).View, obj8);
              cResult[18] = tmp27;
              cResult[19] = tmp24;
              cResult[20] = tmp32;
              tmp30 = tmp32;
            }
            const obj9 = {
              useAngle: true,
              angle: 90,
              colors: tmp25,
              locations: tmp26,
              style: tmp4.progressBarGradientFill,
            };
            const tmp29 = closure_8(tmp5(tmp2[17]), obj9);
            cResult[15] = tmp4.progressBarGradientFill;
            cResult[16] = tmp25;
            cResult[17] = tmp29;
            tmp27 = tmp29;
            tmpResult10 = tmp(tmp2[16]);
          }
          const items5 = [tmp4.progressBarFill, animatedStyle];
          cResult[9] = animatedStyle;
          cResult[10] = tmp4.progressBarFill;
          cResult[11] = items5;
          tmp24 = items5;
        }
      }
      class P {
        constructor() {
          result = 100 * fillFactor;
          closure_0 = result;
          closure_1 = -1;
          if (closure_1) {
            tmp3 = closure_2;
            result1 = closure_2.set(result);
          } else {
            tmp2 = globalThis;
            _setTimeout = setTimeout;
            num = 750;
            closure_1 = setTimeout(() => {
              result = sharedValue.set(spring.withSpring(result, closure_12));
            }, 750);
          }
          return () => {
            window.clearTimeout(closure_1);
          };
        }
      }
      const items6 = [fillFactor, sharedValue, stateFromStores];
      cResult[4] = fillFactor;
      cResult[5] = stateFromStores;
      cResult[6] = sharedValue;
      cResult[7] = P;
      cResult[8] = items6;
      tmp20 = items6;
      tmp19 = P;
      const obj2 = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp12[1],
      };
    }
  : (guild) => {
      guild = guild.guild;
      let stateFromStores;
      let sharedValue;
      let revealedTier;
      noop = undefined;
      let fillFactor;
      const tmp = closure_10();
      const tmp2 = stateFromStores;
      const tmp3 = sharedValue;
      let tmp4 = stateFromStores(sharedValue[11])();
      items = [AccessibilityStore];
      stateFromStores = guild(sharedValue[12]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj = guild(sharedValue[12]);
      sharedValue = guild(sharedValue[13]).useSharedValue(0);
      const tmp7 = revealedTier(noop.useState(BoostedGuildTiers.NONE), 2);
      revealedTier = tmp7[0];
      noop = tmp9;
      const obj2 = guild(sharedValue[13]);
      class B {
        constructor() {
          obj = { width: "" + closure_2.get() + "%" };
          return obj;
        }
      }
      B.__closure = { width: sharedValue };
      B.__workletHash = 5141768603063;
      B.__initData = __initData4;
      const animatedStyle = guild(sharedValue[13]).useAnimatedStyle(B);
      const obj3 = guild(sharedValue[13]);
      class S {
        constructor() {
          return closure_2.get();
        }
      }
      S.__closure = { width: sharedValue };
      S.__workletHash = 13317080849890;
      S.__initData = __initData5;
      class R {
        constructor(arg0) {
          tmp = BoostedGuildTiers;
          TIER_3 = BoostedGuildTiers.NONE;
          if (guild >= 28.33) {
            TIER_3 = tmp.TIER_1;
          }
          if (guild >= 61.67) {
            TIER_3 = tmp.TIER_2;
          }
          if (guild >= 95) {
            TIER_3 = tmp.TIER_3;
          }
          if (TIER_3 !== closure_3) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp4 = closure_4;
            tmp5 = obj.runOnJS(closure_4)(TIER_3);
          }
          return;
        }
      }
      const obj4 = guild(sharedValue[13]);
      R.__closure = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp7[1],
      };
      R.__workletHash = 11542211367537;
      R.__initData = __initData6;
      const animatedReaction = obj4.useAnimatedReaction(S, R);
      const items1 = [guild];
      fillFactor = noop.useMemo(
        () => GuildBoostingUtils.getGuildBoostingProgressBarFillFactor(guild),
        items1,
      ).fillFactor;
      const items2 = [fillFactor, sharedValue, stateFromStores];
      const effect = noop.useEffect(() => {
        let result = 100 * fillFactor;
        guild = result;
        let timeout = -1;
        if (timeout) {
          const result1 = sharedValue.set(result);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            result = sharedValue.set(spring.withSpring(result, closure_12));
          }, 750);
        }
        return () => {
          window.clearTimeout(closure_1);
        };
      }, items2);
      const obj6 = { style: tmp.progressBarContainer, children: null };
      const obj7 = { style: tmp.progressBar, children: null };
      const obj8 = { style: tmp.progressBarScrubber, children: null };
      const obj9 = { style: null, children: null };
      const items3 = [tmp.progressBarFill, animatedStyle];
      obj9.style = items3;
      const obj5 = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp7[1],
      };
      const tmp16 = stateFromStores(sharedValue[17]);
      let str = "#515359";
      if (!obj10.isThemeDark(tmp4)) {
        str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
      }
      const obj11 = {
        useAngle: true,
        angle: 90,
        colors: null,
        locations: [0.1577, 0.9905],
        style: tmp.progressBarGradientFill,
      };
      const items4 = [str, "#AB77F2"];
      obj11.colors = items4;
      obj9.children = closure_8(tmp16, obj11);
      const items5 = [
        closure_8(stateFromStores(sharedValue[13]).View, obj9),
        closure_8(fillFactor, { style: tmp.progressBarTrack }),
      ];
      obj8.children = items5;
      const items6 = [
        closure_9(fillFactor, obj8),
        items.map((tier) => {
          const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: null };
          let tmp4 = guild.premiumTier <= tier;
          if (tmp4) {
            tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
          }
          obj.isDisabled = tmp4;
          return closure_2_8(GuildBoostingMarketingProgressBarMarkerDefault, obj, tier);
        }),
      ];
      obj7.children = items6;
      obj6.children = closure_9(fillFactor, obj7);
      return closure_8(fillFactor, obj6);
    };
export const PROGRESS_BAR_SPACING = 40;
