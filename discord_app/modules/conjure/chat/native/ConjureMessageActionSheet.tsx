// discord_app/modules/conjure/chat/native/ConjureMessageActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function ConjureMessageActionSheet(content) {
  content = content.content;
  const userId = content.userId;
  const onQueuedAction = content.onQueuedAction;
  const onRestoreVersion = content.onRestoreVersion;
  const onViewTrace = content.onViewTrace;
  const items = [content];
  const items1 = [userId];
  const callback = onRestoreVersion.useCallback(() => {
    ClipboardUtils.copy(content);
    ActionSheetActionCreatorsDefault.hideActionSheet(c7);
    const obj4 = { text: null, icon: null };
    const intl = util.intl;
    obj4.text = intl.string(util.t.mGZ66D);
    obj4.icon = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open("CONJURE_MESSAGE_COPIED", obj4);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = onRestoreVersion.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const items3 = [onViewTrace];
  const callback2 = onRestoreVersion.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(c7);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  const callback3 = onRestoreVersion.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(c7);
    if (onViewTrace != null) {
      onViewTrace();
    }
  }, items3);
  let tmp8Result = null;
  if (null != onQueuedAction) {
    let obj = { children: null };
    let obj2 = { label: null, icon: null, onPress: null };
    let intl = tmp6(tmp7[6]).intl;
    obj2.label = intl.string(userId(tmp7[10]).CXtLD2);
    const obj3 = { IconComponent: tmp6(tmp7[11]).DoubleChevronSmallRightIcon };
    obj2.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj3);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(c7);
      if (onQueuedAction != null) {
        tmp2("steer");
      }
    };
    const items4 = [tmp5(tmp6(tmp7[9]).ActionSheetRow, obj2)];
    let obj4 = { label: null, icon: null, onPress: null };
    const intl2 = tmp6(tmp7[6]).intl;
    obj4.label = intl2.string(userId(tmp7[10]).urZwpN);
    const obj5 = { IconComponent: tmp6(tmp7[12]).XSmallIcon };
    obj4.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj5);
    obj4.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(c7);
      if (onQueuedAction != null) {
        tmp2("cancel");
      }
    };
    items4[1] = tmp5(tmp6(tmp7[9]).ActionSheetRow, obj4);
    obj.children = items4;
    tmp8Result = closure_6(closure_5, obj);
  }
  const items5 = [tmp8Result, , , ,];
  let tmp5Result = null;
  if ("" !== content) {
    const obj6 = { label: null, icon: null, onPress: null };
    const intl5 = tmp6(tmp7[6]).intl;
    obj6.label = intl5.string(tmp6(tmp7[6]).t.JrGD7E);
    const obj7 = { IconComponent: tmp6(tmp7[7]).CopyIcon };
    obj6.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj7);
    obj6.onPress = callback;
    tmp5Result = tmp5(tmp6(tmp7[9]).ActionSheetRow, obj6);
  }
  items5[1] = tmp5Result;
  let tmp5Result4 = null;
  if (null != userId) {
    const obj8 = { label: null, icon: null, onPress: null };
    const intl3 = tmp6(tmp7[6]).intl;
    obj8.label = intl3.string(tmp6(tmp7[6]).t.iXAna6);
    const obj9 = { IconComponent: tmp6(tmp7[13]).UserIcon };
    obj8.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj9);
    obj8.onPress = callback1;
    tmp5Result4 = tmp5(tmp6(tmp7[9]).ActionSheetRow, obj8);
  }
  items5[2] = tmp5Result4;
  let tmp5Result5 = null;
  if (null != onRestoreVersion) {
    const obj10 = { label: null, icon: null, onPress: null };
    const intl4 = tmp6(tmp7[6]).intl;
    obj10.label = intl4.string(userId(tmp7[10]).H8Jfhu);
    const obj11 = { IconComponent: tmp6(tmp7[14]).UndoIcon };
    obj10.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj11);
    obj10.onPress = callback2;
    tmp5Result5 = tmp5(tmp6(tmp7[9]).ActionSheetRow, obj10);
  }
  items5[3] = tmp5Result5;
  let tmp5Result6 = null;
  if (null != onViewTrace) {
    const obj12 = { label: "View Trace", icon: null, onPress: null };
    const obj13 = { IconComponent: tmp6(tmp7[15]).BugIcon };
    obj12.icon = tmp5(tmp6(tmp7[9]).ActionSheetRow.Icon, obj13);
    obj12.onPress = callback3;
    tmp5Result6 = tmp5(tmp6(tmp7[9]).ActionSheetRow, obj12);
  }
  items5[4] = tmp5Result6;
  return onViewTrace(content(onQueuedAction[8]).ActionSheet, {
    children: closure_6(content(onQueuedAction[9]).ActionSheetRow.Group, { hasIcons: true, children: items5 }),
  });
}
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "conjure-message-actions";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageActionSheet.tsx");

export const CONJURE_MESSAGE_SHEET_KEY = "conjure-message-actions";
export function openMessageAuthorProfile(id) {
  showUserProfileActionSheetDefault({ userId: id });
}
export function showConjureMessageActions(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = React4(ConjureMessageActionSheet, {});
  obj2.key = key;
  ActionSheetActionCreators.showActionSheet(obj2);
}
