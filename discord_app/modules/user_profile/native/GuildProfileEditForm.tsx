// === Module 14867: GuildProfileEditForm ===

// Module 14867 (GuildProfileEditForm)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7358 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7378 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8394 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8396 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9551 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9600 */;
import openPremiumModalDefault from "openPremiumModal" /* 9630 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14807 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import UserProfileStore from "UserProfileStore" /* 7817 */;

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
      const tmp13 = asyncRequireImpl(14808, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = util.intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(banner[18]).setPendingChanges({ guildId, banner });
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
  let intl = tmp5(1115).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1115).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_17(UserProfileEditBannerButtonDefault, obj3);
  return closure_17(user(7358).AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7404).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1074);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
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
  const bioMaxLength = currentUser(analyticsLocations[22]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(analyticsLocations[22]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(analyticsLocations[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[25]).space.PX_16;
  let obj2 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj5 = { ref: ref3, offset: null };
  const obj6 = { type: "toValue", value: null };
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[23])();
  obj6.value = guild(analyticsLocations[25]).space.PX_64;
  obj5.offset = obj6;
  items[2] = obj5;
  obj2.inputs = items;
  obj2.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[26])(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[27])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const tmp12 = guild(analyticsLocations[26]);
  const items1 = [GuildMemberStore];
  const stateFromStores = currentUser(analyticsLocations[28]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const obj7 = currentUser(analyticsLocations[28]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = currentUser(analyticsLocations[28]).useStateFromStores(items2, () => {
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
  const obj8 = currentUser(analyticsLocations[28]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[29])(currentUser.id, id);
  const tmp16 = guild(analyticsLocations[29]);
  const customStatusActivity = currentUser(analyticsLocations[30]).useCustomStatusActivity();
  const tmp5Result = currentUser(analyticsLocations[30]);
  const tmp20 = guild(analyticsLocations[31])(tmp16Result);
  const pendingAvatarSrc = currentUser(analyticsLocations[32]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result5 = currentUser(analyticsLocations[32]);
  const canEditNickname = currentUser(analyticsLocations[33]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result6 = currentUser(analyticsLocations[33]);
  const result = guild(analyticsLocations[9]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult = guild(analyticsLocations[9]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp58Result8 = !result;
  const tmp5Result7 = currentUser(analyticsLocations[34]);
  if (!result) {
    tmp58Result8 = !tmp7;
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
  const canResetThemeColorsResult = currentUser(analyticsLocations[34]).canResetThemeColors(pendingThemeColors, themeColors);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = guild(analyticsLocations[10])(items3).analyticsLocations;
  const tmpResult10 = guild(analyticsLocations[10]);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp27 = guild(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[36]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp58Result8) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[25]).space.PX_16;
  const tmp5Result8 = currentUser(analyticsLocations[36]);
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
    const items5 = [closure_17(closure_7, obj15), ];
    const obj16 = { style: null, children: null };
    const obj17 = { backgroundColor: gradientSecondaryBackground };
    obj16.style = obj17;
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [closure_17(EditGuildProfileBanner, obj18), ];
    let tmp58Result = null;
    if (null != guild) {
      const obj19 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj19.style = items7;
      const obj20 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp37 = isDisabled;
      if (!isDisabled) {
        tmp37 = !result;
      }
      obj20.disabled = tmp37;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj20.guildId = id1;
      obj20.statusStyle = obj10;
      obj19.children = closure_17(tmp(tmp2[39]), obj20);
      tmp58Result = closure_17(closure_7, obj19);
      const tmpResult11 = tmp(tmp2[39]);
    }
    const items8 = [tmp58Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj23;
    obj22.containerStyle = items9;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj21.style, emojiOnlyCustomStatusBubble: obj21.emojiOnlyStyle } = tmp3);
    const items10 = [closure_17(tmp(tmp2[41]), obj24), , ];
    const obj25 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp42 = pendingNickname;
    const tmpResult12 = tmp(tmp2[40]);
    if (pendingNickname == null) {
      tmp42 = str;
    }
    obj25.displayName = tmp42;
    let tmp43 = str3;
    if ("" !== pendingPronouns) {
      tmp43 = pendingPronouns;
    }
    obj25.pronouns = tmp43;
    obj25.badges = tmp20;
    obj25.badgeContainerBackground = containerBackground;
    obj25.guildId = guild.id;
    obj25.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = closure_17(tmp(tmp2[42]), obj25);
    let tmp59Result = null;
    if (null != guild) {
      const obj26 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      obj26.style = items11;
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
          let tmp58Result5 = null;
          if (null != first3) {
            tmp58Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: null };
              const obj29 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj28.children = closure_17(tmp5(tmp2[37]).Text, obj29);
              tmp58Result5 = closure_17(closure_7, obj28);
            }
          }
          tmp45 = tmp58Result5;
        }
      }
      const items12 = [tmp45, , , , , , , , , ];
      const obj30 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
      const intl2 = tmp5(tmp2[17]).intl;
      obj30.label = intl2.string(tmp5(tmp2[17]).t.me1lRk);
      obj30.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj30.value = pendingNickname;
      obj30.onFocus = onFocus;
      obj30.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult14 = tmp(tmp2[43]);
      obj30.placeholder = tmp(tmp2[44]).getName(currentUser);
      obj30.maxLength = maxLength;
      let tmp51 = !canEditNickname;
      if (canEditNickname) {
        tmp51 = isDisabled;
      }
      obj30.disabled = tmp51;
      items12[1] = closure_17(tmpResult14, obj30);
      let tmp58Result6 = result;
      if (result) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp58Result6 = closure_17(tmp(tmp2[45]), obj31);
      }
      items12[2] = tmp58Result6;
      const obj32 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult15 = tmp(tmp2[44]);
      const intl3 = tmp5(tmp2[17]).intl;
      obj32.label = intl3.string(tmp5(tmp2[17]).t["+T3RI/"]);
      obj32.errorMessage = first1;
      const intl4 = tmp5(tmp2[17]).intl;
      obj32.description = intl4.string(tmp5(tmp2[17]).t.NZqtIp);
      obj32.value = pendingPronouns;
      obj32.onFocus = onFocus;
      obj32.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj32.placeholder = str3;
      obj32.maxLength = maxLength2;
      obj32.disabled = isDisabled;
      items12[3] = closure_17(tmp(tmp2[43]), obj32);
      let tmp58Result7 = null;
      if (result) {
        const obj33 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
        const intl5 = tmp5(tmp2[17]).intl;
        obj33.label = intl5.string(tmp5(tmp2[17]).t.ZzAR2Y);
        obj33.errorMessage = first2;
        const intl6 = tmp5(tmp2[17]).intl;
        obj33.description = intl6.string(tmp5(tmp2[17]).t.S5O8U2);
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
        tmp58Result7 = closure_17(tmp(tmp2[43]), obj33);
        const tmpResult17 = tmp(tmp2[43]);
      }
      items12[4] = tmp58Result7;
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
      tmp59Result = closure_18(closure_7, obj26);
      const tmpResult16 = tmp(tmp2[43]);
    }
    const obj39 = { children: null };
    items10[2] = tmp59Result;
    obj22.children = items10;
    items8[1] = closure_18(tmpResult12, obj22);
    obj39.children = items8;
    items6[1] = closure_18(closure_7, obj39);
    obj16.children = items6;
    items5[1] = closure_18(closure_7, obj16);
    obj14.children = items5;
    const items13 = [closure_18(closure_6, obj14), ];
    if (tmp58Result8) {
      const obj40 = { style: null, ctaText: null, onPress: null, children: null };
      const items14 = [tmp4.floatingUpsell, ];
      const obj41 = { bottom: tmp(tmp2[25]).space.PX_16 + insets.bottom };
      items14[1] = obj41;
      obj40.style = items14;
      const intl7 = tmp5(tmp2[17]).intl;
      obj40.ctaText = intl7.string(tmp5(tmp2[17]).t.pj0XBN);
      obj40.onPress = function onPress() {
        const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
        const obj2 = {};
        const merged = Object.assign(closure_19);
        obj2.object = constants.BUTTON_CTA;
        obj.analyticsLocation = obj2;
        obj.analyticsLocations = analyticsLocations;
        obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj);
      };
      const obj42 = { variant: "text-sm/normal", children: null };
      const intl8 = tmp5(tmp2[17]).intl;
      obj42.children = intl8.string(tmp5(tmp2[17]).t.YIZS5B);
      obj40.children = closure_17(tmp5(tmp2[37]).Text, obj42);
      tmp58Result8 = closure_17(tmp(tmp2[51]), obj40);
      const tmpResult18 = tmp(tmp2[51]);
    }
    items13[1] = tmp58Result8;
    obj12.children = items13;
    obj11.children = closure_18(closure_7, obj12);
    return closure_17(tmp5(tmp2[38]).ThemeContextProvider, obj11);
  }
  tmp31 = _objectWithoutProperties(errors, closure_3);
};