// discord_app/modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class NsfwServerInviteWarningAlert {
  constructor(arg0) {
    onConfirm = global.onConfirm;
    closure_1 = undefined;
    confirm = undefined;
    tmp = onConfirm;
    tmp2 = confirm;
    obj = onConfirm(confirm[2]);
    dismissModalCallback = obj.useDismissModalCallback();
    closure_1 = dismissModalCallback;
    obj2 = onConfirm(confirm[3]);
    obj3 = onConfirm(confirm[3]);
    nsfwServerInviteWarningVariant = obj2.getNsfwServerInviteWarningVariant(obj3.useGatedAgeGroup());
    _confirm = nsfwServerInviteWarningVariant.confirm;
    confirm = _confirm;
    goBackIsPrimary = nsfwServerInviteWarningVariant.goBackIsPrimary;
    items = [, ,];
    items[0] = _confirm.joins;
    items[1] = dismissModalCallback;
    items[2] = onConfirm;
    tmp6 = jsx;
    callback = closure_3.useCallback(() => {
      if (_confirm.joins) {
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
    obj1 = { variant: str, text: _confirm.text, onPress: callback };
    tmp6Result = tmp6(onConfirm(confirm[6]).AlertActionButton, obj1, "confirm");
    str2 = "secondary";
    if (goBackIsPrimary) {
      str2 = "primary";
    }
    obj7 = { variant: str2, text: null };
    intl = tmp(tmp2[7]).intl;
    obj7.text = intl.string(tmp(tmp2[7]).t["/g10LC"]);
    tmp6Result1 = tmp6(tmp(tmp2[6]).AlertActionButton, obj7, "go-back");
    obj8 = { title: null, content: null, actions: null };
    intl2 = tmp(tmp2[7]).intl;
    obj8.title = intl2.string(tmp(tmp2[7]).t.xi46lg);
    obj8.content = nsfwServerInviteWarningVariant.description;
    items1 = [,];
    if (goBackIsPrimary) {
      items1[0] = tmp6Result1;
      items1[1] = tmp6Result;
      tmp9 = items1;
    } else {
      items1[0] = tmp6Result;
      items1[1] = tmp6Result1;
      tmp9 = items1;
    }
    obj8.actions = tmp9;
    return tmp6(tmp(tmp2[6]).AlertModal, obj8);
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
