// === Module 12546: UserProfileWidgetEditOptionsButton ===

// Module 12546 (UserProfileWidgetEditOptionsButton)
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 12547 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = noop.useRef(null);
  const obj = { ref, size: "sm", variant: "secondary", icon: jsx(widget(9846).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null };
  const intl = widget(1113).intl;
  obj.accessibilityLabel = intl.string(widget(1113).t.xpSHSk);
  obj.onPress = function onPress() {
    return openUserProfileWidgetEditOptionsActionSheetDefault({ widget, returnFocusRef: ref });
  };
  return jsx(widget(8098).IconButton, { ref, size: "sm", variant: "secondary", icon: jsx(widget(9846).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null });
};