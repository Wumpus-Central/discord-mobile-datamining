// === Module 12503: NotificationSettingsMessageNotification ===

// Module 12503 (NotificationSettingsMessageNotification)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import notificationSettingsPresetOptionUtils from "notificationSettingsPresetOptionUtils" /* 12504 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 12505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { card: obj2, cta: { textAlign: "center", marginTop: 4 }, label: { textAlign: "center", marginTop: 8 }, header: { marginBottom: 8 }, headerTitle: { marginBottom: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((setting) => {
  let header;
  let headerTitle;
  let items;
  let items1;
  let items2;
  let tmp12;
  let tmp14;
  let tmp5;
  let tmp7;
  let tmp9;
  let closure_0 = setting;
  const obj = react2;
  const cResult = obj.c(36);
  const tmp4 = closure_6();
  if (cResult[0] !== setting.setting) {
    const tmpResult = notificationSettingsPresetOptionUtils;
    const pushNotificationSelectOptions = tmpResult.getPushNotificationSelectOptions();
    const found = pushNotificationSelectOptions.find((value) => value.value === setting.setting);
    cResult[0] = setting.setting;
    cResult[1] = found;
    tmp5 = found;
  } else {
    tmp5 = cResult[1];
  }
  const style = setting.style;
  ({ header, headerTitle } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t["1m22ZB"]);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.headerTitle) {
    const obj2 = { variant: "text-sm/semibold", color: "text-default", style: headerTitle, children: tmp7 };
    const tmp11 = React3(Text_Text.Text, obj2);
    cResult[3] = tmp4.headerTitle;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== setting.context) {
    let stringResult1;
    if ("guild" === setting.context) {
      const intl3 = intl5.intl;
      stringResult1 = intl3.string(intl5.t["4bP2ZZ"]);
    } else {
      const intl2 = intl5.intl;
      stringResult1 = intl2.string(intl5.t["R1j5+4"]);
    }
    cResult[5] = setting.context;
    cResult[6] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp12) {
    const obj3 = { variant: "text-xs/semibold", color: "text-default", children: tmp12 };
    const tmp16 = React3(Text_Text.Text, obj3);
    cResult[7] = tmp12;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] === tmp4.header) {
    if (cResult[10] === tmp9) {
      let tmp17;
      let tmp19;
      if (cResult[11] === tmp14) {
        tmp17 = cResult[12];
      }
      const onCustomize = setting.onCustomize;
      const card = tmp4.card;
      if (cResult[13] !== setting.setting) {
        const obj4 = { notificationSetting: setting.setting };
        const tmp22 = React3(NotificationSettingsMockMessageDefault, obj4);
        cResult[13] = setting.setting;
        cResult[14] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[14];
      }
      let str2;
      if (tmp5 != null) {
        str2 = tmp5.label;
      }
      if (str2 == null) {
        str2 = "unset";
      }
      if (cResult[15] === tmp4.label) {
        let tmp24;
        let tmp27;
        let tmp29;
        if (cResult[16] === str2) {
          tmp24 = cResult[17];
        }
        const _Symbol = Symbol;
        const onCustomize2 = setting.onCustomize;
        const cta = tmp4.cta;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl5.intl;
          const stringResult2 = intl4.string(intl5.t.yxiV9W);
          cResult[18] = stringResult2;
          tmp27 = stringResult2;
        } else {
          tmp27 = cResult[18];
        }
        if (cResult[19] !== tmp4.cta) {
          const obj5 = { variant: "text-sm/semibold", style: cta, color: "text-brand", children: tmp27 };
          const tmp31 = React3(Text_Text.Text, obj5);
          cResult[19] = tmp4.cta;
          cResult[20] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[20];
        }
        if (cResult[21] === setting.onCustomize) {
          let tmp32;
          if (cResult[22] === tmp29) {
            tmp32 = cResult[23];
          }
          if (cResult[24] === tmp4.card) {
            if (cResult[25] === tmp19) {
              if (cResult[26] === tmp24) {
                let tmp35;
                if (cResult[27] === tmp32) {
                  tmp35 = cResult[28];
                }
                if (cResult[29] === setting.onCustomize) {
                  let tmp39;
                  if (cResult[30] === tmp35) {
                    tmp39 = cResult[31];
                  }
                  if (cResult[32] === setting.style) {
                    if (cResult[33] === tmp39) {
                      let tmp42;
                      if (cResult[34] === tmp17) {
                        tmp42 = cResult[35];
                      }
                      return tmp42;
                    }
                  }
                  const obj6 = { style, children: items };
                  items = [tmp17, tmp39];
                  const tmp45 = hasOwnProperty(View, obj6);
                  cResult[32] = setting.style;
                  cResult[33] = tmp39;
                  cResult[34] = tmp17;
                  cResult[35] = tmp45;
                  tmp42 = tmp45;
                }
                const obj7 = { onPress: onCustomize, activeOpacity: 0.6, children: tmp35 };
                const tmp41 = React3(Pressables.PressableOpacity, obj7);
                cResult[29] = setting.onCustomize;
                cResult[30] = tmp35;
                cResult[31] = tmp41;
                tmp39 = tmp41;
              }
            }
          }
          const obj8 = { style: card, children: items1 };
          items1 = [tmp19, tmp24, tmp32];
          const tmp38 = hasOwnProperty(View, obj8);
          cResult[24] = tmp4.card;
          cResult[25] = tmp19;
          cResult[26] = tmp24;
          cResult[27] = tmp32;
          cResult[28] = tmp38;
          tmp35 = tmp38;
        }
        const obj9 = { onPress: onCustomize2, children: tmp29 };
        const tmp34 = React3(Pressables.PressableOpacity, obj9);
        cResult[21] = setting.onCustomize;
        cResult[22] = tmp29;
        cResult[23] = tmp34;
        tmp32 = tmp34;
      }
      const obj10 = { variant: "text-sm/medium", style: tmp4.label, children: str2 };
      const tmp26 = React3(Text_Text.Text, obj10);
      cResult[15] = tmp4.label;
      cResult[16] = str2;
      cResult[17] = tmp26;
      tmp24 = tmp26;
    }
  }
  const obj11 = { style: header, children: items2 };
  items2 = [tmp9, tmp14];
  const tmp18 = hasOwnProperty(View, obj11);
  cResult[9] = tmp4.header;
  cResult[10] = tmp9;
  cResult[11] = tmp14;
  cResult[12] = tmp18;
  tmp17 = tmp18;
}) : ((onPress) => {
  let Text4;
  let intl;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj6;
  let str;
  let stringResult;
  let closure_0 = onPress;
  const tmp = closure_6();
  const obj = notificationSettingsPresetOptionUtils;
  const pushNotificationSelectOptions = obj.getPushNotificationSelectOptions();
  const found = pushNotificationSelectOptions.find((value) => value.value === setting.setting);
  const obj2 = { style: onPress.style, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: intl.string(intl5.t["1m22ZB"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [React3(Text, obj4), ];
  const Text2 = Text_Text.Text;
  if ("guild" === onPress.context) {
    const intl3 = intl5.intl;
    stringResult = intl3.string(intl5.t["4bP2ZZ"]);
  } else {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["R1j5+4"]);
  }
  items[1] = React3(Text2, { variant: "text-xs/semibold", color: "text-default", children: stringResult });
  items1 = [hasOwnProperty(View, obj3), ];
  const obj5 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: hasOwnProperty(View, obj6) };
  obj6 = { style: tmp.card, children: items2 };
  const PressableOpacity = Pressables.PressableOpacity;
  items2 = [, , ];
  const obj7 = { notificationSetting: onPress.setting };
  items2[0] = React3(NotificationSettingsMockMessageDefault, obj7);
  const obj8 = { variant: "text-sm/medium", style: tmp.label, children: str };
  str = undefined;
  const Text3 = Text_Text.Text;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  items2[1] = React3(Text3, obj8);
  const obj9 = { onPress: onPress.onCustomize, children: React3(Text4, obj10) };
  const PressableOpacity2 = Pressables.PressableOpacity;
  obj10 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: intl4.string(intl5.t.yxiV9W) };
  Text4 = Text_Text.Text;
  intl4 = intl5.intl;
  items2[2] = React3(PressableOpacity2, obj9);
  items1[1] = React3(PressableOpacity, obj5);
  return hasOwnProperty(View, obj2);
});
let closure_7 = tmp4;
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default tmp4;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  let obj2;
  _require = style;
  let obj = {
    context: "guild",
    style: style.style,
    setting: obj2.useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId: style.guildId };
      obj.openLazy(asyncRequire(12507, dependencyMap.paths), "MessageNotificationGuildActionSheet", obj2);
    }
  };
  obj2 = require("notificationSettingsGuildFlagUtils");
  return closure_4(closure_7, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  let obj2;
  _require = style;
  let obj = {
    context: "channel",
    style: style.style,
    setting: obj2.useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel: style.channel };
      obj.openLazy(asyncRequire(12509, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj2);
    }
  };
  obj2 = require("notficationSettingsChannelFlagUtils");
  return closure_4(closure_7, obj);
};