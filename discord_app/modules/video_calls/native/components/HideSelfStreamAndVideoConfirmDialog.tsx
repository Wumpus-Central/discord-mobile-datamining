// discord_app/modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const constants = fn(17687).SelfStreamAndVideoAlertType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({
  wrapper: { padding: 16 },
  body: { paddingTop: 16 },
  description: { lineHeight: 18 },
  ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" },
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx",
);

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  ({ type, onConfirm } = arg0);
  const merged = Object.assign(arg0, Object.assign({ type: 0, onConfirm: 0 }));
  const tmp2 = closure_7();
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1115).intl;
    let stringResult = intl2.string(onConfirm(1115).t["/lFMWr"]);
    let tmp6 = onConfirm;
  } else {
    const intl = onConfirm(1115).intl;
    tmp6 = onConfirm;
    stringResult = intl.string(onConfirm(1115).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = tmp6(1115).intl;
    let stringResult1 = intl4.string(tmp6(1115).t.xaOX7d);
  } else {
    const intl3 = tmp6(1115).intl;
    stringResult1 = intl3.string(tmp6(1115).t.oU1p9O);
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.title = stringResult;
  obj.style = tmp2.wrapper;
  const intl5 = tmp6(1115).intl;
  obj.cancelText = intl5.string(tmp6(1115).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onCancel = onClose;
  const intl6 = tmp6(1115).intl;
  obj.confirmText = intl6.string(tmp6(1115).t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  const obj2 = { style: tmp2.body, children: null };
  const items = [
    closure_5(tmp6(4753).Text, { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 }),
  ];
  const obj4 = {
    accessibilityRole: "link",
    style: null,
    onPress() {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: true,
      });
      onConfirm();
    },
    variant: "text-sm/medium",
    children: null,
  };
  const items1 = [,];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
  obj4.style = items1;
  const intl7 = tmp6(1115).intl;
  obj4.children = intl7.string(tmp6(1115).t["JdIQ/Y"]);
  items[1] = closure_5(tmp6(4753).Text, obj4);
  obj2.children = items;
  obj.children = closure_6(View, obj2);
  return closure_5(common_AlertDefault, obj);
}
