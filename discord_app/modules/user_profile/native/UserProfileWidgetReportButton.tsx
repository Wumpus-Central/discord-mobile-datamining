// === Module 12555: UserProfileWidgetReportButton ===

// Module 12555 (UserProfileWidgetReportButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ContextMenu from "ContextMenu" /* 8745 */;
import FlagIcon from "FlagIcon" /* 8916 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let closure_5 = { top: 8, bottom: 8, left: 8, right: 8 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  ({ userId: require, widget: importDefault } = arg0);
  let obj = { label: null, variant: "destructive", IconComponent: null, action: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.D4GvHE);
  obj[2] = FlagIcon.FlagIcon;
  obj[3] = function action() {
    return closure_1_0(closure_1_2[5]).showReportModalForWidget(closure_0, closure_1);
  };
  const items = [obj];
  obj = {
    items,
    children(ref) {
      let obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.create(null)));
      obj.hitSlop = closure_5;
      obj.accessibilityRole = "button";
      const intl = callback(1236).intl;
      obj.accessibilityLabel = intl.string(callback(1236).t.xpSHSk);
      obj = { size: "sm", color: callback2(712).colors.TEXT_MUTED };
      obj.children = callback3(callback(8751).MoreHorizontalIcon, obj);
      return callback3(closure_3, obj);
    }
  };
  return jsx(ContextMenu.ContextMenu, {
    items,
    children(ref) {
      let obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.create(null)));
      obj.hitSlop = closure_5;
      obj.accessibilityRole = "button";
      const intl = callback(1236).intl;
      obj.accessibilityLabel = intl.string(callback(1236).t.xpSHSk);
      obj = { size: "sm", color: callback2(712).colors.TEXT_MUTED };
      obj.children = callback3(callback(8751).MoreHorizontalIcon, obj);
      return callback3(closure_3, obj);
    }
  });
};