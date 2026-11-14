// === Module 13489: CommandDetailsOverflowMenu ===

// Module 13489 (CommandDetailsOverflowMenu)
import ToastUtils from "ToastUtils" /* 6014 */;
import _modDef7421 from "module_7421" /* 7421 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx");

export default function CommandDetailsOverflowMenu(commandId) {
  commandId = commandId.commandId;
  const DeveloperMode = commandId(5131).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = { label: null, action: null, IconComponent: null };
      let intl = tmp(1113).intl;
      obj.label = intl.string(tmp(1113).t.oJ1Muw);
      obj.action = function action() {
        ClipboardUtils.copy(commandId);
        ToastUtils.presentIdCopied();
      };
      obj.IconComponent = tmp(11629).IdIcon;
      items = [obj];
      const obj2 = {
        items,
        children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7421 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1113).intl;
              obj.accessibilityLabel = intl.string(commandId(1113).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(7988).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7421 });
            }
      };
      return jsx(tmp(9148).ContextMenu, {
        items,
        children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7421 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1113).intl;
              obj.accessibilityLabel = intl.string(commandId(1113).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(7988).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef7421 });
            }
      });
    }
  }
  return null;
};