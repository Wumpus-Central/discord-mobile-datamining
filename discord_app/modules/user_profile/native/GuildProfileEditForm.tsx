// discord_app/modules/user_profile/native/GuildProfileEditForm.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01995_asyncRequireImpl.js";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton.tsx";
import UserProfilePremiumTryItOutMobileRefreshExperiment from "../experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx";
import UserProfileUpsellCardDefault from "UserProfileUpsellCard.tsx";
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let result = PremiumUtilsDefault.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  let obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    showProfilePreviewButton: false,
    showEditButton: null,
    onPressEdit: null,
    editButtonAccessibilityLabel: null,
    editDisabled: null,
  };
  if (result) {
    result = null != guildMember;
  }
  obj3.showEditButton = result;
  obj3.onPressEdit = function handleEditBanner() {
    if (c4) {
      let obj = {
        user,
        analyticsLocations,
        showRemoveBanner: null,
        removeText: null,
        onBannerChange: null,
        onGifBannerSelect: null,
      };
      const tmpResult = ActionSheetActionCreatorsDefault;
      const tmp13 = asyncRequireImpl(16392, dependencyMap.paths);
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
      let obj2 = {
        initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE,
        analyticsLocation: null,
        analyticsLocations: null,
        analyticsProperties: null,
      };
      let obj3 = {
        section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE,
        object: constants.EDIT_GUILD_PROFILE_BANNER,
      };
      obj2.analyticsLocation = obj3;
      obj2.analyticsLocations = analyticsLocations;
      const obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
      obj2.analyticsProperties = obj4;
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
      const tmpResult2 = PremiumUpsellUtilsDefault;
    }
  };
  let intl = tmp5(1114).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1114).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_16(UserProfileEditBannerButtonDefault, obj3);
  return closure_16(user(7320).AnalyticsLocationProvider, obj2);
}
function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
  onButtonPress = onButtonPress.onButtonPress;
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  if (obj.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled) {
    const obj2 = {
      text: null,
      buttonText: null,
      buttonVariant: "experimental_premium-primary",
      onButtonPress: null,
      onLayout: null,
    };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.YIZS5B);
    const intl4 = util.intl;
    obj2.buttonText = intl4.string(util.t.pj0XBN);
    obj2.onButtonPress = onButtonPress;
    obj2.onLayout = onButtonPress.onLayout;
    let tmp6Result = __initData2(UserProfileFloatingUpsellDefault, obj2);
    const tmp3Result = UserProfileFloatingUpsellDefault;
  } else {
    const obj3 = { style: null, ctaText: null, onPress: null, children: null };
    const items = [tmp4.floatingUpsell];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    obj3.style = items;
    const intl = util.intl;
    obj3.ctaText = intl.string(util.t.pj0XBN);
    obj3.onPress = onButtonPress;
    const obj5 = { variant: "text-sm/normal", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.YIZS5B);
    obj3.children = __initData2(Text_Text.Text, obj5);
    tmp6Result = __initData2(UserProfileUpsellCardDefault, obj3);
    const tmp3Result2 = UserProfileUpsellCardDefault;
  }
  return tmp6Result;
}
let closure_3 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticsObjects: c10, AnalyticsSections } = Constants);
({
  DISPLAY_NAME_MAX_LENGTH: closure_12,
  PRONOUNS_MAX_LENGTH: map1,
  UpsellTypes: closure_14,
  AnalyticsPages,
} = Constants);
const PremiumUpsellTypes = fn(1386).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  const stickyHeader = currentUser.stickyHeader;
  let guildScrollY;
  let guild;
  let analyticsLocations;
  const tmp2 = guild;
  const tmp3 = guildScrollY(guild[28])();
  const tmp4 = guildScrollY(guild[22])();
  const bioMaxLength = currentUser(guild[29]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(guild[29]);
  const ref = noop.useRef(null);
  const context = noop.useContext(guildScrollY(guild[31]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  const items = [guildScrollY];
  const items1 = [guildScrollY];
  const callback = noop.useCallback((nativeEvent) => {
    if (guildScrollY != null) {
      const result = guildScrollY.set(nativeEvent.nativeEvent.contentOffset.y);
    }
  }, items);
  const effect = noop.useEffect(() => {
    if (guildScrollY != null) {
      let result = guildScrollY.set(0);
    }
    return () => {
      let result;
      if (guildScrollY != null) {
        result = guildScrollY.set(0);
      }
      return result;
    };
  }, items1);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = tmp(tmp2[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = tmp(tmp2[26]).space.PX_16;
  const obj3 = { insets, inputs: null, scrollViewRef: null };
  const items2 = [
    { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } },
    { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } },
  ];
  const obj6 = { ref: ref3, offset: null };
  const obj7 = { type: "toValue", value: null };
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guildScrollY(guild[30])();
  obj7.value = guildScrollY(tmp2[26]).space.PX_64;
  obj6.offset = obj7;
  items2[2] = obj6;
  obj3.inputs = items2;
  obj3.scrollViewRef = ref;
  const onFocus = guildScrollY(tmp2[32])(obj3).onFocus;
  const tmp17 = guildScrollY(tmp2[33])();
  guild = tmp17.guild;
  ({
    errors,
    isDisabled,
    pendingNickname,
    pendingThemeColors,
    pendingPronouns,
    pendingBio,
    pendingAvatar,
    pendingBanner,
    pendingAvatarDecoration,
    pendingProfileEffect,
    pendingProfileFrame,
    pendingNameplate,
    pendingDisplayNameStyles,
  } = tmp17);
  const tmpResult = guildScrollY(tmp2[32]);
  const items3 = [GuildMemberStore];
  const stateFromStores = currentUser(tmp2[34]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const tmp5Result = currentUser(tmp2[34]);
  const items4 = [UserProfileStore];
  const stateFromStores1 = currentUser(tmp2[34]).useStateFromStores(items4, () => {
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
  const tmp5Result8 = currentUser(tmp2[34]);
  if (guild != null) {
    id = guild.id;
  }
  const tmpResult1Result = guildScrollY(tmp2[35])(currentUser.id, id);
  const tmpResult11 = guildScrollY(tmp2[35]);
  const customStatusActivity = currentUser(tmp2[36]).useCustomStatusActivity();
  const tmp5Result9 = currentUser(tmp2[36]);
  const tmp24 = guildScrollY(tmp2[37])(tmpResult1Result);
  const pendingAvatarSrc = currentUser(tmp2[38]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj8 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result10 = currentUser(tmp2[38]);
  const canEditNickname = currentUser(tmp2[39]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result11 = currentUser(tmp2[39]);
  let result = guildScrollY(tmp2[8]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult12 = guildScrollY(tmp2[8]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp65Result8 = !result;
  const tmp5Result12 = currentUser(tmp2[40]);
  if (!result) {
    tmp65Result8 = !tmp7;
  }
  const canResetThemeColorsResult = currentUser(tmp2[40]).canResetThemeColors(pendingThemeColors, themeColors);
  const floatingUpsellHeight = currentUser(tmp2[24]).useFloatingUpsellHeight();
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
  if (tmpResult1Result != null) {
    str3 = tmpResult1Result._userProfile.pronouns;
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
  if (tmpResult1Result != null) {
    str5 = tmpResult1Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const tmp5Result13 = currentUser(tmp2[24]);
  const items5 = [guildScrollY(tmp2[10]).USER_SETTINGS];
  analyticsLocations = guildScrollY(tmp2[9])(items5).analyticsLocations;
  const tmpResult13 = guildScrollY(tmp2[9]);
  ({ theme, primaryColor, secondaryColor } = guildScrollY(tmp2[41])({
    user: currentUser,
    displayProfile: tmpResult1Result,
    pendingThemeColors,
  }));
  const tmp32 = guildScrollY(tmp2[41])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors });
  const userProfileColors = currentUser(tmp2[42]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp65Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj9 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[26]).space.PX_16;
  const tmp5Result14 = currentUser(tmp2[42]);
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
    const obj10 = { theme, primaryColor, secondaryColor, children: null };
    const obj11 = { style: null, children: null };
    const items6 = [tmp4.container];
    const obj12 = { backgroundColor: gradientSecondaryBackground };
    items6[1] = obj12;
    obj11.style = items6;
    const obj13 = {
      ref,
      bounces: null == context,
      keyboardShouldPersistTaps: null,
      onScroll: null,
      scrollEventThrottle: null,
      stickyHeaderIndices: null,
      children: null,
    };
    let str6;
    if (null != stickyHeader) {
      str6 = "handled";
    }
    obj13.keyboardShouldPersistTaps = str6;
    let tmp41;
    if (null != context) {
      tmp41 = callback;
    }
    obj13.onScroll = tmp41;
    let num2;
    if (null != context) {
      num2 = 16;
    }
    obj13.scrollEventThrottle = num2;
    let items7;
    if (null != stickyHeader) {
      items7 = [2];
    }
    obj13.stickyHeaderIndices = items7;
    const obj14 = { style: tmp4.bounceOffset };
    const items8 = [
      closure_16(closure_7, obj14),
      closure_16(tmp5(tmp2[31]).ProfileCustomizationHeaderSpacer, {}),
      stickyHeader,
    ];
    const obj15 = { style: null, children: null };
    const obj16 = { backgroundColor: gradientSecondaryBackground };
    obj15.style = obj16;
    const obj17 = {
      user: currentUser,
      displayProfile: tmpResult1Result,
      guildId: guild.id,
      guildMember: stateFromStores,
      guildMemberProfile: stateFromStores1,
      pendingAvatarSrc,
      pendingBanner,
      pendingThemeColors,
      disabled: isDisabled,
    };
    const items9 = [closure_16(EditGuildProfileBanner, obj17)];
    let tmp65Result = null;
    if (null != guild) {
      const obj18 = { style: null, children: null };
      const items10 = [, , ,];
      ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
      items10[2] = tmp4.avatarContainer;
      items10[3] = obj9;
      obj18.style = items10;
      const obj19 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp45 = isDisabled;
      if (!isDisabled) {
        tmp45 = !result;
      }
      obj19.disabled = tmp45;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj19.guildId = id1;
      obj19.statusStyle = obj9;
      obj18.children = closure_16(tmp(tmp2[44]), obj19);
      tmp65Result = closure_16(closure_7, obj18);
      const tmpResult14 = tmp(tmp2[44]);
    }
    const items11 = [tmp65Result];
    const obj20 = {
      fallbackBackground: gradientFallbackBackground,
      primaryColor,
      secondaryColor,
      containerStyle: null,
      children: null,
    };
    const items12 = [, ,];
    ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
    const obj21 = { paddingTop: 0, paddingBottom: sum1 };
    items12[2] = obj21;
    obj20.containerStyle = items12;
    const obj22 = {
      customStatusActivity,
      hasCustomProfileTheme: null != primaryColor,
      style: null,
      emojiOnlyStyle: null,
      editEnabled: true,
    };
    ({ customStatusBubble: obj27.style, emojiOnlyCustomStatusBubble: obj27.emojiOnlyStyle } = tmp3);
    const items13 = [closure_16(tmp(tmp2[46]), obj22), ,];
    const obj23 = {
      user: currentUser,
      displayName: null,
      pronouns: null,
      badges: null,
      badgeContainerBackground: null,
      displayNameAccessibilityRole: "header",
      guildId: null,
      pendingDisplayNameStyles: null,
    };
    let tmp49 = pendingNickname;
    const tmpResult15 = tmp(tmp2[45]);
    if (pendingNickname == null) {
      tmp49 = str;
    }
    obj23.displayName = tmp49;
    let tmp50 = str3;
    if ("" !== pendingPronouns) {
      tmp50 = pendingPronouns;
    }
    obj23.pronouns = tmp50;
    obj23.badges = tmp24;
    obj23.badgeContainerBackground = containerBackground;
    obj23.guildId = guild.id;
    obj23.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items13[1] = closure_16(tmp(tmp2[47]), obj23);
    let tmp66Result = null;
    if (null != guild) {
      const obj24 = { style: null, children: null };
      const items14 = [tmp4.formContainer];
      const obj25 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items14[1] = obj25;
      obj24.style = items14;
      let tmp52 = null;
      if (null == first2) {
        tmp52 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp36).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp65Result5 = null;
          if (null != first3) {
            tmp65Result5 = null;
            if ("" !== first3) {
              const obj26 = { style: tmp4.errorContainer, children: null };
              const obj28 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj26.children = closure_16(tmp5(tmp2[27]).Text, obj28);
              tmp65Result5 = closure_16(closure_7, obj26);
            }
          }
          tmp52 = tmp65Result5;
        }
      }
      const items15 = [tmp52, , , , , , , , ,];
      const obj29 = {
        inputRef: ref1,
        label: null,
        errorMessage: null,
        value: null,
        onFocus: null,
        onChange: null,
        placeholder: null,
        maxLength: null,
        disabled: null,
      };
      const intl2 = tmp5(tmp2[16]).intl;
      obj29.label = intl2.string(tmp5(tmp2[16]).t.me1lRk);
      obj29.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj29.value = pendingNickname;
      obj29.onFocus = onFocus;
      obj29.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult17 = tmp(tmp2[48]);
      obj29.placeholder = tmp(tmp2[49]).getName(currentUser);
      obj29.maxLength = maxLength;
      let tmp58 = !canEditNickname;
      if (canEditNickname) {
        tmp58 = isDisabled;
      }
      obj29.disabled = tmp58;
      items15[1] = closure_16(tmpResult17, obj29);
      let tmp65Result6 = result;
      if (result) {
        const obj30 = { user: currentUser, guildId: guild.id };
        tmp65Result6 = closure_16(tmp(tmp2[50]), obj30);
      }
      items15[2] = tmp65Result6;
      const obj31 = {
        inputRef: ref2,
        label: null,
        errorMessage: null,
        description: null,
        value: null,
        onFocus: null,
        onChange: null,
        placeholder: null,
        maxLength: null,
        spellCheck: false,
        autoCorrect: false,
        disabled: null,
      };
      const tmpResult18 = tmp(tmp2[49]);
      const intl3 = tmp5(tmp2[16]).intl;
      obj31.label = intl3.string(tmp5(tmp2[16]).t["+T3RI/"]);
      obj31.errorMessage = first1;
      const intl4 = tmp5(tmp2[16]).intl;
      obj31.description = intl4.string(tmp5(tmp2[16]).t.NZqtIp);
      obj31.value = pendingPronouns;
      obj31.onFocus = onFocus;
      obj31.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj31.placeholder = str3;
      obj31.maxLength = maxLength2;
      obj31.disabled = isDisabled;
      items15[3] = closure_16(tmp(tmp2[48]), obj31);
      let tmp65Result7 = null;
      if (result) {
        const obj32 = {
          inputRef: ref3,
          label: null,
          errorMessage: null,
          description: null,
          value: null,
          onFocus: null,
          onChange: null,
          placeholder: null,
          maxLength: null,
          numberOfLines: 5,
          disabled: null,
        };
        const intl5 = tmp5(tmp2[16]).intl;
        obj32.label = intl5.string(tmp5(tmp2[16]).t.ZzAR2Y);
        obj32.errorMessage = first2;
        const intl6 = tmp5(tmp2[16]).intl;
        obj32.description = intl6.string(tmp5(tmp2[16]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj32.value = pendingBio;
        obj32.onFocus = onFocus;
        obj32.onChange = function onChange(bio) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
        };
        obj32.placeholder = str5;
        obj32.maxLength = bioMaxLength;
        obj32.disabled = isDisabled;
        tmp65Result7 = closure_16(tmp(tmp2[48]), obj32);
        const tmpResult20 = tmp(tmp2[48]);
      }
      items15[4] = tmp65Result7;
      const obj33 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(callback) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors: callback });
        },
        showResetMenu: canResetThemeColorsResult,
      };
      items15[5] = closure_16(tmp(tmp2[51]), obj33);
      const obj34 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items15[6] = closure_16(tmp(tmp2[52]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmpResult1Result };
      items15[7] = closure_16(tmp(tmp2[53]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmpResult1Result };
      items15[8] = closure_16(tmp(tmp2[54]), obj36);
      const obj37 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items15[9] = closure_16(tmp(tmp2[55]), obj37);
      obj24.children = items15;
      tmp66Result = closure_17(closure_7, obj24);
      const tmpResult19 = tmp(tmp2[48]);
    }
    const obj38 = { children: null };
    items13[2] = tmp66Result;
    obj20.children = items13;
    items11[1] = closure_17(tmpResult15, obj20);
    obj38.children = items11;
    items9[1] = closure_17(closure_7, obj38);
    obj15.children = items9;
    items8[3] = closure_17(closure_7, obj15);
    obj13.children = items8;
    const items16 = [closure_17(closure_6, obj13)];
    if (tmp65Result8) {
      const obj39 = {
        onButtonPress: function handleUpsellPress() {
          const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
          const obj2 = {};
          const merged = Object.assign(closure_18);
          obj2.object = constants.BUTTON_CTA;
          obj.analyticsLocation = obj2;
          obj.analyticsLocations = analyticsLocations;
          obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
          openPremiumModalDefault(obj);
        },
        onLayout,
      };
      tmp65Result8 = closure_16(GuildProfileTryItOutUpsellExperimentWrapper, obj39);
    }
    items16[1] = tmp65Result8;
    obj11.children = items16;
    obj10.children = closure_17(closure_7, obj11);
    return closure_16(tmp5(tmp2[43]).ThemeContextProvider, obj10);
  }
  tmp36 = _objectWithoutProperties(errors, analyticsLocations);
}
