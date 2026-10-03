// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsSections = fn(1085).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 120;
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
const createStyles = fn(4890);
let obj2 = {
  wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 },
  innerWraper: null,
  guildInfoContainer: null,
  guildIcon: null,
  guildIconText: null,
  guildName: null,
  buttonContainer: null,
  button: null,
  border: null,
};
let size = {
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
obj2.innerWraper = size;
obj2.guildInfoContainer = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 };
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginRight: 10,
  height: 50,
  width: 50,
  borderRadius: 25,
};
obj2.guildIcon = size1;
obj2.guildIconText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildName = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
obj2.buttonContainer = { height: 40 };
obj2.button = { minWidth: 100 };
obj2.border = { padding: 2, borderRadius: 80 };
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}",
};
const __initData2 = {
  code: "function GuildBoostingMarketingPersistentCtaTsx2(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}",
};
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumGroupRole) => {
      const cResult = isVisible(576).c(38);
      const tmp4 = closure_10();
      ({ fractionalPremiumState, guild, previousGuildSubscriptionSlot, isVisible } = premiumGroupRole);
      premiumGroupRole = premiumGroupRole.premiumGroupRole;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function h() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = isVisible(576);
      const stateFromStores = isVisible(573).useStateFromStores(tmp5, tmp6);
      const tmpResult = isVisible(573);
      const fn2 = function y() {
        let num = -120;
        let num2 = -120;
        if (!stateFromStores) {
          if (!isVisible) {
            num = c8;
          }
          num2 = spring.withSpring(num, closure_9);
        }
        const obj2 = { transform: null, opacity: null };
        const items = [{ translateY: num2 }];
        obj2.transform = items;
        let num3 = 0;
        if (isVisible) {
          num3 = 1;
        }
        obj2.opacity = spring.withSpring(num3, closure_9);
        return obj2;
      };
      const tmpResult2 = isVisible(4612);
      fn2.__closure = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5597).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
      fn2.__workletHash = 14370895185277;
      fn2.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === tmp4.wrapper) {
          let tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0.5, y: 0.5 };
          const items1 = [
            stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_BLUE,
            stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PURPLE,
          ];
          const items2 = [0, 1];
          cResult[5] = point;
          cResult[6] = items1;
          cResult[7] = items2;
          let tmp13 = items2;
          let tmp12 = items1;
          let tmp11 = point;
        } else {
          tmp11 = cResult[5];
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        if (cResult[8] === guild) {
          if (cResult[9] === tmp4.guildIcon) {
            if (cResult[10] === tmp4.guildIconText) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === guild.name) {
              if (cResult[13] === tmp4.guildName) {
                let tmp20 = cResult[14];
              }
              if (cResult[15] === tmp4.guildInfoContainer) {
                if (cResult[16] === tmp15) {
                  if (cResult[17] === tmp20) {
                    let tmp23 = cResult[18];
                  }
                  if (cResult[19] === fractionalPremiumState) {
                    if (cResult[20] === guild) {
                      if (cResult[21] === premiumGroupRole) {
                        if (cResult[22] === previousGuildSubscriptionSlot) {
                          if (cResult[23] === tmp4.button) {
                            let tmp27 = cResult[24];
                          }
                          if (cResult[25] === tmp4.buttonContainer) {
                            if (cResult[26] === tmp27) {
                              let tmp32 = cResult[27];
                            }
                            if (cResult[28] === tmp4.innerWraper) {
                              if (cResult[29] === tmp32) {
                                if (cResult[30] === tmp23) {
                                  let tmp36 = cResult[31];
                                }
                                if (cResult[32] === tmp4.border) {
                                  if (cResult[33] === tmp36) {
                                    let tmp40 = cResult[34];
                                  }
                                  if (cResult[35] === tmp40) {
                                    if (cResult[36] === tmp10) {
                                      let tmp44 = cResult[37];
                                    }
                                    return tmp44;
                                  }
                                  const obj3 = { style: tmp10, children: tmp40 };
                                  const tmp47 = closure_6(stateFromStores(4612).View, obj3);
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
                                const tmp43 = closure_6(stateFromStores(5605), obj4);
                                cResult[32] = tmp4.border;
                                cResult[33] = tmp36;
                                cResult[34] = tmp43;
                                tmp40 = tmp43;
                              }
                            }
                            const obj5 = { style: tmp4.innerWraper, children: null };
                            const items3 = [tmp23, tmp32];
                            obj5.children = items3;
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
                  const tmp31 = closure_6(stateFromStores(6907), obj8);
                  cResult[19] = fractionalPremiumState;
                  cResult[20] = guild;
                  cResult[21] = premiumGroupRole;
                  cResult[22] = previousGuildSubscriptionSlot;
                  cResult[23] = tmp4.button;
                  cResult[24] = tmp31;
                  tmp27 = tmp31;
                }
              }
              const obj9 = { style: tmp4.guildInfoContainer, children: null };
              const items4 = [tmp15, tmp20];
              obj9.children = items4;
              const tmp26 = closure_7(View, obj9);
              cResult[15] = tmp4.guildInfoContainer;
              cResult[16] = tmp15;
              cResult[17] = tmp20;
              cResult[18] = tmp26;
              tmp23 = tmp26;
            }
            const obj10 = { style: tmp4.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
            const tmp22 = closure_6(isVisible(4886).Text, obj10);
            cResult[12] = guild.name;
            cResult[13] = tmp4.guildName;
            cResult[14] = tmp22;
            tmp20 = tmp22;
          }
        }
        const obj11 = { style: null, textStyle: null, guild: null, size: null };
        ({ guildIcon: obj6.style, guildIconText: obj6.textStyle } = tmp4);
        obj11.guild = guild;
        obj11.size = isVisible(5971).GuildIconSizes.LARGE;
        const tmp19 = closure_6(stateFromStores(5971), obj11);
        cResult[8] = guild;
        cResult[9] = tmp4.guildIcon;
        cResult[10] = tmp4.guildIconText;
        cResult[11] = tmp19;
        tmp15 = tmp19;
        const tmp18 = stateFromStores(5971);
      }
      const items5 = [tmp4.wrapper, animatedStyle];
      cResult[2] = animatedStyle;
      cResult[3] = tmp4.wrapper;
      cResult[4] = items5;
      tmp10 = items5;
      let obj2 = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5597).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
    }
  : (arg0) => {
      const tmp = closure_10();
      ({ guild, isVisible } = arg0);
      ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
      let items = [AccessibilityStore];
      const stateFromStores = isVisible(573).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let obj = isVisible(573);
      const fn = function _() {
        let num = -120;
        let num2 = -120;
        if (!stateFromStores) {
          if (!isVisible) {
            num = c8;
          }
          num2 = spring.withSpring(num, closure_9);
        }
        const obj2 = { transform: null, opacity: null };
        const items = [{ translateY: num2 }];
        obj2.transform = items;
        let num3 = 0;
        if (isVisible) {
          num3 = 1;
        }
        obj2.opacity = spring.withSpring(num3, closure_9);
        return obj2;
      };
      let obj2 = isVisible(4612);
      fn.__closure = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5597).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
      fn.__workletHash = 10455540747486;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = { style: null, children: null };
      const items1 = [tmp.wrapper, animatedStyle];
      obj4.style = items1;
      const obj5 = {
        angle: 45,
        angleCenter: { x: 0.5, y: 0.5 },
        colors: null,
        locations: null,
        style: null,
        useAngle: true,
        children: null,
      };
      const obj3 = {
        useReducedMotion: stateFromStores,
        VISIBILITY_OFFSET,
        withSpring: isVisible(5597).withSpring,
        isVisible,
        SPRING_CONFIG,
      };
      const items2 = [
        stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_BLUE,
        stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PURPLE,
      ];
      obj5.colors = items2;
      obj5.locations = [0, 1];
      obj5.style = tmp.border;
      const obj6 = { style: tmp.innerWraper, children: null };
      const obj7 = { style: tmp.guildInfoContainer, children: null };
      const obj8 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: null };
      const tmp4 = stateFromStores(5605);
      obj8.size = isVisible(5971).GuildIconSizes.LARGE;
      const items3 = [
        closure_6(stateFromStores(5971), obj8),
        closure_6(isVisible(4886).Text, {
          style: tmp.guildName,
          variant: "text-md/bold",
          lineClamp: 1,
          children: guild.name,
        }),
      ];
      obj7.children = items3;
      const items4 = [closure_7(View, obj7)];
      const obj10 = {
        style: tmp.buttonContainer,
        children: closure_6(stateFromStores(6907), {
          guild,
          previousGuildSubscriptionSlot,
          useShortenedCTA: true,
          styles: tmp.button,
          analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
          fractionalPremiumState,
          premiumGroupRole,
        }),
      };
      items4[1] = closure_6(View, obj10);
      obj6.children = items4;
      obj5.children = closure_7(View, obj6);
      obj4.children = closure_6(tmp4, obj5);
      return closure_6(stateFromStores(4612).View, obj4);
    };
export const VISIBILITY_OFFSET = 120;
