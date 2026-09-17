// === Module 13219: UserProfileWidgetsBoardEditNotice ===

// Module 13219 (UserProfileWidgetsBoardEditNotice)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4594 */;
import Text_Text from "Text/Text" /* 4636 */;
import Pressables from "Pressables" /* 5210 */;
import XSmallIcon from "XSmallIcon" /* 5768 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8388 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10774 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 }, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
let closure_7 = createStyles.createStyles(obj2);
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
      const obj = { style: null, children: null };
      const items = [card.card, closure_0.container];
      obj.style = items;
      const obj2 = { style: closure_0.icon, children: null };
      const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      obj2.children = hasOwnProperty(CircleInformationIcon.CircleInformationIcon, obj3);
      const items1 = [hasOwnProperty(View, obj2), , ];
      const obj4 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.kv8ULD);
      items1[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = util.intl;
      obj5.accessibilityLabel = intl2.string(util.t.WAI6xu);
      obj5.onPress = function onPress() {
        return markAsDismissed(constants.USER_DISMISS);
      };
      obj5.style = closure_0.closeButton;
      obj5.children = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "sm" });
      items1[2] = hasOwnProperty(Pressables.PressableOpacity, obj5);
      obj.children = items1;
      tmp3 = timestampProducer(View, obj);
    }
    return tmp3;
  };
  return closure_5(SelectedDismissibleContentDefault, obj);
};