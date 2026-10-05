// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import notificationSettingsPresetOptionUtils from "../utils/notificationSettingsPresetOptionUtils.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  card: obj2,
  cta: { marginTop: 4, textAlign: "center" },
  label: { marginTop: 8, textAlign: "center" },
  header: { marginBottom: 8 },
  headerTitle: { marginBottom: 4 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: 20,
  borderWidth: 1,
  padding: 14,
};
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setting) => {
      let header;
      let headerTitle;
      let intl2;
      let items;
      let items1;
      let items2;
      let items3;
      let tmp12;
      let tmp5;
      let tmp7;
      let tmp9;
      let closure_0 = setting;
      const obj = react2;
      const cResult = obj.c(32);
      const tmp4 = closure_6();
      if (cResult[0] !== setting.setting) {
        const tmpResult = notificationSettingsPresetOptionUtils;
        const unreadSelectOptions = tmpResult.getUnreadSelectOptions();
        const found = unreadSelectOptions.find((value) => value.value === setting.setting);
        cResult[0] = setting.setting;
        cResult[1] = found;
        tmp5 = found;
      } else {
        tmp5 = cResult[1];
      }
      const style = setting.style;
      ({ header, headerTitle } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.Tqd1Af);
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
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-xs/semibold", color: "text-default", children: intl2.string(intl4.t.RpQgm5) };
        const Text = Text_Text.Text;
        intl2 = intl4.intl;
        const tmp14 = React3(Text, obj3);
        cResult[5] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.header) {
        let tmp15;
        let tmp17;
        if (cResult[7] === tmp9) {
          tmp15 = cResult[8];
        }
        const onCustomize = setting.onCustomize;
        const card = tmp4.card;
        if (cResult[9] !== setting.setting) {
          const obj4 = { unreadSetting: setting.setting };
          const tmp20 = React3(NotificationSettingsMockChannelsDefault, obj4);
          cResult[9] = setting.setting;
          cResult[10] = tmp20;
          tmp17 = tmp20;
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
          let tmp22;
          let tmp25;
          let tmp27;
          if (cResult[12] === str) {
            tmp22 = cResult[13];
          }
          const _Symbol = Symbol;
          const onCustomize2 = setting.onCustomize;
          const cta = tmp4.cta;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl4.intl;
            const stringResult1 = intl3.string(intl4.t.yxiV9W);
            cResult[14] = stringResult1;
            tmp25 = stringResult1;
          } else {
            tmp25 = cResult[14];
          }
          if (cResult[15] !== tmp4.cta) {
            const obj5 = { variant: "text-sm/semibold", style: cta, color: "text-brand", children: items };
            items = [tmp25, " "];
            const tmp29 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[15] = tmp4.cta;
            cResult[16] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[16];
          }
          if (cResult[17] === setting.onCustomize) {
            let tmp30;
            if (cResult[18] === tmp27) {
              tmp30 = cResult[19];
            }
            if (cResult[20] === tmp4.card) {
              if (cResult[21] === tmp17) {
                if (cResult[22] === tmp22) {
                  let tmp33;
                  if (cResult[23] === tmp30) {
                    tmp33 = cResult[24];
                  }
                  if (cResult[25] === setting.onCustomize) {
                    let tmp37;
                    if (cResult[26] === tmp33) {
                      tmp37 = cResult[27];
                    }
                    if (cResult[28] === setting.style) {
                      if (cResult[29] === tmp37) {
                        let tmp40;
                        if (cResult[30] === tmp15) {
                          tmp40 = cResult[31];
                        }
                        return tmp40;
                      }
                    }
                    const obj6 = { style, children: items1 };
                    items1 = [tmp15, tmp37];
                    const tmp43 = hasOwnProperty(View, obj6);
                    cResult[28] = setting.style;
                    cResult[29] = tmp37;
                    cResult[30] = tmp15;
                    cResult[31] = tmp43;
                    tmp40 = tmp43;
                  }
                  const obj7 = { onPress: onCustomize, activeOpacity: 0.6, children: tmp33 };
                  const tmp39 = React3(Pressables.PressableOpacity, obj7);
                  cResult[25] = setting.onCustomize;
                  cResult[26] = tmp33;
                  cResult[27] = tmp39;
                  tmp37 = tmp39;
                }
              }
            }
            const obj8 = { style: card, children: items2 };
            items2 = [tmp17, tmp22, tmp30];
            const tmp36 = hasOwnProperty(View, obj8);
            cResult[20] = tmp4.card;
            cResult[21] = tmp17;
            cResult[22] = tmp22;
            cResult[23] = tmp30;
            cResult[24] = tmp36;
            tmp33 = tmp36;
          }
          const obj9 = { onPress: onCustomize2, children: tmp27 };
          const tmp32 = React3(Pressables.PressableOpacity, obj9);
          cResult[17] = setting.onCustomize;
          cResult[18] = tmp27;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
        const obj10 = { variant: "text-sm/medium", style: tmp4.label, children: str };
        const tmp24 = React3(Text_Text.Text, obj10);
        cResult[11] = tmp4.label;
        cResult[12] = str;
        cResult[13] = tmp24;
        tmp22 = tmp24;
      }
      const obj11 = { style: header, children: items3 };
      items3 = [tmp9, tmp12];
      const tmp16 = hasOwnProperty(View, obj11);
      cResult[6] = tmp4.header;
      cResult[7] = tmp9;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    }
  : (onPress) => {
      let Text4;
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj7;
      let str;
      let closure_0 = onPress;
      const tmp = closure_6();
      const obj = notificationSettingsPresetOptionUtils;
      const unreadSelectOptions = obj.getUnreadSelectOptions();
      const found = unreadSelectOptions.find((value) => value.value === setting.setting);
      const obj2 = { style: onPress.style, children: items1 };
      const obj3 = { style: tmp.header, children: items };
      const obj4 = {
        variant: "text-sm/semibold",
        color: "text-default",
        style: tmp.headerTitle,
        children: intl.string(intl4.t.Tqd1Af),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [React3(Text, obj4)];
      const obj5 = { variant: "text-xs/semibold", color: "text-default", children: intl2.string(intl4.t.RpQgm5) };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = React3(Text2, obj5);
      items1 = [hasOwnProperty(View, obj3)];
      const obj6 = { onPress: onPress.onCustomize, activeOpacity: 0.6, children: hasOwnProperty(View, obj7) };
      obj7 = { style: tmp.card, children: items2 };
      const PressableOpacity = Pressables.PressableOpacity;
      items2 = [, ,];
      const obj8 = { unreadSetting: onPress.setting };
      items2[0] = React3(NotificationSettingsMockChannelsDefault, obj8);
      const obj9 = { variant: "text-sm/medium", style: tmp.label, children: str };
      str = undefined;
      const Text3 = Text_Text.Text;
      if (found != null) {
        str = found.label;
      }
      if (str == null) {
        str = "unset";
      }
      items2[1] = React3(Text3, obj9);
      const obj10 = { onPress: onPress.onCustomize, children: hasOwnProperty(Text4, obj11) };
      const PressableOpacity2 = Pressables.PressableOpacity;
      obj11 = { variant: "text-sm/semibold", style: tmp.cta, color: "text-brand", children: items3 };
      Text4 = Text_Text.Text;
      const intl3 = intl4.intl;
      items3 = [intl3.string(intl4.t.yxiV9W), " "];
      items2[2] = React3(PressableOpacity2, obj10);
      items1[1] = React3(PressableOpacity, obj6);
      return hasOwnProperty(View, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx",
);

export const NotificationSettingsGuildMessageUnread = function NotificationSettingsGuildMessageUnread(style) {
  let obj2;
  _require = style;
  let obj = {
    style: style.style,
    setting: obj2.useGuildPresetSettings(style.guildId).unread,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId: style.guildId };
      obj.openLazy(asyncRequire(12512, dependencyMap.paths), "MessageUnreadActionSheet", obj2);
    },
  };
  obj2 = require("notificationSettingsGuildFlagUtils");
  return closure_4(closure_7, obj);
};
export const NotificationSettingsChannelMessageUnread = function NotificationSettingsChannelMessageUnread(style) {
  let obj2;
  _require = style;
  let obj = {
    style: style.style,
    setting: obj2.useChannelPresetSettings(style.channel).unread,
    onCustomize() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel: style.channel };
      obj.openLazy(asyncRequire(12514, dependencyMap.paths), "MessageUnreadActionSheet", obj2);
    },
  };
  obj2 = require("notficationSettingsChannelFlagUtils");
  return closure_4(closure_7, obj);
};
