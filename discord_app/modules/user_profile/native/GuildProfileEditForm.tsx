// === Module 14927: GuildProfileEditForm ===

// Module 14927 (GuildProfileEditForm)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8288 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9269 */;
import openPremiumModalDefault from "openPremiumModal" /* 9393 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9394 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14831 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14833 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14837 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14856 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 14928 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;

const require = globalThis.__r;

require = fn;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let result = PremiumUtilsDefault.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  let obj3 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  if (result) {
    result = null != guildMember;
  }
  obj3.showEditButton = result;
  obj3.onPressEdit = function handleEditBanner() {
    if (c4) {
      let obj = { user, analyticsLocations, showRemoveBanner: null, removeText: null, onBannerChange: null, onGifBannerSelect: null };
      const tmpResult = ActionSheetActionCreatorsDefault;
      const tmp13 = asyncRequireImpl(14819, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = util.intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(dependencyMap[17]).setPendingChanges({ guildId, banner });
      };
      obj.onGifBannerSelect = function openGifPicker() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { profileAssetType: null, selectionContext: null, guildId: null };
        const obj2 = ActionSheetActionCreatorsDefault;
        obj3.profileAssetType = user(dependencyMap[19]).ProfileAssetType.BANNER;
        obj3.selectionContext = user(dependencyMap[19]).GIFSelectionContext.PROFILE_EDIT;
        obj3.guildId = guildId;
        obj2.openLazy(user(dependencyMap[14])(dependencyMap[18], dependencyMap.paths), "Select GIF Banner", obj3);
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
    } else {
      let obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      let obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
      obj2.analyticsLocation = obj3;
      obj2.analyticsLocations = analyticsLocations;
      const obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
      obj2.analyticsProperties = obj4;
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
      const tmpResult2 = PremiumUpsellUtilsDefault;
    }
  };
  let intl = tmp5(1126).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1126).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_17(UserProfileEditBannerButtonDefault, obj3);
  return closure_17(user(6851).AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTryItOutUpsellExperimentWrapper(arg0) {
  const cResult = c.c(16);
  ({ onLayout, onButtonPress } = arg0);
  const tmp5 = UserProfileEditFormSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (obj2.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled) {
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t.YIZS5B);
      const intl4 = util.intl;
      const stringResult1 = intl4.string(util.t.pj0XBN);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      let tmp20 = stringResult1;
      let tmp19 = stringResult;
    } else {
      tmp19 = cResult[1];
      tmp20 = cResult[2];
    }
    if (cResult[3] === onButtonPress) {
      if (cResult[4] === onLayout) {
        let tmp23 = cResult[5];
      }
      return tmp23;
    }
    const obj4 = { text: tmp19, buttonText: tmp20, buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp25 = constants(UserProfileFloatingUpsellDefault, obj4);
    cResult[3] = onButtonPress;
    cResult[4] = onLayout;
    cResult[5] = tmp25;
    tmp23 = tmp25;
  } else {
    const sum = nativeDefault.space.PX_16 + tmp7.bottom;
    if (cResult[6] !== sum) {
      const obj5 = { bottom: sum };
      cResult[6] = sum;
      cResult[7] = obj5;
      let tmp9 = obj5;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5.floatingUpsell) {
      if (cResult[9] === tmp9) {
        let tmp10 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult2 = intl.string(util.t.pj0XBN);
        cResult[11] = stringResult2;
        let tmp11 = stringResult2;
      } else {
        tmp11 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", children: null };
        const intl2 = util.intl;
        obj6.children = intl2.string(util.t.YIZS5B);
        const tmp15 = constants(Text_Text.Text, obj6);
        cResult[12] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[12];
      }
      if (cResult[13] === onButtonPress) {
        if (cResult[14] === tmp10) {
          let tmp16 = cResult[15];
        }
        return tmp16;
      }
      const obj7 = { style: tmp10, ctaText: tmp11, onPress: onButtonPress, children: tmp13 };
      const tmp18 = constants(UserProfileUpsellCardDefault, obj7);
      cResult[13] = onButtonPress;
      cResult[14] = tmp10;
      cResult[15] = tmp18;
      tmp16 = tmp18;
    }
    const items = [tmp5.floatingUpsell, tmp9];
    cResult[8] = tmp5.floatingUpsell;
    cResult[9] = tmp9;
    cResult[10] = items;
    tmp10 = items;
  }
  obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
}) : (function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
  onButtonPress = onButtonPress.onButtonPress;
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  if (obj.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled) {
    const obj2 = { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", onButtonPress: null, onLayout: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.YIZS5B);
    const intl4 = util.intl;
    obj2.buttonText = intl4.string(util.t.pj0XBN);
    obj2.onButtonPress = onButtonPress;
    obj2.onLayout = onButtonPress.onLayout;
    let tmp6Result = constants(UserProfileFloatingUpsellDefault, obj2);
    const tmp3Result = UserProfileFloatingUpsellDefault;
  } else {
    const obj3 = { style: null, ctaText: null, onPress: null, children: null };
    const items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    obj3.style = items;
    const intl = util.intl;
    obj3.ctaText = intl.string(util.t.pj0XBN);
    obj3.onPress = onButtonPress;
    const obj5 = { variant: "text-sm/normal", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.YIZS5B);
    obj3.children = constants(Text_Text.Text, obj5);
    tmp6Result = constants(UserProfileUpsellCardDefault, obj3);
    const tmp3Result2 = UserProfileUpsellCardDefault;
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileEditForm(currentUser) {
  const cResult = currentUser(guild[22]).c(186);
  currentUser = currentUser.currentUser;
  const tmp5 = require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "guild_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = currentUser(guild[22]);
  const bioMaxLength = currentUser(guild[31]).useBioMaxLength(first);
  const tmpResult = currentUser(guild[31]);
  const ref = first3.useRef(null);
  const ref1 = first3.useRef(null);
  const ref2 = first3.useRef(null);
  const ref3 = first3.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[25])(tmp14).insets;
  const PX_16 = tmp4(tmp2[27]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: null };
    const obj5 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj4.offset = obj5;
    cResult[2] = obj4;
    let tmp15 = obj4;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { ref: ref2, offset: null };
    const obj7 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj6.offset = obj7;
    cResult[3] = obj6;
    let tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp15, tmp16, ];
    const obj8 = { ref: ref3, offset: null };
    const obj9 = { type: "toValue", value: tmp4(tmp2[27]).space.PX_64 };
    obj8.offset = obj9;
    items[2] = obj8;
    cResult[4] = items;
    let tmp17 = items;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj10 = { insets, inputs: tmp17, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj10;
    let tmp18 = obj10;
  } else {
    tmp18 = cResult[6];
  }
  const onFocus = tmp4(tmp2[33])(tmp18).onFocus;
  const tmp19 = require("useGuildProfileEditForm")();
  guild = tmp19.guild;
  ({ errors, isDisabled, pendingNickname, pendingAvatar, pendingBanner, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp19);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[7] = items1;
    let tmp20 = items1;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === currentUser.id) {
    if (cResult[9] === guild) {
      let tmp22 = cResult[10];
    }
    const stateFromStores = tmp(tmp2[35]).useStateFromStores(tmp20, tmp22);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserProfileStore];
      cResult[11] = items2;
      let tmp24 = items2;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] === currentUser.id) {
      if (cResult[13] === guild) {
        let tmp26 = cResult[14];
      }
      const stateFromStores1 = tmp(tmp2[35]).useStateFromStores(tmp24, tmp26);
      let id;
      const tmpResult10 = tmp(tmp2[35]);
      if (guild != null) {
        id = guild.id;
      }
      const tmp4ResultResult = tmp4(tmp2[36])(currentUser.id, id);
      const tmp4Result = tmp4(tmp2[36]);
      const customStatusActivity = tmp(tmp2[37]).useCustomStatusActivity();
      const tmp32 = tmp4(tmp2[38])(tmp4ResultResult);
      if (cResult[15] === currentUser.id) {
        if (cResult[16] === pendingAvatar) {
          let tmp33 = cResult[17];
        }
        const canEditNickname = tmp(tmp2[40]).useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[18] !== currentUser) {
          const result = tmp4(tmp2[8]).canUsePremiumGuildMemberProfile(currentUser);
          cResult[18] = currentUser;
          cResult[19] = result;
          let tmp35 = result;
          const tmp4Result8 = tmp4(tmp2[8]);
        } else {
          tmp35 = cResult[19];
        }
        let themeColors;
        if (stateFromStores1 != null) {
          themeColors = stateFromStores1.themeColors;
        }
        if (cResult[20] === pendingThemeColors) {
          if (cResult[21] === themeColors) {
            let tmp38 = cResult[22];
          }
          let tmp40 = !tmp35;
          if (!tmp35) {
            tmp40 = !tmp9;
          }
          const floatingUpsellHeight = tmp(tmp2[26]).useFloatingUpsellHeight();
          const onLayout = floatingUpsellHeight.onLayout;
          let str;
          if (stateFromStores != null) {
            str = stateFromStores.nick;
          }
          if (str == null) {
            str = "";
          }
          let str2;
          if (stateFromStores1 != null) {
            str2 = stateFromStores1.pronouns;
          }
          if (str2 == null) {
            str2 = "";
          }
          let str3;
          if (tmp4ResultResult != null) {
            str3 = tmp4ResultResult._userProfile.pronouns;
          }
          if (str3 == null) {
            str3 = "";
          }
          if (pendingPronouns == null) {
            pendingPronouns = str2;
          }
          let str4;
          if (stateFromStores1 != null) {
            str4 = stateFromStores1.bio;
          }
          if (str4 == null) {
            str4 = "";
          }
          let str5;
          if (tmp4ResultResult != null) {
            str5 = tmp4ResultResult._userProfile.bio;
          }
          if (str5 == null) {
            str5 = "";
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [tmp4(tmp2[10]).USER_SETTINGS];
            cResult[23] = items3;
            let tmp42 = items3;
          } else {
            tmp42 = cResult[23];
          }
          const analyticsLocations = tmp4(tmp2[9])(tmp42).analyticsLocations;
          if (cResult[24] === currentUser) {
            if (cResult[25] === tmp4ResultResult) {
              if (cResult[26] === pendingThemeColors) {
                let tmp43 = cResult[27];
              }
              ({ theme, primaryColor, secondaryColor } = tmp4(tmp2[42])(tmp43));
              if (cResult[28] === primaryColor) {
                if (cResult[29] === secondaryColor) {
                  if (cResult[30] === theme) {
                    let tmp46 = cResult[31];
                  }
                  const userProfileColors = tmp(tmp2[43]).useUserProfileColors(tmp46);
                  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
                  let num30 = 0;
                  if (tmp40) {
                    num30 = floatingUpsellHeight.height;
                  }
                  const sum = insets.bottom + num30;
                  const sum1 = sum + tmp4(tmp2[27]).space.PX_16;
                  if (cResult[32] === analyticsLocations) {
                    if (cResult[33] === avatarBackground) {
                      if (cResult[34] === tmp32) {
                        if (cResult[35] === bioMaxLength) {
                          if (cResult[36] === canEditNickname) {
                            if (cResult[37] === tmp35) {
                              if (cResult[38] === containerBackground) {
                                if (cResult[39] === str4) {
                                  if (cResult[40] === str) {
                                    if (cResult[41] === currentUser) {
                                      if (cResult[42] === customStatusActivity) {
                                        if (cResult[43] === str5) {
                                          if (cResult[44] === str3) {
                                            if (cResult[45] === tmp4ResultResult) {
                                              if (cResult[46] === errors) {
                                                if (cResult[47] === gradientFallbackBackground) {
                                                  if (cResult[48] === gradientSecondaryBackground) {
                                                    if (cResult[49] === guild) {
                                                      if (cResult[50] === stateFromStores) {
                                                        if (cResult[51] === stateFromStores1) {
                                                          if (cResult[52] === pendingPronouns) {
                                                            if (cResult[53] === tmp45) {
                                                              if (cResult[54] === isDisabled) {
                                                                if (cResult[55] === onFocus) {
                                                                  if (cResult[56] === sum1) {
                                                                    if (cResult[57] === pendingAvatarDecoration) {
                                                                      if (cResult[58] === tmp33) {
                                                                        if (cResult[59] === pendingBanner) {
                                                                          if (cResult[60] === pendingBio) {
                                                                            if (cResult[61] === pendingDisplayNameStyles) {
                                                                              if (cResult[62] === pendingNameplate) {
                                                                                if (cResult[63] === pendingNickname) {
                                                                                  if (cResult[64] === pendingProfileEffect) {
                                                                                    if (cResult[65] === pendingProfileFrame) {
                                                                                      if (cResult[66] === pendingThemeColors) {
                                                                                        if (cResult[67] === primaryColor) {
                                                                                          if (cResult[68] === secondaryColor) {
                                                                                            if (cResult[69] === tmp6) {
                                                                                              if (cResult[70] === tmp5) {
                                                                                                if (cResult[71] === tmp38) {
                                                                                                  if (cResult[72] === theme) {
                                                                                                    let tmp50 = cResult[73];
                                                                                                    let tmp51 = cResult[74];
                                                                                                    let tmp52 = cResult[75];
                                                                                                    let tmp53 = cResult[76];
                                                                                                    let tmp54 = cResult[77];
                                                                                                    let tmp55 = cResult[78];
                                                                                                    let tmp56 = cResult[79];
                                                                                                    let tmp57 = cResult[80];
                                                                                                    let tmp58 = cResult[81];
                                                                                                    let tmp59 = cResult[82];
                                                                                                    let tmp60 = cResult[83];
                                                                                                    let tmp61 = cResult[84];
                                                                                                    let tmp62 = cResult[85];
                                                                                                    let tmp63 = cResult[86];
                                                                                                    let tmp64 = cResult[87];
                                                                                                    let tmp65 = cResult[88];
                                                                                                    let tmp66 = cResult[89];
                                                                                                    let tmp67 = cResult[90];
                                                                                                    let tmp68 = cResult[91];
                                                                                                    let tmp69 = cResult[92];
                                                                                                    let tmp70 = cResult[93];
                                                                                                    let tmp71 = cResult[94];
                                                                                                    let tmp72 = cResult[95];
                                                                                                    let tmp73 = cResult[96];
                                                                                                  }
                                                                                                  const _Symbol4 = Symbol;
                                                                                                  if (tmp73 !== Symbol.for("react.early_return_sentinel")) {
                                                                                                    return tmp73;
                                                                                                  } else {
                                                                                                    if (cResult[148] === tmp50) {
                                                                                                      if (cResult[149] === tmp57) {
                                                                                                        if (cResult[150] === tmp58) {
                                                                                                          if (cResult[151] === tmp59) {
                                                                                                            if (cResult[152] === tmp60) {
                                                                                                              if (cResult[153] === tmp61) {
                                                                                                                if (cResult[154] === tmp62) {
                                                                                                                  if (cResult[155] === tmp63) {
                                                                                                                    let tmp154 = cResult[156];
                                                                                                                  }
                                                                                                                  if (cResult[157] === tmp51) {
                                                                                                                    if (cResult[158] === tmp64) {
                                                                                                                      if (cResult[159] === tmp154) {
                                                                                                                        let tmp157 = cResult[160];
                                                                                                                      }
                                                                                                                      if (cResult[161] === tmp52) {
                                                                                                                        if (cResult[162] === tmp65) {
                                                                                                                          if (cResult[163] === tmp66) {
                                                                                                                            if (cResult[164] === tmp157) {
                                                                                                                              let tmp160 = cResult[165];
                                                                                                                            }
                                                                                                                            if (cResult[166] === tmp53) {
                                                                                                                              if (cResult[167] === tmp67) {
                                                                                                                                if (cResult[168] === tmp68) {
                                                                                                                                  if (cResult[169] === tmp160) {
                                                                                                                                    let tmp163 = cResult[170];
                                                                                                                                  }
                                                                                                                                  if (cResult[171] === tmp56) {
                                                                                                                                    if (cResult[172] === onLayout) {
                                                                                                                                      if (cResult[173] === tmp40) {
                                                                                                                                        let tmp166 = cResult[174];
                                                                                                                                      }
                                                                                                                                      if (cResult[175] === tmp54) {
                                                                                                                                        if (cResult[176] === tmp69) {
                                                                                                                                          if (cResult[177] === tmp163) {
                                                                                                                                            if (cResult[178] === tmp166) {
                                                                                                                                              let tmp170 = cResult[179];
                                                                                                                                            }
                                                                                                                                            if (cResult[180] === tmp55) {
                                                                                                                                              if (cResult[181] === tmp70) {
                                                                                                                                                if (cResult[182] === tmp71) {
                                                                                                                                                  if (cResult[183] === tmp72) {
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                            const obj11 = { theme: tmp70, primaryColor: tmp71, secondaryColor: tmp72, children: tmp170 };
                                                                                                                                            const tmp175 = closure_17(tmp55, obj11);
                                                                                                                                            cResult[180] = tmp55;
                                                                                                                                            cResult[181] = tmp70;
                                                                                                                                            cResult[182] = tmp71;
                                                                                                                                            cResult[183] = tmp72;
                                                                                                                                            cResult[184] = tmp170;
                                                                                                                                            cResult[185] = tmp175;
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                      const obj12 = { style: tmp69, children: null };
                                                                                                                                      const items4 = [tmp163, tmp166];
                                                                                                                                      obj12.children = items4;
                                                                                                                                      const tmp172 = closure_18(tmp54, obj12);
                                                                                                                                      cResult[175] = tmp54;
                                                                                                                                      cResult[176] = tmp69;
                                                                                                                                      cResult[177] = tmp163;
                                                                                                                                      cResult[178] = tmp166;
                                                                                                                                      cResult[179] = tmp172;
                                                                                                                                      tmp170 = tmp172;
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                  let tmp167 = tmp40;
                                                                                                                                  if (tmp40) {
                                                                                                                                    const obj13 = { onButtonPress: tmp56, onLayout };
                                                                                                                                    tmp167 = closure_17(closure_21, obj13);
                                                                                                                                  }
                                                                                                                                  cResult[171] = tmp56;
                                                                                                                                  cResult[172] = onLayout;
                                                                                                                                  cResult[173] = tmp40;
                                                                                                                                  cResult[174] = tmp167;
                                                                                                                                  tmp166 = tmp167;
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj14 = { ref: tmp67, children: null };
                                                                                                                            const items5 = [tmp68, tmp160];
                                                                                                                            obj14.children = items5;
                                                                                                                            const tmp165 = closure_18(tmp53, obj14);
                                                                                                                            cResult[166] = tmp53;
                                                                                                                            cResult[167] = tmp67;
                                                                                                                            cResult[168] = tmp68;
                                                                                                                            cResult[169] = tmp160;
                                                                                                                            cResult[170] = tmp165;
                                                                                                                            tmp163 = tmp165;
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const obj15 = { style: tmp65, children: null };
                                                                                                                      const items6 = [tmp66, tmp157];
                                                                                                                      obj15.children = items6;
                                                                                                                      const tmp162 = closure_18(tmp52, obj15);
                                                                                                                      cResult[161] = tmp52;
                                                                                                                      cResult[162] = tmp65;
                                                                                                                      cResult[163] = tmp66;
                                                                                                                      cResult[164] = tmp157;
                                                                                                                      cResult[165] = tmp162;
                                                                                                                      tmp160 = tmp162;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj16 = { children: null };
                                                                                                                  const items7 = [tmp64, tmp154];
                                                                                                                  obj16.children = items7;
                                                                                                                  const tmp159 = closure_18(tmp51, obj16);
                                                                                                                  cResult[157] = tmp51;
                                                                                                                  cResult[158] = tmp64;
                                                                                                                  cResult[159] = tmp154;
                                                                                                                  cResult[160] = tmp159;
                                                                                                                  tmp157 = tmp159;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                    const obj17 = { fallbackBackground: tmp57, primaryColor: tmp58, secondaryColor: tmp59, containerStyle: tmp60, children: null };
                                                                                                    const items8 = [tmp61, tmp62, tmp63];
                                                                                                    obj17.children = items8;
                                                                                                    const tmp156 = closure_18(tmp50, obj17);
                                                                                                    cResult[148] = tmp50;
                                                                                                    cResult[149] = tmp57;
                                                                                                    cResult[150] = tmp58;
                                                                                                    cResult[151] = tmp59;
                                                                                                    cResult[152] = tmp60;
                                                                                                    cResult[153] = tmp61;
                                                                                                    cResult[154] = tmp62;
                                                                                                    cResult[155] = tmp63;
                                                                                                    cResult[156] = tmp156;
                                                                                                    tmp154 = tmp156;
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const _Symbol3 = Symbol;
                  const obj18 = { backgroundColor: avatarBackground };
                  const tmpResult14 = tmp(tmp2[43]);
                  if (cResult[97] !== errors) {
                    ({ nick, bio, guild_tag } = errors);
                    const tmp81 = first1(errors, analyticsLocations);
                    closure_4 = tmp81;
                    cResult[97] = errors;
                    cResult[98] = bio;
                    cResult[99] = tmp81;
                    cResult[100] = guild_tag;
                    cResult[101] = nick;
                    let tmp78 = nick;
                    let tmp77 = guild_tag;
                    let tmp75 = bio;
                  } else {
                    tmp75 = cResult[98];
                    closure_4 = cResult[99];
                    tmp77 = cResult[100];
                    tmp78 = cResult[101];
                  }
                  first1 = undefined;
                  if (tmp78 != null) {
                    first1 = tmp78[0];
                  }
                  const pronouns = errors.pronouns;
                  if (pronouns != null) {
                    const first2 = pronouns[0];
                  }
                  first3 = undefined;
                  if (tmp75 != null) {
                    first3 = tmp75[0];
                  }
                  let first4;
                  if (tmp77 != null) {
                    first4 = tmp77[0];
                  }
                  let tmp86 = null;
                  let tmp87;
                  let tmp88;
                  let tmp89;
                  let tmp90;
                  let tmp91;
                  let tmp92;
                  let tmp93;
                  let tmp94;
                  let tmp95;
                  let tmp96;
                  let tmp97;
                  let tmp98;
                  let tmp99;
                  let tmp100;
                  let tmp101;
                  let tmp102;
                  let tmp103;
                  let ThemeContextProvider;
                  let tmp105;
                  let tmp106;
                  let tmp107;
                  let tmp108;
                  let tmp109;
                  if (null != guild) {
                    if (cResult[102] === first3) {
                      if (cResult[103] === tmp76) {
                        if (cResult[104] === first4) {
                          if (cResult[105] === first1) {
                            if (cResult[106] === tmp6.errorContainer) {
                              let tmp110 = cResult[107];
                            }
                            if (cResult[108] !== analyticsLocations) {
                              function handleUpsellPress() {
                                const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
                                const obj2 = {};
                                const merged = Object.assign(closure_19);
                                obj2.object = constants.BUTTON_CTA;
                                obj.analyticsLocation = obj2;
                                obj.analyticsLocations = analyticsLocations;
                                obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
                                openPremiumModalDefault(obj);
                              }
                              cResult[108] = analyticsLocations;
                              cResult[109] = handleUpsellPress;
                              let tmp111 = handleUpsellPress;
                            } else {
                              tmp111 = cResult[109];
                            }
                            if (cResult[110] !== gradientSecondaryBackground) {
                              const obj19 = { backgroundColor: gradientSecondaryBackground };
                              cResult[110] = gradientSecondaryBackground;
                              cResult[111] = obj19;
                              let tmp113 = obj19;
                            } else {
                              tmp113 = cResult[111];
                            }
                            if (cResult[112] === tmp6.container) {
                              if (cResult[113] === tmp113) {
                                let tmp114 = cResult[114];
                              }
                              if (cResult[115] !== tmp6.bounceOffset) {
                                const obj20 = { style: tmp6.bounceOffset };
                                const tmp118 = closure_17(closure_8, obj20);
                                cResult[115] = tmp6.bounceOffset;
                                cResult[116] = tmp118;
                                let tmp116 = tmp118;
                              } else {
                                tmp116 = cResult[116];
                              }
                              if (cResult[117] !== gradientSecondaryBackground) {
                                const obj21 = { backgroundColor: gradientSecondaryBackground };
                                cResult[117] = gradientSecondaryBackground;
                                cResult[118] = obj21;
                                let tmp119 = obj21;
                              } else {
                                tmp119 = cResult[118];
                              }
                              if (cResult[119] === currentUser) {
                                if (cResult[120] === tmp4ResultResult) {
                                  if (cResult[121] === guild.id) {
                                    if (cResult[122] === stateFromStores) {
                                      if (cResult[123] === stateFromStores1) {
                                        if (cResult[124] === isDisabled) {
                                          if (cResult[125] === tmp33) {
                                            if (cResult[126] === pendingBanner) {
                                              if (cResult[127] === pendingThemeColors) {
                                                let tmp120 = cResult[128];
                                              }
                                              let tmp125Result = null;
                                              if (null != guild) {
                                                const obj22 = { style: null, children: null };
                                                const items9 = [, , , ];
                                                ({ avatarBackground: arr6[0], avatarPosition: arr6[1] } = tmp5);
                                                items9[2] = tmp6.avatarContainer;
                                                items9[3] = obj18;
                                                obj22.style = items9;
                                                const obj23 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
                                                let tmp127 = isDisabled;
                                                if (!isDisabled) {
                                                  tmp127 = !tmp35;
                                                }
                                                obj23.disabled = tmp127;
                                                let id1;
                                                if (guild != null) {
                                                  id1 = guild.id;
                                                }
                                                obj23.guildId = id1;
                                                obj23.statusStyle = obj18;
                                                obj22.children = closure_17(tmp4(tmp2[44]), obj23);
                                                tmp125Result = closure_17(closure_8, obj22);
                                                const tmp4Result9 = tmp4(tmp2[44]);
                                              }
                                              if (cResult[129] !== sum1) {
                                                const obj24 = { paddingTop: 0, paddingBottom: sum1 };
                                                cResult[129] = sum1;
                                                cResult[130] = obj24;
                                                let tmp130 = obj24;
                                              } else {
                                                tmp130 = cResult[130];
                                              }
                                              if (cResult[131] === tmp5.profileContent) {
                                                if (cResult[132] === tmp5.profileContentWrapper) {
                                                  if (cResult[133] === tmp130) {
                                                    let tmp131 = cResult[134];
                                                  }
                                                  if (cResult[135] === customStatusActivity) {
                                                    if (cResult[136] === tmp45) {
                                                      if (cResult[137] === tmp5.customStatusBubble) {
                                                        if (cResult[138] === tmp5.emojiOnlyCustomStatusBubble) {
                                                          let tmp132 = cResult[139];
                                                        }
                                                        let tmp135 = pendingNickname;
                                                        if (pendingNickname == null) {
                                                          tmp135 = str;
                                                        }
                                                        let tmp136 = str3;
                                                        if ("" !== pendingPronouns) {
                                                          tmp136 = pendingPronouns;
                                                        }
                                                        if (cResult[140] === tmp32) {
                                                          if (cResult[141] === containerBackground) {
                                                            if (cResult[142] === currentUser) {
                                                              if (cResult[143] === guild.id) {
                                                                if (cResult[144] === pendingDisplayNameStyles) {
                                                                  if (cResult[145] === tmp135) {
                                                                    if (cResult[146] === tmp136) {
                                                                      let tmp137 = cResult[147];
                                                                    }
                                                                    let tmp141Result = null;
                                                                    if (null != guild) {
                                                                      const obj25 = { style: null, children: null };
                                                                      const items10 = [tmp6.formContainer, ];
                                                                      const obj26 = { backgroundColor: containerBackground, paddingBottom: 20 };
                                                                      items10[1] = obj26;
                                                                      obj25.style = items10;
                                                                      const items11 = [tmp110(), , , , , , , , , ];
                                                                      const obj27 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
                                                                      let intl = tmp(tmp2[16]).intl;
                                                                      obj27.label = intl.string(tmp(tmp2[16]).t.me1lRk);
                                                                      obj27.errorMessage = first1;
                                                                      let tmp144 = pendingNickname;
                                                                      if (pendingNickname == null) {
                                                                        tmp144 = str;
                                                                      }
                                                                      obj27.value = tmp144;
                                                                      obj27.onFocus = onFocus;
                                                                      obj27.onChange = function onChange(nickname) {
                                                                        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
                                                                      };
                                                                      const tmp4Result11 = tmp4(tmp2[45]);
                                                                      obj27.placeholder = tmp4(tmp2[46]).getName(currentUser);
                                                                      obj27.maxLength = maxLength;
                                                                      let tmp146 = !canEditNickname;
                                                                      if (canEditNickname) {
                                                                        tmp146 = isDisabled;
                                                                      }
                                                                      obj27.disabled = tmp146;
                                                                      items11[1] = closure_17(tmp4Result11, obj27);
                                                                      let tmp142Result = tmp35;
                                                                      if (tmp35) {
                                                                        const obj28 = { user: currentUser, guildId: guild.id };
                                                                        tmp142Result = closure_17(tmp4(tmp2[47]), obj28);
                                                                      }
                                                                      items11[2] = tmp142Result;
                                                                      const obj29 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
                                                                      const tmp4Result12 = tmp4(tmp2[46]);
                                                                      const intl2 = tmp(tmp2[16]).intl;
                                                                      obj29.label = intl2.string(tmp(tmp2[16]).t["+T3RI/"]);
                                                                      obj29.errorMessage = first2;
                                                                      const intl3 = tmp(tmp2[16]).intl;
                                                                      obj29.description = intl3.string(tmp(tmp2[16]).t.NZqtIp);
                                                                      obj29.value = pendingPronouns;
                                                                      obj29.onFocus = onFocus;
                                                                      obj29.onChange = function onChange(pronouns) {
                                                                        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
                                                                      };
                                                                      obj29.placeholder = str3;
                                                                      obj29.maxLength = maxLength2;
                                                                      obj29.disabled = isDisabled;
                                                                      items11[3] = closure_17(tmp4(tmp2[45]), obj29);
                                                                      let tmp142Result2 = null;
                                                                      if (tmp35) {
                                                                        const obj30 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
                                                                        const intl4 = tmp(tmp2[16]).intl;
                                                                        obj30.label = intl4.string(tmp(tmp2[16]).t.ZzAR2Y);
                                                                        obj30.errorMessage = first3;
                                                                        const intl5 = tmp(tmp2[16]).intl;
                                                                        obj30.description = intl5.string(tmp(tmp2[16]).t.S5O8U2);
                                                                        let tmp152 = pendingBio;
                                                                        if (pendingBio == null) {
                                                                          tmp152 = str4;
                                                                        }
                                                                        obj30.value = tmp152;
                                                                        obj30.onFocus = onFocus;
                                                                        obj30.onChange = function onChange(bio) {
                                                                          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
                                                                        };
                                                                        obj30.placeholder = str5;
                                                                        obj30.maxLength = bioMaxLength;
                                                                        obj30.disabled = isDisabled;
                                                                        tmp142Result2 = closure_17(tmp4(tmp2[45]), obj30);
                                                                        const tmp4Result14 = tmp4(tmp2[45]);
                                                                      }
                                                                      items11[4] = tmp142Result2;
                                                                      const obj31 = {
                                                                        pendingAvatarSrc: tmp33,
                                                                        pendingThemeColors,
                                                                        user: currentUser,
                                                                        guildId: guild.id,
                                                                        onProfileThemeColorsChanged(themeColors) {
                                                                                                                                              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors });
                                                                                                                                            },
                                                                        showResetMenu: tmp38
                                                                      };
                                                                      items11[5] = closure_17(tmp4(tmp2[48]), obj31);
                                                                      class X {
                                                                        constructor() {
                                                                          member = null;
                                                                          if (null != guild) {
                                                                            tmp3 = closure_9;
                                                                            tmp4 = currentUser;
                                                                            member = closure_9.getMember(tmp.id, currentUser.id);
                                                                          }
                                                                          return member;
                                                                        }
                                                                      }
                                                                      tmp153[0] = currentUser;
                                                                      tmp153[1] = guild.id;
                                                                      tmp153[2] = pendingAvatarDecoration;
                                                                      items11[6] = closure_17(tmp4(tmp2[49]), tmp153);
                                                                      const obj33 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp4ResultResult };
                                                                      items11[7] = closure_17(tmp4(tmp2[50]), obj33);
                                                                      const obj34 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp4ResultResult };
                                                                      items11[8] = closure_17(tmp4(tmp2[51]), obj34);
                                                                      const obj35 = { user: currentUser, pendingNameplate, guildId: guild.id };
                                                                      items11[9] = closure_17(tmp4(tmp2[52]), obj35);
                                                                      obj25.children = items11;
                                                                      tmp141Result = closure_18(closure_8, obj25);
                                                                      const tmp4Result13 = tmp4(tmp2[45]);
                                                                    }
                                                                    tmp96 = tmp141Result;
                                                                    tmp86 = forResult;
                                                                    tmp87 = secondaryColor;
                                                                    tmp88 = primaryColor;
                                                                    tmp89 = theme;
                                                                    tmp90 = tmp114;
                                                                    tmp91 = tmp116;
                                                                    tmp92 = ref;
                                                                    tmp93 = tmp120;
                                                                    tmp94 = tmp119;
                                                                    tmp95 = tmp125Result;
                                                                    tmp97 = tmp137;
                                                                    tmp98 = tmp132;
                                                                    tmp99 = tmp131;
                                                                    tmp100 = secondaryColor;
                                                                    tmp101 = primaryColor;
                                                                    tmp102 = gradientFallbackBackground;
                                                                    tmp103 = tmp111;
                                                                    ThemeContextProvider = tmp(tmp2[55]).ThemeContextProvider;
                                                                    tmp105 = closure_8;
                                                                    tmp106 = tmp115;
                                                                    tmp107 = closure_8;
                                                                    tmp108 = closure_8;
                                                                    tmp109 = tmp4Result10;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj36 = { user: currentUser, displayName: tmp135, pronouns: tmp136, badges: tmp32, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
                                                        const tmp139 = closure_17(tmp4(tmp2[58]), obj36);
                                                        cResult[140] = tmp32;
                                                        cResult[141] = containerBackground;
                                                        cResult[142] = currentUser;
                                                        cResult[143] = guild.id;
                                                        cResult[144] = pendingDisplayNameStyles;
                                                        cResult[145] = tmp135;
                                                        cResult[146] = tmp136;
                                                        cResult[147] = tmp139;
                                                        tmp137 = tmp139;
                                                      }
                                                    }
                                                  }
                                                  const obj37 = { customStatusActivity, hasCustomProfileTheme: tmp45, style: null, emojiOnlyStyle: null, editEnabled: true };
                                                  ({ customStatusBubble: obj32.style, emojiOnlyCustomStatusBubble: obj32.emojiOnlyStyle } = tmp5);
                                                  const tmp134 = closure_17(tmp4(tmp2[57]), obj37);
                                                  cResult[135] = customStatusActivity;
                                                  cResult[136] = tmp45;
                                                  cResult[137] = tmp5.customStatusBubble;
                                                  cResult[138] = tmp5.emojiOnlyCustomStatusBubble;
                                                  cResult[139] = tmp134;
                                                  tmp132 = tmp134;
                                                }
                                              }
                                              const items12 = [, , ];
                                              ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp5);
                                              items12[2] = tmp130;
                                              cResult[131] = tmp5.profileContent;
                                              cResult[132] = tmp5.profileContentWrapper;
                                              cResult[133] = tmp130;
                                              cResult[134] = items12;
                                              tmp131 = items12;
                                              tmp4Result10 = tmp4(tmp2[56]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj38 = { user: currentUser, displayProfile: tmp4ResultResult, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc: tmp33, pendingBanner, pendingThemeColors, disabled: isDisabled };
                              const tmp123 = closure_17(EditGuildProfileBanner, obj38);
                              cResult[119] = currentUser;
                              cResult[120] = tmp4ResultResult;
                              cResult[121] = guild.id;
                              cResult[122] = stateFromStores;
                              cResult[123] = stateFromStores1;
                              cResult[124] = isDisabled;
                              cResult[125] = tmp33;
                              cResult[126] = pendingBanner;
                              cResult[127] = pendingThemeColors;
                              cResult[128] = tmp123;
                              tmp120 = tmp123;
                              tmp115 = first4;
                            }
                            const items13 = [tmp6.container, tmp113];
                            cResult[112] = tmp6.container;
                            cResult[113] = tmp113;
                            cResult[114] = items13;
                            tmp114 = items13;
                          }
                        }
                      }
                    }
                    function renderFormError() {
                      if (null == first3) {
                        if (null == first1) {
                          let tmp8 = first4;
                          if (null == first4) {
                            const _Object = Object;
                            let stringResult = null;
                            if (Object.keys(closure_4).length > 0) {
                              const intl = util.intl;
                              stringResult = intl.string(util.t.s35OuK);
                            }
                            tmp8 = stringResult;
                          }
                          let tmp9 = null;
                          if (null != tmp8) {
                            tmp9 = null;
                            if ("" !== tmp8) {
                              const obj = { style: errorContainer.errorContainer, children: null };
                              const obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                              obj.children = constants(Text_Text.Text, obj2);
                              tmp9 = constants(closure_2_8, obj);
                            }
                          }
                          return tmp9;
                        }
                      }
                      return null;
                    }
                    cResult[102] = first3;
                    cResult[103] = tmp76;
                    cResult[104] = first4;
                    cResult[105] = first1;
                    cResult[106] = tmp6.errorContainer;
                    cResult[107] = renderFormError;
                    tmp110 = renderFormError;
                  }
                  cResult[32] = analyticsLocations;
                  cResult[33] = avatarBackground;
                  cResult[34] = tmp32;
                  class X {
                    constructor() {
                      member = null;
                      if (null != guild) {
                        tmp3 = closure_9;
                        tmp4 = currentUser;
                        member = closure_9.getMember(tmp.id, currentUser.id);
                      }
                      return member;
                    }
                  }
                  cResult[36] = canEditNickname;
                  cResult[37] = tmp35;
                  cResult[38] = containerBackground;
                  cResult[39] = str4;
                  cResult[40] = str;
                  cResult[41] = currentUser;
                  cResult[42] = customStatusActivity;
                  cResult[43] = str5;
                  cResult[44] = str3;
                  cResult[45] = tmp4ResultResult;
                  cResult[46] = errors;
                  cResult[47] = gradientFallbackBackground;
                  cResult[48] = gradientSecondaryBackground;
                  cResult[49] = guild;
                  cResult[50] = stateFromStores;
                  cResult[51] = stateFromStores1;
                  cResult[52] = pendingPronouns;
                  cResult[53] = tmp45;
                  cResult[54] = isDisabled;
                  cResult[55] = onFocus;
                  cResult[56] = sum1;
                  cResult[57] = pendingAvatarDecoration;
                  cResult[58] = tmp33;
                  cResult[59] = pendingBanner;
                  cResult[60] = pendingBio;
                  cResult[61] = pendingDisplayNameStyles;
                  cResult[62] = pendingNameplate;
                  cResult[63] = pendingNickname;
                  cResult[64] = pendingProfileEffect;
                  cResult[65] = pendingProfileFrame;
                  cResult[66] = pendingThemeColors;
                  cResult[67] = primaryColor;
                  cResult[68] = secondaryColor;
                  cResult[69] = tmp6;
                  cResult[70] = tmp5;
                  cResult[71] = tmp38;
                  cResult[72] = theme;
                  cResult[73] = tmp109;
                  cResult[74] = tmp108;
                  cResult[75] = tmp107;
                  cResult[76] = tmp106;
                  cResult[77] = tmp105;
                  cResult[78] = ThemeContextProvider;
                  cResult[79] = tmp103;
                  cResult[80] = tmp102;
                  cResult[81] = tmp101;
                  cResult[82] = tmp100;
                  cResult[83] = tmp99;
                  cResult[84] = tmp98;
                  cResult[85] = tmp97;
                  cResult[86] = tmp96;
                  cResult[87] = tmp95;
                  cResult[88] = tmp94;
                  cResult[89] = tmp93;
                  cResult[90] = tmp92;
                  cResult[91] = tmp91;
                  cResult[92] = tmp90;
                  cResult[93] = tmp89;
                  cResult[94] = tmp88;
                  cResult[95] = tmp87;
                  cResult[96] = tmp86;
                  tmp73 = tmp86;
                  tmp72 = tmp87;
                  tmp71 = tmp88;
                  tmp70 = tmp89;
                  tmp69 = tmp90;
                  tmp68 = tmp91;
                  tmp67 = tmp92;
                  tmp66 = tmp93;
                  tmp65 = tmp94;
                  tmp64 = tmp95;
                  tmp63 = tmp96;
                  tmp62 = tmp97;
                  tmp61 = tmp98;
                  tmp60 = tmp99;
                  tmp59 = tmp100;
                  tmp58 = tmp101;
                  tmp57 = tmp102;
                  tmp56 = tmp103;
                  tmp55 = ThemeContextProvider;
                  tmp54 = tmp105;
                  tmp53 = tmp106;
                  tmp52 = tmp107;
                  tmp51 = tmp108;
                  tmp50 = tmp109;
                  forResult = Symbol.for("react.early_return_sentinel");
                }
              }
              const obj39 = { theme, primaryColor, secondaryColor };
              cResult[28] = primaryColor;
              cResult[29] = secondaryColor;
              cResult[30] = theme;
              cResult[31] = obj39;
              tmp46 = obj39;
              const tmp44 = tmp4(tmp2[42])(tmp43);
            }
          }
          const obj40 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[24] = currentUser;
          cResult[25] = tmp4ResultResult;
          cResult[26] = pendingThemeColors;
          cResult[27] = obj40;
          tmp43 = obj40;
          const tmpResult13 = tmp(tmp2[26]);
        }
        const tmpResult12 = tmp(tmp2[40]);
        const canResetThemeColorsResult = tmp(tmp2[41]).canResetThemeColors(pendingThemeColors, themeColors);
        cResult[20] = pendingThemeColors;
        cResult[21] = themeColors;
        cResult[22] = canResetThemeColorsResult;
        tmp38 = canResetThemeColorsResult;
        const tmpResult15 = tmp(tmp2[41]);
      }
      const tmpResult11 = tmp(tmp2[37]);
      const obj41 = { userId: currentUser.id, image: pendingAvatar };
      const pendingAvatarSrc = tmp(tmp2[39]).getPendingAvatarSrc(obj41);
      cResult[15] = currentUser.id;
      cResult[16] = pendingAvatar;
      cResult[17] = pendingAvatarSrc;
      tmp33 = pendingAvatarSrc;
      const tmpResult16 = tmp(tmp2[39]);
    }
    function oe() {
      let guildMemberProfile = null;
      if (null != guild) {
        let id;
        if (guild != null) {
          id = guild.id;
        }
        guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
      }
      return guildMemberProfile;
    }
    cResult[12] = currentUser.id;
    cResult[13] = guild;
    cResult[14] = oe;
    tmp26 = oe;
    const tmpResult9 = tmp(tmp2[35]);
  }
  class X {
    constructor() {
      member = null;
      if (null != guild) {
        tmp3 = closure_9;
        tmp4 = currentUser;
        member = closure_9.getMember(tmp.id, currentUser.id);
      }
      return member;
    }
  }
  cResult[8] = currentUser.id;
  cResult[9] = guild;
  cResult[10] = X;
  tmp22 = X;
  tmp9 = require("useKeyboardIsOpen")();
}) : (function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  guild = undefined;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[30])();
  const tmp4 = guild(analyticsLocations[24])();
  const bioMaxLength = currentUser(analyticsLocations[31]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(analyticsLocations[31]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(analyticsLocations[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[27]).space.PX_16;
  let obj2 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj5 = { ref: ref3, offset: null };
  const obj6 = { type: "toValue", value: null };
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[32])();
  obj6.value = guild(analyticsLocations[27]).space.PX_64;
  obj5.offset = obj6;
  items[2] = obj5;
  obj2.inputs = items;
  obj2.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[33])(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[34])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const tmp12 = guild(analyticsLocations[33]);
  const items1 = [GuildMemberStore];
  const stateFromStores = currentUser(analyticsLocations[35]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const obj7 = currentUser(analyticsLocations[35]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = currentUser(analyticsLocations[35]).useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const obj8 = currentUser(analyticsLocations[35]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[36])(currentUser.id, id);
  const tmp16 = guild(analyticsLocations[36]);
  const customStatusActivity = currentUser(analyticsLocations[37]).useCustomStatusActivity();
  const tmp5Result = currentUser(analyticsLocations[37]);
  const tmp20 = guild(analyticsLocations[38])(tmp16Result);
  const pendingAvatarSrc = currentUser(analyticsLocations[39]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result6 = currentUser(analyticsLocations[39]);
  const canEditNickname = currentUser(analyticsLocations[40]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result7 = currentUser(analyticsLocations[40]);
  const result = guild(analyticsLocations[8]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult = guild(analyticsLocations[8]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp59Result8 = !result;
  const tmp5Result8 = currentUser(analyticsLocations[41]);
  if (!result) {
    tmp59Result8 = !tmp7;
  }
  const canResetThemeColorsResult = currentUser(analyticsLocations[41]).canResetThemeColors(pendingThemeColors, themeColors);
  const floatingUpsellHeight = currentUser(analyticsLocations[26]).useFloatingUpsellHeight();
  let str;
  ({ height, onLayout } = floatingUpsellHeight);
  if (stateFromStores != null) {
    str = stateFromStores.nick;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (stateFromStores1 != null) {
    str2 = stateFromStores1.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp16Result != null) {
    str3 = tmp16Result._userProfile.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  if (pendingPronouns == null) {
    pendingPronouns = str2;
  }
  let str4;
  if (stateFromStores1 != null) {
    str4 = stateFromStores1.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp16Result != null) {
    str5 = tmp16Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const tmp5Result9 = currentUser(analyticsLocations[26]);
  const items3 = [guild(analyticsLocations[10]).USER_SETTINGS];
  analyticsLocations = guild(analyticsLocations[9])(items3).analyticsLocations;
  const tmpResult9 = guild(analyticsLocations[9]);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[42])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp28 = guild(analyticsLocations[42])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[43]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp59Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp5Result10 = currentUser(analyticsLocations[43]);
  if (nick != null) {
    const first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    const first1 = pronouns[0];
  }
  if (bio != null) {
    const first2 = bio[0];
  }
  if (guild_tag != null) {
    let first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    const obj11 = { theme, primaryColor, secondaryColor, children: null };
    const obj12 = { style: null, children: null };
    const items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    obj12.style = items4;
    const obj14 = { ref, children: null };
    const obj15 = { style: tmp4.bounceOffset };
    const items5 = [closure_17(closure_8, obj15), ];
    const obj16 = { style: null, children: null };
    const obj17 = { backgroundColor: gradientSecondaryBackground };
    obj16.style = obj17;
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [closure_17(EditGuildProfileBanner, obj18), ];
    let tmp59Result = null;
    if (null != guild) {
      const obj19 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj19.style = items7;
      const obj20 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp38 = isDisabled;
      if (!isDisabled) {
        tmp38 = !result;
      }
      obj20.disabled = tmp38;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj20.guildId = id1;
      obj20.statusStyle = obj10;
      obj19.children = closure_17(tmp(tmp2[44]), obj20);
      tmp59Result = closure_17(closure_8, obj19);
      const tmpResult10 = tmp(tmp2[44]);
    }
    const items8 = [tmp59Result, ];
    const obj21 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj23;
    obj21.containerStyle = items9;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj22.style, emojiOnlyCustomStatusBubble: obj22.emojiOnlyStyle } = tmp3);
    const items10 = [closure_17(tmp(tmp2[57]), obj24), , ];
    const obj25 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp43 = pendingNickname;
    const tmpResult11 = tmp(tmp2[56]);
    if (pendingNickname == null) {
      tmp43 = str;
    }
    obj25.displayName = tmp43;
    let tmp44 = str3;
    if ("" !== pendingPronouns) {
      tmp44 = pendingPronouns;
    }
    obj25.pronouns = tmp44;
    obj25.badges = tmp20;
    obj25.badgeContainerBackground = containerBackground;
    obj25.guildId = guild.id;
    obj25.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = closure_17(tmp(tmp2[58]), obj25);
    let tmp60Result = null;
    if (null != guild) {
      const obj26 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      obj26.style = items11;
      let tmp46 = null;
      if (null == first2) {
        tmp46 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp32).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp59Result5 = null;
          if (null != first3) {
            tmp59Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: null };
              const obj29 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj28.children = closure_17(tmp5(tmp2[28]).Text, obj29);
              tmp59Result5 = closure_17(closure_8, obj28);
            }
          }
          tmp46 = tmp59Result5;
        }
      }
      const items12 = [tmp46, , , , , , , , , ];
      const obj30 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
      const intl2 = tmp5(tmp2[16]).intl;
      obj30.label = intl2.string(tmp5(tmp2[16]).t.me1lRk);
      obj30.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj30.value = pendingNickname;
      obj30.onFocus = onFocus;
      obj30.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult13 = tmp(tmp2[45]);
      obj30.placeholder = tmp(tmp2[46]).getName(currentUser);
      obj30.maxLength = maxLength;
      let tmp52 = !canEditNickname;
      if (canEditNickname) {
        tmp52 = isDisabled;
      }
      obj30.disabled = tmp52;
      items12[1] = closure_17(tmpResult13, obj30);
      let tmp59Result6 = result;
      if (result) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp59Result6 = closure_17(tmp(tmp2[47]), obj31);
      }
      items12[2] = tmp59Result6;
      const obj32 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult14 = tmp(tmp2[46]);
      const intl3 = tmp5(tmp2[16]).intl;
      obj32.label = intl3.string(tmp5(tmp2[16]).t["+T3RI/"]);
      obj32.errorMessage = first1;
      const intl4 = tmp5(tmp2[16]).intl;
      obj32.description = intl4.string(tmp5(tmp2[16]).t.NZqtIp);
      obj32.value = pendingPronouns;
      obj32.onFocus = onFocus;
      obj32.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj32.placeholder = str3;
      obj32.maxLength = maxLength2;
      obj32.disabled = isDisabled;
      items12[3] = closure_17(tmp(tmp2[45]), obj32);
      let tmp59Result7 = null;
      if (result) {
        const obj33 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
        const intl5 = tmp5(tmp2[16]).intl;
        obj33.label = intl5.string(tmp5(tmp2[16]).t.ZzAR2Y);
        obj33.errorMessage = first2;
        const intl6 = tmp5(tmp2[16]).intl;
        obj33.description = intl6.string(tmp5(tmp2[16]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj33.value = pendingBio;
        obj33.onFocus = onFocus;
        obj33.onChange = function onChange(bio) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
        };
        obj33.placeholder = str5;
        obj33.maxLength = bioMaxLength;
        obj33.disabled = isDisabled;
        tmp59Result7 = closure_17(tmp(tmp2[45]), obj33);
        const tmpResult16 = tmp(tmp2[45]);
      }
      items12[4] = tmp59Result7;
      const obj34 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors });
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = closure_17(tmp(tmp2[48]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_17(tmp(tmp2[49]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_17(tmp(tmp2[50]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_17(tmp(tmp2[51]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_17(tmp(tmp2[52]), obj38);
      obj26.children = items12;
      tmp60Result = closure_18(closure_8, obj26);
      const tmpResult15 = tmp(tmp2[45]);
    }
    const obj39 = { children: null };
    items10[2] = tmp60Result;
    obj21.children = items10;
    items8[1] = closure_18(tmpResult11, obj21);
    obj39.children = items8;
    items6[1] = closure_18(closure_8, obj39);
    obj16.children = items6;
    items5[1] = closure_18(closure_8, obj16);
    obj14.children = items5;
    const items13 = [closure_18(closure_7, obj14), ];
    if (tmp59Result8) {
      const obj40 = {
        onButtonPress: function handleUpsellPress() {
              const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
              const obj2 = {};
              const merged = Object.assign(closure_19);
              obj2.object = constants.BUTTON_CTA;
              obj.analyticsLocation = obj2;
              obj.analyticsLocations = analyticsLocations;
              obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
              openPremiumModalDefault(obj);
            },
        onLayout
      };
      tmp59Result8 = closure_17(closure_21, obj40);
    }
    items13[1] = tmp59Result8;
    obj12.children = items13;
    obj11.children = closure_18(closure_8, obj12);
    return closure_17(tmp5(tmp2[55]).ThemeContextProvider, obj11);
  }
  tmp32 = _objectWithoutProperties(errors, closure_4);
});