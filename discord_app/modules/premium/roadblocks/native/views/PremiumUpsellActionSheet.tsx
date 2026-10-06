// === Module 7492: PremiumUpsellActionSheet ===

// Module 7492 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4943 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 7487 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 7491 */;
import AssetRegistryDefault from "AssetRegistry" /* 7503 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7504 */;
import showForLaterModal2 from "showForLaterModal" /* 7505 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import APNGPlayer from "APNGPlayer" /* 8497 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11863 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13156 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Constants from "Constants" /* 1085 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 7493 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
const View = react_native.View;
({ PremiumSubscriptionSKUs: c10, PremiumTypes: unpackModuleId, PremiumUpsellTypes: closure_12 } = PremiumConstants);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = StreamSettingsConstants.ApplicationStreamFPS;
({ SAVED_BOOKMARKS_MAX: closure_17, SAVED_REMINDERS_MAX: closure_18 } = SavedMessagesConstants);
const premiumMax = ScheduledMessagesConstants.MAX_SCHEDULED_MESSAGES_PER_USER;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { hero: obj2, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: obj3, textContainer: obj4, buttonContainer: obj5, imageGradientBackgroundContainer: { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }, imageGradientBackground: obj6, imageInGradientBackground: obj7 };
obj2 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj6 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_23 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let featureName;
  let flag;
  let forLaterLimit;
  let guildId;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl19;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj11;
  let obj26;
  let obj6;
  let obj7;
  let premiumType;
  let subfeatureName;
  let theme;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp31;
  let tmp36;
  let tmp37;
  let tmp40;
  let tmp42;
  let tmp45;
  let tmp50;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(76);
  ({ premiumType, guildId, featureName, subfeatureName, theme } = arg0);
  let obj2 = require("useToken");
  const token = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const obj3 = require("useToken");
  const token1 = obj3.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  let str = "dark";
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  if (cResult[0] === featureName) {
    if (cResult[1] === guildId) {
      if (cResult[2] === str) {
        if (cResult[3] === premiumType) {
          if (cResult[4] === subfeatureName) {
            _require = cResult[5];
            tmp8 = cResult[6];
            tmp9 = cResult[7];
            tmp10 = cResult[8];
            tmp11 = cResult[9];
            tmp12 = cResult[10];
            tmp13 = cResult[11];
            tmp14 = cResult[12];
            tmp15 = cResult[13];
            tmp16 = cResult[14];
            tmp17 = cResult[15];
            flag = cResult[16];
            tmp18 = cResult[17];
            tmp19 = cResult[18];
            tmp20 = cResult[19];
            tmp21 = cResult[20];
            tmp22 = cResult[21];
            tmp23 = cResult[22];
            tmp24 = cResult[23];
          }
          const tmp4Result = importDefault(tmp7 ? 13152 : 13153);
          if (cResult[46] === tmp8) {
            if (cResult[47] === tmp4Result) {
              if (cResult[48] === flag) {
                let tmp66;
                let tmp70;
                let tmp73;
                let tmp80;
                let tmp79;
                if (cResult[49] === tmp18) {
                  tmp66 = cResult[50];
                }
                const _Symbol4 = Symbol;
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl18 = tmp(1126).intl;
                  const obj4 = { premiumMax };
                  const formatToPlainStringResult = intl18.formatToPlainString(tmp(1126).t.GNoaxo, obj4);
                  cResult[51] = formatToPlainStringResult;
                  tmp70 = formatToPlainStringResult;
                } else {
                  tmp70 = cResult[51];
                }
                const _Symbol5 = Symbol;
                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { title: tmp70, showBetaBadge: true, description: closure_20(closure_21, obj6), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, image: AssetRegistryDefault3 };
                  obj6 = { children: intl19.format(tmp(1126).t["1kFyto"], obj7) };
                  intl19 = tmp(1126).intl;
                  obj7 = {
                    premiumMax,
                    onClick() {
                                      const obj = ActionSheetActionCreatorsDefault;
                                      obj.hideActionSheet(closure_0(dependencyMap[31]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                      const obj2 = closure_0(dependencyMap[36]);
                                      const result = obj2.showScheduledMessagesModal();
                                    }
                  };
                  cResult[52] = obj5;
                  tmp73 = obj5;
                } else {
                  tmp73 = cResult[52];
                }
                const _Symbol6 = Symbol;
                if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl20 = tmp(1126).intl;
                  const stringResult = intl20.string(tmp(1126).t.ETZQx5);
                  const intl21 = tmp(1126).intl;
                  const obj8 = { fps: ApplicationStreamFPS.FPS_60 };
                  const formatToPlainStringResult1 = intl21.formatToPlainString(tmp(1126).t["4nlpei"], obj8);
                  cResult[53] = stringResult;
                  cResult[54] = formatToPlainStringResult1;
                  tmp80 = formatToPlainStringResult1;
                  tmp79 = stringResult;
                } else {
                  tmp79 = cResult[53];
                  tmp80 = cResult[54];
                }
                if (cResult[55] === token1) {
                  let tmp84;
                  if (cResult[56] === token) {
                    tmp84 = cResult[57];
                  }
                  if (cResult[58] === tmp9) {
                    if (cResult[59] === tmp10) {
                      if (cResult[60] === tmp11) {
                        if (cResult[61] === tmp12) {
                          if (cResult[62] === tmp13) {
                            if (cResult[63] === tmp14) {
                              if (cResult[64] === tmp15) {
                                if (cResult[65] === tmp16) {
                                  if (cResult[66] === tmp17) {
                                    if (cResult[67] === tmp66) {
                                      if (cResult[68] === tmp84) {
                                        if (cResult[69] === tmp19) {
                                          if (cResult[70] === tmp20) {
                                            if (cResult[71] === tmp21) {
                                              if (cResult[72] === tmp22) {
                                                if (cResult[73] === tmp23) {
                                                  let tmp87;
                                                  if (cResult[74] === tmp24) {
                                                    tmp87 = cResult[75];
                                                  }
                                                  return tmp87;
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
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj9 = {};
                  obj9[tmp19] = tmp20;
                  obj9[tmp21] = tmp22;
                  obj9[tmp23] = tmp24;
                  obj9[tmp9] = tmp10;
                  obj9[tmp11] = tmp12;
                  obj9[tmp13] = tmp14;
                  obj9[tmp15] = tmp16;
                  obj9[tmp17] = tmp66;
                  obj9[tmp(7494).EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp73;
                  obj9[tmp(7494).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp84;
                  cResult[58] = tmp9;
                  cResult[59] = tmp10;
                  cResult[60] = tmp11;
                  cResult[61] = tmp12;
                  cResult[62] = tmp13;
                  cResult[63] = tmp14;
                  cResult[64] = tmp15;
                  cResult[65] = tmp16;
                  cResult[66] = tmp17;
                  cResult[67] = tmp66;
                  cResult[68] = tmp84;
                  cResult[69] = tmp19;
                  cResult[70] = tmp20;
                  cResult[71] = tmp21;
                  cResult[72] = tmp22;
                  cResult[73] = tmp23;
                  cResult[74] = tmp24;
                  cResult[75] = obj9;
                  tmp87 = obj9;
                }
                const obj10 = { title: tmp79, description: tmp80, analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault4, imageGradientBackground: obj11 };
                obj11 = { colors: items, start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END };
                items = [token, token1];
                cResult[55] = token1;
                cResult[56] = token;
                cResult[57] = obj10;
                tmp84 = obj10;
              }
            }
          }
          const obj12 = { title: tmp8, showBetaBadge: flag, description: tmp18, analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: tmp4Result };
          cResult[46] = tmp8;
          cResult[47] = tmp4Result;
          cResult[48] = flag;
          cResult[49] = tmp18;
          cResult[50] = obj12;
          tmp66 = obj12;
        }
      }
    }
  }
  const tmpResult = tmp(4534);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(7494).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp(7308).getEffectiveUploadLimit;
    tmp(7308);
    const tmpResult7 = tmp(7283);
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult7.maxFileSize(guildId));
  }
  const tmp28 = subfeatureName === tmp(7495).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp28;
  if (subfeatureName === tmp(7495).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const tmpResult8 = tmp(7496);
    forLaterLimit = tmpResult8.getForLaterLimit("native.PremiumUpsellActionSheet", tmp28);
  }
  const tmp30 = tmp28 ? closure_18 : closure_17;
  if (cResult[24] !== featureName) {
    let tmp32;
    const tmpResult9 = tmp(7498);
    if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
      tmp32 = closure_20(tmp(7499).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
    }
    cResult[24] = featureName;
    cResult[25] = tmp32;
    tmp31 = tmp32;
  } else {
    tmp31 = cResult[25];
  }
  const SOUNDBOARD_EVERYWHERE = tmp(7494).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  const obj13 = { title: intl.string(tmp(1126).t.jGDYF0), description: intl2.formatToPlainString(tmp(1126).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  const obj15 = { title: intl3.string(tmp(1126).t.zY5PPb), description: intl4.formatToPlainString(tmp(1126).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp31 };
  intl3 = tmp(1126).intl;
  intl4 = tmp(1126).intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult1 = intl5.string(tmp(1126).t.Eukdgl);
    const intl6 = tmp(1126).intl;
    const stringResult2 = intl6.string(tmp(1126).t.sMmd7s);
    cResult[26] = stringResult1;
    cResult[27] = stringResult2;
    tmp37 = stringResult2;
    tmp36 = stringResult1;
  } else {
    tmp36 = cResult[26];
    tmp37 = cResult[27];
  }
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    const obj17 = { title: tmp36, description: tmp37, analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_20(tmp(7501).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
    cResult[28] = obj17;
    tmp40 = obj17;
  } else {
    tmp40 = cResult[28];
  }
  const INCREASED_FILE_UPLOAD_SIZE = tmp(7494).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = tmp(1126).intl;
    const stringResult3 = intl7.string(tmp(1126).t["G+pngo"]);
    cResult[29] = stringResult3;
    tmp42 = stringResult3;
  } else {
    tmp42 = cResult[29];
  }
  const tmpResult10 = tmp(7283);
  let result = tmpResult10.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  if (cResult[30] !== result) {
    const obj18 = { children: result };
    const tmp48 = closure_20(closure_21, obj18);
    cResult[30] = result;
    cResult[31] = tmp48;
    tmp45 = tmp48;
  } else {
    tmp45 = cResult[31];
  }
  const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
  if (cResult[32] !== combined) {
    const obj19 = { uri: combined };
    cResult[32] = combined;
    cResult[33] = obj19;
    tmp50 = obj19;
  } else {
    tmp50 = cResult[33];
  }
  if (cResult[34] === tmp45) {
    let tmp51;
    let tmp52;
    let tmp56;
    if (cResult[35] === tmp50) {
      tmp51 = cResult[36];
    }
    const ANIMATED_EMOJIS = tmp(7494).EntitlementFeatureNames.ANIMATED_EMOJIS;
    const _Symbol = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(1126).intl;
      const stringResult4 = intl8.string(tmp(1126).t.SI7R9I);
      cResult[37] = stringResult4;
      tmp52 = stringResult4;
    } else {
      tmp52 = cResult[37];
    }
    const intl9 = tmp(1126).intl;
    const obj20 = { nitroTierName: premiumTypeDisplayName };
    const formatToPlainStringResult2 = intl9.formatToPlainString(tmp(1126).t.uGkSY2, obj20);
    const _HermesInternal = HermesInternal;
    const combined1 = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png";
    if (cResult[38] !== combined1) {
      const obj21 = { uri: combined1 };
      cResult[38] = combined1;
      cResult[39] = obj21;
      tmp56 = obj21;
    } else {
      tmp56 = cResult[39];
    }
    if (cResult[40] === tmp31) {
      if (cResult[41] === formatToPlainStringResult2) {
        let tmp57;
        let tmp58;
        let tmp59;
        let stringResult5;
        let stringResult6;
        if (cResult[42] === tmp56) {
          tmp57 = cResult[43];
        }
        const CLIENT_THEMES = tmp(7494).EntitlementFeatureNames.CLIENT_THEMES;
        const _Symbol2 = Symbol;
        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
          const obj22 = { title: intl10.string(tmp(1126).t.p0I2Bk), description: intl11.string(tmp(1126).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
          intl10 = tmp(1126).intl;
          intl11 = tmp(1126).intl;
          cResult[44] = obj22;
          tmp58 = obj22;
        } else {
          tmp58 = cResult[44];
        }
        const APP_ICONS = tmp(7494).EntitlementFeatureNames.APP_ICONS;
        const _Symbol3 = Symbol;
        if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
          const obj23 = { title: intl12.string(tmp(1126).t.TYFwcy), description: intl13.string(tmp(1126).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
          intl12 = tmp(1126).intl;
          intl13 = tmp(1126).intl;
          cResult[45] = obj23;
          tmp59 = obj23;
        } else {
          tmp59 = cResult[45];
        }
        const SAVED_MESSAGES = tmp(7494).EntitlementFeatureNames.SAVED_MESSAGES;
        if (null == forLaterLimit) {
          const intl15 = tmp(1126).intl;
          stringResult5 = intl15.string(tmp(1126).t.YXk6N7);
        } else {
          const intl14 = tmp(1126).intl;
          const formatToPlainString = intl14.formatToPlainString;
          const t = tmp(1126).t;
          const obj24 = { premiumMax: tmp30 };
          stringResult5 = formatToPlainString(tmp28 ? t["cpj9o/"] : t.Oxm3Sq, obj24);
        }
        if (null == forLaterLimit) {
          const intl17 = tmp(1126).intl;
          stringResult6 = intl17.string(tmp(1126).t["m/HzW8"]);
        } else {
          const intl16 = tmp(1126).intl;
          const format = intl16.format;
          const t2 = tmp(1126).t;
          const obj25 = { children: format(tmp28 ? t2.NRF0Wh : t2.o5OLyw, obj26) };
          obj26 = {
            max: forLaterLimit,
            premiumMax: tmp30,
            onClick() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                      const showForLaterModal = showForLaterModal2.showForLaterModal;
                      showForLaterModal2;
                      const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
                      showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                    }
          };
          stringResult6 = closure_20(closure_21, obj25);
        }
        cResult[0] = featureName;
        cResult[1] = guildId;
        cResult[2] = str;
        cResult[3] = premiumType;
        cResult[4] = subfeatureName;
        cResult[5] = tmp28;
        cResult[6] = stringResult5;
        cResult[7] = INCREASED_FILE_UPLOAD_SIZE;
        cResult[8] = tmp51;
        cResult[9] = ANIMATED_EMOJIS;
        cResult[10] = tmp57;
        cResult[11] = CLIENT_THEMES;
        cResult[12] = tmp58;
        cResult[13] = APP_ICONS;
        cResult[14] = tmp59;
        cResult[15] = SAVED_MESSAGES;
        cResult[16] = true;
        cResult[17] = stringResult6;
        cResult[18] = SOUNDBOARD_EVERYWHERE;
        cResult[19] = obj13;
        cResult[20] = EMOJIS_EVERYWHERE;
        cResult[21] = obj15;
        cResult[22] = STICKERS_EVERYWHERE;
        cResult[23] = tmp40;
        tmp18 = stringResult6;
        tmp24 = tmp40;
        tmp23 = STICKERS_EVERYWHERE;
        tmp22 = obj15;
        tmp21 = EMOJIS_EVERYWHERE;
        tmp20 = obj13;
        tmp19 = SOUNDBOARD_EVERYWHERE;
        flag = true;
        tmp17 = SAVED_MESSAGES;
        tmp16 = tmp59;
        tmp15 = APP_ICONS;
        tmp14 = tmp58;
        tmp13 = CLIENT_THEMES;
        tmp12 = tmp57;
        tmp11 = ANIMATED_EMOJIS;
        tmp10 = tmp51;
        tmp9 = INCREASED_FILE_UPLOAD_SIZE;
        tmp8 = stringResult5;
        tmp7 = tmp28;
      }
    }
    const obj27 = { title: tmp52, description: formatToPlainStringResult2, analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: tmp56, illustration: tmp31 };
    cResult[40] = tmp31;
    cResult[41] = formatToPlainStringResult2;
    cResult[42] = tmp56;
    cResult[43] = obj27;
    tmp57 = obj27;
  }
  const obj28 = { title: tmp42, description: tmp45, analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: tmp50 };
  cResult[34] = tmp45;
  cResult[35] = tmp50;
  cResult[36] = obj28;
  tmp51 = obj28;
}) : ((arg0) => {
  let closure_0;
  let featureName;
  let forLaterLimit;
  let guildId;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj10;
  let obj19;
  let obj21;
  let obj22;
  let obj23;
  let obj25;
  let obj26;
  let premiumType;
  let stringResult;
  let stringResult1;
  let subfeatureName;
  let theme;
  let tmpResult10;
  ({ guildId, featureName, subfeatureName } = arg0);
  _require = undefined;
  const tmp = _require;
  ({ premiumType, theme } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let obj2 = require("useToken");
  let str = "dark";
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  const tmpResult = tmp(4534);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(7494).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp(7308).getEffectiveUploadLimit;
    tmp(7308);
    const tmpResult7 = tmp(7283);
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult7.maxFileSize(guildId));
  }
  const tmp9 = subfeatureName === tmp(7495).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp9;
  if (subfeatureName === tmp(7495).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const tmpResult8 = tmp(7496);
    forLaterLimit = tmpResult8.getForLaterLimit("native.PremiumUpsellActionSheet", tmp9);
  }
  const tmp11 = tmp9 ? closure_18 : closure_17;
  let tmp12;
  const tmpResult9 = tmp(7498);
  if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp12 = closure_20(tmp(7499).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: intl.string(tmp(1126).t.jGDYF0), description: intl2.formatToPlainString(tmp(1126).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = tmp(7494).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  obj3[SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: intl3.string(tmp(1126).t.zY5PPb), description: intl4.formatToPlainString(tmp(1126).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp12 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = tmp(1126).intl;
  intl4 = tmp(1126).intl;
  obj3[EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: intl5.string(tmp(1126).t.Eukdgl), description: intl6.string(tmp(1126).t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_20(tmp(7501).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = tmp(1126).intl;
  intl6 = tmp(1126).intl;
  obj3[STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: intl7.string(tmp(1126).t["G+pngo"]), description: closure_20(closure_21, obj10), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = tmp(7494).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = tmp(1126).intl;
  obj10 = { children: tmpResult10.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit }) };
  obj3[INCREASED_FILE_UPLOAD_SIZE] = obj9;
  tmpResult10 = tmp(7283);
  const obj12 = { title: intl8.string(tmp(1126).t.SI7R9I), description: intl9.formatToPlainString(tmp(1126).t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp12 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = tmp(7494).EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = tmp(1126).intl;
  intl9 = tmp(1126).intl;
  obj3[ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: intl10.string(tmp(1126).t.p0I2Bk), description: intl11.string(tmp(1126).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const CLIENT_THEMES = tmp(7494).EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = tmp(1126).intl;
  intl11 = tmp(1126).intl;
  obj3[CLIENT_THEMES] = obj14;
  const obj15 = { title: intl12.string(tmp(1126).t.TYFwcy), description: intl13.string(tmp(1126).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
  const APP_ICONS = tmp(7494).EntitlementFeatureNames.APP_ICONS;
  intl12 = tmp(1126).intl;
  intl13 = tmp(1126).intl;
  obj3[APP_ICONS] = obj15;
  const SAVED_MESSAGES = tmp(7494).EntitlementFeatureNames.SAVED_MESSAGES;
  if (null == forLaterLimit) {
    const intl15 = tmp(1126).intl;
    stringResult = intl15.string(tmp(1126).t.YXk6N7);
  } else {
    const intl14 = tmp(1126).intl;
    const formatToPlainString = intl14.formatToPlainString;
    const t = tmp(1126).t;
    const obj16 = { premiumMax: tmp11 };
    stringResult = formatToPlainString(tmp9 ? t["cpj9o/"] : t.Oxm3Sq, obj16);
  }
  const obj17 = { title: stringResult, showBetaBadge: true, description: stringResult1, analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: importDefault(tmp9 ? 13152 : 13153) };
  if (null == forLaterLimit) {
    const intl17 = tmp(1126).intl;
    stringResult1 = intl17.string(tmp(1126).t["m/HzW8"]);
  } else {
    const intl16 = tmp(1126).intl;
    const format = intl16.format;
    const t2 = tmp(1126).t;
    const obj18 = { children: format(tmp9 ? t2.NRF0Wh : t2.o5OLyw, obj19) };
    obj19 = {
      max: forLaterLimit,
      premiumMax: tmp11,
      onClick() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const showForLaterModal = showForLaterModal2.showForLaterModal;
          showForLaterModal2;
          const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
          showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    stringResult1 = closure_20(closure_21, obj18);
  }
  obj3[SAVED_MESSAGES] = obj17;
  const obj20 = { title: intl18.formatToPlainString(tmp(1126).t.GNoaxo, obj21), showBetaBadge: true, description: closure_20(closure_21, obj22), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, image: AssetRegistryDefault3 };
  const SCHEDULED_MESSAGES = tmp(7494).EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl18 = tmp(1126).intl;
  obj21 = { premiumMax };
  obj22 = { children: intl19.format(tmp(1126).t["1kFyto"], obj23) };
  intl19 = tmp(1126).intl;
  obj23 = {
    premiumMax,
    onClick() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_0(dependencyMap[31]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = closure_0(dependencyMap[36]);
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj3[SCHEDULED_MESSAGES] = obj20;
  const obj24 = { title: intl20.string(tmp(1126).t.ETZQx5), description: intl21.formatToPlainString(tmp(1126).t["4nlpei"], obj25), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault4, imageGradientBackground: obj26 };
  const STREAM_HIGH_QUALITY = tmp(7494).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl20 = tmp(1126).intl;
  intl21 = tmp(1126).intl;
  obj25 = { fps: ApplicationStreamFPS.FPS_60 };
  obj26 = { colors: items, start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END };
  items = [token, token1];
  obj3[STREAM_HIGH_QUALITY] = obj24;
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let image;
  let style;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(7);
  ({ image, style, useReducedMotion } = arg0);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        if (cResult[0] === image.uri) {
          let tmp5;
          if (cResult[1] === style) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj3 = { url: image.uri, style, autoplay: true };
        const tmp7 = closure_20(APNGPlayer.APNGPlayer, obj3);
        cResult[0] = image.uri;
        cResult[1] = style;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
    }
  }
  if (cResult[3] === image) {
    if (cResult[4] === style) {
      let tmp9;
      if (cResult[5] === !useReducedMotion) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const tmp10 = closure_20(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  cResult[3] = image;
  cResult[4] = style;
  cResult[5] = !useReducedMotion;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let image;
  let style;
  let useReducedMotion;
  ({ image, style, useReducedMotion } = arg0);
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      let tmp5;
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        tmp5 = closure_20(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = closure_20(FastImageDefault, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let pageConfig;
  let styles;
  let tmp21;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(27);
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    if (cResult[0] === pageConfig.illustration) {
      let tmp22;
      if (cResult[1] === styles.hero) {
        tmp22 = cResult[2];
      }
      tmp21 = tmp22;
    }
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    const tmp25 = closure_20(View, obj2);
    cResult[0] = pageConfig.illustration;
    cResult[1] = styles.hero;
    cResult[2] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp21 = null;
    if (null != pageConfig.image) {
      let tmp4;
      if (null != pageConfig.imageGradientBackground) {
        if (cResult[3] === styles.hero) {
          if (cResult[4] === styles.image) {
            let tmp8;
            if (cResult[5] === styles.imageInGradientBackground) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === pageConfig.image) {
              if (cResult[8] === tmp8) {
                let tmp9;
                if (cResult[9] === useReducedMotion) {
                  tmp9 = cResult[10];
                }
                if (cResult[11] === pageConfig.imageGradientBackground.colors) {
                  if (cResult[12] === pageConfig.imageGradientBackground.end) {
                    if (cResult[13] === pageConfig.imageGradientBackground.start) {
                      if (cResult[14] === styles.imageGradientBackground) {
                        let tmp13;
                        if (cResult[15] === tmp9) {
                          tmp13 = cResult[16];
                        }
                        if (cResult[17] === styles.imageGradientBackgroundContainer) {
                          let tmp17;
                          if (cResult[18] === tmp13) {
                            tmp17 = cResult[19];
                          }
                          tmp4 = tmp17;
                        }
                        const obj3 = { style: styles.imageGradientBackgroundContainer, children: tmp13 };
                        const tmp20 = closure_20(View, obj3);
                        cResult[17] = styles.imageGradientBackgroundContainer;
                        cResult[18] = tmp13;
                        cResult[19] = tmp20;
                        tmp17 = tmp20;
                      }
                    }
                  }
                }
                const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: tmp9 };
                const tmp16 = closure_20(LinearGradientDefault, obj4);
                cResult[11] = pageConfig.imageGradientBackground.colors;
                cResult[12] = pageConfig.imageGradientBackground.end;
                cResult[13] = pageConfig.imageGradientBackground.start;
                cResult[14] = styles.imageGradientBackground;
                cResult[15] = tmp9;
                cResult[16] = tmp16;
                tmp13 = tmp16;
              }
            }
            const obj5 = { image: pageConfig.image, style: tmp8, useReducedMotion };
            const tmp12 = closure_20(closure_25, obj5);
            cResult[7] = pageConfig.image;
            cResult[8] = tmp8;
            cResult[9] = useReducedMotion;
            cResult[10] = tmp12;
            tmp9 = tmp12;
          }
        }
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        cResult[3] = styles.hero;
        cResult[4] = styles.image;
        cResult[5] = styles.imageInGradientBackground;
        cResult[6] = items;
        tmp8 = items;
      } else {
        if (cResult[20] === styles.hero) {
          let tmp3;
          if (cResult[21] === styles.image) {
            tmp3 = cResult[22];
          }
          if (cResult[23] === pageConfig.image) {
            if (cResult[24] === tmp3) {
              if (cResult[25] === useReducedMotion) {
                tmp4 = cResult[26];
              }
            }
          }
          const obj6 = { image: pageConfig.image, style: tmp3, useReducedMotion };
          const tmp7 = closure_20(closure_25, obj6);
          cResult[23] = pageConfig.image;
          cResult[24] = tmp3;
          cResult[25] = useReducedMotion;
          cResult[26] = tmp7;
          tmp4 = tmp7;
        }
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        cResult[20] = styles.hero;
        cResult[21] = styles.image;
        cResult[22] = items1;
        tmp3 = items1;
      }
      tmp21 = tmp4;
    }
  }
  return tmp21;
}) : ((arg0) => {
  let items;
  let items1;
  let obj4;
  let obj5;
  let pageConfig;
  let styles;
  let tmp10;
  let tmp8;
  let useReducedMotion;
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    tmp10 = closure_20(View, obj2);
  } else {
    tmp10 = null;
    if (null != pageConfig.image) {
      let tmp3;
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: closure_20(tmp8, obj4) };
        obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: closure_20(closure_25, obj5) };
        obj5 = { image: pageConfig.image, style: items, useReducedMotion };
        items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        tmp8 = LinearGradientDefault;
        tmp3 = closure_20(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: items1, useReducedMotion };
        items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        tmp3 = closure_20(closure_25, obj);
      }
      tmp10 = tmp3;
    }
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let analyticsLocations2;
  let currentUser;
  let featureName;
  let items5;
  let legacyProps;
  let loading;
  let onDismiss;
  let onPress;
  let subfeatureName;
  let theme;
  let tmp4;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let useTier0UpsellContent;
  const tmp2 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[16]);
  const cResult = obj.c(84);
  ({ featureName, legacyProps } = arg0);
  ({ subfeatureName, analyticsLocations, onDismiss } = arg0);
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_23();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp7 = A;
    tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = legacyProps(tmp2[44]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  analyticsLocations2 = analyticsLocations2(tmp2[45])(tmp4).analyticsLocations;
  if (cResult[4] === featureName) {
    let tmp14;
    const tmp11 = cResult[5];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    if (tmp11 === undefined) {
      tmp14 = cResult[6];
    }
    const tmpResult11 = legacyProps(tmp2[47]);
    const premiumUpsellConfig = tmpResult11.usePremiumUpsellConfig(tmp14, analyticsLocations2);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
    const tmpResult12 = legacyProps(tmp2[48]);
    const premiumTrialOffer = tmpResult12.usePremiumTrialOffer();
    const tmpResult13 = legacyProps(tmp2[49]);
    const premiumDiscountOffer = tmpResult13.usePremiumDiscountOffer();
    if (cResult[7] === premiumDiscountOffer) {
      if (cResult[8] === premiumTrialOffer) {
        let tmp20;
        let tmp28;
        let tmp27;
        if (cResult[9] === useTier0UpsellContent) {
          tmp20 = cResult[10];
        }
        const _Symbol = Symbol;
        class A {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        const tmpResult14 = legacyProps(tmp2[44]);
        const stateFromStores1 = tmpResult14.useStateFromStores(tmp24, tmp25);
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [SelectedGuildStore];
          class A {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[13] = tmp30;
          cResult[14] = items2;
          tmp28 = items2;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[13];
          tmp28 = cResult[14];
        }
        const tmpResult15 = legacyProps(tmp2[44]);
        const stateFromStores2 = tmpResult15.useStateFromStores(tmp28, tmp27);
        const tmp33 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
        if (cResult[15] === featureName) {
          if (cResult[16] === stateFromStores2) {
            if (cResult[17] === subfeatureName) {
              if (cResult[18] === tmp33) {
                if (cResult[19] === stateFromStores1) {
                  let tmp34;
                  let tmp38;
                  let tmp37;
                  if (cResult[20] === stateFromStores) {
                    tmp34 = cResult[21];
                  }
                  const tmp36 = closure_24(tmp34)[featureName];
                  class A {
                    constructor() {
                      return currentUser.getCurrentUser();
                    }
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const items3 = [AccessibilityStore];
                    class A {
                      constructor() {
                        return currentUser.getCurrentUser();
                      }
                    }
                    cResult[22] = items3;
                    cResult[23] = tmp40;
                    tmp38 = tmp40;
                    tmp37 = items3;
                  } else {
                    tmp37 = cResult[22];
                    tmp38 = cResult[23];
                  }
                  const tmpResult16 = legacyProps(tmp2[44]);
                  const stateFromStores3 = tmpResult16.useStateFromStores(tmp37, tmp38);
                  const tmpResult17 = legacyProps(tmp2[24]);
                  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult17.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                    const tmpResult18 = legacyProps(tmp2[51]);
                    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult18.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                  }
                  if (cResult[24] === analyticsLocations2) {
                    const tmp43 = cResult[25];
                    class A {
                      constructor() {
                        return currentUser.getCurrentUser();
                      }
                    }
                    if (tmp43 === undefined) {
                      if (cResult[26] === tmp36.upsellType) {
                        let tmp46;
                        if (cResult[27] === useTier0UpsellContent) {
                          tmp46 = cResult[28];
                        }
                        if (cResult[29] === analyticsLocations2) {
                          if (cResult[30] === legacyProps) {
                            if (cResult[31] === tmp36) {
                              let tmp49;
                              let tmp56;
                              if (cResult[32] === useTier0UpsellContent) {
                                tmp49 = cResult[33];
                              }
                              const effect = onViewAllPerks.useEffect(tmp46, tmp49);
                              class A {
                                constructor() {
                                  return currentUser.getCurrentUser();
                                }
                              }
                              ({ loading, onPress } = analyticsLocations2(tmp2[53])(useTier0UpsellContent, onViewAllPerks, tmp36.analyticsPage, undefined, tmp4));
                              analyticsLocations2(tmp2[53])(useTier0UpsellContent, onViewAllPerks, tmp36.analyticsPage, undefined, tmp4);
                              if (cResult[34] !== onViewAllPerks) {
                                function re() {
                                  const obj = ChatInputUtils;
                                  obj.dismissKeyboard();
                                  const obj2 = ActionSheetActionCreatorsDefault;
                                  obj2.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                  onViewAllPerks();
                                }
                                cResult[34] = onViewAllPerks;
                                class A {
                                  constructor() {
                                    return currentUser.getCurrentUser();
                                  }
                                }
                                cResult[35] = re;
                                tmp56 = re;
                              } else {
                                tmp56 = cResult[35];
                              }
                              if (null == tmp36) {
                                return null;
                              } else {
                                const ActionSheet = legacyProps(tmp2[55]).ActionSheet;
                                if (cResult[36] === tmp36) {
                                  if (cResult[37] === tmp5) {
                                    let tmp58;
                                    let tmp62;
                                    if (cResult[38] === stateFromStores3) {
                                      tmp58 = cResult[39];
                                    }
                                    if (cResult[40] === tmp36.showBetaBadge) {
                                      let tmp61;
                                      if (cResult[41] === tmp5.betaTag) {
                                        tmp61 = cResult[42];
                                      }
                                      if (cResult[43] === tmp36.title) {
                                        let tmp65;
                                        if (cResult[44] === tmp5.text) {
                                          tmp65 = cResult[45];
                                        }
                                        if (cResult[46] === tmp5.description) {
                                          let tmp69;
                                          if (cResult[47] === tmp5.text) {
                                            tmp69 = cResult[48];
                                          }
                                          if (cResult[49] === tmp36.description) {
                                            let tmp70;
                                            if (cResult[50] === tmp69) {
                                              tmp70 = cResult[51];
                                            }
                                            if (cResult[52] === tmp5.textContainer) {
                                              if (cResult[53] === tmp61) {
                                                if (cResult[54] === tmp65) {
                                                  let tmp74;
                                                  let stringResult;
                                                  if (cResult[55] === tmp70) {
                                                    tmp74 = cResult[56];
                                                  }
                                                  const buttonContainer = tmp5.buttonContainer;
                                                  const Button = legacyProps(tmp2[58]).Button;
                                                  class A {
                                                    constructor() {
                                                      return currentUser.getCurrentUser();
                                                    }
                                                  }
                                                  if (cResult[57] === tmp20) {
                                                    let tmp79;
                                                    if (cResult[58] === useTier0UpsellContent) {
                                                      tmp79 = cResult[59];
                                                    }
                                                    const tmp10Result = analyticsLocations2(tmp2[59]);
                                                    class A {
                                                      constructor() {
                                                        return currentUser.getCurrentUser();
                                                      }
                                                    }
                                                    if (cResult[60] === Button) {
                                                      if (cResult[61] === loading) {
                                                        if (cResult[62] === onPress) {
                                                          if (cResult[63] === tmp79) {
                                                            if (cResult[64] === tmp10Result) {
                                                              let tmp82;
                                                              let tmp87;
                                                              if (cResult[65] === "primary") {
                                                                tmp82 = cResult[66];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              class A {
                                                                constructor() {
                                                                  return currentUser.getCurrentUser();
                                                                }
                                                              }
                                                              if (cResult[68] !== tmp56) {
                                                                let obj2 = { variant: "secondary", text: tmp86, onPress: null };
                                                                class A {
                                                                  constructor() {
                                                                    return currentUser.getCurrentUser();
                                                                  }
                                                                }
                                                                const tmp89 = closure_20(legacyProps(tmp2[58]).Button, obj2);
                                                                cResult[68] = tmp56;
                                                                cResult[69] = tmp89;
                                                                tmp87 = tmp89;
                                                              } else {
                                                                tmp87 = cResult[69];
                                                              }
                                                              if (cResult[70] === View) {
                                                                if (cResult[71] === tmp5.buttonContainer) {
                                                                  if (cResult[72] === tmp82) {
                                                                    let tmp90;
                                                                    if (cResult[73] === tmp87) {
                                                                      tmp90 = cResult[74];
                                                                    }
                                                                    if (cResult[75] === View) {
                                                                      if (cResult[76] === tmp58) {
                                                                        if (cResult[77] === tmp74) {
                                                                          let tmp93;
                                                                          if (cResult[78] === tmp90) {
                                                                            tmp93 = cResult[79];
                                                                          }
                                                                          if (cResult[80] === ActionSheet) {
                                                                            if (cResult[81] === onDismiss) {
                                                                              let tmp97;
                                                                              if (cResult[82] === tmp93) {
                                                                                tmp97 = cResult[83];
                                                                              }
                                                                              return tmp97;
                                                                            }
                                                                          }
                                                                          class A {
                                                                            constructor() {
                                                                              return currentUser.getCurrentUser();
                                                                            }
                                                                          }
                                                                          tmp99[1] = onDismiss;
                                                                          tmp99[2] = tmp93;
                                                                          const tmp100 = closure_20(ActionSheet, tmp99);
                                                                          cResult[80] = ActionSheet;
                                                                          cResult[81] = onDismiss;
                                                                          cResult[82] = tmp93;
                                                                          cResult[83] = tmp100;
                                                                          tmp97 = tmp100;
                                                                        }
                                                                      }
                                                                    }
                                                                    class A {
                                                                      constructor() {
                                                                        return currentUser.getCurrentUser();
                                                                      }
                                                                    }
                                                                    const items4 = [tmp58, tmp74, tmp90];
                                                                    tmp95[0] = items4;
                                                                    const tmp96 = closure_22(View, tmp95);
                                                                    cResult[75] = View;
                                                                    cResult[76] = tmp58;
                                                                    cResult[77] = tmp74;
                                                                    cResult[78] = tmp90;
                                                                    cResult[79] = tmp96;
                                                                    tmp93 = tmp96;
                                                                  }
                                                                }
                                                              }
                                                              const obj3 = { style: buttonContainer, children: items5 };
                                                              items5 = [tmp82, tmp87];
                                                              const tmp92 = closure_22(View, obj3);
                                                              cResult[70] = View;
                                                              cResult[71] = tmp5.buttonContainer;
                                                              cResult[72] = tmp82;
                                                              cResult[73] = tmp87;
                                                              cResult[74] = tmp92;
                                                              tmp90 = tmp92;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj4 = { loading, onPress, text: tmp79, icon: tmp10Result, variant: "primary" };
                                                    const tmp84 = closure_20(Button, obj4);
                                                    cResult[60] = Button;
                                                    cResult[61] = loading;
                                                    cResult[62] = onPress;
                                                    cResult[63] = tmp79;
                                                    cResult[64] = tmp10Result;
                                                    cResult[65] = "primary";
                                                    cResult[66] = tmp84;
                                                    tmp82 = tmp84;
                                                  }
                                                  if (useTier0UpsellContent) {
                                                    const intl2 = legacyProps(tmp2[26]).intl;
                                                    stringResult = intl2.string(legacyProps(tmp2[26]).t.cM8bbx);
                                                  } else {
                                                    stringResult = tmp20;
                                                    if (tmp20 == null) {
                                                      const intl = legacyProps(tmp2[26]).intl;
                                                      stringResult = intl.string(legacyProps(tmp2[26]).t["8x0jKT"]);
                                                    }
                                                  }
                                                  cResult[57] = tmp20;
                                                  cResult[58] = useTier0UpsellContent;
                                                  cResult[59] = stringResult;
                                                  tmp79 = stringResult;
                                                }
                                              }
                                            }
                                            class A {
                                              constructor() {
                                                return currentUser.getCurrentUser();
                                              }
                                            }
                                            tmp76[0] = tmp5.textContainer;
                                            const items6 = [tmp61, tmp65, tmp70];
                                            tmp76[1] = items6;
                                            const tmp77 = closure_22(View, tmp76);
                                            cResult[52] = tmp5.textContainer;
                                            cResult[53] = tmp61;
                                            cResult[54] = tmp65;
                                            cResult[55] = tmp70;
                                            cResult[56] = tmp77;
                                            tmp74 = tmp77;
                                          }
                                          class A {
                                            constructor() {
                                              return currentUser.getCurrentUser();
                                            }
                                          }
                                          tmp72[0] = tmp69;
                                          tmp72[2] = tmp36.description;
                                          const tmp73 = closure_20(legacyProps(tmp2[57]).Text, tmp72);
                                          cResult[49] = tmp36.description;
                                          cResult[50] = tmp69;
                                          cResult[51] = tmp73;
                                          tmp70 = tmp73;
                                        }
                                        const items7 = [, ];
                                        class A {
                                          constructor() {
                                            return currentUser.getCurrentUser();
                                          }
                                        }
                                        items7[1] = tmp5.description;
                                        cResult[46] = tmp5.description;
                                        cResult[47] = tmp5.text;
                                        cResult[48] = items7;
                                        tmp69 = items7;
                                      }
                                      class A {
                                        constructor() {
                                          return currentUser.getCurrentUser();
                                        }
                                      }
                                      tmp67[0] = tmp5.text;
                                      tmp67[3] = tmp36.title;
                                      const tmp68 = closure_20(legacyProps(tmp2[57]).Text, tmp67);
                                      cResult[43] = tmp36.title;
                                      cResult[44] = tmp5.text;
                                      cResult[45] = tmp68;
                                      tmp65 = tmp68;
                                    }
                                    class A {
                                      constructor() {
                                        return currentUser.getCurrentUser();
                                      }
                                    }
                                    if (true === tmp36.showBetaBadge) {
                                      const obj5 = { size: null, gradient: true, style: tmp5.betaTag };
                                      const tmp10Result2 = analyticsLocations2(tmp2[56]);
                                      class A {
                                        constructor() {
                                          return currentUser.getCurrentUser();
                                        }
                                      }
                                      tmp62 = closure_20(tmp10Result2, obj5);
                                    }
                                    cResult[40] = tmp36.showBetaBadge;
                                    cResult[41] = tmp5.betaTag;
                                    cResult[42] = tmp62;
                                    tmp61 = tmp62;
                                  }
                                }
                                class A {
                                  constructor() {
                                    return currentUser.getCurrentUser();
                                  }
                                }
                                const obj6 = { pageConfig: tmp36, styles: tmp5, useReducedMotion: stateFromStores3 };
                                const tmp60 = closure_20(closure_26, obj6);
                                cResult[36] = tmp36;
                                cResult[37] = tmp5;
                                cResult[38] = stateFromStores3;
                                cResult[39] = tmp60;
                                tmp58 = tmp60;
                              }
                            }
                          }
                        }
                        const items8 = [, , , ];
                        class A {
                          constructor() {
                            return currentUser.getCurrentUser();
                          }
                        }
                        items8[1] = analyticsLocations2;
                        items8[2] = useTier0UpsellContent;
                        items8[3] = legacyProps;
                        cResult[29] = analyticsLocations2;
                        cResult[30] = legacyProps;
                        cResult[31] = tmp36;
                        cResult[32] = useTier0UpsellContent;
                        cResult[33] = items8;
                        tmp49 = items8;
                      }
                    }
                  }
                  cResult[24] = analyticsLocations2;
                  let analyticsProperties;
                  if (legacyProps != null) {
                    analyticsProperties = legacyProps.analyticsProperties;
                  }
                  function te() {
                    let obj2;
                    let analyticsProperties;
                    const track = AnalyticsUtilsDefault.track;
                    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
                    AnalyticsUtilsDefault;
                    if (legacyProps != null) {
                      analyticsProperties = legacyProps.analyticsProperties;
                    }
                    const obj = { type: upsellType, location: location, location_stack: analyticsLocations2, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? c10.TIER_0 : c10.TIER_2), voice_guild_id: guildId };
                    const merged = Object.assign(analyticsProperties);
                    upsellType = undefined;
                    if (upsellType != null) {
                      upsellType = upsellType.upsellType;
                    }
                    obj2 = PremiumUtils;
                    guildId = RTCConnectionStore.getGuildId();
                    if (guildId == null) {
                      guildId = null;
                    }
                    track(PREMIUM_UPSELL_VIEWED, obj);
                  }
                  cResult[25] = analyticsProperties;
                  cResult[26] = tmp36.upsellType;
                  cResult[27] = useTier0UpsellContent;
                  cResult[28] = te;
                  tmp46 = te;
                }
              }
            }
          }
        }
        const obj7 = { user: stateFromStores, premiumType: tmp33, theme: stateFromStores1, guildId: stateFromStores2, featureName, subfeatureName };
        cResult[15] = featureName;
        cResult[16] = stateFromStores2;
        cResult[17] = subfeatureName;
        cResult[18] = tmp33;
        cResult[19] = stateFromStores1;
        cResult[20] = stateFromStores;
        cResult[21] = obj7;
        tmp34 = obj7;
      }
    }
    let mobileRoadblockButtonText = null;
    if (!useTier0UpsellContent) {
      const obj8 = { subscriptionTier: null, trialOffer: premiumTrialOffer, discountOffer: premiumDiscountOffer };
      const tmpResult19 = legacyProps(tmp2[50]);
      class A {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      mobileRoadblockButtonText = tmpResult19.getMobileRoadblockButtonText(obj8);
    }
    cResult[7] = premiumDiscountOffer;
    cResult[8] = premiumTrialOffer;
    cResult[9] = useTier0UpsellContent;
    cResult[10] = mobileRoadblockButtonText;
    tmp20 = mobileRoadblockButtonText;
  }
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmpResult20 = legacyProps(tmp2[46]);
    initialUpsellKey = tmpResult20.getUpsellType(featureName);
  }
  cResult[4] = featureName;
  let initialUpsellKey1;
  if (legacyProps != null) {
    initialUpsellKey1 = legacyProps.initialUpsellKey;
  }
  cResult[5] = initialUpsellKey1;
  cResult[6] = initialUpsellKey;
  tmp14 = initialUpsellKey;
}) : ((analyticsLocations) => {
  let currentUser;
  let featureName;
  let intl3;
  let items6;
  let items7;
  let items8;
  let legacyProps;
  let obj12;
  let str;
  let theme;
  let tmp30;
  let useReducedMotion;
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  const subfeatureName = analyticsLocations.subfeatureName;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const onDismiss = analyticsLocations.onDismiss;
  const tmp = closure_23();
  let obj = legacyProps(useTier0UpsellContent[44]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = analyticsLocations(useTier0UpsellContent[45])(analyticsLocations1).analyticsLocations;
  let initialUpsellKey;
  const usePremiumUpsellConfig = legacyProps(useTier0UpsellContent[47]).usePremiumUpsellConfig;
  legacyProps(useTier0UpsellContent[47]);
  const tmp7 = analyticsLocations1;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmp2Result = legacyProps(useTier0UpsellContent[46]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  const tmp2Result9 = legacyProps(useTier0UpsellContent[48]);
  const premiumTrialOffer = tmp2Result9.usePremiumTrialOffer();
  legacyProps(useTier0UpsellContent[49]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj2 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp12 };
    const tmp2Result11 = legacyProps(useTier0UpsellContent[50]);
    mobileRoadblockButtonText = tmp2Result11.getMobileRoadblockButtonText(obj2);
  }
  const items1 = [ThemeStore];
  const tmp2Result12 = legacyProps(useTier0UpsellContent[44]);
  const stateFromStores1 = tmp2Result12.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result13 = legacyProps(useTier0UpsellContent[44]);
  const obj3 = { user: stateFromStores, premiumType: useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2, theme: stateFromStores1, guildId: tmp2Result13.useStateFromStores(items2, () => guildId.getGuildId()), featureName, subfeatureName };
  const tmp17 = closure_24(obj3)[featureName];
  upsellType = tmp17;
  const items3 = [AccessibilityStore];
  const tmp2Result14 = legacyProps(useTier0UpsellContent[44]);
  const stateFromStores2 = tmp2Result14.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result15 = legacyProps(useTier0UpsellContent[24]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result15.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    const tmp2Result16 = legacyProps(useTier0UpsellContent[51]);
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result16.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  }
  const items4 = [tmp17, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let obj2;
    let analyticsProperties;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj = { type: upsellType, location: location, location_stack: analyticsLocations, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? c10.TIER_0 : c10.TIER_2), voice_guild_id: guildId };
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2 = PremiumUtils;
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    track(PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  const tmp21 = analyticsLocations(useTier0UpsellContent[53])(useTier0UpsellContent, onViewAllPerks, tmp17.analyticsPage, undefined, tmp7);
  const loading = tmp21.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp21.onPress;
  let tmp24Result2 = null;
  if (null != tmp17) {
    const obj4 = { startExpanded: true, onDismiss, children: closure_22(upsellType, obj12) };
    const obj5 = { pageConfig: tmp17, styles: tmp, useReducedMotion: stateFromStores2 };
    const ActionSheet = legacyProps(tmp3[55]).ActionSheet;
    const items5 = [closure_20(closure_26, obj5), , ];
    let tmp24Result = null;
    const obj6 = { style: tmp.textContainer, children: items6 };
    if (true === tmp17.showBetaBadge) {
      const obj7 = { size: legacyProps(useTier0UpsellContent[56]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = analyticsLocations(useTier0UpsellContent[56]);
      tmp24Result = closure_20(tmp5Result, obj7);
    }
    items6 = [tmp24Result, , ];
    const obj8 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp17.title };
    items6[1] = closure_20(legacyProps(useTier0UpsellContent[57]).Text, obj8);
    const obj9 = { style: items7, variant: "text-sm/normal", children: tmp17.description };
    items7 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    items6[2] = closure_20(legacyProps(useTier0UpsellContent[57]).Text, obj9);
    items5[1] = closure_22(upsellType, obj6);
    const obj10 = { style: tmp.buttonContainer, children: items8 };
    const obj11 = { loading, onPress: tmp30, text: mobileRoadblockButtonText, icon: analyticsLocations(useTier0UpsellContent[59]), variant: str };
    tmp30 = null;
    const Button = legacyProps(tmp3[58]).Button;
    if (!loading) {
      tmp30 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl2 = legacyProps(tmp3[26]).intl;
      mobileRoadblockButtonText = intl2.string(legacyProps(tmp3[26]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl = legacyProps(tmp3[26]).intl;
      mobileRoadblockButtonText = intl.string(legacyProps(tmp3[26]).t["8x0jKT"]);
    }
    str = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str2 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str2 = "experimental_premium-basic";
      }
      str = str2;
    }
    obj12 = { children: items5 };
    items8 = [closure_20(Button, obj11), ];
    const obj13 = { variant: "secondary", text: intl3.string(legacyProps(useTier0UpsellContent[26]).t.PcTCB7), onPress: tmp22 };
    const Button2 = legacyProps(tmp3[58]).Button;
    intl3 = legacyProps(tmp3[26]).intl;
    items8[1] = closure_20(Button2, obj13);
    items5[2] = closure_22(upsellType, obj10);
    tmp24Result2 = closure_20(ActionSheet, obj4);
  }
  return tmp24Result2;
});
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default tmp7;