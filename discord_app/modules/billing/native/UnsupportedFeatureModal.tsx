// discord_app/modules/billing/native/UnsupportedFeatureModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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