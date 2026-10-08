// === Module 12182: SpamMessageHamActionSheet ===

// Module 12182 (SpamMessageHamActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5007 from "module_5007" /* 5007 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6828 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 6880 */;
import Form from "Form" /* 8555 */;
import useMessageRequestActions from "useMessageRequestActions" /* 12177 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, container: null, buttonContainer: null, switch: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.container = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_24 };
obj2.switch = { paddingHorizontal: 0 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SpamMessageRequestHamActionSheet(channel) {
  const cResult = channel(onCancel[8]).c(44);
  channel = channel.channel;
  const onConfirm = channel.onConfirm;
  onCancel = channel.onCancel;
  closure_9();
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleRequestError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(onCancel[10]).intl;
      obj2.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
      obj2.icon = onConfirm(onCancel[11]);
      onConfirm(onCancel[9]).open(obj2);
    }
    cResult[0] = handleRequestError;
    let first1 = handleRequestError;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function handleAcceptSuccess() {
      onConfirm(onCancel[12]).hideActionSheet();
    }
    cResult[1] = handleAcceptSuccess;
    let tmp8 = handleAcceptSuccess;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class P {
      constructor() {
        return closure_6.getUser(channel.getRecipientId());
      }
    }
    cResult[3] = channel;
    cResult[4] = P;
  } else {
    class P {
      constructor() {
        return closure_6.getUser(channel.getRecipientId());
      }
    }
  }
  const obj = channel(onCancel[8]);
  const stateFromStores = channel(onCancel[13]).useStateFromStores(tmp9, P);
  if (cResult[5] !== stateFromStores) {
    class P {
      constructor() {
        return closure_6.getUser(channel.getRecipientId());
      }
    }
    tmp14[0] = stateFromStores;
    tmp14[1] = first1;
    tmp14[2] = tmp8;
    cResult[5] = stateFromStores;
    cResult[6] = tmp14;
  } else {
    class P {
      constructor() {
        return closure_6.getUser(channel.getRecipientId());
      }
    }
  }
  const tmpResult = channel(onCancel[13]);
  const messageRequestActions = channel(onCancel[14]).useMessageRequestActions(tmp14);
  const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
  ({ isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  if (cResult[7] === acceptMessageRequest) {
    class P {
      constructor() {
        return closure_6.getUser(channel.getRecipientId());
      }
    }
  }
  function handleAccept() {
    onConfirm(first);
    acceptMessageRequest(channel.id);
  }
  cResult[7] = acceptMessageRequest;
  cResult[8] = channel.id;
  cResult[9] = first;
  cResult[10] = onConfirm;
  cResult[11] = handleAccept;
  const tmpResult2 = channel(onCancel[14]);
}) : (function SpamMessageRequestHamActionSheet(arg0) {
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
    onError: function handleRequestError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1126).intl;
      obj2.content = intl.string(recipientId(1126).t["EDYbS+"]);
      obj2.icon = _modDef5007;
      ToastActionCreatorsDefault.open(obj2);
    },
    onAcceptSuccess: function handleAcceptSuccess() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  });
  ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  const obj4 = {
    onDismiss: function handleDismiss() {
      dependencyMap();
    },
    children: null
  };
  const obj5 = { title: null, trailing: null, backgroundColor: null };
  let intl = util.intl;
  obj5.title = intl.string(util.t["9ty6yc"]);
  obj5.trailing = closure_7(ActionSheetCloseButton.ActionSheetCloseButton, {
    onPress: function handleClose() {
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
    onPress: function handleAccept() {
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
});