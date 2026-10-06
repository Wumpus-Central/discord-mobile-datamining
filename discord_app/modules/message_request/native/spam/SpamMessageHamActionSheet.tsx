// discord_app/modules/message_request/native/spam/SpamMessageHamActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04813_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetCloseButton from "../../../../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useMessageRequestActions from "../../hooks/useMessageRequestActions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, channel, openResult;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3, buttonContainer: obj4, switch: { paddingHorizontal: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_4;
      let first;
      let isAcceptLoading;
      let isOptimisticAccepted;
      let onCancel;
      let tmp10;
      const tmp = channel;
      let obj = channel(onCancel[8]);
      const cResult = obj.c(44);
      channel = channel.channel;
      const onConfirm = channel.onConfirm;
      onCancel = channel.onCancel;
      closure_9();
      const tmp5 = first(react.useState(false), 2);
      first = tmp5[0];
      react = tmp5[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
        cResult[0] = S;
      } else {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
        cResult[1] = tmp9;
      } else {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
        const items = [UserStore];
        cResult[2] = items;
        tmp10 = items;
      } else {
        class S {
          constructor() {
            tmp = onConfirm(onCancel[9]);
            obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            open = tmp.open;
            intl = channel(onCancel[10]).intl;
            obj.content = intl.string(channel(onCancel[10]).t["EDYbS+"]);
            obj.icon = onConfirm(onCancel[11]);
            openResult = open(obj);
            return;
          }
        }
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
      const tmpResult = tmp(onCancel[13]);
      const stateFromStores = tmpResult.useStateFromStores(tmp10, P);
      if (cResult[5] !== stateFromStores) {
        class P {
          constructor() {
            return closure_6.getUser(channel.getRecipientId());
          }
        }
        tmp14[0] = stateFromStores;
        tmp14[1] = S;
        tmp14[2] = tmp9;
        cResult[5] = stateFromStores;
        cResult[6] = tmp14;
      } else {
        class P {
          constructor() {
            return closure_6.getUser(channel.getRecipientId());
          }
        }
      }
      const tmpResult2 = tmp(onCancel[14]);
      const messageRequestActions = tmpResult2.useMessageRequestActions(tmp14);
      const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
      ({ isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
      if (cResult[7] === acceptMessageRequest) {
        class P {
          constructor() {
            return closure_6.getUser(channel.getRecipientId());
          }
        }
      }
      class L {
        constructor() {
          tmp = onConfirm(closure_3);
          tmp2 = acceptMessageRequest(channel.id);
          return;
        }
      }
      cResult[7] = acceptMessageRequest;
      cResult[8] = channel.id;
      cResult[9] = first;
      cResult[10] = onConfirm;
      cResult[11] = L;
    }
  : (arg0) => {
      let Button;
      let _undefined;
      let c5;
      let closure_4;
      let intl;
      let intl2;
      let intl3;
      let isAcceptLoading;
      let isOptimisticAccepted;
      let items1;
      let items2;
      let obj10;
      let obj6;
      let recipientId;
      ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
      let value;
      react = undefined;
      c5 = undefined;
      const tmp = closure_9();
      const tmp2 = value(react.useState(false), 2);
      value = tmp2[0];
      react = tmp2[1];
      let obj = get_initialized;
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require.getRecipientId()));
      const obj2 = useMessageRequestActions;
      const obj3 = {
        user: stateFromStores,
        onError() {
          let intl;
          const obj = {
            key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
            content: intl.string(intl4.t["EDYbS+"]),
            icon: AssetRegistryDefault,
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl4.intl;
          open(obj);
        },
        onAcceptSuccess() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      const messageRequestActions = obj2.useMessageRequestActions(obj3);
      ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
      const isUserProfileLoading = messageRequestActions.isUserProfileLoading;
      const obj4 = {
        onDismiss() {
          dependencyMap();
        },
        children: items1,
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj5 = {
        title: intl.string(intl4.t["9ty6yc"]),
        trailing: closure_7(ActionSheetCloseButton.ActionSheetCloseButton, obj6),
        backgroundColor: tmp.header,
      };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl4.intl;
      obj6 = {
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          dependencyMap();
        },
      };
      items1 = [closure_7(BottomSheetTitleHeader, obj5)];
      const obj7 = { style: tmp.container, children: items2 };
      const obj8 = {
        style: tmp.switch,
        label: intl2.string(intl4.t.ZhGpNQ),
        value,
        switchProps: { renderIosBackground: true },
        onValueChange(arg0) {
          return closure_4(arg0);
        },
      };
      const FormSwitchRow = Form.FormSwitchRow;
      intl2 = intl4.intl;
      items2 = [closure_7(FormSwitchRow, obj8)];
      const obj9 = { style: tmp.buttonContainer, children: closure_7(Button, obj10) };
      obj10 = {
        size: "md",
        onPress() {
          importDefault(first);
          _undefined(require.id);
        },
        text: intl3.string(intl4.t.olZgw5),
        disabled: isAcceptLoading || isUserProfileLoading || isOptimisticAccepted,
        loading: isAcceptLoading,
      };
      Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      if (!isAcceptLoading) {
        isAcceptLoading = isOptimisticAccepted;
      }
      items2[1] = closure_7(c5, obj9);
      items1[1] = closure_8(c5, obj7);
      return closure_8(BottomSheet, obj4);
    };
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default tmp4;
