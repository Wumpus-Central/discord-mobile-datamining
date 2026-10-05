// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import GuildRoleSubscriptionsConstants from "../../../GuildRoleSubscriptionsConstants.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/17896_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/17897_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../_runtime/17898_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../../_runtime/17899_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../../_runtime/17900_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../../../_runtime/17901_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../../../_runtime/17902_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../../../_runtime/17903_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let avatarSource;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_4 = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_SHARE_PERCENTAGE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  horizontalContainer: { flex: 1, flexDirection: "row" },
  benefitAvatarContainer: obj2,
  benefitCard: obj3,
  benefitAvatar: { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" },
  benefitAvatars: { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" },
  benefitCardTitle: { marginStart: 24, marginEnd: 35, marginVertical: 24 },
  earningMetricsShadowContainer: obj4,
  earningMetricsShadowContainerDarkMode: { shadowOpacity: 0.24 },
  earningMetrics: obj5,
  earningMetricsDarkMode: { backgroundColor: "#2E3638" },
  earningMetricsLightMode: obj6,
  greenTextDarkMode: obj7,
  greenTextLightMode: { color: nativeDefault.unsafe_rawColors.GREEN_400 },
  earningMetricsAvatar: { width: 54, height: 54, borderRadius: 27, overflow: "hidden" },
  socialIllo: { marginTop: 50, marginStart: 16 },
  lanyardIllo: { position: "absolute", bottom: 25, end: 0 },
  revenueShare: { fontSize: 50, lineHeight: 52 },
  revenueShareContainer: { padding: 24 },
  revenueShareIllo: { marginTop: 15, alignSelf: "flex-end" },
  revenueShareDescription: { marginEnd: 120 },
};
obj2 = {
  padding: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = {
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
obj4 = {
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
};
obj5 = {
  marginHorizontal: 24,
  marginBottom: 24,
  padding: 16,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj7 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
({ color: nativeDefault.unsafe_rawColors.GREEN_400 });
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl;
      let items;
      let items1;
      const obj = react2;
      const cResult = obj.c(30);
      const tmp5 = useThemeDefault();
      const tmp6 = closure_7();
      if (cResult[0] === tmp6.earningMetricsShadowContainerDarkMode) {
        let tmp7;
        if (cResult[1] === tmp5) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp6.earningMetricsShadowContainer) {
          let tmp9;
          if (cResult[4] === tmp7) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp6.earningMetricsDarkMode) {
            if (cResult[7] === tmp6.earningMetricsLightMode) {
              let tmp10;
              if (cResult[8] === tmp5) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === tmp6.earningMetrics) {
                if (cResult[11] === tmp6.horizontalContainer) {
                  let tmp12;
                  let tmp14;
                  if (cResult[12] === tmp10) {
                    tmp12 = cResult[13];
                  }
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = {
                      variant: "text-sm/normal",
                      color: "mobile-text-heading-primary",
                      children: intl.string(intl3.t.TXPK7B),
                    };
                    const Text = Text_Text.Text;
                    intl = intl3.intl;
                    const tmp16 = hasOwnProperty(Text, obj2);
                    cResult[14] = tmp16;
                    tmp14 = tmp16;
                  } else {
                    tmp14 = cResult[14];
                  }
                  if (cResult[15] === tmp6) {
                    let tmp17;
                    let tmp19;
                    let tmp21;
                    let tmp26;
                    if (cResult[16] === tmp5) {
                      tmp17 = cResult[17];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = intl3.intl;
                      const stringResult = intl2.string(intl3.t.LdjJG5);
                      cResult[18] = stringResult;
                      tmp19 = stringResult;
                    } else {
                      tmp19 = cResult[18];
                    }
                    if (cResult[19] !== tmp17) {
                      const obj3 = { children: items };
                      items = [tmp14];
                      const obj4 = { style: tmp17, variant: "heading-lg/extrabold", children: tmp19 };
                      items[1] = hasOwnProperty(Text_Text.Text, obj4);
                      const tmp25 = metroRequire(View, obj3);
                      cResult[19] = tmp17;
                      cResult[20] = tmp25;
                      tmp21 = tmp25;
                    } else {
                      tmp21 = cResult[20];
                    }
                    if (cResult[21] !== tmp6.earningMetricsAvatar) {
                      const obj5 = { style: tmp6.earningMetricsAvatar, source: AssetRegistryDefault };
                      const tmp4Result = FastImageDefault;
                      const tmp29 = hasOwnProperty(tmp4Result, obj5);
                      cResult[21] = tmp6.earningMetricsAvatar;
                      cResult[22] = tmp29;
                      tmp26 = tmp29;
                    } else {
                      tmp26 = cResult[22];
                    }
                    if (cResult[23] === tmp12) {
                      if (cResult[24] === tmp21) {
                        let tmp30;
                        if (cResult[25] === tmp26) {
                          tmp30 = cResult[26];
                        }
                        if (cResult[27] === tmp9) {
                          let tmp34;
                          if (cResult[28] === tmp30) {
                            tmp34 = cResult[29];
                          }
                          return tmp34;
                        }
                        const obj6 = { style: tmp9, children: tmp30 };
                        const tmp37 = hasOwnProperty(View, obj6);
                        cResult[27] = tmp9;
                        cResult[28] = tmp30;
                        cResult[29] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                    const obj7 = { style: tmp12, children: items1 };
                    items1 = [tmp21, tmp26];
                    const tmp33 = metroRequire(View, obj7);
                    cResult[23] = tmp12;
                    cResult[24] = tmp21;
                    cResult[25] = tmp26;
                    cResult[26] = tmp33;
                    tmp30 = tmp33;
                  }
                  const tmpResult = shared;
                  const tmp18 = tmpResult.isThemeDark(tmp5) ? tmp6.greenTextDarkMode : tmp6.greenTextLightMode;
                  cResult[15] = tmp6;
                  cResult[16] = tmp5;
                  cResult[17] = tmp18;
                  tmp17 = tmp18;
                }
              }
              const items2 = [, ,];
              ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp6);
              items2[2] = tmp10;
              cResult[10] = tmp6.earningMetrics;
              cResult[11] = tmp6.horizontalContainer;
              cResult[12] = tmp10;
              cResult[13] = items2;
              tmp12 = items2;
            }
          }
          const tmpResult3 = shared;
          const tmp11 = tmpResult3.isThemeDark(tmp5) ? tmp6.earningMetricsDarkMode : tmp6.earningMetricsLightMode;
          cResult[6] = tmp6.earningMetricsDarkMode;
          cResult[7] = tmp6.earningMetricsLightMode;
          cResult[8] = tmp5;
          cResult[9] = tmp11;
          tmp10 = tmp11;
        }
        const items3 = [tmp6.earningMetricsShadowContainer, tmp7];
        cResult[3] = tmp6.earningMetricsShadowContainer;
        cResult[4] = tmp7;
        cResult[5] = items3;
        tmp9 = items3;
      }
      const tmpResult4 = shared;
      const tmp8 = tmpResult4.isThemeDark(tmp5) && tmp6.earningMetricsShadowContainerDarkMode;
      cResult[0] = tmp6.earningMetricsShadowContainerDarkMode;
      cResult[1] = tmp5;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : () => {
      let intl;
      let intl2;
      let items3;
      let obj3;
      const tmp3 = useThemeDefault();
      const tmp4 = closure_7();
      const items = [tmp4.earningMetricsShadowContainer];
      const obj = shared;
      const obj2 = { style: items, children: metroRequire(View, obj3) };
      items[1] = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
      const items1 = [, ,];
      ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
      obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
      obj3 = { style: items1, children: items3 };
      const tmp7Result = shared;
      items1[2] = tmp7Result.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
      const obj4 = {
        variant: "text-sm/normal",
        color: "mobile-text-heading-primary",
        children: intl.string(intl3.t.TXPK7B),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      const items2 = [hasOwnProperty(Text, obj4)];
      const Text2 = Text_Text.Text;
      const obj5 = { children: items2 };
      const tmp7Result2 = shared;
      const obj6 = {
        style: tmp7Result2.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode,
        variant: "heading-lg/extrabold",
        children: intl2.string(intl3.t.LdjJG5),
      };
      intl2 = intl3.intl;
      items2[1] = hasOwnProperty(Text2, obj6);
      items3 = [metroRequire(View, obj5)];
      const obj7 = { style: tmp4.earningMetricsAvatar, source: AssetRegistryDefault };
      const tmpResult = FastImageDefault;
      items3[1] = hasOwnProperty(tmpResult, obj7);
      return hasOwnProperty(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let benefitCard;
      let benefitCardTitle;
      let first;
      let items;
      let items1;
      let tmp12;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(18);
      const tmp5 = useThemeDefault();
      const tmp6 = closure_7();
      ({ benefitCard, benefitCardTitle } = tmp6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["9CdmS8"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6.benefitCardTitle) {
        const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
        const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp6.benefitCardTitle;
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(closure_8, {});
        cResult[3] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp6.benefitAvatars) {
        let tmp16;
        let tmp4Result;
        let tmp18;
        let tmp23;
        let tmp22;
        if (cResult[5] === tmp6.horizontalContainer) {
          tmp16 = cResult[6];
        }
        const tmpResult = shared;
        if (tmpResult.isThemeDark(tmp5)) {
          tmp4Result = AssetRegistryDefault2;
        } else {
          tmp4Result = AssetRegistryDefault3;
        }
        if (cResult[7] !== tmp4Result) {
          const obj3 = { avatarSource: tmp4Result };
          const tmp21 = hasOwnProperty(closure_12, obj3);
          cResult[7] = tmp4Result;
          cResult[8] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { avatarSource: AssetRegistryDefault4 };
          const tmp26 = hasOwnProperty(closure_12, obj4);
          const obj5 = { avatarSource: AssetRegistryDefault5 };
          const tmp27 = hasOwnProperty(closure_12, obj5);
          cResult[9] = tmp26;
          cResult[10] = tmp27;
          tmp23 = tmp27;
          tmp22 = tmp26;
        } else {
          tmp22 = cResult[9];
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp16) {
          let tmp28;
          if (cResult[12] === tmp18) {
            tmp28 = cResult[13];
          }
          if (cResult[14] === tmp6.benefitCard) {
            if (cResult[15] === tmp28) {
              let tmp32;
              if (cResult[16] === tmp9) {
                tmp32 = cResult[17];
              }
              return tmp32;
            }
          }
          const obj6 = { style: benefitCard, children: items };
          items = [tmp9, tmp12, tmp28];
          const tmp35 = metroRequire(View, obj6);
          cResult[14] = tmp6.benefitCard;
          cResult[15] = tmp28;
          cResult[16] = tmp9;
          cResult[17] = tmp35;
          tmp32 = tmp35;
        }
        const obj7 = { style: tmp16, children: items1 };
        items1 = [tmp18, tmp22, tmp23];
        const tmp31 = metroRequire(View, obj7);
        cResult[11] = tmp16;
        cResult[12] = tmp18;
        cResult[13] = tmp31;
        tmp28 = tmp31;
      }
      const items2 = [,];
      ({ horizontalContainer: arr[0], benefitAvatars: arr[1] } = tmp6);
      cResult[4] = tmp6.benefitAvatars;
      cResult[5] = tmp6.horizontalContainer;
      cResult[6] = items2;
      tmp16 = items2;
    }
  : () => {
      let intl;
      let items;
      let items1;
      let items2;
      let tmpResult;
      const tmp3 = useThemeDefault();
      const tmp4 = closure_7();
      const obj = { style: tmp4.benefitCard, children: items };
      const obj2 = {
        style: tmp4.benefitCardTitle,
        variant: "heading-md/medium",
        color: "text-default",
        children: intl.string(intl3.t["9CdmS8"]),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items = [hasOwnProperty(Text, obj2), hasOwnProperty(closure_8, {})];
      const obj3 = { style: items1, children: items2 };
      items1 = [,];
      ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
      const obj4 = shared;
      if (obj4.isThemeDark(tmp3)) {
        tmpResult = AssetRegistryDefault2;
      } else {
        tmpResult = AssetRegistryDefault3;
      }
      items2 = [hasOwnProperty(closure_12, { avatarSource: tmpResult }), ,];
      const obj5 = { avatarSource: AssetRegistryDefault4 };
      items2[1] = hasOwnProperty(closure_12, obj5);
      const obj6 = { avatarSource: AssetRegistryDefault5 };
      items2[2] = hasOwnProperty(closure_12, obj6);
      items[2] = metroRequire(View, obj3);
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let benefitCard;
      let benefitCardTitle;
      let first;
      let items;
      let tmp10;
      let tmp15;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(12);
      const tmp4 = closure_7();
      ({ benefitCard, benefitCardTitle } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.qsKRUQ);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.benefitCardTitle) {
        const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
        const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp4.benefitCardTitle;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.socialIllo) {
        const obj3 = { style: tmp4.socialIllo, source: AssetRegistryDefault6 };
        const tmp13 = FastImageDefault;
        const tmp14 = hasOwnProperty(tmp13, obj3);
        cResult[3] = tmp4.socialIllo;
        cResult[4] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4.lanyardIllo) {
        const obj4 = { style: tmp4.lanyardIllo, source: AssetRegistryDefault7 };
        const tmp18 = FastImageDefault;
        const tmp19 = hasOwnProperty(tmp18, obj4);
        cResult[5] = tmp4.lanyardIllo;
        cResult[6] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.benefitCard) {
        if (cResult[8] === tmp7) {
          if (cResult[9] === tmp10) {
            let tmp20;
            if (cResult[10] === tmp15) {
              tmp20 = cResult[11];
            }
            return tmp20;
          }
        }
      }
      const obj5 = { style: benefitCard, children: items };
      items = [tmp7, tmp10, tmp15];
      const tmp21 = metroRequire(View, obj5);
      cResult[7] = tmp4.benefitCard;
      cResult[8] = tmp7;
      cResult[9] = tmp10;
      cResult[10] = tmp15;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_7();
      const obj = { style: tmp.benefitCard, children: items };
      const obj2 = {
        style: tmp.benefitCardTitle,
        variant: "heading-md/medium",
        color: "text-default",
        children: intl.string(intl3.t.qsKRUQ),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items = [hasOwnProperty(Text, obj2), ,];
      const obj3 = { style: tmp.socialIllo, source: AssetRegistryDefault6 };
      const tmp2 = FastImageDefault;
      items[1] = hasOwnProperty(tmp2, obj3);
      const obj4 = { style: tmp.lanyardIllo, source: AssetRegistryDefault7 };
      const tmp3 = FastImageDefault;
      items[2] = hasOwnProperty(tmp3, obj4);
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      const obj = react2;
      const cResult = obj.c(19);
      const tmp5 = useThemeDefault();
      const tmp6 = closure_7();
      if (cResult[0] === tmp6.benefitCard) {
        let tmp7;
        if (cResult[1] === tmp6.revenueShareContainer) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          let tmp9;
          if (cResult[4] === tmp5) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp6.revenueShare) {
            let tmp11;
            let tmp16;
            let tmp18;
            let tmp21;
            if (cResult[7] === tmp9) {
              tmp11 = cResult[8];
            }
            const _Symbol = Symbol;
            const revenueShareDescription = tmp6.revenueShareDescription;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult = intl.string(intl3.t.AewsXD);
              cResult[9] = stringResult;
              tmp16 = stringResult;
            } else {
              tmp16 = cResult[9];
            }
            if (cResult[10] !== tmp6.revenueShareDescription) {
              const obj2 = {
                style: revenueShareDescription,
                variant: "heading-md/medium",
                color: "text-default",
                children: tmp16,
              };
              const tmp20 = hasOwnProperty(Text_Text.Text, obj2);
              cResult[10] = tmp6.revenueShareDescription;
              cResult[11] = tmp20;
              tmp18 = tmp20;
            } else {
              tmp18 = cResult[11];
            }
            if (cResult[12] !== tmp6.revenueShareIllo) {
              const obj3 = { style: tmp6.revenueShareIllo, source: AssetRegistryDefault8 };
              const tmp4Result = FastImageDefault;
              const tmp24 = hasOwnProperty(tmp4Result, obj3);
              cResult[12] = tmp6.revenueShareIllo;
              cResult[13] = tmp24;
              tmp21 = tmp24;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp11) {
                if (cResult[16] === tmp18) {
                  let tmp25;
                  if (cResult[17] === tmp21) {
                    tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
            }
            const obj4 = { style: tmp7, children: items };
            items = [tmp11, tmp18, tmp21];
            const tmp28 = metroRequire(View, obj4);
            cResult[14] = tmp7;
            cResult[15] = tmp11;
            cResult[16] = tmp18;
            cResult[17] = tmp21;
            cResult[18] = tmp28;
            tmp25 = tmp28;
          }
          const obj5 = {
            style: items1,
            variant: "heading-xxl/extrabold",
            color: "status-positive",
            children: `${closure_4}%`,
          };
          items1 = [tmp8, tmp9];
          const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
          cResult[6] = tmp6.revenueShare;
          cResult[7] = tmp9;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const tmpResult = shared;
        const tmp10 = tmpResult.isThemeDark(tmp5) ? tmp6.greenTextDarkMode : tmp6.greenTextLightMode;
        cResult[3] = tmp6;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp9 = tmp10;
      }
      const items2 = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp6);
      cResult[0] = tmp6.benefitCard;
      cResult[1] = tmp6.revenueShareContainer;
      cResult[2] = items2;
      tmp7 = items2;
    }
  : () => {
      let intl;
      let items;
      let items2;
      const tmp3 = useThemeDefault();
      const tmp4 = closure_7();
      const obj = { style: items, children: items2 };
      items = [,];
      ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
      const items1 = [tmp4.revenueShare];
      const Text = Text_Text.Text;
      const obj3 = {
        style: items1,
        variant: "heading-xxl/extrabold",
        color: "status-positive",
        children: `${closure_4}%`,
      };
      const obj2 = shared;
      items1[1] = obj2.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
      items2 = [hasOwnProperty(Text, obj3), ,];
      const obj4 = {
        style: tmp4.revenueShareDescription,
        variant: "heading-md/medium",
        color: "text-default",
        children: intl.string(intl3.t.AewsXD),
      };
      const Text2 = Text_Text.Text;
      intl = intl3.intl;
      items2[1] = hasOwnProperty(Text2, obj4);
      const obj5 = { style: tmp4.revenueShareIllo, source: AssetRegistryDefault8 };
      const tmpResult = FastImageDefault;
      items2[2] = hasOwnProperty(tmpResult, obj5);
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (avatarSource) => {
      const obj = react2;
      const cResult = obj.c(6);
      avatarSource = avatarSource.avatarSource;
      const tmp3 = closure_7();
      if (cResult[0] === avatarSource) {
        let tmp4;
        if (cResult[1] === tmp3.benefitAvatar) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === tmp3.benefitAvatarContainer) {
          let tmp6;
          if (cResult[4] === tmp4) {
            tmp6 = cResult[5];
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
      const obj3 = { source: avatarSource, style: tmp3.benefitAvatar };
      const tmp5 = hasOwnProperty(FastImageDefault, obj3);
      cResult[0] = avatarSource;
      cResult[1] = tmp3.benefitAvatar;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (avatarSource) => {
      let obj2;
      avatarSource = avatarSource.avatarSource;
      const tmp = closure_7();
      const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(FastImageDefault, obj2) };
      obj2 = { source: avatarSource, style: tmp.benefitAvatar };
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
        const tmp9 = metroRequire(View, obj2);
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
      return metroRequire(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx",
);

export default tmp5;
