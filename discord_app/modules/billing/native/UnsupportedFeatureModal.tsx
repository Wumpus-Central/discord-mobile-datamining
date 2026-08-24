// === Module 9630: UnsupportedFeatureModal ===

// Module 9630 (UnsupportedFeatureModal)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  obj = { Unsupported: null };
  obj = {
    title: onDismiss.title,
    headerLeft: onDismiss(6345).getHeaderCloseButton(() => {
      let arr = closure_1_1(closure_1_2[5]);
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1236).intl;
      obj[2] = intl.string(onDismiss(1236).t.I22zuX);
      obj[1] = callback(onDismiss(4739).Text, obj);
      return callback(closure_3, obj);
    }
  };
  obj[0] = obj;
  obj[1] = obj;
  return jsx(onDismiss(6343).Navigator, {
    title: onDismiss.title,
    headerLeft: onDismiss(6345).getHeaderCloseButton(() => {
      let arr = closure_1_1(closure_1_2[5]);
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1236).intl;
      obj[2] = intl.string(onDismiss(1236).t.I22zuX);
      obj[1] = callback(onDismiss(4739).Text, obj);
      return callback(closure_3, obj);
    }
  });
};