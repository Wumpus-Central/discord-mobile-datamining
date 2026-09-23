// === Module 10123: NsfwServerInviteWarningAlert ===

// Module 10123 (NsfwServerInviteWarningAlert)
import useAlertStore from "useAlertStore" /* 5195 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8757 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8759 */;
import noop from "module_19" /* 19 */;

require = fn;
class NsfwServerInviteWarningAlert {
  constructor(arg0) {
    onConfirm = global.onConfirm;
    closure_1 = undefined;
    joins = undefined;
    tmp = onConfirm;
    tmp2 = joins;
    obj = onConfirm(joins[4]);
    dismissModalCallback = obj.useDismissModalCallback();
    closure_1 = dismissModalCallback;
    obj2 = onConfirm(joins[2]);
    isVerifiedTeen = obj2.useIsVerifiedTeen();
    tmp5 = onConfirm(joins[2]);
    if (isVerifiedTeen) {
      obj1 = { description: null, confirmText: null, joins: false, goBackIsPrimary: true };
      intl5 = tmp(tmp2[3]).intl;
      obj1.description = intl5.string(tmp(tmp2[3]).t.dqC1w2);
      intl6 = tmp(tmp2[3]).intl;
      obj1.confirmText = intl6.string(tmp(tmp2[3]).t.FDSSia);
      obj9 = obj1;
    } else if (tmp6) {
      obj8 = { description: null, confirmText: null, joins: true, goBackIsPrimary: false };
      intl3 = tmp(tmp2[3]).intl;
      obj8.description = intl3.string(tmp(tmp2[3]).t.fp3xf5);
      intl4 = tmp(tmp2[3]).intl;
      obj8.confirmText = intl4.string(tmp(tmp2[3]).t.wVq7uo);
      obj9 = obj8;
    } else {
      obj9 = { description: null, confirmText: null, joins: false, goBackIsPrimary: false };
      intl = tmp(tmp2[3]).intl;
      obj9.description = intl.string(tmp(tmp2[3]).t.qiLic6);
      intl2 = tmp(tmp2[3]).intl;
      obj9.confirmText = intl2.string(tmp(tmp2[3]).t.FDSSia);
    }
    joins = obj9.joins;
    goBackIsPrimary = obj9.goBackIsPrimary;
    items = [, , ];
    items[0] = dismissModalCallback;
    items[1] = joins;
    items[2] = onConfirm;
    ({ description, confirmText } = obj9);
    tmp8 = jsx;
    callback = closure_3.useCallback(() => {
      if (joins) {
        onConfirm();
      } else {
        dismissModalCallback();
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
      }
    }, items);
    str = "primary";
    if (goBackIsPrimary) {
      str = "secondary";
    }
    tmp8Result = tmp8(tmp(tmp2[7]).AlertActionButton, { variant: str, text: confirmText, onPress: callback }, "confirm");
    str2 = "secondary";
    if (goBackIsPrimary) {
      str2 = "primary";
    }
    obj10 = { variant: str2, text: null };
    intl7 = tmp(tmp2[3]).intl;
    obj10.text = intl7.string(tmp(tmp2[3]).t["/g10LC"]);
    tmp8Result1 = tmp8(tmp(tmp2[7]).AlertActionButton, obj10, "go-back");
    obj11 = { title: null, content: null, actions: null };
    intl8 = tmp(tmp2[3]).intl;
    obj11.title = intl8.string(tmp(tmp2[3]).t.xi46lg);
    obj11.content = description;
    items1 = [, ];
    if (goBackIsPrimary) {
      items1[0] = tmp8Result1;
      items1[1] = tmp8Result;
      tmp11 = items1;
    } else {
      items1[0] = tmp8Result;
      items1[1] = tmp8Result1;
      tmp11 = items1;
    }
    obj11.actions = tmp11;
    return tmp8(tmp(tmp2[7]).AlertModal, obj11);
  }
}
const jsx = fn(21).jsx;
let c5 = "nsfw-server-invite-warning";
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default NsfwServerInviteWarningAlert;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  ({ onConfirm, onDismiss } = arg0);
  useAlertStore.openAlert(c5, <NsfwServerInviteWarningAlert onConfirm={onConfirm} />, onDismiss);
};