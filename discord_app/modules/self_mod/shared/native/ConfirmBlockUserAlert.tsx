// === Module 10920: ConfirmBlockUserAlert ===

// Module 10920 (ConfirmBlockUserAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import ReportModals from "ReportModals" /* 8081 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9184 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const LOCATION_CONTEXT_MOBILE = fn(10892).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { header: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" }, text: null, buttonsContainer: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
obj2.text = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
obj2.buttonsContainer = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default function ConfirmBlockUserAlert(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  let str = userId.blockButtonVariant;
  const tmp = closure_9();
  const items = [onBlock];
  const stateFromStores = userId(onCancel[7]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj = userId(onCancel[7]);
  const lastChannelMessage = userId(onCancel[8]).useLastChannelMessage(channelId);
  let obj2 = userId(onCancel[8]);
  const name = channelId(onCancel[9]).useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    const obj2 = { location: LOCATION_CONTEXT_MOBILE };
    RelationshipActionCreatorsDefault.blockUser(userId, { location: LOCATION_CONTEXT_MOBILE }).then(() => {
      const result = channelId(onCancel[11]).showBlockSuccessToast(userId, closure_1_1);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  const onPress = onClose.useCallback(() => {
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
    const result = ReportModals.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
    if (onBlockAndReport != null) {
      onBlockAndReport();
    }
  }, items4);
  const obj4 = {
    renderConfirmButton() {
      const obj = { size: "lg", onPress, text: null, variant: "secondary" };
      const intl = util.intl;
      obj.text = intl.string(util.t["ETE/oC"]);
      return React5(components_Button_Button.Button, obj);
    },
    children: null
  };
  const obj3 = channelId(onCancel[9]);
  const obj5 = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  let intl = userId(onCancel[15]).intl;
  obj5.children = intl.format(userId(onCancel[15]).t.x5pOn9, { name });
  const items5 = [callback(userId(onCancel[16]).Text, obj5), , ];
  const obj6 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (description == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    const obj7 = { name };
    description = intl2.format(tmp2(tmp3[15]).t.pegItC, obj7);
  }
  obj6.children = description;
  items5[1] = callback(userId(onCancel[16]).Text, obj6);
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const obj9 = { size: "lg", onPress: callback1, text: null, variant: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj9.text = intl3.string(userId(onCancel[15]).t.l4Emac);
  if (str == null) {
    str = "destructive";
  }
  obj9.variant = str;
  const items6 = [callback(userId(onCancel[14]).Button, obj9), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj10 = { size: "lg", onPress: callback2, text: null, variant: "secondary" };
    const intl4 = tmp2(tmp3[15]).intl;
    obj10.text = intl4.string(tmp2(tmp3[15]).t["39O+8F"]);
    tmp12Result = tmp12(tmp2(tmp3[14]).Button, obj10);
  }
  items6[1] = tmp12Result;
  obj8.children = items6;
  items5[2] = onPress(onBlockAndReport, obj8);
  obj4.children = items5;
  return onPress(channelId(onCancel[13]), obj4);
};