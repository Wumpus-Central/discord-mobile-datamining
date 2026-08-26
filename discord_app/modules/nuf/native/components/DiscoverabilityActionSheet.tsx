// === Module 12377: DiscoverabilityActionSheet ===

// Module 12377 (DiscoverabilityActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ContactSyncModes from "ContactSyncModes" /* 12305 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ useContactSyncModalStore: c4, setAllowSync: c5, setAllowPhone: closure_6, setAllowEmail: error } = ContactSyncModes);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, formRow: null, syncRow: null, formText: null, info: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 8, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[2] = { marginTop: 24 };
let obj1 = { marginTop: 8, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj2 = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[4] = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: ThemesDefault.colors.TEXT_SUBTLE };
const result = require("set").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default function DiscoverabilityActionSheet() {
  const tmp = callback4();
  const tmp2 = callback();
  const allowPhone = tmp2.allowPhone;
  let allowEmail = tmp2.allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  allowEmail = tmp3;
  const items = [tmp3];
  const items1 = [allowPhone];
  callback = allowEmail.useCallback(() => {
    closure_1_5(!allowEmail);
  }, items);
  const items2 = [allowEmail];
  const callback1 = allowEmail.useCallback(() => {
    closure_1_6(!allowPhone);
  }, items1);
  let obj = { style: tmp.container, children: null };
  const callback2 = allowEmail.useCallback(() => {
    closure_1_7(!allowEmail);
  }, items2);
  obj = { DEPRECATED_style: items3, label: null, onPress: null, trailing: null };
  items3 = [, ];
  ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
  obj = { style: tmp.formText, text: null };
  const intl = allowPhone(allowEmail[8]).intl;
  obj[1] = intl.string(allowPhone(allowEmail[8]).t.gMUgpv);
  obj[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj);
  obj[2] = callback;
  obj[3] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: tmp3 });
  const items4 = [callback2(allowPhone(allowEmail[7]).FormRow, obj), , , , , , ];
  obj1 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj1[1] = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items4[1] = callback2(allowPhone(allowEmail[7]).FormText, obj1);
  const obj2 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj2[1] = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items4[2] = callback2(allowPhone(allowEmail[7]).FormText, obj2);
  const obj3 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj3[1] = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children) {
      return callback(allowPhone(allowEmail[9]).Text, { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items4[3] = callback2(allowPhone(allowEmail[7]).FormText, obj3);
  const obj5 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj5[0] = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  items4[4] = callback2(allowPhone(allowEmail[7]).FormTitle, obj5);
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj7[1] = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj6[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj7);
  const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj8[2] = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj6[2] = callback2(allowPhone(allowEmail[9]).Text, obj8);
  obj6[3] = callback1;
  obj6[4] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items4[5] = callback2(allowPhone(allowEmail[7]).FormRow, obj6);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj10[1] = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj9[1] = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj11[2] = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj9[2] = callback2(allowPhone(allowEmail[9]).Text, obj11);
  obj9[3] = callback2;
  obj9[4] = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items4[6] = callback2(allowPhone(allowEmail[7]).FormRow, obj9);
  obj[1] = items4;
  const children = callback3(View, obj);
  return callback2(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};