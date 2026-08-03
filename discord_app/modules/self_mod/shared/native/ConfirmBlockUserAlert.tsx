import noop from "noop";
import { View } from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { LOCATION_CONTEXT_MOBILE } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { header: null, text: null, buttonsContainer: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_4, textAlign: "center" };
let obj1 = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_4, textAlign: "center" };
createCacheKey[2] = { gap: require("Themes").space.PX_12, marginBottom: -require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { gap: require("Themes").space.PX_12, marginBottom: -require("Themes").space.PX_8 };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default function ConfirmBlockUserAlert(userId) {
  let description;
  let onCancel;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  let str = userId.blockButtonVariant;
  let lastChannelMessage;
  let callback;
  let closure_8;
  const tmp = createCacheKey();
  let obj = userId(onCancel[7]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => onBlock.getUser(userId));
  let obj1 = userId(onCancel[8]);
  lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = channelId(onCancel[9]);
  const name = obj2.useName(stateFromStores);
  const items1 = [userId, channelId];
  callback = onClose.useCallback(() => {
    let obj = channelId(onCancel[10]);
    obj = { location: lastChannelMessage };
    obj.blockUser(userId, obj).then(() => {
      const result = outer1_1(outer1_2[11]).showBlockSuccessToast(closure_0, closure_1);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  closure_8 = onClose.useCallback(() => {
    onClose();
    onCancel();
  }, items2);
  const items3 = [onClose, callback, onBlock];
  const items4 = [lastChannelMessage, onClose, callback, onBlockAndReport];
  const callback1 = onClose.useCallback(() => {
    onClose();
    callback();
    onBlock();
  }, items3);
  const callback2 = onClose.useCallback(() => {
    onClose();
    callback();
    const result = userId(onCancel[12]).showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
    if (onBlockAndReport != null) {
      onBlockAndReport();
    }
  }, items4);
  obj = {
    renderConfirmButton() {
      const obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
      const intl = userId(onCancel[15]).intl;
      obj[2] = intl.string(userId(onCancel[15]).t["ETE/oC"]);
      return callback(userId(onCancel[14]).Button, obj);
    },
    children: null
  };
  obj = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  let intl = userId(onCancel[15]).intl;
  obj[3] = intl.format(userId(onCancel[15]).t.x5pOn9, { name });
  const items5 = [callback(userId(onCancel[16]).Text, obj), , ];
  obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (description == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    obj2 = { name: null };
    obj2[0] = name;
    description = intl2.format(tmp2(tmp3[15]).t.pegItC, obj2);
  }
  obj1[2] = description;
  items5[1] = callback(userId(onCancel[16]).Text, obj1);
  const obj3 = { style: tmp.buttonsContainer, children: null };
  const obj4 = { size: "lg", onPress: callback1, text: null, variant: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj4[2] = intl3.string(userId(onCancel[15]).t.l4Emac);
  if (str == null) {
    str = "destructive";
  }
  obj4[3] = str;
  const items6 = [callback(userId(onCancel[14]).Button, obj4), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj5 = { size: "lg", onPress: null, text: null, variant: "secondary" };
    obj5[1] = callback2;
    const intl4 = tmp2(tmp3[15]).intl;
    obj5[2] = intl4.string(tmp2(tmp3[15]).t["39O+8F"]);
    tmp12Result = tmp12(tmp2(tmp3[14]).Button, obj5);
  }
  items6[1] = tmp12Result;
  obj3[1] = items6;
  items5[2] = closure_8(onBlockAndReport, obj3);
  obj[1] = items5;
  return closure_8(channelId(onCancel[13]), obj);
};