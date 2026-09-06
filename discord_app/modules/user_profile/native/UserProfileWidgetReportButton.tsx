// === Module 8663: UserProfileWidgetReportButton ===

// Module 8663 (UserProfileWidgetReportButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ReportModals from "ReportModals" /* 8629 */;
import FlagIcon from "FlagIcon" /* 8664 */;
import ContextMenu from "ContextMenu" /* 8666 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 8672 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_5 = { top: 8, bottom: 8, left: 8, right: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  ({ userId: require, widget: importDefault } = arg0);
  let obj = { label: null, variant: "destructive", IconComponent: null, action: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.D4GvHE);
  obj.IconComponent = FlagIcon.FlagIcon;
  obj.action = function action() {
    return ReportModals.showReportModalForWidget(closure_1_0, importDefault);
  };
  const items = [obj];
  obj = {
    items,
    children(ref) {
      let obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
      obj.hitSlop = hitSlop;
      obj.accessibilityRole = "button";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.xpSHSk);
      obj = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
      obj.children = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED });
      return <Pressable size="sm" color={nativeDefault.colors.TEXT_MUTED} />;
    }
  };
  return jsx(ContextMenu.ContextMenu, {
    items,
    children(ref) {
      let obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
      obj.hitSlop = hitSlop;
      obj.accessibilityRole = "button";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.xpSHSk);
      obj = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
      obj.children = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED });
      return <Pressable size="sm" color={nativeDefault.colors.TEXT_MUTED} />;
    }
  });
};