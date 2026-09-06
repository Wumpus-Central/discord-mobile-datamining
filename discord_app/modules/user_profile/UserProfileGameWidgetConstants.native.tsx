// discord_app/modules/user_profile/UserProfileGameWidgetConstants.native.tsx
import FriendsIcon from "../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import RibbonIcon from "../../design/components/Icon/native/redesign/generated/RibbonIcon.tsx";
import ThumbsUpIcon from "../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
