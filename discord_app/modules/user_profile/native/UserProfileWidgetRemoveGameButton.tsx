// discord_app/modules/user_profile/native/UserProfileWidgetRemoveGameButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import TrashIcon from "../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
let closure_4 = fn(8413).TrackUserProfileEditActions;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetRemoveGameButton.tsx");

export default function UserProfileWidgetRemoveGameButton(gameName) {
  ({ widgetType: require, gameId: importDefault, onRemove: dependencyMap } = gameName);
  let obj = {
    size: "sm",
    variant: "secondary-overlay",
    icon: jsx(TrashIcon.TrashIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
    accessibilityLabel: null,
    onPress: null,
  };
  let intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t.unLAkl, { gameName: gameName.gameName });
  obj.onPress = function handleRemove() {
    const result = WidgetUtils.removePendingGameFromWidget(widgetEdited, gameId);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["08HmMj"]));
    const obj2 = UserProfileAnalyticsUtils;
    const result1 = obj2.trackUserProfileEditAction({
      userId: AuthenticationStore.getId(),
      action: constants.GAME_REMOVED,
      widgetEdited,
      gameId,
    });
    if (dependencyMap != null) {
      dependencyMap(gameId);
    }
    const obj3 = { userId: AuthenticationStore.getId(), action: constants.GAME_REMOVED, widgetEdited, gameId };
  };
  return jsx(IconButton.IconButton, {
    size: "sm",
    variant: "secondary-overlay",
    icon: jsx(TrashIcon.TrashIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT }),
    accessibilityLabel: null,
    onPress: null,
  });
}
