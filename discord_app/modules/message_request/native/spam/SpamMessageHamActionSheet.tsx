// discord_app/modules/message_request/native/spam/SpamMessageHamActionSheet.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetCloseButton from "../../../../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useMessageRequestActions from "../../hooks/useMessageRequestActions.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { header: null, container: null, buttonContainer: null, switch: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[3] = { paddingHorizontal: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginTop: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
  let first;
  let React;
  c5 = undefined;
  const tmp = callback2();
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getUser(recipientId.getRecipientId()));
  obj1 = useMessageRequestActions;
  obj = {
    user: stateFromStores,
    onError() {
      let obj = callback(4163);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1236).intl;
      obj[1] = intl.string(recipientId(1236).t["EDYbS+"]);
      obj[2] = callback(7627);
      obj.open(obj);
    },
    onAcceptSuccess(arg0) {
      callback(4413).hideActionSheet();
    }
  };
  const messageRequestActions = obj1.useMessageRequestActions(obj);
  ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  obj = {
    onDismiss() {
      dependencyMap();
    },
    children: null
  };
  obj1 = { title: null, trailing: null, backgroundColor: null };
  let intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t["9ty6yc"]);
  obj1[1] = callback(ActionSheetCloseButton.ActionSheetCloseButton, {
    onPress() {
      closure_1_1(closure_1_2[12]).hideActionSheet();
      dependencyMap();
    }
  });
  obj1[2] = tmp.header;
  const items1 = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj1), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.switch, label: null, value: null, switchProps: null, onValueChange: null };
  const intl2 = getSystemLocale.intl;
  obj4[1] = intl2.string(getSystemLocale.t.ZhGpNQ);
  obj4[2] = first;
  obj4[3] = { renderIosBackground: true };
  obj4[4] = function onValueChange(arg0) {
    return callback2(arg0);
  };
  const items2 = [callback(Form.FormSwitchRow, obj4), ];
  const obj5 = { style: tmp.buttonContainer, children: null };
  const obj6 = {
    size: "md",
    onPress() {
      callback(first);
      _undefined(recipientId.id);
    },
    text: null,
    disabled: null,
    loading: null
  };
  const intl3 = getSystemLocale.intl;
  obj6[2] = intl3.string(getSystemLocale.t.olZgw5);
  let isUserProfileLoading = isAcceptLoading;
  if (!isAcceptLoading) {
    isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  }
  if (!isUserProfileLoading) {
    isUserProfileLoading = isOptimisticAccepted;
  }
  obj6[3] = isUserProfileLoading;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj6[4] = isAcceptLoading;
  obj5[1] = callback(Button.Button, obj6);
  items2[1] = callback(c5, obj5);
  obj3[1] = items2;
  items1[1] = closure_8(c5, obj3);
  obj[1] = items1;
  return closure_8(Background.BottomSheet, obj);
};