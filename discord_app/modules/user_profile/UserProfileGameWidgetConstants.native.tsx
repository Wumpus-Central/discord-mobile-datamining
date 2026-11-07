// === Module 15197: UserProfileGameWidgetConstants ===

// Module 15197 (UserProfileGameWidgetConstants)
import nativeDefault from "native" /* 575 */;
import FriendsIcon from "FriendsIcon" /* 5840 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9990 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9992 */;
import RibbonIcon from "RibbonIcon" /* 15199 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 15198 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = UserProfileGameWidgetTagMetadata.buildWidgetGameTagMetadata(obj);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const GAME_COVER_ASPECT_RATIO = 0.75;
export const GAME_COVER_BORDER_RADIUS = nativeDefault.radii.sm;
export const GAME_COVER_GRID_GAP = nativeDefault.space.PX_16;
export const GAME_COVER_DETAILS_GAP = nativeDefault.space.PX_12;
export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
}