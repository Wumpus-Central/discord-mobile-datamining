// === Module 12298: MuteAppDmActionSheet ===

// Module 12298 (MuteAppDmActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import BellSlashIcon from "BellSlashIcon" /* 10312 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj2.iconBackground = size;
obj2.content = { padding: 16 };
obj2.headerText = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
obj2.infoText = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
obj2.dismissButtonContainer = { marginTop: 8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MuteAppDMActionSheet(channel) {
  const cResult = channel(576).c(25);
  const tmp4 = closure_6();
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(tmp(8756).BellIcon, { size: "md", color: "interactive-text-default" });
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
      const tmp18 = closure_4(tmp(5087).Text, obj3);
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.mscFJU);
      cResult[9] = stringResult1;
      let tmp19 = stringResult1;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== tmp4.infoText) {
      const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp4.infoText, children: tmp19 };
      const tmp23 = closure_4(tmp(5087).Text, obj4);
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
    if (cResult[13] !== channel.id) {
      let obj5 = {
        variant: "destructive",
        text: tmp24,
        onPress() {
              const obj = NotificationSettingsModalActionCreatorsDefault;
              const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
              const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
              ActionSheetActionCreatorsDefault.hideActionSheet();
              const obj5 = { text: null, icon: null };
              const intl = util.intl;
              obj5.text = intl.string(util.t.EgGpkx);
              obj5.icon = BellSlashIcon.BellSlashIcon;
              ToastActionCreatorsDefault.openMana("NOTIFICATIONS_MUTED", obj5);
            }
      };
      const tmp28 = closure_4(tmp(5376).Button, obj5);
      cResult[13] = channel.id;
      cResult[14] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[14];
    }
    const _Symbol4 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "secondary", text: null, onPress: null };
      const intl4 = tmp(1126).intl;
      obj6.text = intl4.string(tmp(1126).t.WAI6xu);
      obj6.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      const tmp31 = closure_4(tmp(5376).Button, obj6);
      cResult[15] = tmp31;
      let tmp29 = tmp31;
    } else {
      tmp29 = cResult[15];
    }
    if (cResult[16] !== tmp4.dismissButtonContainer) {
      const obj7 = { style: tmp4.dismissButtonContainer, children: tmp29 };
      const tmp35 = closure_4(View, obj7);
      cResult[16] = tmp4.dismissButtonContainer;
      cResult[17] = tmp35;
      let tmp32 = tmp35;
    } else {
      tmp32 = cResult[17];
    }
    if (cResult[18] === tmp4.content) {
      if (cResult[19] === tmp26) {
        if (cResult[20] === tmp32) {
          if (cResult[21] === tmp12) {
            if (cResult[22] === tmp16) {
              if (cResult[23] === tmp21) {
                let tmp36 = cResult[24];
              }
              return tmp36;
            }
          }
        }
      }
    }
    const obj8 = { startExpanded: true, children: null };
    const obj9 = { style: tmp4.content, children: null };
    const items = [tmp12, tmp16, tmp21, tmp26, tmp32];
    obj9.children = items;
    obj8.children = closure_5(View, obj9);
    const tmp40 = closure_4(tmp(6836).BottomSheet, obj8);
    cResult[18] = tmp4.content;
    cResult[19] = tmp26;
    cResult[20] = tmp32;
    cResult[21] = tmp12;
    cResult[22] = tmp16;
    cResult[23] = tmp21;
    cResult[24] = tmp40;
    tmp36 = tmp40;
  }
  const tmp13 = closure_4(View, { style: tmp4.iconContainer, children: tmp8 });
  cResult[3] = tmp4.iconContainer;
  cResult[4] = tmp8;
  cResult[5] = tmp13;
  tmp12 = tmp13;
  let obj = channel(576);
  const obj10 = { style: tmp4.iconContainer, children: tmp8 };
}) : (function MuteAppDMActionSheet(channel) {
  const tmp = closure_6();
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.content, children: null };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(channel(8756).BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [closure_4(View, obj3), , , , ];
  let obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = channel(1126).intl;
  obj5.children = intl.string(channel(1126).t.uAmAiL);
  items[1] = closure_4(channel(5087).Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = channel(1126).intl;
  obj6.children = intl2.string(channel(1126).t.mscFJU);
  items[2] = closure_4(channel(5087).Text, obj6);
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl3 = channel(1126).intl;
  obj7.text = intl3.string(channel(1126).t.uAmAiL);
  obj7.onPress = function onPress() {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings({ guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted });
    const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj5 = { text: null, icon: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.EgGpkx);
    obj5.icon = BellSlashIcon.BellSlashIcon;
    ToastActionCreatorsDefault.openMana("NOTIFICATIONS_MUTED", obj5);
  };
  items[3] = closure_4(channel(5376).Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: null };
  const obj9 = { variant: "secondary", text: null, onPress: null };
  const intl4 = channel(1126).intl;
  obj9.text = intl4.string(channel(1126).t.WAI6xu);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj8.children = closure_4(channel(5376).Button, obj9);
  items[4] = closure_4(View, obj8);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(channel(6836).BottomSheet, obj);
});