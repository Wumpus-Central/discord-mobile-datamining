// discord_app/modules/billing/native/UnsupportedFeatureModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  obj = { Unsupported: null };
  obj = {
    title: onDismiss.title,
    headerLeft: onDismiss(5495).getHeaderCloseButton(() => {
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
      obj[1] = callback(onDismiss(4474).Text, obj);
      return callback(closure_3, obj);
    }
  };
  obj[0] = obj;
  obj[1] = obj;
  return jsx(onDismiss(6008).Navigator, {
    title: onDismiss.title,
    headerLeft: onDismiss(5495).getHeaderCloseButton(() => {
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
      obj[1] = callback(onDismiss(4474).Text, obj);
      return callback(closure_3, obj);
    }
  });
};