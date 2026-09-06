// === Module 8240: NonUserBotProfileContent ===

// Module 8240 (NonUserBotProfileContent)
import ToastUtils from "ToastUtils" /* 4258 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import useProfileThemeDefault from "useProfileTheme" /* 8227 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8230 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8241 */;
import useBadgesDefault from "useBadges" /* 8242 */;
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles" /* 8243 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7208);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default noop.memo(function NonUserBotProfileContent(scrollPosition) {
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  const tmp3 = UserProfileSharedStylesDefault();
  let obj = trackUserProfileAction(8190);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = NicknameUtilsDefault;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = obj1.useName(guild_id, id, user);
  let tmpResult = tmp(4404);
  importDefault = tmpResult.useUserTag(user);
  const tmp9 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  const tmp8 = useBadgesDefault(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 }));
  const tmp10 = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 });
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  const tmp11 = useProfileThemeDefault({ user, displayProfile });
  const userProfileColors = trackUserProfileAction(8238).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    obj = { user, displayProfile, bannerHeight: tmp9, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [closure_7(tmp(8244), obj), ];
    obj = { style: contentAnimatedStyle, children: null };
    obj1 = { user, guildId: null, backgroundColor: null, disableStatus: true };
    let guildId;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    obj1.guildId = guildId;
    obj1.backgroundColor = tmp13;
    const items1 = [closure_7(tmp4(8256).OpenableUserProfileAvatar, obj1), ];
    const obj2 = { style: null, children: null };
    const items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj3 = { paddingTop, paddingBottom: tmp(1611)().bottom + closure_4 };
    items2[2] = obj3;
    obj2.style = items2;
    const obj4 = { style: tmp3.primaryInfo, children: null };
    const obj5 = { user, guildId: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
    let guild_id1;
    tmpResult = tmp(11152);
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj5.guildId = guild_id1;
    obj5.displayName = name;
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(closure_1);
      const result = ToastUtils.presentUsernameCopied();
    }
    const obj6 = { children: null };
    obj5.pronouns = pronouns;
    obj5.badges = tmp8;
    obj5.badgeContainerBackground = containerBackground;
    const intl = tmp4(1114).intl;
    obj5.displayNameAccessibilityHint = intl.string(tmp4(1114).t.y5MwJy);
    obj5.onPressDisplayName = handleCopyUsername;
    obj5.onPressUserTag = handleCopyUsername;
    obj5.onPressPronouns = function onPressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      ToastUtils.presentUserPronouns();
    };
    obj4.children = closure_7(tmpResult, obj5);
    const items3 = [closure_7(View, obj4), ];
    const obj7 = { style: tmp3.cards, children: null };
    const obj8 = { userId: user.id, displayProfile, channel, style: null };
    const items4 = [tmp3.card, ];
    const obj9 = { backgroundColor: containerBackground };
    items4[1] = obj9;
    obj8.style = items4;
    obj7.children = closure_7(tmp(11207), obj8);
    items3[1] = closure_7(View, obj7);
    obj2.children = items3;
    items1[1] = closure_8(View, obj2);
    obj.children = items1;
    items[1] = closure_8(tmp(4296).View, obj);
    obj6.children = items;
    return closure_8(closure_9, obj6);
  }
  const tmp4Result = trackUserProfileAction(8238);
});