// === Module 12587: widgetGameTagMetadata ===

// Module 12587 (widgetGameTagMetadata)
import set from "set" /* 2 */;
import FriendsIcon from "FriendsIcon" /* 4164 */;
import RibbonIcon from "RibbonIcon" /* 12589 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 12591 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 12593 */;
import WidgetGameTagIconRole from "WidgetGameTagIconRole" /* 12588 */;

const obj = {};
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = set.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(arg0) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[arg0]) {
    tmp2 = tmp;
  }
  return tmp2;
};