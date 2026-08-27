// === Module 12139: ContactSyncSettingsActionSheet ===

// Module 12139 (ContactSyncSettingsActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ContactSyncModes from "ContactSyncModes" /* 12129 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
noopAll;
({ setAllowEmail: c3, setAllowPhone: c4, setAllowSync: c5, useContactSyncModalStore: closure_6 } = ContactSyncModes);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, formRow: null, syncRow: null, formText: null, info: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 8, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[2] = { marginTop: 24 };
let obj1 = { marginTop: 8, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj2 = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[4] = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: ThemesDefault.colors.TEXT_SUBTLE };
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default function ContactSyncSettingsActionSheet() {
  const tmp = callback4();
  const tmp2 = callback();
  const allowPhone = tmp2.allowPhone;
  let allowEmail = tmp2.allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  allowEmail = tmp3;
  let obj = { style: tmp.container, children: null };
  obj = { DEPRECATED_style: items, label: null, onPress: null, trailing: null };
  items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  obj = { style: tmp.formText, text: null };
  const intl = allowPhone(allowEmail[8]).intl;
  obj[1] = intl.string(allowPhone(allowEmail[8]).t.a5QL24);
  obj[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj);
  obj[2] = function onPress() {
    closure_1_5(!allowEmail);
  };
  obj[3] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: tmp3 });
  const items1 = [callback2(allowPhone(allowEmail[7]).FormRow, obj), , , , , , ];
  obj1 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj1[1] = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items1[1] = callback2(allowPhone(allowEmail[7]).FormText, obj1);
  const obj2 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj2[1] = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items1[2] = callback2(allowPhone(allowEmail[7]).FormText, obj2);
  const obj3 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj3[1] = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children) {
      return callback(allowPhone(allowEmail[9]).Text, { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items1[3] = callback2(allowPhone(allowEmail[7]).FormText, obj3);
  const obj5 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj5[0] = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  items1[4] = callback2(allowPhone(allowEmail[7]).FormTitle, obj5);
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj7[1] = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj6[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj7);
  const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj8[2] = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj6[2] = callback2(allowPhone(allowEmail[9]).Text, obj8);
  obj6[3] = function onPress() {
    closure_1_4(!allowPhone);
  };
  obj6[4] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items1[5] = callback2(allowPhone(allowEmail[7]).FormRow, obj6);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj10[1] = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj9[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj11[2] = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj9[2] = callback2(allowPhone(allowEmail[9]).Text, obj11);
  obj9[3] = function onPress() {
    closure_1_3(!allowEmail);
  };
  obj9[4] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items1[6] = callback2(allowPhone(allowEmail[7]).FormRow, obj9);
  obj[1] = items1;
  const children = callback3(allowEmail, obj);
  return callback2(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};