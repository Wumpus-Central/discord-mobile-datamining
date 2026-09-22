// discord_app/modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  footerText: { textAlign: "center" },
  textArea: { marginTop: -16, marginBottom: 36 },
  separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 },
  closeIcon: { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx",
);

export default function AppealIngestionFreeTextAppealReasonActionSheet(onPress) {
  const onSave = onPress.onSave;
  value = undefined;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  const stateFromStores = onSave(value[7]).useStateFromStores(items, () =>
    freeTextAppealReason.getFreeTextAppealReason(),
  );
  [value, obj5.onChange] = noop.useState(stateFromStores);
  if ("" === stateFromStores) {
    const intl2 = tmp2(tmp3[8]).intl;
    let stringResult = intl2.string(tmp2(tmp3[8]).t.uoQFIp);
  } else {
    const intl = tmp2(tmp3[8]).intl;
    stringResult = intl.string(tmp2(tmp3[8]).t.tnE3bZ);
  }
  const intl3 = tmp2(tmp3[8]).intl;
  const obj = onSave(value[7]);
  const obj2 = { startExpanded: true, children: null };
  const obj3 = { spacing: 16, children: null };
  const stringResult1 = intl3.string(onSave(value[8]).t["Rk+uJx"]);
  const items1 = [
    closure_6(onSave(value[11]).PressableOpacity, {
      onPress: onPress.onClose,
      style: tmp.closeIcon,
      children: closure_6(onSave(value[12]).XSmallIcon, { size: "md" }),
    }),
    closure_6(onSave(value[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }),
    ,
    ,
    ,
  ];
  const obj5 = { maxLength: 1024, placeholder: null, containerStyle: null, value: null, onChange: null };
  const intl4 = tmp2(tmp3[8]).intl;
  obj5.placeholder = intl4.string(onSave(value[8]).t.bQrZIN);
  obj5.containerStyle = tmp.textArea;
  obj5.value = value;
  items1[2] = closure_6(onSave(value[14]).TextArea, obj5);
  items1[3] = closure_6(View, { style: tmp.separator });
  const obj7 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: null };
  const intl5 = tmp2(tmp3[8]).intl;
  obj7.children = intl5.string(onSave(value[8]).t.xfNY3L);
  items1[4] = closure_6(onSave(value[15]).Text, obj7);
  const obj8 = {
    onPress() {
      return onSave(first);
    },
    text: null,
  };
  const intl6 = tmp2(tmp3[8]).intl;
  obj8.text = intl6.string(onSave(value[8]).t["R3BPH+"]);
  items1[5] = closure_6(onSave(value[16]).Button, obj8);
  obj3.children = items1;
  obj2.children = closure_7(onSave(value[10]).Stack, obj3);
  return closure_6(onSave(value[9]).BottomSheet, obj2);
}
