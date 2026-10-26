// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AvatarRoseExample from "../../../../../design/components/mana-assets/native/generated/AvatarRoseExample.native.tsx";
import AvatarLokyExample from "../../../../../design/components/mana-assets/native/generated/AvatarLokyExample.native.tsx";
import AvatarGraggleExample from "../../../../../design/components/mana-assets/native/generated/AvatarGraggleExample.native.tsx";
import AvatarMoatmonsturrExample from "../../../../../design/components/mana-assets/native/generated/AvatarMoatmonsturrExample.native.tsx";
import StarKeySpotIllustration from "../../../../../design/components/mana-assets/native/generated/StarKeySpotIllustration.native.tsx";
import StarCoinsSpotIllustration from "../../../../../design/components/mana-assets/native/generated/StarCoinsSpotIllustration.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(16562).CREATOR_REVENUE_SHARE_PERCENTAGE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  horizontalContainer: { flex: 1, flexDirection: "row" },
  benefitAvatarContainer: {
    padding: 20,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  },
  benefitCard: null,
  benefitAvatar: null,
  benefitAvatars: null,
  benefitCardTitle: null,
  earningMetricsShadowContainer: null,
  earningMetricsShadowContainerDarkMode: null,
  earningMetrics: null,
  earningMetricsDarkMode: null,
  earningMetricsLightMode: null,
  greenTextDarkMode: null,
  greenTextLightMode: null,
  starKeyIllo: null,
  revenueShare: null,
  revenueShareContainer: null,
  revenueShareIllo: null,
  revenueShareDescription: null,
};
let obj3 = {
  padding: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.benefitCard = {
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
obj2.benefitAvatar = { marginHorizontal: 8 };
obj2.benefitAvatars = { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" };
obj2.benefitCardTitle = { marginStart: 24, marginEnd: 35, marginVertical: 24 };
let obj4 = {
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
obj2.earningMetricsShadowContainer = {
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
};
obj2.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
let obj5 = {
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
};
obj2.earningMetrics = {
  marginHorizontal: 24,
  marginBottom: 24,
  padding: 16,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
let obj6 = {
  marginHorizontal: 24,
  marginBottom: 24,
  padding: 16,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.earningMetricsLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.greenTextDarkMode = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
const obj8 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
obj2.greenTextLightMode = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
obj2.starKeyIllo = { alignSelf: "flex-end", marginEnd: 16, marginBottom: 16 };
obj2.revenueShare = { fontSize: 50, lineHeight: 52 };
obj2.revenueShareContainer = { padding: 24 };
obj2.revenueShareIllo = { marginTop: 15, alignSelf: "flex-end" };
obj2.revenueShareDescription = { marginEnd: 120 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EarningPreview() {
      const cResult = c.c(28);
      const tmp4 = useThemeDefault();
      const tmp5 = closure_7();
      if (cResult[0] === tmp5.earningMetricsShadowContainerDarkMode) {
        if (cResult[1] === tmp4) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5.earningMetricsShadowContainer) {
          if (cResult[4] === tmp6) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp5.earningMetricsDarkMode) {
            if (cResult[7] === tmp5.earningMetricsLightMode) {
              if (cResult[8] === tmp4) {
                if (cResult[10] === tmp5.earningMetrics) {
                  if (cResult[11] === tmp5.horizontalContainer) {
                    if (cResult[12] === tmp9) {
                      let tmp12 = cResult[13];
                    }
                    const _Symbol = Symbol;
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
                      const intl = util.intl;
                      obj2.children = intl.string(util.t.TXPK7B);
                      const tmp16 = hasOwnProperty(Text_Text.Text, obj2);
                      cResult[14] = tmp16;
                      let tmp14 = tmp16;
                    } else {
                      tmp14 = cResult[14];
                    }
                    if (cResult[15] === tmp5) {
                      if (cResult[16] === tmp4) {
                        const _Symbol2 = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = util.intl;
                          const stringResult = intl2.string(util.t.LdjJG5);
                          cResult[18] = stringResult;
                          let tmp20 = stringResult;
                        } else {
                          tmp20 = cResult[18];
                        }
                        if (cResult[19] !== cResult[17]) {
                          const obj3 = { children: null };
                          const items = [tmp14];
                          const obj4 = { style: tmp17, variant: "heading-lg/extrabold", children: tmp20 };
                          items[1] = hasOwnProperty(Text_Text.Text, obj4);
                          obj3.children = items;
                          const tmp26 = timestampProducer(View, obj3);
                          cResult[19] = tmp17;
                          cResult[20] = tmp26;
                          let tmp22 = tmp26;
                        } else {
                          tmp22 = cResult[20];
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp29 = hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 });
                          cResult[21] = tmp29;
                          let tmp27 = tmp29;
                        } else {
                          tmp27 = cResult[21];
                        }
                        if (cResult[22] === tmp12) {
                          if (cResult[23] === tmp22) {
                            let tmp30 = cResult[24];
                          }
                          if (cResult[25] === tmp8) {
                            if (cResult[26] === tmp30) {
                              let tmp34 = cResult[27];
                            }
                            return tmp34;
                          }
                          const obj5 = { style: tmp8, children: tmp30 };
                          const tmp37 = hasOwnProperty(View, obj5);
                          cResult[25] = tmp8;
                          cResult[26] = tmp30;
                          cResult[27] = tmp37;
                          tmp34 = tmp37;
                        }
                        const obj6 = { style: tmp12, children: null };
                        const items1 = [tmp22, tmp27];
                        obj6.children = items1;
                        const tmp33 = timestampProducer(View, obj6);
                        cResult[22] = tmp12;
                        cResult[23] = tmp22;
                        cResult[24] = tmp33;
                        tmp30 = tmp33;
                      }
                    }
                    const tmp18 = shared.isThemeDark(tmp4) ? tmp5.greenTextDarkMode : tmp5.greenTextLightMode;
                    cResult[15] = tmp5;
                    cResult[16] = tmp4;
                    cResult[17] = tmp18;
                    const tmpResult = shared;
                  }
                }
                const items2 = [, ,];
                ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp5);
                items2[2] = cResult[9];
                cResult[10] = tmp5.earningMetrics;
                cResult[11] = tmp5.horizontalContainer;
                cResult[12] = cResult[9];
                cResult[13] = items2;
                tmp12 = items2;
              }
            }
          }
          const tmp10 = shared.isThemeDark(tmp4) ? tmp5.earningMetricsDarkMode : tmp5.earningMetricsLightMode;
          cResult[6] = tmp5.earningMetricsDarkMode;
          cResult[7] = tmp5.earningMetricsLightMode;
          cResult[8] = tmp4;
          cResult[9] = tmp10;
          const tmpResult3 = shared;
        }
        const items3 = [tmp5.earningMetricsShadowContainer, tmp6];
        cResult[3] = tmp5.earningMetricsShadowContainer;
        cResult[4] = tmp6;
        cResult[5] = items3;
        tmp8 = items3;
      }
      const tmp7 = shared.isThemeDark(tmp4) && tmp5.earningMetricsShadowContainerDarkMode;
      cResult[0] = tmp5.earningMetricsShadowContainerDarkMode;
      cResult[1] = tmp4;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const tmpResult4 = shared;
    }
  : function EarningPreview() {
      const tmp2 = useThemeDefault();
      const tmp3 = closure_7();
      const items = [tmp3.earningMetricsShadowContainer];
      const obj2 = { style: items, children: null };
      items[1] = shared.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
      const items1 = [, ,];
      ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp3);
      const tmp7 = shared.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
      const obj3 = { style: null, children: null };
      items1[2] = shared.isThemeDark(tmp2) ? tmp3.earningMetricsDarkMode : tmp3.earningMetricsLightMode;
      obj3.style = items1;
      const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.TXPK7B);
      const items2 = [hasOwnProperty(Text_Text.Text, obj4)];
      const tmp6Result = shared;
      const obj5 = { children: null };
      const obj6 = {
        style: shared.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode,
        variant: "heading-lg/extrabold",
        children: null,
      };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.LdjJG5);
      items2[1] = hasOwnProperty(Text_Text.Text, obj6);
      obj5.children = items2;
      const items3 = [
        timestampProducer(View, obj5),
        hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 }),
      ];
      obj3.children = items3;
      obj2.children = timestampProducer(View, obj3);
      return hasOwnProperty(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConsistentEarningBenefit() {
      const cResult = c.c(16);
      const tmp4 = closure_7();
      ({ benefitCard, benefitCardTitle } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["9CdmS8"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.benefitCardTitle) {
        const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
        const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp4.benefitCardTitle;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = hasOwnProperty(closure_8, {});
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp4.benefitAvatars) {
        if (cResult[5] === tmp4.horizontalContainer) {
          let tmp14 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { Avatar: AvatarLokyExample.AvatarLokyExample };
          const tmp20 = hasOwnProperty(closure_12, obj3);
          const obj4 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
          const tmp21 = hasOwnProperty(closure_12, obj4);
          const obj5 = { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample };
          const tmp22 = hasOwnProperty(closure_12, obj5);
          cResult[7] = tmp20;
          cResult[8] = tmp21;
          cResult[9] = tmp22;
          let tmp17 = tmp22;
          let tmp16 = tmp21;
          let tmp15 = tmp20;
        } else {
          tmp15 = cResult[7];
          tmp16 = cResult[8];
          tmp17 = cResult[9];
        }
        if (cResult[10] !== tmp14) {
          const obj6 = { style: tmp14, children: null };
          const items = [tmp15, tmp16, tmp17];
          obj6.children = items;
          const tmp26 = timestampProducer(View, obj6);
          cResult[10] = tmp14;
          cResult[11] = tmp26;
          let tmp23 = tmp26;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] === tmp4.benefitCard) {
          if (cResult[13] === tmp7) {
            if (cResult[14] === tmp23) {
              let tmp27 = cResult[15];
            }
            return tmp27;
          }
        }
        const obj7 = { style: benefitCard, children: null };
        const items1 = [tmp7, tmp10, tmp23];
        obj7.children = items1;
        const tmp30 = timestampProducer(View, obj7);
        cResult[12] = tmp4.benefitCard;
        cResult[13] = tmp7;
        cResult[14] = tmp23;
        cResult[15] = tmp30;
        tmp27 = tmp30;
      }
      const items2 = [,];
      ({ horizontalContainer: arr[0], benefitAvatars: arr[1] } = tmp4);
      cResult[4] = tmp4.benefitAvatars;
      cResult[5] = tmp4.horizontalContainer;
      cResult[6] = items2;
      tmp14 = items2;
    }
  : function ConsistentEarningBenefit() {
      const tmp = closure_7();
      const obj = { style: tmp.benefitCard, children: null };
      const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t["9CdmS8"]);
      const items = [hasOwnProperty(Text_Text.Text, obj2), hasOwnProperty(closure_8, {})];
      const obj3 = { style: null, children: null };
      const items1 = [,];
      ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp);
      obj3.style = items1;
      const items2 = [hasOwnProperty(closure_12, { Avatar: AvatarLokyExample.AvatarLokyExample }), ,];
      const obj4 = { Avatar: AvatarLokyExample.AvatarLokyExample };
      items2[1] = hasOwnProperty(closure_12, { Avatar: AvatarGraggleExample.AvatarGraggleExample });
      const obj5 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
      items2[2] = hasOwnProperty(closure_12, { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample });
      obj3.children = items2;
      items[2] = timestampProducer(View, obj3);
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FollowerAwardBenefit() {
      const cResult = c.c(10);
      const tmp4 = closure_7();
      ({ benefitCard, benefitCardTitle } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.qsKRUQ);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.benefitCardTitle) {
        const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
        const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp4.benefitCardTitle;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 });
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp4.starKeyIllo) {
        const obj3 = { style: tmp4.starKeyIllo, children: tmp10 };
        const tmp16 = hasOwnProperty(View, obj3);
        cResult[4] = tmp4.starKeyIllo;
        cResult[5] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp4.benefitCard) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp13) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
      }
      const obj4 = { style: benefitCard, children: null };
      const items = [tmp7, tmp13];
      obj4.children = items;
      const tmp18 = timestampProducer(View, obj4);
      cResult[6] = tmp4.benefitCard;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : function FollowerAwardBenefit() {
      const tmp = closure_7();
      const obj = { style: tmp.benefitCard, children: null };
      const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.qsKRUQ);
      const items = [
        hasOwnProperty(Text_Text.Text, obj2),
        hasOwnProperty(View, {
          style: tmp.starKeyIllo,
          children: hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 }),
        }),
      ];
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RevenueShareBenefit() {
      const cResult = c.c(20);
      const tmp4 = useThemeDefault();
      const tmp5 = closure_7();
      if (cResult[0] === tmp5.benefitCard) {
        if (cResult[1] === tmp5.revenueShareContainer) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          if (cResult[4] === tmp4) {
            if (cResult[6] === tmp5.revenueShare) {
              if (cResult[7] === tmp8) {
                let tmp11 = cResult[8];
              }
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.AewsXD);
                cResult[9] = stringResult;
                let tmp16 = stringResult;
              } else {
                tmp16 = cResult[9];
              }
              if (cResult[10] !== tmp5.revenueShareDescription) {
                const obj2 = {
                  style: tmp5.revenueShareDescription,
                  variant: "heading-md/medium",
                  color: "text-default",
                  children: tmp16,
                };
                const tmp20 = hasOwnProperty(Text_Text.Text, obj2);
                cResult[10] = tmp5.revenueShareDescription;
                cResult[11] = tmp20;
                let tmp18 = tmp20;
              } else {
                tmp18 = cResult[11];
              }
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp23 = hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 });
                cResult[12] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[12];
              }
              if (cResult[13] !== tmp5.revenueShareIllo) {
                const obj3 = { style: tmp5.revenueShareIllo, children: tmp21 };
                const tmp27 = hasOwnProperty(View, obj3);
                cResult[13] = tmp5.revenueShareIllo;
                cResult[14] = tmp27;
                let tmp24 = tmp27;
              } else {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp6) {
                if (cResult[16] === tmp11) {
                  if (cResult[17] === tmp18) {
                    if (cResult[18] === tmp24) {
                      let tmp28 = cResult[19];
                    }
                    return tmp28;
                  }
                }
              }
              const obj4 = { style: tmp6, children: null };
              const items = [tmp11, tmp18, tmp24];
              obj4.children = items;
              const tmp31 = timestampProducer(View, obj4);
              cResult[15] = tmp6;
              cResult[16] = tmp11;
              cResult[17] = tmp18;
              cResult[18] = tmp24;
              cResult[19] = tmp31;
              tmp28 = tmp31;
            }
            const obj5 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
            const items1 = [tmp7, cResult[5]];
            obj5.style = items1;
            obj5.children = `${closure_4}%`;
            const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[6] = tmp5.revenueShare;
            cResult[7] = cResult[5];
            cResult[8] = tmp14;
            tmp11 = tmp14;
          }
        }
        const tmp9 = shared.isThemeDark(tmp4) ? tmp5.greenTextDarkMode : tmp5.greenTextLightMode;
        cResult[3] = tmp5;
        cResult[4] = tmp4;
        cResult[5] = tmp9;
        const tmpResult = shared;
      }
      const items2 = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp5);
      cResult[0] = tmp5.benefitCard;
      cResult[1] = tmp5.revenueShareContainer;
      cResult[2] = items2;
      tmp6 = items2;
    }
  : function RevenueShareBenefit() {
      const tmp3 = closure_7();
      const obj = { style: null, children: null };
      const items = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp3);
      obj.style = items;
      const items1 = [tmp3.revenueShare];
      const tmp2 = useThemeDefault();
      const obj3 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
      items1[1] = shared.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode;
      obj3.style = items1;
      obj3.children = `${closure_4}%`;
      const items2 = [hasOwnProperty(Text_Text.Text, obj3), ,];
      const obj4 = {
        style: tmp3.revenueShareDescription,
        variant: "heading-md/medium",
        color: "text-default",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.AewsXD);
      items2[1] = hasOwnProperty(Text_Text.Text, obj4);
      items2[2] = hasOwnProperty(View, {
        style: tmp3.revenueShareIllo,
        children: hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 }),
      });
      obj.children = items2;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BenefitAvatar(Avatar) {
      const cResult = c.c(8);
      Avatar = Avatar.Avatar;
      const tmp2 = closure_7();
      if (cResult[0] !== Avatar) {
        const tmp5 = hasOwnProperty(Avatar, { width: 40 });
        cResult[0] = Avatar;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.benefitAvatar) {
        if (cResult[3] === tmp3) {
          let tmp6 = cResult[4];
        }
        if (cResult[5] === tmp2.benefitAvatarContainer) {
          if (cResult[6] === tmp6) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj2 = { style: tmp2.benefitAvatarContainer, children: tmp6 };
        const tmp11 = hasOwnProperty(View, obj2);
        cResult[5] = tmp2.benefitAvatarContainer;
        cResult[6] = tmp6;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
      const tmp7 = hasOwnProperty(View, { style: tmp2.benefitAvatar, children: tmp3 });
      cResult[2] = tmp2.benefitAvatar;
      cResult[3] = tmp3;
      cResult[4] = tmp7;
      tmp6 = tmp7;
      const obj3 = { style: tmp2.benefitAvatar, children: tmp3 };
    }
  : function BenefitAvatar(Avatar) {
      const tmp = closure_7();
      const obj = {
        style: tmp.benefitAvatarContainer,
        children: hasOwnProperty(View, {
          style: tmp.benefitAvatar,
          children: hasOwnProperty(Avatar.Avatar, { width: 40 }),
        }),
      };
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
const obj9 = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CreatorBenefitsSection() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
        obj2.children = items;
        const tmp9 = timestampProducer(View, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function CreatorBenefitsSection() {
      const obj = { children: null };
      const items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
      obj.children = items;
      return timestampProducer(View, obj);
    };
