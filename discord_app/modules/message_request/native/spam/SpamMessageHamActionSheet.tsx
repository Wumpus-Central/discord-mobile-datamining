// === Module 12796: SpamMessageHamActionSheet ===

// Module 12796 (SpamMessageHamActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import _modDef5902 from "module_5902" /* 5902 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7482 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7483 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7531 */;
import Form from "Form" /* 8951 */;
import useMessageRequestActions from "useMessageRequestActions" /* 12791 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, container: null, buttonContainer: null, switch: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.container = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_24 };
obj2.switch = { paddingHorizontal: 0 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
  value = undefined;
  noop = undefined;
  c5 = undefined;
  const tmp = closure_9();
  const tmp2 = value(noop.useState(false), 2);
  value = tmp2[0];
  noop = tmp2[1];
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(recipientId.getRecipientId()));
  const messageRequestActions = useMessageRequestActions.useMessageRequestActions({
    user: stateFromStores,
    onError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1115).intl;
      obj2.content = intl.string(recipientId(1115).t["EDYbS+"]);
      obj2.icon = _modDef5902;
      ToastActionCreatorsDefault.open(obj2);
    },
    onAcceptSuccess() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  });
  ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  const obj4 = {
    onDismiss() {
      dependencyMap();
    },
    children: null
  };
  const obj5 = { title: null, trailing: null, backgroundColor: null };
  let intl = util.intl;
  obj5.title = intl.string(util.t["9ty6yc"]);
  obj5.trailing = closure_7(ActionSheetCloseButton.ActionSheetCloseButton, {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      dependencyMap();
    }
  });
  obj5.backgroundColor = tmp.header;
  const items1 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj5), ];
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.switch, label: null, value: null, switchProps: null, onValueChange: null };
  const intl2 = util.intl;
  obj8.label = intl2.string(util.t.ZhGpNQ);
  obj8.value = value;
  obj8.switchProps = { renderIosBackground: true };
  obj8.onValueChange = function onValueChange(arg0) {
    return closure_4(arg0);
  };
  const items2 = [closure_7(Form.FormSwitchRow, obj8), ];
  const obj9 = { style: tmp.buttonContainer, children: null };
  const obj10 = {
    size: "md",
    onPress() {
      importDefault(first);
      _undefined(recipientId.id);
    },
    text: null,
    disabled: null,
    loading: null
  };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.olZgw5);
  let isUserProfileLoading = isAcceptLoading;
  if (!isAcceptLoading) {
    isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  }
  if (!isUserProfileLoading) {
    isUserProfileLoading = isOptimisticAccepted;
  }
  obj10.disabled = isUserProfileLoading;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj10.loading = isAcceptLoading;
  obj9.children = closure_7(components_Button_Button.Button, obj10);
  items2[1] = closure_7(c5, obj9);
  obj7.children = items2;
  items1[1] = closure_8(c5, obj7);
  obj4.children = items1;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj4);
};