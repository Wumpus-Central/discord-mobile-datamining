// discord_app/modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null, closeButton: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", gap: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 0, marginTop: 2 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flexShrink: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ContentDismissActionType").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  const _require = createCacheKey();
  importDefault = importDefault(8757)();
  const dependencyMap = importDefault(1348)("UserProfileWidgetsBoardEditNotice");
  let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
  let items = [_require(1358).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
  obj[0] = items;
  obj[2] = function children(markAsDismissed) {
    markAsDismissed = markAsDismissed.markAsDismissed;
    let tmp4Result = null;
    if (markAsDismissed.visibleContent === callback(table[9]).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
      let obj = { style: null, children: null };
      const items = [lib.card, markAsDismissed.container];
      obj[0] = items;
      obj = { style: null, children: null };
      obj[0] = markAsDismissed.icon;
      const obj1 = { size: "xs", color: null };
      obj1[1] = lib(tmp2[5]).colors.TEXT_MUTED;
      obj[1] = outer1_5(tmp(tmp2[10]).CircleInformationIcon, obj1);
      const items1 = [outer1_5(outer1_3, obj), , ];
      const obj2 = { style: null, variant: null, color: null, children: null };
      obj2[0] = markAsDismissed.text;
      let str = "text-sm/semibold";
      if (table) {
        str = "text-sm/medium";
      }
      obj2[1] = str;
      let str2 = "text-default";
      if (tmp10) {
        str2 = "text-strong";
      }
      obj2[2] = str2;
      const intl = tmp(tmp2[12]).intl;
      obj2[3] = intl.string(tmp(tmp2[12]).t.kv8ULD);
      items1[1] = outer1_5(tmp(tmp2[11]).Text, obj2);
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = tmp(tmp2[12]).intl;
      obj[1] = intl2.string(tmp(tmp2[12]).t.WAI6xu);
      obj[2] = function onPress() {
        return markAsDismissed(outer1_4.USER_DISMISS);
      };
      obj[3] = markAsDismissed.closeButton;
      obj[4] = outer1_5(tmp(tmp2[14]).XSmallIcon, { size: "sm" });
      items1[2] = outer1_5(tmp(tmp2[13]).PressableOpacity, obj);
      obj[1] = items1;
      tmp4Result = outer1_6(outer1_3, obj);
      tmp10 = table;
      const tmp4 = outer1_6;
      const tmp5 = outer1_3;
      const tmp7 = markAsDismissed;
    }
    return tmp4Result;
  };
  return callback(importDefault(9916), obj);
};