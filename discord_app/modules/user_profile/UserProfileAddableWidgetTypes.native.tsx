// === Module 15814: UserProfileAddableWidgetTypes ===

// Module 15814 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 7353 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.APPLICATION, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = new Set(items);