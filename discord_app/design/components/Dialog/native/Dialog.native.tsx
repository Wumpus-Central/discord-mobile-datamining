// discord_app/design/components/Dialog/native/Dialog.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import AccessibilityView from "../../AccessibilityView/AccessibilityView.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["dialogKey", "onDismiss", "zIndex"];
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = ReactCompilerGating.isReactCompilerEnabled()
  ? function Dialog(arg0) {
      const cResult = c.c(12);
      if (cResult[0] !== arg0) {
        ({ dialogKey, onDismiss, zIndex } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = dialogKey;
        cResult[2] = onDismiss;
        cResult[3] = tmp10;
        cResult[4] = zIndex;
        let tmp7 = zIndex;
        let tmp6 = tmp10;
        let tmp5 = onDismiss;
        let tmp4 = dialogKey;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const id = noop.useId();
      if (cResult[5] !== tmp7) {
        const items = [StyleSheet.absoluteFill];
        const obj2 = { zIndex: tmp7 };
        items[1] = obj2;
        cResult[5] = tmp7;
        cResult[6] = items;
        let tmp12 = items;
      } else {
        tmp12 = cResult[6];
      }
      if (tmp4 == null) {
        tmp4 = id;
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp12) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp6) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
      }
      const merged = Object.assign(tmp6);
      const tmp16 = jsx(AccessibilityView.AccessibilityView, {
        style: tmp12,
        accessibilityViewIsModal: true,
        onAccessibilityEscape: tmp5,
        nativeID: tmp4,
      });
      cResult[7] = tmp5;
      cResult[8] = tmp12;
      cResult[9] = tmp4;
      cResult[10] = tmp6;
      cResult[11] = tmp16;
      tmp14 = tmp16;
      const obj3 = { style: tmp12, accessibilityViewIsModal: true, onAccessibilityEscape: tmp5, nativeID: tmp4 };
    }
  : function Dialog(dialogKey) {
      dialogKey = dialogKey.dialogKey;
      ({ onDismiss, zIndex } = dialogKey);
      const merged = Object.assign(dialogKey, Object.assign({ dialogKey: 0, onDismiss: 0, zIndex: 0 }));
      const id = noop.useId();
      const obj = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null };
      const items = [StyleSheet.absoluteFill, { zIndex }];
      obj.style = items;
      if (dialogKey == null) {
        dialogKey = id;
      }
      obj.nativeID = dialogKey;
      const merged1 = Object.assign(merged);
      return jsx(AccessibilityView.AccessibilityView, {
        style: null,
        accessibilityViewIsModal: true,
        onAccessibilityEscape: onDismiss,
        nativeID: null,
      });
    };
