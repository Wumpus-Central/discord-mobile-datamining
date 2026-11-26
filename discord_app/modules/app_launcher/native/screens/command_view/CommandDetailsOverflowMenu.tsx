// discord_app/modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _modDef7746 from "../../../../../../_runtime/metro/07746__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx",
);

export default function CommandDetailsOverflowMenu(commandId) {
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4868).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = { label: null, action: null, IconComponent: null };
      let intl = tmp(1112).intl;
      obj.label = intl.string(tmp(1112).t.oJ1Muw);
      obj.action = function action() {
        ClipboardUtils.copy(commandId);
        ToastUtils.presentIdCopied();
      };
      obj.IconComponent = tmp(11081).IdIcon;
      items = [obj];
      const obj2 = {
        items,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7746 };
          const merged1 = Object.assign(merged);
          const intl = commandId(1112).intl;
          obj.accessibilityLabel = intl.string(commandId(1112).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(commandId(7944).IconButton, {
            ref: ref.ref,
            size: "sm",
            variant: "secondary-overlay",
            icon: _modDef7746,
          });
        },
      };
      return jsx(tmp(9067).ContextMenu, {
        items,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7746 };
          const merged1 = Object.assign(merged);
          const intl = commandId(1112).intl;
          obj.accessibilityLabel = intl.string(commandId(1112).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(commandId(7944).IconButton, {
            ref: ref.ref,
            size: "sm",
            variant: "secondary-overlay",
            icon: _modDef7746,
          });
        },
      });
    }
  }
  return null;
}
