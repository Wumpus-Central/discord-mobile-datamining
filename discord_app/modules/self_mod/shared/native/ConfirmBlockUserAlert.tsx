// discord_app/modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const LOCATION_CONTEXT_MOBILE = fn(10361).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { header: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" }, text: null, buttonsContainer: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
obj2.text = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
obj2.buttonsContainer = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmBlockUserAlert(userId) {
  const cResult = userId(onCancel[8]).c(47);
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onBlock];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
    cResult[1] = userId;
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
  }
  let obj = userId(onCancel[8]);
  const stateFromStores = userId(onCancel[9]).useStateFromStores(first, C);
  const tmpResult = userId(onCancel[9]);
  const lastChannelMessage = userId(onCancel[10]).useLastChannelMessage(channelId);
  const tmpResult2 = userId(onCancel[10]);
  const name = channelId(onCancel[11]).useName(stateFromStores);
  if (cResult[3] === channelId) {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
    if (cResult[6] === onCancel) {
      class C {
        constructor() {
          return closure_5.getUser(userId);
        }
      }
      const onPress = S;
      if (cResult[9] === E) {
        class C {
          constructor() {
            return closure_5.getUser(userId);
          }
        }
      }
      class M {
        constructor() {
          tmp = onClose();
          tmp2 = closure_7();
          tmp3 = onBlock();
          return;
        }
      }
      cResult[9] = E;
      cResult[10] = onBlock;
      cResult[11] = onClose;
      cResult[12] = M;
    }
    class S {
      constructor() {
        tmp = onClose();
        tmp2 = onCancel();
        return;
      }
    }
    cResult[6] = onCancel;
    cResult[7] = onClose;
    cResult[8] = S;
  }
  class E {
    constructor() {
      obj = closure_1(closure_2[12]);
      obj1 = { location: LOCATION_CONTEXT_MOBILE };
      blockUserResult = obj.blockUser(userId, obj1);
      nextPromise = blockUserResult.then(() => { ... });
      return;
    }
  }
  cResult[3] = channelId;
  cResult[4] = userId;
  cResult[5] = E;
  const obj4 = channelId(onCancel[11]);
}) : (function ConfirmBlockUserAlert(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  let str = userId.blockButtonVariant;
  const tmp = closure_9();
  const items = [onBlock];
  const stateFromStores = userId(onCancel[9]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj = userId(onCancel[9]);
  const lastChannelMessage = userId(onCancel[10]).useLastChannelMessage(channelId);
  let obj2 = userId(onCancel[10]);
  const name = channelId(onCancel[11]).useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    const obj2 = { location: LOCATION_CONTEXT_MOBILE };
    RelationshipActionCreatorsDefault.blockUser(userId, { location: LOCATION_CONTEXT_MOBILE }).then(() => {
      const result = channelId(onCancel[13]).showBlockSuccessToast(userId, closure_1_1);
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
  const obj3 = channelId(onCancel[11]);
  const obj5 = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  let intl = userId(onCancel[16]).intl;
  obj5.children = intl.format(userId(onCancel[16]).t.x5pOn9, { name });
  const items5 = [callback(userId(onCancel[17]).Text, obj5), , ];
  const obj6 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (description == null) {
    const intl2 = tmp2(tmp3[16]).intl;
    const obj7 = { name };
    description = intl2.format(tmp2(tmp3[16]).t.pegItC, obj7);
  }
  obj6.children = description;
  items5[1] = callback(userId(onCancel[17]).Text, obj6);
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const obj9 = { size: "lg", onPress: callback1, text: null, variant: null };
  const intl3 = tmp2(tmp3[16]).intl;
  obj9.text = intl3.string(userId(onCancel[16]).t.l4Emac);
  if (str == null) {
    str = "destructive";
  }
  obj9.variant = str;
  const items6 = [callback(userId(onCancel[15]).Button, obj9), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj10 = { size: "lg", onPress: callback2, text: null, variant: "secondary" };
    const intl4 = tmp2(tmp3[16]).intl;
    obj10.text = intl4.string(tmp2(tmp3[16]).t["39O+8F"]);
    tmp12Result = tmp12(tmp2(tmp3[15]).Button, obj10);
  }
  items6[1] = tmp12Result;
  obj8.children = items6;
  items5[2] = onPress(onBlockAndReport, obj8);
  obj4.children = items5;
  return onPress(channelId(onCancel[18]), obj4);
});