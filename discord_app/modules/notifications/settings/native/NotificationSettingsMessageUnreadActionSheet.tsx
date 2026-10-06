// === Module 12528: NotificationSettingsMessageUnreadActionSheet ===

// Module 12528 (NotificationSettingsMessageUnreadActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import TableRadioRow3 from "TableRadioRow" /* 6078 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6079 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels" /* 12526 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, header: { padding: 24, paddingTop: 0 }, content: obj3, form: { marginTop: 8, marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let onChange;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(26);
  const tmp4 = closure_7();
  const sheet = tmp4.sheet;
  if (cResult[0] !== value.value) {
    const obj2 = { unreadSetting: value.value };
    const tmp8 = hasOwnProperty(NotificationSettingsMockChannelsDefault, obj2);
    cResult[0] = value.value;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.header) {
    let tmp9;
    let tmp12;
    let tmp15;
    let tmp18;
    let tmp24;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    const content = tmp4.content;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", children: intl.string(intl5.t.Tqd1Af) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      const tmp14 = hasOwnProperty(Text, obj3);
      cResult[5] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(intl5.t.RpQgm5) };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      const tmp17 = hasOwnProperty(Text2, obj4);
      cResult[6] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[6];
    }
    const _Symbol3 = Symbol;
    const form = tmp4.form;
    ({ value, onChange } = value);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { label: intl3.string(intl5.t["HVah/3"]), value: UnreadSetting.ALL_MESSAGES };
      const TableRadioRow = TableRadioRow3.TableRadioRow;
      intl3 = intl5.intl;
      const tmp21 = hasOwnProperty(TableRadioRow, obj5);
      cResult[7] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[7];
    }
    const _Symbol4 = Symbol;
    const disabledMentionOnlyWithReason = value.disabledMentionOnlyWithReason;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl5.intl;
      const stringResult = intl4.string(intl5.t["tu+ZWJ"]);
      cResult[8] = stringResult;
      tmp24 = stringResult;
    } else {
      tmp24 = cResult[8];
    }
    if (cResult[9] === value.disabledMentionOnlyWithReason) {
      let tmp26;
      if (cResult[10] === null != value.disabledMentionOnlyWithReason) {
        tmp26 = cResult[11];
      }
      if (cResult[12] === value.onChange) {
        if (cResult[13] === value.value) {
          let tmp30;
          if (cResult[14] === tmp26) {
            tmp30 = cResult[15];
          }
          if (cResult[16] === tmp4.form) {
            let tmp33;
            if (cResult[17] === tmp30) {
              tmp33 = cResult[18];
            }
            if (cResult[19] === tmp4.content) {
              let tmp37;
              if (cResult[20] === tmp33) {
                tmp37 = cResult[21];
              }
              if (cResult[22] === tmp4.sheet) {
                if (cResult[23] === tmp37) {
                  let tmp41;
                  if (cResult[24] === tmp9) {
                    tmp41 = cResult[25];
                  }
                  return tmp41;
                }
              }
              const obj6 = { startExpanded: true, backgroundStyles: sheet, children: items };
              items = [tmp9, tmp37];
              const tmp43 = metroRequire(Sheet_BottomSheet.BottomSheet, obj6);
              cResult[22] = tmp4.sheet;
              cResult[23] = tmp37;
              cResult[24] = tmp9;
              cResult[25] = tmp43;
              tmp41 = tmp43;
            }
            const obj7 = { style: content, children: items1 };
            items1 = [tmp12, tmp15, tmp33];
            const tmp40 = metroRequire(View, obj7);
            cResult[19] = tmp4.content;
            cResult[20] = tmp33;
            cResult[21] = tmp40;
            tmp37 = tmp40;
          }
          const obj8 = { style: form, children: tmp30 };
          const tmp36 = hasOwnProperty(View, obj8);
          cResult[16] = tmp4.form;
          cResult[17] = tmp30;
          cResult[18] = tmp36;
          tmp33 = tmp36;
        }
      }
      const obj9 = { defaultValue: value, onChange, hasIcons: false, children: items2 };
      items2 = [tmp18, tmp26];
      const tmp32 = metroRequire(TableRadioGroup2.TableRadioGroup, obj9);
      cResult[12] = value.onChange;
      cResult[13] = value.value;
      cResult[14] = tmp26;
      cResult[15] = tmp32;
      tmp30 = tmp32;
    }
    const obj10 = { subLabel: disabledMentionOnlyWithReason, disabled: null != value.disabledMentionOnlyWithReason, label: tmp24, value: UnreadSetting.ONLY_MENTIONS };
    const tmp29 = hasOwnProperty(TableRadioRow3.TableRadioRow, obj10);
    cResult[9] = value.disabledMentionOnlyWithReason;
    cResult[10] = null != value.disabledMentionOnlyWithReason;
    cResult[11] = tmp29;
    tmp26 = tmp29;
  }
  const obj11 = { style: tmp4.header, children: tmp5 };
  const tmp10 = hasOwnProperty(View, obj11);
  cResult[2] = tmp4.header;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((defaultValue) => {
  let TableRadioGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj8;
  const tmp = closure_7();
  const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: items };
  const obj2 = { style: tmp.header, children: hasOwnProperty(NotificationSettingsMockChannelsDefault, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { unreadSetting: defaultValue.value };
  items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: items1 };
  const obj5 = { variant: "text-sm/semibold", children: intl.string(intl5.t.Tqd1Af) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1 = [hasOwnProperty(Text, obj5), , ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(intl5.t.RpQgm5) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items1[1] = hasOwnProperty(Text2, obj6);
  const obj7 = { style: tmp.form, children: metroRequire(TableRadioGroup, obj8) };
  obj8 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: items2 };
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const obj9 = { label: intl3.string(intl5.t["HVah/3"]), value: UnreadSetting.ALL_MESSAGES };
  const TableRadioRow = TableRadioRow3.TableRadioRow;
  intl3 = intl5.intl;
  items2 = [hasOwnProperty(TableRadioRow, obj9), ];
  const obj10 = { subLabel: defaultValue.disabledMentionOnlyWithReason, disabled: null != defaultValue.disabledMentionOnlyWithReason, label: intl4.string(intl5.t["tu+ZWJ"]), value: UnreadSetting.ONLY_MENTIONS };
  const TableRadioRow2 = TableRadioRow3.TableRadioRow;
  intl4 = intl5.intl;
  items2[1] = hasOwnProperty(TableRadioRow2, obj10);
  items1[2] = hasOwnProperty(View, obj7);
  items[1] = metroRequire(View, obj4);
  return metroRequire(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx");

export default tmp5;