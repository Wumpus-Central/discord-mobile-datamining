// === Module 10225: UserProfileWidgetEditOptionsButton ===

// Module 10225 (UserProfileWidgetEditOptionsButton)
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 10226 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = noop.useRef(null);
  const obj = { ref, size: "sm", variant: "secondary", icon: jsx(widget(7022).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null };
  const intl = widget(1112).intl;
  obj.accessibilityLabel = intl.string(widget(1112).t.xpSHSk);
  obj.onPress = function onPress() {
    return openUserProfileWidgetEditOptionsActionSheetDefault({ widget, returnFocusRef: ref });
  };
  return jsx(widget(7591).IconButton, { ref, size: "sm", variant: "secondary", icon: jsx(widget(7022).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null });
};