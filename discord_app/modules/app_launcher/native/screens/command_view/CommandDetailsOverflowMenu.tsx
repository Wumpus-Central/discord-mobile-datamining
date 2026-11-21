// === Module 13026: CommandDetailsOverflowMenu ===

// Module 13026 (CommandDetailsOverflowMenu)
import ToastUtils from "ToastUtils" /* 5594 */;
import _modDef7023 from "module_7023" /* 7023 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx");

export default function CommandDetailsOverflowMenu(commandId) {
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4738).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = { label: null, action: null, IconComponent: null };
      let intl = tmp(1112).intl;
      obj.label = intl.string(tmp(1112).t.oJ1Muw);
      obj.action = function action() {
        ClipboardUtils.copy(commandId);
        ToastUtils.presentIdCopied();
      };
      obj.IconComponent = tmp(10378).IdIcon;
      items = [obj];
      const obj2 = {
        items,
        children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7023 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1112).intl;
              obj.accessibilityLabel = intl.string(commandId(1112).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(7591).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7023 });
            }
      };
      return jsx(tmp(8658).ContextMenu, {
        items,
        children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7023 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1112).intl;
              obj.accessibilityLabel = intl.string(commandId(1112).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(7591).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7023 });
            }
      });
    }
  }
  return null;
};