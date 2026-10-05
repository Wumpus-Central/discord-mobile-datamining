// discord_app/modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import intl7 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05605_LinearGradient.js";
import ColorConstants from "../../../../colors/native/ColorConstants.tsx";
import openPremiumUpsellActionSheetDefault from "../utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import NitroWheelIcon2 from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import _objectWithoutProperties_mod from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";
import PremiumConstants from "../../../PremiumConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, flag, obj1, shouldShow, tmp16, tmp6, tmp9, trackResult;

let c10;
let c9;
let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function getPremiumUpsellLabel(TIER_0, featureName, fn) {
  let tmpResult;
  const obj = PremiumUtils;
  const premiumTypeDisplayName = obj.getPremiumTypeDisplayName(TIER_0);
  if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl6 = intl7.intl;
    const obj2 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl6.format(intl7.t["tw/SSq"], obj2);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl5 = intl7.intl;
    const obj3 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl5.format(intl7.t.gMVjeS, obj3);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl4 = intl7.intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl4.format(intl7.t.eontIh, obj4);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl3 = intl7.intl;
    const format = intl3.format;
    const obj5 = {
      maxFileSize: tmpResult.getMaxFileSizeForPremiumType(TIER_0),
      nitroTierName: premiumTypeDisplayName,
      onClick: fn,
    };
    const zzyLEK = intl7.t.zzyLEK;
    tmpResult = PremiumUtils;
    return format(zzyLEK, obj5);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl2 = intl7.intl;
    const obj6 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl2.format(intl7.t.lyxfbj, obj6);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl = intl7.intl;
    const obj7 = { onClick: fn };
    return intl.format(intl7.t.x2dQxN, obj7);
  }
}
let closure_3 = ["shouldShow"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
({ PremiumSubscriptionSKUs: c9, PremiumTypes: c10, PremiumUpsellTypes: unpackModuleId } = PremiumConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const Gradients = ColorConstants.Gradients;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_17 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj6;
  let unsafe_rawColors;
  const obj = {
    container: {
      flexDirection: "row",
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderRadius: nativeDefault.radii.round,
      padding: nativeDefault.space.PX_12,
      justifyContent: "space-between",
    },
    containerShadow: obj3,
    nitroWheel: size,
    labelContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 },
    text: { flexShrink: 1, flexWrap: "wrap" },
    nitroWheelButton: { marginStart: -2, width: 20, height: 20 },
    nitroWheelIcon: { marginEnd: 4 },
    nitroWheelDisabled: { opacity: 0.6 },
    button: { alignSelf: "center", borderRadius: nativeDefault.radii.round },
    gradient: obj6,
  };
  obj3 = {
    shadowColor: arg0
      ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2
      : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2,
    shadowOpacity: 0.6,
  };
  ({
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.round,
    padding: nativeDefault.space.PX_12,
    justifyContent: "space-between",
  });
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  unsafe_rawColors = nativeDefault.unsafe_rawColors;
  size = { width: 20, height: 20, marginEnd: nativeDefault.space.PX_4 };
  ({ flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 });
  ({ alignSelf: "center", borderRadius: nativeDefault.radii.round });
  obj6 = {};
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (featureName) => {
      let items;
      let items1;
      let showShadow;
      let style;
      let tmp22Result;
      let tmp4;
      let tmp8;
      let useTier0UpsellContent;
      let tmp2 = useTier0UpsellContent;
      let obj = featureName(useTier0UpsellContent[14]);
      const cResult = obj.c(50);
      featureName = featureName.featureName;
      const analyticsLocation = featureName.analyticsLocation;
      ({ showShadow, style } = featureName);
      let containerShadow = undefined === showShadow || showShadow;
      if (cResult[0] !== featureName) {
        let tmpResult = tmp(tmp2[15]);
        const upsellType = tmpResult.getUpsellType(featureName);
        cResult[0] = featureName;
        cResult[1] = upsellType;
        tmp4 = upsellType;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult5 = featureName(tmp2[16]);
      const premiumUpsellConfig = tmpResult5.usePremiumUpsellConfig(tmp4);
      useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
      const tmp7 = closure_17(useTier0UpsellContent);
      closure_3 = tmp7;
      if (cResult[2] !== featureName) {
        const tmpResult6 = featureName(tmp2[17]);
        let mobileEmojiPickerUpsellRestyleEnabledForFeature =
          tmpResult6.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
        if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
          const tmpResult7 = featureName(tmp2[18]);
          mobileEmojiPickerUpsellRestyleEnabledForFeature =
            tmpResult7.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
        }
        cResult[2] = featureName;
        cResult[3] = mobileEmojiPickerUpsellRestyleEnabledForFeature;
        tmp8 = mobileEmojiPickerUpsellRestyleEnabledForFeature;
      } else {
        tmp8 = cResult[3];
      }
      let closure_4 = tmp8;
      const tmp11 = useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2;
      if (cResult[4] === analyticsLocation) {
        let tmp12;
        if (cResult[5] === featureName) {
          tmp12 = cResult[6];
        }
        if (cResult[7] === featureName) {
          if (cResult[8] === tmp11) {
            let tmp13;
            let tmp15;
            if (cResult[9] === tmp12) {
              tmp13 = cResult[10];
            }
            if (cResult[11] !== featureName) {
              const tmpResult8 = featureName(tmp2[15]);
              const analyticsPage = tmpResult8.getAnalyticsPage(featureName);
              cResult[11] = featureName;
              cResult[12] = analyticsPage;
              tmp15 = analyticsPage;
            } else {
              tmp15 = cResult[12];
            }
            const tmp18 = analyticsLocation(tmp2[21])(useTier0UpsellContent, onViewAllPerks, tmp15);
            const loading = tmp18.loading;
            const onPress = tmp18.onPress;
            const tmp17 = analyticsLocation;
            if (containerShadow) {
              containerShadow = tmp7.containerShadow;
            }
            if (cResult[13] === style) {
              if (cResult[14] === tmp7.container) {
                let tmp19;
                if (cResult[15] === containerShadow) {
                  tmp19 = cResult[16];
                }
                if (cResult[17] === tmp7.nitroWheel) {
                  if (cResult[18] === tmp8) {
                    let tmp20;
                    if (cResult[19] === useTier0UpsellContent) {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] === tmp13) {
                      let tmp24;
                      if (cResult[22] === tmp7.text) {
                        tmp24 = cResult[23];
                      }
                      if (cResult[24] === tmp7.labelContainer) {
                        if (cResult[25] === tmp20) {
                          let tmp26;
                          let tmp29;
                          if (cResult[26] === tmp24) {
                            tmp26 = cResult[27];
                          }
                          if (cResult[28] !== useTier0UpsellContent) {
                            let stringResult;
                            const intl = tmp(tmp2[10]).intl;
                            const string = intl.string;
                            const t = tmp(tmp2[10]).t;
                            if (useTier0UpsellContent) {
                              stringResult = string(t.cM8bbx);
                            } else {
                              stringResult = string(t["8x0jKT"]);
                            }
                            cResult[28] = useTier0UpsellContent;
                            cResult[29] = stringResult;
                            tmp29 = stringResult;
                          } else {
                            tmp29 = cResult[29];
                          }
                          if (cResult[30] === loading) {
                            if (cResult[31] === tmp7.nitroWheelButton) {
                              if (cResult[32] === tmp7.nitroWheelDisabled) {
                                if (cResult[33] === tmp7.nitroWheelIcon) {
                                  let tmp31;
                                  if (cResult[34] === tmp8) {
                                    tmp31 = cResult[35];
                                  }
                                  if (cResult[36] === tmp7.gradient) {
                                    let tmp32;
                                    if (cResult[37] === useTier0UpsellContent) {
                                      tmp32 = cResult[38];
                                    }
                                    if (cResult[39] === loading) {
                                      if (cResult[40] === onPress) {
                                        if (cResult[41] === tmp7.button) {
                                          if (cResult[42] === tmp29) {
                                            if (cResult[43] === tmp31) {
                                              let tmp33;
                                              if (cResult[44] === tmp32) {
                                                tmp33 = cResult[45];
                                              }
                                              if (cResult[46] === tmp26) {
                                                if (cResult[47] === tmp33) {
                                                  let tmp35;
                                                  if (cResult[48] === tmp19) {
                                                    tmp35 = cResult[49];
                                                  }
                                                  return tmp35;
                                                }
                                              }
                                              class D {
                                                constructor() {
                                                  const obj = {
                                                    style: closure_3.gradient,
                                                    start: ConstantsIOS.HorizontalGradient.START,
                                                    end: ConstantsIOS.HorizontalGradient.END,
                                                    colors: useTier0UpsellContent
                                                      ? Gradients.PREMIUM_TIER_0
                                                      : Gradients.PREMIUM_TIER_2_TRI_COLOR,
                                                  };
                                                  const tmp2 = LinearGradientDefault;
                                                  return authStore2(tmp2, obj);
                                                }
                                              }
                                              let obj2 = { style: tmp19, children: items };
                                              items = [tmp26, tmp33];
                                              const tmp37 = closure_15(closure_7, obj2);
                                              cResult[46] = tmp26;
                                              cResult[47] = tmp33;
                                              cResult[48] = tmp19;
                                              cResult[49] = tmp37;
                                              tmp35 = tmp37;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    class D {
                                      constructor() {
                                        const obj = {
                                          style: closure_3.gradient,
                                          start: ConstantsIOS.HorizontalGradient.START,
                                          end: ConstantsIOS.HorizontalGradient.END,
                                          colors: useTier0UpsellContent
                                            ? Gradients.PREMIUM_TIER_0
                                            : Gradients.PREMIUM_TIER_2_TRI_COLOR,
                                        };
                                        const tmp2 = LinearGradientDefault;
                                        return authStore2(tmp2, obj);
                                      }
                                    }
                                    const obj3 = {
                                      disabled: loading,
                                      shrink: true,
                                      style: tmp7.button,
                                      size: featureName(tmp2[22]).ButtonSizes.XSMALL,
                                      onPress,
                                      text: tmp29,
                                      color: featureName(tmp2[22]).ButtonColors.GREEN,
                                      renderIcon: tmp31,
                                      renderLinearGradient: tmp32,
                                    };
                                    const ShinyButton = tmp(tmp2[22]).ShinyButton;
                                    const tmp34 = closure_14(ShinyButton, obj3);
                                    cResult[39] = loading;
                                    cResult[40] = onPress;
                                    cResult[41] = tmp7.button;
                                    cResult[42] = tmp29;
                                    cResult[43] = tmp31;
                                    cResult[44] = tmp32;
                                    cResult[45] = tmp34;
                                    tmp33 = tmp34;
                                  }
                                  class D {
                                    constructor() {
                                      const obj = {
                                        style: closure_3.gradient,
                                        start: ConstantsIOS.HorizontalGradient.START,
                                        end: ConstantsIOS.HorizontalGradient.END,
                                        colors: useTier0UpsellContent
                                          ? Gradients.PREMIUM_TIER_0
                                          : Gradients.PREMIUM_TIER_2_TRI_COLOR,
                                      };
                                      const tmp2 = LinearGradientDefault;
                                      return authStore2(tmp2, obj);
                                    }
                                  }
                                  cResult[36] = tmp7.gradient;
                                  cResult[37] = useTier0UpsellContent;
                                  cResult[38] = D;
                                  tmp32 = D;
                                }
                              }
                            }
                          }
                          const fn2 = function k() {
                            let items;
                            let tmpResult;
                            if (closure_4) {
                              const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: items };
                              const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
                              items = [closure_3.nitroWheelIcon, loading && closure_3.nitroWheelDisabled];
                              tmpResult = authStore2(NitroWheelIcon, obj2);
                            } else {
                              const items1 = [closure_3.nitroWheelButton];
                              let nitroWheelDisabled = loading;
                              const NitroWheel = native.NitroWheel;
                              if (loading) {
                                nitroWheelDisabled = closure_3.nitroWheelDisabled;
                              }
                              const obj = { style: items1 };
                              items1[1] = nitroWheelDisabled;
                              tmpResult = authStore2(NitroWheel, obj);
                            }
                            return tmpResult;
                          };
                          cResult[30] = loading;
                          cResult[31] = tmp7.nitroWheelButton;
                          cResult[32] = tmp7.nitroWheelDisabled;
                          cResult[33] = tmp7.nitroWheelIcon;
                          cResult[34] = tmp8;
                          cResult[35] = fn2;
                          tmp31 = fn2;
                        }
                      }
                      const obj4 = { style: tmp7.labelContainer, children: items1 };
                      items1 = [tmp20, tmp24];
                      const tmp28 = closure_15(closure_7, obj4);
                      cResult[24] = tmp7.labelContainer;
                      cResult[25] = tmp20;
                      cResult[26] = tmp24;
                      cResult[27] = tmp28;
                      tmp26 = tmp28;
                    }
                    const obj5 = { style: tmp7.text, variant: "text-sm/medium", children: tmp13 };
                    const tmp25 = closure_14(featureName(tmp2[25]).Text, obj5);
                    cResult[21] = tmp13;
                    cResult[22] = tmp7.text;
                    cResult[23] = tmp25;
                    tmp24 = tmp25;
                  }
                }
                if (tmp22Result) {
                  const obj6 = {
                    source: tmp17(useTier0UpsellContent ? tmp2[23] : tmp2[24]),
                    style: tmp7.nitroWheel,
                    disableColor: true,
                  };
                  class D {
                    constructor() {
                      const obj = {
                        style: closure_3.gradient,
                        start: ConstantsIOS.HorizontalGradient.START,
                        end: ConstantsIOS.HorizontalGradient.END,
                        colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR,
                      };
                      const tmp2 = LinearGradientDefault;
                      return authStore2(tmp2, obj);
                    }
                  }
                  tmp22Result = closure_14(tmp23, obj6);
                }
                cResult[17] = tmp7.nitroWheel;
                cResult[18] = tmp8;
                cResult[19] = useTier0UpsellContent;
                cResult[20] = tmp22Result;
                tmp20 = tmp22Result;
              }
            }
            const items2 = [tmp7.container, containerShadow, style];
            cResult[13] = style;
            cResult[14] = tmp7.container;
            cResult[15] = containerShadow;
            cResult[16] = items2;
            tmp19 = items2;
          }
        }
        const tmp14 = getPremiumUpsellLabel(tmp11, featureName, tmp12);
        cResult[7] = featureName;
        cResult[8] = tmp11;
        cResult[9] = tmp12;
        cResult[10] = tmp14;
        tmp13 = tmp14;
      }
      const fn = function f() {
        const tmp3 =
          featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE &&
          null != analyticsLocation;
        if (tmp3) {
          const obj2 = { location: analyticsLocation };
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj2);
        }
        openPremiumUpsellActionSheetDefault(featureName);
      };
      cResult[4] = analyticsLocation;
      cResult[5] = featureName;
      cResult[6] = fn;
      tmp12 = fn;
    }
  : (featureName) => {
      let _location;
      let items1;
      let items2;
      let showShadow;
      let stringResult;
      featureName = featureName.featureName;
      ({ analyticsLocation: importDefault, showShadow } = featureName);
      if (showShadow === undefined) {
        showShadow = true;
      }
      let useTier0UpsellContent;
      let loading;
      let tmp2 = useTier0UpsellContent;
      const style = featureName.style;
      let tmp3 = featureName(useTier0UpsellContent[16]);
      const usePremiumUpsellConfig = tmp3.usePremiumUpsellConfig;
      let obj = featureName(useTier0UpsellContent[15]);
      const premiumUpsellConfig = usePremiumUpsellConfig(obj.getUpsellType(featureName));
      useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
      const tmp5 = closure_17(useTier0UpsellContent);
      closure_3 = tmp5;
      let obj2 = featureName(useTier0UpsellContent[17]);
      let mobileEmojiPickerUpsellRestyleEnabledForFeature = obj2.getMobileEmojiPickerUpsellRestyleEnabledForFeature(
        featureName,
        "native.PremiumFeatureUpsell",
      );
      if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        let tmpResult = tmp(tmp2[18]);
        mobileEmojiPickerUpsellRestyleEnabledForFeature =
          tmpResult.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
      }
      const tmp8 = getPremiumUpsellLabel(
        useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2,
        featureName,
        () => {
          const tmp3 =
            featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE &&
            null != importDefault;
          if (tmp3) {
            const obj2 = { location: importDefault };
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj2);
          }
          openPremiumUpsellActionSheetDefault(featureName);
        },
      );
      const tmp10 = require("usePremiumFeatureUpsellGetNitro");
      const tmpResult2 = featureName(tmp2[15]);
      const tmp10Result = tmp10(useTier0UpsellContent, onViewAllPerks, tmpResult2.getAnalyticsPage(featureName));
      loading = tmp10Result.loading;
      let items = [tmp5.container, ,];
      const onPress = tmp10Result.onPress;
      if (showShadow) {
        showShadow = tmp5.containerShadow;
      }
      const obj3 = { style: items, children: items2 };
      items[1] = showShadow;
      items[2] = style;
      let tmp15Result = !mobileEmojiPickerUpsellRestyleEnabledForFeature;
      const obj4 = { style: tmp5.labelContainer, children: items1 };
      if (tmp15Result) {
        const obj5 = {
          source: importDefault(useTier0UpsellContent ? tmp2[23] : tmp2[24]),
          style: tmp5.nitroWheel,
          disableColor: true,
        };
        const Icon = tmp(tmp2[22]).Icon;
        tmp15Result = closure_14(Icon, obj5);
      }
      items1 = [tmp15Result];
      const obj6 = { style: tmp5.text, variant: "text-sm/medium", children: tmp8 };
      items1[1] = closure_14(featureName(tmp2[25]).Text, obj6);
      items2 = [closure_15(closure_7, obj4)];
      const obj7 = {
        disabled: loading,
        shrink: true,
        style: tmp5.button,
        size: featureName(tmp2[22]).ButtonSizes.XSMALL,
        onPress,
        text: stringResult,
        color: featureName(tmp2[22]).ButtonColors.GREEN,
        renderIcon() {
          let items;
          let tmpResult;
          if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
            const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: items };
            const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
            items = [closure_3.nitroWheelIcon, loading && closure_3.nitroWheelDisabled];
            tmpResult = authStore2(NitroWheelIcon, obj2);
          } else {
            const items1 = [closure_3.nitroWheelButton];
            let nitroWheelDisabled = loading;
            const NitroWheel = native.NitroWheel;
            if (loading) {
              nitroWheelDisabled = closure_3.nitroWheelDisabled;
            }
            const obj = { style: items1 };
            items1[1] = nitroWheelDisabled;
            tmpResult = authStore2(NitroWheel, obj);
          }
          return tmpResult;
        },
        renderLinearGradient() {
          const obj = {
            style: closure_3.gradient,
            start: ConstantsIOS.HorizontalGradient.START,
            end: ConstantsIOS.HorizontalGradient.END,
            colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR,
          };
          const tmp2 = LinearGradientDefault;
          return authStore2(tmp2, obj);
        },
      };
      const ShinyButton = tmp(tmp2[22]).ShinyButton;
      const intl = tmp(tmp2[10]).intl;
      const string = intl.string;
      const t = tmp(tmp2[10]).t;
      if (useTier0UpsellContent) {
        stringResult = string(t.cM8bbx);
      } else {
        stringResult = string(t["8x0jKT"]);
      }
      items2[1] = closure_14(ShinyButton, obj7);
      return closure_15(closure_7, obj3);
    };
const __initData = {
  code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}",
};
function animationEnterExit(targetHeight, cleanUp) {
  let fn;
  let obj2;
  let closure_0 = cleanUp;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard, "respect-motion-settings", fn) };
  fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = __initData;
  obj2 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationEnterExit.__closure = obj;
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = {
  code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (shouldShow) => {
      let _location;
      let analyticsLocations;
      let closure_4;
      let tmp5;
      let tmp2 = analyticsLocations;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp = _require;
      if (cResult[0] !== shouldShow) {
        shouldShow = shouldShow.shouldShow;
        const tmp8 = _objectWithoutProperties(shouldShow, _location);
        _require = tmp8;
        cResult[0] = shouldShow;
        cResult[1] = tmp8;
        cResult[2] = shouldShow;
        tmp5 = shouldShow;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
      }
      const ref = react.useRef(false);
      analyticsLocations = ref(tmp2[31])().analyticsLocations;
      const tmpResult = tmp(tmp2[32]);
      _location = tmpResult.useAnalyticsContext().location;
      const tmp10 = ref(tmp2[33])(tmp5);
      _objectWithoutProperties = tmp10;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0, arg1) {
            obj = { style: arg1, children: null };
            obj1 = {};
            View = closure_1(analyticsLocations[34]).View;
            merged = Object.assign(shouldShow);
            obj.children = closure_1_14(closure_1_18, obj1);
            return closure_1_14(View, obj);
          }
        }
        cResult[3] = R;
      } else {
        class R {
          constructor(arg0, arg1) {
            obj = { style: arg1, children: null };
            obj1 = {};
            View = closure_1(analyticsLocations[34]).View;
            merged = Object.assign(shouldShow);
            obj.children = closure_1_14(closure_1_18, obj1);
            return closure_1_14(View, obj);
          }
        }
      }
      if (cResult[4] === analyticsLocations) {
        class R {
          constructor(arg0, arg1) {
            obj = { style: arg1, children: null };
            obj1 = {};
            View = closure_1(analyticsLocations[34]).View;
            merged = Object.assign(shouldShow);
            obj.children = closure_1_14(closure_1_18, obj1);
            return closure_1_14(View, obj);
          }
        }
      }
      class N {
        constructor() {
          current = closure_1.current;
          tmp2 = !current;
          tmp = closure_1;
          if (!current) {
            tmp2 = closure_4;
          }
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_1(closure_2[19]);
            tmp6 = AnalyticEvents;
            tmp7 = closure_0;
            featureName = closure_0.featureName;
            tmp8 = closure_0;
            track = tmp5.track;
            PREMIUM_UPSELL_VIEWED = AnalyticEvents.PREMIUM_UPSELL_VIEWED;
            if (closure_0(closure_2[8]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
              tmp14 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
            } else if (tmp8(tmp4[8]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
              tmp13 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.EMOJI_EVERYWHERE_INLINE_UPSELL;
            } else if (tmp8(tmp4[8]).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
              tmp12 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.STICKERS_EVERYWHERE_INLINE_UPSELL;
            } else if (tmp8(tmp4[8]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
              tmp11 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.LARGER_FILE_UPLOAD_INLINE_UPSELL;
            } else if (tmp8(tmp4[8]).EntitlementFeatureNames.APP_ICONS === featureName) {
              tmp10 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.APP_ICON_INLINE_UPSELL;
            } else if (tmp8(tmp4[8]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
              tmp9 = PremiumUpsellTypes;
              STREAM_QUALITY_UPSELL = PremiumUpsellTypes.STREAM_QUALITY_UPSELL;
            }
            obj = { type: null, location: null, location_stack: null, sku_id: null, voice_guild_id: null };
            obj.type = STREAM_QUALITY_UPSELL;
            tmp15 = location;
            obj.location = location;
            tmp16 = analyticsLocations;
            obj.location_stack = analyticsLocations;
            tmp8Result = tmp8(tmp4[9]);
            tmp17 = PremiumSubscriptionSKUs;
            obj.sku_id = tmp8Result.castPremiumSubscriptionAsSkuId(PremiumSubscriptionSKUs.TIER_2);
            tmp18 = closure_8;
            guildId = closure_8.getGuildId();
            tmp20 = null;
            if (guildId == null) {
              guildId = null;
            }
            obj.voice_guild_id = guildId;
            trackResult = track(PREMIUM_UPSELL_VIEWED, obj);
            flag = true;
            tmp.current = true;
          }
          return;
        }
      }
      const items = [ref, _location, analyticsLocations, tmp10, tmp4.featureName];
      cResult[4] = analyticsLocations;
      cResult[5] = _location;
      cResult[6] = tmp4.featureName;
      cResult[7] = tmp10;
      cResult[8] = N;
      cResult[9] = items;
    }
  : (shouldShow) => {
      shouldShow = shouldShow.shouldShow;
      let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
      let analyticsLocations;
      const ref = react.useRef(false);
      analyticsLocations = ref(analyticsLocations[31])().analyticsLocations;
      let obj = merged(analyticsLocations[32]);
      const _location = obj.useAnalyticsContext().location;
      const tmp3 = ref(analyticsLocations[33])(shouldShow);
      let closure_4 = tmp3;
      const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
      const callback = react.useCallback((arg0, style) => {
        let obj2;
        const obj = { style, children: closure_1_14(closure_1_18, obj2) };
        obj2 = {};
        const View = ref(analyticsLocations[34]).View;
        merged = Object.assign(arg0);
        return closure_1_14(View, obj);
      }, []);
      const effect = react.useEffect(() => {
        let guildId;
        let tmp8Result;
        const current = ref.current;
        const tmp2 = !current && closure_4;
        if (tmp2) {
          let STREAM_QUALITY_UPSELL;
          const featureName = merged.featureName;
          const track = AnalyticsUtilsDefault.track;
          const PREMIUM_UPSELL_VIEWED = AnalyticEvents.PREMIUM_UPSELL_VIEWED;
          AnalyticsUtilsDefault;
          if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
          } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.EMOJI_EVERYWHERE_INLINE_UPSELL;
          } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.STICKERS_EVERYWHERE_INLINE_UPSELL;
          } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.LARGER_FILE_UPLOAD_INLINE_UPSELL;
          } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.APP_ICON_INLINE_UPSELL;
          } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            STREAM_QUALITY_UPSELL = unpackModuleId.STREAM_QUALITY_UPSELL;
          }
          const obj = {
            type: STREAM_QUALITY_UPSELL,
            location: _location,
            location_stack: analyticsLocations,
            sku_id: tmp8Result.castPremiumSubscriptionAsSkuId(React4.TIER_2),
            voice_guild_id: guildId,
          };
          tmp8Result = PremiumUtils;
          guildId = RTCConnectionStore.getGuildId();
          if (guildId == null) {
            guildId = null;
          }
          track(PREMIUM_UPSELL_VIEWED, obj);
          ref.current = true;
        }
      }, items);
      let tmp8;
      const tmp7 = ref(analyticsLocations[35]);
      if (tmp3) {
        tmp8 = merged;
      }
      let obj2 = {
        useReducedMotion: false,
        item: tmp8,
        entering: animationEnterExit,
        exiting: animationEnterExit,
        renderItem: callback,
      };
      return closure_14(tmp7, obj2);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default tmp5;
