// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 120;
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
let createStyles = createStyles_mod;
let obj = {
  wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 },
  innerWraper: size,
  guildInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 },
  guildIcon: size1,
  guildIconText: obj2,
  guildName: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" },
  buttonContainer: { height: 40 },
  button: { minWidth: 100 },
  border: { padding: 2, borderRadius: 80 },
};
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  height: 76,
  width: 343,
  borderRadius: 76,
  paddingLeft: 13,
  paddingVertical: 13,
  paddingRight: 27,
};
createStyles = createStyles.createStyles;
size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginRight: 10,
  height: 50,
  width: 50,
  borderRadius: 25,
};
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_10 = createStyles(obj);
const __initData = {
  code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}",
};
const __initData2 = {
  code: "function GuildBoostingMarketingPersistentCtaTsx2(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}",
};
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumGroupRole) => {
      let fractionalPremiumState;
      let guild;
      let isVisible;
      let items3;
      let items4;
      let previousGuildSubscriptionSlot;
      let tmp5;
      let tmp6;
      let useReducedMotion;
      let obj = isVisible(576);
      const cResult = obj.c(38);
      const tmp4 = closure_10();
      ({ fractionalPremiumState, guild, previousGuildSubscriptionSlot, isVisible } = premiumGroupRole);
      premiumGroupRole = premiumGroupRole.premiumGroupRole;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function h() {
          return useReducedMotion.useReducedMotion;
        };
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp6 = fn;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = isVisible(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const fn2 = function y() {
        let items;
        let num3;
        let withSpring2;
        let num = -120;
        let num2 = -120;
        if (!stateFromStores) {
          const withSpring = spring.withSpring;
          spring;
          if (!isVisible) {
            num = c8;
          }
          num2 = withSpring(num, SPRING_CONFIG);
        }
        const obj = { transform: items, opacity: withSpring2(num3, SPRING_CONFIG) };
        items = [{ translateY: num2 }];
        num3 = 0;
        withSpring2 = spring.withSpring;
        spring;
        if (isVisible) {
          num3 = 1;
        }
        return obj;
      };
      const tmpResult2 = isVisible(4618);
      fn2.__closure = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5604).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
      fn2.__workletHash = 14370895185277;
      fn2.__initData = __initData;
      ({
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5604).withSpring,
        isVisible,
        SPRING_CONFIG,
      });
      const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
      if (cResult[2] === animatedStyle) {
        let tmp10;
        let tmp13;
        let tmp12;
        let tmp11;
        if (cResult[3] === tmp4.wrapper) {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0.5, y: 0.5 };
          const items1 = [
            stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_BLUE,
            stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PURPLE,
          ];
          const items2 = [0, 1];
          let num3 = 5;
          cResult[5] = point;
          cResult[6] = items1;
          cResult[7] = items2;
          tmp13 = items2;
          tmp12 = items1;
          tmp11 = point;
        } else {
          tmp11 = cResult[5];
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        if (cResult[8] === guild) {
          if (cResult[9] === tmp4.guildIcon) {
            let tmp15;
            if (cResult[10] === tmp4.guildIconText) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === guild.name) {
              let tmp20;
              if (cResult[13] === tmp4.guildName) {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp4.guildInfoContainer) {
                if (cResult[16] === tmp15) {
                  let tmp23;
                  if (cResult[17] === tmp20) {
                    tmp23 = cResult[18];
                  }
                  if (cResult[19] === fractionalPremiumState) {
                    if (cResult[20] === guild) {
                      if (cResult[21] === premiumGroupRole) {
                        if (cResult[22] === previousGuildSubscriptionSlot) {
                          let tmp27;
                          if (cResult[23] === tmp4.button) {
                            tmp27 = cResult[24];
                          }
                          if (cResult[25] === tmp4.buttonContainer) {
                            let tmp32;
                            if (cResult[26] === tmp27) {
                              tmp32 = cResult[27];
                            }
                            if (cResult[28] === tmp4.innerWraper) {
                              if (cResult[29] === tmp32) {
                                let tmp36;
                                if (cResult[30] === tmp23) {
                                  tmp36 = cResult[31];
                                }
                                if (cResult[32] === tmp4.border) {
                                  let tmp40;
                                  if (cResult[33] === tmp36) {
                                    tmp40 = cResult[34];
                                  }
                                  if (cResult[35] === tmp40) {
                                    let tmp44;
                                    if (cResult[36] === tmp10) {
                                      tmp44 = cResult[37];
                                    }
                                    return tmp44;
                                  }
                                  const obj3 = { style: tmp10, children: tmp40 };
                                  const tmp47 = closure_6(stateFromStores(4618).View, obj3);
                                  cResult[35] = tmp40;
                                  cResult[36] = tmp10;
                                  cResult[37] = tmp47;
                                  tmp44 = tmp47;
                                }
                                const obj4 = {
                                  angle: 45,
                                  angleCenter: tmp11,
                                  colors: tmp12,
                                  locations: tmp13,
                                  style: tmp4.border,
                                  useAngle: true,
                                  children: tmp36,
                                };
                                const tmp43 = closure_6(stateFromStores(5612), obj4);
                                cResult[32] = tmp4.border;
                                cResult[33] = tmp36;
                                cResult[34] = tmp43;
                                tmp40 = tmp43;
                              }
                            }
                            const obj5 = { style: tmp4.innerWraper, children: items3 };
                            items3 = [tmp23, tmp32];
                            const tmp39 = closure_7(View, obj5);
                            cResult[28] = tmp4.innerWraper;
                            cResult[29] = tmp32;
                            cResult[30] = tmp23;
                            cResult[31] = tmp39;
                            tmp36 = tmp39;
                          }
                          const obj7 = { style: tmp4.buttonContainer, children: tmp27 };
                          const tmp35 = closure_6(View, obj7);
                          cResult[25] = tmp4.buttonContainer;
                          cResult[26] = tmp27;
                          cResult[27] = tmp35;
                          tmp32 = tmp35;
                        }
                      }
                    }
                  }
                  const obj8 = {
                    guild,
                    previousGuildSubscriptionSlot,
                    useShortenedCTA: true,
                    styles: tmp4.button,
                    analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                    fractionalPremiumState,
                    premiumGroupRole,
                  };
                  const tmp31 = closure_6(stateFromStores(6917), obj8);
                  cResult[19] = fractionalPremiumState;
                  cResult[20] = guild;
                  cResult[21] = premiumGroupRole;
                  cResult[22] = previousGuildSubscriptionSlot;
                  cResult[23] = tmp4.button;
                  cResult[24] = tmp31;
                  tmp27 = tmp31;
                }
              }
              const obj9 = { style: tmp4.guildInfoContainer, children: items4 };
              items4 = [tmp15, tmp20];
              const tmp26 = closure_7(View, obj9);
              cResult[15] = tmp4.guildInfoContainer;
              cResult[16] = tmp15;
              cResult[17] = tmp20;
              cResult[18] = tmp26;
              tmp23 = tmp26;
            }
            const obj10 = { style: tmp4.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
            const tmp22 = closure_6(isVisible(4892).Text, obj10);
            cResult[12] = guild.name;
            cResult[13] = tmp4.guildName;
            cResult[14] = tmp22;
            tmp20 = tmp22;
          }
        }
        ({ guildIcon: obj6.style, guildIconText: obj6.textStyle } = tmp4);
        const obj11 = { style: null, textStyle: null, guild, size: isVisible(5978).GuildIconSizes.LARGE };
        const tmp18 = stateFromStores(5978);
        const tmp19 = closure_6(tmp18, obj11);
        cResult[8] = guild;
        cResult[9] = tmp4.guildIcon;
        cResult[10] = tmp4.guildIconText;
        cResult[11] = tmp19;
        tmp15 = tmp19;
      }
      const items5 = [tmp4.wrapper, animatedStyle];
      cResult[2] = animatedStyle;
      cResult[3] = tmp4.wrapper;
      cResult[4] = items5;
      tmp10 = items5;
    }
  : (arg0) => {
      let fractionalPremiumState;
      let guild;
      let isVisible;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj11;
      let obj5;
      let obj6;
      let premiumGroupRole;
      let previousGuildSubscriptionSlot;
      let tmp4;
      let useReducedMotion;
      const tmp = closure_10();
      ({ guild, isVisible } = arg0);
      ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
      let obj = isVisible(573);
      let items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const fn = function _() {
        let items;
        let num3;
        let withSpring2;
        let num = -120;
        let num2 = -120;
        if (!stateFromStores) {
          const withSpring = spring.withSpring;
          spring;
          if (!isVisible) {
            num = c8;
          }
          num2 = withSpring(num, SPRING_CONFIG);
        }
        const obj = { transform: items, opacity: withSpring2(num3, SPRING_CONFIG) };
        items = [{ translateY: num2 }];
        num3 = 0;
        withSpring2 = spring.withSpring;
        spring;
        if (isVisible) {
          num3 = 1;
        }
        return obj;
      };
      const obj2 = isVisible(4618);
      fn.__closure = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5604).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
      fn.__workletHash = 10455540747486;
      fn.__initData = __initData2;
      ({
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5604).withSpring,
        isVisible,
        SPRING_CONFIG,
      });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = { style: items1, children: closure_6(tmp4, obj5) };
      items1 = [tmp.wrapper, animatedStyle];
      View = stateFromStores(4618).View;
      obj5 = {
        angle: 45,
        angleCenter: { x: 0.5, y: 0.5 },
        colors: items2,
        locations: [0, 1],
        style: tmp.border,
        useAngle: true,
        children: closure_7(View, obj6),
      };
      items2 = [,];
      tmp4 = stateFromStores(5612);
      items2[0] = stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_BLUE;
      items2[1] = stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PURPLE;
      obj6 = { style: tmp.innerWraper, children: items4 };
      const obj7 = { style: tmp.guildInfoContainer, children: items3 };
      const obj8 = {
        style: tmp.guildIcon,
        textStyle: tmp.guildIconText,
        guild,
        size: isVisible(5978).GuildIconSizes.LARGE,
      };
      const tmp5 = stateFromStores(5978);
      items3 = [closure_6(tmp5, obj8)];
      const obj9 = { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
      items3[1] = closure_6(isVisible(4892).Text, obj9);
      items4 = [closure_7(View, obj7)];
      const obj10 = { style: tmp.buttonContainer, children: closure_6(stateFromStores(6917), obj11) };
      obj11 = {
        guild,
        previousGuildSubscriptionSlot,
        useShortenedCTA: true,
        styles: tmp.button,
        analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
        fractionalPremiumState,
        premiumGroupRole,
      };
      items4[1] = closure_6(View, obj10);
      return closure_6(View, obj4);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx",
);

export default tmp5;
export const VISIBILITY_OFFSET = 120;
