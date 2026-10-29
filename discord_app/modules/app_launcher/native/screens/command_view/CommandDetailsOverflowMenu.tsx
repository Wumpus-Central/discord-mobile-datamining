// discord_app/modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _modDef9175 from "../../../../../../_runtime/metro/09175__.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CommandDetailsOverflowMenu(commandId) {
      const cResult = commandId(576).c(6);
      commandId = commandId.commandId;
      const DeveloperMode = commandId(4833).DeveloperMode;
      if (null != commandId) {
        if (DeveloperMode.useSetting()) {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1125).intl;
            const stringResult = intl.string(tmp(1125).t.oJ1Muw);
            cResult[0] = stringResult;
            let first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== commandId) {
            const obj2 = {
              label: first,
              action() {
                ClipboardUtils.copy(commandId);
                ToastUtils.presentIdCopied();
              },
              IconComponent: tmp(10479).IdIcon,
            };
            const items = [obj2];
            cResult[1] = commandId;
            cResult[2] = items;
            let tmp7 = items;
          } else {
            tmp7 = cResult[2];
          }
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function p(ref) {
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef9175 };
              const merged = Object.assign(_objectWithoutProperties(ref, closure_1_3));
              const intl = commandId(1125).intl;
              obj.accessibilityLabel = intl.string(commandId(1125).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(8014).IconButton, {
                ref: ref.ref,
                size: "sm",
                variant: "secondary-overlay",
                icon: _modDef9175,
              });
            };
            cResult[3] = fn;
            let tmp8 = fn;
          } else {
            tmp8 = cResult[3];
          }
          if (cResult[4] !== tmp7) {
            const obj3 = { items: tmp7, children: tmp8 };
            const tmp11 = jsx(tmp(9827).ContextMenu, { items: tmp7, children: tmp8 });
            cResult[4] = tmp7;
            cResult[5] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[5];
          }
          return tmp9;
        }
      }
      return null;
    }
  : function CommandDetailsOverflowMenu(commandId) {
      commandId = commandId.commandId;
      const DeveloperMode = commandId(4833).DeveloperMode;
      if (null != commandId) {
        if (DeveloperMode.useSetting()) {
          let obj = { label: null, action: null, IconComponent: null };
          let intl = tmp(1125).intl;
          obj.label = intl.string(tmp(1125).t.oJ1Muw);
          obj.action = function action() {
            ClipboardUtils.copy(commandId);
            ToastUtils.presentIdCopied();
          };
          obj.IconComponent = tmp(10479).IdIcon;
          const items = [obj];
          const obj2 = {
            items,
            children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef9175 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1125).intl;
              obj.accessibilityLabel = intl.string(commandId(1125).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(8014).IconButton, {
                ref: ref.ref,
                size: "sm",
                variant: "secondary-overlay",
                icon: _modDef9175,
              });
            },
          };
          return jsx(tmp(9827).ContextMenu, {
            items,
            children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: _modDef9175 };
              const merged1 = Object.assign(merged);
              const intl = commandId(1125).intl;
              obj.accessibilityLabel = intl.string(commandId(1125).t.PdRCRg);
              obj.maxFontSizeMultiplier = 1.5;
              return jsx(commandId(8014).IconButton, {
                ref: ref.ref,
                size: "sm",
                variant: "secondary-overlay",
                icon: _modDef9175,
              });
            },
          });
        }
      }
      return null;
    };
