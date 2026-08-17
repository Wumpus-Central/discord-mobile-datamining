// discord_app/modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useSharedStylesDefault from "useSharedStyles" /* 8982 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10261 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";

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
  dependencyMap = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileWidgetsBoardEditNotice");
  let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
  let items = [_DismissibleContent.DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
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
      obj1[1] = lib(tmp2[5]).colors.TEXT_MUTED;
      obj[1] = closure_1_5(tmp(tmp2[10]).CircleInformationIcon, obj1);
      const items1 = [closure_1_5(closure_1_3, obj), , ];
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
      items1[1] = closure_1_5(tmp(tmp2[11]).Text, obj2);
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const intl2 = tmp(tmp2[12]).intl;
      obj[1] = intl2.string(tmp(tmp2[12]).t.WAI6xu);
      obj[2] = function onPress() {
        return markAsDismissed(closure_1_4.USER_DISMISS);
      };
      obj[3] = markAsDismissed.closeButton;
      obj[4] = closure_1_5(tmp(tmp2[14]).XSmallIcon, { size: "sm" });
      items1[2] = closure_1_5(tmp(tmp2[13]).PressableOpacity, obj);
      obj[1] = items1;
      tmp4Result = closure_1_6(closure_1_3, obj);
      tmp10 = table;
      const tmp4 = closure_1_6;
      const tmp5 = closure_1_3;
      const tmp7 = markAsDismissed;
    }
    return tmp4Result;
  };
  return callback(SelectedDismissibleContentDefault, obj);
};