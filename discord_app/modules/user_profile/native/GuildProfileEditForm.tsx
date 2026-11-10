// === Module 16912: GuildProfileEditForm ===

// Module 16912 (GuildProfileEditForm)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import Text_Text from "Text/Text" /* 5753 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7390 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8812 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8814 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9881 */;
import openPremiumModalDefault from "openPremiumModal" /* 10033 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10034 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16801 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16809 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16833 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16893 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5054 */;
import UserProfileStore from "UserProfileStore" /* 7852 */;

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
      const tmp13 = asyncRequireImpl(16789, dependencyMap.paths);
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
  let intl = tmp5(1113).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1113).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_16(UserProfileEditBannerButtonDefault, obj3);
  return closure_16(user(7390).AnalyticsLocationProvider, obj2);
}
function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
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
    let tmp6Result = value2(UserProfileFloatingUpsellDefault, obj2);
    const tmp3Result = UserProfileFloatingUpsellDefault;
  } else {
    const obj3 = { style: null, ctaText: null, onPress: null, children: null };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    obj3.style = items;
    const intl = util.intl;
    obj3.ctaText = intl.string(util.t.pj0XBN);
    obj3.onPress = onButtonPress;
    const obj5 = { variant: "body-sm/normal", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.YIZS5B);
    obj3.children = value2(Text_Text.Text, obj5);
    tmp6Result = value2(UserProfileUpsellCardDefault, obj3);
    const tmp3Result2 = UserProfileUpsellCardDefault;
  }
  return tmp6Result;
}
let closure_3 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticsObjects: closure_10, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: closure_12, PRONOUNS_MAX_LENGTH: map1, UpsellTypes: closure_14, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1387).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = [1];
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  const header = currentUser.header;
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
  const PX_16 = guild(analyticsLocations[26]).space.PX_16;
  let obj2 = { insets, inputs: null, scrollViewRef: null };
  items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj5 = { ref: ref3, offset: null };
  const obj6 = { type: "toValue", value: null };
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[30])();
  obj6.value = guild(analyticsLocations[26]).space.PX_64;
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
  let tmp61Result8 = !result;
  const tmp5Result8 = currentUser(analyticsLocations[39]);
  if (!result) {
    tmp61Result8 = !tmp7;
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
  if (tmp61Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[26]).space.PX_16;
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
    const obj14 = { ref, stickyHeaderIndices: null, stickyHeaderHiddenOnScroll: null, keyboardShouldPersistTaps: null, children: null };
    let tmp37;
    if (null != header) {
      tmp37 = closure_18;
    }
    obj14.stickyHeaderIndices = tmp37;
    obj14.stickyHeaderHiddenOnScroll = null != header;
    let str6;
    if (null != header) {
      str6 = "handled";
    }
    obj14.keyboardShouldPersistTaps = str6;
    const obj15 = { style: tmp4.bounceOffset };
    const items5 = [closure_16(closure_7, obj15), header, ];
    const obj16 = { style: null, children: null };
    const obj17 = { backgroundColor: gradientSecondaryBackground };
    obj16.style = obj17;
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [closure_16(EditGuildProfileBanner, obj18), ];
    let tmp61Result = null;
    if (null != guild) {
      const obj19 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr7[0], avatarPosition: arr7[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj19.style = items7;
      const obj20 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp41 = isDisabled;
      if (!isDisabled) {
        tmp41 = !result;
      }
      obj20.disabled = tmp41;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj20.guildId = id1;
      obj20.statusStyle = obj10;
      obj19.children = closure_16(tmp(tmp2[43]), obj20);
      tmp61Result = closure_16(closure_7, obj19);
      const tmpResult10 = tmp(tmp2[43]);
    }
    const items8 = [tmp61Result, ];
    const obj21 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items9 = [, , ];
    ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp3);
    const obj22 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj22;
    obj21.containerStyle = items9;
    const obj23 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj26.style, emojiOnlyCustomStatusBubble: obj26.emojiOnlyStyle } = tmp3);
    const items10 = [closure_16(tmp(tmp2[45]), obj23), , ];
    const obj24 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp45 = pendingNickname;
    const tmpResult11 = tmp(tmp2[44]);
    if (pendingNickname == null) {
      tmp45 = str;
    }
    obj24.displayName = tmp45;
    let tmp46 = str3;
    if ("" !== pendingPronouns) {
      tmp46 = pendingPronouns;
    }
    obj24.pronouns = tmp46;
    obj24.badges = tmp20;
    obj24.badgeContainerBackground = containerBackground;
    obj24.guildId = guild.id;
    obj24.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = closure_16(tmp(tmp2[46]), obj24);
    let tmp62Result = null;
    if (null != guild) {
      const obj25 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      obj25.style = items11;
      let tmp48 = null;
      if (null == first2) {
        tmp48 = null;
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
          let tmp61Result5 = null;
          if (null != first3) {
            tmp61Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: null };
              const obj29 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: first3 };
              obj28.children = closure_16(tmp5(tmp2[27]).Text, obj29);
              tmp61Result5 = closure_16(closure_7, obj28);
            }
          }
          tmp48 = tmp61Result5;
        }
      }
      const items12 = [tmp48, , , , , , , , , ];
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
      const tmpResult13 = tmp(tmp2[47]);
      obj30.placeholder = tmp(tmp2[48]).getName(currentUser);
      obj30.maxLength = maxLength;
      let tmp54 = !canEditNickname;
      if (canEditNickname) {
        tmp54 = isDisabled;
      }
      obj30.disabled = tmp54;
      items12[1] = closure_16(tmpResult13, obj30);
      let tmp61Result6 = result;
      if (result) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp61Result6 = closure_16(tmp(tmp2[49]), obj31);
      }
      items12[2] = tmp61Result6;
      const obj32 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult14 = tmp(tmp2[48]);
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
      items12[3] = closure_16(tmp(tmp2[47]), obj32);
      let tmp61Result7 = null;
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
        tmp61Result7 = closure_16(tmp(tmp2[47]), obj33);
        const tmpResult16 = tmp(tmp2[47]);
      }
      items12[4] = tmp61Result7;
      const obj34 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(callback) {
              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors: callback });
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = closure_16(tmp(tmp2[50]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_16(tmp(tmp2[51]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_16(tmp(tmp2[52]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_16(tmp(tmp2[53]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_16(tmp(tmp2[54]), obj38);
      obj25.children = items12;
      tmp62Result = closure_17(closure_7, obj25);
      const tmpResult15 = tmp(tmp2[47]);
    }
    const obj39 = { children: null };
    items10[2] = tmp62Result;
    obj21.children = items10;
    items8[1] = closure_17(tmpResult11, obj21);
    obj39.children = items8;
    items6[1] = closure_17(closure_7, obj39);
    obj16.children = items6;
    items5[2] = closure_17(closure_7, obj16);
    obj14.children = items5;
    const items13 = [closure_17(closure_6, obj14), ];
    if (tmp61Result8) {
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
      tmp61Result8 = closure_16(GuildProfileTryItOutUpsellExperimentWrapper, obj40);
    }
    items13[1] = tmp61Result8;
    obj12.children = items13;
    obj11.children = closure_17(closure_7, obj12);
    return closure_16(tmp5(tmp2[42]).ThemeContextProvider, obj11);
  }
  tmp32 = _objectWithoutProperties(errors, closure_3);
};