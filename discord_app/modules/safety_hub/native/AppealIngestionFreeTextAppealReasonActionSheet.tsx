// === Module 11902: AppealIngestionFreeTextAppealReasonActionSheet ===

// Module 11902 (AppealIngestionFreeTextAppealReasonActionSheet)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 }, separator: null, closeIcon: null };
createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 };
createStyles.separator = createStyles;
createStyles.closeIcon = { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default function AppealIngestionFreeTextAppealReasonActionSheet(onPress) {
  const onSave = onPress.onSave;
  value = undefined;
  const tmp = closure_8();
  let obj = onSave(value[7]);
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  const tmp5 = _slicedToArray(noop.useState(stateFromStores), 2);
  value = tmp5[0];
  if ("" === stateFromStores) {
    const intl2 = tmp2(tmp3[8]).intl;
    let stringResult = intl2.string(tmp2(tmp3[8]).t.uoQFIp);
  } else {
    const intl = tmp2(tmp3[8]).intl;
    stringResult = intl.string(tmp2(tmp3[8]).t.tnE3bZ);
  }
  const intl3 = tmp2(tmp3[8]).intl;
  obj = { startExpanded: true, children: null };
  obj = { spacing: 16, children: null };
  const stringResult1 = intl3.string(onSave(value[8]).t["Rk+uJx"]);
  const items1 = [closure_6(onSave(value[11]).PressableOpacity, { onPress: onPress.onClose, style: tmp.closeIcon, children: closure_6(onSave(value[12]).XSmallIcon, { size: "md" }) }), closure_6(onSave(value[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , , ];
  const obj2 = { maxLength: 1024, placeholder: null, containerStyle: null, value: null, onChange: null };
  const intl4 = tmp2(tmp3[8]).intl;
  obj2.placeholder = intl4.string(onSave(value[8]).t.bQrZIN);
  obj2.containerStyle = tmp.textArea;
  obj2.value = value;
  obj2.onChange = tmp5[1];
  items1[2] = closure_6(onSave(value[14]).TextArea, obj2);
  items1[3] = closure_6(View, { style: tmp.separator });
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: null };
  const intl5 = tmp2(tmp3[8]).intl;
  obj4.children = intl5.string(onSave(value[8]).t.xfNY3L);
  items1[4] = closure_6(onSave(value[15]).Text, obj4);
  const obj5 = {
    onPress() {
      return onSave(first);
    },
    text: null
  };
  const intl6 = tmp2(tmp3[8]).intl;
  obj5.text = intl6.string(onSave(value[8]).t["R3BPH+"]);
  items1[5] = closure_6(onSave(value[16]).Button, obj5);
  obj.children = items1;
  obj.children = closure_7(onSave(value[10]).Stack, obj);
  return closure_6(onSave(value[9]).BottomSheet, obj);
};