// === Module 14526: UserProfileWidgetEditOptionsButton ===

// Module 14526 (UserProfileWidgetEditOptionsButton)
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 14527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = noop.useRef(null);
  const obj = { ref, size: "sm", variant: "secondary", icon: jsx(widget(7711).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null };
  const intl = widget(1112).intl;
  obj.accessibilityLabel = intl.string(widget(1112).t.xpSHSk);
  obj.onPress = function onPress() {
    return openUserProfileWidgetEditOptionsActionSheetDefault({ widget, returnFocusRef: ref });
  };
  return jsx(widget(7910).IconButton, { ref, size: "sm", variant: "secondary", icon: jsx(widget(7711).MoreHorizontalIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, onPress: null });
};