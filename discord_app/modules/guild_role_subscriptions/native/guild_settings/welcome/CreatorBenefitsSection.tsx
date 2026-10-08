// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef18229 from "../../../../../../_runtime/metro/18229__.js";
import _modDef18230 from "../../../../../../_runtime/metro/18230__.js";
import _modDef18231 from "../../../../../../_runtime/metro/18231__.js";
import _modDef18232 from "../../../../../../_runtime/metro/18232__.js";
import _modDef18233 from "../../../../../../_runtime/metro/18233__.js";
import _modDef18234 from "../../../../../../_runtime/metro/18234__.js";
import _modDef18235 from "../../../../../../_runtime/metro/18235__.js";
import _modDef18236 from "../../../../../../_runtime/metro/18236__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(15300).CREATOR_REVENUE_SHARE_PERCENTAGE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
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
  earningMetricsAvatar: null,
  socialIllo: null,
  lanyardIllo: null,
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
obj2.benefitAvatar = { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" };
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
obj2.earningMetricsAvatar = { width: 54, height: 54, borderRadius: 27, overflow: "hidden" };
obj2.socialIllo = { marginTop: 50, marginStart: 16 };
obj2.lanyardIllo = { position: "absolute", bottom: 25, end: 0 };
obj2.revenueShare = { fontSize: 50, lineHeight: 52 };
obj2.revenueShareContainer = { padding: 24 };
obj2.revenueShareIllo = { marginTop: 15, alignSelf: "flex-end" };
obj2.revenueShareDescription = { marginEnd: 120 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EarningPreview() {
      const cResult = c.c(30);
      const tmp5 = useThemeDefault();
      const tmp6 = closure_7();
      if (cResult[0] === tmp6.earningMetricsShadowContainerDarkMode) {
        if (cResult[1] === tmp5) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp6.earningMetricsShadowContainer) {
          if (cResult[4] === tmp7) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === tmp6.earningMetricsDarkMode) {
            if (cResult[7] === tmp6.earningMetricsLightMode) {
              if (cResult[8] === tmp5) {
                if (cResult[10] === tmp6.earningMetrics) {
                  if (cResult[11] === tmp6.horizontalContainer) {
                    if (cResult[12] === tmp10) {
                      let tmp13 = cResult[13];
                    }
                    const _Symbol = Symbol;
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
                      const intl = util.intl;
                      obj2.children = intl.string(util.t.TXPK7B);
                      const tmp17 = hasOwnProperty(Text_Text.Text, obj2);
                      cResult[14] = tmp17;
                      let tmp15 = tmp17;
                    } else {
                      tmp15 = cResult[14];
                    }
                    if (cResult[15] === tmp6) {
                      if (cResult[16] === tmp5) {
                        const _Symbol2 = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = util.intl;
                          const stringResult = intl2.string(util.t.LdjJG5);
                          cResult[18] = stringResult;
                          let tmp21 = stringResult;
                        } else {
                          tmp21 = cResult[18];
                        }
                        if (cResult[19] !== cResult[17]) {
                          const obj3 = { children: null };
                          const items = [tmp15];
                          const obj4 = { style: tmp18, variant: "heading-lg/extrabold", children: tmp21 };
                          items[1] = hasOwnProperty(Text_Text.Text, obj4);
                          obj3.children = items;
                          const tmp27 = timestampProducer(View, obj3);
                          cResult[19] = tmp18;
                          cResult[20] = tmp27;
                          let tmp23 = tmp27;
                        } else {
                          tmp23 = cResult[20];
                        }
                        if (cResult[21] !== tmp6.earningMetricsAvatar) {
                          const obj5 = { style: tmp6.earningMetricsAvatar, source: _modDef18229 };
                          const tmp31 = hasOwnProperty(FastImageDefault, obj5);
                          cResult[21] = tmp6.earningMetricsAvatar;
                          cResult[22] = tmp31;
                          let tmp28 = tmp31;
                          const tmp4Result = FastImageDefault;
                        } else {
                          tmp28 = cResult[22];
                        }
                        if (cResult[23] === tmp13) {
                          if (cResult[24] === tmp23) {
                            if (cResult[25] === tmp28) {
                              let tmp32 = cResult[26];
                            }
                            if (cResult[27] === tmp9) {
                              if (cResult[28] === tmp32) {
                                let tmp36 = cResult[29];
                              }
                              return tmp36;
                            }
                            const obj6 = { style: tmp9, children: tmp32 };
                            const tmp39 = hasOwnProperty(View, obj6);
                            cResult[27] = tmp9;
                            cResult[28] = tmp32;
                            cResult[29] = tmp39;
                            tmp36 = tmp39;
                          }
                        }
                        const obj7 = { style: tmp13, children: null };
                        const items1 = [tmp23, tmp28];
                        obj7.children = items1;
                        const tmp35 = timestampProducer(View, obj7);
                        cResult[23] = tmp13;
                        cResult[24] = tmp23;
                        cResult[25] = tmp28;
                        cResult[26] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                    const tmp19 = shared.isThemeDark(tmp5) ? tmp6.greenTextDarkMode : tmp6.greenTextLightMode;
                    cResult[15] = tmp6;
                    cResult[16] = tmp5;
                    cResult[17] = tmp19;
                    const tmpResult = shared;
                  }
                }
                const items2 = [, ,];
                ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp6);
                items2[2] = cResult[9];
                cResult[10] = tmp6.earningMetrics;
                cResult[11] = tmp6.horizontalContainer;
                cResult[12] = cResult[9];
                cResult[13] = items2;
                tmp13 = items2;
              }
            }
          }
          const tmp11 = shared.isThemeDark(tmp5) ? tmp6.earningMetricsDarkMode : tmp6.earningMetricsLightMode;
          cResult[6] = tmp6.earningMetricsDarkMode;
          cResult[7] = tmp6.earningMetricsLightMode;
          cResult[8] = tmp5;
          cResult[9] = tmp11;
          const tmpResult3 = shared;
        }
        const items3 = [tmp6.earningMetricsShadowContainer, tmp7];
        cResult[3] = tmp6.earningMetricsShadowContainer;
        cResult[4] = tmp7;
        cResult[5] = items3;
        tmp9 = items3;
      }
      const tmp8 = shared.isThemeDark(tmp5) && tmp6.earningMetricsShadowContainerDarkMode;
      cResult[0] = tmp6.earningMetricsShadowContainerDarkMode;
      cResult[1] = tmp5;
      cResult[2] = tmp8;
      tmp7 = tmp8;
      const tmpResult4 = shared;
    }
  : function EarningPreview() {
      const tmp3 = useThemeDefault();
      const tmp4 = closure_7();
      const items = [tmp4.earningMetricsShadowContainer];
      const obj2 = { style: items, children: null };
      items[1] = shared.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
      const items1 = [, ,];
      ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
      const tmp8 = shared.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
      const obj3 = { style: null, children: null };
      items1[2] = shared.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
      obj3.style = items1;
      const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.TXPK7B);
      const items2 = [hasOwnProperty(Text_Text.Text, obj4)];
      const tmp7Result = shared;
      const obj5 = { children: null };
      const obj6 = {
        style: shared.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode,
        variant: "heading-lg/extrabold",
        children: null,
      };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.LdjJG5);
      items2[1] = hasOwnProperty(Text_Text.Text, obj6);
      obj5.children = items2;
      const items3 = [timestampProducer(View, obj5)];
      const obj7 = { style: tmp4.earningMetricsAvatar, source: null };
      const tmp7Result2 = shared;
      obj7.source = _modDef18229;
      items3[1] = hasOwnProperty(FastImageDefault, obj7);
      obj3.children = items3;
      obj2.children = timestampProducer(View, obj3);
      return hasOwnProperty(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConsistentEarningBenefit() {
      const cResult = c.c(18);
      const tmp6 = closure_7();
      ({ benefitCard, benefitCardTitle } = tmp6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["9CdmS8"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6.benefitCardTitle) {
        const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
        const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp6.benefitCardTitle;
        cResult[2] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(closure_8, {});
        cResult[3] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp6.benefitAvatars) {
        if (cResult[5] === tmp6.horizontalContainer) {
          let tmp16 = cResult[6];
        }
        if (tmpResult.isThemeDark(tmp5)) {
          let tmp4Result = _modDef18230;
        } else {
          tmp4Result = _modDef18231;
        }
        if (cResult[7] !== tmp4Result) {
          const obj3 = { avatarSource: tmp4Result };
          const tmp21 = hasOwnProperty(closure_12, obj3);
          cResult[7] = tmp4Result;
          cResult[8] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { avatarSource: _modDef18232 };
          const tmp26 = hasOwnProperty(closure_12, obj4);
          const obj5 = { avatarSource: _modDef18233 };
          const tmp27 = hasOwnProperty(closure_12, obj5);
          cResult[9] = tmp26;
          cResult[10] = tmp27;
          let tmp23 = tmp27;
          let tmp22 = tmp26;
        } else {
          tmp22 = cResult[9];
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp16) {
          if (cResult[12] === tmp18) {
            let tmp28 = cResult[13];
          }
          if (cResult[14] === tmp6.benefitCard) {
            if (cResult[15] === tmp28) {
              if (cResult[16] === tmp9) {
                let tmp32 = cResult[17];
              }
              return tmp32;
            }
          }
          const obj6 = { style: benefitCard, children: null };
          const items = [tmp9, tmp12, tmp28];
          obj6.children = items;
          const tmp35 = timestampProducer(View, obj6);
          cResult[14] = tmp6.benefitCard;
          cResult[15] = tmp28;
          cResult[16] = tmp9;
          cResult[17] = tmp35;
          tmp32 = tmp35;
        }
        const obj7 = { style: tmp16, children: null };
        const items1 = [tmp18, tmp22, tmp23];
        obj7.children = items1;
        const tmp31 = timestampProducer(View, obj7);
        cResult[11] = tmp16;
        cResult[12] = tmp18;
        cResult[13] = tmp31;
        tmp28 = tmp31;
        tmpResult = shared;
      }
      const items2 = [,];
      ({ horizontalContainer: arr[0], benefitAvatars: arr[1] } = tmp6);
      cResult[4] = tmp6.benefitAvatars;
      cResult[5] = tmp6.horizontalContainer;
      cResult[6] = items2;
      tmp16 = items2;
      tmp5 = useThemeDefault();
    }
  : function ConsistentEarningBenefit() {
      const tmp4 = closure_7();
      const obj = { style: tmp4.benefitCard, children: null };
      const obj2 = {
        style: tmp4.benefitCardTitle,
        variant: "heading-md/medium",
        color: "text-default",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t["9CdmS8"]);
      const items = [hasOwnProperty(Text_Text.Text, obj2), hasOwnProperty(closure_8, {})];
      const obj3 = { style: null, children: null };
      const items1 = [,];
      ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
      obj3.style = items1;
      const tmp3 = useThemeDefault();
      if (obj4.isThemeDark(tmp3)) {
        let tmpResult = _modDef18230;
      } else {
        tmpResult = _modDef18231;
      }
      const items2 = [hasOwnProperty(closure_12, { avatarSource: tmpResult }), ,];
      obj4 = shared;
      items2[1] = hasOwnProperty(closure_12, { avatarSource: _modDef18232 });
      const obj5 = { avatarSource: _modDef18232 };
      items2[2] = hasOwnProperty(closure_12, { avatarSource: _modDef18233 });
      obj3.children = items2;
      items[2] = timestampProducer(View, obj3);
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FollowerAwardBenefit() {
      const cResult = c.c(12);
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
      if (cResult[3] !== tmp4.socialIllo) {
        const obj3 = { style: tmp4.socialIllo, source: _modDef18234 };
        const tmp14 = hasOwnProperty(FastImageDefault, obj3);
        cResult[3] = tmp4.socialIllo;
        cResult[4] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4.lanyardIllo) {
        const obj4 = { style: tmp4.lanyardIllo, source: _modDef18235 };
        const tmp19 = hasOwnProperty(FastImageDefault, obj4);
        cResult[5] = tmp4.lanyardIllo;
        cResult[6] = tmp19;
        let tmp15 = tmp19;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.benefitCard) {
        if (cResult[8] === tmp7) {
          if (cResult[9] === tmp10) {
            if (cResult[10] === tmp15) {
              let tmp20 = cResult[11];
            }
            return tmp20;
          }
        }
      }
      const obj5 = { style: benefitCard, children: null };
      const items = [tmp7, tmp10, tmp15];
      obj5.children = items;
      const tmp21 = timestampProducer(View, obj5);
      cResult[7] = tmp4.benefitCard;
      cResult[8] = tmp7;
      cResult[9] = tmp10;
      cResult[10] = tmp15;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : function FollowerAwardBenefit() {
      const tmp = closure_7();
      const obj = { style: tmp.benefitCard, children: null };
      const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.qsKRUQ);
      const items = [hasOwnProperty(Text_Text.Text, obj2), ,];
      const obj3 = { style: tmp.socialIllo, source: _modDef18234 };
      items[1] = hasOwnProperty(FastImageDefault, obj3);
      const obj4 = { style: tmp.lanyardIllo, source: null };
      obj4.source = _modDef18235;
      items[2] = hasOwnProperty(FastImageDefault, obj4);
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RevenueShareBenefit() {
      const cResult = c.c(19);
      const tmp5 = useThemeDefault();
      const tmp6 = closure_7();
      if (cResult[0] === tmp6.benefitCard) {
        if (cResult[1] === tmp6.revenueShareContainer) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === tmp5) {
            if (cResult[6] === tmp6.revenueShare) {
              if (cResult[7] === tmp9) {
                let tmp12 = cResult[8];
              }
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.AewsXD);
                cResult[9] = stringResult;
                let tmp17 = stringResult;
              } else {
                tmp17 = cResult[9];
              }
              if (cResult[10] !== tmp6.revenueShareDescription) {
                const obj2 = {
                  style: tmp6.revenueShareDescription,
                  variant: "heading-md/medium",
                  color: "text-default",
                  children: tmp17,
                };
                const tmp21 = hasOwnProperty(Text_Text.Text, obj2);
                cResult[10] = tmp6.revenueShareDescription;
                cResult[11] = tmp21;
                let tmp19 = tmp21;
              } else {
                tmp19 = cResult[11];
              }
              if (cResult[12] !== tmp6.revenueShareIllo) {
                const obj3 = { style: tmp6.revenueShareIllo, source: _modDef18236 };
                const tmp25 = hasOwnProperty(FastImageDefault, obj3);
                cResult[12] = tmp6.revenueShareIllo;
                cResult[13] = tmp25;
                let tmp22 = tmp25;
                const tmp4Result = FastImageDefault;
              } else {
                tmp22 = cResult[13];
              }
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp19) {
                    if (cResult[17] === tmp22) {
                      let tmp26 = cResult[18];
                    }
                    return tmp26;
                  }
                }
              }
              const obj4 = { style: tmp7, children: null };
              const items = [tmp12, tmp19, tmp22];
              obj4.children = items;
              const tmp29 = timestampProducer(View, obj4);
              cResult[14] = tmp7;
              cResult[15] = tmp12;
              cResult[16] = tmp19;
              cResult[17] = tmp22;
              cResult[18] = tmp29;
              tmp26 = tmp29;
            }
            const obj5 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
            const items1 = [tmp8, cResult[5]];
            obj5.style = items1;
            obj5.children = `${closure_4}%`;
            const tmp15 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[6] = tmp6.revenueShare;
            cResult[7] = cResult[5];
            cResult[8] = tmp15;
            tmp12 = tmp15;
          }
        }
        const tmp10 = shared.isThemeDark(tmp5) ? tmp6.greenTextDarkMode : tmp6.greenTextLightMode;
        cResult[3] = tmp6;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        const tmpResult = shared;
      }
      const items2 = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp6);
      cResult[0] = tmp6.benefitCard;
      cResult[1] = tmp6.revenueShareContainer;
      cResult[2] = items2;
      tmp7 = items2;
    }
  : function RevenueShareBenefit() {
      const tmp4 = closure_7();
      const obj = { style: null, children: null };
      const items = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
      obj.style = items;
      const items1 = [tmp4.revenueShare];
      const tmp3 = useThemeDefault();
      const obj3 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
      items1[1] = shared.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
      obj3.style = items1;
      obj3.children = `${closure_4}%`;
      const items2 = [hasOwnProperty(Text_Text.Text, obj3), ,];
      const obj4 = {
        style: tmp4.revenueShareDescription,
        variant: "heading-md/medium",
        color: "text-default",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.AewsXD);
      items2[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = { style: tmp4.revenueShareIllo, source: null };
      obj5.source = _modDef18236;
      items2[2] = hasOwnProperty(FastImageDefault, obj5);
      obj.children = items2;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BenefitAvatar(avatarSource) {
      const cResult = c.c(6);
      avatarSource = avatarSource.avatarSource;
      const tmp3 = closure_7();
      if (cResult[0] === avatarSource) {
        if (cResult[1] === tmp3.benefitAvatar) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === tmp3.benefitAvatarContainer) {
          if (cResult[4] === tmp4) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = { style: tmp3.benefitAvatarContainer, children: tmp4 };
        const tmp9 = hasOwnProperty(View, obj2);
        cResult[3] = tmp3.benefitAvatarContainer;
        cResult[4] = tmp4;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const tmp5 = hasOwnProperty(FastImageDefault, { source: avatarSource, style: tmp3.benefitAvatar });
      cResult[0] = avatarSource;
      cResult[1] = tmp3.benefitAvatar;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj3 = { source: avatarSource, style: tmp3.benefitAvatar };
    }
  : function BenefitAvatar(avatarSource) {
      const tmp = closure_7();
      const obj = {
        style: tmp.benefitAvatarContainer,
        children: hasOwnProperty(FastImageDefault, { source: avatarSource.avatarSource, style: tmp.benefitAvatar }),
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
