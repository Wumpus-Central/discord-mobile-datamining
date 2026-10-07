// === Module 12518: NotificationSettingsMessageNotification ===

// Module 12518 (NotificationSettingsMessageNotification)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import notificationSettingsPresetOptionUtils from "notificationSettingsPresetOptionUtils" /* 12519 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 12520 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 }, cta: { textAlign: "center", marginTop: 4 }, label: { textAlign: "center", marginTop: 8 }, header: { marginBottom: 8 }, headerTitle: { marginBottom: 4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((setting) => {
  const cResult = c.c(36);
  const tmp4 = closure_6();
  if (cResult[0] !== setting.setting) {
    const pushNotificationSelectOptions = notificationSettingsPresetOptionUtils.getPushNotificationSelectOptions();
    const found = pushNotificationSelectOptions.find((value) => value.value === setting.setting);
    cResult[0] = setting.setting;
    cResult[1] = found;
    let tmp5 = found;
    const tmpResult = notificationSettingsPresetOptionUtils;
  } else {
    tmp5 = cResult[1];
  }
  ({ header, headerTitle } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["1m22ZB"]);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.headerTitle) {
    const obj2 = { variant: "text-sm/semibold", color: "text-default", style: headerTitle, children: tmp7 };
    const tmp11 = React4(Text_Text.Text, obj2);
    cResult[3] = tmp4.headerTitle;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== setting.context) {
    if ("guild" === setting.context) {
      const intl3 = util.intl;
      let stringResult1 = intl3.string(util.t["4bP2ZZ"]);
    } else {
      const intl2 = util.intl;
      stringResult1 = intl2.string(util.t["R1j5+4"]);
    }
    cResult[5] = setting.context;
    cResult[6] = stringResult1;
  } else {
    if (cResult[7] !== cResult[6]) {
      const obj3 = { variant: "text-xs/semibold", color: "text-default", children: tmp12 };
      const tmp17 = React4(Text_Text.Text, obj3);
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.header) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp15) {
          let tmp18 = cResult[12];
        }
        if (cResult[13] !== setting.setting) {
          const obj4 = { notificationSetting: setting.setting };
          const tmp25 = React4(NotificationSettingsMockMessageDefault, obj4);
          cResult[13] = setting.setting;
          cResult[14] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[14];
        }
        let str2;
        if (tmp5 != null) {
          str2 = tmp5.label;
        }
        if (str2 == null) {
          str2 = "unset";
        }
        if (cResult[15] === tmp4.label) {
          if (cResult[16] === str2) {
            let tmp27 = cResult[17];
          }
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult2 = intl4.string(util.t.yxiV9W);
            cResult[18] = stringResult2;
            let tmp30 = stringResult2;
          } else {
            tmp30 = cResult[18];
          }
          if (cResult[19] !== tmp4.cta) {
            const obj5 = { variant: "text-sm/semibold", style: tmp4.cta, color: "text-brand", children: tmp30 };
            const tmp34 = React4(Text_Text.Text, obj5);
            cResult[19] = tmp4.cta;
            cResult[20] = tmp34;
            let tmp32 = tmp34;
          } else {
            tmp32 = cResult[20];
          }
          if (cResult[21] === setting.onCustomize) {
            if (cResult[22] === tmp32) {
              let tmp35 = cResult[23];
            }
            if (cResult[24] === tmp4.card) {
              if (cResult[25] === tmp22) {
                if (cResult[26] === tmp27) {
                  if (cResult[27] === tmp35) {
                    let tmp38 = cResult[28];
                  }
                  if (cResult[29] === setting.onCustomize) {
                    if (cResult[30] === tmp38) {
                      let tmp42 = cResult[31];
                    }
                    if (cResult[32] === setting.style) {
                      if (cResult[33] === tmp42) {
                        if (cResult[34] === tmp18) {
                          let tmp45 = cResult[35];
                        }
                        return tmp45;
                      }
                    }
                    const obj6 = { style: setting.style, children: null };
                    const items = [tmp18, tmp42];
                    obj6.children = items;
                    const tmp48 = hasOwnProperty(View, obj6);
                    cResult[32] = setting.style;
                    cResult[33] = tmp42;
                    cResult[34] = tmp18;
                    cResult[35] = tmp48;
                    tmp45 = tmp48;
                  }
                  const obj7 = { onPress: setting.onCustomize, activeOpacity: 0.6, children: tmp38 };
                  const tmp44 = React4(Pressables.PressableOpacity, obj7);
                  cResult[29] = setting.onCustomize;
                  cResult[30] = tmp38;
                  cResult[31] = tmp44;
                  tmp42 = tmp44;
                }
              }
            }
            const obj8 = { style: tmp4.card, children: null };
            const items1 = [tmp22, tmp27, tmp35];
            obj8.children = items1;
            const tmp41 = hasOwnProperty(View, obj8);
            cResult[24] = tmp4.card;
            cResult[25] = tmp22;
            cResult[26] = tmp27;
            cResult[27] = tmp35;
            cResult[28] = tmp41;
            tmp38 = tmp41;
          }
          const obj9 = { onPress: setting.onCustomize, children: tmp32 };
          const tmp37 = React4(Pressables.PressableOpacity, obj9);
          cResult[21] = setting.onCustomize;
          cResult[22] = tmp32;
          cResult[23] = tmp37;
          tmp35 = tmp37;
        }
        const obj10 = { variant: "text-sm/medium", style: tmp4.label, children: str2 };
        const tmp29 = React4(Text_Text.Text, obj10);
        cResult[15] = tmp4.label;
        cResult[16] = str2;
        cResult[17] = tmp29;
        tmp27 = tmp29;
      }
    }
    const obj11 = { style: header, children: null };
    const items2 = [tmp9, tmp15];
    obj11.children = items2;
    const tmp21 = hasOwnProperty(View, obj11);
    cResult[9] = tmp4.header;
    cResult[10] = tmp9;
    cResult[11] = tmp15;
    cResult[12] = tmp21;
    tmp18 = tmp21;
  }
}) : ((onPress) => {
  const tmp = closure_6();
  const pushNotificationSelectOptions = notificationSettingsPresetOptionUtils.getPushNotificationSelectOptions();
  const found = pushNotificationSelectOptions.find((value) => value.value === onPress.setting);
  const obj2 = { style: onPress.style, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["1m22ZB"]);
  const items = [React4(Text_Text.Text, obj4), ];
  if ("guild" === onPress.context) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["4bP2ZZ"]);
  } else {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t["R1j5+4"]);
  }
  items[1] = React4(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: stringResult });
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3), ];
  const obj5 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj6 = { style: tmp.card, children: null };
  const items2 = [React4(NotificationSettingsMockMessageDefault, { notificationSetting: onPress.setting }), , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj8.children = str;
  items2[1] = React4(Text_Text.Text, obj8);
  const obj9 = { onPress: onPress.onCustomize, children: null };
  const obj10 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl4 = util.intl;
  obj10.children = intl4.string(util.t.yxiV9W);
  obj9.children = React4(Text_Text.Text, obj10);
  items2[2] = React4(Pressables.PressableOpacity, obj9);
  obj6.children = items2;
  obj5.children = hasOwnProperty(View, obj6);
  items1[1] = React4(Pressables.PressableOpacity, obj5);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
});
let closure_7 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx");

export default tmp4;
export const NotificationSettingsGuildMessageNotification = function NotificationSettingsGuildMessageNotification(style) {
  _require = style;
  const obj = {
    context: "guild",
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).notification,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12522, dependencyMap.paths), "MessageNotificationGuildActionSheet", { guildId: style.guildId });
    }
  };
  return closure_4(closure_7, obj);
};
export const NotificationSettingsChannelMessageNotification = function NotificationSettingsChannelMessageNotification(style) {
  _require = style;
  const obj = {
    context: "channel",
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).notification,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12524, dependencyMap.paths), "MessageNotificationChannelActionSheet", { channel: style.channel });
    }
  };
  return closure_4(closure_7, obj);
};