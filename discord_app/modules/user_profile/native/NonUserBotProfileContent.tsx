// discord_app/modules/user_profile/native/NonUserBotProfileContent.tsx
import getNicknameDefault from "../../../utils/NicknameUtils.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import useSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ARBITRARY_LARGE_OFFSET from "Constants.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = arg1;
({ PROFILE_CONTENT_BOTTOM_PADDING: c4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: c5 } = ARBITRARY_LARGE_OFFSET);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
const memoResult = importAllResult.memo(function NonUserBotProfileContent(scrollPosition) {
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  const tmp3 = useSharedStylesDefault();
  let obj = trackUserProfileAction(8934);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = getNicknameDefault;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = obj1.useName(guild_id, id, user);
  let tmpResult = tmp(4219);
  importDefault = tmpResult.useUserTag(user);
  const tmp9 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  const tmp8 = useBadgesDefault(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 }));
  const tmp10 = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 });
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  const tmp11 = useProfileThemeDefault({ user, displayProfile });
  const userProfileColors = trackUserProfileAction(8979).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    obj = { user: null, displayProfile: null, bannerHeight: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null };
    obj[0] = user;
    obj[1] = displayProfile;
    obj[2] = tmp9;
    obj[3] = bannerAnimatedStyle;
    obj[4] = bannerImageAnimatedStyle;
    obj[5] = blurAnimatedProps;
    obj[6] = showBlur;
    const items = [callback(tmp(8985), obj), ];
    obj = { style: null, children: null };
    obj[0] = contentAnimatedStyle;
    obj1 = { user: null, guildId: null, backgroundColor: null, disableStatus: true };
    obj1[0] = user;
    let guildId;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    obj1[1] = guildId;
    obj1[2] = tmp13;
    const items1 = [callback(tmp4(8990).OpenableUserProfileAvatar, obj1), ];
    const obj2 = { style: null, children: null };
    const items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj3 = { paddingTop: null, paddingBottom: null };
    obj3[0] = closure_5;
    obj3[1] = tmp(1629)().bottom + closure_4;
    items2[2] = obj3;
    obj2[0] = items2;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.primaryInfo;
    const obj5 = { user: null, guildId: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
    obj5[0] = user;
    let guild_id1;
    tmpResult = tmp(9451);
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj5[1] = guild_id1;
    obj5[2] = name;
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      trackUserProfileAction(closure_1_2[15]).copy(closure_1);
      const obj = trackUserProfileAction(closure_1_2[15]);
      const result = trackUserProfileAction(closure_1_2[16]).presentUsernameCopied();
    }
    const obj6 = { children: null };
    obj5[3] = pronouns;
    obj5[4] = tmp8;
    obj5[5] = containerBackground;
    const intl = tmp4(1236).intl;
    obj5[6] = intl.string(tmp4(1236).t.y5MwJy);
    obj5[7] = handleCopyUsername;
    obj5[8] = handleCopyUsername;
    obj5[9] = function onPressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      trackUserProfileAction(closure_1_2[16]).presentUserPronouns();
    };
    obj4[1] = callback(tmpResult, obj5);
    const items3 = [callback(View, obj4), ];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp3.cards;
    const obj8 = { userId: null, displayProfile: null, channel: null, style: null };
    obj8[0] = user.id;
    obj8[1] = displayProfile;
    obj8[2] = channel;
    const items4 = [tmp3.card, ];
    const obj9 = { backgroundColor: null };
    obj9[0] = containerBackground;
    items4[1] = obj9;
    obj8[3] = items4;
    obj7[1] = callback(tmp(9548), obj8);
    items3[1] = callback(View, obj7);
    obj2[1] = items3;
    items1[1] = closure_8(View, obj2);
    obj[1] = items1;
    items[1] = closure_8(tmp(4115).View, obj);
    obj6[0] = items;
    return closure_8(closure_9, obj6);
  }
  const tmp4Result = trackUserProfileAction(8979);
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;