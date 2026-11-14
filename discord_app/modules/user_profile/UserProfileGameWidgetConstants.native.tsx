// discord_app/modules/user_profile/UserProfileGameWidgetConstants.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import FriendsIcon from "../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import ThumbsUpIcon from "../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import RibbonIcon from "../../design/components/Icon/native/redesign/generated/RibbonIcon.tsx";
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
export const WIDGET_FOCUS_DELAY_MS = 100;
export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
}
