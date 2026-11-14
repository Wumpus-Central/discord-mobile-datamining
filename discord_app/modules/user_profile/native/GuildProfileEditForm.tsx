// === Module 17193: GuildProfileEditForm ===

// Module 17193 (GuildProfileEditForm)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8541 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8552 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 9398 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 11170 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 17080 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 17088 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 17114 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 17174 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8547 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;

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
      const tmp13 = asyncRequireImpl(17068, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = util.intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(dependencyMap[18]).setPendingChanges({ guildId, banner });
      };
      obj.onGifBannerSelect = function openGifPicker() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { profileAssetType: null, selectionContext: null, guildId: null };
        const obj2 = ActionSheetActionCreatorsDefault;
        obj3.profileAssetType = user(dependencyMap[20]).ProfileAssetType.BANNER;
        obj3.selectionContext = user(dependencyMap[20]).GIFSelectionContext.PROFILE_EDIT;
        obj3.guildId = guildId;
        obj2.openLazy(user(dependencyMap[15])(dependencyMap[19], dependencyMap.paths), "Select GIF Banner", obj3);
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
  obj2.children = closure_17(UserProfileEditBannerButtonDefault, obj3);
  return closure_17(user(7918).AnalyticsLocationProvider, obj2);
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
    let tmp6Result = closure_1_17(UserProfileFloatingUpsellDefault, obj2);
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
    obj3.children = closure_1_17(Text_Text.Text, obj5);
    tmp6Result = closure_1_17(UserProfileUpsellCardDefault, obj3);
    const tmp3Result2 = UserProfileUpsellCardDefault;
  }
  return tmp6Result;
}
let closure_3 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1390).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = [1];
let closure_20 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  const header = currentUser.header;
  guild = undefined;
  let isBadgeManagementEnabled;
  let analyticsLocations;
  const tmp3 = guild(isBadgeManagementEnabled[29])();
  const tmp4 = guild(isBadgeManagementEnabled[23])();
  const bioMaxLength = currentUser(isBadgeManagementEnabled[30]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(isBadgeManagementEnabled[30]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(isBadgeManagementEnabled[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(isBadgeManagementEnabled[27]).space.PX_16;
  const obj3 = { insets, inputs: null, scrollViewRef: null };
  items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj6 = { ref: ref3, offset: null };
  const obj7 = { type: "toValue", value: null };
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(isBadgeManagementEnabled[31])();
  obj7.value = guild(isBadgeManagementEnabled[27]).space.PX_64;
  obj6.offset = obj7;
  items[2] = obj6;
  obj3.inputs = items;
  obj3.scrollViewRef = ref;
  const onFocus = guild(isBadgeManagementEnabled[32])(obj3).onFocus;
  const tmp13 = guild(isBadgeManagementEnabled[33])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const tmp12 = guild(isBadgeManagementEnabled[32]);
  const items1 = [GuildMemberStore];
  const stateFromStores = currentUser(isBadgeManagementEnabled[34]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const obj8 = currentUser(isBadgeManagementEnabled[34]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = currentUser(isBadgeManagementEnabled[34]).useStateFromStores(items2, () => {
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
  const obj9 = currentUser(isBadgeManagementEnabled[34]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(isBadgeManagementEnabled[35])(currentUser.id, id);
  const tmp16 = guild(isBadgeManagementEnabled[35]);
  const customStatusActivity = currentUser(isBadgeManagementEnabled[36]).useCustomStatusActivity();
  const tmp5Result = currentUser(isBadgeManagementEnabled[36]);
  const tmp20 = guild(isBadgeManagementEnabled[37])(tmp16Result);
  isBadgeManagementEnabled = currentUser(isBadgeManagementEnabled[38]).useIsBadgeManagementEnabled({ location: "GuildProfileEditForm" });
  const items3 = [currentUser.id, isBadgeManagementEnabled];
  const effect = noop.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(currentUser.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
    }
  }, items3);
  const tmp5Result7 = currentUser(isBadgeManagementEnabled[38]);
  const pendingAvatarSrc = currentUser(isBadgeManagementEnabled[40]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj10 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result8 = currentUser(isBadgeManagementEnabled[40]);
  const canEditNickname = currentUser(isBadgeManagementEnabled[41]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result9 = currentUser(isBadgeManagementEnabled[41]);
  const result = guild(isBadgeManagementEnabled[9]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult = guild(isBadgeManagementEnabled[9]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp63Result8 = !result;
  const tmp5Result10 = currentUser(isBadgeManagementEnabled[42]);
  if (!result) {
    tmp63Result8 = !tmp7;
  }
  const canResetThemeColorsResult = currentUser(isBadgeManagementEnabled[42]).canResetThemeColors(pendingThemeColors, themeColors);
  const floatingUpsellHeight = currentUser(isBadgeManagementEnabled[25]).useFloatingUpsellHeight();
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
  const tmp5Result11 = currentUser(isBadgeManagementEnabled[25]);
  const items4 = [guild(isBadgeManagementEnabled[11]).USER_SETTINGS];
  analyticsLocations = guild(isBadgeManagementEnabled[10])(items4).analyticsLocations;
  const tmpResult9 = guild(isBadgeManagementEnabled[10]);
  ({ theme, primaryColor, secondaryColor } = guild(isBadgeManagementEnabled[43])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp30 = guild(isBadgeManagementEnabled[43])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(isBadgeManagementEnabled[44]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp63Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj11 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp5Result12 = currentUser(isBadgeManagementEnabled[44]);
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
    const obj12 = { theme, primaryColor, secondaryColor, children: null };
    const obj13 = { style: null, children: null };
    const items5 = [tmp4.container, ];
    const obj14 = { backgroundColor: gradientSecondaryBackground };
    items5[1] = obj14;
    obj13.style = items5;
    const obj15 = { ref, stickyHeaderIndices: null, stickyHeaderHiddenOnScroll: null, keyboardShouldPersistTaps: null, children: null };
    let tmp39;
    if (null != header) {
      tmp39 = closure_19;
    }
    obj15.stickyHeaderIndices = tmp39;
    obj15.stickyHeaderHiddenOnScroll = null != header;
    let str6;
    if (null != header) {
      str6 = "handled";
    }
    obj15.keyboardShouldPersistTaps = str6;
    const obj16 = { style: tmp4.bounceOffset };
    const items6 = [closure_17(closure_7, obj16), header, ];
    const obj17 = { style: null, children: null };
    const obj18 = { backgroundColor: gradientSecondaryBackground };
    obj17.style = obj18;
    const obj19 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items7 = [closure_17(EditGuildProfileBanner, obj19), ];
    let tmp63Result = null;
    if (null != guild) {
      const obj20 = { style: null, children: null };
      const items8 = [, , , ];
      ({ avatarBackground: arr8[0], avatarPosition: arr8[1] } = tmp3);
      items8[2] = tmp4.avatarContainer;
      items8[3] = obj11;
      obj20.style = items8;
      const obj21 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp43 = isDisabled;
      if (!isDisabled) {
        tmp43 = !result;
      }
      obj21.disabled = tmp43;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj21.guildId = id1;
      obj21.statusStyle = obj11;
      obj20.children = closure_17(tmp(tmp2[46]), obj21);
      tmp63Result = closure_17(closure_7, obj20);
      const tmpResult10 = tmp(tmp2[46]);
    }
    const items9 = [tmp63Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items10 = [, , ];
    ({ profileContentWrapper: arr10[0], profileContent: arr10[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items10[2] = obj23;
    obj22.containerStyle = items10;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj28.style, emojiOnlyCustomStatusBubble: obj28.emojiOnlyStyle } = tmp3);
    const items11 = [closure_17(tmp(tmp2[48]), obj24), , ];
    const obj25 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", showsBadgeUnreadDot: true, guildId: null, pendingDisplayNameStyles: null };
    let tmp47 = pendingNickname;
    const tmpResult11 = tmp(tmp2[47]);
    if (pendingNickname == null) {
      tmp47 = str;
    }
    obj25.displayName = tmp47;
    let tmp48 = str3;
    if ("" !== pendingPronouns) {
      tmp48 = pendingPronouns;
    }
    obj25.pronouns = tmp48;
    obj25.badges = tmp20;
    obj25.badgeContainerBackground = containerBackground;
    obj25.guildId = guild.id;
    obj25.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items11[1] = closure_17(tmp(tmp2[49]), obj25);
    let tmp64Result = null;
    if (null != guild) {
      const obj26 = { style: null, children: null };
      const items12 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items12[1] = obj27;
      obj26.style = items12;
      let tmp50 = null;
      if (null == first2) {
        tmp50 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp34).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp63Result5 = null;
          if (null != first3) {
            tmp63Result5 = null;
            if ("" !== first3) {
              const obj29 = { style: tmp4.errorContainer, children: null };
              const obj30 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: first3 };
              obj29.children = closure_17(tmp5(tmp2[28]).Text, obj30);
              tmp63Result5 = closure_17(closure_7, obj29);
            }
          }
          tmp50 = tmp63Result5;
        }
      }
      const items13 = [tmp50, , , , , , , , , ];
      const obj31 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
      const intl2 = tmp5(tmp2[17]).intl;
      obj31.label = intl2.string(tmp5(tmp2[17]).t.me1lRk);
      obj31.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj31.value = pendingNickname;
      obj31.onFocus = onFocus;
      obj31.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult13 = tmp(tmp2[50]);
      obj31.placeholder = tmp(tmp2[51]).getName(currentUser);
      obj31.maxLength = maxLength;
      let tmp56 = !canEditNickname;
      if (canEditNickname) {
        tmp56 = isDisabled;
      }
      obj31.disabled = tmp56;
      items13[1] = closure_17(tmpResult13, obj31);
      let tmp63Result6 = result;
      if (result) {
        const obj32 = { user: currentUser, guildId: guild.id };
        tmp63Result6 = closure_17(tmp(tmp2[52]), obj32);
      }
      items13[2] = tmp63Result6;
      const obj33 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult14 = tmp(tmp2[51]);
      const intl3 = tmp5(tmp2[17]).intl;
      obj33.label = intl3.string(tmp5(tmp2[17]).t["+T3RI/"]);
      obj33.errorMessage = first1;
      const intl4 = tmp5(tmp2[17]).intl;
      obj33.description = intl4.string(tmp5(tmp2[17]).t.NZqtIp);
      obj33.value = pendingPronouns;
      obj33.onFocus = onFocus;
      obj33.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj33.placeholder = str3;
      obj33.maxLength = maxLength2;
      obj33.disabled = isDisabled;
      items13[3] = closure_17(tmp(tmp2[50]), obj33);
      let tmp63Result7 = null;
      if (result) {
        const obj34 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
        const intl5 = tmp5(tmp2[17]).intl;
        obj34.label = intl5.string(tmp5(tmp2[17]).t.ZzAR2Y);
        obj34.errorMessage = first2;
        const intl6 = tmp5(tmp2[17]).intl;
        obj34.description = intl6.string(tmp5(tmp2[17]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj34.value = pendingBio;
        obj34.onFocus = onFocus;
        obj34.onChange = function onChange(bio) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
        };
        obj34.placeholder = str5;
        obj34.maxLength = bioMaxLength;
        obj34.disabled = isDisabled;
        tmp63Result7 = closure_17(tmp(tmp2[50]), obj34);
        const tmpResult16 = tmp(tmp2[50]);
      }
      items13[4] = tmp63Result7;
      const obj35 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(callback) {
              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors: callback });
            },
        showResetMenu: canResetThemeColorsResult
      };
      items13[5] = closure_17(tmp(tmp2[53]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items13[6] = closure_17(tmp(tmp2[54]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items13[7] = closure_17(tmp(tmp2[55]), obj37);
      const obj38 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items13[8] = closure_17(tmp(tmp2[56]), obj38);
      const obj39 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items13[9] = closure_17(tmp(tmp2[57]), obj39);
      obj26.children = items13;
      tmp64Result = closure_18(closure_7, obj26);
      const tmpResult15 = tmp(tmp2[50]);
    }
    const obj40 = { children: null };
    items11[2] = tmp64Result;
    obj22.children = items11;
    items9[1] = closure_18(tmpResult11, obj22);
    obj40.children = items9;
    items7[1] = closure_18(closure_7, obj40);
    obj17.children = items7;
    items6[2] = closure_18(closure_7, obj17);
    obj15.children = items6;
    const items14 = [closure_18(closure_6, obj15), ];
    if (tmp63Result8) {
      const obj41 = {
        onButtonPress: function handleUpsellPress() {
              const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
              const obj2 = {};
              const merged = Object.assign(closure_20);
              obj2.object = constants.BUTTON_CTA;
              obj.analyticsLocation = obj2;
              obj.analyticsLocations = analyticsLocations;
              obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
              openPremiumModalDefault(obj);
            },
        onLayout
      };
      tmp63Result8 = closure_17(GuildProfileTryItOutUpsellExperimentWrapper, obj41);
    }
    items14[1] = tmp63Result8;
    obj13.children = items14;
    obj12.children = closure_18(closure_7, obj13);
    return closure_17(tmp5(tmp2[45]).ThemeContextProvider, obj12);
  }
  tmp34 = _objectWithoutProperties(errors, analyticsLocations);
};