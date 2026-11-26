// === Module 14587: UserProfileWidgetRemoveGameButton ===

// Module 14587 (UserProfileWidgetRemoveGameButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5052 */;
import TrashIcon from "TrashIcon" /* 5750 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6382 */;
import IconButton from "IconButton" /* 7944 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_4 = fn(6137).TrackUserProfileEditActions;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetRemoveGameButton.tsx");

export default function UserProfileWidgetRemoveGameButton(gameName) {
  ({ widgetType: require, gameId: importDefault, onRemove: dependencyMap } = gameName);
  let obj = { size: "sm", variant: "secondary-overlay", icon: jsx(TrashIcon.TrashIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }), accessibilityLabel: null, onPress: null };
  let intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t.unLAkl, { gameName: gameName.gameName });
  obj.onPress = function handleRemove() {
    const result = WidgetUtils.removePendingGameFromWidget(widgetEdited, gameId);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["08HmMj"]));
    const obj2 = UserProfileAnalyticsUtils;
    const result1 = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.GAME_REMOVED, widgetEdited, gameId });
    if (dependencyMap != null) {
      dependencyMap(gameId);
    }
    const obj3 = { userId: AuthenticationStore.getId(), action: constants.GAME_REMOVED, widgetEdited, gameId };
  };
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: jsx(TrashIcon.TrashIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }), accessibilityLabel: null, onPress: null });
};