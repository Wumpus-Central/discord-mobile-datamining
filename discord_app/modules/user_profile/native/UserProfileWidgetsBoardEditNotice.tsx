// === Module 13064: UserProfileWidgetsBoardEditNotice ===

// Module 13064 (UserProfileWidgetsBoardEditNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import useSharedStylesDefault from "useSharedStyles" /* 8241 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10625 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null, closeButton: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 0, marginTop: 2 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flexShrink: 0 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  const _require = callback2();
  importDefault = useSharedStylesDefault();
  let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
  let items = [_require(1943).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
  obj[0] = items;
  obj[2] = function children(markAsDismissed) {
    markAsDismissed = markAsDismissed.markAsDismissed;
    let tmp3 = null;
    if (markAsDismissed.visibleContent === callback(closure_1_2[8]).DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
      let obj = { style: null, children: null };
      const items = [lib.card, markAsDismissed.container];
      obj[0] = items;
      obj = { style: null, children: null };
      obj[0] = markAsDismissed.icon;
      obj = { size: "xs", color: null };
      obj[1] = lib(tmp2[5]).colors.TEXT_MUTED;
      obj[1] = closure_1_5(tmp(tmp2[9]).CircleInformationIcon, obj);
      const items1 = [closure_1_5(closure_1_3, obj), , ];
      obj1 = { style: null, variant: "text-sm/medium", color: "text-strong", children: null };
      obj1[0] = markAsDismissed.text;
      const intl = tmp(tmp2[11]).intl;
      obj1[3] = intl.string(tmp(tmp2[11]).t.kv8ULD);
      items1[1] = closure_1_5(tmp(tmp2[10]).Text, obj1);
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = tmp(tmp2[11]).intl;
      obj2[1] = intl2.string(tmp(tmp2[11]).t.WAI6xu);
      obj2[2] = function onPress() {
        return markAsDismissed(closure_1_4.USER_DISMISS);
      };
      obj2[3] = markAsDismissed.closeButton;
      obj2[4] = closure_1_5(tmp(tmp2[13]).XSmallIcon, { size: "sm" });
      items1[2] = closure_1_5(tmp(tmp2[12]).PressableOpacity, obj2);
      obj[1] = items1;
      tmp3 = closure_1_6(closure_1_3, obj);
    }
    return tmp3;
  };
  return callback(SelectedDismissibleContentDefault, obj);
};