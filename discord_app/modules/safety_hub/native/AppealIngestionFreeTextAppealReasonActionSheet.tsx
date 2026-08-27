// === Module 11395: AppealIngestionFreeTextAppealReasonActionSheet ===

// Module 11395 (AppealIngestionFreeTextAppealReasonActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11368 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 }, separator: null, closeIcon: null };
createCacheKey = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default function AppealIngestionFreeTextAppealReasonActionSheet(onPress) {
  const onSave = onPress.onSave;
  let first;
  const tmp = callback4();
  let obj = onSave(first[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  const tmp5 = callback(React.useState(stateFromStores), 2);
  first = tmp5[0];
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
  const stringResult1 = intl3.string(onSave(first[8]).t["Rk+uJx"]);
  const items1 = [callback2(onSave(first[11]).PressableOpacity, { onPress: onPress.onClose, style: tmp.closeIcon, children: callback2(onSave(first[12]).XSmallIcon, { size: "md" }) }), callback2(onSave(first[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , , ];
  const obj2 = { maxLength: 1024, placeholder: null, containerStyle: null, value: null, onChange: null };
  const intl4 = tmp2(tmp3[8]).intl;
  obj2[1] = intl4.string(onSave(first[8]).t.bQrZIN);
  obj2[2] = tmp.textArea;
  obj2[3] = first;
  obj2[4] = tmp5[1];
  items1[2] = callback2(onSave(first[14]).TextArea, obj2);
  items1[3] = callback2(View, { style: tmp.separator });
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: null };
  const intl5 = tmp2(tmp3[8]).intl;
  obj4[3] = intl5.string(onSave(first[8]).t.xfNY3L);
  items1[4] = callback2(onSave(first[15]).Text, obj4);
  const obj5 = {
    onPress() {
      return onSave(first);
    },
    text: null
  };
  const intl6 = tmp2(tmp3[8]).intl;
  obj5[1] = intl6.string(onSave(first[8]).t["R3BPH+"]);
  items1[5] = callback2(onSave(first[16]).Button, obj5);
  obj[1] = items1;
  obj[1] = callback3(onSave(first[10]).Stack, obj);
  return callback2(onSave(first[9]).BottomSheet, obj);
};