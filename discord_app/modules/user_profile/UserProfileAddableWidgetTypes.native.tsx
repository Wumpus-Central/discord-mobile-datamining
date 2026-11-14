// discord_app/modules/user_profile/UserProfileAddableWidgetTypes.native.tsx
import WidgetType from "../../../discord_common/js/shared/shared-constants/WidgetType.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  WidgetType.WidgetType.APPLICATION,
  WidgetType.WidgetType.FAVORITE_GAMES,
  WidgetType.WidgetType.PLAYED_GAMES,
  WidgetType.WidgetType.CURRENT_GAMES,
  WidgetType.WidgetType.WANT_TO_PLAY_GAMES,
];
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = new Set(items);
