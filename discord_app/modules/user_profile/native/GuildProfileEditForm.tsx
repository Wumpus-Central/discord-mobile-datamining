// === Module 14500: GuildProfileEditForm ===

// Module 14500 (GuildProfileEditForm)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7846 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7848 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14432 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14445 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14449 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14466 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 14501 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;

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
  obj3.onPressEdit = function onPressEdit() {
    if (c4) {
      const obj = { user, analyticsLocations, showRemoveBanner: null, removeText: null, onBannerChange: null };
      const tmpResult = ActionSheetActionCreatorsDefault;
      const tmp13 = asyncRequireImpl(14434, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = util.intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(banner[17]).setPendingChanges({ guildId, banner });
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
    } else {
      const obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      const obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
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
  return closure_17(user(6664).AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ onLayout, onButtonPress } = arg0);
  const isTryItOutMobileRefreshEnabled = UserProfilePremiumTryItOutMobileRefreshExperiment.useIsTryItOutMobileRefreshEnabled("GuildProfileEditForm");
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (isTryItOutMobileRefreshEnabled) {
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t.YIZS5B);
      const intl4 = util.intl;
      const stringResult1 = intl4.string(util.t.pj0XBN);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      let tmp21 = stringResult1;
      let tmp20 = stringResult;
    } else {
      tmp20 = cResult[1];
      tmp21 = cResult[2];
    }
    if (cResult[3] === onButtonPress) {
      if (cResult[4] === onLayout) {
        let tmp24 = cResult[5];
      }
      return tmp24;
    }
    const obj4 = { text: tmp20, buttonText: tmp21, buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp26 = constants(UserProfileFloatingUpsellDefault, obj4);
    cResult[3] = onButtonPress;
    cResult[4] = onLayout;
    cResult[5] = tmp26;
    tmp24 = tmp26;
  } else {
    const sum = nativeDefault.space.PX_16 + tmp8.bottom;
    if (cResult[6] !== sum) {
      const obj5 = { bottom: sum };
      cResult[6] = sum;
      cResult[7] = obj5;
      let tmp10 = obj5;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === tmp6.floatingUpsell) {
      if (cResult[9] === tmp10) {
        let tmp11 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult2 = intl.string(util.t.pj0XBN);
        cResult[11] = stringResult2;
        let tmp12 = stringResult2;
      } else {
        tmp12 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", children: null };
        const intl2 = util.intl;
        obj6.children = intl2.string(util.t.YIZS5B);
        const tmp16 = constants(Text_Text.Text, obj6);
        cResult[12] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[12];
      }
      if (cResult[13] === onButtonPress) {
        if (cResult[14] === tmp11) {
          let tmp17 = cResult[15];
        }
        return tmp17;
      }
      const obj7 = { style: tmp11, ctaText: tmp12, onPress: onButtonPress, children: tmp14 };
      const tmp19 = constants(UserProfileUpsellCardDefault, obj7);
      cResult[13] = onButtonPress;
      cResult[14] = tmp11;
      cResult[15] = tmp19;
      tmp17 = tmp19;
    }
    const items = [tmp6.floatingUpsell, tmp10];
    cResult[8] = tmp6.floatingUpsell;
    cResult[9] = tmp10;
    cResult[10] = items;
    tmp11 = items;
  }
}) : ((onButtonPress) => {
  onButtonPress = onButtonPress.onButtonPress;
  const isTryItOutMobileRefreshEnabled = UserProfilePremiumTryItOutMobileRefreshExperiment.useIsTryItOutMobileRefreshEnabled("GuildProfileEditForm");
  if (isTryItOutMobileRefreshEnabled) {
    const obj2 = { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", onButtonPress: null, onLayout: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.YIZS5B);
    const intl4 = util.intl;
    obj2.buttonText = intl4.string(util.t.pj0XBN);
    obj2.onButtonPress = onButtonPress;
    obj2.onLayout = onButtonPress.onLayout;
    let tmp7Result = constants(UserProfileFloatingUpsellDefault, obj2);
    const tmp4Result = UserProfileFloatingUpsellDefault;
  } else {
    const obj3 = { style: null, ctaText: null, onPress: null, children: null };
    const items = [tmp5.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp6.bottom };
    items[1] = obj4;
    obj3.style = items;
    const intl = util.intl;
    obj3.ctaText = intl.string(util.t.pj0XBN);
    obj3.onPress = onButtonPress;
    const obj5 = { variant: "text-sm/normal", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.YIZS5B);
    obj3.children = constants(Text_Text.Text, obj5);
    tmp7Result = constants(UserProfileUpsellCardDefault, obj3);
    const tmp4Result2 = UserProfileUpsellCardDefault;
  }
  return tmp7Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  const cResult = currentUser(guild[20]).c(186);
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
  let obj = currentUser(guild[20]);
  const bioMaxLength = currentUser(guild[29]).useBioMaxLength(first);
  const tmpResult = currentUser(guild[29]);
  let tmp9 = require("useKeyboardIsOpen")();
  const ref = first3.useRef(null);
  const ref2 = first3.useRef(null);
  const ref3 = first3.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[23])(tmp14).insets;
  const PX_16 = tmp4(tmp2[25]).space.PX_16;
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
    const obj9 = { type: "toValue", value: tmp4(tmp2[25]).space.PX_64 };
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
  const onFocus = tmp4(tmp2[31])(tmp18).onFocus;
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
    const stateFromStores = tmp(tmp2[33]).useStateFromStores(tmp20, tmp22);
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
      const stateFromStores1 = tmp(tmp2[33]).useStateFromStores(tmp24, tmp26);
      let id;
      const tmpResult10 = tmp(tmp2[33]);
      if (guild != null) {
        id = guild.id;
      }
      const tmp4ResultResult = tmp4(tmp2[34])(currentUser.id, id);
      const tmp4Result = tmp4(tmp2[34]);
      const customStatusActivity = tmp(tmp2[35]).useCustomStatusActivity();
      const tmp32 = tmp4(tmp2[36])(tmp4ResultResult);
      if (cResult[15] === currentUser.id) {
        if (cResult[16] === pendingAvatar) {
          let tmp33 = cResult[17];
        }
        const canEditNickname = tmp(tmp2[38]).useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[18] !== currentUser) {
          const result = tmp4(tmp2[8]).canUsePremiumGuildMemberProfile(currentUser);
          cResult[18] = currentUser;
          cResult[19] = result;
          let tmp35 = result;
          const tmp4Result4 = tmp4(tmp2[8]);
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
          const floatingUpsellHeight = tmp(tmp2[24]).useFloatingUpsellHeight();
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
              ({ theme, primaryColor, secondaryColor } = tmp4(tmp2[40])(tmp43));
              if (cResult[28] === primaryColor) {
                if (cResult[29] === secondaryColor) {
                  if (cResult[30] === theme) {
                    let tmp46 = cResult[31];
                  }
                  const userProfileColors = tmp(tmp2[41]).useUserProfileColors(tmp46);
                  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
                  let num30 = 0;
                  if (tmp40) {
                    num30 = floatingUpsellHeight.height;
                  }
                  const sum = insets.bottom + num30;
                  const sum1 = sum + tmp4(tmp2[25]).space.PX_16;
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
                                                                                                                    let tmp135 = cResult[156];
                                                                                                                  }
                                                                                                                  if (cResult[157] === tmp51) {
                                                                                                                    if (cResult[158] === tmp64) {
                                                                                                                      if (cResult[159] === tmp135) {
                                                                                                                        let tmp138 = cResult[160];
                                                                                                                      }
                                                                                                                      if (cResult[161] === tmp52) {
                                                                                                                        if (cResult[162] === tmp65) {
                                                                                                                          if (cResult[163] === tmp66) {
                                                                                                                            if (cResult[164] === tmp138) {
                                                                                                                              let tmp141 = cResult[165];
                                                                                                                            }
                                                                                                                            if (cResult[166] === tmp53) {
                                                                                                                              if (cResult[167] === tmp67) {
                                                                                                                                if (cResult[168] === tmp68) {
                                                                                                                                  if (cResult[169] === tmp141) {
                                                                                                                                    let tmp144 = cResult[170];
                                                                                                                                  }
                                                                                                                                  if (cResult[171] === tmp56) {
                                                                                                                                    if (cResult[172] === onLayout) {
                                                                                                                                      if (cResult[173] === tmp40) {
                                                                                                                                        let tmp147 = cResult[174];
                                                                                                                                      }
                                                                                                                                      if (cResult[175] === tmp54) {
                                                                                                                                        if (cResult[176] === tmp69) {
                                                                                                                                          if (cResult[177] === tmp144) {
                                                                                                                                            if (cResult[178] === tmp147) {
                                                                                                                                              let tmp151 = cResult[179];
                                                                                                                                            }
                                                                                                                                            if (cResult[180] === tmp55) {
                                                                                                                                              if (cResult[181] === tmp70) {
                                                                                                                                                if (cResult[182] === tmp71) {
                                                                                                                                                  if (cResult[183] === tmp72) {
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                            const obj11 = { theme: tmp70, primaryColor: tmp71, secondaryColor: tmp72, children: tmp151 };
                                                                                                                                            const tmp156 = closure_17(tmp55, obj11);
                                                                                                                                            cResult[180] = tmp55;
                                                                                                                                            cResult[181] = tmp70;
                                                                                                                                            cResult[182] = tmp71;
                                                                                                                                            cResult[183] = tmp72;
                                                                                                                                            cResult[184] = tmp151;
                                                                                                                                            cResult[185] = tmp156;
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                      const obj12 = { style: tmp69, children: null };
                                                                                                                                      const items4 = [tmp144, tmp147];
                                                                                                                                      obj12.children = items4;
                                                                                                                                      const tmp153 = closure_18(tmp54, obj12);
                                                                                                                                      cResult[175] = tmp54;
                                                                                                                                      cResult[176] = tmp69;
                                                                                                                                      cResult[177] = tmp144;
                                                                                                                                      cResult[178] = tmp147;
                                                                                                                                      cResult[179] = tmp153;
                                                                                                                                      tmp151 = tmp153;
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                  let tmp148 = tmp40;
                                                                                                                                  if (tmp40) {
                                                                                                                                    const obj13 = { onButtonPress: tmp56, onLayout };
                                                                                                                                    tmp148 = closure_17(closure_21, obj13);
                                                                                                                                  }
                                                                                                                                  cResult[171] = tmp56;
                                                                                                                                  cResult[172] = onLayout;
                                                                                                                                  cResult[173] = tmp40;
                                                                                                                                  cResult[174] = tmp148;
                                                                                                                                  tmp147 = tmp148;
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj14 = { ref: tmp67, children: null };
                                                                                                                            const items5 = [tmp68, tmp141];
                                                                                                                            obj14.children = items5;
                                                                                                                            const tmp146 = closure_18(tmp53, obj14);
                                                                                                                            cResult[166] = tmp53;
                                                                                                                            cResult[167] = tmp67;
                                                                                                                            cResult[168] = tmp68;
                                                                                                                            cResult[169] = tmp141;
                                                                                                                            cResult[170] = tmp146;
                                                                                                                            tmp144 = tmp146;
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const obj15 = { style: tmp65, children: null };
                                                                                                                      const items6 = [tmp66, tmp138];
                                                                                                                      obj15.children = items6;
                                                                                                                      const tmp143 = closure_18(tmp52, obj15);
                                                                                                                      cResult[161] = tmp52;
                                                                                                                      cResult[162] = tmp65;
                                                                                                                      cResult[163] = tmp66;
                                                                                                                      cResult[164] = tmp138;
                                                                                                                      cResult[165] = tmp143;
                                                                                                                      tmp141 = tmp143;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj16 = { children: null };
                                                                                                                  const items7 = [tmp64, tmp135];
                                                                                                                  obj16.children = items7;
                                                                                                                  const tmp140 = closure_18(tmp51, obj16);
                                                                                                                  cResult[157] = tmp51;
                                                                                                                  cResult[158] = tmp64;
                                                                                                                  cResult[159] = tmp135;
                                                                                                                  cResult[160] = tmp140;
                                                                                                                  tmp138 = tmp140;
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
                                                                                                    const tmp137 = closure_18(tmp50, obj17);
                                                                                                    cResult[148] = tmp50;
                                                                                                    cResult[149] = tmp57;
                                                                                                    cResult[150] = tmp58;
                                                                                                    cResult[151] = tmp59;
                                                                                                    cResult[152] = tmp60;
                                                                                                    cResult[153] = tmp61;
                                                                                                    cResult[154] = tmp62;
                                                                                                    cResult[155] = tmp63;
                                                                                                    cResult[156] = tmp137;
                                                                                                    tmp135 = tmp137;
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
                  Symbol.for("react.early_return_sentinel");
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
                  if (null != guild) {
                    if (cResult[102] === first3) {
                      if (cResult[103] === tmp76) {
                        if (cResult[104] === first4) {
                          if (cResult[105] === first1) {
                            class Nn {
                              constructor() {
                                if (null == closure_6) {
                                  tmp15 = closure_5;
                                  if (null == closure_5) {
                                    tmp8 = closure_7;
                                    if (null == closure_7) {
                                      tmp = globalThis;
                                      _Object = Object;
                                      tmp2 = closure_4;
                                      num = 0;
                                      stringResult = null;
                                      if (Object.keys(closure_4).length > 0) {
                                        tmp4 = closure_0;
                                        tmp5 = closure_2;
                                        intl = closure_0(closure_2[16]).intl;
                                        tmp6 = closure_0;
                                        tmp7 = closure_2;
                                        stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                      }
                                      tmp8 = stringResult;
                                    }
                                    tmp9 = null;
                                    if (null != tmp8) {
                                      str = "";
                                      tmp9 = null;
                                      if ("" !== tmp8) {
                                        tmp10 = jsx;
                                        tmp11 = View;
                                        obj = { style: null, children: null };
                                        tmp12 = closure_1;
                                        obj.style = closure_1.errorContainer;
                                        tmp13 = closure_0;
                                        tmp14 = closure_2;
                                        obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                        obj1.children = tmp8;
                                        obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                        tmp9 = jsx(View, obj);
                                      }
                                    }
                                    return tmp9;
                                  }
                                }
                                return null;
                              }
                            }
                            const ThemeContextProvider = tmp(tmp2[53]).ThemeContextProvider;
                            if (cResult[110] !== gradientSecondaryBackground) {
                              const obj19 = { backgroundColor: null };
                              class Nn {
                                constructor() {
                                  if (null == closure_6) {
                                    tmp15 = closure_5;
                                    if (null == closure_5) {
                                      tmp8 = closure_7;
                                      if (null == closure_7) {
                                        tmp = globalThis;
                                        _Object = Object;
                                        tmp2 = closure_4;
                                        num = 0;
                                        stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          tmp4 = closure_0;
                                          tmp5 = closure_2;
                                          intl = closure_0(closure_2[16]).intl;
                                          tmp6 = closure_0;
                                          tmp7 = closure_2;
                                          stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      tmp9 = null;
                                      if (null != tmp8) {
                                        str = "";
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          tmp10 = jsx;
                                          tmp11 = View;
                                          obj = { style: null, children: null };
                                          tmp12 = closure_1;
                                          obj.style = closure_1.errorContainer;
                                          tmp13 = closure_0;
                                          tmp14 = closure_2;
                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                          obj1.children = tmp8;
                                          obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                          tmp9 = jsx(View, obj);
                                        }
                                      }
                                      return tmp9;
                                    }
                                  }
                                  return null;
                                }
                              }
                              cResult[110] = gradientSecondaryBackground;
                              cResult[111] = obj19;
                              let tmp112 = obj19;
                            } else {
                              tmp112 = cResult[111];
                            }
                            if (cResult[112] === tmp6.container) {
                              class Nn {
                                constructor() {
                                  if (null == closure_6) {
                                    tmp15 = closure_5;
                                    if (null == closure_5) {
                                      tmp8 = closure_7;
                                      if (null == closure_7) {
                                        tmp = globalThis;
                                        _Object = Object;
                                        tmp2 = closure_4;
                                        num = 0;
                                        stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          tmp4 = closure_0;
                                          tmp5 = closure_2;
                                          intl = closure_0(closure_2[16]).intl;
                                          tmp6 = closure_0;
                                          tmp7 = closure_2;
                                          stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      tmp9 = null;
                                      if (null != tmp8) {
                                        str = "";
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          tmp10 = jsx;
                                          tmp11 = View;
                                          obj = { style: null, children: null };
                                          tmp12 = closure_1;
                                          obj.style = closure_1.errorContainer;
                                          tmp13 = closure_0;
                                          tmp14 = closure_2;
                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                          obj1.children = tmp8;
                                          obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                          tmp9 = jsx(View, obj);
                                        }
                                      }
                                      return tmp9;
                                    }
                                  }
                                  return null;
                                }
                              }
                              if (cResult[115] !== tmp6.bounceOffset) {
                                class Nn {
                                  constructor() {
                                    if (null == closure_6) {
                                      tmp15 = closure_5;
                                      if (null == closure_5) {
                                        tmp8 = closure_7;
                                        if (null == closure_7) {
                                          tmp = globalThis;
                                          _Object = Object;
                                          tmp2 = closure_4;
                                          num = 0;
                                          stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            tmp4 = closure_0;
                                            tmp5 = closure_2;
                                            intl = closure_0(closure_2[16]).intl;
                                            tmp6 = closure_0;
                                            tmp7 = closure_2;
                                            stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        tmp9 = null;
                                        if (null != tmp8) {
                                          str = "";
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            tmp10 = jsx;
                                            tmp11 = View;
                                            obj = { style: null, children: null };
                                            tmp12 = closure_1;
                                            obj.style = closure_1.errorContainer;
                                            tmp13 = closure_0;
                                            tmp14 = closure_2;
                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                            obj1.children = tmp8;
                                            obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                            tmp9 = jsx(View, obj);
                                          }
                                        }
                                        return tmp9;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                tmp116[0] = tmp6.bounceOffset;
                                const tmp117 = closure_17(closure_8, tmp116);
                                cResult[115] = tmp6.bounceOffset;
                                cResult[116] = tmp117;
                              }
                              if (cResult[117] !== gradientSecondaryBackground) {
                                const obj20 = { backgroundColor: null };
                                class Nn {
                                  constructor() {
                                    if (null == closure_6) {
                                      tmp15 = closure_5;
                                      if (null == closure_5) {
                                        tmp8 = closure_7;
                                        if (null == closure_7) {
                                          tmp = globalThis;
                                          _Object = Object;
                                          tmp2 = closure_4;
                                          num = 0;
                                          stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            tmp4 = closure_0;
                                            tmp5 = closure_2;
                                            intl = closure_0(closure_2[16]).intl;
                                            tmp6 = closure_0;
                                            tmp7 = closure_2;
                                            stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        tmp9 = null;
                                        if (null != tmp8) {
                                          str = "";
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            tmp10 = jsx;
                                            tmp11 = View;
                                            obj = { style: null, children: null };
                                            tmp12 = closure_1;
                                            obj.style = closure_1.errorContainer;
                                            tmp13 = closure_0;
                                            tmp14 = closure_2;
                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                            obj1.children = tmp8;
                                            obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                            tmp9 = jsx(View, obj);
                                          }
                                        }
                                        return tmp9;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                cResult[117] = gradientSecondaryBackground;
                                cResult[118] = obj20;
                              }
                              if (cResult[119] === currentUser) {
                                if (cResult[120] === tmp4ResultResult) {
                                  if (cResult[121] === guild.id) {
                                    if (cResult[122] === stateFromStores) {
                                      if (cResult[123] === stateFromStores1) {
                                        if (cResult[124] === isDisabled) {
                                          if (cResult[125] === tmp33) {
                                            if (cResult[126] === pendingBanner) {
                                              class Nn {
                                                constructor() {
                                                  if (null == closure_6) {
                                                    tmp15 = closure_5;
                                                    if (null == closure_5) {
                                                      tmp8 = closure_7;
                                                      if (null == closure_7) {
                                                        tmp = globalThis;
                                                        _Object = Object;
                                                        tmp2 = closure_4;
                                                        num = 0;
                                                        stringResult = null;
                                                        if (Object.keys(closure_4).length > 0) {
                                                          tmp4 = closure_0;
                                                          tmp5 = closure_2;
                                                          intl = closure_0(closure_2[16]).intl;
                                                          tmp6 = closure_0;
                                                          tmp7 = closure_2;
                                                          stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                                        }
                                                        tmp8 = stringResult;
                                                      }
                                                      tmp9 = null;
                                                      if (null != tmp8) {
                                                        str = "";
                                                        tmp9 = null;
                                                        if ("" !== tmp8) {
                                                          tmp10 = jsx;
                                                          tmp11 = View;
                                                          obj = { style: null, children: null };
                                                          tmp12 = closure_1;
                                                          obj.style = closure_1.errorContainer;
                                                          tmp13 = closure_0;
                                                          tmp14 = closure_2;
                                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                          obj1.children = tmp8;
                                                          obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                                          tmp9 = jsx(View, obj);
                                                        }
                                                      }
                                                      return tmp9;
                                                    }
                                                  }
                                                  return null;
                                                }
                                              }
                                              if (null != guild) {
                                                class Nn {
                                                  constructor() {
                                                    if (null == closure_6) {
                                                      tmp15 = closure_5;
                                                      if (null == closure_5) {
                                                        tmp8 = closure_7;
                                                        if (null == closure_7) {
                                                          tmp = globalThis;
                                                          _Object = Object;
                                                          tmp2 = closure_4;
                                                          num = 0;
                                                          stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            tmp4 = closure_0;
                                                            tmp5 = closure_2;
                                                            intl = closure_0(closure_2[16]).intl;
                                                            tmp6 = closure_0;
                                                            tmp7 = closure_2;
                                                            stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        tmp9 = null;
                                                        if (null != tmp8) {
                                                          str = "";
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            tmp10 = jsx;
                                                            tmp11 = View;
                                                            obj = { style: null, children: null };
                                                            tmp12 = closure_1;
                                                            obj.style = closure_1.errorContainer;
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                            obj1.children = tmp8;
                                                            obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                                            tmp9 = jsx(View, obj);
                                                          }
                                                        }
                                                        return tmp9;
                                                      }
                                                    }
                                                    return null;
                                                  }
                                                }
                                                const items9 = [, , , ];
                                                ({ avatarBackground: arr6[0], avatarPosition: arr6[1] } = tmp5);
                                                items9[2] = tmp6.avatarContainer;
                                                items9[3] = obj18;
                                                tmp125[0] = items9;
                                                const obj21 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
                                                let tmp127 = isDisabled;
                                                if (!isDisabled) {
                                                  tmp127 = !tmp35;
                                                }
                                                obj21.disabled = tmp127;
                                                let id1;
                                                if (guild != null) {
                                                  id1 = guild.id;
                                                }
                                                obj21.guildId = id1;
                                                obj21.statusStyle = obj18;
                                                tmp125[1] = closure_17(tmp4(tmp2[42]), obj21);
                                                closure_17(closure_8, tmp125);
                                                const tmp4Result5 = tmp4(tmp2[42]);
                                              }
                                              tmp4(tmp2[54]);
                                              if (cResult[129] !== sum1) {
                                                const obj22 = { paddingTop: 0, paddingBottom: null };
                                                class Nn {
                                                  constructor() {
                                                    if (null == closure_6) {
                                                      tmp15 = closure_5;
                                                      if (null == closure_5) {
                                                        tmp8 = closure_7;
                                                        if (null == closure_7) {
                                                          tmp = globalThis;
                                                          _Object = Object;
                                                          tmp2 = closure_4;
                                                          num = 0;
                                                          stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            tmp4 = closure_0;
                                                            tmp5 = closure_2;
                                                            intl = closure_0(closure_2[16]).intl;
                                                            tmp6 = closure_0;
                                                            tmp7 = closure_2;
                                                            stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        tmp9 = null;
                                                        if (null != tmp8) {
                                                          str = "";
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            tmp10 = jsx;
                                                            tmp11 = View;
                                                            obj = { style: null, children: null };
                                                            tmp12 = closure_1;
                                                            obj.style = closure_1.errorContainer;
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                            obj1.children = tmp8;
                                                            obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                                            tmp9 = jsx(View, obj);
                                                          }
                                                        }
                                                        return tmp9;
                                                      }
                                                    }
                                                    return null;
                                                  }
                                                }
                                                cResult[129] = sum1;
                                                cResult[130] = obj22;
                                                let tmp130 = obj22;
                                              } else {
                                                tmp130 = cResult[130];
                                              }
                                              if (cResult[131] === tmp5.profileContent) {
                                                if (cResult[132] === tmp5.profileContentWrapper) {
                                                  class Nn {
                                                    constructor() {
                                                      if (null == closure_6) {
                                                        tmp15 = closure_5;
                                                        if (null == closure_5) {
                                                          tmp8 = closure_7;
                                                          if (null == closure_7) {
                                                            tmp = globalThis;
                                                            _Object = Object;
                                                            tmp2 = closure_4;
                                                            num = 0;
                                                            stringResult = null;
                                                            if (Object.keys(closure_4).length > 0) {
                                                              tmp4 = closure_0;
                                                              tmp5 = closure_2;
                                                              intl = closure_0(closure_2[16]).intl;
                                                              tmp6 = closure_0;
                                                              tmp7 = closure_2;
                                                              stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                                                            }
                                                            tmp8 = stringResult;
                                                          }
                                                          tmp9 = null;
                                                          if (null != tmp8) {
                                                            str = "";
                                                            tmp9 = null;
                                                            if ("" !== tmp8) {
                                                              tmp10 = jsx;
                                                              tmp11 = View;
                                                              obj = { style: null, children: null };
                                                              tmp12 = closure_1;
                                                              obj.style = closure_1.errorContainer;
                                                              tmp13 = closure_0;
                                                              tmp14 = closure_2;
                                                              obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                              obj1.children = tmp8;
                                                              obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                                              tmp9 = jsx(View, obj);
                                                            }
                                                          }
                                                          return tmp9;
                                                        }
                                                      }
                                                      return null;
                                                    }
                                                  }
                                                  const obj23 = { customStatusActivity, hasCustomProfileTheme: tmp45, style: null, emojiOnlyStyle: null, editEnabled: true };
                                                  ({ customStatusBubble: obj30.style, emojiOnlyCustomStatusBubble: obj30.emojiOnlyStyle } = tmp5);
                                                  const tmp134 = closure_17(tmp4(tmp2[55]), obj23);
                                                  cResult[135] = customStatusActivity;
                                                  cResult[136] = tmp45;
                                                  cResult[137] = tmp5.customStatusBubble;
                                                  cResult[138] = tmp5.emojiOnlyCustomStatusBubble;
                                                  cResult[139] = tmp134;
                                                }
                                              }
                                              const items10 = [, , ];
                                              ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp5);
                                              items10[2] = tmp130;
                                              cResult[131] = tmp5.profileContent;
                                              cResult[132] = tmp5.profileContentWrapper;
                                              cResult[133] = tmp130;
                                              cResult[134] = items10;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj24 = { user: currentUser, displayProfile: tmp4ResultResult, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc: tmp33, pendingBanner, pendingThemeColors, disabled: isDisabled };
                              const tmp122 = closure_17(EditGuildProfileBanner, obj24);
                              cResult[119] = currentUser;
                              cResult[120] = tmp4ResultResult;
                              cResult[121] = guild.id;
                              cResult[122] = stateFromStores;
                              cResult[123] = stateFromStores1;
                              cResult[124] = isDisabled;
                              cResult[125] = tmp33;
                              cResult[126] = pendingBanner;
                              cResult[127] = pendingThemeColors;
                              cResult[128] = tmp122;
                            }
                            const items11 = [tmp6.container, tmp112];
                            cResult[112] = tmp6.container;
                            cResult[113] = tmp112;
                            cResult[114] = items11;
                          }
                        }
                      }
                    }
                    class Nn {
                      constructor() {
                        if (null == closure_6) {
                          tmp15 = closure_5;
                          if (null == closure_5) {
                            tmp8 = closure_7;
                            if (null == closure_7) {
                              tmp = globalThis;
                              _Object = Object;
                              tmp2 = closure_4;
                              num = 0;
                              stringResult = null;
                              if (Object.keys(closure_4).length > 0) {
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                intl = closure_0(closure_2[16]).intl;
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                stringResult = intl.string(closure_0(closure_2[16]).t.s35OuK);
                              }
                              tmp8 = stringResult;
                            }
                            tmp9 = null;
                            if (null != tmp8) {
                              str = "";
                              tmp9 = null;
                              if ("" !== tmp8) {
                                tmp10 = jsx;
                                tmp11 = View;
                                obj = { style: null, children: null };
                                tmp12 = closure_1;
                                obj.style = closure_1.errorContainer;
                                tmp13 = closure_0;
                                tmp14 = closure_2;
                                obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                obj1.children = tmp8;
                                obj.children = jsx(closure_0(closure_2[26]).Text, obj1);
                                tmp9 = jsx(View, obj);
                              }
                            }
                            return tmp9;
                          }
                        }
                        return null;
                      }
                    }
                    cResult[102] = first3;
                    cResult[103] = tmp76;
                    cResult[104] = first4;
                    cResult[105] = first1;
                    cResult[106] = tmp6.errorContainer;
                    cResult[107] = Nn;
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
                  cResult[73] = undefined;
                  cResult[74] = undefined;
                  cResult[75] = undefined;
                  cResult[76] = undefined;
                  cResult[77] = undefined;
                  cResult[78] = undefined;
                  cResult[79] = undefined;
                  cResult[80] = undefined;
                  cResult[81] = undefined;
                  cResult[82] = undefined;
                  cResult[83] = undefined;
                  cResult[84] = undefined;
                  cResult[85] = undefined;
                  cResult[86] = undefined;
                  cResult[87] = undefined;
                  cResult[88] = undefined;
                  cResult[89] = undefined;
                  cResult[90] = undefined;
                  cResult[91] = undefined;
                  cResult[92] = undefined;
                  cResult[93] = undefined;
                  cResult[94] = undefined;
                  cResult[95] = undefined;
                  cResult[96] = null;
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
                  tmp55 = tmp104;
                  tmp54 = tmp105;
                  tmp53 = tmp106;
                  tmp52 = tmp107;
                  tmp51 = tmp108;
                  tmp50 = tmp109;
                  const tmpResult14 = tmp(tmp2[41]);
                }
              }
              const obj25 = { theme, primaryColor, secondaryColor };
              cResult[28] = primaryColor;
              cResult[29] = secondaryColor;
              cResult[30] = theme;
              cResult[31] = obj25;
              tmp46 = obj25;
              const tmp44 = tmp4(tmp2[40])(tmp43);
            }
          }
          const obj26 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[24] = currentUser;
          cResult[25] = tmp4ResultResult;
          cResult[26] = pendingThemeColors;
          cResult[27] = obj26;
          tmp43 = obj26;
          const tmpResult13 = tmp(tmp2[24]);
        }
        const tmpResult12 = tmp(tmp2[38]);
        const canResetThemeColorsResult = tmp(tmp2[39]).canResetThemeColors(pendingThemeColors, themeColors);
        cResult[20] = pendingThemeColors;
        cResult[21] = themeColors;
        cResult[22] = canResetThemeColorsResult;
        tmp38 = canResetThemeColorsResult;
        const tmpResult15 = tmp(tmp2[39]);
      }
      const tmpResult11 = tmp(tmp2[35]);
      const obj27 = { userId: currentUser.id, image: pendingAvatar };
      const pendingAvatarSrc = tmp(tmp2[37]).getPendingAvatarSrc(obj27);
      cResult[15] = currentUser.id;
      cResult[16] = pendingAvatar;
      cResult[17] = pendingAvatarSrc;
      tmp33 = pendingAvatarSrc;
      const tmpResult16 = tmp(tmp2[37]);
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
    const tmpResult9 = tmp(tmp2[33]);
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
  ref1 = first3.useRef(null);
}) : ((currentUser) => {
  currentUser = currentUser.currentUser;
  guild = undefined;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[28])();
  const tmp4 = guild(analyticsLocations[22])();
  const bioMaxLength = currentUser(analyticsLocations[29]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(analyticsLocations[29]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(analyticsLocations[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[25]).space.PX_16;
  let obj2 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj5 = { ref: ref3, offset: null };
  const obj6 = { type: "toValue", value: null };
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[30])();
  obj6.value = guild(analyticsLocations[25]).space.PX_64;
  obj5.offset = obj6;
  items[2] = obj5;
  obj2.inputs = items;
  obj2.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[31])(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[32])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const tmp12 = guild(analyticsLocations[31]);
  const items1 = [GuildMemberStore];
  const stateFromStores = currentUser(analyticsLocations[33]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const obj7 = currentUser(analyticsLocations[33]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = currentUser(analyticsLocations[33]).useStateFromStores(items2, () => {
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
  const obj8 = currentUser(analyticsLocations[33]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[34])(currentUser.id, id);
  const tmp16 = guild(analyticsLocations[34]);
  const customStatusActivity = currentUser(analyticsLocations[35]).useCustomStatusActivity();
  const tmp5Result = currentUser(analyticsLocations[35]);
  const tmp20 = guild(analyticsLocations[36])(tmp16Result);
  const pendingAvatarSrc = currentUser(analyticsLocations[37]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result6 = currentUser(analyticsLocations[37]);
  const canEditNickname = currentUser(analyticsLocations[38]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result7 = currentUser(analyticsLocations[38]);
  const result = guild(analyticsLocations[8]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult = guild(analyticsLocations[8]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp59Result8 = !result;
  const tmp5Result8 = currentUser(analyticsLocations[39]);
  if (!result) {
    tmp59Result8 = !tmp7;
  }
  const canResetThemeColorsResult = currentUser(analyticsLocations[39]).canResetThemeColors(pendingThemeColors, themeColors);
  const floatingUpsellHeight = currentUser(analyticsLocations[24]).useFloatingUpsellHeight();
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
  const tmp5Result9 = currentUser(analyticsLocations[24]);
  const items3 = [guild(analyticsLocations[10]).USER_SETTINGS];
  analyticsLocations = guild(analyticsLocations[9])(items3).analyticsLocations;
  const tmpResult9 = guild(analyticsLocations[9]);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[40])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp28 = guild(analyticsLocations[40])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[41]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp59Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[25]).space.PX_16;
  const tmp5Result10 = currentUser(analyticsLocations[41]);
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
      obj19.children = closure_17(tmp(tmp2[42]), obj20);
      tmp59Result = closure_17(closure_8, obj19);
      const tmpResult10 = tmp(tmp2[42]);
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
    const items10 = [closure_17(tmp(tmp2[55]), obj24), , ];
    const obj25 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp43 = pendingNickname;
    const tmpResult11 = tmp(tmp2[54]);
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
    items10[1] = closure_17(tmp(tmp2[56]), obj25);
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
              obj28.children = closure_17(tmp5(tmp2[26]).Text, obj29);
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
      const tmpResult13 = tmp(tmp2[43]);
      obj30.placeholder = tmp(tmp2[44]).getName(currentUser);
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
        tmp59Result6 = closure_17(tmp(tmp2[45]), obj31);
      }
      items12[2] = tmp59Result6;
      const obj32 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult14 = tmp(tmp2[44]);
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
      items12[3] = closure_17(tmp(tmp2[43]), obj32);
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
        tmp59Result7 = closure_17(tmp(tmp2[43]), obj33);
        const tmpResult16 = tmp(tmp2[43]);
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
      items12[5] = closure_17(tmp(tmp2[46]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_17(tmp(tmp2[47]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_17(tmp(tmp2[48]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_17(tmp(tmp2[49]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_17(tmp(tmp2[50]), obj38);
      obj26.children = items12;
      tmp60Result = closure_18(closure_8, obj26);
      const tmpResult15 = tmp(tmp2[43]);
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
        onButtonPress() {
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
    return closure_17(tmp5(tmp2[53]).ThemeContextProvider, obj11);
  }
  tmp32 = _objectWithoutProperties(errors, closure_4);
});