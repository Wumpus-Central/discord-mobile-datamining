// === Module 12282: MuteAppDmActionSheet ===

// Module 12282 (MuteAppDmActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import BellSlashIcon from "BellSlashIcon" /* 9826 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, channel;

let closure_4;
let hasOwnProperty;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: size, content: { padding: 16 }, headerText: { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 }, infoText: { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 }, dismissButtonContainer: { marginTop: 8 }, mutedNotificationContainer: size1, mutedNotification: { width: 16, height: 16 } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_0;
  let first;
  let intl4;
  let items;
  let obj8;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(27);
  const tmp4 = closure_6();
  _require = tmp4;
  channel = channel.channel;
  const content = tmp4.content;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconBackground) {
    let obj2 = { style: tmp4.iconBackground, "aria-hidden": true, children: first };
    const tmp11 = closure_4(View, obj2);
    cResult[1] = tmp4.iconBackground;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.iconContainer) {
    let tmp12;
    let tmp14;
    let tmp16;
    let tmp19;
    let tmp21;
    let tmp24;
    if (cResult[4] === tmp8) {
      tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    const headerText = tmp4.headerText;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(require("intl").t.uAmAiL);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.headerText) {
      let obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: headerText, children: tmp14 };
      const tmp18 = closure_4(require("Text/Text").Text, obj3);
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol2 = Symbol;
    const infoText = tmp4.infoText;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(require("intl").t.mscFJU);
      cResult[9] = stringResult1;
      tmp19 = stringResult1;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== tmp4.infoText) {
      let obj4 = { variant: "text-md/normal", color: "text-default", style: infoText, children: tmp19 };
      const tmp23 = closure_4(require("Text/Text").Text, obj4);
      cResult[10] = tmp4.infoText;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(require("intl").t.uAmAiL);
      cResult[12] = stringResult2;
      tmp24 = stringResult2;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] === channel.id) {
      if (cResult[14] === tmp4.mutedNotification) {
        let tmp26;
        let tmp29;
        let tmp32;
        if (cResult[15] === tmp4.mutedNotificationContainer) {
          tmp26 = cResult[16];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = {
            variant: "secondary",
            text: intl4.string(require("intl").t.WAI6xu),
            onPress() {
                      const obj = channel(dependencyMap[13]);
                      obj.hideActionSheet();
                    }
          };
          const Button = tmp(5601).Button;
          intl4 = tmp(1126).intl;
          const tmp31 = closure_4(Button, obj5);
          cResult[17] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[17];
        }
        if (cResult[18] !== tmp4.dismissButtonContainer) {
          let obj6 = { style: tmp4.dismissButtonContainer, children: tmp29 };
          const tmp35 = closure_4(View, obj6);
          cResult[18] = tmp4.dismissButtonContainer;
          cResult[19] = tmp35;
          tmp32 = tmp35;
        } else {
          tmp32 = cResult[19];
        }
        if (cResult[20] === tmp4.content) {
          if (cResult[21] === tmp26) {
            if (cResult[22] === tmp32) {
              if (cResult[23] === tmp12) {
                if (cResult[24] === tmp16) {
                  let tmp36;
                  if (cResult[25] === tmp21) {
                    tmp36 = cResult[26];
                  }
                  return tmp36;
                }
              }
            }
          }
        }
        const obj7 = { startExpanded: true, children: closure_5(View, obj8) };
        obj8 = { style: content, children: items };
        items = [tmp12, tmp16, tmp21, tmp26, tmp32];
        BottomSheet = tmp(6652).BottomSheet;
        const tmp40 = closure_4(BottomSheet, obj7);
        cResult[20] = tmp4.content;
        cResult[21] = tmp26;
        cResult[22] = tmp32;
        cResult[23] = tmp12;
        cResult[24] = tmp16;
        cResult[25] = tmp21;
        cResult[26] = tmp40;
        tmp36 = tmp40;
      }
    }
    const obj9 = {
      variant: "destructive",
      text: tmp24,
      onPress() {
          let intl;
          let intl2;
          let obj = NotificationSettingsModalActionCreatorsDefault;
          let obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
          const result = obj.updateChannelOverrideSettings(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents = obj4.getDesignSystemsNotificationComponents("MuteAppDmActionSheet");
          const tmp6 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            const openMana = tmp6.openMana;
            const obj5 = { text: intl2.string(intl5.t.EgGpkx), icon: BellSlashIcon.BellSlashIcon };
            intl2 = intl5.intl;
            openMana("NOTIFICATIONS_MUTED", obj5);
          } else {
            const open = tmp6.open;
            const obj6 = {
              key: "NOTIFICATIONS_MUTED",
              content: intl.string(intl5.t.EgGpkx),
              icon() {
                  let Icon;
                  let obj2;
                  const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(Icon, obj2) };
                  obj2 = { source: channel(dependencyMap[18]), color: channel(dependencyMap[4]).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification };
                  Icon = closure_0(dependencyMap[17]).Icon;
                  return closure_2_4(View, obj);
                }
            };
            intl = intl5.intl;
            open(obj6);
          }
        }
    };
    const tmp28 = closure_4(require("components/Button/Button").Button, obj9);
    cResult[13] = channel.id;
    cResult[14] = tmp4.mutedNotification;
    cResult[15] = tmp4.mutedNotificationContainer;
    cResult[16] = tmp28;
    tmp26 = tmp28;
  }
  const obj10 = { style: tmp4.iconContainer, children: tmp8 };
  const tmp13 = closure_4(View, obj10);
  cResult[3] = tmp4.iconContainer;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  let Button2;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj4;
  let obj9;
  const tmp = closure_6();
  _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: closure_5(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, obj4) };
  obj4 = { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" }) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  items = [closure_4(View, obj3), , , , ];
  let obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(require("intl").t.uAmAiL) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[1] = closure_4(Text, obj5);
  let obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: intl2.string(require("intl").t.mscFJU) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[2] = closure_4(Text2, obj6);
  const obj7 = {
    variant: "destructive",
    text: intl3.string(require("intl").t.uAmAiL),
    onPress() {
      let intl;
      let intl2;
      let obj = NotificationSettingsModalActionCreatorsDefault;
      let obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const result = obj.updateChannelOverrideSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
      const obj4 = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj4.getDesignSystemsNotificationComponents("MuteAppDmActionSheet");
      const tmp6 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana = tmp6.openMana;
        const obj5 = { text: intl2.string(intl5.t.EgGpkx), icon: BellSlashIcon.BellSlashIcon };
        intl2 = intl5.intl;
        openMana("NOTIFICATIONS_MUTED", obj5);
      } else {
        const open = tmp6.open;
        const obj6 = {
          key: "NOTIFICATIONS_MUTED",
          content: intl.string(intl5.t.EgGpkx),
          icon() {
              let Icon;
              let obj2;
              const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(Icon, obj2) };
              obj2 = { source: channel(dependencyMap[18]), color: channel(dependencyMap[4]).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification };
              Icon = closure_0(dependencyMap[17]).Icon;
              return closure_2_4(View, obj);
            }
        };
        intl = intl5.intl;
        open(obj6);
      }
    }
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items[3] = closure_4(Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: closure_4(Button2, obj9) };
  obj9 = {
    variant: "secondary",
    text: intl4.string(require("intl").t.WAI6xu),
    onPress() {
      const obj = channel(dependencyMap[13]);
      obj.hideActionSheet();
    }
  };
  Button2 = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items[4] = closure_4(View, obj8);
  return closure_4(BottomSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default tmp5;