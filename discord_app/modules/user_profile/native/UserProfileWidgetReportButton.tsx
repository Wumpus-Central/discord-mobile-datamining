// === Module 12174: UserProfileWidgetReportButton ===

// Module 12174 (UserProfileWidgetReportButton)
import "noop";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { top: 8, bottom: 8, left: 8, right: 8 };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  let importDefault;
  let require;
  ({ userId: require, widget: importDefault } = arg0);
  let obj = { label: null, variant: "destructive", IconComponent: null, action: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.D4GvHE);
  obj[2] = require(9599) /* FlagIcon */.FlagIcon;
  obj[3] = function action() {
    return outer1_0(outer1_2[5]).showReportModalForWidget(closure_0, closure_1);
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
      obj = { size: "sm", color: null };
      obj[1] = callback2(712).colors.TEXT_MUTED;
      obj.children = callback3(callback(9149).MoreHorizontalIcon, obj);
      return callback3(closure_3, obj);
    }
  };
  return jsx(require(9482) /* ContextMenu */.ContextMenu, {
    items,
    children(ref) {
      let obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.create(null)));
      obj.hitSlop = closure_5;
      obj.accessibilityRole = "button";
      const intl = callback(1236).intl;
      obj.accessibilityLabel = intl.string(callback(1236).t.xpSHSk);
      obj = { size: "sm", color: null };
      obj[1] = callback2(712).colors.TEXT_MUTED;
      obj.children = callback3(callback(9149).MoreHorizontalIcon, obj);
      return callback3(closure_3, obj);
    }
  });
};