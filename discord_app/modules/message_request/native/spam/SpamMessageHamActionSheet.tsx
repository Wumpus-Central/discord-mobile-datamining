// === Module 11659: SpamMessageRequestHamActionSheet ===

// Module 11659 (SpamMessageRequestHamActionSheet)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "Button";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { header: null, container: null, buttonContainer: null, switch: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_16 };
let obj1 = { marginTop: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_24 };
createCacheKey[3] = { paddingHorizontal: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginTop: require("Themes").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  let c5;
  let dependencyMap;
  let importDefault;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let require;
  ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
  let first;
  let React;
  c5 = undefined;
  const tmp = createCacheKey();
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(recipientId.getRecipientId()));
  let obj1 = require(11654) /* useMessageRequestActions */;
  obj = {
    user: stateFromStores,
    onError() {
      let obj = callback(3956);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = recipientId(1236).intl;
      obj[1] = intl.string(recipientId(1236).t["EDYbS+"]);
      obj[2] = callback(9354);
      obj.open(obj);
    },
    onAcceptSuccess(arg0) {
      callback(4223).hideActionSheet();
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
  let intl = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl.string(require(1236) /* getSystemLocale */.t["9ty6yc"]);
  obj1[1] = callback(require(5618) /* ActionSheetCloseButton */.ActionSheetCloseButton, {
    onPress() {
      outer1_1(outer1_2[12]).hideActionSheet();
      dependencyMap();
    }
  });
  obj1[2] = tmp.header;
  const items1 = [callback(require(5308) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj1), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.switch, label: null, value: null, switchProps: null, onValueChange: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl2.string(require(1236) /* getSystemLocale */.t.ZhGpNQ);
  obj4[2] = first;
  obj4[3] = { renderIosBackground: true };
  obj4[4] = function onValueChange(arg0) {
    return callback2(arg0);
  };
  const items2 = [callback(require(7765) /* Form */.FormSwitchRow, obj4), ];
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
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj6[2] = intl3.string(require(1236) /* getSystemLocale */.t.olZgw5);
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
  obj5[1] = callback(require(4666) /* Button */.Button, obj6);
  items2[1] = callback(c5, obj5);
  obj3[1] = items2;
  items1[1] = closure_8(c5, obj3);
  obj[1] = items1;
  return closure_8(require(5309) /* Background */.BottomSheet, obj);
};