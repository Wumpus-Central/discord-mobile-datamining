// === Module 17212: HideSelfStreamAndVideoConfirmDialog ===

// Module 17212 (HideSelfStreamAndVideoConfirmDialog)
import common_AlertDefault from "common/Alert" /* 4994 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const constants = fn(17211).SelfStreamAndVideoAlertType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  ({ type, onConfirm } = arg0);
  const merged = Object.assign(arg0, Object.assign({ type: 0, onConfirm: 0 }));
  const tmp2 = closure_7();
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1114).intl;
    let stringResult = intl2.string(onConfirm(1114).t["/lFMWr"]);
    let tmp6 = onConfirm;
  } else {
    const intl = onConfirm(1114).intl;
    tmp6 = onConfirm;
    stringResult = intl.string(onConfirm(1114).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = tmp6(1114).intl;
    let stringResult1 = intl4.string(tmp6(1114).t.xaOX7d);
  } else {
    const intl3 = tmp6(1114).intl;
    stringResult1 = intl3.string(tmp6(1114).t.oU1p9O);
  }
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.title = stringResult;
  obj.style = tmp2.wrapper;
  const intl5 = tmp6(1114).intl;
  obj.cancelText = intl5.string(tmp6(1114).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onCancel = onClose;
  const intl6 = tmp6(1114).intl;
  obj.confirmText = intl6.string(tmp6(1114).t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj = { style: tmp2.body, children: null };
  obj = { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 };
  const items = [closure_5(tmp6(4556).Text, obj), ];
  const obj1 = {
    accessibilityRole: "link",
    style: null,
    onPress() {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium",
    children: null
  };
  const items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
  obj1.style = items1;
  const intl7 = tmp6(1114).intl;
  obj1.children = intl7.string(tmp6(1114).t["JdIQ/Y"]);
  items[1] = closure_5(tmp6(4556).Text, obj1);
  obj.children = items;
  obj.children = closure_6(View, obj);
  return closure_5(common_AlertDefault, obj);
};