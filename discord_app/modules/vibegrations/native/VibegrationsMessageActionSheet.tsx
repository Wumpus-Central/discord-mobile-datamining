// === Module 16520: VibegrationsMessageActionSheet ===

// Module 16520 (VibegrationsMessageActionSheet)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CopyIcon from "CopyIcon" /* 4779 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6776 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7789 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function VibegrationsMessageActionSheet(content) {
  content = content.content;
  const userId = content.userId;
  const onRestoreVersion = content.onRestoreVersion;
  const items = [content];
  const items1 = [userId];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(content);
    ActionSheetActionCreatorsDefault.hideActionSheet(c6);
    const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj4.content = intl.string(util.t.mGZ66D);
    obj4.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj4);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = noop.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(c6);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  let tmp4Result = null;
  if ("" !== content) {
    let obj2 = { label: null, icon: null, onPress: null };
    const intl3 = tmp5(tmp6[6]).intl;
    obj2.label = intl3.string(tmp5(tmp6[6]).t.JrGD7E);
    const obj3 = { IconComponent: tmp5(tmp6[7]).CopyIcon };
    obj2.icon = closure_4(tmp5(tmp6[9]).ActionSheetRow.Icon, obj3);
    obj2.onPress = callback;
    tmp4Result = closure_4(tmp5(tmp6[9]).ActionSheetRow, obj2);
  }
  const items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != userId) {
    let obj = { label: null, icon: null, onPress: null };
    let intl = tmp5(tmp6[6]).intl;
    obj.label = intl.string(tmp5(tmp6[6]).t.iXAna6);
    let obj4 = { IconComponent: tmp5(tmp6[10]).UserIcon };
    obj.icon = closure_4(tmp5(tmp6[9]).ActionSheetRow.Icon, obj4);
    obj.onPress = callback1;
    tmp4Result3 = closure_4(tmp5(tmp6[9]).ActionSheetRow, obj);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != onRestoreVersion) {
    const obj5 = { label: null, icon: null, onPress: null };
    const intl2 = tmp5(tmp6[6]).intl;
    obj5.label = intl2.string(userId(tmp6[11]).eSDVDt);
    const obj6 = { IconComponent: tmp5(tmp6[12]).UndoIcon };
    obj5.icon = closure_4(tmp5(tmp6[9]).ActionSheetRow.Icon, obj6);
    obj5.onPress = callback2;
    tmp4Result4 = closure_4(tmp5(tmp6[9]).ActionSheetRow, obj5);
  }
  items3[2] = tmp4Result4;
  return closure_4(content(onRestoreVersion[8]).ActionSheet, { children: closure_5(content(onRestoreVersion[9]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "vibegrations-message-actions";
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageActionSheet.tsx");

export const VIBEGRATIONS_MESSAGE_SHEET_KEY = "vibegrations-message-actions";
export const openMessageAuthorProfile = function openMessageAuthorProfile(id) {
  showUserProfileActionSheetDefault({ userId: id });
};
export const showVibegrationsMessageActions = function showVibegrationsMessageActions(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = React4(VibegrationsMessageActionSheet, {});
  obj2.key = key;
  ActionSheetActionCreators.showActionSheet(obj2);
};