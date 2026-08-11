// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import useAvatarsWithGuilds from "useAvatarsWithGuilds";
import get_ActivityIndicator from "_saveProfileChanges";
import zustandStore from "zustandStore";
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { ProfileCustomizationScrollPositions as closure_10 } from "MAX_FAVORITES";
import { UserProfileEditAutoFocusElement as closure_11 } from "UserProfileEditAutoFocusElement";
import jsxProd from "useSharedStyles";
import { ManaContext } from "../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useFetchPurchases } from "../../collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx";
import { useCurrentUserHasAutomodQuarantinedProfile } from "../../guild_automod/AutomodQuarantineUtils.tsx";
import { useKeyboardIsOpen } from "../../keyboard/native/useKeyboardIsOpen.tsx";
import { getArchivedAvatarURL } from "../../recent_avatars/RecentAvatarUtils.tsx";
import { _calculateScrollOffset } from "../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import { useUserProfileEditForm } from "../../user_settings/profiles/native/useUserProfileEditForm.tsx";
import { useBioMaxLength } from "../experiments/BioMaxLengthExperiment.tsx";
import { useUserProfileColors } from "../hooks/native/useUserProfileColors.tsx";
import { useBadges } from "../hooks/useBadges.tsx";
import { useDisplayProfile } from "../hooks/useDisplayProfile.tsx";
import { EditUserProfileAvatar } from "EditUserProfileAvatar.tsx";
import { COLLECTIBLES_PREVIEW_SIZE } from "UserProfileAvatarDecorationEditButton.tsx";
import { EmojiImage } from "UserProfileCustomStatusBubble.tsx";
import { styles } from "UserProfileEditFormSharedStyles.tsx";
import { UserProfileEditFormTextField } from "UserProfileEditFormTextField.tsx";
import { ColorSwatch } from "UserProfileEditTheme.tsx";
import { UserProfileEffectEditButton } from "UserProfileEffectEditButton.tsx";
import { COLLECTIBLES_PREVIEW_SIZE } from "UserProfileFrameEditButton.tsx";
import { UserProfileGradientContainer } from "UserProfileGradientContainer.tsx";
import { UserProfileNameplateEditButton } from "UserProfileNameplateEditButton.tsx";
import { UserProfilePrimaryGuildEditButton } from "UserProfilePrimaryGuildEditButton.tsx";
import { DisplayName } from "UserProfilePrimaryInfo.tsx";
import { useSharedStyles } from "UserProfileSharedStyles.tsx";

let c4;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
const require = arg1;
function EditUserProfileBanner(user) {
  let disabled;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tryItOutBanner;
  user = user.user;
  const displayProfile = user.displayProfile;
  ({ pendingBanner, tryItOutBanner, isTryItOut } = user);
  pendingBanner = undefined;
  let analyticsLocations;
  ({ pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = user);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  obj = displayProfile(isTryItOut[10]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[11])(displayProfile(isTryItOut[12]).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner;
  let tmp4 = displayProfile(isTryItOut[11]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj[6] = 12;
  obj[7] = canUseCollectiblesResult;
  obj[8] = function onPressEdit() {
    let obj = displayProfile(isTryItOut[14]);
    obj = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    if (isTryItOut) {
      let fn = tmp2(tmp[17]).setTryItOutBanner;
    } else {
      fn = (banner) => {
        let obj = callback(table[18]);
        obj = { banner };
        return obj.setPendingChanges(obj);
      };
    }
    obj[2] = fn;
    const tmp3 = user(isTryItOut[16])(isTryItOut[15], isTryItOut.paths);
    const tmp4 = isTryItOut;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj[3] = user(isTryItOut[19]).showRemoveBanner(pendingBanner, banner);
    obj[4] = tmp4;
    obj.openLazy(tmp3, "Change Banner", obj);
  };
  const intl = tmp6(tmp2[20]).intl;
  obj[9] = intl.string(user(isTryItOut[20]).t.VqsHy0);
  obj[10] = disabled;
  obj[1] = closure_12(displayProfile(isTryItOut[13]), obj);
  return closure_12(user(isTryItOut[11]).AnalyticsLocationProvider, obj);
}
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ DISPLAY_NAME_MAX_LENGTH: metroImportAll, PRONOUNS_MAX_LENGTH: c9 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { assetOrigin: require("AssetOriginTypes").AssetOriginTypes.NEW_ASSET, imageUri: require("registerAsset"), staticImageUri: require("registerAsset"), description: "", originalAsset: "paddingHorizontal" };
let result = require("zustandStore").fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(arg0) {
  let autoFocusElement;
  let containerBackground;
  let currentUser;
  let errors;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let isSubmitting;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingNameplate;
  let pendingPrimaryGuildId;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  ({ currentUser, autoFocusElement, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let _require;
  const tmp3 = useSharedStyles();
  const tmp4 = styles();
  let obj = _useBioMaxLength;
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = useKeyboardIsOpen();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets;
  const PX_16 = Themes.space.PX_16;
  obj = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3, offset: null };
  const obj1 = { type: "toValue", value: null };
  obj1[1] = Themes.space.PX_64;
  obj[1] = obj1;
  items[2] = obj;
  obj[1] = items;
  obj[2] = ref;
  const onFocus = _calculateScrollOffset(obj).onFocus;
  const tmp12 = _calculateScrollOffset;
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = useUserProfileEditForm());
  useFetchPurchases();
  let obj4 = _useCurrentUserHasAutomodQuarantinedProfile;
  const guildAutomodProfileQuarantineErrors = obj4.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp13 = useUserProfileEditForm();
  if (str == null) {
    str = "";
  }
  const tmp16Result = useDisplayProfile(str);
  let tmp5Result = tmp5(9454);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  tmp5Result = tmp5(13924);
  const tmp16 = useDisplayProfile;
  const pendingAvatarSrc = _getArchivedAvatarURL.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const tmp19 = useBadges(tmp16Result, pendingLegacyUsernameDisabled);
  let tmpResult = tmp(3966);
  const result = tmpResult.canUsePremiumProfileCustomization(currentUser);
  let legacyUsername;
  if (tmp16Result != null) {
    legacyUsername = tmp16Result.getLegacyUsername();
  }
  let str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp16Result != null) {
    str3 = tmp16Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp16Result != null) {
    str4 = tmp16Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  const obj3 = { user: currentUser, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp23 = pendingThemeColors;
  tmpResult = tmp(8829);
  if (isTryItOut) {
    tmp23 = tryItOutThemeColors;
  }
  obj3[2] = tmp23;
  obj3[3] = isTryItOut;
  const obj2 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result1 = _getArchivedAvatarURL;
  ({ theme, primaryColor, secondaryColor } = tmpResult(obj3));
  const tmpResult1Result = tmpResult(obj3);
  const userProfileColors = _useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp7) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  obj4 = { backgroundColor: userProfileColors.avatarBackground };
  let first;
  const sum1 = sum + tmp(712).space.PX_16;
  if (errors != null) {
    const username = errors.username;
    if (username != null) {
      first = username[0];
    }
  }
  if (first == null) {
    const global_name = errors.global_name;
    let first1;
    if (global_name != null) {
      first1 = global_name[0];
    }
    first = first1;
  }
  if (first == null) {
    let first2;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first2 = nick[0];
      }
    }
    first = first2;
  }
  const pronouns = errors.pronouns;
  let first3;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  let first4;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = tmp5(1236).intl;
      stringResult = intl.string(tmp5(1236).t["84MExs"]);
    }
  }
  const field = zustandStore.useField("scrollPosition");
  _require = tmp(13925)(ref, field);
  const obj5 = { theme, primaryColor, secondaryColor, children: null };
  const obj6 = { style: items1, children: null };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj7 = { ref, children: null };
  const items2 = [callback(closure_5, { style: tmp4.bounceOffset }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp38 = closure_4;
  const tmp5Result2 = _useUserProfileColors;
  const items3 = [callback(EditUserProfileBanner, { user: currentUser, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const tmpResult1 = UserProfileGradientContainer;
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj4;
  const items5 = [callback(closure_5, { style: items4, children: callback(EditUserProfileAvatar, obj11) }), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: null };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  const obj10 = { style: items4, children: callback(EditUserProfileAvatar, obj11) };
  const tmp40 = constants;
  const items7 = [callback(EmojiImage, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj14 = { user: currentUser, displayName: pendingGlobalName, badges: tmp19, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp43 = pendingPronouns;
  const obj13 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = UserProfileGradientContainer;
  if (pendingPronouns == null) {
    tmp43 = str3;
  }
  obj14[3] = tmp43;
  obj14[4] = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj14[6] = pendingDisplayNameStyles;
  items7[1] = callback(DisplayName, obj14);
  const obj15 = { style: items8, children: null };
  items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp35Result = null;
  if (null != stringResult) {
    tmp35Result = null;
    if ("" !== stringResult) {
      const obj16 = { style: null, children: null };
      obj16[0] = tmp4.errorContainer;
      const obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
      obj17[2] = stringResult;
      obj16[1] = tmp35(tmp5(4299).Text, obj17);
      tmp35Result = tmp35(tmp37, obj16);
    }
  }
  const items9 = [tmp35Result, , , , , , , , , , , , , ];
  const obj18 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
  const tmpResult3 = DisplayName;
  const intl2 = tmp5(1236).intl;
  obj18[1] = intl2.string(_getSystemLocale.t["9AjdkD"]);
  obj18[2] = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str2;
  }
  obj18[3] = pendingGlobalName;
  obj18[4] = onFocus;
  obj18[5] = function onChange(globalName) {
    let obj = ref(8270);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj18[6] = currentUser.toString();
  obj18[7] = closure_8;
  obj18[8] = isSubmitting;
  items9[1] = callback(UserProfileEditFormTextField, obj18);
  tmp35Result = result;
  if (!result) {
    tmp35Result = isTryItOut;
  }
  if (tmp35Result) {
    const obj19 = { user: null, isTryItOut: null };
    obj19[0] = currentUser;
    obj19[1] = isTryItOut;
    tmp35Result = tmp35(tmp(13932), obj19);
  }
  items9[2] = tmp35Result;
  const obj20 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, isDisabled: null };
  const tmpResult4 = UserProfileEditFormTextField;
  const intl3 = tmp5(1236).intl;
  obj20[1] = intl3.string(_getSystemLocale.t["+T3RI/"]);
  obj20[2] = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str3;
  }
  obj20[3] = pendingPronouns;
  obj20[4] = onFocus;
  obj20[5] = function onChange(pronouns) {
    let obj = ref(8270);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj20[6] = closure_9;
  obj20[7] = isSubmitting;
  items9[3] = callback(UserProfileEditFormTextField, obj20);
  const obj21 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, isDisabled: null };
  const tmpResult5 = UserProfileEditFormTextField;
  const intl4 = tmp5(1236).intl;
  obj21[1] = intl4.string(_getSystemLocale.t.ZzAR2Y);
  obj21[2] = first4;
  if (pendingBio == null) {
    pendingBio = str4;
  }
  obj21[3] = pendingBio;
  obj21[4] = onFocus;
  obj21[5] = function onChange(bio) {
    let obj = ref(8270);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj21[6] = autoFocusElement === tmp40.BIO;
  obj21[7] = bioMaxLength;
  obj21[9] = isSubmitting;
  items9[4] = callback(UserProfileEditFormTextField, obj21);
  const obj22 = { user: currentUser, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult6 = UserProfileEditFormTextField;
  if (isTryItOut) {
    let fn = tmp5(8273).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      let obj = ref(8270);
      obj = { themeColors };
      return obj.setPendingChanges(obj);
    };
  }
  obj22[1] = fn;
  obj22[2] = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj22[3] = pendingThemeColors;
  obj22[4] = isTryItOut;
  items9[5] = callback(ColorSwatch, obj22);
  let tmp35Result1 = !isTryItOut;
  if (!isTryItOut) {
    const obj23 = { badges: null };
    obj23[0] = tmp19;
    tmp35Result1 = tmp35(tmp(13939), obj23);
  }
  items9[6] = tmp35Result1;
  const obj24 = { user: currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult7 = ColorSwatch;
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj24[1] = pendingAvatarDecoration;
  obj24[2] = isTryItOut;
  items9[7] = callback(COLLECTIBLES_PREVIEW_SIZE, obj24);
  const obj25 = { user: currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult8 = COLLECTIBLES_PREVIEW_SIZE;
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp35Result2 = "profile" === tmp5Result.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj25[1] = pendingProfileEffect;
  obj25[2] = tmp16Result;
  obj25[3] = isTryItOut;
  items9[8] = callback(UserProfileEffectEditButton, obj25);
  items9[9] = callback(COLLECTIBLES_PREVIEW_SIZE, { user: currentUser, pendingProfileFrame, displayProfile: tmp16Result });
  items9[10] = callback(UserProfileNameplateEditButton, { user: currentUser, pendingNameplate });
  if (tmp35Result2) {
    let tmp54 = result;
    if (!result) {
      tmp54 = isTryItOut;
    }
    tmp35Result2 = tmp54;
  }
  if (tmp35Result2) {
    tmp35Result2 = tmp35(tmp(13957), {});
  }
  items9[11] = tmp35Result2;
  const tmpResult9 = UserProfileEffectEditButton;
  items9[12] = callback(closure_5, {
    ref(arg0) {
      if (null != arg0) {
        ref.current[outer1_10.GUILD_TAG] = arg0;
      }
    },
    children: callback(UserProfilePrimaryGuildEditButton, { user: currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  });
  let tmp35Result3 = null != legacyUsername;
  if (tmp35Result3) {
    const obj27 = { legacyUsername: null, pendingLegacyUsernameDisabled: null };
    obj27[0] = legacyUsername;
    obj27[1] = pendingLegacyUsernameDisabled;
    tmp35Result3 = tmp35(tmp(13961), obj27);
  }
  const obj28 = { children: null };
  items9[13] = tmp35Result3;
  obj15[1] = items9;
  items7[2] = closure_13(closure_5, obj15);
  obj12[4] = items7;
  items5[1] = closure_13(tmpResult2, obj12);
  obj28[0] = items5;
  items3[1] = closure_13(closure_5, obj28);
  obj9[4] = items3;
  items2[1] = closure_13(tmpResult1, obj9);
  obj7[1] = items2;
  const items10 = [closure_13(tmp38, obj7), ];
  let tmp35Result4 = !result;
  if (!result) {
    tmp35Result4 = !tmp7;
  }
  if (tmp35Result4) {
    const obj29 = { isTryItOut: null };
    obj29[0] = isTryItOut;
    tmp35Result4 = tmp35(tmp5(13962).UserProfilePremiumUpsellCard, obj29);
  }
  items10[1] = tmp35Result4;
  obj6[1] = items10;
  obj5[3] = closure_13(closure_5, obj6);
  return callback(_ManaContext.ThemeContextProvider, obj5);
};