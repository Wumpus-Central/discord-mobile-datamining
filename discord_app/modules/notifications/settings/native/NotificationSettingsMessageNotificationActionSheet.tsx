// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  header: { padding: 24, paddingTop: 0 },
  content: null,
  form: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.content = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj2.form = { marginTop: 8, marginBottom: 16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSettingsMessageNotificationActionSheet(value) {
      const cResult = c.c(26);
      const tmp4 = closure_7();
      if (cResult[0] !== value.value) {
        const obj2 = { notificationSetting: value.value };
        const tmp8 = hasOwnProperty(NotificationSettingsMockMessageDefault, obj2);
        cResult[0] = value.value;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.header) {
        if (cResult[3] === tmp5) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", children: null };
          const intl = util.intl;
          obj3.children = intl.string(util.t["1m22ZB"]);
          const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
          const tmp16 = hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" });
          cResult[5] = tmp15;
          cResult[6] = tmp16;
          let tmp13 = tmp16;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        const _Symbol2 = Symbol;
        ({ value, onChange } = value);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t["HVah/3"]);
          cResult[7] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] !== value.allMessagesSubLabel) {
          const obj4 = {
            label: tmp17,
            value: UserNotificationSettings.ALL_MESSAGES,
            subLabel: value.allMessagesSubLabel,
          };
          const tmp22 = hasOwnProperty(TableRadioRow.TableRadioRow, obj4);
          cResult[8] = value.allMessagesSubLabel;
          cResult[9] = tmp22;
          let tmp19 = tmp22;
        } else {
          tmp19 = cResult[9];
        }
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { label: null, value: null };
          const intl3 = util.intl;
          obj5.label = intl3.string(util.t["tu+ZWJ"]);
          obj5.value = UserNotificationSettings.ONLY_MENTIONS;
          const tmp26 = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
          cResult[10] = tmp26;
          let tmp23 = tmp26;
        } else {
          tmp23 = cResult[10];
        }
        const _Symbol4 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { label: null, value: null };
          const intl4 = util.intl;
          obj6.label = intl4.string(util.t.X4wWUi);
          obj6.value = UserNotificationSettings.NO_MESSAGES;
          const tmp30 = hasOwnProperty(TableRadioRow.TableRadioRow, obj6);
          cResult[11] = tmp30;
          let tmp27 = tmp30;
        } else {
          tmp27 = cResult[11];
        }
        if (cResult[12] === value.onChange) {
          if (cResult[13] === value.value) {
            if (cResult[14] === tmp19) {
              let tmp31 = cResult[15];
            }
            if (cResult[16] === tmp4.form) {
              if (cResult[17] === tmp31) {
                let tmp34 = cResult[18];
              }
              if (cResult[19] === tmp4.content) {
                if (cResult[20] === tmp34) {
                  let tmp38 = cResult[21];
                }
                if (cResult[22] === tmp4.sheet) {
                  if (cResult[23] === tmp38) {
                    if (cResult[24] === tmp9) {
                      let tmp42 = cResult[25];
                    }
                    return tmp42;
                  }
                }
                const obj7 = { startExpanded: true, backgroundStyles: tmp4.sheet, children: null };
                const items = [tmp9, tmp38];
                obj7.children = items;
                const tmp44 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj7);
                cResult[22] = tmp4.sheet;
                cResult[23] = tmp38;
                cResult[24] = tmp9;
                cResult[25] = tmp44;
                tmp42 = tmp44;
              }
              const obj8 = { style: tmp4.content, children: null };
              const items1 = [tmp12, tmp13, tmp34];
              obj8.children = items1;
              const tmp41 = timestampProducer(View, obj8);
              cResult[19] = tmp4.content;
              cResult[20] = tmp34;
              cResult[21] = tmp41;
              tmp38 = tmp41;
            }
            const obj9 = { style: tmp4.form, children: tmp31 };
            const tmp37 = hasOwnProperty(View, obj9);
            cResult[16] = tmp4.form;
            cResult[17] = tmp31;
            cResult[18] = tmp37;
            tmp34 = tmp37;
          }
        }
        const obj10 = { defaultValue: value, onChange, hasIcons: false, children: null };
        const items2 = [tmp19, tmp23, tmp27];
        obj10.children = items2;
        const tmp33 = timestampProducer(TableRadioGroup.TableRadioGroup, obj10);
        cResult[12] = value.onChange;
        cResult[13] = value.value;
        cResult[14] = tmp19;
        cResult[15] = tmp33;
        tmp31 = tmp33;
      }
      const tmp10 = hasOwnProperty(View, { style: tmp4.header, children: tmp5 });
      cResult[2] = tmp4.header;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj11 = { style: tmp4.header, children: tmp5 };
    }
  : function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
      const tmp = closure_7();
      const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
      const obj2 = {
        style: tmp.header,
        children: hasOwnProperty(NotificationSettingsMockMessageDefault, { notificationSetting: defaultValue.value }),
      };
      const items = [hasOwnProperty(View, obj2)];
      const obj4 = { style: tmp.content, children: null };
      const obj5 = { variant: "text-sm/semibold", children: null };
      const intl = util.intl;
      obj5.children = intl.string(util.t["1m22ZB"]);
      const items1 = [
        hasOwnProperty(Text_Text.Text, obj5),
        hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" }),
      ];
      const obj6 = { style: tmp.form, children: null };
      const obj7 = {
        defaultValue: defaultValue.value,
        onChange: defaultValue.onChange,
        hasIcons: false,
        children: null,
      };
      const obj8 = { label: null, value: null, subLabel: null };
      const intl2 = util.intl;
      obj8.label = intl2.string(util.t["HVah/3"]);
      obj8.value = UserNotificationSettings.ALL_MESSAGES;
      obj8.subLabel = defaultValue.allMessagesSubLabel;
      const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj8), ,];
      const obj9 = { label: null, value: null };
      const intl3 = util.intl;
      obj9.label = intl3.string(util.t["tu+ZWJ"]);
      obj9.value = UserNotificationSettings.ONLY_MENTIONS;
      items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj9);
      const obj10 = { label: null, value: null };
      const intl4 = util.intl;
      obj10.label = intl4.string(util.t.X4wWUi);
      obj10.value = UserNotificationSettings.NO_MESSAGES;
      items2[2] = hasOwnProperty(TableRadioRow.TableRadioRow, obj10);
      obj7.children = items2;
      obj6.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj7);
      items1[2] = hasOwnProperty(View, obj6);
      obj4.children = items1;
      items[1] = timestampProducer(View, obj4);
      obj.children = items;
      return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
    };
