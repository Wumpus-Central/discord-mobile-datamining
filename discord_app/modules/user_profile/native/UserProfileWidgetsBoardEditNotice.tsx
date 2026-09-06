// === Module 13064: UserProfileWidgetsBoardEditNotice ===

// Module 13064 (UserProfileWidgetsBoardEditNotice)
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8241 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10625 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, icon: null, text: null, closeButton: null };
createStyles = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.icon = { flexShrink: 0, marginTop: 2 };
createStyles.text = { flex: 1 };
createStyles.closeButton = { flexShrink: 0 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  _require = closure_7();
  importDefault = UserProfileSharedStylesDefault();
  let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
  let items = [require("dismissible_content").DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
  obj.contentTypes = items;
  obj.children = function children(markAsDismissed) {
    markAsDismissed = markAsDismissed.markAsDismissed;
    let tmp3 = null;
    if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
      let obj = { style: null, children: null };
      const items = [card.card, closure_0.container];
      obj.style = items;
      obj = { style: closure_0.icon, children: null };
      obj = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      obj.children = hasOwnProperty(tmp(4515).CircleInformationIcon, obj);
      const items1 = [hasOwnProperty(View, obj), , ];
      const obj1 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: null };
      const intl = tmp(1114).intl;
      obj1.children = intl.string(tmp(1114).t.kv8ULD);
      items1[1] = hasOwnProperty(tmp(4556).Text, obj1);
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = tmp(1114).intl;
      obj2.accessibilityLabel = intl2.string(tmp(1114).t.WAI6xu);
      obj2.onPress = function onPress() {
        return markAsDismissed(constants.USER_DISMISS);
      };
      obj2.style = closure_0.closeButton;
      obj2.children = hasOwnProperty(tmp(5680).XSmallIcon, { size: "sm" });
      items1[2] = hasOwnProperty(tmp(5123).PressableOpacity, obj2);
      obj.children = items1;
      tmp3 = timestampProducer(View, obj);
    }
    return tmp3;
  };
  return closure_5(SelectedDismissibleContentDefault, obj);
};