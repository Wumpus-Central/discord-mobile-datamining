// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05605_LinearGradient.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import openPremiumUpsellActionSheet from "../utils/openPremiumUpsellActionSheet.tsx";
import _modDef7492 from "../../../../../../_runtime/metro/07492__.js";
import _modDef7493 from "../../../../../../_runtime/metro/07493__.js";
import showForLaterModal from "../../../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../../../saved_messages/SavedMessagesTypes.tsx";
import APNGPlayer from "../../../../image/native/APNGPlayer.android.tsx";
import _modDef11849 from "../../../../../../_runtime/metro/11849__.js";
import _modDef13137 from "../../../../../../_runtime/metro/13137__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1379);
({ PremiumSubscriptionSKUs: c10, PremiumTypes: closure_11, PremiumUpsellTypes: closure_12 } = PremiumConstants);
const Constants = fn(1085);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = fn(4937).ApplicationStreamFPS;
const SavedMessagesConstants = fn(7482);
({ SAVED_BOOKMARKS_MAX: closure_17, SAVED_REMINDERS_MAX: closure_18 } = SavedMessagesConstants);
const premiumMax = fn(7476).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 },
  image: { width: 240, height: 144 },
  text: { alignSelf: "center", textAlign: "center" },
  betaTag: { marginLeft: 0 },
  description: null,
  textContainer: null,
  buttonContainer: null,
  imageGradientBackgroundContainer: null,
  imageGradientBackground: null,
  imageInGradientBackground: null,
};
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj5 = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackgroundContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackground = {
  width: "100%",
  marginHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.space.PX_12,
};
let obj7 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_23 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const tmp = _require;
      const cResult = require("c").c(76);
      ({ premiumType, guildId, featureName, subfeatureName, theme } = arg0);
      let obj = require("c");
      const token = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
      const obj2 = require("useToken");
      const token1 = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
      let str = "dark";
      if (theme === constants4.LIGHT) {
        str = "light";
      }
      if (cResult[0] === featureName) {
        if (cResult[1] === guildId) {
          if (cResult[2] === str) {
            if (cResult[3] === premiumType) {
              if (cResult[4] === subfeatureName) {
                _require = tmp7;
                const tmp4Result = importDefault(cResult[5] ? 13133 : 13134);
                if (cResult[46] === cResult[6]) {
                  if (cResult[47] === tmp4Result) {
                    if (cResult[48] === tmp18) {
                      if (cResult[49] === tmp19) {
                        let tmp84 = cResult[50];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl18 = tmp(1126).intl;
                        const obj4 = { premiumMax };
                        const formatToPlainStringResult = intl18.formatToPlainString(tmp(1126).t.GNoaxo, obj4);
                        cResult[51] = formatToPlainStringResult;
                        let tmp88 = formatToPlainStringResult;
                      } else {
                        tmp88 = cResult[51];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj5 = {
                          title: tmp88,
                          showBetaBadge: true,
                          description: null,
                          analyticsPage: null,
                          upsellType: null,
                          image: null,
                        };
                        const obj6 = { children: null };
                        const intl19 = tmp(1126).intl;
                        const obj7 = {
                          premiumMax,
                          onClick() {
                            ActionSheetActionCreatorsDefault.hideActionSheet(
                              closure_0(7480).PREMIUM_UPSELL_ACTION_SHEET_KEY,
                            );
                            const result = closure_0(11840).showScheduledMessagesModal();
                          },
                        };
                        obj6.children = intl19.format(tmp(1126).t["1kFyto"], obj7);
                        obj5.description = closure_20(closure_21, obj6);
                        obj5.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
                        obj5.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
                        obj5.image = _modDef11849;
                        cResult[52] = obj5;
                        let tmp91 = obj5;
                      } else {
                        tmp91 = cResult[52];
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
                        let tmp98 = formatToPlainStringResult1;
                        let tmp97 = stringResult;
                      } else {
                        tmp97 = cResult[53];
                        tmp98 = cResult[54];
                      }
                      if (cResult[55] === token1) {
                        if (cResult[56] === token) {
                          let tmp102 = cResult[57];
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
                                          if (cResult[67] === tmp84) {
                                            if (cResult[68] === tmp102) {
                                              if (cResult[69] === tmp20) {
                                                if (cResult[70] === tmp21) {
                                                  if (cResult[71] === tmp22) {
                                                    if (cResult[72] === tmp23) {
                                                      if (cResult[73] === tmp24) {
                                                        if (cResult[74] === tmp25) {
                                                          let tmp105 = cResult[75];
                                                        }
                                                        return tmp105;
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
                        obj9[tmp20] = tmp21;
                        obj9[tmp22] = tmp23;
                        obj9[tmp24] = tmp25;
                        obj9[tmp9] = tmp10;
                        obj9[tmp11] = tmp12;
                        obj9[tmp13] = tmp14;
                        obj9[tmp15] = tmp16;
                        obj9[tmp17] = tmp84;
                        obj9[tmp(7483).EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp91;
                        obj9[tmp(7483).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp102;
                        cResult[58] = tmp9;
                        cResult[59] = tmp10;
                        cResult[60] = tmp11;
                        cResult[61] = tmp12;
                        cResult[62] = tmp13;
                        cResult[63] = tmp14;
                        cResult[64] = tmp15;
                        cResult[65] = tmp16;
                        cResult[66] = tmp17;
                        cResult[67] = tmp84;
                        cResult[68] = tmp102;
                        cResult[69] = tmp20;
                        cResult[70] = tmp21;
                        cResult[71] = tmp22;
                        cResult[72] = tmp23;
                        cResult[73] = tmp24;
                        cResult[74] = tmp25;
                        cResult[75] = obj9;
                        tmp105 = obj9;
                      }
                      const obj10 = {
                        title: tmp97,
                        description: tmp98,
                        analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY,
                        upsellType: constants.STREAM_QUALITY_UPSELL,
                        image: _modDef13137,
                        imageGradientBackground: null,
                      };
                      const obj11 = { colors: null, start: null, end: null };
                      const items = [token, token1];
                      obj11.colors = items;
                      obj11.start = tmp(1105).HorizontalGradient.START;
                      obj11.end = tmp(1105).HorizontalGradient.END;
                      obj10.imageGradientBackground = obj11;
                      cResult[55] = token1;
                      cResult[56] = token;
                      cResult[57] = obj10;
                      tmp102 = obj10;
                    }
                  }
                }
                const obj12 = {
                  title: cResult[6],
                  showBetaBadge: cResult[16],
                  description: cResult[17],
                  analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER,
                  upsellType: constants.FOR_LATER_MODAL_UPSELL,
                  image: tmp4Result,
                };
                cResult[46] = cResult[6];
                cResult[47] = tmp4Result;
                cResult[48] = cResult[16];
                cResult[49] = cResult[17];
                cResult[50] = obj12;
                tmp84 = obj12;
              }
            }
          }
        }
      }
      const obj3 = require("useToken");
      const premiumTypeDisplayName = tmp(4528).getPremiumTypeDisplayName(premiumType);
      let effectiveUploadLimit;
      if (featureName === tmp(7483).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
        const tmpResult6 = tmp(7295);
        effectiveUploadLimit = tmpResult6.getEffectiveUploadLimit(tmp(7270).maxFileSize(guildId));
        const tmpResult7 = tmp(7270);
      }
      const tmp28 = subfeatureName === tmp(7484).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
      _require = tmp28;
      if (subfeatureName === tmp(7484).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
        const forLaterLimit = tmp(7485).getForLaterLimit("native.PremiumUpsellActionSheet", tmp28);
        const tmpResult8 = tmp(7485);
      }
      const tmp30 = tmp28 ? closure_18 : closure_17;
      if (cResult[24] !== featureName) {
        let tmp32;
        if (
          tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")
        ) {
          tmp32 = closure_20(tmp(7488).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
        }
        cResult[24] = featureName;
        cResult[25] = tmp32;
        let tmp31 = tmp32;
        tmpResult9 = tmp(7487);
      } else {
        tmp31 = cResult[25];
      }
      const SOUNDBOARD_EVERYWHERE = tmp(7483).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
      const obj13 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
      const intl = tmp(1126).intl;
      obj13.title = intl.string(tmp(1126).t.jGDYF0);
      const intl2 = tmp(1126).intl;
      obj13.description = intl2.formatToPlainString(tmp(1126).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
      obj13.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
      obj13.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
      const tmpResult = tmp(4528);
      obj13.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
      const EMOJIS_EVERYWHERE = tmp(7483).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
      const obj15 = {
        title: null,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
        illustration: null,
      };
      const intl3 = tmp(1126).intl;
      obj15.title = intl3.string(tmp(1126).t.zY5PPb);
      const intl4 = tmp(1126).intl;
      obj15.description = intl4.formatToPlainString(tmp(1126).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
      obj15.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
      obj15.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
      const obj14 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
      obj15.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
      obj15.illustration = tmp31;
      const STICKERS_EVERYWHERE = tmp(7483).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult1 = intl5.string(tmp(1126).t.Eukdgl);
        const intl6 = tmp(1126).intl;
        const stringResult2 = intl6.string(tmp(1126).t.sMmd7s);
        cResult[26] = stringResult1;
        cResult[27] = stringResult2;
        let tmp37 = stringResult2;
        let tmp36 = stringResult1;
      } else {
        tmp36 = cResult[26];
        tmp37 = cResult[27];
      }
      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
        const obj17 = {
          title: tmp36,
          description: tmp37,
          analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE,
          upsellType: constants.STICKERS_EVERYWHERE_UPSELL,
          illustration: closure_20(tmp(7490).StickersSpotIllustration, { width: 235, height: 132, accessible: false }),
        };
        cResult[28] = obj17;
        let tmp40 = obj17;
      } else {
        tmp40 = cResult[28];
      }
      const INCREASED_FILE_UPLOAD_SIZE = tmp(7483).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        const intl7 = tmp(1126).intl;
        const stringResult3 = intl7.string(tmp(1126).t["G+pngo"]);
        cResult[29] = stringResult3;
        let tmp42 = stringResult3;
      } else {
        tmp42 = cResult[29];
      }
      const obj16 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
      let result = tmp(7270).fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
      if (cResult[30] !== result) {
        const obj18 = { children: result };
        const tmp48 = closure_20(closure_21, obj18);
        cResult[30] = result;
        cResult[31] = tmp48;
        let tmp45 = tmp48;
      } else {
        tmp45 = cResult[31];
      }
      const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
      if (cResult[32] !== combined) {
        const obj19 = { uri: combined };
        cResult[32] = combined;
        cResult[33] = obj19;
        let tmp50 = obj19;
      } else {
        tmp50 = cResult[33];
      }
      if (cResult[34] === tmp45) {
        if (cResult[35] === tmp50) {
          let tmp51 = cResult[36];
        }
        const ANIMATED_EMOJIS = tmp(7483).EntitlementFeatureNames.ANIMATED_EMOJIS;
        const _Symbol = Symbol;
        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
          const intl8 = tmp(1126).intl;
          const stringResult4 = intl8.string(tmp(1126).t.SI7R9I);
          cResult[37] = stringResult4;
          let tmp52 = stringResult4;
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
          let tmp56 = obj21;
        } else {
          tmp56 = cResult[39];
        }
        if (cResult[40] === tmp31) {
          if (cResult[41] === formatToPlainStringResult2) {
            if (cResult[42] === tmp56) {
              let tmp57 = cResult[43];
            }
            const CLIENT_THEMES = tmp(7483).EntitlementFeatureNames.CLIENT_THEMES;
            const _Symbol2 = Symbol;
            if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
              const obj22 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
              const intl10 = tmp(1126).intl;
              obj22.title = intl10.string(tmp(1126).t.p0I2Bk);
              const intl11 = tmp(1126).intl;
              obj22.description = intl11.string(tmp(1126).t.jBqF2k);
              obj22.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
              obj22.upsellType = constants.CLIENT_THEMES_UPSELL;
              obj22.image = _modDef7492;
              cResult[44] = obj22;
              let tmp58 = obj22;
            } else {
              tmp58 = cResult[44];
            }
            const APP_ICONS = tmp(7483).EntitlementFeatureNames.APP_ICONS;
            const _Symbol3 = Symbol;
            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
              const obj23 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
              const intl12 = tmp(1126).intl;
              obj23.title = intl12.string(tmp(1126).t.TYFwcy);
              const intl13 = tmp(1126).intl;
              obj23.description = intl13.string(tmp(1126).t.HDt8ip);
              obj23.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
              obj23.upsellType = constants.APP_ICON_UPSELL;
              obj23.image = _modDef7493;
              cResult[45] = obj23;
              let tmp59 = obj23;
            } else {
              tmp59 = cResult[45];
            }
            const SAVED_MESSAGES = tmp(7483).EntitlementFeatureNames.SAVED_MESSAGES;
            if (null == forLaterLimit) {
              const intl15 = tmp(1126).intl;
              let stringResult5 = intl15.string(tmp(1126).t.YXk6N7);
            } else {
              const intl14 = tmp(1126).intl;
              const t = tmp(1126).t;
              const obj24 = { premiumMax: tmp30 };
              stringResult5 = intl14.formatToPlainString(tmp28 ? t["cpj9o/"] : t.Oxm3Sq, obj24);
            }
            if (null == forLaterLimit) {
              const intl17 = tmp(1126).intl;
              let stringResult6 = intl17.string(tmp(1126).t["m/HzW8"]);
            } else {
              const intl16 = tmp(1126).intl;
              const t2 = tmp(1126).t;
              const obj25 = { children: null };
              const obj26 = {
                max: forLaterLimit,
                premiumMax: tmp30,
                onClick() {
                  ActionSheetActionCreatorsDefault.hideActionSheet(
                    openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY,
                  );
                  const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
                  showForLaterModal.showForLaterModal(
                    closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
                  );
                },
              };
              obj25.children = intl16.format(tmp28 ? t2.NRF0Wh : t2.o5OLyw, obj26);
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
          }
        }
        const obj27 = {
          title: tmp52,
          description: formatToPlainStringResult2,
          analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI,
          upsellType: constants.ANIMATED_EMOJI_UPSELL,
          image: tmp56,
          illustration: tmp31,
        };
        cResult[40] = tmp31;
        cResult[41] = formatToPlainStringResult2;
        cResult[42] = tmp56;
        cResult[43] = obj27;
        tmp57 = obj27;
      }
      const obj28 = {
        title: tmp42,
        description: tmp45,
        analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD,
        upsellType: constants.LARGER_FILE_UPLOAD_UPSELL,
        image: tmp50,
      };
      cResult[34] = tmp45;
      cResult[35] = tmp50;
      cResult[36] = obj28;
      tmp51 = obj28;
      const tmpResult10 = tmp(7270);
    }
  : (arg0) => {
      ({ guildId, featureName, subfeatureName } = arg0);
      _require = undefined;
      const tmp = _require;
      ({ premiumType, theme } = arg0);
      const token = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
      let obj = require("useToken");
      let str = "dark";
      const token1 = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
      if (theme === constants4.LIGHT) {
        str = "light";
      }
      const obj2 = require("useToken");
      const premiumTypeDisplayName = tmp(4528).getPremiumTypeDisplayName(premiumType);
      let effectiveUploadLimit;
      if (featureName === tmp(7483).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
        const tmpResult6 = tmp(7295);
        effectiveUploadLimit = tmpResult6.getEffectiveUploadLimit(tmp(7270).maxFileSize(guildId));
        const tmpResult7 = tmp(7270);
      }
      const tmp8 = subfeatureName === tmp(7484).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
      _require = tmp8;
      if (subfeatureName === tmp(7484).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
        const forLaterLimit = tmp(7485).getForLaterLimit("native.PremiumUpsellActionSheet", tmp8);
        const tmpResult8 = tmp(7485);
      }
      const tmp10 = tmp8 ? closure_18 : closure_17;
      const tmpResult = tmp(4528);
      let tmp11;
      if (
        tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")
      ) {
        tmp11 = closure_20(tmp(7488).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
      }
      const obj3 = {};
      const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
      const intl = tmp(1126).intl;
      obj4.title = intl.string(tmp(1126).t.jGDYF0);
      const intl2 = tmp(1126).intl;
      obj4.description = intl2.formatToPlainString(tmp(1126).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
      obj4.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
      obj4.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
      tmpResult9 = tmp(7487);
      obj4.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
      obj3[tmp(7483).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj4;
      const obj6 = {
        title: null,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
        illustration: null,
      };
      const intl3 = tmp(1126).intl;
      obj6.title = intl3.string(tmp(1126).t.zY5PPb);
      const intl4 = tmp(1126).intl;
      obj6.description = intl4.formatToPlainString(tmp(1126).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
      obj6.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
      obj6.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
      const obj5 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
      obj6.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
      obj6.illustration = tmp11;
      obj3[tmp(7483).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj6;
      const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
      const intl5 = tmp(1126).intl;
      obj8.title = intl5.string(tmp(1126).t.Eukdgl);
      const intl6 = tmp(1126).intl;
      obj8.description = intl6.string(tmp(1126).t.sMmd7s);
      obj8.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
      obj8.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
      obj8.illustration = closure_20(tmp(7490).StickersSpotIllustration, {
        width: 235,
        height: 132,
        accessible: false,
      });
      obj3[tmp(7483).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj8;
      const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
      const intl7 = tmp(1126).intl;
      obj9.title = intl7.string(tmp(1126).t["G+pngo"]);
      const obj10 = { children: null };
      const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
      obj10.children = tmp(7270).fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
      obj9.description = closure_20(closure_21, obj10);
      obj9.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
      obj9.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
      const tmpResult10 = tmp(7270);
      obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
      obj3[tmp(7483).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj9;
      const obj12 = {
        title: null,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
        illustration: null,
      };
      const intl8 = tmp(1126).intl;
      obj12.title = intl8.string(tmp(1126).t.SI7R9I);
      const intl9 = tmp(1126).intl;
      obj12.description = intl9.formatToPlainString(tmp(1126).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
      obj12.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
      obj12.upsellType = constants.ANIMATED_EMOJI_UPSELL;
      const obj11 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
      obj12.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
      obj12.illustration = tmp11;
      obj3[tmp(7483).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj12;
      const obj14 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
      const intl10 = tmp(1126).intl;
      obj14.title = intl10.string(tmp(1126).t.p0I2Bk);
      const intl11 = tmp(1126).intl;
      obj14.description = intl11.string(tmp(1126).t.jBqF2k);
      obj14.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
      obj14.upsellType = constants.CLIENT_THEMES_UPSELL;
      obj14.image = _modDef7492;
      obj3[tmp(7483).EntitlementFeatureNames.CLIENT_THEMES] = obj14;
      const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
      const intl12 = tmp(1126).intl;
      obj15.title = intl12.string(tmp(1126).t.TYFwcy);
      const intl13 = tmp(1126).intl;
      obj15.description = intl13.string(tmp(1126).t.HDt8ip);
      obj15.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
      obj15.upsellType = constants.APP_ICON_UPSELL;
      obj15.image = _modDef7493;
      obj3[tmp(7483).EntitlementFeatureNames.APP_ICONS] = obj15;
      if (null == forLaterLimit) {
        const intl15 = tmp(1126).intl;
        let stringResult = intl15.string(tmp(1126).t.YXk6N7);
      } else {
        const intl14 = tmp(1126).intl;
        const t = tmp(1126).t;
        const obj16 = { premiumMax: tmp10 };
        stringResult = intl14.formatToPlainString(tmp8 ? t["cpj9o/"] : t.Oxm3Sq, obj16);
      }
      const obj17 = {
        title: stringResult,
        showBetaBadge: true,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
      };
      if (null == forLaterLimit) {
        const intl17 = tmp(1126).intl;
        let stringResult1 = intl17.string(tmp(1126).t["m/HzW8"]);
      } else {
        const intl16 = tmp(1126).intl;
        const t2 = tmp(1126).t;
        const obj18 = { children: null };
        const obj19 = {
          max: forLaterLimit,
          premiumMax: tmp10,
          onClick() {
            ActionSheetActionCreatorsDefault.hideActionSheet(
              openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY,
            );
            const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
            showForLaterModal.showForLaterModal(
              closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
            );
          },
        };
        obj18.children = intl16.format(tmp8 ? t2.NRF0Wh : t2.o5OLyw, obj19);
        stringResult1 = closure_20(closure_21, obj18);
      }
      obj17.description = stringResult1;
      obj17.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
      obj17.upsellType = constants.FOR_LATER_MODAL_UPSELL;
      obj17.image = importDefault(tmp8 ? 13133 : 13134);
      obj3[tmp(7483).EntitlementFeatureNames.SAVED_MESSAGES] = obj17;
      const obj20 = {
        title: null,
        showBetaBadge: true,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
      };
      const intl18 = tmp(1126).intl;
      obj20.title = intl18.formatToPlainString(tmp(1126).t.GNoaxo, { premiumMax });
      const obj22 = { children: null };
      const intl19 = tmp(1126).intl;
      obj22.children = intl19.format(tmp(1126).t["1kFyto"], {
        premiumMax,
        onClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_0(7480).PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const result = closure_0(11840).showScheduledMessagesModal();
        },
      });
      obj20.description = closure_20(closure_21, obj22);
      obj20.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
      obj20.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
      obj20.image = _modDef11849;
      obj3[tmp(7483).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj20;
      const obj24 = {
        title: null,
        description: null,
        analyticsPage: null,
        upsellType: null,
        image: null,
        imageGradientBackground: null,
      };
      const intl20 = tmp(1126).intl;
      obj24.title = intl20.string(tmp(1126).t.ETZQx5);
      const intl21 = tmp(1126).intl;
      obj24.description = intl21.formatToPlainString(tmp(1126).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
      obj24.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
      obj24.upsellType = constants.STREAM_QUALITY_UPSELL;
      obj24.image = _modDef13137;
      const obj26 = { colors: null, start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END };
      const items = [token, token1];
      obj26.colors = items;
      obj24.imageGradientBackground = obj26;
      obj3[tmp(7483).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj24;
      return obj3;
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
            const tmp7 = closure_1_20(APNGPlayer.APNGPlayer, obj3);
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
      const tmp10 = closure_1_20(FastImageDefault, {
        source: image,
        resizeMode: "contain",
        style,
        enableAnimation: !useReducedMotion,
        accessible: false,
      });
      cResult[3] = image;
      cResult[4] = style;
      cResult[5] = !useReducedMotion;
      cResult[6] = tmp10;
      tmp9 = tmp10;
      obj2 = PlatformUtils;
    }
  : (arg0) => {
      ({ image, style, useReducedMotion } = arg0);
      if (obj.isAndroid()) {
        if (!useReducedMotion) {
          if (null != image.uri) {
            const obj2 = { url: image.uri, style, autoplay: true };
            let tmp5 = closure_1_20(APNGPlayer.APNGPlayer, obj2);
          }
          return tmp5;
        }
      }
      tmp5 = closure_1_20(FastImageDefault, {
        source: image,
        resizeMode: "contain",
        style,
        enableAnimation: !useReducedMotion,
        accessible: false,
      });
      obj = PlatformUtils;
      const obj3 = {
        source: image,
        resizeMode: "contain",
        style,
        enableAnimation: !useReducedMotion,
        accessible: false,
      };
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(27);
      ({ pageConfig, styles, useReducedMotion } = arg0);
      if (null != pageConfig.illustration) {
        if (cResult[0] === pageConfig.illustration) {
        }
        const obj2 = { style: styles.hero, children: pageConfig.illustration };
        const tmp26 = closure_1_20(View, obj2);
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
            const tmp7 = closure_1_20(closure_25, obj3);
            cResult[23] = pageConfig.image;
            cResult[24] = tmp3;
            cResult[25] = useReducedMotion;
            cResult[26] = tmp7;
          }
          const items = [,];
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
                        const tmp20 = closure_1_20(View, obj4);
                        cResult[17] = styles.imageGradientBackgroundContainer;
                        cResult[18] = tmp13;
                        cResult[19] = tmp20;
                      }
                    }
                  }
                }
                const obj5 = {
                  colors: pageConfig.imageGradientBackground.colors,
                  start: pageConfig.imageGradientBackground.start,
                  end: pageConfig.imageGradientBackground.end,
                  style: styles.imageGradientBackground,
                  children: tmp9,
                };
                const tmp16 = closure_1_20(LinearGradientDefault, obj5);
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
            const tmp12 = closure_1_20(closure_25, obj6);
            cResult[7] = pageConfig.image;
            cResult[8] = tmp8;
            cResult[9] = useReducedMotion;
            cResult[10] = tmp12;
            tmp9 = tmp12;
          }
        }
        const items1 = [, ,];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        cResult[3] = styles.hero;
        cResult[4] = styles.image;
        cResult[5] = styles.imageInGradientBackground;
        cResult[6] = items1;
        tmp8 = items1;
      }
    }
  : (arg0) => {
      ({ pageConfig, styles, useReducedMotion } = arg0);
      if (null != pageConfig.illustration) {
        const obj2 = { style: styles.hero, children: pageConfig.illustration };
        let tmp13 = closure_1_20(View, obj2);
      } else {
        tmp13 = null;
        if (null != pageConfig.image) {
          if (null != pageConfig.imageGradientBackground) {
            const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
            const obj4 = {
              colors: pageConfig.imageGradientBackground.colors,
              start: pageConfig.imageGradientBackground.start,
              end: pageConfig.imageGradientBackground.end,
              style: styles.imageGradientBackground,
              children: null,
            };
            const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
            const items = [, ,];
            ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
            obj5.style = items;
            obj5.useReducedMotion = useReducedMotion;
            obj4.children = closure_1_20(closure_25, obj5);
            obj3.children = closure_1_20(LinearGradientDefault, obj4);
            let tmp3 = closure_1_20(View, obj3);
          } else {
            const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
            const items1 = [,];
            ({ hero: arr[0], image: arr[1] } = styles);
            obj.style = items1;
            obj.useReducedMotion = useReducedMotion;
            tmp3 = closure_1_20(closure_25, obj);
          }
        }
      }
      return tmp13;
    };
ReactCompilerGating = fn(558);
let obj8 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = legacyProps(useTier0UpsellContent[16]).c(84);
      ({ featureName, legacyProps } = arg0);
      ({ subfeatureName, analyticsLocations, onDismiss } = arg0);
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
      const tmp5 = closure_23();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class A {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        let tmp7 = A;
        let tmp6 = items1;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = legacyProps(useTier0UpsellContent[16]);
      const stateFromStores = legacyProps(useTier0UpsellContent[44]).useStateFromStores(tmp6, tmp7);
      analyticsLocations2 = analyticsLocations2(tmp2[45])(tmp4).analyticsLocations;
      if (cResult[4] === featureName) {
        class A {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        if (cResult[5] === undefined) {
          let tmp13 = cResult[6];
        }
        const premiumUpsellConfig = legacyProps(tmp2[47]).usePremiumUpsellConfig(tmp13, analyticsLocations2);
        useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
        const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
        const tmpResult11 = legacyProps(tmp2[47]);
        const premiumTrialOffer = legacyProps(tmp2[48]).usePremiumTrialOffer();
        const tmpResult12 = legacyProps(tmp2[48]);
        const premiumDiscountOffer = legacyProps(tmp2[49]).usePremiumDiscountOffer();
        if (cResult[7] === premiumDiscountOffer) {
          if (cResult[8] === premiumTrialOffer) {
            if (cResult[9] === useTier0UpsellContent) {
              let tmp19 = cResult[10];
            }
            const _Symbol = Symbol;
            class A {
              constructor() {
                return closure_1_9.getCurrentUser();
              }
            }
            const stateFromStores1 = legacyProps(tmp2[44]).useStateFromStores(tmp23, tmp24);
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [SelectedGuildStore];
              class A {
                constructor() {
                  return closure_1_9.getCurrentUser();
                }
              }
              cResult[13] = tmp29;
              cResult[14] = items2;
              let tmp27 = items2;
              let tmp26 = tmp29;
            } else {
              tmp26 = cResult[13];
              tmp27 = cResult[14];
            }
            const tmpResult14 = legacyProps(tmp2[44]);
            const stateFromStores2 = legacyProps(tmp2[44]).useStateFromStores(tmp27, tmp26);
            const tmp32 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
            if (cResult[15] === featureName) {
              if (cResult[16] === stateFromStores2) {
                if (cResult[17] === subfeatureName) {
                  if (cResult[18] === tmp32) {
                    if (cResult[19] === stateFromStores1) {
                      if (cResult[20] === stateFromStores) {
                        let tmp33 = cResult[21];
                      }
                      const tmp35 = closure_24(tmp33)[featureName];
                      class A {
                        constructor() {
                          return closure_1_9.getCurrentUser();
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                        const items3 = [AccessibilityStore];
                        class A {
                          constructor() {
                            return closure_1_9.getCurrentUser();
                          }
                        }
                        cResult[22] = items3;
                        cResult[23] = tmp39;
                        let tmp37 = tmp39;
                        let tmp36 = items3;
                      } else {
                        tmp36 = cResult[22];
                        tmp37 = cResult[23];
                      }
                      const stateFromStores3 = legacyProps(tmp2[44]).useStateFromStores(tmp36, tmp37);
                      const tmpResult16 = legacyProps(tmp2[44]);
                      let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
                        tmp2[24],
                      ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(
                        featureName,
                        "native.PremiumUpsellActionSheet",
                      );
                      if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                        mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
                          tmp2[51],
                        ).getMobileStickerPickerUpsellRestyleEnabledForFeature(
                          featureName,
                          "native.PremiumUpsellActionSheet",
                        );
                        const tmpResult18 = legacyProps(tmp2[51]);
                      }
                      if (cResult[24] === analyticsLocations2) {
                        class A {
                          constructor() {
                            return closure_1_9.getCurrentUser();
                          }
                        }
                        if (cResult[25] === undefined) {
                          if (cResult[26] === tmp35.upsellType) {
                            if (cResult[27] === useTier0UpsellContent) {
                              let tmp44 = cResult[28];
                            }
                            if (cResult[29] === analyticsLocations2) {
                              if (cResult[30] === legacyProps) {
                                if (cResult[31] === tmp35) {
                                  if (cResult[32] === useTier0UpsellContent) {
                                    let tmp47 = cResult[33];
                                  }
                                  const effect = onViewAllPerks.useEffect(tmp44, tmp47);
                                  class A {
                                    constructor() {
                                      return closure_1_9.getCurrentUser();
                                    }
                                  }
                                  ({ loading, onPress } = tmp10(tmp2[53])(
                                    useTier0UpsellContent,
                                    onViewAllPerks,
                                    tmp35.analyticsPage,
                                    undefined,
                                    tmp4,
                                  ));
                                  if (cResult[34] !== onViewAllPerks) {
                                    function re() {
                                      ChatInputUtils.dismissKeyboard();
                                      ActionSheetActionCreatorsDefault.hideActionSheet(
                                        openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY,
                                      );
                                      onViewAllPerks();
                                    }
                                    cResult[34] = onViewAllPerks;
                                    class A {
                                      constructor() {
                                        return closure_1_9.getCurrentUser();
                                      }
                                    }
                                    cResult[35] = re;
                                    let tmp54 = re;
                                  } else {
                                    tmp54 = cResult[35];
                                  }
                                  if (null == tmp35) {
                                    return null;
                                  } else {
                                    const ActionSheet = legacyProps(tmp2[55]).ActionSheet;
                                    if (cResult[36] === tmp35) {
                                      if (cResult[37] === tmp5) {
                                        if (cResult[38] === stateFromStores3) {
                                          let tmp56 = cResult[39];
                                        }
                                        if (cResult[40] === tmp35.showBetaBadge) {
                                          if (cResult[41] === tmp5.betaTag) {
                                            let tmp59 = cResult[42];
                                          }
                                          if (cResult[43] === tmp35.title) {
                                            if (cResult[44] === tmp5.text) {
                                              let tmp63 = cResult[45];
                                            }
                                            if (cResult[46] === tmp5.description) {
                                              if (cResult[47] === tmp5.text) {
                                                let tmp67 = cResult[48];
                                              }
                                              if (cResult[49] === tmp35.description) {
                                                if (cResult[50] === tmp67) {
                                                  let tmp68 = cResult[51];
                                                }
                                                if (cResult[52] === tmp5.textContainer) {
                                                  if (cResult[53] === tmp59) {
                                                    if (cResult[54] === tmp63) {
                                                      if (cResult[55] === tmp68) {
                                                        let tmp72 = cResult[56];
                                                      }
                                                      const Button = legacyProps(tmp2[58]).Button;
                                                      class A {
                                                        constructor() {
                                                          return closure_1_9.getCurrentUser();
                                                        }
                                                      }
                                                      if (cResult[57] === tmp19) {
                                                        if (cResult[58] === useTier0UpsellContent) {
                                                          const tmp10Result = tmp10(tmp2[59]);
                                                          class A {
                                                            constructor() {
                                                              return closure_1_9.getCurrentUser();
                                                            }
                                                          }
                                                          if (cResult[60] === Button) {
                                                            if (cResult[61] === loading) {
                                                              if (cResult[62] === onPress) {
                                                                if (cResult[63] === tmp77) {
                                                                  if (cResult[64] === tmp10Result) {
                                                                    if (cResult[65] === str2) {
                                                                      let tmp81 = cResult[66];
                                                                    }
                                                                    const _Symbol4 = Symbol;
                                                                    class A {
                                                                      constructor() {
                                                                        return closure_1_9.getCurrentUser();
                                                                      }
                                                                    }
                                                                    if (cResult[68] !== tmp54) {
                                                                      let obj2 = {
                                                                        variant: "secondary",
                                                                        text: tmp85,
                                                                        onPress: null,
                                                                      };
                                                                      class A {
                                                                        constructor() {
                                                                          return closure_1_9.getCurrentUser();
                                                                        }
                                                                      }
                                                                      const tmp88 = closure_20(
                                                                        legacyProps(tmp2[58]).Button,
                                                                        obj2,
                                                                      );
                                                                      cResult[68] = tmp54;
                                                                      cResult[69] = tmp88;
                                                                      let tmp86 = tmp88;
                                                                    } else {
                                                                      tmp86 = cResult[69];
                                                                    }
                                                                    if (cResult[70] === View) {
                                                                      if (cResult[71] === tmp5.buttonContainer) {
                                                                        if (cResult[72] === tmp81) {
                                                                          if (cResult[73] === tmp86) {
                                                                            let tmp89 = cResult[74];
                                                                          }
                                                                          if (cResult[75] === View) {
                                                                            if (cResult[76] === tmp56) {
                                                                              if (cResult[77] === tmp72) {
                                                                                if (cResult[78] === tmp89) {
                                                                                  let tmp92 = cResult[79];
                                                                                }
                                                                                if (cResult[80] === ActionSheet) {
                                                                                  if (cResult[81] === onDismiss) {
                                                                                    if (cResult[82] === tmp92) {
                                                                                      let tmp96 = cResult[83];
                                                                                    }
                                                                                    return tmp96;
                                                                                  }
                                                                                }
                                                                                class A {
                                                                                  constructor() {
                                                                                    return closure_1_9.getCurrentUser();
                                                                                  }
                                                                                }
                                                                                tmp98[1] = onDismiss;
                                                                                tmp98[2] = tmp92;
                                                                                const tmp99 = closure_20(
                                                                                  ActionSheet,
                                                                                  tmp98,
                                                                                );
                                                                                cResult[80] = ActionSheet;
                                                                                cResult[81] = onDismiss;
                                                                                cResult[82] = tmp92;
                                                                                cResult[83] = tmp99;
                                                                                tmp96 = tmp99;
                                                                              }
                                                                            }
                                                                          }
                                                                          class A {
                                                                            constructor() {
                                                                              return closure_1_9.getCurrentUser();
                                                                            }
                                                                          }
                                                                          const items4 = [tmp56, tmp72, tmp89];
                                                                          tmp94[0] = items4;
                                                                          const tmp95 = closure_22(View, tmp94);
                                                                          cResult[75] = View;
                                                                          cResult[76] = tmp56;
                                                                          cResult[77] = tmp72;
                                                                          cResult[78] = tmp89;
                                                                          cResult[79] = tmp95;
                                                                          tmp92 = tmp95;
                                                                        }
                                                                      }
                                                                    }
                                                                    let obj3 = {
                                                                      style: tmp5.buttonContainer,
                                                                      children: null,
                                                                    };
                                                                    const items5 = [tmp81, tmp86];
                                                                    obj3.children = items5;
                                                                    const tmp91 = closure_22(View, obj3);
                                                                    cResult[70] = View;
                                                                    cResult[71] = tmp5.buttonContainer;
                                                                    cResult[72] = tmp81;
                                                                    cResult[73] = tmp86;
                                                                    cResult[74] = tmp91;
                                                                    tmp89 = tmp91;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          const obj4 = {
                                                            loading,
                                                            onPress,
                                                            text: cResult[59],
                                                            icon: tmp10Result,
                                                            variant: "primary",
                                                          };
                                                          const tmp83 = closure_20(Button, obj4);
                                                          cResult[60] = Button;
                                                          cResult[61] = loading;
                                                          cResult[62] = onPress;
                                                          cResult[63] = cResult[59];
                                                          cResult[64] = tmp10Result;
                                                          cResult[65] = "primary";
                                                          cResult[66] = tmp83;
                                                          tmp81 = tmp83;
                                                        }
                                                      }
                                                      if (useTier0UpsellContent) {
                                                        const intl2 = legacyProps(tmp2[26]).intl;
                                                        let stringResult = intl2.string(legacyProps(tmp2[26]).t.cM8bbx);
                                                      } else {
                                                        stringResult = tmp19;
                                                        if (tmp19 == null) {
                                                          const intl = legacyProps(tmp2[26]).intl;
                                                          stringResult = intl.string(legacyProps(tmp2[26]).t["8x0jKT"]);
                                                        }
                                                      }
                                                      cResult[57] = tmp19;
                                                      cResult[58] = useTier0UpsellContent;
                                                      cResult[59] = stringResult;
                                                    }
                                                  }
                                                }
                                                class A {
                                                  constructor() {
                                                    return closure_1_9.getCurrentUser();
                                                  }
                                                }
                                                tmp74[0] = tmp5.textContainer;
                                                const items6 = [tmp59, tmp63, tmp68];
                                                tmp74[1] = items6;
                                                const tmp75 = closure_22(View, tmp74);
                                                cResult[52] = tmp5.textContainer;
                                                cResult[53] = tmp59;
                                                cResult[54] = tmp63;
                                                cResult[55] = tmp68;
                                                cResult[56] = tmp75;
                                                tmp72 = tmp75;
                                              }
                                              class A {
                                                constructor() {
                                                  return closure_1_9.getCurrentUser();
                                                }
                                              }
                                              tmp70[0] = tmp67;
                                              tmp70[2] = tmp35.description;
                                              const tmp71 = closure_20(legacyProps(tmp2[57]).Text, tmp70);
                                              cResult[49] = tmp35.description;
                                              cResult[50] = tmp67;
                                              cResult[51] = tmp71;
                                              tmp68 = tmp71;
                                            }
                                            const items7 = [,];
                                            class A {
                                              constructor() {
                                                return closure_1_9.getCurrentUser();
                                              }
                                            }
                                            items7[1] = tmp5.description;
                                            cResult[46] = tmp5.description;
                                            cResult[47] = tmp5.text;
                                            cResult[48] = items7;
                                            tmp67 = items7;
                                          }
                                          class A {
                                            constructor() {
                                              return closure_1_9.getCurrentUser();
                                            }
                                          }
                                          tmp65[0] = tmp5.text;
                                          tmp65[3] = tmp35.title;
                                          const tmp66 = closure_20(legacyProps(tmp2[57]).Text, tmp65);
                                          cResult[43] = tmp35.title;
                                          cResult[44] = tmp5.text;
                                          cResult[45] = tmp66;
                                          tmp63 = tmp66;
                                        }
                                        class A {
                                          constructor() {
                                            return closure_1_9.getCurrentUser();
                                          }
                                        }
                                        if (true === tmp35.showBetaBadge) {
                                          const obj5 = { size: null, gradient: true, style: null };
                                          class A {
                                            constructor() {
                                              return closure_1_9.getCurrentUser();
                                            }
                                          }
                                          obj5.style = tmp5.betaTag;
                                          const tmp60 = closure_20(tmp10(tmp2[56]), obj5);
                                          const tmp10Result2 = tmp10(tmp2[56]);
                                        }
                                        cResult[40] = tmp35.showBetaBadge;
                                        cResult[41] = tmp5.betaTag;
                                        cResult[42] = tmp60;
                                        tmp59 = tmp60;
                                      }
                                    }
                                    class A {
                                      constructor() {
                                        return closure_1_9.getCurrentUser();
                                      }
                                    }
                                    const obj6 = {
                                      pageConfig: tmp35,
                                      styles: tmp5,
                                      useReducedMotion: stateFromStores3,
                                    };
                                    const tmp58 = closure_20(closure_26, obj6);
                                    cResult[36] = tmp35;
                                    cResult[37] = tmp5;
                                    cResult[38] = stateFromStores3;
                                    cResult[39] = tmp58;
                                    tmp56 = tmp58;
                                  }
                                  const tmp53 = tmp10(tmp2[53])(
                                    useTier0UpsellContent,
                                    onViewAllPerks,
                                    tmp35.analyticsPage,
                                    undefined,
                                    tmp4,
                                  );
                                }
                              }
                            }
                            const items8 = [, , ,];
                            class A {
                              constructor() {
                                return closure_1_9.getCurrentUser();
                              }
                            }
                            items8[1] = analyticsLocations2;
                            items8[2] = useTier0UpsellContent;
                            items8[3] = legacyProps;
                            cResult[29] = analyticsLocations2;
                            cResult[30] = legacyProps;
                            cResult[31] = tmp35;
                            cResult[32] = useTier0UpsellContent;
                            cResult[33] = items8;
                            tmp47 = items8;
                          }
                        }
                      }
                      cResult[24] = analyticsLocations2;
                      let analyticsProperties;
                      if (legacyProps != null) {
                        analyticsProperties = legacyProps.analyticsProperties;
                      }
                      function te() {
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
                        obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(
                          useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2,
                        );
                        guildId = RTCConnectionStore.getGuildId();
                        if (guildId == null) {
                          guildId = null;
                        }
                        obj2.voice_guild_id = guildId;
                        obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
                      }
                      cResult[25] = analyticsProperties;
                      cResult[26] = tmp35.upsellType;
                      cResult[27] = useTier0UpsellContent;
                      cResult[28] = te;
                      tmp44 = te;
                      const tmpResult17 = legacyProps(tmp2[24]);
                    }
                  }
                }
              }
            }
            const obj7 = {
              user: stateFromStores,
              premiumType: tmp32,
              theme: stateFromStores1,
              guildId: stateFromStores2,
              featureName,
              subfeatureName,
            };
            cResult[15] = featureName;
            cResult[16] = stateFromStores2;
            cResult[17] = subfeatureName;
            cResult[18] = tmp32;
            cResult[19] = stateFromStores1;
            cResult[20] = stateFromStores;
            cResult[21] = obj7;
            tmp33 = obj7;
            const tmpResult15 = legacyProps(tmp2[44]);
          }
        }
        let mobileRoadblockButtonText = null;
        if (!useTier0UpsellContent) {
          const obj8 = { subscriptionTier: null, trialOffer: null, discountOffer: null };
          class A {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          obj8.trialOffer = premiumTrialOffer;
          obj8.discountOffer = premiumDiscountOffer;
          mobileRoadblockButtonText = legacyProps(tmp2[50]).getMobileRoadblockButtonText(obj8);
          const tmpResult19 = legacyProps(tmp2[50]);
        }
        cResult[7] = premiumDiscountOffer;
        cResult[8] = premiumTrialOffer;
        cResult[9] = useTier0UpsellContent;
        cResult[10] = mobileRoadblockButtonText;
        tmp19 = mobileRoadblockButtonText;
        const tmpResult13 = legacyProps(tmp2[49]);
      }
      let initialUpsellKey;
      if (legacyProps != null) {
        initialUpsellKey = legacyProps.initialUpsellKey;
      }
      if (initialUpsellKey == null) {
        initialUpsellKey = legacyProps(tmp2[46]).getUpsellType(featureName);
        const tmpResult20 = legacyProps(tmp2[46]);
      }
      cResult[4] = featureName;
      let initialUpsellKey1;
      if (legacyProps != null) {
        initialUpsellKey1 = legacyProps.initialUpsellKey;
      }
      cResult[5] = initialUpsellKey1;
      cResult[6] = initialUpsellKey;
      tmp13 = initialUpsellKey;
      const tmpResult = legacyProps(useTier0UpsellContent[44]);
    }
  : (analyticsLocations) => {
      ({ featureName, legacyProps } = analyticsLocations);
      let analyticsLocations1 = analyticsLocations.analyticsLocations;
      if (analyticsLocations1 === undefined) {
        analyticsLocations1 = [];
      }
      analyticsLocations = undefined;
      let useTier0UpsellContent;
      let onViewAllPerks;
      let upsellType;
      const tmp = closure_23();
      const items = [UserStore];
      const stateFromStores = legacyProps(useTier0UpsellContent[44]).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
      analyticsLocations = analyticsLocations(useTier0UpsellContent[45])(analyticsLocations1).analyticsLocations;
      let obj = legacyProps(useTier0UpsellContent[44]);
      let initialUpsellKey;
      if (legacyProps != null) {
        initialUpsellKey = legacyProps.initialUpsellKey;
      }
      if (initialUpsellKey == null) {
        initialUpsellKey = legacyProps(tmp3[46]).getUpsellType(featureName);
        const tmp2Result = legacyProps(tmp3[46]);
      }
      const premiumUpsellConfig = legacyProps(useTier0UpsellContent[47]).usePremiumUpsellConfig(
        initialUpsellKey,
        analyticsLocations,
      );
      useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
      let obj2 = legacyProps(useTier0UpsellContent[47]);
      const tmp6 = analyticsLocations1;
      const premiumTrialOffer = legacyProps(useTier0UpsellContent[48]).usePremiumTrialOffer();
      legacyProps(useTier0UpsellContent[49]);
      let mobileRoadblockButtonText = null;
      if (!useTier0UpsellContent) {
        let obj3 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp11 };
        mobileRoadblockButtonText = legacyProps(tmp3[50]).getMobileRoadblockButtonText(obj3);
        const tmp2Result11 = legacyProps(tmp3[50]);
      }
      const tmp2Result9 = legacyProps(useTier0UpsellContent[48]);
      const items1 = [ThemeStore];
      const stateFromStores1 = legacyProps(useTier0UpsellContent[44]).useStateFromStores(items1, () => theme.theme);
      const tmp2Result12 = legacyProps(useTier0UpsellContent[44]);
      const items2 = [SelectedGuildStore];
      const obj4 = {
        user: stateFromStores,
        premiumType: useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2,
        theme: stateFromStores1,
        guildId: legacyProps(useTier0UpsellContent[44]).useStateFromStores(items2, () => guildId.getGuildId()),
        featureName,
        subfeatureName: analyticsLocations.subfeatureName,
      };
      const tmp16 = closure_24(obj4)[featureName];
      upsellType = tmp16;
      const tmp2Result13 = legacyProps(useTier0UpsellContent[44]);
      const items3 = [AccessibilityStore];
      const stateFromStores2 = legacyProps(useTier0UpsellContent[44]).useStateFromStores(
        items3,
        () => useReducedMotion.useReducedMotion,
      );
      const tmp2Result14 = legacyProps(useTier0UpsellContent[44]);
      let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
        useTier0UpsellContent[24],
      ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
      if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
          tmp3[51],
        ).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
        const tmp2Result16 = legacyProps(tmp3[51]);
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
        obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(
          useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2,
        );
        guildId = RTCConnectionStore.getGuildId();
        if (guildId == null) {
          guildId = null;
        }
        obj2.voice_guild_id = guildId;
        obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
      }, items4);
      const tmp20 = analyticsLocations(useTier0UpsellContent[53])(
        useTier0UpsellContent,
        onViewAllPerks,
        tmp16.analyticsPage,
        undefined,
        tmp6,
      );
      const loading = tmp20.loading;
      [][0] = onViewAllPerks;
      let tmp23Result2 = null;
      if (null != tmp16) {
        const obj5 = { startExpanded: true, onDismiss: analyticsLocations.onDismiss, children: null };
        const obj6 = { pageConfig: tmp16, styles: tmp, useReducedMotion: stateFromStores2 };
        const items5 = [closure_20(closure_26, obj6), ,];
        const obj7 = { style: tmp.textContainer, children: null };
        let tmp23Result = null;
        if (true === tmp16.showBetaBadge) {
          const obj8 = { size: legacyProps(tmp3[56]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
          tmp23Result = closure_20(tmp5(tmp3[56]), obj8);
          const tmp5Result = tmp5(tmp3[56]);
        }
        const items6 = [tmp23Result, ,];
        const obj9 = {
          style: tmp.text,
          variant: "heading-lg/extrabold",
          accessibilityRole: "header",
          children: tmp16.title,
        };
        items6[1] = closure_20(legacyProps(tmp3[57]).Text, obj9);
        const obj10 = { style: null, variant: "text-sm/normal", children: null };
        const items7 = [,];
        ({ text: arr9[0], description: arr9[1] } = tmp);
        obj10.style = items7;
        obj10.children = tmp16.description;
        items6[2] = closure_20(legacyProps(tmp3[57]).Text, obj10);
        obj7.children = items6;
        items5[1] = closure_22(upsellType, obj7);
        const obj11 = { style: tmp.buttonContainer, children: null };
        const obj12 = { loading, onPress: null, text: null, icon: null, variant: null };
        let onPress = null;
        if (!loading) {
          onPress = tmp20.onPress;
        }
        obj12.onPress = onPress;
        if (useTier0UpsellContent) {
          const intl2 = legacyProps(tmp3[26]).intl;
          mobileRoadblockButtonText = intl2.string(legacyProps(tmp3[26]).t.cM8bbx);
        } else if (mobileRoadblockButtonText == null) {
          const intl = legacyProps(tmp3[26]).intl;
          mobileRoadblockButtonText = intl.string(legacyProps(tmp3[26]).t["8x0jKT"]);
        }
        obj12.text = mobileRoadblockButtonText;
        obj12.icon = tmp5(tmp3[59]);
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
        const items8 = [closure_20(legacyProps(tmp3[58]).Button, obj12)];
        const obj14 = { variant: "secondary", text: null, onPress: null };
        const intl3 = legacyProps(tmp3[26]).intl;
        obj14.text = intl3.string(legacyProps(tmp3[26]).t.PcTCB7);
        obj14.onPress = tmp21;
        items8[1] = closure_20(legacyProps(tmp3[58]).Button, obj14);
        obj11.children = items8;
        items5[2] = closure_22(upsellType, obj11);
        obj13.children = items5;
        obj5.children = closure_22(upsellType, obj13);
        tmp23Result2 = closure_20(legacyProps(tmp3[55]).ActionSheet, obj5);
      }
      return tmp23Result2;
    };
