// discord_app/modules/vibegrations/native/VibegrationsMessageActionSheet.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function VibegrationsMessageActionSheet(content) {
  content = content.content;
  const userId = content.userId;
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
  const callback1 = noop.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  let tmp3Result = null;
  if ("" !== content) {
    let obj2 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1115).intl;
    obj2.label = intl2.string(tmp4(1115).t.JrGD7E);
    const obj3 = { IconComponent: tmp4(4775).CopyIcon };
    obj2.icon = closure_4(tmp4(7532).ActionSheetRow.Icon, obj3);
    obj2.onPress = callback;
    tmp3Result = closure_4(tmp4(7532).ActionSheetRow, obj2);
  }
  const items2 = [tmp3Result];
  let tmp3Result2 = null;
  if (null != userId) {
    let obj = { label: null, icon: null, onPress: null };
    let intl = tmp4(1115).intl;
    obj.label = intl.string(tmp4(1115).t.iXAna6);
    let obj4 = { IconComponent: tmp4(12167).UserIcon };
    obj.icon = closure_4(tmp4(7532).ActionSheetRow.Icon, obj4);
    obj.onPress = callback1;
    tmp3Result2 = closure_4(tmp4(7532).ActionSheetRow, obj);
  }
  items2[1] = tmp3Result2;
  return closure_4(content(7530).ActionSheet, {
    children: closure_5(content(7532).ActionSheetRow.Group, { hasIcons: true, children: items2 }),
  });
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
