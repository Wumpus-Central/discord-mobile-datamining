// discord_app/modules/user_profile/native/UserProfileWidgetReportButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import MoreHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    },
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
    },
  });
}
