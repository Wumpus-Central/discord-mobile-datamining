// discord_app/modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = noop.useRef(null);
  const obj = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: jsx(widget(7356).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = widget(1113).intl;
  obj.accessibilityLabel = intl.string(widget(1113).t.xpSHSk);
  obj.onPress = function onPress() {
    return openUserProfileWidgetEditOptionsActionSheetDefault({ widget, returnFocusRef: ref });
  };
  return jsx(widget(7922).IconButton, {
    ref,
    size: "sm",
    variant: "secondary",
    icon: jsx(widget(7356).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }),
    accessibilityLabel: null,
    onPress: null,
  });
}
