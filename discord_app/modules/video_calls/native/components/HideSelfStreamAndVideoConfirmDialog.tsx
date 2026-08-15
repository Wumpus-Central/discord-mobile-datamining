// discord_app/modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { SelfStreamAndVideoAlertType as closure_4 } from "SelfStreamAndVideoAlertType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { componentDidMount } from "../../../../components_native/common/Alert.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" } });
let result = require("SelfStreamAndVideoAlertType").fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  let onConfirm;
  let type;
  ({ type, onConfirm } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1236).intl;
    let stringResult = intl2.string(onConfirm(1236).t["/lFMWr"]);
    let tmp6 = onConfirm;
  } else {
    const intl = onConfirm(1236).intl;
    tmp6 = onConfirm;
    stringResult = intl.string(onConfirm(1236).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = tmp6(1236).intl;
    let stringResult1 = intl4.string(tmp6(1236).t.xaOX7d);
  } else {
    const intl3 = tmp6(1236).intl;
    stringResult1 = intl3.string(tmp6(1236).t.oU1p9O);
  }
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.title = stringResult;
  obj.style = tmp2.wrapper;
  const intl5 = tmp6(1236).intl;
  obj.cancelText = intl5.string(tmp6(1236).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onCancel = onClose;
  const intl6 = tmp6(1236).intl;
  obj.confirmText = intl6.string(tmp6(1236).t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj = { style: tmp2.body, children: null };
  obj = { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 };
  const items = [closure_5(tmp6(4734).Text, obj), ];
  const obj1 = {
    accessibilityRole: "link",
    style: items1,
    onPress() {
      const result = outer1_1(outer1_2[8]).updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium",
    children: null
  };
  items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
  const intl7 = tmp6(1236).intl;
  obj1[4] = intl7.string(tmp6(1236).t["JdIQ/Y"]);
  items[1] = closure_5(tmp6(4734).Text, obj1);
  obj[1] = items;
  obj.children = callback(View, obj);
  return closure_5(componentDidMount, obj);
};