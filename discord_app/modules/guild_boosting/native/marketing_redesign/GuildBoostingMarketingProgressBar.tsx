// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;
let closure_0, guild, num, set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
let react = react_mod;
let View = react_native.View;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  progressBarContainer: obj2,
  progressBar: { height: 54, maxWidth: 660, width: "100%" },
  progressBarScrubber: obj3,
  progressBarTrack: size,
  progressBarFill: { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 },
  progressBarGradientFill: { height: "100%", width: "100%", borderRadius: 8 },
};
obj2 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: 40,
  paddingHorizontal: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 + 34,
};
createStyles = createStyles.createStyles;
obj3 = {
  height: 8,
  top: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 - 4,
  marginHorizontal: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 + 2,
};
size = {
  borderRadius: 8,
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: 0,
  backgroundColor: nativeDefault.colors.SPINE_DEFAULT,
};
let closure_10 = createStyles(obj);
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let closure_4;
      let items3;
      let items4;
      let revealedTier;
      let sharedValue;
      let stateFromStores;
      let tmp17;
      let tmp7;
      let tmp8;
      let useReducedMotion;
      let tmp2 = sharedValue;
      let obj = guild(sharedValue[10]);
      const cResult = obj.c(39);
      guild = guild.guild;
      let tmp4 = closure_10();
      const tmp6 = stateFromStores(sharedValue[11])();
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
      const tmpResult = guild(tmp2[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const tmpResult6 = guild(tmp2[13]);
      sharedValue = tmpResult6.useSharedValue(0);
      const tmp12 = revealedTier(react.useState(BoostedGuildTiers.NONE), 2);
      revealedTier = tmp12[0];
      const obj4 = react;
      react = tmp14;
      const tmpResult7 = guild(tmp2[13]);
      class G {
        constructor() {
          const obj = { width: "" + sharedValue.get() + "%" };
          return obj;
        }
      }
      G.__closure = { width: sharedValue };
      G.__workletHash = 8013193810386;
      G.__initData = __initData;
      const animatedStyle = tmpResult7.useAnimatedStyle(G);
      const tmpResult8 = guild(tmp2[13]);
      class A {
        constructor() {
          return sharedValue.get();
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
          const obj = ReanimatedRexport;
          obj.runOnJS(closure_4)(TIER_3);
        }
      };
      fn2.__closure = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(tmp2[13]).runOnJS,
        setRevealedTier: tmp12[1],
      };
      fn2.__workletHash = 6497629671124;
      fn2.__initData = __initData3;
      ({
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(tmp2[13]).runOnJS,
        setRevealedTier: tmp12[1],
      });
      const animatedReaction = tmpResult8.useAnimatedReaction(A, fn2);
      if (cResult[2] !== guild) {
        const tmpResult9 = guild(tmp2[14]);
        const guildBoostingProgressBarFillFactor = tmpResult9.getGuildBoostingProgressBarFillFactor(guild);
        cResult[2] = guild;
        cResult[3] = guildBoostingProgressBarFillFactor;
        tmp17 = guildBoostingProgressBarFillFactor;
      } else {
        tmp17 = cResult[3];
      }
      const fillFactor = tmp17.fillFactor;
      if (cResult[4] === fillFactor) {
        if (cResult[5] === stateFromStores) {
          let tmp19;
          let tmp20;
          if (cResult[6] === sharedValue) {
            tmp19 = cResult[7];
            tmp20 = cResult[8];
          }
          const effect = obj4.useEffect(tmp19, tmp20);
          if (cResult[9] === animatedStyle) {
            let tmp24;
            let tmp25;
            let tmp26;
            if (cResult[10] === tmp4.progressBarFill) {
              tmp24 = cResult[11];
            }
            let str = "#515359";
            const tmpResult10 = guild(tmp2[16]);
            if (!tmpResult10.isThemeDark(tmp6)) {
              str = tmp5(tmp2[8]).unsafe_rawColors.PRIMARY_160;
            }
            if (cResult[12] !== str) {
              const items1 = [str, "#AB77F2"];
              cResult[12] = str;
              cResult[13] = items1;
              tmp25 = items1;
            } else {
              tmp25 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [0.1577, 0.9905];
              cResult[14] = items2;
              tmp26 = items2;
            } else {
              tmp26 = cResult[14];
            }
            if (cResult[15] === tmp4.progressBarGradientFill) {
              let tmp27;
              if (cResult[16] === tmp25) {
                tmp27 = cResult[17];
              }
              if (cResult[18] === tmp27) {
                let tmp30;
                let tmp33;
                if (cResult[19] === tmp24) {
                  tmp30 = cResult[20];
                }
                if (cResult[21] !== tmp4.progressBarTrack) {
                  const obj3 = { style: tmp4.progressBarTrack };
                  const tmp36 = closure_8(fillFactor, obj3);
                  cResult[21] = tmp4.progressBarTrack;
                  cResult[22] = tmp36;
                  tmp33 = tmp36;
                } else {
                  tmp33 = cResult[22];
                }
                if (cResult[23] === tmp4.progressBarScrubber) {
                  if (cResult[24] === tmp30) {
                    let tmp37;
                    if (cResult[25] === tmp33) {
                      tmp37 = cResult[26];
                    }
                    if (cResult[27] === fillFactor) {
                      if (cResult[28] === guild) {
                        if (cResult[29] === revealedTier) {
                          let tmp41;
                          if (cResult[30] === stateFromStores) {
                            tmp41 = cResult[31];
                          }
                          if (cResult[32] === tmp4.progressBar) {
                            if (cResult[33] === tmp37) {
                              let tmp44;
                              if (cResult[34] === tmp41) {
                                tmp44 = cResult[35];
                              }
                              if (cResult[36] === tmp4.progressBarContainer) {
                                let tmp48;
                                if (cResult[37] === tmp44) {
                                  tmp48 = cResult[38];
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
                          const obj6 = { style: tmp23, children: items3 };
                          items3 = [tmp37, tmp41];
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
                      let tmp4;
                      const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: tmp4 };
                      tmp4 = guild.premiumTier <= tier;
                      const tmp3 = GuildBoostingMarketingProgressBarMarkerDefault;
                      if (tmp4) {
                        tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
                      }
                      return metroImportAll(tmp3, obj, tier);
                    });
                    cResult[27] = fillFactor;
                    cResult[28] = guild;
                    cResult[29] = revealedTier;
                    cResult[30] = stateFromStores;
                    cResult[31] = mapped;
                    tmp41 = mapped;
                  }
                }
                const obj7 = { style: tmp4.progressBarScrubber, children: items4 };
                items4 = [tmp30, tmp33];
                const tmp40 = closure_9(fillFactor, obj7);
                cResult[23] = tmp4.progressBarScrubber;
                cResult[24] = tmp30;
                cResult[25] = tmp33;
                cResult[26] = tmp40;
                tmp37 = tmp40;
              }
              const obj8 = { style: tmp24, children: tmp27 };
              const tmp32 = closure_8(stateFromStores(tmp2[13]).View, obj8);
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
            const tmp29 = closure_8(stateFromStores(tmp2[17]), obj9);
            cResult[15] = tmp4.progressBarGradientFill;
            cResult[16] = tmp25;
            cResult[17] = tmp29;
            tmp27 = tmp29;
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
          tmp2 = closure_1;
          if (tmp2) {
            tmp4 = closure_2;
            result1 = closure_2.set(result);
          } else {
            tmp3 = globalThis;
            _setTimeout = setTimeout;
            num = 750;
            closure_1 = setTimeout(() => {
              set = sharedValue.set;
              const obj = spring;
              guild = set(obj.withSpring(guild, closure_12));
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
    }
  : (guild) => {
      let closure_4;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj11;
      let obj7;
      let tmp16;
      let useReducedMotion;
      guild = guild.guild;
      let stateFromStores;
      let sharedValue;
      let revealedTier;
      react = undefined;
      let fillFactor;
      const tmp = closure_10();
      let tmp2 = stateFromStores;
      let tmp3 = sharedValue;
      let tmp4 = stateFromStores(sharedValue[11])();
      let obj = guild(sharedValue[12]);
      items = [AccessibilityStore];
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj2 = guild(sharedValue[13]);
      sharedValue = obj2.useSharedValue(0);
      const tmp7 = revealedTier(react.useState(BoostedGuildTiers.NONE), 2);
      revealedTier = tmp7[0];
      react = tmp9;
      const obj3 = guild(sharedValue[13]);
      class B {
        constructor() {
          const obj = { width: "" + sharedValue.get() + "%" };
          return obj;
        }
      }
      B.__closure = { width: sharedValue };
      B.__workletHash = 5141768603063;
      B.__initData = __initData4;
      const animatedStyle = obj3.useAnimatedStyle(B);
      const obj4 = guild(sharedValue[13]);
      class S {
        constructor() {
          return sharedValue.get();
        }
      }
      S.__closure = { width: sharedValue };
      S.__workletHash = 13317080849890;
      S.__initData = __initData5;
      class R {
        constructor(arg0) {
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
            const obj = ReanimatedRexport;
            obj.runOnJS(closure_4)(TIER_3);
          }
        }
      }
      R.__closure = {
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp7[1],
      };
      R.__workletHash = 11542211367537;
      R.__initData = __initData6;
      ({
        BoostedGuildTiers,
        TIER_REACHED_OFFSET: 5,
        revealedTier,
        runOnJS: guild(sharedValue[13]).runOnJS,
        setRevealedTier: tmp7[1],
      });
      const animatedReaction = obj4.useAnimatedReaction(S, R);
      const items1 = [guild];
      fillFactor = react.useMemo(() => {
        const obj = GuildBoostingUtils;
        return obj.getGuildBoostingProgressBarFillFactor(guild);
      }, items1).fillFactor;
      const items2 = [fillFactor, sharedValue, stateFromStores];
      const effect = react.useEffect(() => {
        let closure_1;
        const result = 100 * fillFactor;
        guild = result;
        let timeout = -1;
        const tmp2 = timeout;
        if (tmp2) {
          const result1 = sharedValue.set(result);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            set = sharedValue.set;
            const obj = spring;
            guild = set(obj.withSpring(guild, closure_12));
          }, 750);
        }
        return () => {
          window.clearTimeout(closure_1);
        };
      }, items2);
      const obj6 = { style: tmp.progressBarContainer, children: closure_9(fillFactor, obj7) };
      obj7 = { style: tmp.progressBar, children: items6 };
      const obj8 = { style: tmp.progressBarScrubber, children: items5 };
      const obj9 = { style: items3, children: closure_8(tmp16, obj11) };
      items3 = [tmp.progressBarFill, animatedStyle];
      View = stateFromStores(sharedValue[13]).View;
      let str = "#515359";
      tmp16 = stateFromStores(sharedValue[17]);
      const obj10 = guild(sharedValue[16]);
      if (!obj10.isThemeDark(tmp4)) {
        str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
      }
      obj11 = {
        useAngle: true,
        angle: 90,
        colors: items4,
        locations: [0.1577, 0.9905],
        style: tmp.progressBarGradientFill,
      };
      items4 = [str, "#AB77F2"];
      items5 = [closure_8(View, obj9)];
      const obj12 = { style: tmp.progressBarTrack };
      items5[1] = closure_8(fillFactor, obj12);
      items6 = [
        closure_9(fillFactor, obj8),
        items.map((tier) => {
          let tmp4;
          const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: tmp4 };
          tmp4 = guild.premiumTier <= tier;
          const tmp3 = GuildBoostingMarketingProgressBarMarkerDefault;
          if (tmp4) {
            tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
          }
          return metroImportAll(tmp3, obj, tier);
        }),
      ];
      return closure_8(fillFactor, obj6);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx",
);

export default tmp4;
export const PROGRESS_BAR_SPACING = 40;
