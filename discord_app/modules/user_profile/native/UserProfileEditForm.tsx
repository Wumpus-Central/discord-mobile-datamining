// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "setPendingChanges";
import zustandStore from "zustandStore";
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { ProfileCustomizationScrollPositions as closure_11 } from "MAX_FAVORITES";
import { UserProfileEditAutoFocusElement as closure_12 } from "UserProfileEditAutoFocusElement";
import jsxProd from "styles";
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

let c10;
let c4;
let c5;
let c9;
let closure_14;
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
      tryItOutBanner = displayProfile(isTryItOut[8]);
    }
    pendingBanner = tryItOutBanner;
  }
  let obj = displayProfile(isTryItOut[9]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[10])(displayProfile(isTryItOut[11]).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner;
  const tmp6 = displayProfile(isTryItOut[10]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj[6] = 12;
  obj[7] = canUseCollectiblesResult;
  obj[8] = function onPressEdit() {
    let obj = displayProfile(isTryItOut[13]);
    obj = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    if (isTryItOut) {
      let fn = tmp2(tmp[16]).setTryItOutBanner;
    } else {
      fn = (banner, bannerOriginalMd5) => {
        let obj = callback(table[17]);
        obj = { banner, bannerOriginalMd5 };
        return obj.setPendingChanges(obj);
      };
    }
    obj[2] = fn;
    const tmp3 = user(isTryItOut[15])(isTryItOut[14], isTryItOut.paths);
    const tmp4 = isTryItOut;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj[3] = user(isTryItOut[18]).showRemoveBanner(pendingBanner, banner);
    obj[4] = tmp4;
    obj.openLazy(tmp3, "Change Banner", obj);
  };
  const intl = tmp8(tmp4[19]).intl;
  obj[9] = intl.string(user(isTryItOut[19]).t.VqsHy0);
  obj[10] = disabled;
  obj[1] = closure_13(displayProfile(isTryItOut[12]), obj);
  return closure_13(user(isTryItOut[10]).AnalyticsLocationProvider, obj);
}
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ BIO_MAX_LENGTH: metroImportAll, DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
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
  const tmp5 = useKeyboardIsOpen();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets;
  const PX_16 = Themes.space.PX_16;
  let obj = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3, offset: null };
  obj = { type: "toValue", value: null };
  obj[1] = Themes.space.PX_64;
  obj[1] = obj;
  items[2] = obj;
  obj[1] = items;
  obj[2] = ref;
  const onFocus = _calculateScrollOffset(obj).onFocus;
  const tmp10 = _calculateScrollOffset;
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = useUserProfileEditForm());
  useFetchPurchases();
  let obj3 = _useCurrentUserHasAutomodQuarantinedProfile;
  const guildAutomodProfileQuarantineErrors = obj3.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp11 = useUserProfileEditForm();
  if (str == null) {
    str = "";
  }
  const tmp15Result = useDisplayProfile(str);
  let tmp13Result = tmp13(9366);
  const customStatusActivity = tmp13Result.useCustomStatusActivity();
  tmp13Result = tmp13(13830);
  const tmp15 = useDisplayProfile;
  const pendingAvatarSrc = _getArchivedAvatarURL.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const tmp18 = useBadges(tmp15Result, pendingLegacyUsernameDisabled);
  let tmpResult = tmp(3930);
  const result = tmpResult.canUsePremiumProfileCustomization(currentUser);
  let legacyUsername;
  if (tmp15Result != null) {
    legacyUsername = tmp15Result.getLegacyUsername();
  }
  let str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp15Result != null) {
    str3 = tmp15Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp15Result != null) {
    str4 = tmp15Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  const obj2 = { user: currentUser, displayProfile: tmp15Result, pendingThemeColors: null, isPreview: null };
  let tmp22 = pendingThemeColors;
  tmpResult = tmp(8746);
  if (isTryItOut) {
    tmp22 = tryItOutThemeColors;
  }
  obj2[2] = tmp22;
  obj2[3] = isTryItOut;
  const obj1 = { userId: currentUser.id, image: pendingAvatar };
  const tmp13Result1 = _getArchivedAvatarURL;
  ({ theme, primaryColor, secondaryColor } = tmpResult(obj2));
  const tmpResult1Result = tmpResult(obj2);
  const userProfileColors = _useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp5) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  obj3 = { backgroundColor: userProfileColors.avatarBackground };
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
      const intl = tmp13(1236).intl;
      stringResult = intl.string(tmp13(1236).t["84MExs"]);
    }
  }
  const field = zustandStore.useField("scrollPosition");
  _require = tmp(13831)(ref, field);
  const obj4 = { theme, primaryColor, secondaryColor, children: null };
  const obj5 = { style: items1, children: null };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj6 = { ref, children: null };
  const items2 = [callback(closure_5, { style: tmp4.bounceOffset }), ];
  const obj8 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj7 = { style: tmp4.bounceOffset };
  const tmp13Result2 = _useUserProfileColors;
  const tmp37 = closure_4;
  const items3 = [callback(EditUserProfileBanner, { user: currentUser, displayProfile: tmp15Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const tmpResult1 = UserProfileGradientContainer;
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj3;
  const items5 = [callback(closure_5, { style: items4, children: callback(EditUserProfileAvatar, obj10) }), ];
  const obj11 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: null };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  const obj9 = { style: items4, children: callback(EditUserProfileAvatar, obj10) };
  const tmp39 = constants;
  const items7 = [callback(EmojiImage, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj13 = { user: currentUser, displayName: pendingGlobalName, badges: tmp18, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp42 = pendingPronouns;
  const obj12 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = UserProfileGradientContainer;
  if (pendingPronouns == null) {
    tmp42 = str3;
  }
  obj13[3] = tmp42;
  obj13[4] = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj13[6] = pendingDisplayNameStyles;
  items7[1] = callback(DisplayName, obj13);
  const obj14 = { style: items8, children: null };
  items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp34Result = null;
  if (null != stringResult) {
    tmp34Result = null;
    if ("" !== stringResult) {
      const obj15 = { style: null, children: null };
      obj15[0] = tmp4.errorContainer;
      const obj16 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
      obj16[2] = stringResult;
      obj15[1] = tmp34(tmp13(4281).Text, obj16);
      tmp34Result = tmp34(tmp36, obj15);
    }
  }
  const items9 = [tmp34Result, , , , , , , , , , , , , ];
  const obj17 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
  const tmpResult3 = DisplayName;
  const intl2 = tmp13(1236).intl;
  obj17[1] = intl2.string(_getSystemLocale.t["9AjdkD"]);
  obj17[2] = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str2;
  }
  obj17[3] = pendingGlobalName;
  obj17[4] = onFocus;
  obj17[5] = function onChange(globalName) {
    let obj = ref(8188);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj17[6] = currentUser.toString();
  obj17[7] = closure_9;
  obj17[8] = isSubmitting;
  items9[1] = callback(UserProfileEditFormTextField, obj17);
  tmp34Result = result;
  if (!result) {
    tmp34Result = isTryItOut;
  }
  if (tmp34Result) {
    const obj18 = { user: null, isTryItOut: null };
    obj18[0] = currentUser;
    obj18[1] = isTryItOut;
    tmp34Result = tmp34(tmp(13838), obj18);
  }
  items9[2] = tmp34Result;
  const obj19 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, isDisabled: null };
  const tmpResult4 = UserProfileEditFormTextField;
  const intl3 = tmp13(1236).intl;
  obj19[1] = intl3.string(_getSystemLocale.t["+T3RI/"]);
  obj19[2] = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str3;
  }
  obj19[3] = pendingPronouns;
  obj19[4] = onFocus;
  obj19[5] = function onChange(pronouns) {
    let obj = ref(8188);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj19[6] = closure_10;
  obj19[7] = isSubmitting;
  items9[3] = callback(UserProfileEditFormTextField, obj19);
  const obj20 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, isDisabled: null };
  const tmpResult5 = UserProfileEditFormTextField;
  const intl4 = tmp13(1236).intl;
  obj20[1] = intl4.string(_getSystemLocale.t.ZzAR2Y);
  obj20[2] = first4;
  if (pendingBio == null) {
    pendingBio = str4;
  }
  obj20[3] = pendingBio;
  obj20[4] = onFocus;
  obj20[5] = function onChange(bio) {
    let obj = ref(8188);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj20[6] = autoFocusElement === tmp39.BIO;
  obj20[7] = closure_8;
  obj20[9] = isSubmitting;
  items9[4] = callback(UserProfileEditFormTextField, obj20);
  const obj21 = { user: currentUser, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult6 = UserProfileEditFormTextField;
  if (isTryItOut) {
    let fn = tmp13(8191).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      let obj = ref(8188);
      obj = { themeColors };
      return obj.setPendingChanges(obj);
    };
  }
  obj21[1] = fn;
  obj21[2] = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj21[3] = pendingThemeColors;
  obj21[4] = isTryItOut;
  items9[5] = callback(ColorSwatch, obj21);
  let tmp34Result1 = !isTryItOut;
  if (!isTryItOut) {
    const obj22 = { badges: null };
    obj22[0] = tmp18;
    tmp34Result1 = tmp34(tmp(13845), obj22);
  }
  items9[6] = tmp34Result1;
  const obj23 = { user: currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult7 = ColorSwatch;
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj23[1] = pendingAvatarDecoration;
  obj23[2] = isTryItOut;
  items9[7] = callback(COLLECTIBLES_PREVIEW_SIZE, obj23);
  const obj24 = { user: currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult8 = COLLECTIBLES_PREVIEW_SIZE;
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp34Result2 = "profile" === tmp13Result.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj24[1] = pendingProfileEffect;
  obj24[2] = tmp15Result;
  obj24[3] = isTryItOut;
  items9[8] = callback(UserProfileEffectEditButton, obj24);
  items9[9] = callback(COLLECTIBLES_PREVIEW_SIZE, { user: currentUser, pendingProfileFrame, displayProfile: tmp15Result });
  items9[10] = callback(UserProfileNameplateEditButton, { user: currentUser, pendingNameplate });
  if (tmp34Result2) {
    let tmp53 = result;
    if (!result) {
      tmp53 = isTryItOut;
    }
    tmp34Result2 = tmp53;
  }
  if (tmp34Result2) {
    tmp34Result2 = tmp34(tmp(13863), {});
  }
  items9[11] = tmp34Result2;
  const tmpResult9 = UserProfileEffectEditButton;
  items9[12] = callback(closure_5, {
    ref(arg0) {
      if (null != arg0) {
        ref.current[outer1_11.GUILD_TAG] = arg0;
      }
    },
    children: callback(UserProfilePrimaryGuildEditButton, { user: currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  });
  let tmp34Result3 = null != legacyUsername;
  if (tmp34Result3) {
    const obj26 = { legacyUsername: null, pendingLegacyUsernameDisabled: null };
    obj26[0] = legacyUsername;
    obj26[1] = pendingLegacyUsernameDisabled;
    tmp34Result3 = tmp34(tmp(13867), obj26);
  }
  const obj27 = { children: null };
  items9[13] = tmp34Result3;
  obj14[1] = items9;
  items7[2] = closure_14(closure_5, obj14);
  obj11[4] = items7;
  items5[1] = closure_14(tmpResult2, obj11);
  obj27[0] = items5;
  items3[1] = closure_14(closure_5, obj27);
  obj8[4] = items3;
  items2[1] = closure_14(tmpResult1, obj8);
  obj6[1] = items2;
  const items10 = [closure_14(tmp37, obj6), ];
  let tmp34Result4 = !result;
  if (!result) {
    tmp34Result4 = !tmp5;
  }
  if (tmp34Result4) {
    const obj28 = { isTryItOut: null };
    obj28[0] = isTryItOut;
    tmp34Result4 = tmp34(tmp13(13868).UserProfilePremiumUpsellCard, obj28);
  }
  items10[1] = tmp34Result4;
  obj5[1] = items10;
  obj4[3] = closure_14(closure_5, obj5);
  return callback(_ManaContext.ThemeContextProvider, obj4);
};