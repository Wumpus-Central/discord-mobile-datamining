// === Module 12267: MuteAppDmActionSheet ===

// Module 12267 (MuteAppDmActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import BellSlashIcon from "BellSlashIcon" /* 9813 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null, mutedNotificationContainer: null, mutedNotification: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj2.iconBackground = size;
obj2.content = { padding: 16 };
obj2.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
obj2.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
obj2.dismissButtonContainer = { marginTop: 8 };
const size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
obj2.mutedNotificationContainer = size1;
obj2.mutedNotification = { width: 16, height: 16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = require("c").c(27);
  const tmp4 = closure_6();
  _require = tmp4;
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(tmp(9266).BellIcon, { size: "md", color: "interactive-text-default" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconBackground) {
    let obj2 = { style: tmp4.iconBackground, "aria-hidden": true, children: first };
    const tmp11 = closure_4(View, obj2);
    cResult[1] = tmp4.iconBackground;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.iconContainer) {
    if (cResult[4] === tmp8) {
      let tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.uAmAiL);
      cResult[6] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.headerText) {
      let obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.headerText, children: tmp14 };
      const tmp18 = closure_4(tmp(4886).Text, obj3);
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.mscFJU);
      cResult[9] = stringResult1;
      let tmp19 = stringResult1;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== tmp4.infoText) {
      let obj4 = { variant: "text-md/normal", color: "text-default", style: tmp4.infoText, children: tmp19 };
      const tmp23 = closure_4(tmp(4886).Text, obj4);
      cResult[10] = tmp4.infoText;
      cResult[11] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(tmp(1126).t.uAmAiL);
      cResult[12] = stringResult2;
      let tmp24 = stringResult2;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] === channel.id) {
      if (cResult[14] === tmp4.mutedNotification) {
        if (cResult[15] === tmp4.mutedNotificationContainer) {
          let tmp26 = cResult[16];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { variant: "secondary", text: null, onPress: null };
          const intl4 = tmp(1126).intl;
          obj5.text = intl4.string(tmp(1126).t.WAI6xu);
          obj5.onPress = function onPress() {
            channel(4854).hideActionSheet();
          };
          const tmp31 = closure_4(tmp(5594).Button, obj5);
          cResult[17] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[17];
        }
        if (cResult[18] !== tmp4.dismissButtonContainer) {
          let obj6 = { style: tmp4.dismissButtonContainer, children: tmp29 };
          const tmp35 = closure_4(View, obj6);
          cResult[18] = tmp4.dismissButtonContainer;
          cResult[19] = tmp35;
          let tmp32 = tmp35;
        } else {
          tmp32 = cResult[19];
        }
        if (cResult[20] === tmp4.content) {
          if (cResult[21] === tmp26) {
            if (cResult[22] === tmp32) {
              if (cResult[23] === tmp12) {
                if (cResult[24] === tmp16) {
                  if (cResult[25] === tmp21) {
                    let tmp36 = cResult[26];
                  }
                  return tmp36;
                }
              }
            }
          }
        }
        let obj7 = { startExpanded: true, children: null };
        const obj8 = { style: tmp4.content, children: null };
        const items = [tmp12, tmp16, tmp21, tmp26, tmp32];
        obj8.children = items;
        obj7.children = closure_5(View, obj8);
        const tmp40 = closure_4(tmp(6645).BottomSheet, obj7);
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
          let obj = NotificationSettingsModalActionCreatorsDefault;
          const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
          const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("MuteAppDmActionSheet");
          const obj5 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            const obj6 = { text: null, icon: null };
            const intl2 = util.intl;
            obj6.text = intl2.string(util.t.EgGpkx);
            obj6.icon = BellSlashIcon.BellSlashIcon;
            obj5.openMana("NOTIFICATIONS_MUTED", obj6);
          } else {
            const obj7 = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
            const intl = util.intl;
            obj7.content = intl.string(util.t.EgGpkx);
            obj7.icon = function icon() {
              const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(closure_0(1188).Icon, { source: channel(7608), color: channel(587).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification }) };
              return closure_2_4(View, obj);
            };
            obj5.open(obj7);
          }
        }
    };
    const tmp28 = closure_4(tmp(5594).Button, obj9);
    cResult[13] = channel.id;
    cResult[14] = tmp4.mutedNotification;
    cResult[15] = tmp4.mutedNotificationContainer;
    cResult[16] = tmp28;
    tmp26 = tmp28;
  }
  const tmp13 = closure_4(View, { style: tmp4.iconContainer, children: tmp8 });
  cResult[3] = tmp4.iconContainer;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
  let obj = require("c");
  const obj10 = { style: tmp4.iconContainer, children: tmp8 };
}) : ((channel) => {
  const tmp = closure_6();
  _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.content, children: null };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [closure_4(View, obj3), , , , ];
  let obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = require("util").intl;
  obj5.children = intl.string(require("util").t.uAmAiL);
  items[1] = closure_4(require("Text/Text").Text, obj5);
  let obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  let intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t.mscFJU);
  items[2] = closure_4(require("Text/Text").Text, obj6);
  let obj7 = { variant: "destructive", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj7.text = intl3.string(require("util").t.uAmAiL);
  obj7.onPress = function onPress() {
    let obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
    const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("MuteAppDmActionSheet");
    const obj5 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const obj6 = { text: null, icon: null };
      const intl2 = util.intl;
      obj6.text = intl2.string(util.t.EgGpkx);
      obj6.icon = BellSlashIcon.BellSlashIcon;
      obj5.openMana("NOTIFICATIONS_MUTED", obj6);
    } else {
      const obj7 = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
      const intl = util.intl;
      obj7.content = intl.string(util.t.EgGpkx);
      obj7.icon = function icon() {
        const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(closure_0(1188).Icon, { source: channel(7608), color: channel(587).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification }) };
        return closure_2_4(View, obj);
      };
      obj5.open(obj7);
    }
  };
  items[3] = closure_4(require("components/Button/Button").Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: null };
  const obj9 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require("util").intl;
  obj9.text = intl4.string(require("util").t.WAI6xu);
  obj9.onPress = function onPress() {
    channel(4854).hideActionSheet();
  };
  obj8.children = closure_4(require("components/Button/Button").Button, obj9);
  items[4] = closure_4(View, obj8);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
});