// discord_app/modules/message_request/native/spam/SpamMessageHamActionSheet.tsx
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7176 */;
import Form from "Form" /* 8083 */;
import useMessageRequestActions from "useMessageRequestActions" /* 11610 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
      let obj = callback(4094);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1236).intl;
      obj[1] = intl.string(recipientId(1236).t["EDYbS+"]);
      obj[2] = callback(8555);
      obj.open(obj);
    },
    onAcceptSuccess(arg0) {
      callback(4342).hideActionSheet();
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