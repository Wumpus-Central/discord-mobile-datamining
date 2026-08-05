// discord_app/modules/billing/native/UnsupportedFeatureModal.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  obj = { Unsupported: null };
  obj = { title: onDismiss.title, headerLeft: null, render: null };
  obj[1] = onDismiss(5238).getHeaderCloseButton(() => {
    let arr = outer1_1(outer1_2[5]);
    arr = arr.pop();
    if (onDismiss != null) {
      onDismiss();
    }
  });
  obj[2] = function render() {
    let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
    obj = { variant: "text-lg/normal", color: "text-default", children: null };
    const intl = onDismiss(1236).intl;
    obj[2] = intl.string(onDismiss(1236).t.I22zuX);
    obj[1] = callback(onDismiss(4281).Text, obj);
    return callback(closure_3, obj);
  };
  obj[0] = obj;
  obj[1] = obj;
  return jsx(onDismiss(5665).Navigator, { title: onDismiss.title, headerLeft: null, render: null });
};