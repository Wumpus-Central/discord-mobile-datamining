// === Module 14200: UserProfileGameWidgetConstants ===

// Module 14200 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 5628 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9685 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9687 */;
import RibbonIcon from "RibbonIcon" /* 14202 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 14201 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = UserProfileGameWidgetTagMetadata.buildWidgetGameTagMetadata(obj);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(tag) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[tag]) {
    tmp2 = tmp;
  }
  return tmp2;
};