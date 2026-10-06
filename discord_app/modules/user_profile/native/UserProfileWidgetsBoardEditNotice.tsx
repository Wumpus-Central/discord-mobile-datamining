// === Module 12919: UserProfileWidgetsBoardEditNotice ===

// Module 12919 (UserProfileWidgetsBoardEditNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7924 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp5;
const SelectedDismissibleContentDefault = tmp5(10367);
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let card;
  let closure_0;
  let first;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp4 = closure_7();
  const tmp = _require;
  _require = tmp4;
  const tmp6 = UserProfileSharedStylesDefault();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [tmp(2036).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp6) {
    let tmp8;
    if (cResult[2] === tmp4) {
      tmp8 = cResult[3];
    }
    return tmp8;
  }
  let obj2 = {
    contentTypes: first,
    bypassAutoDismiss: true,
    children(markAsDismissed) {
      let CircleInformationIcon;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj3;
      markAsDismissed = markAsDismissed.markAsDismissed;
      let tmp3 = null;
      if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
        const obj = { style: items, children: items1 };
        items = [card.card, closure_0.container];
        const obj2 = { style: closure_0.icon, children: hasOwnProperty(CircleInformationIcon, obj3) };
        obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
        items1 = [hasOwnProperty(View, obj2), , ];
        const obj4 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: intl.string(intl3.t.kv8ULD) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        items1[1] = hasOwnProperty(Text, obj4);
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.string(intl3.t.WAI6xu),
          onPress() {
              return markAsDismissed(constants.USER_DISMISS);
            },
          style: closure_0.closeButton,
          children: hasOwnProperty(XSmallIcon.XSmallIcon, { size: "sm" })
        };
        const PressableOpacity = Pressables.PressableOpacity;
        intl2 = intl3.intl;
        items1[2] = hasOwnProperty(PressableOpacity, obj5);
        tmp3 = metroRequire(View, obj);
      }
      return tmp3;
    }
  };
  const tmp9 = closure_5(SelectedDismissibleContentDefault, obj2);
  cResult[1] = tmp6;
  cResult[2] = tmp4;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let card;
  let closure_0;
  let items;
  _require = closure_7();
  importDefault = UserProfileSharedStylesDefault();
  let obj = {
    contentTypes: items,
    bypassAutoDismiss: true,
    children(markAsDismissed) {
      let CircleInformationIcon;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj3;
      markAsDismissed = markAsDismissed.markAsDismissed;
      let tmp3 = null;
      if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
        const obj = { style: items, children: items1 };
        items = [card.card, closure_0.container];
        const obj2 = { style: closure_0.icon, children: hasOwnProperty(CircleInformationIcon, obj3) };
        obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
        items1 = [hasOwnProperty(View, obj2), , ];
        const obj4 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: intl.string(intl3.t.kv8ULD) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        items1[1] = hasOwnProperty(Text, obj4);
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.string(intl3.t.WAI6xu),
          onPress() {
              return markAsDismissed(constants.USER_DISMISS);
            },
          style: closure_0.closeButton,
          children: hasOwnProperty(XSmallIcon.XSmallIcon, { size: "sm" })
        };
        const PressableOpacity = Pressables.PressableOpacity;
        intl2 = intl3.intl;
        items1[2] = hasOwnProperty(PressableOpacity, obj5);
        tmp3 = metroRequire(View, obj);
      }
      return tmp3;
    }
  };
  items = [];
  const tmp = SelectedDismissibleContentDefault;
  items[0] = require("dismissible_content").DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE;
  return closure_5(tmp, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default tmp4;