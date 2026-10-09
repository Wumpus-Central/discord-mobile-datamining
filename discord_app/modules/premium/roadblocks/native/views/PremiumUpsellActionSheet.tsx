// === Module 9251: PremiumUpsellActionSheet ===

// Module 9251 (PremiumUpsellActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import useToken from "useToken" /* 4779 */;
import ChatInputUtils from "ChatInputUtils" /* 4946 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import FastImageDefault from "FastImage" /* 6163 */;
import FileUtils from "FileUtils" /* 7746 */;
import UploadLimits from "UploadLimits" /* 7761 */;
import APNGPlayer from "APNGPlayer" /* 8992 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 9250 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9253 */;
import MobileEmojiPickerUpsellRestyleExperiment from "MobileEmojiPickerUpsellRestyleExperiment" /* 9254 */;
import ReactionsSpotIllustration from "ReactionsSpotIllustration" /* 9255 */;
import StickersSpotIllustration from "StickersSpotIllustration" /* 9259 */;
import _modDef9263 from "module_9263" /* 9263 */;
import _modDef9264 from "module_9264" /* 9264 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 9265 */;
import NitroScheduleMessageSpotIllustration from "NitroScheduleMessageSpotIllustration" /* 12834 */;
import _modDef12838 from "module_12838" /* 12838 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1392);
({ PremiumSubscriptionSKUs: c10, PremiumTypes: closure_11, PremiumUpsellTypes: closure_12 } = PremiumConstants);
const Constants = fn(1085);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = fn(5211).ApplicationStreamFPS;
const premiumMax = fn(9252).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 }, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: null, textContainer: null, buttonContainer: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackgroundContainer = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackground = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
let obj7 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_21 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePageConfig(arg0) {
  const cResult = c.c(59);
  ({ premiumType, guildId, featureName, theme } = arg0);
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  let str = "dark";
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  if (cResult[0] === featureName) {
    if (cResult[1] === guildId) {
      if (cResult[2] === str) {
        if (cResult[3] === premiumType) {
          const _HermesInternal = HermesInternal;
          const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png";
          if (cResult[30] !== combined) {
            const obj4 = { uri: combined };
            cResult[30] = combined;
            cResult[31] = obj4;
            let tmp59 = obj4;
          } else {
            tmp59 = cResult[31];
          }
          if (cResult[32] === cResult[4]) {
            if (cResult[33] === tmp8) {
              if (cResult[34] === tmp59) {
                if (cResult[35] === tmp11) {
                  let tmp60 = cResult[36];
                }
                const _Symbol2 = Symbol;
                if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
                  const intl10 = util.intl;
                  obj5.title = intl10.string(util.t.p0I2Bk);
                  const intl11 = util.intl;
                  obj5.description = intl11.string(util.t.jBqF2k);
                  obj5.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
                  obj5.upsellType = constants.CLIENT_THEMES_UPSELL;
                  obj5.image = _modDef9263;
                  cResult[37] = obj5;
                  let tmp63 = obj5;
                } else {
                  tmp63 = cResult[37];
                }
                const _Symbol3 = Symbol;
                if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
                  const intl12 = util.intl;
                  obj6.title = intl12.string(util.t.TYFwcy);
                  const intl13 = util.intl;
                  obj6.description = intl13.string(util.t.HDt8ip);
                  obj6.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
                  obj6.upsellType = constants.APP_ICON_UPSELL;
                  obj6.image = _modDef9264;
                  cResult[38] = obj6;
                  let tmp66 = obj6;
                } else {
                  tmp66 = cResult[38];
                }
                const _Symbol4 = Symbol;
                if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl14 = util.intl;
                  const obj7 = { premiumMax };
                  const formatToPlainStringResult = intl14.formatToPlainString(util.t.GNoaxo, obj7);
                  cResult[39] = formatToPlainStringResult;
                  let tmp69 = formatToPlainStringResult;
                } else {
                  tmp69 = cResult[39];
                }
                const _Symbol5 = Symbol;
                if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { children: null };
                  const intl15 = util.intl;
                  const obj9 = {
                    premiumMax,
                    onClick() {
                                      ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                      const result = ScheduledMessagesUtils.showScheduledMessagesModal();
                                    }
                  };
                  obj8.children = intl15.format(util.t["1kFyto"], obj9);
                  const tmp76 = collapsedCategories(closure_1_19, obj8);
                  cResult[40] = tmp76;
                  let tmp72 = tmp76;
                } else {
                  tmp72 = cResult[40];
                }
                const _Symbol6 = Symbol;
                if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj10 = { title: tmp69, showBetaBadge: true, description: tmp72, analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, illustration: collapsedCategories(NitroScheduleMessageSpotIllustration.NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false }) };
                  cResult[41] = obj10;
                  let tmp77 = obj10;
                } else {
                  tmp77 = cResult[41];
                }
                const _Symbol7 = Symbol;
                if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl16 = util.intl;
                  const stringResult = intl16.string(util.t.ETZQx5);
                  const intl17 = util.intl;
                  const obj11 = { fps: ApplicationStreamFPS.FPS_60 };
                  const formatToPlainStringResult1 = intl17.formatToPlainString(util.t["4nlpei"], obj11);
                  cResult[42] = stringResult;
                  cResult[43] = formatToPlainStringResult1;
                  let tmp82 = formatToPlainStringResult1;
                  let tmp81 = stringResult;
                } else {
                  tmp81 = cResult[42];
                  tmp82 = cResult[43];
                }
                if (cResult[44] === token1) {
                  if (cResult[45] === token) {
                    let tmp86 = cResult[46];
                  }
                  if (cResult[47] === tmp9) {
                    if (cResult[48] === tmp10) {
                      if (cResult[49] === tmp60) {
                        if (cResult[50] === tmp86) {
                          if (cResult[51] === tmp12) {
                            if (cResult[52] === tmp13) {
                              if (cResult[53] === tmp14) {
                                if (cResult[54] === tmp15) {
                                  if (cResult[55] === tmp16) {
                                    if (cResult[56] === tmp17) {
                                      if (cResult[57] === tmp18) {
                                        let tmp89 = cResult[58];
                                      }
                                      return tmp89;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj12 = {};
                  obj12[tmp12] = tmp13;
                  obj12[tmp14] = tmp15;
                  obj12[tmp16] = tmp17;
                  obj12[tmp18] = tmp9;
                  obj12[tmp10] = tmp60;
                  obj12[EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES] = tmp63;
                  obj12[EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS] = tmp66;
                  obj12[EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp77;
                  obj12[EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp86;
                  cResult[47] = tmp9;
                  cResult[48] = tmp10;
                  cResult[49] = tmp60;
                  cResult[50] = tmp86;
                  cResult[51] = tmp12;
                  cResult[52] = tmp13;
                  cResult[53] = tmp14;
                  cResult[54] = tmp15;
                  cResult[55] = tmp16;
                  cResult[56] = tmp17;
                  cResult[57] = tmp18;
                  cResult[58] = obj12;
                  tmp89 = obj12;
                }
                const obj13 = { title: tmp81, description: tmp82, analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: _modDef12838, imageGradientBackground: null };
                const obj14 = { colors: null, start: null, end: null };
                const items = [token, token1];
                obj14.colors = items;
                obj14.start = ConstantsIOS.HorizontalGradient.START;
                obj14.end = ConstantsIOS.HorizontalGradient.END;
                obj13.imageGradientBackground = obj14;
                cResult[44] = token1;
                cResult[45] = token;
                cResult[46] = obj13;
                tmp86 = obj13;
              }
            }
          }
          const obj15 = { title: cResult[5], description: cResult[8], analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: tmp59, illustration: cResult[4] };
          cResult[32] = cResult[4];
          cResult[33] = cResult[5];
          cResult[34] = tmp59;
          cResult[35] = cResult[8];
          cResult[36] = obj15;
          tmp60 = obj15;
        }
      }
    }
  }
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmpResult5 = UploadLimits;
    effectiveUploadLimit = tmpResult5.getEffectiveUploadLimit(FileUtils.maxFileSize(guildId));
    const tmpResult6 = FileUtils;
  }
  if (cResult[16] !== featureName) {
    let tmp22;
    if (tmpResult7.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
      tmp22 = collapsedCategories(ReactionsSpotIllustration.ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
    }
    cResult[16] = featureName;
    cResult[17] = tmp22;
    let tmp21 = tmp22;
    tmpResult7 = MobileEmojiPickerUpsellRestyleExperiment;
  } else {
    tmp21 = cResult[17];
  }
  const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  const obj16 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = util.intl;
  obj16.title = intl.string(util.t.jGDYF0);
  const intl2 = util.intl;
  obj16.description = intl2.formatToPlainString(util.t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj16.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj16.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  const tmpResult = PremiumUtils;
  obj16.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  const EMOJIS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  const obj18 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl3 = util.intl;
  obj18.title = intl3.string(util.t.zY5PPb);
  const intl4 = util.intl;
  obj18.description = intl4.formatToPlainString(util.t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj18.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj18.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj17 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj18.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj18.illustration = tmp21;
  const STICKERS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = util.intl;
    const stringResult1 = intl5.string(util.t.Eukdgl);
    const intl6 = util.intl;
    const stringResult2 = intl6.string(util.t.sMmd7s);
    cResult[18] = stringResult1;
    cResult[19] = stringResult2;
    let tmp27 = stringResult2;
    let tmp26 = stringResult1;
  } else {
    tmp26 = cResult[18];
    tmp27 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj20 = { title: tmp26, description: tmp27, analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: collapsedCategories(StickersSpotIllustration.StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
    cResult[20] = obj20;
    let tmp30 = obj20;
  } else {
    tmp30 = cResult[20];
  }
  const INCREASED_FILE_UPLOAD_SIZE = EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = util.intl;
    const stringResult3 = intl7.string(util.t["G+pngo"]);
    cResult[21] = stringResult3;
    let tmp32 = stringResult3;
  } else {
    tmp32 = cResult[21];
  }
  const obj19 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  let result = FileUtils.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  if (cResult[22] !== result) {
    const obj21 = { children: result };
    const tmp38 = collapsedCategories(closure_1_19, obj21);
    cResult[22] = result;
    cResult[23] = tmp38;
    let tmp35 = tmp38;
  } else {
    tmp35 = cResult[23];
  }
  const combined1 = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
  if (cResult[24] !== combined1) {
    const obj22 = { uri: combined1 };
    cResult[24] = combined1;
    cResult[25] = obj22;
    let tmp40 = obj22;
  } else {
    tmp40 = cResult[25];
  }
  if (cResult[26] === tmp35) {
    if (cResult[27] === tmp40) {
      let tmp41 = cResult[28];
    }
    const ANIMATED_EMOJIS = EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS;
    const _Symbol = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = util.intl;
      const stringResult4 = intl8.string(util.t.SI7R9I);
      cResult[29] = stringResult4;
      let tmp42 = stringResult4;
    } else {
      tmp42 = cResult[29];
    }
    const intl9 = util.intl;
    const obj23 = { nitroTierName: premiumTypeDisplayName };
    const formatToPlainStringResult2 = intl9.formatToPlainString(util.t.uGkSY2, obj23);
    cResult[0] = featureName;
    cResult[1] = guildId;
    cResult[2] = str;
    cResult[3] = premiumType;
    cResult[4] = tmp21;
    cResult[5] = tmp42;
    cResult[6] = tmp41;
    cResult[7] = ANIMATED_EMOJIS;
    cResult[8] = formatToPlainStringResult2;
    cResult[9] = SOUNDBOARD_EVERYWHERE;
    cResult[10] = obj16;
    cResult[11] = EMOJIS_EVERYWHERE;
    cResult[12] = obj18;
    cResult[13] = STICKERS_EVERYWHERE;
    cResult[14] = tmp30;
    cResult[15] = INCREASED_FILE_UPLOAD_SIZE;
  }
  const obj24 = { title: tmp32, description: tmp35, analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: tmp40 };
  cResult[26] = tmp35;
  cResult[27] = tmp40;
  cResult[28] = obj24;
  tmp41 = obj24;
  const tmpResult8 = FileUtils;
}) : (function usePageConfig(arg0) {
  ({ guildId, featureName } = arg0);
  ({ premiumType, theme } = arg0);
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let str = "dark";
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmpResult5 = UploadLimits;
    effectiveUploadLimit = tmpResult5.getEffectiveUploadLimit(FileUtils.maxFileSize(guildId));
    const tmpResult6 = FileUtils;
  }
  const tmpResult = PremiumUtils;
  let tmp8;
  if (tmpResult7.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp8 = collapsedCategories(ReactionsSpotIllustration.ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.jGDYF0);
  const intl2 = util.intl;
  obj4.description = intl2.formatToPlainString(util.t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj4.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj4.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  tmpResult7 = MobileEmojiPickerUpsellRestyleExperiment;
  obj4.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl3 = util.intl;
  obj6.title = intl3.string(util.t.zY5PPb);
  const intl4 = util.intl;
  obj6.description = intl4.formatToPlainString(util.t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj6.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj6.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj5 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj6.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj6.illustration = tmp8;
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = util.intl;
  obj8.title = intl5.string(util.t.Eukdgl);
  const intl6 = util.intl;
  obj8.description = intl6.string(util.t.sMmd7s);
  obj8.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj8.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj8.illustration = collapsedCategories(StickersSpotIllustration.StickersSpotIllustration, { width: 235, height: 132, accessible: false });
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl7 = util.intl;
  obj9.title = intl7.string(util.t["G+pngo"]);
  const obj10 = { children: null };
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj10.children = FileUtils.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  obj9.description = collapsedCategories(closure_1_19, obj10);
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj9.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const tmpResult8 = FileUtils;
  obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj9;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl8 = util.intl;
  obj12.title = intl8.string(util.t.SI7R9I);
  const intl9 = util.intl;
  obj12.description = intl9.formatToPlainString(util.t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj12.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj12.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj11 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj12.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj12.illustration = tmp8;
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = util.intl;
  obj14.title = intl10.string(util.t.p0I2Bk);
  const intl11 = util.intl;
  obj14.description = intl11.string(util.t.jBqF2k);
  obj14.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj14.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj14.image = _modDef9263;
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES] = obj14;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = util.intl;
  obj15.title = intl12.string(util.t.TYFwcy);
  const intl13 = util.intl;
  obj15.description = intl13.string(util.t.HDt8ip);
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj15.upsellType = constants.APP_ICON_UPSELL;
  obj15.image = _modDef9264;
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS] = obj15;
  const obj16 = { title: null, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl14 = util.intl;
  obj16.title = intl14.formatToPlainString(util.t.GNoaxo, { premiumMax });
  const obj18 = { children: null };
  const intl15 = util.intl;
  obj18.children = intl15.format(util.t["1kFyto"], {
    premiumMax,
    onClick() {
      ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const result = ScheduledMessagesUtils.showScheduledMessagesModal();
    }
  });
  obj16.description = collapsedCategories(closure_1_19, obj18);
  obj16.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj16.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj16.illustration = collapsedCategories(NitroScheduleMessageSpotIllustration.NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false });
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj16;
  const obj20 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl16 = util.intl;
  obj20.title = intl16.string(util.t.ETZQx5);
  const intl17 = util.intl;
  obj20.description = intl17.formatToPlainString(util.t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj20.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj20.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj20.image = _modDef12838;
  const obj22 = { colors: null, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END };
  const items = [token, token1];
  obj22.colors = items;
  obj20.imageGradientBackground = obj22;
  obj3[EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj20;
  return obj3;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellImage(arg0) {
  const cResult = c.c(7);
  ({ image, style, useReducedMotion } = arg0);
  if (obj2.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        if (cResult[0] === image.uri) {
          if (cResult[1] === style) {
            let tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj3 = { url: image.uri, style, autoplay: true };
        const tmp7 = collapsedCategories(APNGPlayer.APNGPlayer, obj3);
        cResult[0] = image.uri;
        cResult[1] = style;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
    }
  }
  if (cResult[3] === image) {
    if (cResult[4] === style) {
      if (cResult[5] === tmp8) {
        let tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const tmp10 = collapsedCategories(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  cResult[3] = image;
  cResult[4] = style;
  cResult[5] = !useReducedMotion;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  obj2 = PlatformUtils;
}) : (function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        let tmp5 = collapsedCategories(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  tmp5 = collapsedCategories(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  obj = PlatformUtils;
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellHero(arg0) {
  const cResult = c.c(27);
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    if (cResult[0] === pageConfig.illustration) {
    }
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    const tmp26 = collapsedCategories(View, obj2);
    pageConfig = pageConfig.illustration;
    cResult[0] = pageConfig;
    styles = styles.hero;
    cResult[1] = styles;
    cResult[2] = tmp26;
  } else if (null == pageConfig.image) {
    return null;
  } else {
    if (null == pageConfig.imageGradientBackground) {
      if (cResult[20] === styles.hero) {
        if (cResult[21] === styles.image) {
          let tmp3 = cResult[22];
        }
        if (cResult[23] === pageConfig.image) {
          if (cResult[24] === tmp3) {
          }
        }
        const obj3 = { image: pageConfig.image, style: tmp3, useReducedMotion };
        const tmp7 = collapsedCategories(closure_23, obj3);
        cResult[23] = pageConfig.image;
        cResult[24] = tmp3;
        cResult[25] = useReducedMotion;
        cResult[26] = tmp7;
      }
      const items = [, ];
      ({ hero: arr[0], image: arr[1] } = styles);
      cResult[20] = styles.hero;
      cResult[21] = styles.image;
      cResult[22] = items;
      tmp3 = items;
    }
    if (cResult[3] === styles.hero) {
      if (cResult[4] === styles.image) {
        if (cResult[5] === styles.imageInGradientBackground) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === pageConfig.image) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === useReducedMotion) {
              let tmp9 = cResult[10];
            }
            if (cResult[11] === pageConfig.imageGradientBackground.colors) {
              if (cResult[12] === pageConfig.imageGradientBackground.end) {
                if (cResult[13] === pageConfig.imageGradientBackground.start) {
                  if (cResult[14] === styles.imageGradientBackground) {
                    if (cResult[15] === tmp9) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === styles.imageGradientBackgroundContainer) {
                    }
                    const obj4 = { style: styles.imageGradientBackgroundContainer, children: tmp13 };
                    const tmp20 = collapsedCategories(View, obj4);
                    cResult[17] = styles.imageGradientBackgroundContainer;
                    cResult[18] = tmp13;
                    cResult[19] = tmp20;
                  }
                }
              }
            }
            const obj5 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: tmp9 };
            const tmp16 = collapsedCategories(LinearGradientDefault, obj5);
            cResult[11] = pageConfig.imageGradientBackground.colors;
            cResult[12] = pageConfig.imageGradientBackground.end;
            cResult[13] = pageConfig.imageGradientBackground.start;
            cResult[14] = styles.imageGradientBackground;
            cResult[15] = tmp9;
            cResult[16] = tmp16;
            tmp13 = tmp16;
          }
        }
        const obj6 = { image: pageConfig.image, style: tmp8, useReducedMotion };
        const tmp12 = collapsedCategories(closure_23, obj6);
        cResult[7] = pageConfig.image;
        cResult[8] = tmp8;
        cResult[9] = useReducedMotion;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    const items1 = [, , ];
    ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
    cResult[3] = styles.hero;
    cResult[4] = styles.image;
    cResult[5] = styles.imageInGradientBackground;
    cResult[6] = items1;
    tmp8 = items1;
  }
}) : (function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = collapsedCategories(View, obj2);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: null };
        const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj5.style = items;
        obj5.useReducedMotion = useReducedMotion;
        obj4.children = collapsedCategories(closure_23, obj5);
        obj3.children = collapsedCategories(LinearGradientDefault, obj4);
        let tmp3 = collapsedCategories(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = collapsedCategories(closure_23, obj);
      }
    }
  }
  return tmp13;
});
ReactCompilerGating = fn(558);
let obj8 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellActionSheet(arg0) {
  const cResult = legacyProps(useTier0UpsellContent[15]).c(83);
  ({ featureName, legacyProps } = arg0);
  ({ analyticsLocations, onDismiss } = arg0);
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_21();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = legacyProps(useTier0UpsellContent[15]);
  const stateFromStores = legacyProps(useTier0UpsellContent[37]).useStateFromStores(tmp6, tmp7);
  analyticsLocations2 = analyticsLocations2(tmp2[38])(tmp4).analyticsLocations;
  if (cResult[4] === featureName) {
    let initialUpsellKey;
    if (legacyProps != null) {
      initialUpsellKey = legacyProps.initialUpsellKey;
    }
    if (cResult[5] === initialUpsellKey) {
      let tmp13 = cResult[6];
    }
    const premiumUpsellConfig = legacyProps(tmp2[40]).usePremiumUpsellConfig(tmp13, analyticsLocations2);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
    const tmpResult11 = legacyProps(tmp2[40]);
    const premiumTrialOffer = legacyProps(tmp2[41]).usePremiumTrialOffer();
    const tmpResult12 = legacyProps(tmp2[41]);
    const premiumDiscountOffer = legacyProps(tmp2[42]).usePremiumDiscountOffer();
    if (cResult[7] === premiumDiscountOffer) {
      if (cResult[8] === premiumTrialOffer) {
        if (cResult[9] === useTier0UpsellContent) {
          let tmp19 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ThemeStore];
          const fn2 = function w() {
            return theme.theme;
          };
          cResult[11] = items2;
          cResult[12] = fn2;
          let tmp23 = fn2;
          let tmp22 = items2;
        } else {
          tmp22 = cResult[11];
          tmp23 = cResult[12];
        }
        const stateFromStores1 = legacyProps(tmp2[37]).useStateFromStores(tmp22, tmp23);
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [SelectedGuildStore];
          const fn3 = function z() {
            return guildId.getGuildId();
          };
          cResult[13] = fn3;
          cResult[14] = items3;
          let tmp27 = items3;
          let tmp26 = fn3;
        } else {
          tmp26 = cResult[13];
          tmp27 = cResult[14];
        }
        const tmpResult14 = legacyProps(tmp2[37]);
        const stateFromStores2 = legacyProps(tmp2[37]).useStateFromStores(tmp27, tmp26);
        const tmp31 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
        if (cResult[15] === featureName) {
          if (cResult[16] === stateFromStores2) {
            if (cResult[17] === tmp31) {
              if (cResult[18] === stateFromStores1) {
                if (cResult[19] === stateFromStores) {
                  let tmp32 = cResult[20];
                }
                const tmp34 = closure_22(tmp32)[featureName];
                let upsellType = tmp34;
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const items4 = [AccessibilityStore];
                  class Z {
                    constructor() {
                      return closure_1_5.useReducedMotion;
                    }
                  }
                  cResult[21] = items4;
                  cResult[22] = Z;
                  let tmp36 = Z;
                  let tmp35 = items4;
                } else {
                  tmp35 = cResult[21];
                  tmp36 = cResult[22];
                }
                const stateFromStores3 = legacyProps(tmp2[37]).useStateFromStores(tmp35, tmp36);
                const tmpResult16 = legacyProps(tmp2[37]);
                let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(tmp2[21]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                  mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(tmp2[44]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                  const tmpResult18 = legacyProps(tmp2[44]);
                }
                if (cResult[23] === analyticsLocations2) {
                  class Z {
                    constructor() {
                      return closure_1_5.useReducedMotion;
                    }
                  }
                  if (cResult[24] === undefined) {
                    if (cResult[25] === tmp34.upsellType) {
                      if (cResult[26] === useTier0UpsellContent) {
                        let tmp42 = cResult[27];
                      }
                      if (cResult[28] === analyticsLocations2) {
                        if (cResult[29] === legacyProps) {
                          if (cResult[30] === tmp34) {
                            if (cResult[31] === useTier0UpsellContent) {
                              let tmp45 = cResult[32];
                            }
                            const effect = onViewAllPerks.useEffect(tmp42, tmp45);
                            class Z {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            ({ loading, onPress } = tmp10(tmp2[46])(useTier0UpsellContent, onViewAllPerks, tmp34.analyticsPage, undefined, tmp4));
                            if (cResult[33] !== onViewAllPerks) {
                              function ne() {
                                ChatInputUtils.dismissKeyboard();
                                ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                onViewAllPerks();
                              }
                              cResult[33] = onViewAllPerks;
                              class Z {
                                constructor() {
                                  return closure_1_5.useReducedMotion;
                                }
                              }
                              cResult[34] = ne;
                              let tmp52 = ne;
                            } else {
                              tmp52 = cResult[34];
                            }
                            if (null == tmp34) {
                              return null;
                            } else {
                              const ActionSheet = legacyProps(tmp2[48]).ActionSheet;
                              if (cResult[35] === tmp34) {
                                if (cResult[36] === tmp5) {
                                  if (cResult[37] === stateFromStores3) {
                                    let tmp54 = cResult[38];
                                  }
                                  if (cResult[39] === tmp34.showBetaBadge) {
                                    if (cResult[40] === tmp5.betaTag) {
                                      let tmp57 = cResult[41];
                                    }
                                    if (cResult[42] === tmp34.title) {
                                      if (cResult[43] === tmp5.text) {
                                        let tmp61 = cResult[44];
                                      }
                                      if (cResult[45] === tmp5.description) {
                                        if (cResult[46] === tmp5.text) {
                                          let tmp65 = cResult[47];
                                        }
                                        if (cResult[48] === tmp34.description) {
                                          if (cResult[49] === tmp65) {
                                            let tmp66 = cResult[50];
                                          }
                                          if (cResult[51] === tmp5.textContainer) {
                                            if (cResult[52] === tmp57) {
                                              if (cResult[53] === tmp61) {
                                                if (cResult[54] === tmp66) {
                                                  let tmp70 = cResult[55];
                                                }
                                                const Button = legacyProps(tmp2[51]).Button;
                                                class Z {
                                                  constructor() {
                                                    return closure_1_5.useReducedMotion;
                                                  }
                                                }
                                                if (cResult[56] === tmp19) {
                                                  if (cResult[57] === useTier0UpsellContent) {
                                                    const tmp10Result = tmp10(tmp2[52]);
                                                    class Z {
                                                      constructor() {
                                                        return closure_1_5.useReducedMotion;
                                                      }
                                                    }
                                                    if (cResult[59] === Button) {
                                                      if (cResult[60] === loading) {
                                                        if (cResult[61] === onPress) {
                                                          if (cResult[62] === tmp75) {
                                                            if (cResult[63] === tmp10Result) {
                                                              if (cResult[64] === str2) {
                                                                let tmp79 = cResult[65];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              class Z {
                                                                constructor() {
                                                                  return closure_1_5.useReducedMotion;
                                                                }
                                                              }
                                                              if (cResult[67] !== tmp52) {
                                                                let obj2 = { variant: "secondary", text: tmp83, onPress: null };
                                                                class Z {
                                                                  constructor() {
                                                                    return closure_1_5.useReducedMotion;
                                                                  }
                                                                }
                                                                const tmp86 = closure_18(legacyProps(tmp2[51]).Button, obj2);
                                                                cResult[67] = tmp52;
                                                                cResult[68] = tmp86;
                                                                let tmp84 = tmp86;
                                                              } else {
                                                                tmp84 = cResult[68];
                                                              }
                                                              if (cResult[69] === tmp98) {
                                                                if (cResult[70] === tmp5.buttonContainer) {
                                                                  if (cResult[71] === tmp79) {
                                                                    if (cResult[72] === tmp84) {
                                                                      let tmp87 = cResult[73];
                                                                    }
                                                                    if (cResult[74] === tmp98) {
                                                                      if (cResult[75] === tmp54) {
                                                                        if (cResult[76] === tmp70) {
                                                                          if (cResult[77] === tmp87) {
                                                                            let tmp90 = cResult[78];
                                                                          }
                                                                          if (cResult[79] === ActionSheet) {
                                                                            if (cResult[80] === onDismiss) {
                                                                              if (cResult[81] === tmp90) {
                                                                                let tmp94 = cResult[82];
                                                                              }
                                                                              return tmp94;
                                                                            }
                                                                          }
                                                                          class Z {
                                                                            constructor() {
                                                                              return closure_1_5.useReducedMotion;
                                                                            }
                                                                          }
                                                                          tmp96[1] = onDismiss;
                                                                          tmp96[2] = tmp90;
                                                                          const tmp97 = closure_18(ActionSheet, tmp96);
                                                                          cResult[79] = ActionSheet;
                                                                          cResult[80] = onDismiss;
                                                                          cResult[81] = tmp90;
                                                                          cResult[82] = tmp97;
                                                                          tmp94 = tmp97;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Z {
                                                                      constructor() {
                                                                        return closure_1_5.useReducedMotion;
                                                                      }
                                                                    }
                                                                    const items5 = [tmp54, tmp70, tmp87];
                                                                    tmp92[0] = items5;
                                                                    const tmp93 = closure_20(tmp98, tmp92);
                                                                    cResult[74] = tmp98;
                                                                    cResult[75] = tmp54;
                                                                    cResult[76] = tmp70;
                                                                    cResult[77] = tmp87;
                                                                    cResult[78] = tmp93;
                                                                    tmp90 = tmp93;
                                                                  }
                                                                }
                                                              }
                                                              let obj3 = { style: tmp5.buttonContainer, children: null };
                                                              const items6 = [tmp79, tmp84];
                                                              obj3.children = items6;
                                                              const tmp89 = closure_20(tmp98, obj3);
                                                              cResult[69] = tmp98;
                                                              cResult[70] = tmp5.buttonContainer;
                                                              cResult[71] = tmp79;
                                                              cResult[72] = tmp84;
                                                              cResult[73] = tmp89;
                                                              tmp87 = tmp89;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj4 = { loading, onPress, text: cResult[58], icon: tmp10Result, variant: "primary" };
                                                    const tmp81 = closure_18(Button, obj4);
                                                    cResult[59] = Button;
                                                    cResult[60] = loading;
                                                    cResult[61] = onPress;
                                                    cResult[62] = cResult[58];
                                                    cResult[63] = tmp10Result;
                                                    cResult[64] = "primary";
                                                    cResult[65] = tmp81;
                                                    tmp79 = tmp81;
                                                  }
                                                }
                                                if (useTier0UpsellContent) {
                                                  const intl2 = legacyProps(tmp2[23]).intl;
                                                  let stringResult = intl2.string(legacyProps(tmp2[23]).t.cM8bbx);
                                                } else {
                                                  stringResult = tmp19;
                                                  if (tmp19 == null) {
                                                    const intl = legacyProps(tmp2[23]).intl;
                                                    stringResult = intl.string(legacyProps(tmp2[23]).t["8x0jKT"]);
                                                  }
                                                }
                                                cResult[56] = tmp19;
                                                cResult[57] = useTier0UpsellContent;
                                                cResult[58] = stringResult;
                                              }
                                            }
                                          }
                                          class Z {
                                            constructor() {
                                              return closure_1_5.useReducedMotion;
                                            }
                                          }
                                          tmp72[0] = tmp5.textContainer;
                                          const items7 = [tmp57, tmp61, tmp66];
                                          tmp72[1] = items7;
                                          const tmp73 = closure_20(tmp98, tmp72);
                                          cResult[51] = tmp5.textContainer;
                                          cResult[52] = tmp57;
                                          cResult[53] = tmp61;
                                          cResult[54] = tmp66;
                                          cResult[55] = tmp73;
                                          tmp70 = tmp73;
                                        }
                                        class Z {
                                          constructor() {
                                            return closure_1_5.useReducedMotion;
                                          }
                                        }
                                        tmp68[0] = tmp65;
                                        tmp68[2] = tmp34.description;
                                        const tmp69 = closure_18(legacyProps(tmp2[50]).Text, tmp68);
                                        cResult[48] = tmp34.description;
                                        cResult[49] = tmp65;
                                        cResult[50] = tmp69;
                                        tmp66 = tmp69;
                                      }
                                      const items8 = [, ];
                                      class Z {
                                        constructor() {
                                          return closure_1_5.useReducedMotion;
                                        }
                                      }
                                      items8[1] = tmp5.description;
                                      cResult[45] = tmp5.description;
                                      cResult[46] = tmp5.text;
                                      cResult[47] = items8;
                                      tmp65 = items8;
                                    }
                                    class Z {
                                      constructor() {
                                        return closure_1_5.useReducedMotion;
                                      }
                                    }
                                    tmp63[0] = tmp5.text;
                                    tmp63[3] = tmp34.title;
                                    const tmp64 = closure_18(legacyProps(tmp2[50]).Text, tmp63);
                                    cResult[42] = tmp34.title;
                                    cResult[43] = tmp5.text;
                                    cResult[44] = tmp64;
                                    tmp61 = tmp64;
                                  }
                                  class Z {
                                    constructor() {
                                      return closure_1_5.useReducedMotion;
                                    }
                                  }
                                  if (true === tmp34.showBetaBadge) {
                                    const obj5 = { size: null, gradient: true, style: null };
                                    class Z {
                                      constructor() {
                                        return closure_1_5.useReducedMotion;
                                      }
                                    }
                                    obj5.style = tmp5.betaTag;
                                    const tmp58 = closure_18(tmp10(tmp2[49]), obj5);
                                    const tmp10Result2 = tmp10(tmp2[49]);
                                  }
                                  cResult[39] = tmp34.showBetaBadge;
                                  cResult[40] = tmp5.betaTag;
                                  cResult[41] = tmp58;
                                  tmp57 = tmp58;
                                }
                              }
                              class Z {
                                constructor() {
                                  return closure_1_5.useReducedMotion;
                                }
                              }
                              const obj6 = { pageConfig: tmp34, styles: tmp5, useReducedMotion: stateFromStores3 };
                              const tmp56 = closure_18(closure_24, obj6);
                              cResult[35] = tmp34;
                              cResult[36] = tmp5;
                              cResult[37] = stateFromStores3;
                              cResult[38] = tmp56;
                              tmp54 = tmp56;
                            }
                            const tmp51 = tmp10(tmp2[46])(useTier0UpsellContent, onViewAllPerks, tmp34.analyticsPage, undefined, tmp4);
                          }
                        }
                      }
                      const items9 = [, , , ];
                      class Z {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      items9[1] = analyticsLocations2;
                      items9[2] = useTier0UpsellContent;
                      items9[3] = legacyProps;
                      cResult[28] = analyticsLocations2;
                      cResult[29] = legacyProps;
                      cResult[30] = tmp34;
                      cResult[31] = useTier0UpsellContent;
                      cResult[32] = items9;
                      tmp45 = items9;
                    }
                  }
                }
                cResult[23] = analyticsLocations2;
                let analyticsProperties;
                if (legacyProps != null) {
                  analyticsProperties = legacyProps.analyticsProperties;
                }
                function ee() {
                  let analyticsProperties;
                  if (legacyProps != null) {
                    analyticsProperties = legacyProps.analyticsProperties;
                  }
                  const obj2 = {};
                  const merged = Object.assign(analyticsProperties);
                  upsellType = undefined;
                  if (upsellType != null) {
                    upsellType = upsellType.upsellType;
                  }
                  obj2.type = upsellType;
                  obj2.location = location;
                  obj2.location_stack = analyticsLocations2;
                  const obj = AnalyticsUtilsDefault;
                  obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2);
                  guildId = RTCConnectionStore.getGuildId();
                  if (guildId == null) {
                    guildId = null;
                  }
                  obj2.voice_guild_id = guildId;
                  obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
                }
                cResult[24] = analyticsProperties;
                cResult[25] = tmp34.upsellType;
                cResult[26] = useTier0UpsellContent;
                cResult[27] = ee;
                tmp42 = ee;
                const tmpResult17 = legacyProps(tmp2[21]);
              }
            }
          }
        }
        const obj7 = { user: stateFromStores, premiumType: tmp31, theme: stateFromStores1, guildId: stateFromStores2, featureName };
        cResult[15] = featureName;
        cResult[16] = stateFromStores2;
        cResult[17] = tmp31;
        cResult[18] = stateFromStores1;
        cResult[19] = stateFromStores;
        cResult[20] = obj7;
        tmp32 = obj7;
        const tmpResult15 = legacyProps(tmp2[37]);
      }
    }
    let mobileRoadblockButtonText = null;
    if (!useTier0UpsellContent) {
      const obj8 = { subscriptionTier: null, trialOffer: null, discountOffer: null };
      class Z {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      obj8.trialOffer = premiumTrialOffer;
      obj8.discountOffer = premiumDiscountOffer;
      mobileRoadblockButtonText = legacyProps(tmp2[43]).getMobileRoadblockButtonText(obj8);
      const tmpResult19 = legacyProps(tmp2[43]);
    }
    cResult[7] = premiumDiscountOffer;
    cResult[8] = premiumTrialOffer;
    cResult[9] = useTier0UpsellContent;
    cResult[10] = mobileRoadblockButtonText;
    tmp19 = mobileRoadblockButtonText;
    const tmpResult13 = legacyProps(tmp2[42]);
  }
  let initialUpsellKey1;
  if (legacyProps != null) {
    initialUpsellKey1 = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey1 == null) {
    initialUpsellKey1 = legacyProps(tmp2[39]).getUpsellType(featureName);
    const tmpResult20 = legacyProps(tmp2[39]);
  }
  cResult[4] = featureName;
  let initialUpsellKey2;
  if (legacyProps != null) {
    initialUpsellKey2 = legacyProps.initialUpsellKey;
  }
  cResult[5] = initialUpsellKey2;
  cResult[6] = initialUpsellKey1;
  tmp13 = initialUpsellKey1;
  const tmpResult = legacyProps(useTier0UpsellContent[37]);
}) : (function PremiumUpsellActionSheet(analyticsLocations) {
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const tmp = closure_21();
  const items = [UserStore];
  const stateFromStores = legacyProps(useTier0UpsellContent[37]).useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = analyticsLocations(useTier0UpsellContent[38])(analyticsLocations1).analyticsLocations;
  let obj = legacyProps(useTier0UpsellContent[37]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = legacyProps(tmp3[39]).getUpsellType(featureName);
    const tmp2Result = legacyProps(tmp3[39]);
  }
  const premiumUpsellConfig = legacyProps(useTier0UpsellContent[40]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  let obj2 = legacyProps(useTier0UpsellContent[40]);
  const tmp6 = analyticsLocations1;
  const premiumTrialOffer = legacyProps(useTier0UpsellContent[41]).usePremiumTrialOffer();
  legacyProps(useTier0UpsellContent[42]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj3 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp11 };
    mobileRoadblockButtonText = legacyProps(tmp3[43]).getMobileRoadblockButtonText(obj3);
    const tmp2Result11 = legacyProps(tmp3[43]);
  }
  const tmp2Result9 = legacyProps(useTier0UpsellContent[41]);
  const items1 = [ThemeStore];
  const stateFromStores1 = legacyProps(useTier0UpsellContent[37]).useStateFromStores(items1, () => theme.theme);
  const tmp2Result12 = legacyProps(useTier0UpsellContent[37]);
  const items2 = [SelectedGuildStore];
  const obj4 = { user: stateFromStores, premiumType: useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2, theme: stateFromStores1, guildId: legacyProps(useTier0UpsellContent[37]).useStateFromStores(items2, () => guildId.getGuildId()), featureName };
  const tmp16 = closure_22(obj4)[featureName];
  upsellType = tmp16;
  const tmp2Result13 = legacyProps(useTier0UpsellContent[37]);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = legacyProps(useTier0UpsellContent[37]).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result14 = legacyProps(useTier0UpsellContent[37]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(useTier0UpsellContent[21]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(tmp3[44]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result16 = legacyProps(tmp3[44]);
  }
  const items4 = [tmp16, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2.type = upsellType;
    obj2.location = location;
    obj2.location_stack = analyticsLocations;
    const obj = AnalyticsUtilsDefault;
    obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2);
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    obj2.voice_guild_id = guildId;
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  const tmp20 = analyticsLocations(useTier0UpsellContent[46])(useTier0UpsellContent, onViewAllPerks, tmp16.analyticsPage, undefined, tmp6);
  const loading = tmp20.loading;
  [][0] = onViewAllPerks;
  let tmp23Result2 = null;
  if (null != tmp16) {
    const obj5 = { startExpanded: true, onDismiss: analyticsLocations.onDismiss, children: null };
    const obj6 = { pageConfig: tmp16, styles: tmp, useReducedMotion: stateFromStores2 };
    const items5 = [closure_18(closure_24, obj6), , ];
    const obj7 = { style: tmp.textContainer, children: null };
    let tmp23Result = null;
    if (true === tmp16.showBetaBadge) {
      const obj8 = { size: legacyProps(tmp3[49]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp23Result = closure_18(tmp5(tmp3[49]), obj8);
      const tmp5Result = tmp5(tmp3[49]);
    }
    const items6 = [tmp23Result, , ];
    const obj9 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp16.title };
    items6[1] = closure_18(legacyProps(tmp3[50]).Text, obj9);
    const obj10 = { style: null, variant: "text-sm/normal", children: null };
    const items7 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj10.style = items7;
    obj10.children = tmp16.description;
    items6[2] = closure_18(legacyProps(tmp3[50]).Text, obj10);
    obj7.children = items6;
    items5[1] = closure_20(upsellType, obj7);
    const obj11 = { style: tmp.buttonContainer, children: null };
    const obj12 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp20.onPress;
    }
    obj12.onPress = onPress;
    if (useTier0UpsellContent) {
      const intl2 = legacyProps(tmp3[23]).intl;
      mobileRoadblockButtonText = intl2.string(legacyProps(tmp3[23]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl = legacyProps(tmp3[23]).intl;
      mobileRoadblockButtonText = intl.string(legacyProps(tmp3[23]).t["8x0jKT"]);
    }
    obj12.text = mobileRoadblockButtonText;
    obj12.icon = tmp5(tmp3[52]);
    let str = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str2 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str2 = "experimental_premium-basic";
      }
      str = str2;
    }
    const obj13 = { children: null };
    obj12.variant = str;
    const items8 = [closure_18(legacyProps(tmp3[51]).Button, obj12), ];
    const obj14 = { variant: "secondary", text: null, onPress: null };
    const intl3 = legacyProps(tmp3[23]).intl;
    obj14.text = intl3.string(legacyProps(tmp3[23]).t.PcTCB7);
    obj14.onPress = tmp21;
    items8[1] = closure_18(legacyProps(tmp3[51]).Button, obj14);
    obj11.children = items8;
    items5[2] = closure_20(upsellType, obj11);
    obj13.children = items5;
    obj5.children = closure_20(upsellType, obj13);
    tmp23Result2 = closure_18(legacyProps(tmp3[48]).ActionSheet, obj5);
  }
  return tmp23Result2;
});