// discord_app/modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const LOCATION_CONTEXT_MOBILE = fn(11363).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { header: null, text: null, buttonsContainer: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
createStyles.header = createStyles;
createStyles.text = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_4,
  textAlign: "center",
};
let obj1 = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_4,
  textAlign: "center",
};
createStyles.buttonsContainer = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = userId(onCancel[7]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj1 = userId(onCancel[8]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = channelId(onCancel[9]);
  const name = obj2.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    const obj = { location: LOCATION_CONTEXT_MOBILE };
    obj.blockUser(userId, obj).then(() => {
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
  obj = {
    renderConfirmButton() {
      const obj = { size: "lg", onPress, text: null, variant: "secondary" };
      const intl = util.intl;
      obj.text = intl.string(util.t["ETE/oC"]);
      return React5(components_Button_Button.Button, obj);
    },
    children: null,
  };
  obj = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  let intl = userId(onCancel[15]).intl;
  obj.children = intl.format(userId(onCancel[15]).t.x5pOn9, { name });
  const items5 = [callback(userId(onCancel[16]).Text, obj), ,];
  obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (description == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    obj2 = { name };
    description = intl2.format(tmp2(tmp3[15]).t.pegItC, obj2);
  }
  obj1.children = description;
  items5[1] = callback(userId(onCancel[16]).Text, obj1);
  const obj3 = { style: tmp.buttonsContainer, children: null };
  const obj4 = { size: "lg", onPress: callback1, text: null, variant: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj4.text = intl3.string(userId(onCancel[15]).t.l4Emac);
  if (str == null) {
    str = "destructive";
  }
  obj4.variant = str;
  const items6 = [callback(userId(onCancel[14]).Button, obj4)];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj5 = { size: "lg", onPress: callback2, text: null, variant: "secondary" };
    const intl4 = tmp2(tmp3[15]).intl;
    obj5.text = intl4.string(tmp2(tmp3[15]).t["39O+8F"]);
    tmp12Result = tmp12(tmp2(tmp3[14]).Button, obj5);
  }
  items6[1] = tmp12Result;
  obj3.children = items6;
  items5[2] = onPress(onBlockAndReport, obj3);
  obj.children = items5;
  return onPress(channelId(onCancel[13]), obj);
}
