// === Module 5766: Dialog ===

// Module 5766 (Dialog)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AccessibilityView2 from "AccessibilityView" /* 5767 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["dialogKey", "onDismiss", "zIndex"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let dialogKey;
  let onDismiss;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let zIndex;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ dialogKey, onDismiss, zIndex } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = dialogKey;
    cResult[2] = onDismiss;
    cResult[3] = tmp10;
    cResult[4] = zIndex;
    tmp7 = zIndex;
    tmp6 = tmp10;
    tmp5 = onDismiss;
    tmp4 = dialogKey;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const id = react.useId();
  if (cResult[5] !== tmp7) {
    const items = [StyleSheet.absoluteFill, ];
    const obj2 = { zIndex: tmp7 };
    items[1] = obj2;
    cResult[5] = tmp7;
    cResult[6] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[6];
  }
  if (tmp4 == null) {
    tmp4 = id;
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp12) {
      if (cResult[9] === tmp4) {
        let tmp14;
        if (cResult[10] === tmp6) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const AccessibilityView = AccessibilityView2.AccessibilityView;
  const merged = Object.assign(tmp6);
  const tmp16 = <AccessibilityView style={tmp12} accessibilityViewIsModal onAccessibilityEscape={tmp5} nativeID={tmp4} />;
  cResult[7] = tmp5;
  cResult[8] = tmp12;
  cResult[9] = tmp4;
  cResult[10] = tmp6;
  cResult[11] = tmp16;
  tmp14 = tmp16;
}) : ((dialogKey) => {
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.assign({ dialogKey: 0, onDismiss: 0, zIndex: 0 }));
  const id = react.useId();
  const items = [StyleSheet.absoluteFill, { zIndex }];
  const AccessibilityView = AccessibilityView2.AccessibilityView;
  if (dialogKey == null) {
    dialogKey = id;
  }
  const merged1 = Object.assign(merged);
  return <AccessibilityView style={items} accessibilityViewIsModal onAccessibilityEscape={onDismiss} nativeID={dialogKey} />;
});
const result = size.fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = tmp2;