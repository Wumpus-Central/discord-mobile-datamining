// === Module 12173: UserProfileWidgetsBoardEditNotice ===

// Module 12173 (UserProfileWidgetsBoardEditNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useSharedStylesDefault from "useSharedStyles" /* 8982 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10261 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 0, marginTop: 2 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flexShrink: 0 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  const _require = callback2();
  importDefault = useSharedStylesDefault();
  dependencyMap = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileWidgetsBoardEditNotice");
  let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
  let items = [_require(1377).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
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
      obj1 = { size: "xs", color: null };
      obj1[1] = lib(table[5]).colors.TEXT_MUTED;
      obj[1] = closure_1_5(callback(table[10]).CircleInformationIcon, obj1);
      const items1 = [closure_1_5(View, obj), , ];
      const obj2 = { style: null, variant: null, color: null, children: null };
      obj2[0] = markAsDismissed.text;
      let str = "text-sm/semibold";
      if (table) {
        str = "text-sm/medium";
      }
      obj2[1] = str;
      let str2 = "text-default";
      if (table) {
        str2 = "text-strong";
      }
      obj2[2] = str2;
      const intl = callback(table[12]).intl;
      obj2[3] = intl.string(callback(table[12]).t.kv8ULD);
      items1[1] = closure_1_5(callback(table[11]).Text, obj2);
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = callback(table[12]).intl;
      obj[1] = intl2.string(callback(table[12]).t.WAI6xu);
      obj[2] = function onPress() {
        return markAsDismissed(closure_1_4.USER_DISMISS);
      };
      obj[3] = markAsDismissed.closeButton;
      obj[4] = closure_1_5(callback(table[14]).XSmallIcon, { size: "sm" });
      items1[2] = closure_1_5(callback(table[13]).PressableOpacity, obj);
      obj[1] = items1;
      tmp4Result = closure_1_6(View, obj);
    }
    return tmp4Result;
  };
  return callback(SelectedDismissibleContentDefault, obj);
};