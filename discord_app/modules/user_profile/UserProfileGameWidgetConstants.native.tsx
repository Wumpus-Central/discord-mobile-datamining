// discord_app/modules/user_profile/UserProfileGameWidgetConstants.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import FriendsIcon from "../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import RibbonIcon from "../../design/components/Icon/native/redesign/generated/RibbonIcon.tsx";
import ThumbsUpIcon from "../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import WidgetGameTagIconRole from "UserProfileGameWidgetTagMetadata.tsx";

const obj = {};
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = obj132.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
};