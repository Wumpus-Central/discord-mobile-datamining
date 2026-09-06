// discord_app/modules/message_request/native/spam/SpamMessageHamActionSheet.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import _modDef5597 from "../../../../../_runtime/metro/05597__.js";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetCloseButton from "../../../../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useMessageRequestActions from "../../hooks/useMessageRequestActions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { header: null, container: null, buttonContainer: null, switch: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.header = createStyles;
createStyles.container = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.buttonContainer = { marginTop: nativeDefault.space.PX_24 };
createStyles.switch = { paddingHorizontal: 0 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(recipientId.getRecipientId()));
  let obj1 = useMessageRequestActions;
  obj = {
    user: stateFromStores,
    onError() {
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1114).intl;
      obj.content = intl.string(recipientId(1114).t["EDYbS+"]);
      obj.icon = _modDef5597;
      obj.open(obj);
    },
    onAcceptSuccess() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
  };
  const messageRequestActions = obj1.useMessageRequestActions(obj);
  ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  obj = {
    onDismiss() {
      dependencyMap();
    },
    children: null,
  };
  obj1 = { title: null, trailing: null, backgroundColor: null };
  let intl = util.intl;
  obj1.title = intl.string(util.t["9ty6yc"]);
  obj1.trailing = closure_7(ActionSheetCloseButton.ActionSheetCloseButton, {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      dependencyMap();
    },
  });
  obj1.backgroundColor = tmp.header;
  const items1 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj1)];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.switch, label: null, value: null, switchProps: null, onValueChange: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.ZhGpNQ);
  obj4.value = value;
  obj4.switchProps = { renderIosBackground: true };
  obj4.onValueChange = function onValueChange(arg0) {
    return closure_4(arg0);
  };
  const items2 = [closure_7(Form.FormSwitchRow, obj4)];
  const obj5 = { style: tmp.buttonContainer, children: null };
  const obj6 = {
    size: "md",
    onPress() {
      importDefault(first);
      _undefined(recipientId.id);
    },
    text: null,
    disabled: null,
    loading: null,
  };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.olZgw5);
  let isUserProfileLoading = isAcceptLoading;
  if (!isAcceptLoading) {
    isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  }
  if (!isUserProfileLoading) {
    isUserProfileLoading = isOptimisticAccepted;
  }
  obj6.disabled = isUserProfileLoading;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj6.loading = isAcceptLoading;
  obj5.children = closure_7(components_Button_Button.Button, obj6);
  items2[1] = closure_7(c5, obj5);
  obj3.children = items2;
  items1[1] = closure_8(c5, obj3);
  obj.children = items1;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj);
}
