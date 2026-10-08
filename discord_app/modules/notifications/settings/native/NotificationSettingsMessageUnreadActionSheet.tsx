// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(5972).UnreadSetting;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
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
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSettingsMessageUnreadActionSheet(value) {
      const cResult = c.c(26);
      const tmp4 = closure_7();
      if (cResult[0] !== value.value) {
        const obj2 = { unreadSetting: value.value };
        const tmp8 = hasOwnProperty(NotificationSettingsMockChannelsDefault, obj2);
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
          obj3.children = intl.string(util.t.Tqd1Af);
          const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl2 = util.intl;
          obj4.children = intl2.string(util.t.RpQgm5);
          const tmp17 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[6] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[6];
        }
        const _Symbol3 = Symbol;
        ({ value, onChange } = value);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { label: null, value: null };
          const intl3 = util.intl;
          obj5.label = intl3.string(util.t["HVah/3"]);
          obj5.value = UnreadSetting.ALL_MESSAGES;
          const tmp21 = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
          cResult[7] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[7];
        }
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult = intl4.string(util.t["tu+ZWJ"]);
          cResult[8] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[8];
        }
        if (cResult[9] === value.disabledMentionOnlyWithReason) {
          if (cResult[10] === tmp23) {
            let tmp26 = cResult[11];
          }
          if (cResult[12] === value.onChange) {
            if (cResult[13] === value.value) {
              if (cResult[14] === tmp26) {
                let tmp30 = cResult[15];
              }
              if (cResult[16] === tmp4.form) {
                if (cResult[17] === tmp30) {
                  let tmp33 = cResult[18];
                }
                if (cResult[19] === tmp4.content) {
                  if (cResult[20] === tmp33) {
                    let tmp37 = cResult[21];
                  }
                  if (cResult[22] === tmp4.sheet) {
                    if (cResult[23] === tmp37) {
                      if (cResult[24] === tmp9) {
                        let tmp41 = cResult[25];
                      }
                      return tmp41;
                    }
                  }
                  const obj6 = { startExpanded: true, backgroundStyles: tmp4.sheet, children: null };
                  const items = [tmp9, tmp37];
                  obj6.children = items;
                  const tmp43 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj6);
                  cResult[22] = tmp4.sheet;
                  cResult[23] = tmp37;
                  cResult[24] = tmp9;
                  cResult[25] = tmp43;
                  tmp41 = tmp43;
                }
                const obj7 = { style: tmp4.content, children: null };
                const items1 = [tmp12, tmp15, tmp33];
                obj7.children = items1;
                const tmp40 = timestampProducer(View, obj7);
                cResult[19] = tmp4.content;
                cResult[20] = tmp33;
                cResult[21] = tmp40;
                tmp37 = tmp40;
              }
              const obj8 = { style: tmp4.form, children: tmp30 };
              const tmp36 = hasOwnProperty(View, obj8);
              cResult[16] = tmp4.form;
              cResult[17] = tmp30;
              cResult[18] = tmp36;
              tmp33 = tmp36;
            }
          }
          const obj9 = { defaultValue: value, onChange, hasIcons: false, children: null };
          const items2 = [tmp18, tmp26];
          obj9.children = items2;
          const tmp32 = timestampProducer(TableRadioGroup.TableRadioGroup, obj9);
          cResult[12] = value.onChange;
          cResult[13] = value.value;
          cResult[14] = tmp26;
          cResult[15] = tmp32;
          tmp30 = tmp32;
        }
        const obj10 = {
          subLabel: value.disabledMentionOnlyWithReason,
          disabled: null != value.disabledMentionOnlyWithReason,
          label: tmp24,
          value: UnreadSetting.ONLY_MENTIONS,
        };
        const tmp29 = hasOwnProperty(TableRadioRow.TableRadioRow, obj10);
        cResult[9] = value.disabledMentionOnlyWithReason;
        cResult[10] = null != value.disabledMentionOnlyWithReason;
        cResult[11] = tmp29;
        tmp26 = tmp29;
      }
      const tmp10 = hasOwnProperty(View, { style: tmp4.header, children: tmp5 });
      cResult[2] = tmp4.header;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj11 = { style: tmp4.header, children: tmp5 };
    }
  : function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
      const tmp = closure_7();
      const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
      const obj2 = {
        style: tmp.header,
        children: hasOwnProperty(NotificationSettingsMockChannelsDefault, { unreadSetting: defaultValue.value }),
      };
      const items = [hasOwnProperty(View, obj2)];
      const obj4 = { style: tmp.content, children: null };
      const obj5 = { variant: "text-sm/semibold", children: null };
      const intl = util.intl;
      obj5.children = intl.string(util.t.Tqd1Af);
      const items1 = [hasOwnProperty(Text_Text.Text, obj5), ,];
      const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.RpQgm5);
      items1[1] = hasOwnProperty(Text_Text.Text, obj6);
      const obj7 = { style: tmp.form, children: null };
      const obj8 = {
        defaultValue: defaultValue.value,
        onChange: defaultValue.onChange,
        hasIcons: false,
        children: null,
      };
      const obj9 = { label: null, value: null };
      const intl3 = util.intl;
      obj9.label = intl3.string(util.t["HVah/3"]);
      obj9.value = UnreadSetting.ALL_MESSAGES;
      const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj9)];
      const obj10 = {
        subLabel: defaultValue.disabledMentionOnlyWithReason,
        disabled: null != defaultValue.disabledMentionOnlyWithReason,
        label: null,
        value: null,
      };
      const intl4 = util.intl;
      obj10.label = intl4.string(util.t["tu+ZWJ"]);
      obj10.value = UnreadSetting.ONLY_MENTIONS;
      items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj10);
      obj8.children = items2;
      obj7.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj8);
      items1[2] = hasOwnProperty(View, obj7);
      obj4.children = items1;
      items[1] = timestampProducer(View, obj4);
      obj.children = items;
      return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
    };
