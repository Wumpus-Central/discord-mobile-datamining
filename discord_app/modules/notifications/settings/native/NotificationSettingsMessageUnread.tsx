// === Module 12561: NotificationSettingsMessageUnread ===

// Module 12561 (NotificationSettingsMessageUnread)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import notificationSettingsPresetOptionUtils from "notificationSettingsPresetOptionUtils" /* 12555 */;
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels" /* 12562 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 20, borderWidth: 1, padding: 14 }, cta: { marginTop: 4, textAlign: "center" }, label: { marginTop: 8, textAlign: "center" }, header: { marginBottom: 8 }, headerTitle: { marginBottom: 4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageUnread(setting) {
  const cResult = c.c(32);
  const tmp4 = closure_6();
  if (cResult[0] !== setting.setting) {
    const unreadSelectOptions = notificationSettingsPresetOptionUtils.getUnreadSelectOptions();
    const found = unreadSelectOptions.find((value) => value.value === setting.setting);
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
    const stringResult = intl.string(util.t.Tqd1Af);
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
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/semibold", color: "text-default", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.RpQgm5);
    const tmp14 = React4(Text_Text.Text, obj3);
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.header) {
    if (cResult[7] === tmp9) {
      let tmp15 = cResult[8];
    }
    if (cResult[9] !== setting.setting) {
      const obj4 = { unreadSetting: setting.setting };
      const tmp20 = React4(NotificationSettingsMockChannelsDefault, obj4);
      cResult[9] = setting.setting;
      cResult[10] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[10];
    }
    let str;
    if (tmp5 != null) {
      str = tmp5.label;
    }
    if (str == null) {
      str = "unset";
    }
    if (cResult[11] === tmp4.label) {
      if (cResult[12] === str) {
        let tmp22 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.yxiV9W);
        cResult[14] = stringResult1;
        let tmp25 = stringResult1;
      } else {
        tmp25 = cResult[14];
      }
      if (cResult[15] !== tmp4.cta) {
        const obj5 = { variant: "text-sm/semibold", style: tmp4.cta, color: "text-brand", children: null };
        const items = [tmp25, " "];
        obj5.children = items;
        const tmp29 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[15] = tmp4.cta;
        cResult[16] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[16];
      }
      if (cResult[17] === setting.onCustomize) {
        if (cResult[18] === tmp27) {
          let tmp30 = cResult[19];
        }
        if (cResult[20] === tmp4.card) {
          if (cResult[21] === tmp17) {
            if (cResult[22] === tmp22) {
              if (cResult[23] === tmp30) {
                let tmp33 = cResult[24];
              }
              if (cResult[25] === setting.onCustomize) {
                if (cResult[26] === tmp33) {
                  let tmp37 = cResult[27];
                }
                if (cResult[28] === setting.style) {
                  if (cResult[29] === tmp37) {
                    if (cResult[30] === tmp15) {
                      let tmp40 = cResult[31];
                    }
                    return tmp40;
                  }
                }
                const obj6 = { style: setting.style, children: null };
                const items1 = [tmp15, tmp37];
                obj6.children = items1;
                const tmp43 = hasOwnProperty(View, obj6);
                cResult[28] = setting.style;
                cResult[29] = tmp37;
                cResult[30] = tmp15;
                cResult[31] = tmp43;
                tmp40 = tmp43;
              }
              const obj7 = { onPress: setting.onCustomize, activeOpacity: 0.6, children: tmp33 };
              const tmp39 = React4(Pressables.PressableOpacity, obj7);
              cResult[25] = setting.onCustomize;
              cResult[26] = tmp33;
              cResult[27] = tmp39;
              tmp37 = tmp39;
            }
          }
        }
        const obj8 = { style: tmp4.card, children: null };
        const items2 = [tmp17, tmp22, tmp30];
        obj8.children = items2;
        const tmp36 = hasOwnProperty(View, obj8);
        cResult[20] = tmp4.card;
        cResult[21] = tmp17;
        cResult[22] = tmp22;
        cResult[23] = tmp30;
        cResult[24] = tmp36;
        tmp33 = tmp36;
      }
      const obj9 = { onPress: setting.onCustomize, children: tmp27 };
      const tmp32 = React4(Pressables.PressableOpacity, obj9);
      cResult[17] = setting.onCustomize;
      cResult[18] = tmp27;
      cResult[19] = tmp32;
      tmp30 = tmp32;
    }
    const obj10 = { variant: "text-sm/medium", style: tmp4.label, children: str };
    const tmp24 = React4(Text_Text.Text, obj10);
    cResult[11] = tmp4.label;
    cResult[12] = str;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  }
  const obj11 = { style: header, children: null };
  const items3 = [tmp9, tmp12];
  obj11.children = items3;
  const tmp16 = hasOwnProperty(View, obj11);
  cResult[6] = tmp4.header;
  cResult[7] = tmp9;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (function NotificationSettingsMessageUnread(onPress) {
  const tmp = closure_6();
  const unreadSelectOptions = notificationSettingsPresetOptionUtils.getUnreadSelectOptions();
  const found = unreadSelectOptions.find((value) => value.value === onPress.setting);
  const obj2 = { style: onPress.style, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-default", style: tmp.headerTitle, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.Tqd1Af);
  const items = [React4(Text_Text.Text, obj4), ];
  const obj5 = { variant: "text-xs/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.RpQgm5);
  items[1] = React4(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3), ];
  const obj6 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: null };
  const obj7 = { style: tmp.card, children: null };
  const items2 = [React4(NotificationSettingsMockChannelsDefault, { unreadSetting: onPress.setting }), , ];
  const obj9 = { variant: "text-sm/medium", style: tmp.label, children: null };
  let str;
  if (found != null) {
    str = found.label;
  }
  if (str == null) {
    str = "unset";
  }
  obj9.children = str;
  items2[1] = React4(Text_Text.Text, obj9);
  const obj10 = { onPress: onPress.onCustomize, children: null };
  const obj11 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: null };
  const intl3 = util.intl;
  const items3 = [intl3.string(util.t.yxiV9W), " "];
  obj11.children = items3;
  obj10.children = hasOwnProperty(Text_Text.Text, obj11);
  items2[2] = React4(Pressables.PressableOpacity, obj10);
  obj7.children = items2;
  obj6.children = hasOwnProperty(View, obj7);
  items1[1] = React4(Pressables.PressableOpacity, obj6);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx");

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  _require = style;
  const obj = {
    style: style.style,
    setting: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12563, dependencyMap.paths), "MessageUnreadActionSheet", { guildId: style.guildId });
    }
  };
  return closure_4(closure_7, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  _require = style;
  const obj = {
    style: style.style,
    setting: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12565, dependencyMap.paths), "MessageUnreadActionSheet", { channel: style.channel });
    }
  };
  return closure_4(closure_7, obj);
};