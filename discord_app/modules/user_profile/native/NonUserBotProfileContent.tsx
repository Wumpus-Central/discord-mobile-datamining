// discord_app/modules/user_profile/native/NonUserBotProfileContent.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(7541);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7484).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default noop.memo(function NonUserBotProfileContent(scrollPosition) {
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  const tmp3 = UserProfileSharedStylesDefault();
  trackUserProfileAction = trackUserProfileAction(8538).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = trackUserProfileAction(8538);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = NicknameUtilsDefault.useName(guild_id, id, user);
  importDefault = UserUtilsDefault.useUserTag(user);
  const tmpResult = UserUtilsDefault;
  const tmp9 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  const tmp8 = useBadgesDefault(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
    useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 }));
  const tmp10 = useUserProfileOverscrollStylesDefault({
    scrollPosition: scrollPosition.scrollPosition,
    bannerHeight: tmp9,
  });
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  const tmp11 = useProfileThemeDefault({ user, displayProfile });
  const userProfileColors = trackUserProfileAction(8586).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    const obj3 = {
      user,
      displayProfile,
      bannerHeight: tmp9,
      bannerAnimatedStyle,
      bannerImageAnimatedStyle,
      blurAnimatedProps,
      showBlur,
    };
    const items = [closure_7(tmp(8592), obj3)];
    const obj4 = { style: contentAnimatedStyle, children: null };
    const obj5 = { user, guildId: null, backgroundColor: null, disableStatus: true };
    let guildId;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    obj5.guildId = guildId;
    obj5.backgroundColor = tmp13;
    const items1 = [closure_7(tmp4(8604).OpenableUserProfileAvatar, obj5)];
    const obj6 = { style: null, children: null };
    const items2 = [, ,];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj7 = { paddingTop, paddingBottom: tmp(1612)().bottom + closure_4 };
    items2[2] = obj7;
    obj6.style = items2;
    const obj8 = { style: tmp3.primaryInfo, children: null };
    const obj9 = {
      user,
      guildId: null,
      displayName: null,
      pronouns: null,
      badges: null,
      badgeContainerBackground: null,
      displayNameAccessibilityHint: null,
      onPressDisplayName: null,
      onPressUserTag: null,
      onPressPronouns: null,
      showBadgeToastOnPress: true,
    };
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj9.guildId = guild_id1;
    obj9.displayName = name;
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(closure_1);
      const result = ToastUtils.presentUsernameCopied();
    }
    const obj10 = { children: null };
    obj9.pronouns = pronouns;
    obj9.badges = tmp8;
    obj9.badgeContainerBackground = containerBackground;
    const intl = tmp4(1115).intl;
    obj9.displayNameAccessibilityHint = intl.string(tmp4(1115).t.y5MwJy);
    obj9.onPressDisplayName = handleCopyUsername;
    obj9.onPressUserTag = handleCopyUsername;
    obj9.onPressPronouns = function onPressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      ToastUtils.presentUserPronouns();
    };
    obj8.children = closure_7(tmp(11505), obj9);
    const items3 = [closure_7(View, obj8)];
    const obj11 = { style: tmp3.cards, children: null };
    const obj12 = { userId: user.id, displayProfile, channel, style: null };
    const items4 = [tmp3.card];
    const obj13 = { backgroundColor: containerBackground };
    items4[1] = obj13;
    obj12.style = items4;
    obj11.children = closure_7(tmp(11559), obj12);
    items3[1] = closure_7(View, obj11);
    obj6.children = items3;
    items1[1] = closure_8(View, obj6);
    obj4.children = items1;
    items[1] = closure_8(tmp(4561).View, obj4);
    obj10.children = items;
    return closure_8(closure_9, obj10);
  }
  const tmp4Result = trackUserProfileAction(8586);
});
