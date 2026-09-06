// === Module 14651: GuildProfileEditForm ===

// Module 14651 (GuildProfileEditForm)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8164 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8166 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9362 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14591 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;

require = fn;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = PremiumUtilsDefault;
  let result = obj.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  if (result) {
    result = null != guildMember;
  }
  obj.showEditButton = result;
  obj.onPressEdit = function onPressEdit() {
    if (c4) {
      let tmpResult = tmp(4527);
      let obj = { user, analyticsLocations, showRemoveBanner: null, removeText: null, onBannerChange: null };
      const tmp13 = asyncRequireImpl(14592, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = tmp9(1114).intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        user(banner[18]);
        const obj = { guildId, banner };
        return obj.setPendingChanges(obj);
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
    } else {
      tmpResult = tmp(9313);
      obj = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      const obj1 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
      obj.analyticsLocation = obj1;
      obj.analyticsLocations = analyticsLocations;
      const obj2 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
      obj.analyticsProperties = obj2;
      const result = tmpResult.handleShowUpsellAlert(obj);
    }
  };
  let intl = tmp5(1114).intl;
  obj.editButtonAccessibilityLabel = intl.string(user(1114).t["95hPAe"]);
  obj.editDisabled = disabled;
  obj.children = closure_17(UserProfileEditBannerButtonDefault, obj);
  return closure_17(user(7162).AnalyticsLocationProvider, obj);
}
let closure_3 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7208).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1074);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  let guild;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[20])();
  const tmp4 = guild(analyticsLocations[21])();
  let obj = currentUser(analyticsLocations[22]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(analyticsLocations[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[25]).space.PX_16;
  obj = { insets, inputs: null, scrollViewRef: null };
  obj = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const items = [obj, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj2 = { ref: ref3, offset: null };
  const obj3 = { type: "toValue", value: null };
  const obj1 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[23])();
  obj3.value = guild(analyticsLocations[25]).space.PX_64;
  obj2.offset = obj3;
  items[2] = obj2;
  obj.inputs = items;
  obj.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[26])(obj).onFocus;
  const tmp13 = guild(analyticsLocations[27])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  let obj6 = currentUser(analyticsLocations[28]);
  const items1 = [GuildMemberStore];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  let obj7 = currentUser(analyticsLocations[28]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = obj7.useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const tmp12 = guild(analyticsLocations[26]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[29])(currentUser.id, id);
  let tmp5Result = tmp5(tmp2[30]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp16 = guild(analyticsLocations[29]);
  tmp5Result = tmp5(tmp2[32]);
  const pendingAvatarSrc = tmp5Result.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj4 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = guild(analyticsLocations[31])(tmp16Result);
  const canEditNickname = currentUser(analyticsLocations[33]).useGuildActionSheetPermissions(guild).canEditNickname;
  let tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  const tmp5Result1 = currentUser(analyticsLocations[33]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp58Result3 = !result;
  const tmp5Result2 = currentUser(analyticsLocations[34]);
  if (!result) {
    tmp58Result3 = !tmp7;
  }
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
  tmpResult = tmp(tmp2[10]);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = tmpResult(items3).analyticsLocations;
  const canResetThemeColorsResult = currentUser(analyticsLocations[34]).canResetThemeColors(pendingThemeColors, themeColors);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp27 = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[36]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp58Result3) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj5 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[25]).space.PX_16;
  const tmp5Result3 = currentUser(analyticsLocations[36]);
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
    obj6 = { theme, primaryColor, secondaryColor, children: null };
    obj7 = { style: null, children: null };
    const items4 = [tmp4.container, ];
    const obj8 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj8;
    obj7.style = items4;
    const obj9 = { ref, children: null };
    const obj10 = { style: tmp4.bounceOffset };
    const items5 = [closure_17(closure_7, obj10), ];
    const obj11 = { style: null, children: null };
    const obj12 = { backgroundColor: gradientSecondaryBackground };
    obj11.style = obj12;
    const obj13 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [closure_17(EditGuildProfileBanner, obj13), ];
    let tmp58Result = null;
    if (null != guild) {
      const obj14 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj5;
      obj14.style = items7;
      const obj15 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp37 = isDisabled;
      if (!isDisabled) {
        tmp37 = !result;
      }
      obj15.disabled = tmp37;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj15.guildId = id1;
      obj15.statusStyle = obj5;
      obj14.children = tmp58(tmp(tmp2[39]), obj15);
      tmp58Result = tmp58(tmp60, obj14);
      const tmpResult1 = tmp(tmp2[39]);
    }
    const items8 = [tmp58Result, ];
    const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj17 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj17;
    obj16.containerStyle = items9;
    const obj18 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj21.style, emojiOnlyCustomStatusBubble: obj21.emojiOnlyStyle } = tmp3);
    const items10 = [closure_17(tmp(tmp2[41]), obj18), , ];
    const obj19 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp42 = pendingNickname;
    const tmp61 = closure_6;
    const tmpResult2 = tmp(tmp2[40]);
    if (pendingNickname == null) {
      tmp42 = str;
    }
    obj19.displayName = tmp42;
    let tmp43 = str3;
    if ("" !== pendingPronouns) {
      tmp43 = pendingPronouns;
    }
    obj19.pronouns = tmp43;
    obj19.badges = tmp20;
    obj19.badgeContainerBackground = containerBackground;
    obj19.guildId = guild.id;
    obj19.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = closure_17(tmp(tmp2[42]), obj19);
    let tmp59Result = null;
    if (null != guild) {
      const obj20 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj21 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj21;
      obj20.style = items11;
      let tmp45 = null;
      if (null == first2) {
        tmp45 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp31).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          tmp58Result = null;
          if (null != first3) {
            tmp58Result = null;
            if ("" !== first3) {
              const obj22 = { style: tmp4.errorContainer, children: null };
              const obj23 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj22.children = tmp58(tmp5(tmp2[37]).Text, obj23);
              tmp58Result = tmp58(tmp60, obj22);
            }
          }
          tmp45 = tmp58Result;
        }
      }
      const items12 = [tmp45, , , , , , , , , ];
      const obj24 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
      const intl2 = tmp5(tmp2[17]).intl;
      obj24.label = intl2.string(tmp5(tmp2[17]).t.me1lRk);
      obj24.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj24.value = pendingNickname;
      obj24.onFocus = onFocus;
      obj24.onChange = function onChange(nickname) {
        const obj = { guildId: guild.id, nickname };
        return obj.setPendingChanges(obj);
      };
      const tmpResult4 = tmp(tmp2[43]);
      obj24.placeholder = tmp(tmp2[44]).getName(currentUser);
      obj24.maxLength = maxLength;
      let tmp51 = !canEditNickname;
      if (canEditNickname) {
        tmp51 = isDisabled;
      }
      obj24.isDisabled = tmp51;
      items12[1] = tmp58(tmpResult4, obj24);
      let tmp58Result1 = result;
      if (result) {
        const obj25 = { user: currentUser, guildId: guild.id };
        tmp58Result1 = tmp58(tmp(tmp2[45]), obj25);
      }
      items12[2] = tmp58Result1;
      const obj26 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, isDisabled: null };
      const tmpResult5 = tmp(tmp2[44]);
      const intl3 = tmp5(tmp2[17]).intl;
      obj26.label = intl3.string(tmp5(tmp2[17]).t["+T3RI/"]);
      obj26.errorMessage = first1;
      const intl4 = tmp5(tmp2[17]).intl;
      obj26.description = intl4.string(tmp5(tmp2[17]).t.NZqtIp);
      obj26.value = pendingPronouns;
      obj26.onFocus = onFocus;
      obj26.onChange = function onChange(pronouns) {
        const obj = { guildId: guild.id, pronouns };
        return obj.setPendingChanges(obj);
      };
      obj26.placeholder = str3;
      obj26.maxLength = maxLength2;
      obj26.isDisabled = isDisabled;
      items12[3] = tmp58(tmp(tmp2[43]), obj26);
      let tmp58Result2 = null;
      if (result) {
        const obj27 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, isDisabled: null };
        const intl5 = tmp5(tmp2[17]).intl;
        obj27.label = intl5.string(tmp5(tmp2[17]).t.ZzAR2Y);
        obj27.errorMessage = first2;
        const intl6 = tmp5(tmp2[17]).intl;
        obj27.description = intl6.string(tmp5(tmp2[17]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj27.value = pendingBio;
        obj27.onFocus = onFocus;
        obj27.onChange = function onChange(bio) {
          const obj = { guildId: guild.id, bio };
          return obj.setPendingChanges(obj);
        };
        obj27.placeholder = str5;
        obj27.maxLength = bioMaxLength;
        obj27.isDisabled = isDisabled;
        tmp58Result2 = tmp58(tmp(tmp2[43]), obj27);
        const tmpResult7 = tmp(tmp2[43]);
      }
      items12[4] = tmp58Result2;
      const obj28 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              const obj = { guildId: guild.id, themeColors };
              return obj.setPendingChanges(obj);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = tmp58(tmp(tmp2[46]), obj28);
      const obj29 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = tmp58(tmp(tmp2[47]), obj29);
      const obj30 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = tmp58(tmp(tmp2[48]), obj30);
      const obj31 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = tmp58(tmp(tmp2[49]), obj31);
      const obj32 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = tmp58(tmp(tmp2[50]), obj32);
      obj20.children = items12;
      tmp59Result = tmp59(tmp60, obj20);
      const tmpResult6 = tmp(tmp2[43]);
    }
    const obj33 = { children: null };
    items10[2] = tmp59Result;
    obj16.children = items10;
    items8[1] = closure_18(tmpResult2, obj16);
    obj33.children = items8;
    items6[1] = closure_18(closure_7, obj33);
    obj11.children = items6;
    items5[1] = closure_18(closure_7, obj11);
    obj9.children = items5;
    const items13 = [closure_18(tmp61, obj9), ];
    if (tmp58Result3) {
      const obj34 = { style: null, ctaText: null, onPress: null, children: null };
      const items14 = [tmp4.floatingUpsell, ];
      const obj35 = { bottom: tmp(tmp2[25]).space.PX_16 + insets.bottom };
      items14[1] = obj35;
      obj34.style = items14;
      const intl7 = tmp5(tmp2[17]).intl;
      obj34.ctaText = intl7.string(tmp5(tmp2[17]).t.pj0XBN);
      obj34.onPress = function onPress() {
        let obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
        obj = {};
        const merged = Object.assign(closure_19);
        obj.object = constants.BUTTON_CTA;
        obj.analyticsLocation = obj;
        obj.analyticsLocations = analyticsLocations;
        obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj);
      };
      const obj36 = { variant: "text-sm/normal", children: null };
      const intl8 = tmp5(tmp2[17]).intl;
      obj36.children = intl8.string(tmp5(tmp2[17]).t.YIZS5B);
      obj34.children = tmp58(tmp5(tmp2[37]).Text, obj36);
      tmp58Result3 = tmp58(tmp(tmp2[51]), obj34);
      const tmpResult8 = tmp(tmp2[51]);
    }
    items13[1] = tmp58Result3;
    obj7.children = items13;
    obj6.children = closure_18(closure_7, obj7);
    return closure_17(tmp5(tmp2[38]).ThemeContextProvider, obj6);
  }
  tmp31 = _objectWithoutProperties(errors, closure_3);
};