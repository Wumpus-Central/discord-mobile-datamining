// === Module 9593: UnsupportedFeatureModal ===

// Module 9593 (UnsupportedFeatureModal)
import noopAll from "noop" /* 19 */;
import _modDef5260 from "module_5260" /* 5260 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = {
    title: onDismiss.title,
    headerLeft: onDismiss(6314).getHeaderCloseButton(() => {
      let arr = _modDef5260;
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      const obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1236).intl;
      obj[2] = intl.string(onDismiss(1236).t.I22zuX);
      obj[1] = callback(onDismiss(4734).Text, obj);
      return callback(closure_3, obj);
    }
  };
  obj[0] = obj;
  obj[1] = obj;
  return jsx(onDismiss(6312).Navigator, {
    title: onDismiss.title,
    headerLeft: onDismiss(6314).getHeaderCloseButton(() => {
      let arr = _modDef5260;
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      const obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1236).intl;
      obj[2] = intl.string(onDismiss(1236).t.I22zuX);
      obj[1] = callback(onDismiss(4734).Text, obj);
      return callback(closure_3, obj);
    }
  });
};