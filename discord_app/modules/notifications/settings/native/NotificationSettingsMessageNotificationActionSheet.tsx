// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioRow4 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  sheet: obj2,
  header: { padding: 24, paddingTop: 0 },
  content: obj3,
  form: { marginTop: 8, marginBottom: 16 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (value) => {
      let intl;
      let intl3;
      let intl4;
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
        const obj2 = { notificationSetting: value.value };
        const tmp8 = hasOwnProperty(NotificationSettingsMockMessageDefault, obj2);
        cResult[0] = value.value;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.header) {
        let tmp9;
        let tmp13;
        let tmp12;
        let tmp17;
        let tmp19;
        let tmp23;
        let tmp27;
        if (cResult[3] === tmp5) {
          tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        const content = tmp4.content;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", children: intl.string(intl5.t["1m22ZB"]) };
          const Text = Text_Text.Text;
          intl = intl5.intl;
          const tmp15 = hasOwnProperty(Text, obj3);
          const tmp16 = hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" });
          cResult[5] = tmp15;
          cResult[6] = tmp16;
          tmp13 = tmp16;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        const _Symbol2 = Symbol;
        const form = tmp4.form;
        ({ value, onChange } = value);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult = intl2.string(intl5.t["HVah/3"]);
          cResult[7] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] !== value.allMessagesSubLabel) {
          const obj4 = {
            label: tmp17,
            value: UserNotificationSettings.ALL_MESSAGES,
            subLabel: value.allMessagesSubLabel,
          };
          const tmp22 = hasOwnProperty(TableRadioRow4.TableRadioRow, obj4);
          cResult[8] = value.allMessagesSubLabel;
          cResult[9] = tmp22;
          tmp19 = tmp22;
        } else {
          tmp19 = cResult[9];
        }
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { label: intl3.string(intl5.t["tu+ZWJ"]), value: UserNotificationSettings.ONLY_MENTIONS };
          const TableRadioRow = TableRadioRow4.TableRadioRow;
          intl3 = intl5.intl;
          const tmp26 = hasOwnProperty(TableRadioRow, obj5);
          cResult[10] = tmp26;
          tmp23 = tmp26;
        } else {
          tmp23 = cResult[10];
        }
        const _Symbol4 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { label: intl4.string(intl5.t.X4wWUi), value: UserNotificationSettings.NO_MESSAGES };
          const TableRadioRow2 = TableRadioRow4.TableRadioRow;
          intl4 = intl5.intl;
          const tmp30 = hasOwnProperty(TableRadioRow2, obj6);
          cResult[11] = tmp30;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[11];
        }
        if (cResult[12] === value.onChange) {
          if (cResult[13] === value.value) {
            let tmp31;
            if (cResult[14] === tmp19) {
              tmp31 = cResult[15];
            }
            if (cResult[16] === tmp4.form) {
              let tmp34;
              if (cResult[17] === tmp31) {
                tmp34 = cResult[18];
              }
              if (cResult[19] === tmp4.content) {
                let tmp38;
                if (cResult[20] === tmp34) {
                  tmp38 = cResult[21];
                }
                if (cResult[22] === tmp4.sheet) {
                  if (cResult[23] === tmp38) {
                    let tmp42;
                    if (cResult[24] === tmp9) {
                      tmp42 = cResult[25];
                    }
                    return tmp42;
                  }
                }
                const obj7 = { startExpanded: true, backgroundStyles: sheet, children: items };
                items = [tmp9, tmp38];
                const tmp44 = metroRequire(Sheet_BottomSheet.BottomSheet, obj7);
                cResult[22] = tmp4.sheet;
                cResult[23] = tmp38;
                cResult[24] = tmp9;
                cResult[25] = tmp44;
                tmp42 = tmp44;
              }
              const obj8 = { style: content, children: items1 };
              items1 = [tmp12, tmp13, tmp34];
              const tmp41 = metroRequire(View, obj8);
              cResult[19] = tmp4.content;
              cResult[20] = tmp34;
              cResult[21] = tmp41;
              tmp38 = tmp41;
            }
            const obj9 = { style: form, children: tmp31 };
            const tmp37 = hasOwnProperty(View, obj9);
            cResult[16] = tmp4.form;
            cResult[17] = tmp31;
            cResult[18] = tmp37;
            tmp34 = tmp37;
          }
        }
        const obj10 = { defaultValue: value, onChange, hasIcons: false, children: items2 };
        items2 = [tmp19, tmp23, tmp27];
        const tmp33 = metroRequire(TableRadioGroup2.TableRadioGroup, obj10);
        cResult[12] = value.onChange;
        cResult[13] = value.value;
        cResult[14] = tmp19;
        cResult[15] = tmp33;
        tmp31 = tmp33;
      }
      const obj11 = { style: tmp4.header, children: tmp5 };
      const tmp10 = hasOwnProperty(View, obj11);
      cResult[2] = tmp4.header;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (defaultValue) => {
      let TableRadioGroup;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj3;
      let obj7;
      const tmp = closure_7();
      const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: items };
      const obj2 = { style: tmp.header, children: hasOwnProperty(NotificationSettingsMockMessageDefault, obj3) };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj3 = { notificationSetting: defaultValue.value };
      items = [hasOwnProperty(View, obj2)];
      const obj4 = { style: tmp.content, children: items1 };
      const obj5 = { variant: "text-sm/semibold", children: intl.string(intl5.t["1m22ZB"]) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items1 = [
        hasOwnProperty(Text, obj5),
        hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" }),
      ];
      const obj6 = { style: tmp.form, children: metroRequire(TableRadioGroup, obj7) };
      obj7 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: items2 };
      TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      const obj8 = {
        label: intl2.string(intl5.t["HVah/3"]),
        value: UserNotificationSettings.ALL_MESSAGES,
        subLabel: defaultValue.allMessagesSubLabel,
      };
      const TableRadioRow = TableRadioRow4.TableRadioRow;
      intl2 = intl5.intl;
      items2 = [hasOwnProperty(TableRadioRow, obj8), ,];
      const obj9 = { label: intl3.string(intl5.t["tu+ZWJ"]), value: UserNotificationSettings.ONLY_MENTIONS };
      const TableRadioRow2 = TableRadioRow4.TableRadioRow;
      intl3 = intl5.intl;
      items2[1] = hasOwnProperty(TableRadioRow2, obj9);
      const obj10 = { label: intl4.string(intl5.t.X4wWUi), value: UserNotificationSettings.NO_MESSAGES };
      const TableRadioRow3 = TableRadioRow4.TableRadioRow;
      intl4 = intl5.intl;
      items2[2] = hasOwnProperty(TableRadioRow3, obj10);
      items1[2] = hasOwnProperty(View, obj6);
      items[1] = metroRequire(View, obj4);
      return metroRequire(BottomSheet, obj);
    };
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx",
);

export default tmp5;
