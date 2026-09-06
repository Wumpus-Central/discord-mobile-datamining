// discord_app/modules/multi_account/native/AccountSwitchingSpinnerModal.tsx
import util from "../../../intl/index.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_4().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = closure_0(closure_1[4]).intl;
    obj.accessibilityLabel = intl.string(closure_0(closure_1[4]).t.n8qMH0);
    obj.children = jsx(closure_0(closure_1[5]).ActivityIndicator, {});
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
const React4 = createStyles.createStyles({
  switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});
createStyles = { animation: fn(1093).ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = createStyles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
