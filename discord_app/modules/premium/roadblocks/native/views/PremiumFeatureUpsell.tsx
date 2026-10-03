// === Module 9643: PremiumFeatureUpsell ===

// Module 9643 (PremiumFeatureUpsell)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7480 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8313 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;

const require = globalThis.__r;

require = fn;
function getPremiumUpsellLabel(TIER_0, featureName, fn) {
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(TIER_0);
  if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl6 = util.intl;
    const obj2 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl6.format(util.t["tw/SSq"], obj2);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl5 = util.intl;
    const obj3 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl5.format(util.t.gMVjeS, obj3);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl4 = util.intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl4.format(util.t.eontIh, obj4);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl3 = util.intl;
    const obj5 = { maxFileSize: PremiumUtils.getMaxFileSizeForPremiumType(TIER_0), nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl3.format(util.t.zzyLEK, obj5);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl2 = util.intl;
    const obj6 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    return intl2.format(util.t.lyxfbj, obj6);
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl = util.intl;
    const obj7 = { onClick: fn };
    return intl.format(util.t.x2dQxN, obj7);
  }
}
let closure_3 = ["shouldShow"];
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const PremiumConstants = fn(1379);
({ PremiumSubscriptionSKUs: closure_9, PremiumTypes: c10, PremiumUpsellTypes: closure_11 } = PremiumConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const Gradients = fn(6938).Gradients;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4890);
let closure_17 = createStyles.createStyles((arg0) => {
  const obj = { container: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" }, containerShadow: null, nitroWheel: null, labelContainer: null, text: null, nitroWheelButton: null, nitroWheelIcon: null, nitroWheelDisabled: null, button: null, gradient: null };
  const obj3 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj3.shadowColor = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj3.shadowOpacity = 0.6;
  obj.containerShadow = obj3;
  const size = { width: 20, height: 20, marginEnd: nativeDefault.space.PX_4 };
  obj.nitroWheel = size;
  const obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" };
  obj.labelContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.text = { flexShrink: 1, flexWrap: "wrap" };
  obj.nitroWheelButton = { marginStart: -2, width: 20, height: 20 };
  obj.nitroWheelIcon = { marginEnd: 4 };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  const obj4 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.button = { alignSelf: "center", borderRadius: nativeDefault.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((featureName) => {
  const cResult = featureName(useTier0UpsellContent[14]).c(50);
  featureName = featureName.featureName;
  const analyticsLocation = featureName.analyticsLocation;
  ({ showShadow, style } = featureName);
  let containerShadow = undefined === showShadow || showShadow;
  if (cResult[0] !== featureName) {
    const upsellType = tmp(tmp2[15]).getUpsellType(featureName);
    cResult[0] = featureName;
    cResult[1] = upsellType;
    let tmp4 = upsellType;
    let tmpResult = tmp(tmp2[15]);
  } else {
    tmp4 = cResult[1];
  }
  let obj = featureName(useTier0UpsellContent[14]);
  const premiumUpsellConfig = featureName(useTier0UpsellContent[16]).usePremiumUpsellConfig(tmp4);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp7 = closure_17(useTier0UpsellContent);
  closure_3 = tmp7;
  if (cResult[2] !== featureName) {
    let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(tmp2[17]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
    if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(tmp2[18]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
      const tmpResult7 = tmp(tmp2[18]);
    }
    cResult[2] = featureName;
    cResult[3] = mobileEmojiPickerUpsellRestyleEnabledForFeature;
    let tmp8 = mobileEmojiPickerUpsellRestyleEnabledForFeature;
    const tmpResult6 = tmp(tmp2[17]);
  } else {
    tmp8 = cResult[3];
  }
  closure_4 = tmp8;
  const tmp11 = useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2;
  if (cResult[4] === analyticsLocation) {
    if (cResult[5] === featureName) {
      let tmp12 = cResult[6];
    }
    if (cResult[7] === featureName) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp12) {
          let tmp13 = cResult[10];
        }
        if (cResult[11] !== featureName) {
          const analyticsPage = tmp(tmp2[15]).getAnalyticsPage(featureName);
          cResult[11] = featureName;
          cResult[12] = analyticsPage;
          let tmp15 = analyticsPage;
          const tmpResult8 = tmp(tmp2[15]);
        } else {
          tmp15 = cResult[12];
        }
        const tmp18 = analyticsLocation(tmp2[21])(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, tmp15);
        const loading = tmp18.loading;
        const onPress = tmp18.onPress;
        if (containerShadow) {
          containerShadow = tmp7.containerShadow;
        }
        if (cResult[13] === style) {
          if (cResult[14] === tmp7.container) {
            if (cResult[15] === containerShadow) {
              let tmp19 = cResult[16];
            }
            if (cResult[17] === tmp7.nitroWheel) {
              if (cResult[18] === tmp8) {
                if (cResult[19] === useTier0UpsellContent) {
                  let tmp20 = cResult[20];
                }
                if (cResult[21] === tmp13) {
                  if (cResult[22] === tmp7.text) {
                    let tmp25 = cResult[23];
                  }
                  if (cResult[24] === tmp7.labelContainer) {
                    if (cResult[25] === tmp20) {
                      if (cResult[26] === tmp25) {
                        let tmp27 = cResult[27];
                      }
                      if (cResult[28] !== useTier0UpsellContent) {
                        const intl = tmp(tmp2[10]).intl;
                        const string = intl.string;
                        let cM8bbx = tmp(tmp2[10]).t;
                        if (useTier0UpsellContent) {
                          cM8bbx = cM8bbx.cM8bbx;
                          let stringResult = string(cM8bbx);
                        } else {
                          stringResult = string(cM8bbx["8x0jKT"]);
                        }
                        cResult[28] = useTier0UpsellContent;
                        cResult[29] = stringResult;
                      } else {
                        if (cResult[30] === loading) {
                          if (cResult[31] === tmp7.nitroWheelButton) {
                            if (cResult[32] === tmp7.nitroWheelDisabled) {
                              if (cResult[33] === tmp7.nitroWheelIcon) {
                                if (cResult[34] === tmp8) {
                                  let tmp33 = cResult[35];
                                }
                                if (cResult[36] === tmp7.gradient) {
                                  if (cResult[37] === useTier0UpsellContent) {
                                    let tmp35 = cResult[38];
                                  }
                                  if (cResult[39] === loading) {
                                    if (cResult[40] === onPress) {
                                      if (cResult[41] === tmp7.button) {
                                        if (cResult[42] === tmp30) {
                                          if (cResult[43] === tmp33) {
                                            if (cResult[44] === tmp35) {
                                              let tmp36 = cResult[45];
                                            }
                                            if (cResult[46] === tmp27) {
                                              if (cResult[47] === tmp36) {
                                                if (cResult[48] === tmp19) {
                                                  let tmp38 = cResult[49];
                                                }
                                                return tmp38;
                                              }
                                            }
                                            class D {
                                              constructor() {
                                                tmp = jsx;
                                                obj = { style: closure_3.gradient, start: null, end: null, colors: null };
                                                tmp2 = closure_1(closure_2[27]);
                                                obj.start = closure_0(closure_2[28]).HorizontalGradient.START;
                                                obj.end = closure_0(closure_2[28]).HorizontalGradient.END;
                                                tmp3 = Gradients;
                                                obj.colors = useTier0UpsellContent ? tmp3.PREMIUM_TIER_0 : tmp3.PREMIUM_TIER_2_TRI_COLOR;
                                                return tmp(tmp2, obj);
                                              }
                                            }
                                            let obj2 = { style: tmp19, children: null };
                                            let items = [tmp27, tmp36];
                                            obj2.children = items;
                                            const tmp40 = closure_15(closure_7, obj2);
                                            cResult[46] = tmp27;
                                            cResult[47] = tmp36;
                                            cResult[48] = tmp19;
                                            cResult[49] = tmp40;
                                            tmp38 = tmp40;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class D {
                                    constructor() {
                                      tmp = jsx;
                                      obj = { style: closure_3.gradient, start: null, end: null, colors: null };
                                      tmp2 = closure_1(closure_2[27]);
                                      obj.start = closure_0(closure_2[28]).HorizontalGradient.START;
                                      obj.end = closure_0(closure_2[28]).HorizontalGradient.END;
                                      tmp3 = Gradients;
                                      obj.colors = useTier0UpsellContent ? tmp3.PREMIUM_TIER_0 : tmp3.PREMIUM_TIER_2_TRI_COLOR;
                                      return tmp(tmp2, obj);
                                    }
                                  }
                                  const obj3 = { disabled: loading, shrink: true, style: tmp7.button, size: tmp(tmp2[22]).ButtonSizes.XSMALL, onPress, text: tmp30, color: tmp(tmp2[22]).ButtonColors.GREEN, renderIcon: tmp33, renderLinearGradient: tmp35 };
                                  const tmp37 = closure_14(tmp(tmp2[22]).ShinyButton, obj3);
                                  cResult[39] = loading;
                                  cResult[40] = onPress;
                                  cResult[41] = tmp7.button;
                                  cResult[42] = tmp30;
                                  cResult[43] = tmp33;
                                  cResult[44] = tmp35;
                                  cResult[45] = tmp37;
                                  tmp36 = tmp37;
                                }
                                class D {
                                  constructor() {
                                    tmp = jsx;
                                    obj = { style: closure_3.gradient, start: null, end: null, colors: null };
                                    tmp2 = closure_1(closure_2[27]);
                                    obj.start = closure_0(closure_2[28]).HorizontalGradient.START;
                                    obj.end = closure_0(closure_2[28]).HorizontalGradient.END;
                                    tmp3 = Gradients;
                                    obj.colors = useTier0UpsellContent ? tmp3.PREMIUM_TIER_0 : tmp3.PREMIUM_TIER_2_TRI_COLOR;
                                    return tmp(tmp2, obj);
                                  }
                                }
                                cResult[36] = tmp7.gradient;
                                cResult[37] = useTier0UpsellContent;
                                cResult[38] = D;
                                tmp35 = D;
                              }
                            }
                          }
                        }
                        cResult[30] = loading;
                        cResult[31] = tmp7.nitroWheelButton;
                        cResult[32] = tmp7.nitroWheelDisabled;
                        cResult[33] = tmp7.nitroWheelIcon;
                        cResult[34] = tmp8;
                        cResult[35] = tmp34;
                        tmp33 = tmp34;
                      }
                    }
                  }
                  const obj4 = { style: tmp7.labelContainer, children: null };
                  let items1 = [tmp20, tmp25];
                  obj4.children = items1;
                  const tmp29 = closure_15(closure_7, obj4);
                  cResult[24] = tmp7.labelContainer;
                  cResult[25] = tmp20;
                  cResult[26] = tmp25;
                  cResult[27] = tmp29;
                  tmp27 = tmp29;
                }
                const obj5 = { style: tmp7.text, variant: "text-sm/medium", children: tmp13 };
                const tmp26 = closure_14(tmp(tmp2[25]).Text, obj5);
                cResult[21] = tmp13;
                cResult[22] = tmp7.text;
                cResult[23] = tmp26;
                tmp25 = tmp26;
              }
            }
            if (tmp8) {
              cResult[17] = tmp7.nitroWheel;
              class D {
                constructor() {
                  tmp = jsx;
                  obj = { style: closure_3.gradient, start: null, end: null, colors: null };
                  tmp2 = closure_1(closure_2[27]);
                  obj.start = closure_0(closure_2[28]).HorizontalGradient.START;
                  obj.end = closure_0(closure_2[28]).HorizontalGradient.END;
                  tmp3 = Gradients;
                  obj.colors = useTier0UpsellContent ? tmp3.PREMIUM_TIER_0 : tmp3.PREMIUM_TIER_2_TRI_COLOR;
                  return tmp(tmp2, obj);
                }
              }
              cResult[18] = tmp8;
              cResult[19] = useTier0UpsellContent;
              cResult[20] = tmp21;
              tmp20 = tmp21;
            } else {
              const obj6 = { source: null, style: null, disableColor: true };
              class D {
                constructor() {
                  tmp = jsx;
                  obj = { style: closure_3.gradient, start: null, end: null, colors: null };
                  tmp2 = closure_1(closure_2[27]);
                  obj.start = closure_0(closure_2[28]).HorizontalGradient.START;
                  obj.end = closure_0(closure_2[28]).HorizontalGradient.END;
                  tmp3 = Gradients;
                  obj.colors = useTier0UpsellContent ? tmp3.PREMIUM_TIER_0 : tmp3.PREMIUM_TIER_2_TRI_COLOR;
                  return tmp(tmp2, obj);
                }
              }
              obj6.source = tmp17(useTier0UpsellContent ? tmp2[23] : tmp2[24]);
              obj6.style = tmp7.nitroWheel;
              closure_14(tmp23, obj6);
            }
          }
        }
        const items2 = [tmp7.container, containerShadow, style];
        cResult[13] = style;
        cResult[14] = tmp7.container;
        cResult[15] = containerShadow;
        cResult[16] = items2;
        tmp19 = items2;
        tmp17 = analyticsLocation;
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
    let tmp3 = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
    if (tmp3) {
      tmp3 = null != analyticsLocation;
    }
    if (tmp3) {
      const obj2 = { location: analyticsLocation };
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj2);
    }
    openPremiumUpsellActionSheetDefault(featureName);
  };
  cResult[4] = analyticsLocation;
  cResult[5] = featureName;
  cResult[6] = fn;
  tmp12 = fn;
  const tmpResult5 = featureName(useTier0UpsellContent[16]);
}) : ((featureName) => {
  featureName = featureName.featureName;
  ({ analyticsLocation: importDefault, showShadow } = featureName);
  if (showShadow === undefined) {
    showShadow = true;
  }
  let useTier0UpsellContent;
  let loading;
  let obj = featureName(useTier0UpsellContent[16]);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(featureName(useTier0UpsellContent[15]).getUpsellType(featureName));
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = closure_17(useTier0UpsellContent);
  closure_3 = tmp4;
  let obj2 = featureName(useTier0UpsellContent[15]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = featureName(useTier0UpsellContent[17]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(tmp2[18]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
    let tmpResult = tmp(tmp2[18]);
  }
  const obj3 = featureName(useTier0UpsellContent[17]);
  const tmp7 = getPremiumUpsellLabel(useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2, featureName, () => {
    let tmp3 = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
    if (tmp3) {
      tmp3 = null != _location;
    }
    if (tmp3) {
      const obj2 = { location: _location };
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj2);
    }
    openPremiumUpsellActionSheetDefault(featureName);
  });
  const tmp9 = require("usePremiumFeatureUpsellGetNitro");
  const tmp9Result = tmp9(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, featureName(useTier0UpsellContent[15]).getAnalyticsPage(featureName));
  loading = tmp9Result.loading;
  let items = [tmp4.container, , ];
  if (showShadow) {
    showShadow = tmp4.containerShadow;
  }
  const obj4 = { style: items, children: null };
  items[1] = showShadow;
  items[2] = featureName.style;
  const obj5 = { style: tmp4.labelContainer, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    let items1 = [tmp13, ];
    const obj6 = { style: tmp4.text, variant: "text-sm/medium", children: tmp7 };
    items1[1] = closure_14(tmp(tmp2[25]).Text, obj6);
    obj5.children = items1;
    const items2 = [closure_15(closure_7, obj5), ];
    const obj7 = { disabled: loading, shrink: true, style: tmp4.button, size: tmp(tmp2[22]).ButtonSizes.XSMALL, onPress: tmp9Result.onPress, text: null, color: null, renderIcon: null, renderLinearGradient: null };
    const intl = tmp(tmp2[10]).intl;
    const string = intl.string;
    const t = tmp(tmp2[10]).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj7.text = stringResult;
    obj7.color = tmp(tmp2[22]).ButtonColors.GREEN;
    obj7.renderIcon = function renderIcon() {
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: null };
        const items = [closure_3.nitroWheelIcon, ];
        let nitroWheelDisabled2 = loading;
        if (loading) {
          nitroWheelDisabled2 = closure_3.nitroWheelDisabled;
        }
        items[1] = nitroWheelDisabled2;
        obj2.style = items;
        let tmpResult = state(NitroWheelIcon.NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_3.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_3.nitroWheelDisabled;
        }
        const obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj.style = items1;
        tmpResult = state(native.NitroWheel, obj);
      }
      return tmpResult;
    };
    obj7.renderLinearGradient = function renderLinearGradient() {
      const obj = { style: closure_3.gradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR };
      return state(LinearGradientDefault, obj);
    };
    items2[1] = closure_14(tmp(tmp2[22]).ShinyButton, obj7);
    obj4.children = items2;
    return closure_15(closure_7, obj4);
  } else {
    const obj8 = { source: importDefault(useTier0UpsellContent ? tmp2[23] : tmp2[24]), style: tmp4.nitroWheel, disableColor: true };
    closure_14(tmp(tmp2[22]).Icon, obj8);
  }
  const tmpResult2 = featureName(useTier0UpsellContent[15]);
});
const __initData = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(value, cleanUp) {
  closure_0 = cleanUp;
  const obj = { opacity: null };
  const fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = __initData;
  obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
  return obj;
}
animationEnterExit.__closure = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
ReactCompilerGating = fn(558);
let obj3 = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shouldShow) => {
  const cResult = require("c").c(12);
  if (cResult[0] !== shouldShow) {
    shouldShow = shouldShow.shouldShow;
    const tmp8 = _objectWithoutProperties(shouldShow, _location);
    _require = tmp8;
    cResult[0] = shouldShow;
    cResult[1] = tmp8;
    cResult[2] = shouldShow;
    let tmp5 = shouldShow;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const ref = noop.useRef(false);
  analyticsLocations = ref(tmp2[31])().analyticsLocations;
  let obj = require("c");
  _location = require("analytics").useAnalyticsContext().location;
  const tmp10 = ref(analyticsLocations[33])(tmp5);
  _objectWithoutProperties = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0, arg1) {
        obj = { style: arg1, children: null };
        obj1 = {};
        merged = Object.assign(shouldShow);
        obj.children = closure_1_14(closure_1_18, obj1);
        return closure_1_14(closure_1(analyticsLocations[34]).View, obj);
      }
    }
    cResult[3] = R;
  } else {
    class R {
      constructor(arg0, arg1) {
        obj = { style: arg1, children: null };
        obj1 = {};
        merged = Object.assign(shouldShow);
        obj.children = closure_1_14(closure_1_18, obj1);
        return closure_1_14(closure_1(analyticsLocations[34]).View, obj);
      }
    }
  }
  if (cResult[4] === analyticsLocations) {
    class R {
      constructor(arg0, arg1) {
        obj = { style: arg1, children: null };
        obj1 = {};
        merged = Object.assign(shouldShow);
        obj.children = closure_1_14(closure_1_18, obj1);
        return closure_1_14(closure_1(analyticsLocations[34]).View, obj);
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
        obj = closure_1(closure_2[19]);
        tmp5 = AnalyticEvents;
        tmp6 = closure_0;
        featureName = closure_0.featureName;
        tmp7 = closure_0;
        if (closure_0(closure_2[8]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
          tmp13 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
        } else if (tmp7(tmp4[8]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
          tmp12 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.EMOJI_EVERYWHERE_INLINE_UPSELL;
        } else if (tmp7(tmp4[8]).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
          tmp11 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.STICKERS_EVERYWHERE_INLINE_UPSELL;
        } else if (tmp7(tmp4[8]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          tmp10 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp7(tmp4[8]).EntitlementFeatureNames.APP_ICONS === featureName) {
          tmp9 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.APP_ICON_INLINE_UPSELL;
        } else if (tmp7(tmp4[8]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
          tmp8 = PremiumUpsellTypes;
          STREAM_QUALITY_UPSELL = PremiumUpsellTypes.STREAM_QUALITY_UPSELL;
        }
        obj1 = { type: null, location: null, location_stack: null, sku_id: null, voice_guild_id: null };
        obj1.type = STREAM_QUALITY_UPSELL;
        tmp14 = location;
        obj1.location = location;
        tmp15 = analyticsLocations;
        obj1.location_stack = analyticsLocations;
        tmp7Result = tmp7(tmp4[9]);
        tmp16 = PremiumSubscriptionSKUs;
        obj1.sku_id = tmp7Result.castPremiumSubscriptionAsSkuId(PremiumSubscriptionSKUs.TIER_2);
        tmp17 = closure_8;
        guildId = closure_8.getGuildId();
        tmp19 = null;
        if (guildId == null) {
          guildId = null;
        }
        obj1.voice_guild_id = guildId;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
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
  const tmpResult = require("analytics");
}) : ((shouldShow) => {
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  const ref = noop.useRef(false);
  analyticsLocations = ref(analyticsLocations[31])().analyticsLocations;
  const _location = merged(analyticsLocations[32]).useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[33])(shouldShow.shouldShow);
  closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = noop.useCallback((arg0, style) => {
    const obj = { style, children: null };
    merged = Object.assign(arg0);
    obj.children = closure_1_14(closure_1_18, {});
    return closure_1_14(ref(analyticsLocations[34]).View, obj);
  }, []);
  const effect = noop.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      const featureName = merged.featureName;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let STREAM_QUALITY_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.STICKERS_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
        STREAM_QUALITY_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
        STREAM_QUALITY_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
        STREAM_QUALITY_UPSELL = constants.STREAM_QUALITY_UPSELL;
      }
      const obj2 = { type: STREAM_QUALITY_UPSELL, location: _location, location_stack: analyticsLocations, sku_id: null, voice_guild_id: null };
      const obj = AnalyticsUtilsDefault;
      obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(options.TIER_2);
      let guildId = RTCConnectionStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      obj2.voice_guild_id = guildId;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
      const tmp7Result = PremiumUtils;
    }
  }, items);
  let tmp8;
  let obj = merged(analyticsLocations[32]);
  if (tmp3) {
    tmp8 = merged;
  }
  return closure_14(ref(analyticsLocations[35]), { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback });
});